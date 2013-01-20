var Signature = {
	getStarted : function() {
		return this.options.started;
	},
	setStarted : function(st) {
		this.options.started = st;
	},
	getRawData : function() {
		return this.options.rawData;
	},	
	getSignature : function() {
		return this.options.rawData.join(",");
	},
	getStrokeStyle : function(el) {
		return el.css("color") || this.options.color;
	},	
	getLineWidth : function(el) {
		return el.css("lineWidth") || this.options.lineWidth;
	},
	clearSignature : function() {
		this.options.rawData = [];
		var canvas = this.element.next();
		var context = canvas[0].getContext("2d");
		context.clearRect(0, 0, canvas[0].width, canvas[0].height);
		context.beginPath();		
	},		
	drawSignature : function(context, data) {
		var i = 0, j;
		var p;
		while(true) {
			while (i < data.length && data[i] === "-1x-1") {
				i++;
			}	
			if (i >= data.length) break;
			context.beginPath();
			p = data[i].split("x");
			context.moveTo(p[0], p[1]);
			i++;
			for(j = i; j < data.length; j++) {
				if (data[j] === "-1x-1") {
					i = j;
					break;
				}
				p = data[j].split("x");
				context.lineTo(p[0], p[1]);
				context.stroke();
			}
			context.closePath();
		}
	},	
	_getTouchEvent : function(ev) {
		var event = window.event.targetTouches[0];
		if (!event) {
			event = ev;
		}
		return event;
	},
    _getCanvasLocalCoordinates : function(canvas, pageX, pageY) {
		// Get the position of the canvas.
		var position = canvas.offset();
		 
		// Translate the X/Y to the canvas element.
		return({
			x: (pageX - position.left),
			y: (pageY - position.top)
		});    
    },	
	_handleCanvasEvent : function(ev) {
	    var lastPos;
	    if (ev.offsetX || ev.offsetX === 0) { // Opera
	        lastPos = {
	            x : ev.offsetX,
	            y : ev.offsetY
	        };	
	    } else if (ev.layerX || ev.layerX === 0) { // Firefox
	        lastPos = {
	            x : ev.layerX,
	            y : ev.layerY
	        };	
	    } 
	    var context = this.getContext("2d");
	    var canvas = $(this);
		var prevEl = canvas.prev();
	    var sigObj = $.data(prevEl[0], "signature");
		var raw = sigObj.getRawData();
		var event;		
	    switch(ev.type) {
	    case "touchstart":
	        event = sigObj._getTouchEvent(ev);
	        lastPos = sigObj._getCanvasLocalCoordinates(canvas, event.pageX, event.pageY);
	    case "mousedown":
	        context.beginPath();
	        context.moveTo(lastPos.x, lastPos.y);
	        sigObj.setStarted(true);	 
			raw.push("-1x-1");      
			raw.push("" + lastPos.x + "x" + lastPos.y + "");
	        break;
	    case "touchmove":	  
	        event = sigObj._getTouchEvent(ev);
	        lastPos = sigObj._getCanvasLocalCoordinates(canvas, event.pageX, event.pageY);
	    case "mousemove":
	        if (sigObj.getStarted()) {
				context.lineTo(lastPos.x, lastPos.y);
				raw.push("" + lastPos.x + "x" + lastPos.y + "");
				context.stroke();
		    }	    	
	    	break;
	    case "touchend":
	        event = sigObj._getTouchEvent(ev);
	        lastPos = sigObj._getCanvasLocalCoordinates(canvas, event.pageX, event.pageY);
	    case "mouseup":
	        if (sigObj.getStarted()) {
			    if (lastPos.x > 0 && lastPos.y > 0) {
					context.lineTo(lastPos.x, lastPos.y);
					raw.push("" + lastPos.x + "x" + lastPos.y + "");
					context.stroke();
			    }
				sigObj.setStarted(false);
				context.closePath();
				prevEl.attr("value", sigObj.getSignature());
			}
	    	break;
	    }
	    return false;
	},
	_create: function() {	
		var el = this.element;	
		var canvas = $("<canvas></canvas>").insertAfter(el);		
	    // Attach the mousedown, mousemove and mouseup event listeners.
	    canvas.bind('mousedown', this._handleCanvasEvent);
	    canvas.bind('mousemove', this._handleCanvasEvent);
	    canvas.bind('mouseup', this._handleCanvasEvent);
	    canvas.bind('touchstart', this._handleCanvasEvent);
	    canvas.bind('touchmove', this._handleCanvasEvent);
	    canvas.bind('touchend', this._handleCanvasEvent);
	    var theme = this.options.theme;
	    if (!theme) {
			var themedParent = this.element.closest("[class*='ui-bar-'],[class*='ui-body-']"); 
			theme = themedParent.length ?
					/ui-(bar|body)-([a-z])/.exec( themedParent.attr("class") )[2] :
                    this.element.closest('div[data-role="page"]').attr('data-theme');
	    }
	    
		canvas.addClass("signature ui-corner-all ui-shadow-inset ui-body-" + theme);
		
		var context = canvas[0].getContext("2d");
		context.strokeStyle = this.getStrokeStyle(canvas);
		context.lineWidth = this.getLineWidth(canvas);		
		
		// find hosting page
		var parent = el.parent();
		var attr;
		while(parent) {
			attr = parent.attr("data-role");
			if (attr && attr === "page") {
				break;
			} else {
				parent = parent.parent();
			}
		}
		// add listener to redraw signature when necessary
		var that = this;
		$("div").live("pageshow",function(event, ui){ 
			var pageId = $(event.currentTarget).attr("id");			
			if (parent.attr("id") === pageId) {
				var sig = that.options.signature;
				sig = sig || that.element.attr("value");		
				if (sig) {
					that.clearSignature();
					that.options.rawData = sig.split(",");				
					that.drawSignature(context, that.getRawData());
				} 				
			}
		});
	},			
	destroy: function() {	
		var canvas = this.element.next();
		
	    canvas.unbind('mousedown');
	    canvas.unbind('mousemove');
	    canvas.unbind('mouseup');
	    canvas.unbind('touchstart');
	    canvas.unbind('touchmove');
	    canvas.unbind('touchend');
		
		canvas.remove();
	},	
	options : {
		theme: null,	
		color: "black",
		backgroundColor: "white",
		lineWidth: 1,
		rawData:[],
		signature: ""
	}
};

$.widget("sy.signature", Signature); // create the widget
