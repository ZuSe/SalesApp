$.widget("sy.customFixPositioinForm", $.mobile.widget, {
    _create: function(){
    	
    	if ( ! (isIOS()|| isWindows()) ){
    		return;
    	}
    	//Clone current element and put it into custom-fix-position section 
    	var self = this, clone = this.element.clone();
        self.fixDiv = $( "<div data-role='custom-fix-position'></div>" )
        self.fixDiv.append( clone );
        
        //Hide original element and add the new cloned element outside of scroll, just above the footer.
        this.element.hide();
        var page  =this.element.closest('div[data-role="page"]');
        if ( page.length > 0 ) {
            var children = page.children();
            for( var i = 0; i < children.length; i++ ) {
                if ( children[i].getAttribute('data-role') === 'footer' && this.options.location === 'bottom') {
                	self.fixDiv.insertBefore( children[i]);
                     break;
                }
            }
         }
    },
   
    remove:function() {
    	if ( ! (isIOS()|| isWindows()) ){
    		return;
    	}
        if ( this.element !== null ) {
            this.element.remove();
        }
        if ( this.fixDiv !== null ) {
            this.fixDiv.remove();
        }
    },
    refresh: function( data ) 
    {
         //TODO;
    },
	
	options: {
		theme: null,
		location:'bottom'
	}
});
