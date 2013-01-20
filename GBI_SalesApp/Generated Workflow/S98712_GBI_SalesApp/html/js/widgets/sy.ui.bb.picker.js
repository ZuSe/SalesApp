/************************ date picker *******************************/
Sybase.widget("sy.datePicker", {
    _init:function() {
        var self = this;
        self.isOpen = false;
        this.isDatetimePicker = false;
        this.months = { 1: 'Jan', 2: 'Feb', 3: 'Mar', 4: 'Apr', 5: 'May', 6: 'Jun', 7: 'Jul', 8: 'Aug', 9: 'Sep', 10: 'Oct', 11: 'Nov', 12: 'Dec' };
	    this.anotherMonths = { 'Jan':1, 'Feb':2, 'Mar':3,'Apr':4, 'May':5, 'Jun':6, 'Jul':7,'Aug':8, 'Sep':9,'Oct':10, 'Nov':11, 'Dec':12 };
	   
        this.element.bind('click' , function() {
           if ( self.isOpen ) return ;
              self.isOpen = self.openPopup();
        });
    },
    
    getPickerClass:function() {
        return "datepicker";
    },
   
    openPopup:function(){
        var self = this;
        self.pickerClass = self.getPickerClass();
        self.pickerDiv = Sybase('<div class="'+ self.pickerClass + '">');
   
        var origHeight = Sybase(self.element[0].parentNode).height();
        var editbox = this.element[0].parentNode;
        var parent = editbox.parentNode;
        
        parent.insertBefore( self.pickerDiv[0],  editbox.nextSibling);
      
        /* create titile section */
        self.createTitleSection();
        
        /* Add picker main section */
        self.createMainSection();
      
        /* add Ok and Cancel button section */
        var btGroup = Sybase('<div class="buttonGroup">');
        self.pickerDiv.append( btGroup );
        if ( Sybase.ui.platform.isWindowIE ) {
            alert("window ie");
        }
        var okBt = Sybase('<input class="picker_button left" type="button"  id="datepicer_ok_bt" type="button" value="OK"/>');
        var cancelBt = Sybase('<input class="picker_button right" type="button"  id="datepicer_cancel_bt"  type="button" value="Cancel"/>');
        btGroup.append(okBt  );
        btGroup.append( cancelBt );
      
        okBt.bind( 'click' , function() {  
            var result = self.format();
            self.element[0].parentNode.parentNode.removeChild(Sybase('div.'+self.pickerClass)[0]);
            self.isOpen = false; 
        
            if ( self.options.onDone != null ){
                self.options.onDone(result );
                self.options.defaultValue = result;
            }else{
               self.element[0].value = result;
            }
        });
      
        cancelBt.bind('click' , function() {  
	        self.element[0].parentNode.parentNode.removeChild(Sybase('div.'+self.pickerClass)[0]);
	        self.isOpen = false;
	    });
      
        window.scroll(0, self.pickerDiv[0].offsetTop + 350);
        return true;
    },
  
    createTitleSection:function() {
        var div = null;
        if ( Sybase.ui.platform.isWindowIE ) {
             div = Sybase('<div class="pickerTile windowIE">');
        }else {
             div = Sybase('<div class="pickerTile">');
        }
        this.pickerDiv.append ( div );
        var title = Sybase('<span class="title"></span>')
        div.append( title)
    },
    
    createMainSection:function(){
        this.slots = Sybase('<div class="slots">');
        this.pickerDiv.append( this.slots );
        
        if ( Sybase.ui.platform.isWindowIE ){
             this.slots[0].className = "slots windowIE";
        }
        
        this.dateSection = null;
        this.timeSection = null;
        
        if ( this.isDatetimePicker ) {
            this.dateSection = Sybase('<div class="dateSlots">');
            this.timeSection = Sybase('<div class="timeSlots">');
          
            this.slots.append( this.dateSection );
            this.slots.append( this.timeSection );
        }
     
        var value =  this.element[0].value;
        var date = null;
        if ( value == null ) {
           value = this.element[0].value;
        }
        
        if ( value != null && ! this.isDatetimePicker ) {
            date = value.split('-');
        }
        var time = null;
     
        if ( value != null && this.isDatetimePicker ) {
            var datetime = value.split(' ');
            if ( datetime.length > 1 ){
                date = datetime[0].split('-');
                time = datetime[1];
            }
        }
      
        var day = "";
        var month ="";
        var year ="";
        var now = new Date();
          
        if ( date == null || date.length < 3 ){
            day = now.getDate();
            month = now.getMonth() +1;
            year = now.getFullYear();
        }else{
            day = date[2];
            month = date[1];
            if ( month.indexOf('0') == 0 ){
                month = month.substring( 1,2 );
            }
            year = date[0];
        }
        
        var mm = parseInt('11');
        this.createSlot("day",  day );
        this.createSlot("month", this.months[ parseInt(month) ]);
        this.createSlot("year", year); 
        
        /* add time slot part */
        if ( this.isDatetimePicker ) {
        
            if ( time != null ) {
                time = time.split(':');
            }
	        var now = new Date();
	        var isPm = false;
	      
	        var hour= now.getHours();
	        var minute = now.getMinutes();
	        var second = now.getSeconds();
	        var isPm = false;
	        if ( time != null && time.length >0 ) {
	            hour = time[0];
	            if ( hour > 12) {
	                isPm = true;
	                hour = hour -12;
	            }
	        }
	        if ( time != null && time.length >1) {
	            minute = time[1];
	        }
	        if ( time != null && time.length >2 ) {
	            second = time[2];
	        }
	        
            this.createSlot("hour", hour );
	        this.createSlot("minute",minute);
	        this.createSlot("second",second);
	           
		   /*   create switch buttons of AM and PM */
	        var switchBt = Sybase('<input type="text"  class="slotText switchButton"  readonly value="">');
	        switchBt.attr('id', 'textSlot_switchBt');
	        if ( isPm  ) {
	            switchBt.attr('value','PM' );
	        }else {
	            switchBt.attr('value', 'AM');
	        }
	        var slot  = Sybase('<div class="slot switchButton">');
	        
	        if ( Sybase.ui.platform.isWindowIE ) {
	            slot[0].className = "slot switchButton windowIE";
	        }
	        
	        slot.attr('id', 'switchButton');
	        this.timeSection.append( slot );
	        slot.append( switchBt );
	    
	        var self = this;
	        if ( Sybase.ui.platform.isBlackberry461OS ) {
	           switchBt.bind('keyup' , function() {  
	                self.handleSlotButtonClicked( this);
	            });
             }else {
		        switchBt.bind('click' , function( event ) { 
		             if ( Sybase.ui.platform.isMSIE ) {
		                self.handleSlotButtonClicked( event.srcElement);
		             }else {
		                 self.handleSlotButtonClicked( this );
		             }
	            });
	        }
	    }
        this.updateTitle( day, month, year);
    },
    
    getResult:function() {
        var day =  Sybase('input.slotText.day')[0].value;
        var month = this.anotherMonths[  Sybase('input.slotText.month')[0].value];
        var year = Sybase('input.slotText.year')[0].value;
      
        var now = new Date();
        now.setDate( day);
        now.setMonth( month-1);
        now.setYear( year);
        return now.toDateString();
    },
  
    updateTitle:function( ){
        Sybase('span.title')[0].innerHTML= this.getResult();
    },
    
    createSlot:function( name , defaultValue ){
        var self = this;
        var upBt = Sybase('<input type="text" class="image_button upButton ' + name +'"  readonly value="">');
        upBt.attr('id',"upButton_" + name );
        
        var downBt = Sybase('<input type="text"  class="image_button downButton ' + name +'"  readonly value="">');
        downBt.attr('id', 'downButton_' + name);
       
        var text =Sybase('<input class="slotText ' + name +'"  type="text" readonly/>');
        text.attr('id',"slotText_" + name );
        text.attr('value',defaultValue  );
        
        var slot  = Sybase('<div class="slot">');
        slot.attr('id', name );
      
        if (  this.isDatetimePicker && name == 'year' ) {
            slot.css('width', '55px');
            text.css('width', '55px');
            upBt.css('width', '55px');
            downBt.css('width', '55px');
        }  
        if ( name == 'hour' || name == 'minute' || name == 'second' ){
            if ( Sybase.ui.platform.isWindowIE ) {
                 slot[0].className = slot[0].className + " timePickerslot windowIE";
            }
        }
        
       if ( this.isDatetimePicker ) {
           if ( name == 'hour' || name == 'minute' || name == 'second' ) {
                this.timeSection.append( slot );
           }else {
                this.dateSection.append( slot );
           }
       }else{
            this.slots.append( slot);
       }
          
        slot.append( upBt);
        slot.append( text );
        slot.append( downBt );
       
        var eventName = 'click';
        if ( Sybase.ui.platform.isBlackberry461OS ) {
            eventName = 'keyup';
        }
	   
	    upBt.bind(eventName, function( event ) {  
            if ( Sybase.ui.platform.isMSIE ) {
                self.handleSlotButtonClicked( event.srcElement);
            }else {
                self.handleSlotButtonClicked( this);
            }
        });
    
       downBt.bind(eventName, function(event ) {  
            if ( Sybase.ui.platform.isMSIE ) {
                self.handleSlotButtonClicked(event.srcElement); 
           }else {     
	           self.handleSlotButtonClicked(this);
	       }
	   });
    },
    
    handleSlotButtonClicked:function( target) {
        var id = target.getAttribute('id');
     
        if ( id == 'upButton_day' || id =='downButton_day') {
            this.handleDayValueChange( target );
        }else if( id == 'upButton_month' || id == 'downButton_month'){
            this.handleMonthChange( target );
        }else if ( id == 'upButton_year' || id == 'downButton_year') {
            this.handleYearChange( target );
        }else if ( this.isDatetimePicker ) {
	         if ( id == 'upButton_hour' || id =='downButton_hour') {
	            this.handleHourValueChange( target );
	        }else if( id == 'upButton_minute' || id == 'downButton_minute'){
	            this.handleMinuteChange( target );
	        }else if ( id == 'textSlot_switchBt') {
	            this.handleAmPmValueChange( target );
	        }else  if( id == 'upButton_second' || id == 'downButton_second'){
	            this.handleSecondValueChange( target);
	        }
        }
    },
    
    handleDayValueChange:function( target ){
        var id = target.id;
        var day = Sybase('input.slotText.day')[0].value;
        var month = Sybase('input.slotText.month')[0].value;
        if ( id == 'upButton_day'){
            day = parseInt(day) +1;
         
            switch( month ) {
               case 'Jan':
               case 'Mar':
               case  'May':
               case  'Jul':
               case  'Aug':
               case 'Oct':
               case 'Dec': if ( day > 31 ) {day = 1; } break;
               case 'Feb': if ( day > 28 ) { day = 1; }
               case 'Apri':
               case 'Jun':
               case 'Sep':
               case 'Nov':if ( day > 30 ) { day = 1; } break;
            }
            
        }else if ( id =='downButton_day') {
            day = parseInt(day) -1;
           
            switch( month ) {
               case 'Jan':
               case 'Mar':
               case  'May':
               case  'Jul':
               case  'Aug':
               case 'Oct':
               case 'Dec': if ( day <1 ) {day =31; } break;
               case 'Feb': if ( day <1) { day = 28; }
               case 'Apri':
               case 'Jun':
               case 'Sep':
               case 'Nov':if ( day <1 ) { day = 30; } break;
            }
        }
        Sybase('input.slotText.day')[0].value= day; 
        this.updateTitle();
    },
    
    handleMonthChange:function( target ){
        var id = target.id;
        var value = Sybase('input.slotText.month')[0].value;
        var idx = parseInt( this.anotherMonths[ value ]);
      
        if ( id == 'upButton_month') {
            if ( idx == 12 ) {
                 idx = 1;
            }else {
                 idx = idx +1;
            }
        }else if ( id == 'downButton_month'){
            if ( idx == 1) {
	            idx = 12;
	        }else {
	           idx = idx -1;
	        }
        }
          
        Sybase('input.slotText.month')[0].value = this.months[ idx];
        this.updateTitle( );
    },
     
    handleYearChange:function( target ){
        var year =  Sybase('input.slotText.year')[0].value;
        id = target.getAttribute('id');
        
        if ( id =='upButton_year') {
            year  = parseInt(year) +1;
 	    }else if ( id = 'downButton_year') {
	        year = parseInt(year) -1;
	    }
	    Sybase('input.slotText.year')[0].value= year;
	    this.updateTitle();
    },
    
    format:function() {
        return  Sybase('input.slotText.year')[0].value  +"-"+ this.anotherMonths[  Sybase('input.slotText.month')[0].value]  +'-'+ Sybase('input.slotText.day')[0].value;
    },
 
    options: {
        defaultValue:null,
        onDone:null
    }

});


