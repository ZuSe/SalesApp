$.widget("sy.syListview", {
    _create:function() {
       this.iscroller = null;
    
       if ( this.options.showViewHeader && ! this.options.createHeaderLater ){
            this._createHeader();
            if ( ! isIOS()){
                this.iscroller = new iScroll ();
            }
       }
       var self = this;
       this.element.listview = $('<ul class="listview" id="listview_'+this.element.attr('id') + '" data-role="none"  data-inset="' + this.options.inset + '" >');
       this.element.append( this.element.listview );
 
       UIFrameResizeHandlers.push( function( ) {  
    	   self.orientationChanged();
       });
    },
    
    orientationChanged:function() {
    	if ( (this.element.listview.height() > 0 )  ) {
    		if (  isAndroid())
    		{
    			 this.updateOnVisible(this.element.closest('div[data-role="page"]').attr('id') , true );
    		}
    		
    		this.orientation = window.orientation;
    		var fields =$.mobile.activePage.find(".lv_line_field" );
    		var j;
    		for( j=0;j < fields.length; j++ ) {
    			var fw = $( fields[j]).attr('field_width');
    			var lineW =   window.innerWidth -20  - 30-10 - 40 ;//20 for margins,jquery mobile 1.0a4.1 added 15px padding to content. 10px for text padding
            	var ww=  parseInt(lineW) * parseInt(fw) /100;
               $( fields[j]).css('width',ww  );
           }
    	
    	}
    },
    
    updateOnVisible : function( params ) {
    	if ( this.iscroller == null ) {
    		return;
    	}
  
    	if ( params[1] == 'true'){
    		 this.iscroller.showPage(params[0], false );
    	}else {
              this.iscroller.hidePage(params[0]);
       }
    },
      
    updateUIFromWorkFlowMessage:function( params ) {
    	
    	
    	 if ( this.options.showViewHeader && this.options.createHeaderLater ) {
         	this._createHeader();
             if ( ! isIOS()){
                 this.iscroller = new iScroll ();
             }
         }
    	
        var id = this.element[0].getAttribute('id');
        var data  = params[0].getData( id );
        
        if (!data) {
            data = new MessageValue();
            data.setType("LIST");
            data.setKey(id);
            data.setValue(new Array(0));
            params[0].add(id, data);
        }
        var dataValue = data.value;
                     
        var wrapData = this.element[0].getAttribute('wrap_data');
        wrapData = wrapData != null && wrapData === "true"; 

        var fields = this.options.fields;
        var lines = this.options.lines;
     
        var cellstr = "";
             
        this.element.listview[0].innerHTML = "";
        
        var pixelRatio2 = "";
        if ( window.devicePixelRatio && window.devicePixelRatio >= 2 ) {
            pixelRatio2 =" ui-icon-arrow-r-pixelratio-2";
        }

        var numValues = dataValue.length;
        var pageTheme = this.element.closest('div[data-role="page"]').attr('data-theme');
        for (var valuesIdx = 0; valuesIdx < numValues; valuesIdx++) { //for each values in a list
            var listValues = dataValue[valuesIdx];
            if (listValues.getState() === "delete") {
                continue;
            }            
                  
            var test =valuesIdx/2 -  Math.round(valuesIdx/2 );
            var  setAltClr =  test < 0  && this.options. alternateColor.length > 0;
            var alterClr =  this.element.attr('screen') + "_defaultColor";  
            if ( setAltClr ) {
                alterClr = this.element.attr('screen') + "_alternateColor";
            }
            
            cellstr += '<li class="'+ alterClr +' ui-btn disable_hover ui-btn-icon-right ui-li ui-btn-up-' + pageTheme + ' id="'+ valuesIdx + '">';
            cellstr += '<div class="ui-btn-inner">';
            cellstr += '<div class="ui-btn-text">';
            if ( this.options.onItemSelected !== null ) { // we don't use link for Blackberry, since it reloads the page.
		        cellstr += '<a href="" class="listviewLines ui-link-inherit" id="' +listValues.getKey() +'">';
            }

            cellstr += this._createLines( data, valuesIdx, false, wrapData );
            if ( this.options.onItemSelected !== null ) {
	            cellstr += '</a><span class="ui-icon ui-icon-arrow-r' + pixelRatio2 + '"></span></div></div></li>';
            }
       
        }
     
        if (numValues === 0 && this.options.onEmptyList) {
            cellstr += '<li role="option" class="ui-btn ui-btn-icon-right ui-li ui-btn-up-' + pageTheme + '">';
            cellstr += '<div class="ui-btn-inner">';
            cellstr += '<div class="ui-btn-text">';

            cellstr += '<div class="lv_line">';
            var value  =this.options.onEmptyList;

            var lineWidth = screen.width -40; //20 for arrow and 20 for margins
            var w = parseInt( lineWidth );
            var style = ' float: left; width:' + w + 'px;' + 'font-style:normal;font-weight:normal';
            var s = '<div  class="lv_line_field" style="'+ style +'">'+ value+'</div>';
            cellstr += s;
            cellstr += '</div>'; //end of line;
            cellstr += '<span class="ui-icon ui-icon-arrow-r' + pixelRatio2 + '"></span></div></div></li>';
        }
        
        this.element.listview.append(cellstr);

        if (numValues > 0 || !this.options.onEmptyList) {
	        var self = this;
	   
	        if (isWindows()) {
	        	  this.element.bind('click', function() {
		 		      var anchor  = event.target;
		 			  if ( anchor.tagName == 'SPAN' ){ //we are clicked on icon
		 			      anchor = anchor.previousSibling;
		 			  }

		 			  while (anchor.nodeType != 1 || anchor.tagName !== 'A') {
		 	           	anchor = anchor.parentNode;
		 	          }
	                  var li = anchor.parentElement.parentElement.parentElement;
		 	          $(li).addClass('ui-btn-down-' + pageTheme);
		 	          if ( self.options.onItemSelected != null) {
		 	              self.options.onItemSelected( anchor );
		 	          }
		 	          $(li).removeClass('ui-btn-down-' + pageTheme);
		 		   });
		    }
	        else {
	            var that = this;
	            
	            this.element.bind('touchstart',  function(){
	                that.isTouchMove = false;
	            });
	            
	            this.element.bind('touchmove',  function(){
	                that.isTouchMove = true;
	            });
	              
	            var eventToHandle = 'touchend';
	            if (!isIOS()) {
	                eventToHandle = 'touchend click';  //Android simulator requires click event, BB devices using trackpad require click event
	                if (isBlackBerry7()) {
	                    eventToHandle = 'click';  //BlackBerry 7 both touchend and click were being fired when a listview row was touched on a touch screen or via a mouse click in a simulator
	                }
	            }
	            
	            
	            this.element.bind(eventToHandle,  function(){
	                if ( that.isTouchMove ) {
	                    return;
	                }
	                //Find the anchor
	                var anchor  = event.target;

	                if ( anchor.tagName == 'SPAN' ){ //we are clicked on icon
		 			      anchor = anchor.previousSibling;
		 		    }
	                
	                while (anchor.nodeType != 1 || anchor.tagName !== 'A') {
	                	anchor = anchor.parentNode;
	                }

	                $(anchor.parentElement.parentElement.parentElement).addClass("ui-btn-down-" + pageTheme);
	                
	                if ( self.options.onItemSelected != null ) {
	                	if ( isAndroid()) {  
	                		setTimeout( function(){self.options.onItemSelected( anchor   );  }, 50)
	                	}else {
	                		self.options.onItemSelected(anchor  );
	                	}
	                     
	                     if (  that.iscroller != null &&  isAndroid() ) {
	                    	 that.updateOnVisible(this.element.closest('div[data-role="page"]').attr('id') , false );
	                     }
	                } 
	                   
	            });
	        }
        }
     },
    
    _createLines:function( data,valuesIdx, isForHeader, wrapData  ) {
        var lines = this.options.lines;
        var isLocaleDisplay = this.options.isLocalizedDisplay;
        var cellstr = "";
        var listValues =  null;
        
        if (    data != null ) {      
            listValues = data.value[valuesIdx];
        }
        
        var test = valuesIdx/2 - Math.round(valuesIdx/2 );
        var setAltClr = test < 0 && this.options.reversedColor.length > 0;
        var addStyle = "";
        if (setAltClr) {
            //  Need special case of text color
            addStyle = ' style="' + ' color: ' + this.options.reversedColor + '"';
        }

        if ( listValues != null ) {
            cellstr += '<div class="lv_lines" ' + addStyle + 'id="' + listValues.getKey() + '">';
        }else {
            cellstr += '<div class="lv_lines" ' + addStyle + '>';
        }    

        var numLines = lines.length;
        for( var l = 0; l < numLines; l++ ) {
            cellstr += '<div class="lv_line">';
            var numFields = lines[l].length;
            for( var f = 0; f < numFields; f++ ) {
                var field = lines[l][f];
                var fieldData = (listValues) ? listValues.getData(field.id) : listValues;
                var value = field.name;
            
                if ( fieldData && fieldData.value ) {
                    value  = fieldData.value;
                    if (field.dataType === "DATE") {
                        var aDate = undefined;
						var strIdx = value.indexOf("T");
						if (strIdx !== -1) {
							aDate = new Date(parseDateTime(null, value.substr(0, strIdx)));
						}
						else {
							aDate = new Date(parseDateTime(null, value));
						}
						if(isLocaleDisplay === "true"){
							value = getLocaleDateString(aDate);
						}
						else{
							value = getISODateString(aDate);
						}
						
                    } else if (field.dataType === "TIME") {
                        var aTime = undefined;
						var strIdx = value.indexOf("T");
						if (strIdx !== -1) {
							aTime = new Date(parseTime(value.substr(strIdx+1)));
						}
						else {
							aTime = new Date(parseTime(value));
						}
						if(isLocaleDisplay === "true"){
							value = getLocaleTimeString(aTime);
						}
						else{
							value = getISOTimeString(aTime);
						}
                    } else if (field.dataType === "DATETIME") {
                        var aDateTime = new Date(parseDateTime(null, value));
						aDateTime = convertUtcToLocalTime(aDateTime);
						if(isLocaleDisplay === "true"){
							value = getLocaleDateTimeString(aDateTime);
						}
						else{
							value = getISODateTimeString(aDateTime);
						}
                    } else if (field.dataType === "IMAGE" && field.static) {
                         value ='<img data-role="none" src="' + fieldData.value +'" height="' + field.height + '"/>';
                    } else if ( field.dataType === "IMAGE" && !field.static) {
                         value ='<img data-role="none" src="data:image/jpeg;base64,' + fieldData.value +'" height="' + field.height + '"/>';
                    }

                    if( value === '' ) {
                    	// Empty value.  Use a filler to maintain row height for the value.
                    	value = '<p></p>';
                    } else {
                    	if( wrapData ) {
                    		// User has HTML tags that they want treated as text
                    		// in the list, not markup.  Replace all &, <, and >
                    		// and wrap in PRE and CODE tags.
                    		value = value.toString().replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
                    		value = "<PRE><CODE>" + value + "</CODE></PRE>";
                    	}
                    }
                } else if ( !isForHeader )  {
                	// No data for the field.id, use a filler
                	value = '<p></p>';
                }
                var lineWidth = window.innerWidth -20  - 30-10 - 15; //20 for margins,jquery mobile 1.0a4.1 added 15px padding to content. 10px for text padding
                var w = parseInt( lineWidth * field.width/100);
                var font = "normal";
                if (  data != null  ) { 
                    font  =field.font;
                }
                var style = ' float: left; width:' + w + 'px;' + 'font-style:' + font +';font-weight:normal';
               
                if ( field.font == "bold" ) {
                    style = style.replace('font-weight:normal', 'font-weight:bold');
                } 
                if ( field.dataType === 'IMAGE' && !isForHeader) {
                	 var style = ' float: left; width:' + w + 'px; height:' + field.height +'px';
                }
                s = '<div  class="lv_line_field" field_width="'+ field.width +'" style="'+ style +'">'+ value+'</div>';
                cellstr += s;
            }  
            cellstr += '</div>'; //end of line;
        }
        cellstr += '</div>'; //end of lines 
     
        return cellstr;
    },
      
     _createHeader:function() {

    	 var parents = this.element.parents();
    	 var page = null;
    	 for ( var i = 0; i < parents.length; i++) {
    		 var node = parents.get(i);
    		 if ($(node).attr('data-role') == 'page') {
    			 page = node;
    			 break;
    		 }
    	 }

    	 var children = page.children;
    	 var pageTheme = this.element.closest( 'div[data-role="page"]').attr('data-theme');

    	 if (this.options.createHeaderLater) { // The listview is not the first control on the screen, we need to create header stick on top of listview.
    		 var listheader = $('<div class="listview_header ui-bar-'+ pageTheme + '" >');
    		 for ( var i = 0; i < children.length; i++) {
    			 var value = $(children[i]).attr('data-role');
    			 if (value == 'content') {
    				 contentPage = children[i];
    				 break;
    			 }
    		 }
    		 listheader.insertBefore(this.element.listview);
    		 listheader.css('marginLeft', "-15px");
    		 listheader.css('marginRight', "-15px");
    		 listheader.css('marginTop', "15px");

    		 listheader.append(this._createLines(null, null,
    				 true));
    		 this.options.createHeaderLater = false;
    	 } else { // create on the top of the screen since the listview is the first control on the screen or only control on the screen.
    		 var listheader = $('<div class="listview_header ui-bar-'+ pageTheme + '"  data-role="listview_header">');
    		 var header = null;
    		 if (page != null) {
    			 for ( var i = 0; i < children.length; i++) {
    				 if ($(children[i]).attr('data-role') == 'header') {
    					 header = children[i];
    					 break;
    				 } 
    			 }
    		 }
    		 if (header != null && this.options.showViewHeader) {
    			 $(header).after(listheader);
    			 listheader.append(this._createLines(null, null,true));
    		 }
    	 }
     },
        
     options : {
         lines : null,
         data:[],
         showViewHeader:false,
         onEmptyList:"",
         alternateColor:"",
         reversedColor:"",
         onItemSelected:null,
         inset:"false",
         isLocalized:"false",
         createHeaderLater:"false"
    }
});


