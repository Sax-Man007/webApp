var rightSidebarStickyAd=function(){var adScroller=jQuery('.dsk-box-ad-a');var sidebarAdAnchor=jQuery('.dsk-box-ad-a-anchor');var adHaltAnchor=jQuery('.halt-sidebar-ad');if(!adScroller.length||!sidebarAdAnchor.length||!adHaltAnchor.length){return;}
var screenTopMargin=15;var screenBottomMargin=15;var makeSideAdSticky=function(){var screenPosition=jQuery(window).scrollTop();var adHeight=adScroller.outerHeight();var adAnchorPosition=sidebarAdAnchor.offset().top;var adHaltAnchorPosition=adHaltAnchor.offset().top;adHaltAnchorPosition=adHaltAnchorPosition-adHeight-screenTopMargin;if((screenPosition+screenBottomMargin)>adHaltAnchorPosition){adScroller.css({position:'fixed',top:-(screenPosition-adHaltAnchorPosition)+screenTopMargin-screenBottomMargin});}else if((screenPosition+screenTopMargin)>adAnchorPosition){adScroller.css({position:'fixed',top:screenTopMargin+'px'});}else if(screenPosition<=adAnchorPosition){adScroller.css({position:'relative',top:''});}};jQuery(window).scroll(makeSideAdSticky);}();var popupHeight=$('#cookie-optin').height()/2;$('#cookie-optin button').css({'top':popupHeight});function setCookieOptin(cname,cvalue,days){var date=new Date();date.setTime(date.getTime()+365*24*60*60*1000);var expires='; expires='+date.toGMTString();document.cookie=cname+'='+cvalue+expires+';path=/';}
function getCookieOptin(cname){var name=cname+'=';var decodedCookie=decodeURIComponent(document.cookie);var ca=decodedCookie.split(';');for(var i=0;i<ca.length;i++){var c=ca[i];while(c.charAt(0)==' '){c=c.substring(1);}
if(c.indexOf(name)==0){return c.substring(name.length,c.length);}}
return '';}
function checkCookieOptin(){var user=getCookieOptin("cookieoptin");if(user!=""){$('#cookie-optin').removeClass('visible');}else{$('#cookie-optin').addClass('visible');$('#cookie-optin button').click(function(){setCookieOptin("cookieoptin","onit",365);$('#cookie-optin').removeClass('visible');})}}
checkCookieOptin();function popup(url,title,w,h){var dualScreenLeft=window.screenLeft!==undefined?window.screenLeft:screen.left;var dualScreenTop=window.screenTop!==undefined?window.screenTop:screen.top;width=window.innerWidth?window.innerWidth:document.documentElement.clientWidth?document.documentElement.clientWidth:screen.width;height=window.innerHeight?window.innerHeight:document.documentElement.clientHeight?document.documentElement.clientHeight:screen.height;var left=((width/2)-(w/2))+dualScreenLeft;var top=((height/2)-(h/2))+dualScreenTop;var newWindow=window.open(url,title,'scrollbars=yes, width='+w+', height='+h+', top='+top+', left='+left);if(window.focus){newWindow.focus();}
return false;}
var LOCALIZE_DATES=(function($){var localizeDateSelector=$('.localize-date');var initialize=function(){setupSelectors();$(function(){});};var setupSelectors=function(){if(localizeDateSelector.length){localizeDate();}};var localizeDate=function(){var monthNames=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];var today=new Date();var yesterday=new Date();yesterday.setDate(yesterday.getDate()-1);localizeDateSelector.each(function(i,obj){var postdatetime=$(obj).data('datetime');if(postdatetime){var postdate=output=new Date(postdatetime);if(postdate.toDateString()==today.toDateString()){var hoursAgo=(today-postdate)/36e5;if(hoursAgo<1){output='now'}else{output=parseInt(hoursAgo)+' hours ago';}}
else if(postdate.toDateString()==yesterday.toDateString()){output='yesterday';}
else{output=monthNames[postdate.getMonth()]+' '+postdate.getDate()+' '+postdate.getFullYear();}
$(obj).html(output);}});};return initialize();})(jQuery);var offsetMobile=0;if($(window).width()<768){var offsetMobile=60;}
$(".bonus a, .bonus-content a").on('click',function(event){var hash=this.hash;$('html, body').animate({scrollTop:$(hash).offset().top-offsetMobile},800,function(){window.location.hash=hash;});});$("#membership-menu nav a").on('click',function(event){var hash=this.hash;$('html, body').animate({scrollTop:$(hash).offset().top-offsetMobile},800,function(){window.location.hash=hash;});if(hash='theblackhole'){$('.btn-menu').click();}});if($(window).width()<768){var myHeight=$(window).height()-50;$('#membership-menu nav').css({'height':myHeight});var navMarginTop=($('#membership-menu nav').height()/2)-($('#membership-menu nav ul').height()/2)-30;$('#membership-menu nav ul').css({'margin-top':navMarginTop});$('.btn-menu').click(function(){if($('.line-1').hasClass('rotate-top')){$('.line-1').removeClass('rotate-top');$('.line-2').removeClass('rotate-disappear');$('.line-3').removeClass('rotate-bottom');$('#membership-menu nav').fadeOut(300);$('#membership-menu').removeClass('fixed');}
else{$('.line-1').addClass('rotate-top');$('.line-2').addClass('rotate-disappear');$('.line-3').addClass('rotate-bottom');$('#membership-menu nav').addClass('on');$('#membership-menu nav').fadeIn(300);$('#membership-menu').addClass('fixed');}});}
jQuery('.search').on('click','.search-icon',function(el){jQuery('.search').toggleClass('active');jQuery('.search input[name="s"]').focus();});var SHOW_MORE_JS=(function($){var showMoreSelector='[data-action="show_more"]';var initialize=function(){$(function(){setupSelectors();});};var setupSelectors=function(){if(showMoreSelector.length){showMore();}};var showMore=function(){$(document).on('click',showMoreSelector,function(e){e.preventDefault();var that=$(this);var args={page:that.attr('data-page'),cat:that.attr('data-cat'),author:that.attr('data-author'),home:that.attr('data-home')};wp.ajax.send('show_more',{success:function(res){that.attr('data-page',res.page);$('.show-more-target').append(res.content);},error:function(err){console.error(err);},data:args});});};return initialize();})(jQuery);