/************************** time picker ***********************************/

var timePicker =  Sybase.extend( {},  Sybase.sy.datePicker.prototype );

timePicker.prototype = {
     getPickerClass:function() {
         return "timepicker";
     },
    
     createMainSection:function(){
        this.slots = Sybase('<div class="slots">');
        this.pickerDiv.append( this.slots );
        
         if ( Sybase.ui.platform.isWindowIE ){
             this.slots[0].className = "slots windowIE";
         }
        
        var value = this.options.defaultValue;
        var time = value.split(':');
        var now = new Date();
        var isPm = false;
      
        var hour= now.getHours();
        var    minute = now.getMinutes();
        var    second = now.getSeconds();
        var isPm = false;
      
        if ( time.length > 0 ){
            hour = parseInt( time[0]);
             if ( hour > 12 ) {
                 hour = hour - 12;
                 isPm = true;
            }
        }
        if ( time.length > 1 ){
            minute= time[1];
        }
          if ( time.length > 2 ){
           second = time[2];
        }
        
        this.createSlot("hour", hour );
        this.createSlot("minute",minute);
        this.createSlot("second",second);
    
        /*   create switch buttons of AM and PM */
        var switchBt = Sybase('<input type="text"  class="slotText switchButton"  readonly value="">');
        switchBt.attr('id', 'textSlot_switchBt');
        if ( isPm  ) {
            switchBt.attr('value','PM' );
        }else {
            switchBt.attr('value', 'AM');
        }
        var slot  = Sybase('<div class="slot switchButton">');
        
        if ( Sybase.ui.platform.isWindowIE ) {
            slot[0].className = "slot switchButton windowIE"
    //        alert("ddd");
        }
    
        this.slots.append( slot);
        slot.append( switchBt );
           
        this.updateTitle( );
        var self = this;
        
        switchBt.bind( 'click' , function(event ) {  
            if ( Sybase.ui.platform.isMSIE ) {
                 self.handleSlotButtonClicked(event.srcElement );
            }else {
                self.handleSlotButtonClicked( this);
            }
        });
    },
      
    getResult:function(){
        var hour = Sybase('input.slotText.hour')[0].value ;
        var minutes = Sybase('input.slotText.minute')[0].value;
        var second = Sybase('input.slotText.second')[0].value
        var sel = Sybase('input.slotText.switchButton')[0].value;
        
        if ( sel == 'PM' ) {
            hour = parseInt( hour ) + 12;
        }
        return  hour +":"+minutes +":"+ second;
    },
       
    handleSlotButtonClicked:function( target) {
        var id = target.getAttribute('id');
        if ( id == 'upButton_hour' || id =='downButton_hour') {
            this.handleHourValueChange( target );
        }else if( id == 'upButton_minute' || id == 'downButton_minute'){
            this.handleMinuteChange( target );
        }else if ( id == 'textSlot_switchBt') {
            this.handleAmPmValueChange( target );
        }else  if( id == 'upButton_second' || id == 'downButton_second'){
            this.handleSecondValueChange( target);
        }
    },
    
    handleAmPmValueChange:function( target ){
        var value = Sybase('input.slotText.switchButton')[0].value;
        if ( value == 'PM' ) {
             Sybase('input.slotText.switchButton')[0].value = 'AM';
        }else if ( value == 'AM'){
            Sybase('input.slotText.switchButton')[0].value = 'PM';
        }
        
        this.updateTitle();
    },
    
    handleHourValueChange:function( target ){
        var id = target.id;
        var hour = Sybase('input.slotText.hour')[0].value;
        if ( id == 'upButton_hour'){
            hour = parseInt( hour) +1;
            if (  hour> 12 ) {
                 hour = 1;
            }   
        }else if ( id =='downButton_hour') {
            hour = parseInt( hour) -1;
            if ( hour < 1 ) {
                hour = 12;
            }
        }
        Sybase('input.slotText.hour')[0].value= hour;
        this.updateTitle( );
    
    },
    
    handleMinuteChange:function( target ){
        var id = target.id;
        var value = Sybase('input.slotText.minute')[0].value;
        if ( id == 'upButton_minute') {
            value = parseInt( value ) +1;
            if ( value > 59 ) {
                value = 0;
            }
        }else if ( id == 'downButton_minute'){
            value = parseInt( value ) -1 ;
            if ( value < 0 ){
                 value = 59;
            }
        }    
        Sybase('input.slotText.minute')[0].value = value;
         this.updateTitle( );
    },
    
    handleSecondValueChange:function( target ) {
        var id = target.id;
        var value = Sybase('input.slotText.second')[0].value;
        if ( id == 'upButton_second') {
            value = parseInt( value ) +1;
            if ( value > 59 ) {
                value = 0;
            }
        }else if ( id == 'downButton_second'){
            value = parseInt( value ) -1 ;
            if ( value < 0 ){
                 value = 59;
            }
        }    
        Sybase('input.slotText.second')[0].value = value;
         this.updateTitle( );
    },
    
    format:function() {
        var time = this.getResult();
        var ret = time.split(':');
        if ( this.options.precision == 'HOURS' ) {
            return ret[0];
        }else if ( this.options.precision == 'MINUTES'){
            return ret[0] +':'+ ret[1];
        }
        
        return ret[0]+':'+ ret[1] +':'+ ret[2];
    }
 }
 
