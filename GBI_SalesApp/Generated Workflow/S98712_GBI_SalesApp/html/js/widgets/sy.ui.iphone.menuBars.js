
$.widget("sy.menuBar", {
	_create: function(){
		this.screenName = this.element.parent().attr('id');
	},
	_isThisScreen:function( screenName ) {
		return ( this.screenName === screenName );
	},
	_makeButton: function(  bt){
		
		//Check if this button has been initialized.
		if ( !bt.getAttribute('data-theme') || bt.getAttribute('class').indexOf('ui-btn')< 0 ){
			$(bt).buttonMarkup({
				theme:this.element.closest('div[data-role="page"]').attr('data-theme')
			});
		} 
	} ,
	_reArrangeBttons:function( buttons, isActionSheetBtAtCenter ){
		// We have to clone firt and then remove and then add the again
		var newButtons = [];
		for( var i =0; i < buttons.length; i++ ) {
			newButtons[i] = buttons[i].clone();
			buttons[i].remove();
		}

		for( var i =0; i < buttons.length; i++ ) {
			newButtons[i].insertBefore( this.element.find('a')[i]);
		}

		if ( isActionSheetBtAtCenter){
			//newButtons[1].addClass( 'ui-btn-center');
			newButtons[1].actionSheet();
		}
	},
	refresh:function() {

	},
	positionButtons:function() {
	}

});

