
Sybase.widget("sy.radioBt", {
     _init: function(){
         var self  = this;
  
         if ( this.options.separatorLine  ) {
              this.element.addClass('separateline');
         }
       
         this.element.label =this.element.children('label')
         if ( this.options.textColor != null ) {
             this.element.label[0].style.color =  this.options.textColor;
         }
         
         this.element.input =  this.element.children('input');
         var iconSpan = Sybase('<div></div>');
         
         var input = this.element.input[0];
         input.style.display = 'none';
         
         if ( input.checked   ) {
            iconSpan.addClass('radioBt_icon_on');
         }else {
             iconSpan.addClass('radioBt_icon_off');
         }
         iconSpan.addClass( 'icon_36X40' );
         var groupName =  input.getAttribute('name');
         iconSpan.attr('name', groupName );
         this.element.label[0].setAttribute( 'name',groupName );
       
         this.element.append( iconSpan );
         var labelLocation = this.element.label[0].className;
        
        if (labelLocation  =='top') {
            this.element.label[0].style.display = "block";
            iconSpan[0].style.display='block';
            
        }else if ( labelLocation == 'left'){
            iconSpan.addClass('right');
        }else {
             iconSpan.addClass('left');
        }
        
        iconSpan.bind('click' , function() {
            var input = self.element.input[0];
            var thisName = input.getAttribute('name');
            var radioBts = Sybase('div.radiobutton');
            
            for( var i =0; i < radioBts.length ; i++ ) {
                var bt = radioBts[i];
                  for( var j = 0; j < bt.childNodes.length; j++ ) {
                    var child = bt.childNodes[j];
                    if (  child.nodeType == 1 ) {
                        var type = child.getAttribute('type');
                        var name = child.getAttribute('name');
                        var tagName = child.tagName;
                        if( name == thisName ) {
                        
	                        if ( type == 'radio' ) {
	                            child.checked = self.index == i
	                        }
	                        if ( child.tagName == 'INPUT' && name == thisName) {
	                            if ( self.index == i ) {
	                                child.className = child.className.replace("_off ", "_on ");
	                            }else {
	                                child.className = child.className.replace("_on ", "_off ");
	                            }
	                        }
	                    }
	                }
	            }
            }
            
            
           if ( self.options.onSelection != null ){
              self.options.onSelection( self.element.label[0].innerHTML);
           }
         })
       },
       
       options : {
            separatorLine: false,
            textColor: null,
            onSelection: null
       }
} );