timePicker.getPickerClass = timePicker.prototype.getPickerClass;
timePicker.getResult = timePicker.prototype.getResult;
timePicker.createMainSection = timePicker.prototype.createMainSection;
timePicker.format = timePicker.prototype.format;

timePicker.handleSlotButtonClicked = timePicker.prototype.handleSlotButtonClicked;
timePicker.handleAmPmValueChange = timePicker.prototype.handleAmPmValueChange;
timePicker.handleHourValueChange = timePicker.prototype.handleHourValueChange;
timePicker.handleMinuteChange = timePicker.prototype.handleMinuteChange;
timePicker.handleSecondValueChange = timePicker.prototype.handleSecondValueChange;

Sybase.widget("sy.timePicker",  timePicker );


/************************ datetime picker *******************************/

var datetimePicker =  Sybase.extend( {},  Sybase.sy.timePicker.prototype);
datetimePicker =  Sybase.extend( datetimePicker,  Sybase.sy.datePicker.prototype);

datetimePicker.prototype = {
     getPickerClass:function() {
        this.isDatetimePicker = true;
        return "datetimepicker";
     },
      getResult:function(){
         var day =  Sybase('input.slotText.day')[0].value;
         var month = this.anotherMonths[  Sybase('input.slotText.month')[0].value];
         var year = Sybase('input.slotText.year')[0].value;
      
         var now = new Date();
         now.setDate( day);
         now.setMonth( month-1);
         now.setYear( year);
         var date = now.toDateString();
        
         var hour = Sybase('input.slotText.hour')[0].value ;
         var minutes = Sybase('input.slotText.minute')[0].value;
         var second = Sybase('input.slotText.second')[0].value
         var sel = Sybase('input.slotText.switchButton')[0].value;
         if ( sel == 'PM' ) {
             hour = parseInt( hour ) + 12;
         }
         var time =   hour +":"+minutes +":"+ second;
         return  date +' ' + time;
     
    },
    format:function() {
        var  ret = this.anotherMonths[  Sybase('input.slotText.month')[0].value]  +'/'+ Sybase('input.slotText.day')[0].value +'/'+  Sybase('input.slotText.year')[0].value;
 
         var hour = Sybase('input.slotText.hour')[0].value ;
         var minutes = Sybase('input.slotText.minute')[0].value;
         var second = Sybase('input.slotText.second')[0].value
         var sel = Sybase('input.slotText.switchButton')[0].value;
         if ( sel == 'PM' ) {
             hour = parseInt( hour ) + 12;
         }
         var time =   hour +":"+minutes +":"+ second;
         
        if ( this.options.precision == 'HOURS' ) {
            ret = ret +" " + hour;
        }else if ( this.options.precision == 'MINUTES'){
            ret = ret + " " + hour + ":"+ minutes;
        }
        ret = ret +" " + hour +":"+minutes+":"+ second;
        
        return  ret;
    }
  
 
}
datetimePicker.getPickerClass = datetimePicker.prototype.getPickerClass;
datetimePicker.getResult = datetimePicker.prototype.getResult;
datetimePicker.format = datetimePicker.prototype.format;

Sybase.widget("sy.datetimePicker", datetimePicker  );