$.widget ("sy.menuHeaderBar",   $.extend({}, $.sy.menuBar.prototype,
		(function(orig) {
			return {
				positionButtons:function() {
					var self = this,leftbt,rightbt,title = this.element.children(".ui-title"),
					buttons = this.element.find('a');
					
					if ( buttons.length == 0) {
						return ;
					}

					for( var i = 0; i < buttons.length; i++ ) {
						this._makeButton( buttons[i]);
						if ( buttons[i].getAttribute('class').indexOf('ui-btn-left') >= 0 ||rightbt) {
							leftbt = $(buttons[i]);
							if (  buttons[i].getAttribute('class').indexOf('ui-btn-lef')< 0 ) {
								$(buttons[i]).addClass('ui-btn-left' );
							}
						}else if ( buttons[i].getAttribute('class').indexOf('ui-btn-right') >= 0 || leftbt ) {
							rightbt =$( buttons[i]);
							if (  buttons[i].getAttribute('class').indexOf('ui-btn-right')< 0 ) {
								$(buttons[i]).addClass('ui-btn-right' );
							}
						}
					}
					//keep default width, otherwise, when rotation, we don't know real width
					var defLeftW = leftbt.attr('defaultWidth');
					if (! defLeftW ) {
						defLeftW = leftbt.width();
						leftbt.attr('defaultWidth', defLeftW );
					}

					var defTitleW =   title.attr('defaultWidth');
					if ( !defTitleW ){
						defTitleW = title.width();
						title.attr('defaultWidth',   defTitleW);
					}

					if (rightbt&& rightbt.length > 0 ) {
						var defRightW = rightbt.attr('defaultWidth');
						if (! defRightW ) {
							defRightW = rightbt.width();
							rightbt.attr('defaultWidth', defRightW );
						} 

						var emptySpace = this.element.width()- defLeftW  - defTitleW - defRightW -20; //bt ( 5px + border 2X1 ) X2 + title marge 3X2 = 20px
						var half = parseInt( emptySpace/2 -1);


						if (emptySpace > 0 ) {   //we have more space on the bar.
							title.css("width", defTitleW +'px');  //restore the original width 
							leftbt.css("width", defLeftW +'px');  
							rightbt.css("width", defRightW +'px'); 

							//Try to put title at the center of the screen instead of between two buttons.
							var headerWidth = this.element.width();
							var num1 = parseInt( defLeftW ) + 7;
							var num2 =  parseInt( defRightW  ) + 7;
							if ( num1  < headerWidth/2 && num2  < headerWidth/2 ) {
								var margForCentrTitle =parseInt( headerWidth )/2 - 7 - parseInt( defLeftW )- parseInt(defTitleW )/2 ;
								if ( margForCentrTitle < 0 ) {
									title.css("margin-left", '3px');
								}else {
									var overlap=  parseInt( headerWidth ) - parseInt( defLeftW ) - 7 - parseInt( defRightW ) - 7 - margForCentrTitle - parseInt( defTitleW );
									if (overlap < 0 ) {
										margForCentrTitle = margForCentrTitle + overlap;
									}
									title.css("margin-left",margForCentrTitle+'px');
								}
							}else if (  num1 > headerWidth/2 )  {
								title.css("margin-left",'0px'); //center the title.
							}else if ( num2 > headerWidth/2 ) {
								emptySpace = emptySpace -2;
								title.css("margin-left", emptySpace +'px'); //center the title.
							}else {
								title.css("margin-left",half +'px'); //center the title.
							}

						}else {  // we don't have enough space,need to squeeze left button and title just as iphone app does for their navigation bar.
							title.css("margin-left",'3px');
							var lfbt = parseInt( defLeftW) +parseInt( half);
							var squeezeSize = 0;
							if ( lfbt < 60 ) { //minimum we need 60 px for the button.
								leftbt.css( "width", "60px");
								squeezeSize  = lfbt - 60;
							}else {
								leftbt.css( "width", lfbt +"px");
							}

							var tl =  parseInt( defTitleW ) +parseInt( half);

							if (tl < 60 ) {
								title.css( 'width', "60px");
								squeezeSize = squeezeSize + tl - 60;
							}else {
								title.css( 'width', tl  +"px");
							}
							rightbt.css( 'width',defRightW  +"px");
							if ( squeezeSize < 0  ) { 
								var  maxW = 0;
								var obj = null;
								if ( leftbt.width() > maxW ) {
									maxW = leftbt.width();
									obj = leftbt;
								} 

								if ( rightbt.width() > maxW ) {
									maxW = rightbt.width();
									obj = rightbt;
								}
								if ( title.width() > maxW ) {
									maxW = title.width();
									obj = title;
								}
								if ( obj != null ) {
									var newW =  maxW + squeezeSize;
									obj.css('width',newW );
								}
							}
						} //end of emptySpace < 0 
					}else if (leftbt.length > 0 ) { //no right button, only left button and title.
						var emptySpace = this.element.width()- defLeftW  - defTitleW -13; //left bt start at 5px + border 2px + title margin 2X3px = 13px
						var half = parseInt( emptySpace/2 -1);
						if ( emptySpace < 0 ) {  //squeeze title and left button.
							title.css("margin-left",'3px');
							var lf = parseInt( defLeftW) +parseInt( half);
							leftbt.css("width", lf+ "px")

							var tl =  parseInt( defTitleW ) +parseInt( half);
							title.css("width", tl+ "px")
						}else {
							title.css("margin-left",half +'px');  //center the title
							title.css("width", defTitleW +'px');  
							leftbt.css("width", defLeftW +'px');  

							//Try to put title at the center of the screen instead of between two buttons.
							var headerWidth = this.element.width();
							var num1 = parseInt( defLeftW ) + 7;
							if ( num1 < headerWidth/2 ){
								var margForCentrTitle =parseInt( headerWidth )/2 - 7 - parseInt( defLeftW ) - parseInt(defTitleW )/2 ;
								if ( margForCentrTitle < 0 ) {
									title.css("margin-left", '0px');
								}else {
									title.css("margin-left",margForCentrTitle+'px');
								}
							}else {
								title.css("margin-left",'0px'); //center the title.
							}
						}
					}

				}, //end of function positonButtons.
			}; // end of return 

		})($.sy.menuBar.prototype[ "positionButtons"]))

);


