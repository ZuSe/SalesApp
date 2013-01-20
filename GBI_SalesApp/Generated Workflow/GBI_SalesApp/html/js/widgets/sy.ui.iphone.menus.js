$.widget("sy.actionSheet", {
    _create: function(){
    	  var self = this;
    	  this.options.actions = this._getActions();
    	  this.options.theme = this.element.closest('div[data-role="page"]').attr('data-theme');
          this.element.bind('click', function() {
             self.open();
         } );
    },
    
    _getActions: function() {
    	var actions = [];
        var hiddenLinks  = this.element.closest('div[data-role="footer"]').find('a[data-role="menu"]');
        for ( var i=0; i < hiddenLinks.length; i++ ) {
       	    actions.push(
       	     { label: hiddenLinks[i].getAttribute('name'),
       	       onclick : function() { hiddenLinks[i].onclick  },
       	       functionName: hiddenLinks[i].onclick ,
       	       icon:null }
            );
        }
        return actions;
    },
    
    open:function() {
    	
     	 //var t1 = new Date().getTime();
         var self = this;
         
         var actionDlg =  $('<div  data-theme="' +  this.options.theme  + '" data-transition="pop" >')
             .appendTo( $.mobile.pageContainer );
         self.actionDlg = actionDlg;
         var asHeader = $('<div  data-role="header" data-position="inline" class="sa-header">').appendTo( actionDlg );
         var asBtsWrapper = $('<div data-role="content"  class="as-button-wrapper wrapper">').appendTo( actionDlg );
         var scroller = $(' <div data-role="scroller">').appendTo( asBtsWrapper);
        
         for( var i = 0 ;  self.options.actions != null && i < self.options.actions.length; i++ ) {
             var bt = $('<a data-role="button">').appendTo(  scroller );
             bt.html( self.options.actions[ i].label );
             bt.attr('id', i );
             bt.attr('data-theme', this.options.theme );
             bt.addClass("as-button");
             bt.buttonMarkup();
             bt.one('click' , function() {
            	 var clicedBt = this;
            	 //Add active button class to the clicked button 
            	 $(clicedBt).addClass( $.mobile.activeBtnClass );
            	 //call the function. 
            	 var func = self.options.actions[ $(clicedBt).attr('id')].functionName;
            	 func.call();

            	 setTimeout( function(){  $(clicedBt).removeClass( $.mobile.activeBtnClass );  }, 150 );
            	 
            	 if ( self.showPage ){
            		 setTimeout( function(){   
            			 var activePage =  $.mobile.activePage;
            			 if ( activePage ===  self.actionDlg ) {  
            				 self.closePage(); 
            			 }else{  //if activePage is not current dialog page, 
            				     // that means it has been navigated to another page, do nothing.
            			 }
            		 },  150);
            	 }else{
            		 self.close();
            	 }
             });
         }
         this.currentPage = $.mobile.activePage;
         //CR662570-1 , create Cancel button if user want to cancel menu selection
          var bt = $('<a data-role="button">').appendTo(  scroller );
          bt.html("Cancel");
          bt.attr('data-theme', this.options.theme );
          bt.addClass("as-button close-button");
          bt.buttonMarkup();
          bt.one('click' , function() {
        	  var clicedBt = this;
        	  //Add active button class to the clicked button 
         	 $(clicedBt).addClass( $.mobile.activeBtnClass );
         	
              if ( self.showPage ) {
                   self.closePage();
              }else {
                   self.close()
              }
              setTimeout( function(){   clicedBt.removeClass( $.mobile.activeBtnClass ); },  50);
          });
         
         self.showPage = false;
        // var t2 = new Date().getTime() - t1;
        // alert( "from open start to created all the menus cost="+ t2 + " , will open the page");
         if ( self.actionDlg.height() > $(window).height() -15 ) {
             actionDlg.attr('data-role', 'dialog');
             actionDlg.removeClass('as-wrapper').addClass('as-page-wrapper');
             self.showPage = true;
             asHeader.css('display', 'none');
             $.mobile.changePage(actionDlg,  { transition:'pop', reverse:false, changeHash: false }); 
          }else {
              actionDlg.attr('id', 'as-wrapper');
              actionDlg.addClass('as-wrapper');
              actionDlg.css ( {
                  "-webkit-transform":'translate3d(0, -260px, 0)',
                  "width": window.innerWidth +'px',
              });
                
              var newtop =  window.innerHeight  + 260 - actionDlg.height() +'px';; //why 250; it works , always keeps it start from bottom.
              actionDlg.css({ 'top':  newtop });
          }
    },
    
    destroy:function() {
    	if ( this.actionDlg ) {
            this.actionDlg[0].removeEventListener('webkitTransitionEnd', this, false);
            if ( document.getElementById('as-wrapper') != null ) {
                document.body.removeChild(document.getElementById('as-wrapper'));
            }
    	}
    },
    
    closePage:function(){
        $.mobile.changePage(this.currentPage, {transition:'slide',  reverse:true ,changeHash: false} );
        document.body.removeChild(this.actionDlg[0]);
    },
       
    close:function() {
        this.actionDlg[0].style.webkitTransitionTimingFunction = 'ease-in';
        this.actionDlg[0].style.webkitTransitionDuration = '200ms';
        this.actionDlg[0].style.webkitTransform = 'translate3d(0, 0, 0)';
        this.actionDlg[0].addEventListener('webkitTransitionEnd', this, false);     
    },
       
    handleEvent: function (e) {
         if (e.type == 'webkitTransitionEnd' && e.target.id == 'as-wrapper') {
             this.destroy();
         }
    },
    
    options: {
         actions:null,
         theme:'b',
    }
    
   
});
