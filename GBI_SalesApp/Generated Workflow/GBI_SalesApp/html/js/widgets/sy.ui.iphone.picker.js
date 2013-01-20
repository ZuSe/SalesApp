$.widget("sy.valuePicker", {

    _init:function() {
    },

   _refreshSlots:function() {
   },
    
    addSlot: function (values, style, defaultValue, miniValue, maxValue) {
        if (!style) {
            style = '';
        }
        style = style.split(' ');
        for (var i = 0; i < style.length; i += 1) {
            style[i] = 'sw-' + style[i];
        }
        style = style.join(' ');
        var obj = { 'values': values, 'style': style, 'defaultValue': defaultValue, miniValue: miniValue, maxValue:maxValue };
        this.slotData.push(obj);
    },
    
    open: function () {
        var self = this;

        if (isIOS5())
        {
            //  Make sure the datepicker doesn't popup when the control is readonly (attribute is 'disabled')
            var test = getAttribute(this.element[0], "disabled");
            if (test != null && test != undefined && test == 'disabled')
                return;
        }	
        
        this.slotData = [];
        this._refreshSlots();
        this.windowHeight = window.innerHeight;
            
        for( var i = 0; i < self.options.slots.length; i++ ){
            self.addSlot( self.options.slots[i].values, self.options.slots[i].position, self.options.slots[i].defaultValue , self.options.slots[i].miniValue, self.options.slots[i].maxValue);
        }
        this._createSlots();
        this.swWrapper.style.webkitTransitionTimingFunction = 'ease-out';
        this.swWrapper.style.webkitTransitionDuration = isAndroid() ? '200ms' : '400ms';

        //CR670123-2 Datepicker not showing in proper place when focus changed with keyboard up
        var distance =  self.windowHeight - window.innerHeight ;
        var ddd = 260- distance;
        this.swWrapper.style.webkitTransform = 'translate3d(0, -' + ddd + 'px, 0)';    
              
        this.screen= $( "<div>", {"class": "ui-picker-screen", "id":"pickerScreen"}).appendTo( $.mobile.activePage );
		this.screen.height( $(document).height() )
		//this.screen.attr('id', 'pickerScreen');
				
		this.screen.bind('click', function() {
		   self.cancelAction();
	       self.close();
		});
						
    },
    
    _createSlots: function () {
        var i, l, out, ul, div;
        this._reset();  // Initialize object variables

        // Create the Spinning Wheel main wrapper
        div = document.createElement('div');
        div.id = 'sw-wrapper';
        div.style.top = window.innerHeight + window.pageYOffset + 'px';     // Place the SW down the actual viewing screen
        div.style.webkitTransitionProperty = '-webkit-transform';
        div.innerHTML = '<div id="sw-header"><div id="sw-cancel">Cancel</' + 'div><div id="sw-done">Done</' + 'div></' + 'div><div id="sw-slots-wrapper"><div id="sw-slots"></' + 'div></' + 'div><div id="sw-frame"></' + 'div>';

        document.body.appendChild(div);

        this.swWrapper = div;                                                   // The SW wrapper
        this.swSlotWrapper = document.getElementById('sw-slots-wrapper');       // Slots visible area
        this.swSlots = document.getElementById('sw-slots');                     // Pseudo table element (inner wrapper)
        this.swFrame = document.getElementById('sw-frame');                     // The scrolling controller

        // Create HTML slot elements
        for (l = 0; l < this.slotData.length; l += 1) {
            // Create the slot
            ul = document.createElement('ul');
            out = '';
            for (i in this.slotData[l].values) {
                out += '<li>' + this.slotData[l].values[i] + '<' + '/li>';
            }
            ul.innerHTML = out;

            div = document.createElement('div');        // Create slot container
            div.className = this.slotData[l].style;     // Add styles to the container
            div.appendChild(ul);
    
            // Append the slot to the wrapper
            this.swSlots.appendChild(div);
            
            ul.slotPosition = l;            // Save the slot position inside the wrapper
            ul.slotYPosition = 0;
            ul.slotWidth = 0;
            ul.slotMaxScroll = this.swSlotWrapper.clientHeight - ul.clientHeight - 86;
            ul.style.webkitTransitionTimingFunction = 'cubic-bezier(0, 0, 0.2, 1)';     // Add default transition
            
            this.slotEl.push(ul);           // Save the slot for later use
            
            // Place the slot to its default position
            if (this.slotData[l].defaultValue != undefined && this.slotData[l].defaultValue != null) {
                this._scrollToValue(l, this.slotData[l].defaultValue);  
            }
        }
        
        this._calculateSlotsWidth();
        
        // Global events
        document.addEventListener('touchstart', this, false);           // Prevent page scrolling
        document.addEventListener('touchmove', this, false);            // Prevent page scrolling
        
        document.addEventListener('mousestart', this, false);           // Prevent page scrolling
        document.addEventListener('mousemove', this, false);            // Prevent page scrolling
    
    
        window.addEventListener('orientationchange', this, true);       // Optimize SW on orientation change
        window.addEventListener('scroll', this, true);              // Reposition SW on page scroll

        // Cancel/Done buttons events
        document.getElementById('sw-cancel').addEventListener('touchstart', this, false);
        document.getElementById('sw-done').addEventListener('touchstart', this, false);
        
        document.getElementById('sw-cancel').addEventListener('click', this, false);
        document.getElementById('sw-done').addEventListener('click', this, false);
        

        // Add scrolling to the slots
        this.swFrame.addEventListener('touchstart', this, false);
        this.swFrame.addEventListener('mousedown', this, false);
    },
    
    _reset: function () {
        this.slotEl = [];
        this.activeSlot = null;
        this.swWrapper = undefined;
        this.swSlotWrapper = undefined;
        this.swSlots = undefined;
        this.swFrame = undefined;
    },
    
    _calculateSlotsWidth: function () {
        var div = this.swSlots.getElementsByTagName('div');
        for (var i = 0; i < div.length; i += 1) {
            this.slotEl[i].slotWidth = div[i].offsetWidth;
        }
    },
    
    destroy: function () {
        this.swWrapper.removeEventListener('webkitTransitionEnd', this, false);

        this.swFrame.removeEventListener('touchstart', this, false);
        
        this.swFrame.removeEventListener('mousestart', this, false);

        document.getElementById('sw-cancel').removeEventListener('touchstart', this, false);
        document.getElementById('sw-done').removeEventListener('touchstart', this, false);

        document.getElementById('sw-cancel').removeEventListener('click', this, false);
        document.getElementById('sw-done').removeEventListener('click', this, false);

        document.removeEventListener('touchstart', this, false);
        document.removeEventListener('touchmove', this, false);
        
        document.removeEventListener('mousestart', this, false);
        document.removeEventListener('mousemove', this, false);
        
        window.removeEventListener('orientationchange', this, true);
        window.removeEventListener('scroll', this, true);
        
        this.slotData = [];
        
        this._reset();
        
        document.body.removeChild(document.getElementById('sw-wrapper'));
        this.screen.remove();
        //after close this picker, re-bind click handlers to all the pickers
          $('input[type="date"]').datePicker("bindClickEvent", true );
          $('input[type="time"]').timePicker("bindClickEvent", true );
          $('input[type="datetime-local"]').dateTimePicker("bindClickEvent", true );
          
          this.element.blur();
          
    },
    
    _onOrientationChange: function (e) {
        window.scrollTo(0, 0);
        this.swWrapper.style.top = window.innerHeight + window.pageYOffset + 'px';
        this._calculateSlotsWidth();
    },
    
    _onScroll: function (e) {
        this.swWrapper.style.top = window.innerHeight + window.pageYOffset + 'px';
    },

    _lockScreen: function (e) {
        e.preventDefault();
        e.stopPropagation();
    },


    getSelectedValues: function () {
        var index, count,
            i, l,
            keys = [], values = [];

        for (i in this.slotEl) {
            // Remove any residual animation
            this.slotEl[i].removeEventListener('webkitTransitionEnd', this, false);
            this.slotEl[i].style.webkitTransitionDuration = '0';

            if (this.slotEl[i].slotYPosition > 0) {
                this._setPosition(i, 0);
            } else if (this.slotEl[i].slotYPosition < this.slotEl[i].slotMaxScroll) {
                this._setPosition(i, this.slotEl[i].slotMaxScroll);
            }

            index = -Math.round(this.slotEl[i].slotYPosition / this.options.cellHeight);

            count = 0;
            for (l in this.slotData[i].values) {
                if (count == index) {
                    keys.push(l);
                    values.push(this.slotData[i].values[l]);
                    break;
                }
                
                count += 1;
            }
        }

        return { 'keys': keys, 'values': values };
    },

    _setPosition: function (slot, pos) {
        this.slotEl[slot].slotYPosition = pos;
        this.slotEl[slot].style.webkitTransform = 'translate3d(0, ' + pos + 'px, 0)';
    },
    
    _scrollStart: function (e) {
        // Find the clicked slot
        var xPos = -1;
        if ( e.targetTouches != null ){
            var xPos = e.targetTouches[0].clientX - this.swSlots.offsetLeft;    // Clicked position minus left offset (should be 11px)
        }else {
             xPos = e.clientX - this.swSlots.offsetLeft;
        }
        
        
        // Find tapped slot
        var slot = 0;
        for (var i = 0; i < this.slotEl.length; i += 1) {
            slot += this.slotEl[i].slotWidth;
            
            if (xPos < slot) {
                this.activeSlot = i;
                break;
            }
        }

        // If slot is readonly do nothing
        if (this.slotData[this.activeSlot].style.match('readonly')) {
            this.swFrame.removeEventListener('touchmove', this, false);
            this.swFrame.removeEventListener('touchend', this, false);
            
            this.swFrame.removeEventListener('mousemove', this, false);
            this.swFrame.removeEventListener('mouseup', this, false);
            
            return false;
        }

        this.slotEl[this.activeSlot].removeEventListener('webkitTransitionEnd', this, false);   // Remove transition event (if any)
        this.slotEl[this.activeSlot].style.webkitTransitionDuration = '0';      // Remove any residual transition
        
        // Stop and hold slot position
        var theTransform = window.getComputedStyle(this.slotEl[this.activeSlot]).webkitTransform;
        theTransform = new WebKitCSSMatrix(theTransform).m42;
        if (theTransform != this.slotEl[this.activeSlot].slotYPosition) {
            this._setPosition(this.activeSlot, theTransform);
        }
        
        if ( e.targetTouches != null ){
             this.startY = e.targetTouches[0].clientY;
        }else {
              this.startY = e.clientY;
        }
        this.scrollStartY = this.slotEl[this.activeSlot].slotYPosition;
        this.scrollStartTime = e.timeStamp;

        //<--- added by yan 
        this.swFrame.addEventListener('mousemove', this, false );
        this.swFrame.addEventListener('mouseup', this, false);
        //---- end >
        this.swFrame.addEventListener('touchmove', this, false);
        this.swFrame.addEventListener('touchend', this, false);
        
        return true;
    },

    _scrollMove: function (e) {
    
        var topDelta = 0;
        if ( e.targetTouches != null ) {
             topDelta = e.targetTouches[0].clientY - this.startY;
        }else{
            topDelta = e.clientY  -this.startY;
        }
        
        if (this.slotEl[this.activeSlot].slotYPosition > 0 || this.slotEl[this.activeSlot].slotYPosition < this.slotEl[this.activeSlot].slotMaxScroll) {
            topDelta /= 2;
        }
        
        this._setPosition(this.activeSlot, this.slotEl[this.activeSlot].slotYPosition + topDelta);
        
        if ( e.targetTouches != null ){
             this.startY = e.targetTouches[0].clientY;
        }else{
             this.startY = e.clientY;
        }
        // Prevent slingshot effect
        if (e.timeStamp - this.scrollStartTime > 80) {
            this.scrollStartY = this.slotEl[this.activeSlot].slotYPosition;
            this.scrollStartTime = e.timeStamp;
        }
    },
    
    _scrollEnd: function (e) {
        this.swFrame.removeEventListener('touchmove', this, false);
        this.swFrame.removeEventListener('touchend', this, false);

        this.swFrame.removeEventListener('mousemove', this, false);
        this.swFrame.removeEventListener('mouseup', this, false);


        // If we are outside of the boundaries, let's go back to the sheepfold
        if (this.slotEl[this.activeSlot].slotYPosition > 0 || this.slotEl[this.activeSlot].slotYPosition < this.slotEl[this.activeSlot].slotMaxScroll) {
            this._scrollTo(this.activeSlot, this.slotEl[this.activeSlot].slotYPosition > 0 ? 0 : this.slotEl[this.activeSlot].slotMaxScroll);
            return false;
        }

        // Lame formula to calculate a fake deceleration
        var scrollDistance = this.slotEl[this.activeSlot].slotYPosition - this.scrollStartY;

        // The drag session was too short
        if (scrollDistance < this.options.cellHeight / 1.5 && scrollDistance > -this.options.cellHeight / 1.5) {
            if (this.slotEl[this.activeSlot].slotYPosition % this.options.cellHeight) {
                this._scrollTo(this.activeSlot, Math.round(this.slotEl[this.activeSlot].slotYPosition / this.options.cellHeight) * this.options.cellHeight, '100ms');
            }

            return false;
        }

        var scrollDuration = e.timeStamp - this.scrollStartTime;

        var newDuration = (2 * scrollDistance / scrollDuration) / this.options.friction;
        var newScrollDistance = (this.options.friction / 2) * (newDuration * newDuration);
        
        if (newDuration < 0) {
            newDuration = -newDuration;
            newScrollDistance = -newScrollDistance;
        }

        var newPosition = this.slotEl[this.activeSlot].slotYPosition + newScrollDistance;

        if (newPosition > 0) {
            // Prevent the slot to be dragged outside the visible area (top margin)
            newPosition /= 2;
            newDuration /= 3;

            if (newPosition > this.swSlotWrapper.clientHeight / 4) {
                newPosition = this.swSlotWrapper.clientHeight / 4;
            }
        } else if (newPosition < this.slotEl[this.activeSlot].slotMaxScroll) {
            // Prevent the slot to be dragged outside the visible area (bottom margin)
            newPosition = (newPosition - this.slotEl[this.activeSlot].slotMaxScroll) / 2 + this.slotEl[this.activeSlot].slotMaxScroll;
            newDuration /= 3;
            
            if (newPosition < this.slotEl[this.activeSlot].slotMaxScroll - this.swSlotWrapper.clientHeight / 4) {
                newPosition = this.slotEl[this.activeSlot].slotMaxScroll - this.swSlotWrapper.clientHeight / 4;
            }
        } else {
            newPosition = Math.round(newPosition / this.options.cellHeight) * this.options.cellHeight;
        }

        this._scrollTo(this.activeSlot, Math.round(newPosition), Math.round(newDuration) + 'ms');
 
        return true;
    },

    _scrollTo: function (slotNum, dest, runtime) {
        this.slotEl[slotNum].style.webkitTransitionDuration = runtime ? runtime : '100ms';
        this._setPosition(slotNum, dest ? dest : 0);

        // If we are outside of the boundaries go back to the sheepfold
        if (this.slotEl[slotNum].slotYPosition > 0 || this.slotEl[slotNum].slotYPosition < this.slotEl[slotNum].slotMaxScroll) {
            this.slotEl[slotNum].addEventListener('webkitTransitionEnd', this, false);
        }
    },
    
    _scrollToValue: function (slot, value) {
        var yPos, count, i;

        this.slotEl[slot].removeEventListener('webkitTransitionEnd', this, false);
        this.slotEl[slot].style.webkitTransitionDuration = '0';
        
        count = 0;
        for (i in this.slotData[slot].values) {
            if (i == value) {
                yPos = count * this.options.cellHeight;
                this._setPosition(slot, yPos);
                break;
            }
            
            count -= 1;
        }
    },
    
    _backWithinBoundaries: function (e) {
        e.target.removeEventListener('webkitTransitionEnd', this, false);

        this._scrollTo(e.target.slotPosition, e.target.slotYPosition > 0 ? 0 : e.target.slotMaxScroll, '150ms');
        return false;
    },

    _tapDown: function (e) {
        e.currentTarget.addEventListener('touchmove', this, false);
        e.currentTarget.addEventListener('touchend', this, false);
        
        
        e.currentTarget.addEventListener('mousemove', this, false);
        e.currentTarget.addEventListener('mouseup', this, false);
        e.currentTarget.className = 'sw-pressed';
    },

    _tapCancel: function (e) {
        e.currentTarget.removeEventListener('touchmove', this, false);
        e.currentTarget.removeEventListener('touchend', this, false);
    
        e.currentTarget.removeEventListener('mousemove', this, false);
        e.currentTarget.removeEventListener('mouseup', this, false);
    
        e.currentTarget.className = '';
    },
    
    _tapUp: function (e) {
        this._tapCancel(e);

        if (e.currentTarget.id == 'sw-cancel') {
            this.cancelAction();
        } else {
        
           var vs = this.getSelectedValues().keys;
           for( var i =0; i< vs.length; i++ ){
               this.options.slots[i].defaultValue = vs[i];
           }
           var result = this._joinSelectedValue();
           this.doneAction( result);
           
        }
        
        this.close();
    },
    
    _joinSelectedValue: function(){
        return this.getSelectedValues().values.join('/')
    },
    
    _checkYearsLimit:function(){
         var nearTopPos = this.slotEl[0].slotYPosition +  5*this.options.cellHeight + 10 ;  //5 items away from the top 
         var miniValue = parseInt( this.slotData[0].miniValue );
         var values =this.getSelectedValues().values;
        
         if ( nearTopPos > 0 && miniValue > 1801 ) {
             var firstChild = this.slotEl[0].firstChild;
             var newMini = miniValue ;
             
             for( var k =1; k < 50; k++ ) {  //added another 50 years 
                 var newValue = miniValue  - k ;
                 var newLI = document.createElement("li");
                 newLI.appendChild(document.createTextNode( newValue ));
                 this.slotEl[this.activeSlot].insertBefore( newLI, firstChild );
                 firstChild = newLI;
                 newMini = newValue;
             }
            
             var years = {};
             for( j = newMini ; j <  parseInt( this.slotData[0].maxValue ) + 1 ; j++ ) {
                 years[ j] = j;
             }
            
             this.slotData[0].miniValue= newMini;
             this.slotData[0].values = years;
            
             this.slotEl[0].slotMaxScroll =  this.slotEl[0].slotMaxScroll - 50 * this.options.cellHeight;
             this._scrollToValue(0, values[0]);  //when inserted a child, the list moves one item down. need to reset the selected value.
         }

         var nearBottomPos = this.slotEl[this.activeSlot].slotYPosition -  5*this.options.cellHeight+ 10 ;  //5 items away from the top 
         var maxValue = parseInt( this.slotData[0].maxValue );
         if ( nearBottomPos< this.slotEl[0].slotMaxScroll && maxValue < 3000 ) {
             var newMax = maxValue;
             
             for( var k =1; k < 50; k++ ) {  //added another 50 years 
                 var newValue = maxValue  + k ;
                 var newLI = document.createElement("li");
                 newLI.appendChild(document.createTextNode( newValue ));
                 this.slotEl[this.activeSlot].appendChild( newLI);
                 newMax = newValue;
             }
             
             var years = {};
             for( j =  parseInt( this.slotData[0].miniValue ) ; j <  parseInt( newMax ) + 1 ; j++ ) {
                 years[j] = j;
             }
            
             this.slotData[0].maxValue= newMax;
             this.slotData[0].values = years;
             this.slotEl[0].slotMaxScroll =  this.slotEl[0].slotMaxScroll - 50 * this.options.cellHeight;
         }
         
         //if it's Feb, when year changed , we need to check if the days should changed from 29 to 28 or 28 to 29.
         if ( this.options.literalMonths.indexOf( values[1]) +1 == 2 ) {
             var days = this._getMonthDays(values[0],this.options.literalMonths.indexOf( values[1]) +1);
             var children = this.slotEl[2].childNodes;
             var len = children.length;
             if (len > days ) {  //remove one day.
                 this.slotEl[2].removeChild( children[len -1  ]);
                 this.slotEl[2].slotMaxScroll =  this.slotEl[2].slotMaxScroll + this.options.cellHeight;
                 
                 if ( parseInt( values[2]) > days ){
                     this._scrollToValue(2, days);
                 }
             }else if ( len < days ) { //add one day.
                 var newValue =len +1;
                 var newLI = document.createElement("li");
                 newLI.appendChild(document.createTextNode( newValue ));
                 this.slotEl[2].appendChild( newLI);
                 this.slotEl[2].slotMaxScroll =  this.slotEl[2].slotMaxScroll - this.options.cellHeight;
             }
             
             if ( len != days ) {
                 var newValues = {};
                 for( var i = 1; i < days +1; i++) { newValues[ i] = i; }
                 this.slotData[2].values =  newValues;
             }
         }
         
    },
   
    _getMonthDays:function( year, month ){
        var endDay = 31;
        if ( month == 2 ) {
            if ( !(year % 4) && (year % 100) || !(year % 400) ) {
               endDay = 29;
            }else{
               endDay = 28;
            }
        }else if (   month == 4 || month == 6 || month == 9 || month == 11 )  {
            endDay = 30;
        }
        
        return endDay;
    },
    
    _verifyMonthDays:function() {
        var days = {};
        var values =  this.getSelectedValues().values;
        var days = this._getMonthDays(values[0],this.options.literalMonths.indexOf( values[1]) +1);
     
        var children = this.slotEl[2].childNodes;
        var len = children.length;
      
        if ( len != days ) {
            var newValues = {};
            for( var i = 1; i < days +1; i++) { newValues[ i] = i; }
            this.slotData[2].values =  newValues;
        }
        var selectedDay = values[2];
        
        //if current selected day is greater than the days selected month's days. 
        if ( parseInt( values[2]) > days ){
           this._scrollToValue(2, days);
        }
        
        while( len > days ) {//need to remove extr days 
            this.slotEl[2].removeChild( children[ len-1 ]);
            len = children.length;
            this.slotEl[2].slotMaxScroll =  this.slotEl[2].slotMaxScroll + this.options.cellHeight;
        }
        
        while(  len < days) { //need to add more days.
            var newValue =len +1;
            var newLI = document.createElement("li");
            newLI.appendChild(document.createTextNode( newValue ));
            this.slotEl[2].appendChild( newLI);
            len = children.length;
            this.slotEl[2].slotMaxScroll =  this.slotEl[2].slotMaxScroll - this.options.cellHeight;
        }
          
    },
    
    setCancelAction: function (action) {
        this.cancelAction = action;
    },

    setDoneAction: function (action) {
        this.doneAction = action;
        },
    
    cancelAction: function () {
        return false;
    },

    cancelDone: function () {
        return true;
    },
    
    handleEvent: function (e) {
    
          if ( e.type == 'click' && ((e.currentTarget.id == 'sw-done') || (e.currentTarget.id == 'sw-cancel'))){
            this._tapUp(e);
          }
        if (e.type == 'touchstart'||   e.type=='mousedown'  ) {
      
            if (e.currentTarget.id == 'sw-cancel' || e.currentTarget.id == 'sw-done') {
                 this._lockScreen(e);
                this._tapDown(e);
            } else if (e.currentTarget.id == 'sw-frame') {
                  this._lockScreen(e);
                this._scrollStart(e);
            }
        } else if (e.type == 'touchmove' || e.type == 'mousemove') {
            this._lockScreen(e);
            
            if (e.currentTarget.id == 'sw-cancel' || e.currentTarget.id == 'sw-done') {
                this._tapCancel(e);
            } else if (e.currentTarget.id == 'sw-frame') {
                this._scrollMove(e);
            }
        } else if (e.type == 'touchend' || e.type == 'mouseup') {
            if (e.currentTarget.id == 'sw-cancel' || e.currentTarget.id == 'sw-done') {
                this._tapUp(e);
            } else if (e.currentTarget.id == 'sw-frame') {
                this._scrollEnd(e);
                
                if (  this.element.attr('type') == "date" || this.element.attr('type') == "datetime-local") {
                    if ( this.activeSlot == 0 ) {  // check to see if we need to add 50 more years to either way.
                        this._checkYearsLimit();
                    }else if ( this.activeSlot == 1 ) { //if this is month, adjust the days of the month 
                        this._verifyMonthDays();
                    }
                }
             
            }
        } else if (e.type == 'webkitTransitionEnd') {
            if (e.target.id == 'sw-wrapper') {
                this.destroy();
            } else {
                this._backWithinBoundaries(e);
            }
        } else if (e.type == 'orientationchange') {
            this._onOrientationChange(e);
        } else if (e.type == 'scroll') {
            this._onScroll(e);
        }
    },
    
    close: function () {
        this.swWrapper.style.webkitTransitionTimingFunction = 'ease-in';
        this.swWrapper.style.webkitTransitionDuration = isAndroid() ? '200ms' : '400ms';
        this.swWrapper.style.webkitTransform = 'translate3d(0, 0, 0)';
        this.swWrapper.addEventListener('webkitTransitionEnd', this, false);
    },
    
    options: {
      literalMonths:[ 'Jan', 'Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
      cellHeight: 44,
      friction: 0.003,
      slots:[],
      eventbind: null,  
      onDone:null,
      onCancel:null
    }
});


var DatePicker =  $.extend({}, $.sy.valuePicker.prototype, 
          (function(orig) {
               return {
               _init: function() {
                   this.element.bind('focus',function() { 
                       if ( $(window).scrollTop() > 0 ) {
                         //  $(window).scrollTop(0);  //CR656483-1  doesn't seem to happen , commented it because the side-effetion was alway move the page content to top location.
                       }
                   });
               
                   this.slotData = [];
                   var self = this;
                   if ( self.options.onCancel != null ) {
                      this.cancelAction = self.options.onCancel;
                   }else{
                        this.cancelAction = function (){
                        	if (isLocaleDatetimeFormat(this.element[0]) && !isIOS5()) {
                                var cType = getAttribute(this.element[0], "sup_html_type");
                                if (cType === "time") {
                                    this.element[0].value = getLocaleTimeString(new Date(parseTime(this.element[0].ISODateTimeValue)));
                                }
                                else if (cType === "date") {
                                    this.element[0].value = getLocaleDateString(new Date(parseDateTime(this.element[0], this.element[0].ISODateTimeValue)));
                                }
                                else if (cType === "datetime-local") {
                                    this.element[0].value = getLocaleDateTimeString(new Date(parseDateTime(this.element[0], this.element[0].ISODateTimeValue)));
                                }
                            }
                        };
                   }
                   if ( self.options.onDone != null ) {
                        this.doneAction = self.options.onDone;
                   }else {
                        this.doneAction = function( value ){
                        	if (isLocaleDatetimeFormat(this.element[0])  && !(isIOS5())) {
                                var cType = getAttribute(this.element[0], "sup_html_type");
                                if (cType === "time") {
                                    this.element[0].ISODateTimeValue = value;
                                    this.element[0].value = getLocaleTimeString(new Date(parseTime(this.element[0].ISODateTimeValue)));
                                }
                                else if (cType === "date") {
                                    this.element[0].ISODateTimeValue = value;
                                    this.element[0].value = getLocaleDateString(new Date(parseDateTime(this.element[0], this.element[0].ISODateTimeValue)));
                                }
                                else if (cType === "datetime-local") {
                                    this.element[0].ISODateTimeValue = value;
                                    this.element[0].value = getLocaleDateTimeString(new Date(parseDateTime(this.element[0], this.element[0].ISODateTimeValue)));
                                }
                            }
                        	else{
                        		if ( isIOS5() ){
                        			if ( this.element.attr('sup_precision') === 'HOURS'){
                        				value = value + ":00:00";
                        			 }else if ( this.element.attr('sup_precision') === 'MINUTES'){
                        				 value = value + ":00";
                        			 }
                        		}
                        		this.element[0].value = value;
                        	}
                        };
                   }
                  
                   this.clickHandler = function( ) {
                        //before open this picker, remove the click handlers for all the pickers.
                        $('input[type="date"]').datePicker("bindClickEvent", false );
                        $('input[type="time"]').timePicker("bindClickEvent", false );
                        $('input[type="datetime-local"]').dateTimePicker("bindClickEvent", false );
                          
                        if (isAndroid())
                        	window.setTimeout(function(){self.open();}, 200);
                        else
                        	self.open();
                       
                        event.preventDefault();
                        event.stopPropagation();
                   };
				   
				    // CR 690091 iOS5 doesn't respond to the click but it does respond to the vclick.
					if (isIOS5()){
						this.element.bind('vclick', this.clickHandler);		
					}
					else {
						this.element.bind('click',this.clickHandler );
					}             
               },
              
               bindClickEvent:function( bind ){
                   if ( bind ){
                       this.element.bind('click',this.clickHandler );
                   }else {
                       this.element.unbind('click');
                   }
               },
            
               _refreshSlots:function() {
                   var self = this;
                   self.options.slots = this._createDateSlots();   
               },
             
               _createDateSlots: function() {
                   var now = new Date();
                   var days = { };
                   var years = { };
                   var months = { 1: 'Jan', 2: 'Feb', 3: 'Mar', 4: 'Apr', 5: 'May', 6: 'Jun', 7: 'Jul', 8: 'Aug', 9: 'Sep', 10: 'Oct', 11: 'Nov', 12: 'Dec' };
                   
                   var defaultValue;
				   var isLocalizedDisplay = this.element.attr('isLocalizedDisplay');
				   if(isLocalizedDisplay == "false" || isLocalizedDisplay == undefined || isLocalizedDisplay == null || isIOS5()) {
						defaultValue = this.element.prop('value');
				   }
				   else if(isLocalizedDisplay == "true") {
						defaultValue = this.element.prop('ISODateTimeValue');
				   }
              
                   if ( defaultValue.indexOf('T') >0 ) {
                       defaultValue = defaultValue.split('T')[0];
                   }
            
                   var defDate = [];
                   if ( defaultValue  != null ){
                        defDate = defaultValue.split('/');
                        this.separator = "/";
                        if ( defDate.length < 3 ) {
                            defDate= defaultValue.split('-');
                            this.separator = "-";
                        }
                   }else {
                       defDate.push( now.getFullYear());
                       defDate.push(now.getMonth());
                       defDate.push(now.getDay()); 
                   } 
                   
                   var start= parseInt( defDate[0]  ); 
                   for( i = start - 50; i <=start +50; ) {
                       years[i] = i;
                       i = i+1;
                   } 
                   
                   var endDay = this._getMonthDays( defDate[0], defDate[1]);
                   for( var i = 1; i < endDay+1; i += 1 ) { days[i] = i; }
                 
                   var slotY = { values: years, position: '', defaultValue: defDate[0], miniValue:start - 50 ,maxValue: start +50 };
                
                   if ( defDate[1].charAt(0) == '0' ) {
                       defDate[1] = defDate[1].replace('0', '');
                   }
                   if (  defDate[2].charAt(0) == '0' ) {
                       defDate[2] = defDate[2].replace('0', '');
                   }
                   var slotM = { values: months, position: '', defaultValue: parseInt( defDate[1]) };
                   var slotD = { values: days, position: '', defaultValue: parseInt( defDate[2]) };
                   return [ slotY, slotM, slotD];
               },
               
               _joinSelectedValue:function(){
                   var values =this.getSelectedValues().values;
                   var ret = [];
                   ret.push( values[0]);
                   var month = this.options.literalMonths.indexOf( values[1]) +1;
                   if ( parseInt( month ) < 10 ) {
                       month = '0' + month;
                   }
                   ret.push( month);
                   
                   var rate = values[2];
                   if ( parseInt( values[2]) < 10 ) {
                       ret.push( '0' + values[2]);
                   }else {
                       ret.push( values[2]);
                   }
                   return ret.join( this.separator);
              }
              }; /* end of return */
    })($.sy.valuePicker.prototype[ "_init", "_joinSelectedValue"]));

$.widget ('sy.datePicker', DatePicker);

var TimePicker =  $.extend({}, $.sy.datePicker.prototype, 
          (function(orig) {
               return {
               _refreshSlots:function() {
                   var self = this;
                   self.options.slots = this._createTimeSlots();   
               },          
               
               _createTimeSlots:function() {
                   var now = new Date();
                   var hours = ['1', '2','3','4','5','6','7','8','9','10','11','12'];
                   var mins = {};
                   
                   for( var i = 0; i < 60; i += 1 ) { 
                       if ( i < 10 ){
                           mins[i]= '0' + i;
                       }else{
                           mins[i] = i;
                       }
                   }
                   
                   var seconds = {};
                   
                   for( var i = 0; i<59; i+=1 ) {
                       seconds[i]=i+1;
                   }

                   var defaultValue;
				   var isLocalizedDisplay = this.element.attr('isLocalizedDisplay');
				   if(isLocalizedDisplay == "false" || isLocalizedDisplay == undefined || isLocalizedDisplay == null || isIOS5()) {
						defaultValue = this.element.prop('value');
				   }
				   else if(isLocalizedDisplay == "true") {
						defaultValue = this.element.prop('ISODateTimeValue');
				   }
            
                   if ( defaultValue.indexOf('T') >0 ) {
                       defaultValue = defaultValue.split('T')[1];
                   }

                   var defData = [];
                    
                   if (  defaultValue  != null ){
                       var d = defaultValue .split(':');
                       if ( d[0].charAt(0) == '0' ) {
                            d[0] = d[0].replace('0','');
                       }
                       
                       if ( d.length < 2 ){
                    	   d[1]='0';
                    	   d[2]='0';
                       }else if ( d.length < 3){
                    	   d[2]='0';
                       }
                       
                       if ( d[1].charAt(0) == '0') {
                            d[1] = d[1].replace('0','');
                       }
                       
                       if ( d[2].charAt(0) == '0') {
                           d[2] = d[2].replace('0','');
                       }
                     
                       if ( parseInt( d[0]) > 12 ){
                           defData[0] = parseInt( d[0]) -13;
                           defData[3] = 1;
                       }
                       else if (parseInt(d[0]) === 12) {
                    	   defData[0] = 11; 
                           defData[3] = 1;
                       }
                       else if (parseInt(d[0]) === 0) {  //00 -> 12:00 am 
                           defData[0] = 11;
                           defData[3] = 0;
                       }
                       else {    
                           defData[0] = parseInt(d[0]) -1;
                           defData[3] = 0;
                       }
                       
                       defData[1] = parseInt(d[1]);
                       defData[2] = parseInt( d[2]);
                   }
                   var h = now.getHours();
                   var ap ="AM";
                   if ( h > 12 ){
                       h = h -12;
                       ap = "PM";
                   }
                   
                   var readOnlyM ="";
                   var readOnlyS ="";
                   
                   if ( this.element.attr('sup_precision') === 'HOURS') {
                	   readOnlyM= "readonly";
                	   readOnlyS ="readonly";
                   }else if ( this.element.attr('sup_precision') === 'MINUTES'){
                	   readOnlyS ="readonly";
                   }
                   var slotH = { values: hours, position: '', defaultValue:defData[0],style:'readonly'};
                   var slotM = { values: mins, position: readOnlyM, defaultValue:defData[1]};
                   var slotS = { values: mins, position: readOnlyS, defaultValue:defData[2]};
                   var slotAP = { values: ["AM","PM"], position: '', defaultValue:defData[3] };
                   return [slotH, slotM, slotS,slotAP];
               },
                
               _joinSelectedValue:function(){
                   var values =this.getSelectedValues().values;
                   var ret = [];
                   if ( values[3] == 'PM') {
                	   if (values[0] === "12") {
                		   ret.push("12");
                	   }
                	   else {
                           ret.push( parseInt( values[0]) + 12 );
                	   }
                   }
                   else if (values[0] === "12") {  //12:00 am -> 00:00 in 24 hour
                       ret.push('00');
                   }
                   else if ( parseInt(  values[0] ) < 10 ) {
                      ret.push( '0'+ parseInt( values[0] ));
                   }else {
                       ret.push( values[0]);
                   }
                   
                   ret.push( values[1]);
                   ret.push( values[2]);
                     
                   if ( this.element.attr('sup_precision') === 'HOURS'){
	                    return ret[0];
                   }else if ( this.element.attr('sup_precision') === 'MINUTES'){
	                    return ret[0] +":"+ ret[1];
                   }
                
                   return ret.join(':');
               }
               }; /* end of return */
              
    })($.sy.valuePicker.prototype[ "_refreshSlots", "_joinSelectedValue"]));

$.widget ("sy.timePicker",  TimePicker);


var DateTimePicker =  $.extend({}, $.sy.timePicker.prototype, $.sy.datePicker.prototype,
   (function(orig) {
               return {
               _refreshSlots:function() {
                    var self = this;
                    self.options.slots = this._createDateSlots(); 
                    self.options.slots = self.options.slots.concat( this._createTimeSlots()); 
               },

               _joinSelectedValue:function() {
                   var values =this.getSelectedValues().values;
                   var retStr = ""; 
                   var ret = [];
                   ret.push( values[0]);
                  
                   var month = this.options.literalMonths.indexOf( values[1]) +1;
                   if ( parseInt( month ) < 10 ) {
                       month = '0' + month;
                   }
                   ret.push( month);
                 
                   var day = values[2];
                   
                   if (parseInt( day ) < 10 ) {
                       day = '0' + day;
                   }  
                   ret.push( day );
                   retStr = ret.join( "-");
 
                   ret = [];
                   if ( values[6] == 'PM') {
                	   if (values[3] === "12") {
                		   ret.push("12");
                	   }else {
                           ret.push( parseInt( values[3]) + 12 );
                	   }
                   }else if (values[3] === "12") {  //12:00 am -> 00:00 in 24 hour
                       ret.push('00');
                   }else if ( parseInt( values[3] ) < 10 ) {
                       ret.push('0'+ parseInt( values[3] ));
                   }else {
                   	   ret.push(values[3]);
                    }
                    
                    if ( parseInt( values[4]) < 10 ) {
                        ret.push('0' + parseInt( values[4]));
                    }else {
                        ret.push( values[4]);
                    }
                    ret.push(values[5]);
                    
                    if ( this.element.attr('sup_precision') === 'HOURS'){
	                    return retStr + "T" + ret[0];
                   }else if ( this.element.attr('sup_precision') === 'MINUTES'){
	                    return retStr + "T" + ret[0] +":"+ ret[1];
                   }
                    
                    retStr = retStr + "T" + ret.join(":");
                    return retStr
               }
               }; // end of return 
              
    })($.sy.valuePicker.prototype[ "_updateSlots", "_joinSelectedValue"]));

$.widget ("sy.dateTimePicker",  DateTimePicker);
