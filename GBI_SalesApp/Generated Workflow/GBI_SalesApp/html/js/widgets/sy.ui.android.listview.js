Sybase.widget("sy.syListview", {
    _init:function() {
        this.listview = Sybase('<div class="listview">');
        this.listview.headerWidth = screen.width - 16;
        if ( this.options.showViewHeader ){
           this._createHeader();
        }
         this.element.append( this.listview );
    },
    
     /* when founction updateUIFromWorkFlowMessage called , the page still was in invisible, the header height was 0, 
        added this function and called after page visible. */
    updateOnVisible : function( params ) {
        if ( this.header &&  this.header.height() >0 && ! this.listview[0].style.paddingTop) {
            this.listview[0].style.paddingTop=  parseInt( this.header.height() - 10 )+'px';
            this.listview.headerWidth = this.header.width();
            this.listview[0].style.width = this.listview.headerWidth + 'px';
        }
    },
    
    updateUIFromWorkFlowMessage:function( params ) {
        //remove all the list first;
        if ( params != null && params.length > 0 ) {
        }else {
           alert(" params is null or length is 0 ");
           return;
        }
        this.listview[0].text = "";
        var id = this.element[0].getAttribute('id');
      
        if ( id == null ) {
           alert(" id is null");
           return;
        }
        if ( this.header &&  this.header.height() >0 && ! this.listview[0].style.paddingTop) {
            this.listview[0].style.paddingTop=  this.header.height()+'px';
            this.listview.headerWidth = this.header.width();
            this.listview[0].style.width = this.listview.headerWidth + 'px';
        }
 
        var data  = params[0].getData( id );
        if (!data) {
            data = new MessageValue();
            data.setType("LIST");
            data.setKey(id);
            data.setValue(new Array(0));
            params[0].add(id, data);
        }
        var dataValue = data.getValue();
        var cellstr = "";
        var fields = this.options.fields;
        var lines = this.options.lines;
        var numValues = dataValue.length;
         
        var wrapData = this.element[0].getAttribute('wrap_data');
        wrapData = wrapData != null && wrapData === "true"; 

        for (var valuesIdx = 0; valuesIdx < numValues; valuesIdx++) { //for each values in a list
           
            var listValues = dataValue[valuesIdx];
            if (listValues.getState() === "delete") {
                continue;
            }
            var lineitem  = '<div class="lv_lines" id="' +listValues.getKey() +'">';
            
            if ( (valuesIdx +1) == numValues && this.options.inset == 'true' ) {
                lineitem  = '<div class="lv_lines lastItem" id="' +listValues.getKey() +'">';
            }
            var test =valuesIdx/2 -  Math.round(valuesIdx/2 );
            if ( test < 0  && this.options.alternateColor.length > 0 ) lineitem=  '<div class="lv_lines '+  this.element[0].getAttribute('screen') +'_alternateColor" id="' +listValues.getKey() +'">';
            
            cellstr += lineitem;
           
			// Javascript string length is limited on BB5
			if (cellstr.length > 507*1024) {
				cellstr += '</div>';
                showAlertDialog("The contents of this listview will be truncated, BlackBerry 5 devices are not capable of displaying the desired amount of information in a listview.");
				break;
			}

			var numLines = lines.length;
            for( var l = 0; l < numLines; l++ ) {
                var line = '<div class="lv_line">';
                cellstr += line;
                
                var numFields = lines[l].length;
                for( var f = 0; f < numFields; f++ ) {
                     var field = lines[l][f];
                     var fieldData = listValues.getData(field.id);
                     var v = fieldData && fieldData.value;
                     if (v) {
	                     if (field.dataType === "DATE") {
	                         var strIdx = v.indexOf("T");
	                         if (strIdx !== -1) {
	                             v = v.substr(0, strIdx);
	                         }
	                     } else if (field.dataType === "TIME") {
	                         var strIdx = v.indexOf("T");
	                         if (strIdx !== -1) {
	                             v = v.substr(strIdx+1);
	                         }
	                     } else if (field.dataType === "DATETIME") {
	                         var aDate = new Date(parseDateTime(null, v));
	                         v = getISODateTimeString(aDate, true);
	                     }else if (field.dataType === "IMAGE" && field.static) {
	                    	 v ='<img data-role="none" src="' + fieldData.value +'" height="' + field.height + '"/>';
	                     }else if ( field.dataType === "IMAGE" && !field.static) {
	                    	 v ='<img data-role="none" src="data:image/jpeg;base64,' + fieldData.value +'" height="' + field.height + '"/>';
	                     }

                    	if( wrapData ) {
                    		// User has HTML tags that they want treated as text
                    		// in the list, not markup.  Replace all &, <, and >
                    		// and wrap in PRE and CODE tags.
                    		v = v.toString().replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
                    		v = "<PRE><CODE>" + v + "</CODE></PRE>";
                    	}
                     } else {
                     	v = "&#60;Empty&#62;"
                     }
                     var pw = Math.round( (parseInt( field.width ) * ( this.listview.headerWidth -2))/100);
                     var w = pw+'px;';
                    
                     var font = "normal";
                     if ( data != null  ) { 
                           font  =field.font;
                     }                        
                     var style = 'float: left; width:' + w +';'+ 'font-style:' + font +';font-weight:normal'; 
               
                     if ( field.font == "bold" ) {
                         style = style.replace('font-weight:normal', 'font-weight:bold');
                     } 
                     if ( field.dataType === 'IMAGE'){
                    	 style = ' float: left; width:' + w + 'px; height:' + field.height +'px';
                     }

                     s = '<div  class="lv_line_field" style="'+ style +'">'+ v+'</div>';
                     cellstr += s;
                } 
                cellstr += '</div>';
            }
            cellstr += '</div>';
         }
         if (dataValue.length === 0 && this.options.onEmptyList) {
            var lineitem  = '<div class="lv_lines">';
            cellstr += lineitem;
            var line = '<div class="lv_line">';
            cellstr += line;
            var v  =this.options.onEmptyList;
            var pw = this.listview.headerWidth -2;
            var w = pw+'px;';
                    
            var style = 'float: left; width:' + w +';'+ 'font-style:normal;font-weight:normal'; 

            var s = '<div  class="lv_line_field" style="'+ style +'">'+ v+'</div>';
            cellstr += s;
            cellstr += '</div>'; //end of line;
            cellstr += '</div>'; //end of item
         }
         this.listview[0].innerHTML = cellstr;
         
         if (dataValue.length > 0 || !this.options.onEmptyList) {
	         var children = this.listview[0].childNodes;
	         var self = this;
	         for( var i = 0; i < children.length; i++ ) {
	            var child = children[i];
	            var className = child.className;
	          
	            if ( className != null && className.indexOf('lv_lines') >-1 ){
	                child.onmousedown= function(){ 
	                    if ( this.className.indexOf("alternateColor") > 0 ) {
	                       this.className = this.className +" ui-btn-down-c";
	                    }else {
                            this.className = this.className +" hover";
                        }
                        return false;
                    };
                    child.onclick = function() {
                        if (   self.options.onItemSelected != null ) {
                           self.options.onItemSelected( this );
                        }
                    } 
                 
                    child.onmouseup = function() {
                       this.className = this.className.replace(" hover", "");
                       this.className = this.className.replace(" ui-btn-down-c", "");
                    };
	            }
	        }
         }
    },
    _createHeader:function() {
        if ( this.options.showViewHeader ) {
            var header = Sybase('<div class="listview_header">');
            this.element.before( header);
            header[0].style.width= this.listview.headerWidth + 'px';
           
            if ( this.options.lines != null ) {  
            	header.listviewItem( {lines:this.options.lines, width:  header[0].style.width});
            }
            this.header = header;
        }
    },
    
    options : {
        lines : null,
        data:[],
        showViewHeader:false,
        onEmptyList:"",
        alternateColor:"",
        onItemSelected:null
    }
});