$.widget ("sy.menuFooterBar",   $.extend({}, $.sy.menuBar.prototype,
		(function(orig) {
			return {
				positionButtons:function() {
					var bts = this.element.find('a[data-role="button"]').not( 'a#'+ this.screenName +'ActionSheet' );
					var hiddentbs = this.element.find('a[data-role="menu"]');
				
					if ( (bts.length + hiddentbs.length ) === 0 ){
						return;
					}
					var btleft,btright,btcenter;

					for( var i =0; i < bts.length; i++ ) {
						this._makeButton( bts[i]);
						if ( bts[i].getAttribute('class').indexOf('ui-btn-left') >= 0 ) {
							btleft = bts[i];
						}else  if ( bts[i].getAttribute('class').indexOf('ui-btn-right') >= 0 ) {
							btright = bts[i];
						}else  if ( bts[i].getAttribute('class').indexOf('ui-btn-center') >= 0 ) {
							btcenter = bts[i];
						}  
					}
					
					if ((bts.length + hiddentbs.length ) === 0 ) {
						this.element.css('display', 'none');
					}else {
						this.element.css('display', 'block');
					}

					var actionSheetBt = $('a#'+ this.screenName +'ActionSheet');
					var needRepositonButtons = true;
					var hasActionSheetBt = actionSheetBt.length > 0 ;

					//1. Set the right visible buttons , user could custom code to add/remove menus. 
					// If we have more than three menus, we need to have actionSheet button 
					if ( (bts.length + hiddentbs.length ) > 3 ) {
						if ( hasActionSheetBt && bts.length == 2 ) {
							needRepositonButtons = false;
						}

						if ( needRepositonButtons ) {
							if (actionSheetBt.length === 0 ) { //no actionSheet button, need to create one.
								 $('<a href="javascript:void(0)"  data-role="button" data-icon="plus"  class="ui-btn-center"  id="' +this.screenName +'ActionSheet' + '">...</a> ').appendTo( this.element );
								    actionSheetBt = $('a#'+ this.screenName +'ActionSheet');
								    actionSheetBt.buttonMarkup();
						   }

							if ( bts.length === 0 ) {  // Get two menus from actionsheet and move to  footer bar as buttons
								$(hiddentbs[0]).removeClass('invisible_button ui-btn-right').addClass('ui-btn-left');
								$(hiddentbs[0]).attr('data-role', 'button');
								btleft= hiddentbs[0];

								$(hiddentbs[1]).removeClass('invisible_button ui-btn-left').addClass('ui-btn-right');
								$(hiddentbs[1]).attr('data-role', 'button');
								btright = hiddentbs[1];
							}else if ( bts.length ===1 ) {//Get one menu from actionsheet and move to  footer bar as button
								if (  btleft ) { //if we already have left , move to right 
									$(hiddentbs[0]).removeClass('invisible_button ui-btn-left ui-btn-center').addClass('ui-btn-right');
									$(hiddentbs[0]).attr('data-role', 'button');
									btright =hiddentbs[0]; 
								}else{
									$(hiddentbs[0]).attr('data-role', 'button');
									$(hiddentbs[0]).removeClass('invisible_button ui-btn-right ui-btn-center ').addClass('ui-btn-left');
									btleft = hiddentbs[0];
								}
							}
							actionSheetBt.removeClass( 'ui-btn-right ui-btn-left');

							//Alway try to key left button on the first , actionSheetBut on the second and the right button on the third.
							this._reArrangeBttons([ $( btleft), actionSheetBt, $( btright)], true );
						}

					}else if ( (bts.length + hiddentbs.length ) === 3 ) {  //We only have three menus , check to see if we need to re-locating the menus as buttons.
						if ( actionSheetBt.length ===0 && bts.length ==3  ) {
							needRepositonButtons = false;
						}

						if (needRepositonButtons ){
							if ( actionSheetBt.length === 1 ) {  //remove actionSheet button
								actionSheetBt.remove(); 
							}

							if ( bts.length === 0 ) {  //no visible button on the bar, remove two menu from actionsheet to footer bar , 

								$(hiddentbs[0]).removeClass('invisible_button ui-btn-right').addClass('ui-btn-left');
								$(hiddentbs[0]).attr('data-role', 'button');
								btleft = hiddentbs[0];

								$(hiddentbs[1]).removeClass('invisible_button ui-btn-left ').addClass('ui-btn-center');
								$(hiddentbs[1]).attr('data-role', 'button');
								btcenter= hiddentbs[1];

								$(hiddentbs[2]).removeClass('invisible_button ui-btn-left ui-btn-center').addClass('ui-btn-right');
								$(hiddentbs[2]).attr('data-role', 'button');
								btright= hiddentbs[2];

							}else if ( bts.length ===1  ||  bts.length === 2) {//Only one visible button on the bar , remove two  menus from actionsheet to footer bar as visible buttons

								for( var j = 0; j < hiddentbs.length && j < bts.length ; j++) {
									$(hiddentbs[j]).attr('data-role', 'button');
									if (! btleft ) { //if we already have left , put it into right  
										$(hiddentbs[j]).removeClass('invisible_button ui-btn-right ui-btn-center').addClass('ui-btn-left');
										btleft = hiddentbs[j];
									}else  if ( ! btcenter) {
										$(hiddentbs[j]).removeClass('invisible_button ui-btn-left ui-btn-right').addClass('ui-btn-center');
										btcenter = hiddentbs[j];
									}else if (! btright ){
										$(hiddentbs[j]).removeClass('invisible_button ui-btn-right ui-btn-center').addClass('ui-btn-right');
										btright= hiddentbs[j];
									}
								}
							}

							//Alway try to key left button on the first ,center btton  on the second and the right button on the third.
							this._reArrangeBttons([ $( btleft), $(btcenter), $( btright)], false );

						}
					}else { //We only have menus less than 3. that means maximum would be two button on the bar.
						if ( actionSheetBt.length === 0 && hiddentbs.length === 0 ) { //if we don't have actionSheet button and hidden button is zero, no action needed.
							needRepositonButtons = false;
						} 

						if ( needRepositonButtons) {
							if ( actionSheetBt.length === 1 ) {  //Remove the actionSheet button. 
								actionSheetBt.remove(); 
							}
							if ( bts.length === 0 ) { //if we have zero visible button, move menus from actionsheet to the bar.
								for( var j = 0; j < hiddentbs.length; j++) {
									$(hiddentbs[j]).attr('data-role', 'button');
									if ( ! btleft ) { //if we already have left , move to right 
										$(hiddentbs[j]).removeClass('invisible_button ui-btn-right ui-btn-center').addClass('ui-btn-left');
										btleft = hiddentbs[j]
									}else  if (  ! btright ) {
										$(hiddentbs[j]).removeClass('invisible_button ui-btn-left ui-btn-center').addClass('ui-btn-right');
										btright= hiddentbs[j]
									}
								}
							}else if ( bts.length ===1 ) {// We have one visible button on the bar, move another one from actionsheet.
								$(hiddentbs[0]).attr('data-role', 'button');

								if (  !btleft ) { //if we already have left , move to right 
									$(hiddentbs[j]).removeClass('invisible_button ui-btn-right ui-btn-center').addClass('ui-btn-left');
								}else{
									$(hiddentbs[j]).removeClass('invisible_button ui-btn-left ui-btn-center').addClass('ui-btn-right');
								}
							}
						}
					}

					//2. Let's adjust the position of each button.
					var bt1W=0, bt2W=0, bt3W=0;
					var hasActionSheetBt = false;

					var bts = this.element.find('a[data-role="button"]');


					if ( bts.length > 1 ) {   //if we have 2 or 3 buttons on the footer, 
						bt1W  =  $(bts[0]).attr("defaultWidth");
						if ( !bt1W ) {
							bt1W =  $(bts[0]).width();
							$(bts[0]).attr("defaultWidth", bt1W);
						}
						bt2W  =  $(bts[1]).attr("defaultWidth");
						if ( !bt2W ) {
							bt2W =  $(bts[1]).width();
							$(bts[1]).attr("defaultWidth", bt2W);
						}
					}
					if ( bts.length > 2 ) {
						bt3W  =  $(bts[2]).attr("defaultWidth");
						hasActionSheetBt = $(bts[1]).attr('id').indexOf('ActionSheet') > 0;

						if ( !bt3W ) {
							bt3W =  $(bts[2]).width();
							$(bts[2]).attr("defaultWidth", bt3W);
							if ( !hasActionSheetBt ) {
								$(bts[1]).addClass('ui-btn-center');
							}
						} 
					}
					var  emptySpace = this.element.width() - bt1W - bt2W - bt3W - 6 -25; //left button and right button have margin-left 5 px and margin-right 5 px;
					if ( emptySpace > 0){

						if ( bts.length == 3 ) {
							if ( hasActionSheetBt ) {
								$(bts[1]).css('margin-right', '0px'); //default it has 3 px , set it to 0 px.
								$(bts[1]).css('margin-left', parseInt( emptySpace/2 -1 ) + 'px'); //center the center button.
								$(bts[0]).css('width', parseInt( bt1W)); //restore other buttons' width.
								$(bts[2]).css('width', parseInt( bt3W ));
							}else {
								$(bts[1]).css('margin-right', '0px'); //default it has 3 px , set it to 0 px.
								$(bts[1]).css('margin-left', parseInt( emptySpace/2 -1 ) + 'px'); //center the center button.
								$(bts[0]).css('width', parseInt( bt1W)); //restore other buttons' width.
								$(bts[1]).css('width', parseInt( bt2W));
								$(bts[2]).css('width', parseInt( bt3W ));
							}
						}else if ( bts.length == 2 ){
							$(bts[0]).css('width', parseInt( bt1W)); //restore other buttons' width.
							$(bts[1]).css('width', parseInt( bt2W ));
						}
					}else {   //we need to squeeze the buttons. 
						if ( bts.length == 3) {
							$(bts[1]).css('margin-left','10px');
							$(bts[1]).css('margin-right','0px');
							var squeezeSize = 0;
							if ( hasActionSheetBt ) { //try only shrink left and right button.
								emptySpace =  emptySpace - 20;
								var half =  emptySpace/2;
								var bt0 = parseInt(bt1W) + parseInt(half ); 
								if ( bt0 < 60 ) {
									$(bts[0]).css('width', '60px' );
									squeezeSize  = bt0 - 60 ;
								}else{
									$(bts[0]).css('width', bt0 +'px');
								}
								var bt2 = parseInt( bt3W ) + parseInt( half );

								if (  bt2 < 60 ) {
									$(bts[2]).css('width', '60px' );
									squeezeSize =  squeezeSize +  bt2 - 60 ;
								}else {
									$(bts[2]).css('width',bt2 +'px');
								}
							}else {
								var reduceSize= ( emptySpace - 10 )/3 -5;
								var bt0 = parseInt( bt1W )  + parseInt(reduceSize ) ; 
								if (  bt0  < 60 ) {
									$(bts[0]).css('width','60px');
									squeezeSize = bt0 - 60 ;
								}else {
									$(bts[0]).css('width', bt0 +'px');
								}

								var bt1 = parseInt( bt2W)  + parseInt( reduceSize ) ; 
								if ( bt1 < 60 ) {
									$(bts[1]).css('width', '60px');
									squeezeSize = squeezeSize + bt1 - 60 
								}else {
									$(bts[1]).css('width', bt1 +'px');
								}
								var bt2 = parseInt( bt3W ) + parseInt(reduceSize );

								if ( bt2 < 60 ) {
									$(bts[2]).css('width', '60px');
									squeezeSize = squeezeSize+ bt2 - 60; 
								}else {
									$(bts[2]).css('width',  bt2 +'px');
								}
							}
							if (squeezeSize < 0 ) {
								var i;
								var maxIdx =0;
								var  maxW = 0;
								for( i=0; i < 3 ; i++ ) {
									var w  = $(bts[i]).width();
									if ( w > maxW ) {
										maxW = w ;
										maxIdx = i;
									}
								}
								var newW = $(bts[maxIdx]).width() + parseInt(squeezeSize );
								$(bts[maxIdx]).css( 'width',  newW +'px');
							}
						} else if ( bts.length == 2 ){
							var bt0 = parseInt( bt1W) + parseInt( emptySpace/2-5 );
							var bt1 = parseInt( bt2W) + parseInt( emptySpace/2-5 );
							if ( bt0 < 60 ) {
								$(bts[0]).css('width', '60px');
								var newW = bt1 +  bt0 - 60 ;
								$(bts[1]).css('width', newW +'px' );
							}else {
								$(bts[0]).css('width', bt0 +'px');
							}
							if ( bt1 < 60 ) {
								$(bts[1]).css('width', '60px');
								var newW = bt0 +  bt1 - 60 ;
								$(bts[0]).css('width', newW +'px' );
							}else {
								$(bts[1]).css('width', bt1 +'px');
							}
						}
					} 
				} // end of positionButton function 


			}; // end of return 

		})($.sy.menuBar.prototype[ "positionButtons"]))

);
