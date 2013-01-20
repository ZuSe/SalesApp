
Sybase.widget("sy.editBox", {
    _init: function(){
        var self  = this;
       
        this.element.label =this.element.children('label')
        this.element.input =  this.element.children('input');
       
        if ( this.element.input[0] == null ) {
            this.element.input = this.element.children('textarea');
            
            //resize if default string length is big
            if(this.element.input[0].value.length!=0)
            	self.editBoxResize(this.element.input[0]);
            this.element.bind('keyup' , function() {
            	var textarea = this.childNodes[3];
            	self.editBoxResize(textarea);
             });
        }
        
        var col = Sybase('body').css('background');
        
        if ( col != null && col.length > 0 
            && this.element.input != null 
            && this.element.input.length > 0){
            this.element.input[0].style.backgroundColor = col;
        }
          
   //     this.labelLocation = this.element.label[0].className;
        
  //     this.editBoxInit();
    },
    
    editBoxResize:function (textarea) {
    	var lines = textarea.value.split('\n');
    	var width = textarea.cols;
    	var height = 0;
    	for (var i = 0; i < lines.length; i++) {
        	var linelength = lines[i].length;
        	if (linelength >= width) {
        	  height += Math.ceil(linelength / width);
        	} else {
            	height ++;
            }
    	}
    	if (textarea.rows < height)
    		textarea.rows = height;
    	
    	var divEditBox = this.element[0];
      	var newH = parseInt(divEditBox.style.height.replace('px','')) + 23;
    	if (textarea.clientHeight + 46 > newH )
    		divEditBox.style.height = newH + 'px';
    },
  
    editBoxInit:function() {
       
       /* Set the proper width for label and input element,make them alignment */
       var width = this.element.width();
        var height = this.element.height();
      
        var maxLw = 0;
        var labels = Sybase('label.left');
       
        for( var i = 0; i < labels.length; i++ ) {
            var lw =  Sybase(labels[i]).width();
            if ( lw > maxLw ) {
                maxLw = lw;
            }
        }
        if ( this.labelLocation == 'top') {
            maxLw = 0;
        }
        var iW =  width - maxLw -30 ;
        if ( this.labelLocation == 'left'  || this.labelLocation == 'right') {
            this.element.label[0].style.width = maxLw +'px';
            
        }
        this.element.input[0].style.width =iW +'px';
       
      
   },
    options : {
    }
} );