Sybase.widget("sy.listviewItem", {
    _init:function() {
        if ( this.options.lines != null) {
            for( var i = 0; i <  this.options.lines.length; i++ ) {
                var fields =  this.options.lines[ i];
                var line = Sybase('<div class="lv_line">');
                line[0].style.width = this.options.width;
        
                this.element.append( line );
               
                for( var j = 0; j < fields.length; j++ ) {
                    var field = fields[j];
                    var span = Sybase('<div class="lv_line_field">');
                  
                    if ( this.options.data != null ) {
                        span[0].innerHTML =  this.options.data[field.id ];
                    }else {   
                        span[0].innerHTML = field.name;
                    }
                    line.append( span );
                   
                   if ( field.font != null   && field.font != 'plain') {
                         span.css('fontWeight', field.font);
                    }
                   /* calculate the width of the span */
                    if ( field.width != null && span != null) {
                        var width = span.width();
                        var fieldW = Math.round( (parseInt( field.width ) * parseInt( this.options.width) -2)/100);
                        var style = 'position: relative; display: inline; float: left; width:' + fieldW +'px;';
                        span[0].setAttribute('style', style);
                    }
                }
            }
        }
    },
    
    options : {
        lines:null,
        width: null,
        data :null,
        onItemSelected:null,
        inset:"false"
    }
});
