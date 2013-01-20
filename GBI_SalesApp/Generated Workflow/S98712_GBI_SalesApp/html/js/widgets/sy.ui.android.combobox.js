
Sybase.widget("sy.comboBox", {
	htmlValueChanged:function(newValue) {
		var findMatch = false;
		var options =  this.element.select[0].options;		
		for( var i = 0; i < options.length; i++ ) {
			if ( options[i].text ==  newValue ) {
				 this.element.select[0].selectedIndex = i;
				 this.element.selectBt[0].innerHTML = newValue;
				 findMatch = true;
				 break;
			}
		}
		if (!findMatch) {
			this.showDefaultValue(this.element.select[0], this.element.selectBt[0])
		}
		this.closePopup();
	},
    _init:function() {
        var self = this;
        self.isOpen = false;
        this.element.label =this.element.children('label')
        this.element.select =  this.element.children('select');
        var id = this.element.label[0].getAttribute('for');
        //  CR685897:  Cause of duplicate choice controls after listview screen
        if (this.element.select[0].style.display == 'none') return;
        this.element.select[0].style.display = 'none';
        this.element.selectBt = Sybase('<div></div>');
        var sel = this.element.selectBt[0];
        this.element.selectBt.attr('id', id);
        this.element.selectBt.attr('ignored', 'true');
        this.element.selectBt.attr('class',"input " + this.element.select[0].className);

        this.showDefaultValue(this.element.select[0], sel);
        
        this.element.append( this.element.selectBt);
        this.element.selectBt.bind( 'click' , function(e) {
            if ( self.element.select[0].getAttribute('disabled') ) return ;
              self.isOpen = self.openPopup(e);
        });
		var listener = createHTMLValueChangedListener(self, this.element.select[0], self.htmlValueChanged);
		addHTMLValueChangedListener(listener);        
    },
    
    showDefaultValue:function(selectElement, selectDivElement){
        if ( selectElement.options != null && selectElement.options.length > 0 
             && selectElement.options[0].text != null ) {
        	selectDivElement.innerHTML = selectElement.options[0].text;
    		var findMatch = false;
        	for (var i = 0; i < selectElement.options.length; i++) {
        		var currentOption = selectElement.options[i];
        		if (currentOption.value == selectElement.value ){
        			selectDivElement.innerHTML = currentOption.text;
        			currentOption.selected = 'selected';
        			findMatch = true;
        			break;
        		} 
        	}
        	if (!findMatch) selectElement.options[0].selected = 'selected';
        }
    },
    
    openPopup:function(e){
        this.closeAllPopup();
        
        // Hide background div for BB5
        document.getElementById(getCurrentScreen()+'ScreenDiv').style.visibility='hidden';

        var self = this;
        self.divSelDlg = Sybase('<div class="valuepicker">');
        var origHeight = Sybase(self.element[0].parentNode).height();

        // Add dialog to the last of document body
        var body = Sybase(document.body);
        body.append(  self.divSelDlg );
        //this.element.after(  self.divSelDlg );

        var width =  window.innerWidth - 40;
         self.divSelDlg.css('width',width  +'px');
        /* create titile section */
        self.createTitleSection();
        
        /* Add picker main section */
        self.createMainSection(e);
        return true;
    },
    
    closeAllPopup:function(){
  	   for (var i = 0; i < Sybase('div.valuepicker').length; i++) {
  		   // Remove DOM object from document.body
 		   document.body.removeChild(Sybase('div.valuepicker')[i]);
 	   }
    },
    
    closePopup:function(){
   	    var self = this;
      	if (self.isOpen) {
   		    // Remove DOM object from document.body and show the original page
    	    document.body.removeChild(Sybase('div.valuepicker')[0]);
            document.getElementById(getCurrentScreen()+'ScreenDiv').style.visibility='visible';

            self.isOpen = false;
    	}
    },
  
    createTitleSection:function() {
    	var self = this;
        var div = Sybase('<div class="valuePickerTile">');
        this.divSelDlg.append ( div );
        var icon = Sybase('<input type="text"  class="titleIcon" left" readonly value="" >');
        div.append( icon);
        var title = Sybase('<label class="title"></label>')
        
        title[0].innerHTML = this.element.label[0].innerHTML;
        div.append( title)
        div.bind( 'click' , function() {
            if ( self.isOpen ) 
              self.closePopup();
        });
    },
    
    createMainSection:function(e){
         var self = this;
         var div = Sybase('<div class="mainSection">');
         this.divSelDlg.append( div);
         div.css('background','white');
         var selectChoices = "";
      
         var htmlP0 = '<div class="radiobutton"><label class="left">';
         var htmlP1 = '</label><input type="radio"  name="XXXX" /></div>'
         var html = "";
        
         var options =  this.element.select[0].options;
         for( var i = 0; i <  options.length; i++ ) {
             if (options[i].text==  this.element.selectBt[0].innerHTML ) {
                 html = html + htmlP0 + options[i].text + '</label><input type="radio" checked name="XXXX" /></div>';
             }else {
                 html = html + htmlP0 + options[i].text + htmlP1 ;
             } 
         }
     
         div[0].innerHTML = html;
     
         Sybase('div.radiobutton').radioBt({separatorLine:true,
                                            textColor:'black',
                                            onSelection: function( newValue)  { 
                                                 self.element.selectBt[0].innerHTML = newValue;
                                                 for( var i = 0; i < options.length; i++ ) {
                                                     if ( options[i].text ==  newValue ) {
                                                         self.element.select[0].value = newValue;
                                                         self.element.select[0].selectedIndex = i;
                                                         break;
                                                     }
                                                  }
                                                 self.closePopup(); 
                                                }
                                            });
         var h = Sybase('div.radiobutton').length;
         h = h * 41 + 40;
         this.divSelDlg.css('height', h +'px');
         var mainH = h- 40;
         div.css('height', mainH +'px');
         div.css('width', self.divSelDlg.css('width'));
         
         self.calculatePosition(this.divSelDlg, h, e);
         
    },
    
    calculatePosition:function(dialog, height, e){
		var yOffset = e.clientY - e.screenY; // calculate window.pageYOffset on BB5
    	var topH = screen.height < height ? yOffset + 35 : yOffset + screen.height/2 - height/2;
    	dialog.css('top', topH +'px');
    },

    options: {
        value:null,
        title: null,
        onDone:null
    }

});
