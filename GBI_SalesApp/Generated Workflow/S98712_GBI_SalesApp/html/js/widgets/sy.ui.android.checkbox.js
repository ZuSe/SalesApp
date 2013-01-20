
Sybase.widget("sy.checkBox", {
	htmlValueChanged:function(newValue) {
		var iconSpan = this.element.input[0];
		do {
			iconSpan = iconSpan.nextSibling
		} while (iconSpan && iconSpan.nodeType != 1);
		if ( newValue ){
			iconSpan.className= iconSpan.className.replace("_off ", "_on ");
		}else{
			iconSpan.className=  iconSpan.className.replace("_on ", "_off ");
		}
		iconSpan.setAttribute("description", ""); // a workaround for BB5 to update the screen		
	},
     _init: function(){
         var self  = this;
         this.element.label =this.element.children('label')
         this.element.input =  this.element.children('input');
      
         var iconSpan = Sybase('<input type="button" value="" >');
         
         var input = this.element.input[0];
         input.style.display = 'none';
         
         if ( input.checked   ) {
            iconSpan.addClass('checkbox_icon_on');
         }else {
             iconSpan.addClass('checkbox_icon_off');
         }
         
         var disabled = input.getAttribute('disabled');
         if ( disabled ) {
             iconSpan[0].setAttribute('disabled', '');
         }
         iconSpan.addClass( 'icon_36X40' );
         iconSpan.attr("id", this.element.label[0].getAttribute("for"));
         
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
        iconSpan.bind('click', function() {
            var input = self.element.input[0];
             checked =  !input.checked;
           
            if ( checked ){
                iconSpan[0].className= iconSpan[0].className.replace("_off ", "_on ");
                input.checked = true;
            }else{
               input.checked = false;
               iconSpan[0].className=  iconSpan[0].className.replace("_on ", "_off ");
            }
            iconSpan.attr("description", ""); // a workaround for BB5 to update the screen
        });
        
        var listener = createHTMLValueChangedListener(self, input, self.htmlValueChanged);
        addHTMLValueChangedListener(listener);                
       },
    options : {
    }
} );

