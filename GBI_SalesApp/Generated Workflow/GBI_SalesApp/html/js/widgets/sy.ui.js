/**************************************************/
(function( window, undefined ) {
        var Sybase = function( selector, context ) {
        return new Sybase.fn.init( selector, context );
    }
    
    Sybase.prototype = {
        init:function( selector ){
            /* expose attach all the methods defined here */
            var self = this;
            self.addMenueIitems = Sybase.fn.addMenuItems;
            if ( ! selector ) {
                return this;
            }
            self.selector = selector;
            if ( typeof selector === "string" ||
                selector.nodeType && selector != document ) {
              
                var tagName = "";
                var className = ""
                if ( typeof selector === "string" ) {
                    tagName = selector;
                    var names = selector.split( "." );
                    if ( names.length > 1) {
                         tagName = names[0];
                         className = selector.substring( tagName.length +1 );
                     }
                } 
           
                self =  Sybase.extend(true, {}, Sybase.sy );
                self.elements = [];
                
                var startChar =  tagName.charAt(0);
                var endChar =  tagName.charAt( tagName.length -1 );
                if ( startChar == '<' && endChar == '>') {
                    self.elements = [buildFragment( tagName )];
                }
                
                /*  add sy ui widget prototye */
                self.selector = selector;
                self.children = Sybase.prototype.children;
                self.css = Sybase.css
                self.width = Sybase.prototype.width;
                self.height = Sybase.prototype.height;
                self.wrap = Sybase.prototype.wrap;
                self.append = Sybase.prototype.append;
                self.attr = Sybase.prototype.attr;
                self.removeClass = Sybase.prototype.removeClass;
                self.addClass = Sybase.prototype.addClass;
                self.after = Sybase.prototype.after;
                self.before = Sybase.prototype.before;
                self.bind = Sybase.prototype.bind;
                
                 self.eventListeners = [];
                
                if ( self.elements.length == 0 ){
                    if (  selector.nodeType ) {
                        self.elements = [ selector];
                    }else{
                        self.elements = Sybase.fn.getElements( tagName, className );
                    }
                }
               
                self.length = self.elements.length;
                
                for( var i = 0; i < self.elements.length; i++ ){
                    self[i]= self.elements[i];
                }
                return self;
            } 
           
            self.selector = selector;
            self.readyList = [];
            self.ready = Sybase.prototype.ready;
            self.execReadyList = Sybase.prototype.execReadyList;
           
            return this;
        },
        ready:function( func ){ 
            var self = this;
             try {
            if( window.addEventListener ){
                window.addEventListener( "load",function(){ self.execReadyList()  },false );
            }else if ( window.attachEvent) {
                window.attachEvent( "onload",function(){ self.execReadyList()  },false );
            }
           } catch (exc){
               alert( exc );
           }
            this.readyList.push( func);
        },
     
        execReadyList:function() {
            var fn, i = 0;
            while ( (fn = this.readyList[ i++ ]) ) {fn.call( );}
        },
        
        getElements:function( tagName, className ){
            var id = null;
            var idx =  tagName.indexOf('#');
            
            if (  idx > 0 ) {
                id = tagName.substring( idx +1, tagName.length );    
                tagName = tagName.substring( 0,idx);
            }
             var attIdx1 = tagName.indexOf('[');
             var attIdx2= tagName.indexOf(']');
             var attIdx3 = tagName.indexOf('=');
             var attName= null;
             var attValue= null;
           
            if ( attIdx2 > attIdx1 && attIdx3 > attIdx1 && attIdx3 < attIdx2  ) {
                attName = tagName.substring( attIdx1 +1, attIdx3 );
                attValue = tagName.substring( attIdx3 +2, attIdx2-1);
                tagName = tagName.substring( 0, attIdx1);
            }
            
            var  elements =  document.getElementsByTagName( tagName );
            if ( className === "" && id == null) {
                 return  elements;
            }
            var ret = [];
            
            var idIdx = className.indexOf('#');
            if ( idIdx > 0 ) {
               if ( id == null ) {
                   id = className.substring(  idIdx +1 , className.length );
               }
               className = className.substring( 0, idIdx );
            }
       
            var childTagName = null;
            var idx = className.indexOf(' ');
            
            if ( idx > 0 ) {
                childTagName = className.substring( idx +1 );
                className = className.substring(0, idx);
            }
       
            className = className.replace('.',' ');
           
            for( var i = 0; i < elements.length; i++ ) {
                var obj = elements[ i].className;
               
                if ( obj.match( className) )  {
                    if ( childTagName != null ) { 
                          var children = elements[ i].children;
                          
                          for( var j = 0; j < children.length; j++ ) {
                             var child = children[j];
                             var test =  child.tagName ;
                             if ( test == childTagName.toUpperCase() ){
                                   ret.push( child);
                             }
                          }
                          
                    }else if ( id != null && id.length > 0) {
                        var elId = elements[i].getAttribute('id');
                        if ( elId != null && elId == id ){
                            if ( attName != null && attValue != null 
                                && elements[i].getAttribute(attName) == attValue  ) {
                                ret.push( elements[ i]);
                            }else {
                                ret.push( elements[ i]);
                            }
                        }
                    }else {
                        ret.push( elements[ i]);
                    }
                }
             }
             return ret;
        },
        isArray: function( obj ) {
            return  Object.prototype.toString.call(obj) === "[object Array]";
           // return toString.call(obj) === "[object Array]";
        },
        isPlainObject: function( obj ) {
            var test = Object.prototype.toString.call(obj)!== "[object Object]" ;
        
            if ( !obj ||  test || obj.nodeType || obj.setInterval ) {
            
            //if ( !obj || toString.call(obj) !== "[object Object]" || obj.nodeType || obj.setInterval ) {
                return false;
            }
            //if ( obj.constructor
            //  && !hasOwnProperty.call(obj, "constructor")
            //  && !hasOwnProperty.call(obj.constructor.prototype, "isPrototypeOf") ) {
            //  return false;
            //}
            
            
            if ( obj.constructor
                && !Object.prototype.hasOwnProperty.call(obj, "constructor")
                && !Object.prototype.hasOwnProperty.call(obj.constructor.prototype, "isPrototypeOf") ) {
                return false;
            }
            
            
            var key;
            for ( key in obj ) {}
            
            return key === undefined || Object.prototype.hasOwnProperty.call( obj, key );
        },
        
        children:function( tagName ){
            var ret = [];
            var children = this[0].childNodes;
            for( var i = 0; i < children .length ; i++ ) {
                var tag = children[i].tagName;
                if ( !tagName  || ( tag && tag == tagName.toUpperCase() )) {
                    ret.push( children[i]);
                }
            }
            return ret;
        },
        width:function( ) {
          //  alert(" in width()");
            var test = this.elements[0];
            var w = test.offsetWidth;
            return w;
        },
        height:function( ) {
         //  alert(" in height()");
           var test = this.elements[0];
           var h = test.offsetHeight;
           return h;
        },
        attr:function( name, value ) {
            this[0].setAttribute( name, value );
        },
        removeClass:function(){
            this[0].className = "";
        },
        addClass:function( className ) {
            if ( this[0].className.length > 0 ) {
                className = " " + className;
            }
            this[0].className = this[0].className + className;
        },
        wrap:function( outElement ){
            var ele = buildFragment( outElement);
            this[0].parentNode.insertBefore( ele,  this[0]);
            ele.appendChild( this[0]);
           // alert("wapped");
        },
        append:function ( element ){
           this[0].appendChild( element[0] );
        },
        
        after:function( element ) {
           this[0].parentNode.insertBefore( element[0],  this[0].nextSibling);
        },
        
        before:function( element  ){
              this[0].parentNode.insertBefore( element[0],  this[0]);
        },
        bind:function( eventName, func ) {
            
            var list = this.eventListeners;
            var self = this;
            if ( eventName == 'click' ) {
                if (  Sybase.ui.platform.isBlackberry ) {
                    //eventName = 'focus';
                }else if ( Sybase.ui.platform.isMSIE ) {
                    eventName = 'onclick';
                }
            }
         
            if( this[0].addEventListener ) {
                this.eventListeners[eventName] = func;
                this[0].addEventListener(eventName, function( event) {
                    var fn = self.eventListeners[eventName];
                    fn.call( this, event );
                 
                }, false );
            }else if ( this[0].attachEvent ){
                this.eventListeners[eventName] = func;
                this[0].attachEvent(eventName, function( event) {
                    var fn = self.eventListeners[eventName];
                    fn.call( this, event );
                 
                }, false );
    
            }
        },
        removeChildren:function() {
           var children = this[0].children;
           for( var i = 0; i < children.length; i++ ) {
               var child = children[i];
               this[0].removeChild( child);
             //  var className = child.className;
               //TODO: remove the object we created for the widgets.
               
           }
             
        }
        
    }
     
    Sybase.fn = Sybase.prototype;
    
    Sybase.extend = Sybase.fn.extend = function() {
        var target = arguments[0] || {}, i = 1, length = arguments.length, deep = false, options, name, src, copy;
        
        if ( typeof target === "boolean" ) {
            deep = target;
            target = arguments[1] || {};
            // skip the boolean and the target
            i = 2;
        }
    
        // Handle case when target is a string or something (possible in deep copy)
        if ( typeof target !== "object" && !isFunction(target) ) {
            target = {};
        }
    
        // extend jQuery itself if only one argument is passed
        if ( length === i ) {
            target = this;
            --i;
        }
    
        for ( ; i < length; i++ ) {
            // Only deal with non-null/undefined values
            if ( (options = arguments[ i ]) != null ) {
                // Extend the base object
                for ( name in options ) {
                    src = target[ name ];
                    copy = options[ name ];
    
                    // Prevent never-ending loop
                    if ( target === copy ) {
                        continue;
                    }
    
                    // Recurse if we're merging object literal values or arrays
                    if ( deep && copy && ( Sybase.fn.isPlainObject(copy) || Sybase.fn.isArray(copy) ) ) {
                        var clone = src && (  Sybase.fn.isPlainObject(src) ||  Sybase.fn.isArray(src) ) ? src
                            :  Sybase.fn.isArray(copy) ? [] : {};
    
                        // Never move original objects, clone them
                        target[ name ] =  Sybase.extend( deep, clone, copy );
    
                    // Don't bring in undefined values
                    } else if ( copy !== undefined ) {
                        target[ name ] = copy;
                    }
                }
            }
        }
    
        // Return the modified object
        return target;
    };
    function getAttribute( name, text ) {
        var ret = null;
        var idx = -1;
       
        switch ( name ) {
            case '<':   
                ret = /<([\w:]+)/.exec( text);
                if ( ret != null && ret.length > 0) ret =  ret[0].replace(/</,'');
                return ret;
            case 'class':
            case 'type':
            case 'id':
            case 'value':
                idx =  text.indexOf( name +'="');
                break
           /* case 'type':
                ret = /(type=\"[\w:]+\")+/g.exec( text);
                if ( ret != null && ret.length > 0) ret =  ret[0].replace(/type=/g, '');
                break;
           case 'id':
                ret = /(id=\"[\w:]+\")+/g.exec( text);
                if ( ret != null && ret.length > 0) ret =  ret[0].replace(/id=/g, '');
                break;
                */
           case 'readonly':
                ret = /(readonly)+/g.test( text);
                return ret;
            case 'checked':
                ret = /(checked)+/g.test( text);
                return ret;
        }
        
        if ( idx > 0 ) {
            var idx1 = idx+ name.length +2;
            ret = text.substring(   idx1 , text.indexOf( '"', idx1));
        }
        if ( ret != null  ) {
            ret = ret.replace(/\"/g, '');
        }
        return ret;
    };
    
    function  isFunction( obj ) {
        return toString.call(obj) === "[object Function]";
    }
    
    function buildFragment( htmlText ) {
       var tagName = getAttribute('<', htmlText);
       var className = getAttribute('class', htmlText);
       var value = getAttribute('value', htmlText);
       var id = getAttribute('id', htmlText);
       var type = getAttribute('type', htmlText);
       var readonly = getAttribute('readonly', htmlText);
       var checked = getAttribute('checked', htmlText);
    
       if ( tagName != null ) {
           el = document.createElement( tagName );
       }
       
       if ( el != null ) {
            if ( className !== null ) {
                el.className = className;
            }
            
            if ( id != null ) {
                el.setAttribute('id', id );
            }
            
            if ( value  != null ) {
                el.setAttribute('value',  value);
            }
            
            if ( readonly ) {
                el.setAttribute('readonly','true');
            }
            if ( checked  ) {
                el.setAttribute('checked','true');
            }
       }
         
      return el;
    }
    // Expose Sybase to the global object
    window.Sybase = Sybase;

})(window);

/** Widget *******************************/

(function(Sybase ) {
    Sybase.widget = function( name, base, prototype )  {
        var namespace = name.split( "." )[ 0 ],
        fullName;
        name = name.split( "." )[ 1 ];
        fullName = namespace + "-" + name;
        
        if ( !prototype ) {
            prototype = base;
            base = Sybase.Widget;
        }
        
        Sybase[ namespace ] = Sybase[ namespace ] || {};
        var basePrototype = new base();
      
        Sybase[ namespace ][ name ] = function( options ) { 
            var ret = [];
          
             if ( typeof options === "string" && name == 'syListview' ) {
                  var obj = window['syListview'][this.selector];
                  if ( typeof  obj[options] ===  'function' ){
                         obj[options].apply(obj, Array.prototype.slice.call(arguments, 1));
                  }
                 return;
              }
        
        
            for( var i = 0; i < this.elements.length; i++) {
                 var newObj = Sybase.extend(true, {}, Sybase[ namespace ][ name ].prototype);
               newObj._createWidget( this.elements[i], options );
               newObj.index = i;
               newObj._init();
               
               if ( name == 'syListview'){
                   if ( typeof window['syListview']  == "undefined" ) 
                   {
                       window['syListview'] = [];
                   }
                   window[ 'syListview'][this.selector] = newObj;
               }
            }
        };
        
        Sybase[ namespace ][ name ].prototype = Sybase.extend( true, basePrototype,  prototype );
    }
    
    Sybase.Widget = function( element ,options) {
        if ( arguments.length ) {
           this._createWidget( element, options );
        }
    }
    
    
   Sybase.Widget.prototype = {
       _createWidget: function( element, options ) {
          this.element = Sybase( element );
          this.element.context = element;
          this.options = Sybase.extend( true, {}, options );
       },
       _create: function() {},
       _init: function() {},
       widget: function() { }
   }
    
})( Sybase);

/*************************** handle css ****************************/

(function(Sybase ) {
    Sybase.css = function( name, value )  {
        var elem = this.elements[0];
        var style = elem.style || elem;
        
        if ( ( Sybase.ui.platform.isWM65 || Sybase.ui.platform.isWM60 ||  Sybase.ui.platform.isIE ) && name =='background' ) {
            name = "backgroundColor";
        } 
       
        if ( value ) {
             if (   Sybase.ui.platform.isWM65 || Sybase.ui.platform.isWM60 || Sybase.ui.platform.isIE ) {
              style.setAttribute( name, value );
            }else {
               style[ name ] = value;
             }
         }
         
         if ( Sybase.ui.platform.isWM65 || Sybase.ui.platform.isWM60 || Sybase.ui.platform.isIE ){
             return style.name;
         }else {
             return style[ name ];
         }
      
         
    }

})( Sybase);


(function(Sybase ) { 
    var  parts = ['Sybase', 'ui'];
    var   object = window[parts[0]] = Object(window[parts[0]]);
    object = object[parts[1]] = Object(object[parts[1]]);
    Sybase.ui = object;   
   
    Sybase.ui.addMenuItems = (function( menuItems ){
        var test =  Sybase.extend( true, Sybase(), Sybase );
        test.fn.addMenuItems( menuItems );
    });
    
    Sybase.ui.platform = {
        userAgent: navigator.userAgent.toLowerCase(),
        isWebkit: /webkit/i.test(navigator.userAgent.toLowerCase()),
        isAndroidOS: /android/i.test(navigator.userAgent.toLowerCase()),
        isIPhoneOS: /iphone|ipad/i.test(navigator.userAgent.toLowerCase()),
        isBlackberry: /blackberry/i.test(navigator.userAgent.toLowerCase()),
        hasOrientationChange: ('onorientationchange' in window),
        isWM65: /windows phone 6.5/i.test( navigator.userAgent.toLowerCase()),
        isWM60: /iemobile/i.test( navigator.userAgent.toLowerCase()) && (/msiemobile6.0/i.test( navigator.userAgent.toLowerCase())),
        isWindowIE: /msie/i.test( navigator.userAgent.toLowerCase()) && !( /windows phone 6.5/i.test( navigator.userAgent.toLowerCase()) || /iemobile/i.test( navigator.userAgent.toLowerCase()) ),
        isMSIE: /msie/i.test( navigator.userAgent.toLowerCase()),
        hasTouch: ('ontouchstart' in window)
    };
    
    Sybase.ui.tableLayout = (function( screenId  ){
    	//close popup value picker if any
        for (var i = 0; i < Sybase('div.valuepicker').length; i++) {
            Sybase('div.valuepicker')[i].parentNode.removeChild(Sybase('div.valuepicker')[i]);
        }
        var divPage =  document.getElementById( screenId );
        var  forms =  divPage.getElementsByTagName('form');
        var lbs  = forms[0].getElementsByTagName('label');

        var maxLabelWidth = 0;
		var pageWidth = divPage.offsetWidth;
        var maxInputWidth = divPage.offsetWidth; 

		// Calculate max label width
        for( var i = 0; i < lbs.length; i++ ) {
			var isLabelOnTop = lbs[i].className.indexOf('top') != -1;
			var tmpLabelWidth = lbs[i].offsetWidth;
			
            if ( !isLabelOnTop ) {
                maxLabelWidth = tmpLabelWidth > maxLabelWidth ? tmpLabelWidth : maxLabelWidth;
            }
        }
        
		// Default input width
        maxInputWidth = divPage.offsetWidth - maxLabelWidth -20; 
        
        for( var i = 0; i < lbs.length; i++ ) {
			var isLabelOnTop = lbs[i].className.indexOf('top') != -1;
			var tmpLabelWidth = isLabelOnTop ? pageWidth-10 : maxLabelWidth;
			var tmpInputWidth = isLabelOnTop ? pageWidth-10 : maxInputWidth;

            lbs[i].style.width = tmpLabelWidth +'px';
            
            var offset = 4; // input image height is less than others
            offset = isLabelOnTop ? lbs[i].clientHeight + offset : offset;
            var inputs = lbs[i].parentNode.getElementsByTagName('input');
			if ( inputs.length != 0 ) {
				if (!isLabelOnTop) offset = 2;
			} else {
				inputs = lbs[i].parentNode.getElementsByTagName('textarea');
				inputs = inputs.length == 0 ? lbs[i].parentNode.getElementsByTagName('div') : inputs;
			}
			for(var j = 0; j < inputs.length; j++) {
				if (inputs[j].getAttribute('type') == "checkbox") continue;
				if (j < inputs.length && inputs[j].getAttribute('id') == lbs[i].getAttribute('for')){
					inputs[j].style.width = tmpInputWidth +'px';
					inputs[j].parentNode.style.height = (inputs[j].clientHeight + offset) + 'px';
				}
			}
         }
         
    });
 })( Sybase);

