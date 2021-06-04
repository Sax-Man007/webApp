"use strict";!function(){var e={},t={isEnabled:!1,isMobileEnabled:!0,clickthroughUrl:!1,mobilePlacement:"bottom",dataSource:null,widgetCssAssetUrl:"css/pixel-widget.css",parentDomElement:document.getElementsByTagName("body")[0],cycleDuration:5e3,ratingTransitionDuration:300,delayForInitialLoad:1e3,urlMatchType:"exact",urlMatchValues:[]};e.html="",e.ratings=[],e.currentRatingIndex=0,e.ratingCycleInterval=null,e.ui={wrapper:"",stars:"",icon:"",rating:"",author:"",timestamp:"",closeIcon:""},e.init=function(){t.dataSource=a(),null!==t.dataSource?o():console.error("Unable to parse widget ID")},e.isAllowedOnPage=function(){var e=r(location.href),n=!1;return t.urlMatchValues.forEach(function(i){var a=r(i);n="exact"==t.urlMatchType?n||a==e:n||e.substring(0,a.length)===a}),n},e.toggle=function(){e.ui.wrapper.classList.toggle("is-closed")},e.setCloseCookie=function(){sessionStorage.setItem("gather_up_hide_pixel","true")},e.isClosedByUser=function(){return JSON.parse(sessionStorage.getItem("gather_up_hide_pixel"))===!0},e.isInIframe=function(){return window.self!==window.top},e.click=function(n){t.clickthroughUrl&&!n.target.classList.contains("js-source-link")&&(e.isInIframe()?window.top.location.href=t.clickthroughUrl:document.location.href=t.clickthroughUrl)},e.startCyclingReviews=function(){e.activeInterval=setInterval(function(){e.setRating(e.currentRatingIndex),++e.currentRatingIndex==e.ratings.length&&(e.currentRatingIndex=0)},t.cycleDuration)},e.stopCyclingReviews=function(){e.ratingCycleInterval&&clearInterval(e.ratingCycleInterval)},e.setRating=function(){e.ui.wrapper.classList.add("review-content-is-hidden"),setTimeout(function(){var t=e.ratings[e.currentRatingIndex],n=0,i=["&#xE83a;","&#xE83a;","&#xE83a;","&#xE83a;","&#xE83a;"];if(t.recommend){let n=void 0===t.iconPath2?"":t.iconPath2;e.ui.stars.innerHTML="<li><img src='"+n+"' class='facebook-recommends-icon' alt='thumbs up icon'></li>",e.ui.rating.innerHTML="Recommended",e.ui.ratingDesc.setAttribute("style","display: none !important")}else{for(;n<Math.floor(t.rating)&&n<i.length;n++)i[n]="&#xE838;";for(var r=0;r<(t.rating%1!=0?1:0);r++)i[n]="&#xE839;";e.ui.stars.innerHTML=i.reduce(function(e,t){return e+'<li class="material-icons md-24">'+t+"</li>"},""),e.ui.rating.innerHTML=t.rating,e.ui.ratingDesc.style.display="inline"}e.ui.icon.src=t.iconPath,e.ui.author.innerHTML=t.author,e.ui.timestamp.innerHTML=new Date(t.date).toLocaleDateString("en-US",{month:"2-digit",day:"2-digit",year:"2-digit"}),e.ui.wrapper.classList.remove("review-content-is-hidden")},t.ratingTransitionDuration)};var n=function(){t.isEnabled&&e.isAllowedOnPage()&&!e.isClosedByUser()&&(t.parentDomElement.appendChild(s(e.html)),i(),t.isMobileEnabled?"top"==t.mobilePlacement&&e.ui.wrapper.classList.add("is-top-on-mobile"):e.ui.wrapper.classList.add("is-hidden-mobile"),t.clickthroughUrl&&e.ui.wrapper.classList.add("has-click-through"),e.setRating(e.currentRatingIndex),setTimeout(function(){e.toggle(),e.startCyclingReviews()},t.delayForInitialLoad))},i=function(){e.rating=e.ratings[e.currentRatingIndex],e.ui.stars=document.querySelector(".js-widget-stars"),e.ui.icon=document.querySelector(".js-review-icon"),e.ui.rating=document.querySelector(".js-widget-rating"),e.ui.ratingDesc=document.querySelector(".js-widget-rating-desc"),e.ui.author=document.querySelector(".js-widget-review-author"),e.ui.timestamp=document.querySelector(".js-review-timestamp"),e.ui.wrapper=document.querySelector(".js-gfs-widget"),e.ui.closeIcon=document.querySelector(".js-close-widget"),e.ui.wrapper.addEventListener("click",function(t){return e.click(t)}),e.ui.closeIcon.addEventListener("click",function(t){e.toggle(),e.setCloseCookie(),t.stopPropagation()})},r=function(e){return e.replace(/\?.*|#.*/,"").toLowerCase().replace(/^https?:\/\//,"").replace("www.","").replace(/\/+$/,"")},a=function(){for(var e=document.getElementsByTagName("script"),t=0;t<e.length;t++){var n=e[t].getAttribute("data-gfspw");if(null!==n)return n}return null},o=function(){var i=new XMLHttpRequest;i.onerror=function(){console.error("Unable to load rating JSON from supplied endpoint")},i.open("GET",t.dataSource,!0),i.setRequestHeader("Content-Type","application/json"),i.setRequestHeader("Accept","application/json"),i.send(),i.onreadystatechange=function(){if(4===i.readyState&&200===i.status){var r=JSON.parse(i.responseText);t.isEnabled=r.isEnabled,t.isMobileEnabled=r.isMobileEnabled,t.mobilePlacement=r.mobilePlacement,t.clickthroughUrl=r.clickthroughUrl,t.widgetCssAssetUrl=r.widgetCssAssetUrl,t.urlMatchType=r.matchType,t.urlMatchValues=r.matches,e.ratings=r.ratings,e.html=r.widgetHtml;var a=document.getElementsByTagName("head")[0],o=document.createElement("link");o.setAttribute("rel","stylesheet"),o.setAttribute("type","text/css"),o.setAttribute("href",t.widgetCssAssetUrl),a.appendChild(o),o.onload=function(e){t.loaded||(t.loaded=!0,n())}}}},s=function(e){return(new DOMParser).parseFromString(e,"text/html").body.firstChild};e.init()}();