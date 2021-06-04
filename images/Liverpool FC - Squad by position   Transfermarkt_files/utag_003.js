//tealium universal tag - utag.7 ut4.0.201611171255, Copyright 2016 Tealium.com Inc. All Rights Reserved.
if(typeof JSON!=='object'){JSON={};}
(function(){'use strict';var rx_one=/^[\],:{}\s]*$/,rx_two=/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,rx_three=/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,rx_four=/(?:^|:|,)(?:\s*\[)+/g,rx_escapable=/[\\\"\u0000-\u001f\u007f-\u009f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,rx_dangerous=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;function f(n){return n<10?'0'+n:n;}
function this_value(){return this.valueOf();}
if(typeof Date.prototype.toJSON!=='function'){Date.prototype.toJSON=function(){return isFinite(this.valueOf())?this.getUTCFullYear()+'-'+
f(this.getUTCMonth()+1)+'-'+f(this.getUTCDate())+'T'+f(this.getUTCHours())+':'+f(this.getUTCMinutes())+':'+
f(this.getUTCSeconds())+'Z':null;};Boolean.prototype.toJSON=this_value;Number.prototype.toJSON=this_value;String.prototype.toJSON=this_value;}
var gap,indent,meta,rep;function quote(string){rx_escapable.lastIndex=0;return rx_escapable.test(string)?'"'+string.replace(rx_escapable,function(a){var c=meta[a];return typeof c==='string'?c:'\\u'+('0000'+a.charCodeAt(0).toString(16)).slice(-4);})+'"':'"'+string+'"';}
function str(key,holder){var i,k,v,length,mind=gap,partial,value=holder[key];if(value&&typeof value==='object'&&typeof value.toJSON==='function'){value=value.toJSON(key);}
if(typeof rep==='function'){value=rep.call(holder,key,value);}
switch(typeof value){case'string':return quote(value);case'number':return isFinite(value)?String(value):'null';case'boolean':case'null':return String(value);case'object':if(!value){return'null';}
gap+=indent;partial=[];if(Object.prototype.toString.apply(value)==='[object Array]'){length=value.length;for(i=0;i<length;i+=1){partial[i]=str(i,value)||'null';}
v=partial.length===0?'[]':gap?'[\n'+gap+partial.join(',\n'+gap)+'\n'+mind+']':'['+partial.join(',')+']';gap=mind;return v;}
if(rep&&typeof rep==='object'){length=rep.length;for(i=0;i<length;i+=1){if(typeof rep[i]==='string'){k=rep[i];v=str(k,value);if(v){partial.push(quote(k)+(gap?': ':':')+v);}}}}else{for(k in value){if(Object.prototype.hasOwnProperty.call(value,k)){v=str(k,value);if(v){partial.push(quote(k)+(gap?': ':':')+v);}}}}
v=partial.length===0?'{}':gap?'{\n'+gap+partial.join(',\n'+gap)+'\n'+mind+'}':'{'+partial.join(',')+'}';gap=mind;return v;}}
if(typeof JSON.stringify!=='function'){meta={'\b':'\\b','\t':'\\t','\n':'\\n','\f':'\\f','\r':'\\r','"':'\\"','\\':'\\\\'};JSON.stringify=function(value,replacer,space){var i;gap='';indent='';if(typeof space==='number'){for(i=0;i<space;i+=1){indent+=' ';}}else if(typeof space==='string'){indent=space;}
rep=replacer;if(replacer&&typeof replacer!=='function'&&(typeof replacer!=='object'||typeof replacer.length!=='number')){throw new Error('JSON.stringify');}
return str('',{'':value});};}}());try{(function(id,loader){var u={"id":id};utag.o[loader].sender[id]=u;u.ev={'all':1};u.server_domain="tealiumiq.com";u.server_prefix="";u.tag_config_server="";u.tag_config_sampling="100"||"100";if(utag.cfg.utagdb){utag.DB("UID ["+id+"] Sampling enabled");u.tag_config_sampling="100";}
u.tag_config_region="eu-central-1"||"default";u.region="";u.performance_timing_count=0;u.account=utag.cfg.utid.split("/")[0];u.profile=""||utag.cfg.utid.split("/")[1];if(u.tag_config_server.indexOf("-collect."+u.server_domain)>1){u.server_prefix=u.tag_config_server.split("collect."+u.server_domain)[0];if(u.tag_config_server.indexOf("/i.gif")<0){u.tag_config_server="//"+[u.server_prefix+"collect."+u.server_domain,u.account,u.profile,"2","i.gif"].join("/");}}
if(u.tag_config_server===""){if(u.tag_config_region==="default"){u.tag_config_server="//"+[u.server_prefix+"collect."+u.server_domain,u.account,u.profile,"2","i.gif"].join("/");}else{u.tag_config_server="//"+[u.server_prefix+"collect-"+u.tag_config_region+"."+u.server_domain,u.account,u.profile,"2","i.gif"].join("/");}}
if(u.tag_config_region!=="default"&&u.tag_config_server.indexOf(u.server_prefix+"collect."+u.server_domain)>0){u.tag_config_server=u.tag_config_server.replace(u.server_prefix+"collect."+u.server_domain,u.server_prefix+"collect-"+u.tag_config_region+"."+u.server_domain);u.region=u.tag_config_region;}
u.cprofile=(function(){if(u.tag_config_server){return u.tag_config_server.split("/")[4];}else{return u.profile;}}());u.dc_group="cp.utag_main_dc_group_"+u.cprofile;u.dc_region="cp.utag_main_dc_region_"+u.cprofile;u.dc_event="cp.utag_main_dc_event_"+u.cprofile;u.dc_visit="cp.utag_main_dc_visit_"+u.cprofile;u.data_enrichment="frequent";u.profile_specific_vid=0;u.enrichment_polling=1;u.enrichment_polling_delay=1000;u.do_enrichment=function(){};var q=u.tag_config_server.indexOf("?");if(q>0&&(q+1)==u.tag_config_server.length){u.tag_config_server=u.tag_config_server.replace("?","");}
u.server_list=u.tag_config_server.split("|");u.enrichment_enabled={};u.get_account_profile=function(s){return s.substring(s.indexOf(u.server_domain)).split("/");};u.is_in_sample_group=function(b){var group="100";if(u.tag_config_sampling===""||u.tag_config_sampling==="100"){return true}
if(b[u.dc_group]){group=b[u.dc_group];}else{group=Math.floor(Math.random()*100)+1;var e={};e[u.dc_group]=group;utag.loader.SC("utag_main",e);}
return(parseInt(group)<=parseInt(u.tag_config_sampling));};u.get_performance_timing=function(b){var t,timing;var data={};function subtract(val1,val2){var difference=0;if(val1>val2){difference=val1-val2;}
return difference;}
if(typeof localStorage!="undefined"&&JSON.parse&&window.performance&&window.performance.timing){t=window.performance.timing;timing=localStorage.getItem("tealium_timing");if(timing!==null&&timing!=="{}"&&typeof b!=="undefined"&&u.performance_timing_count===0){utag.ut.merge(b,utag.ut.flatten({timing:JSON.parse(timing)}),1);}}else{return;}
u.performance_timing_count++;for(var k in t){if((k.indexOf("dom")===0||k.indexOf("load")===0)&&t[k]===0&&u.performance_timing_count<20){setTimeout(u.get_performance_timing,1000);}}
data["domain"]=location.hostname+"";data["pathname"]=location.pathname+"";data["query_string"]=(""+location.search).substring(1);data["timestamp"]=(new Date()).getTime();data["dns"]=subtract(t.domainLookupEnd,t.domainLookupStart);data["connect"]=subtract(t.connectEnd,t.connectStart);data["response"]=subtract(t.responseEnd,t.responseStart);data["dom_loading_to_interactive"]=subtract(t.domInteractive,t.domLoading);data["dom_interactive_to_complete"]=subtract(t.domComplete,t.domInteractive);data["load"]=subtract(t.loadEventEnd,t.loadEventStart);data["time_to_first_byte"]=subtract(t.responseStart,t.connectEnd);data["front_end"]=subtract(t.loadEventStart,t.responseEnd);data["fetch_to_response"]=subtract(t.responseStart,t.fetchStart);data["fetch_to_complete"]=subtract(t.domComplete,t.fetchStart);data["fetch_to_interactive"]=subtract(t.domInteractive,t.fetchStart);localStorage.setItem("tealium_timing",JSON.stringify(data));};window.utag.tagsettings=window.utag.tagsettings||{};u.ts_collect=window.utag.tagsettings.collect=window.utag.tagsettings.collect||{queue:[],active:false};u.map={};u.extend=[];u.send=function(a,b,c,d,e,f){if(u.ev[a]||typeof u.ev["all"]!="undefined"){u.make_enrichment_request=false;if(!u.is_in_sample_group(b)){return false}
u.get_performance_timing(b);for(var i=0;i<u.server_list.length;i++){if(b[u.dc_region]){u.region=b[u.dc_region];u.server_list[i]=u.server_list[i].replace("datacloud.","datacloud-"+u.region+".");u.server_list[i]=u.server_list[i].replace("collect.","collect-"+u.region+".");}
if(u.enrichment_enabled[i]!==false){u.enrichment_enabled[u.server_list[i]]=true}}
if(u.server_list.length>1){u.profile_specific_vid=1;}
u.data=utag.datacloud||{};u.data["loader.cfg"]={};for(d in utag.loader.GV(utag.loader.cfg)){if(utag.loader.cfg[d].load&&utag.loader.cfg[d].send){utag.loader.cfg[d].executed=1;}else{utag.loader.cfg[d].executed=0;}
u.data["loader.cfg"][d]=utag.loader.GV(utag.loader.cfg[d]);}
u.data.data=b;for(d in u.data.data){if((d+'').indexOf("qp.")==0){u.data.data[d]=encodeURIComponent(u.data.data[d]);}else if((d+'').indexOf("va.")==0){delete u.data.data[d]}}
if(!b[u.dc_event]){b[u.dc_visit]=(1+(b[u.dc_visit]?parseInt(b[u.dc_visit]):0))+'';}
b[u.dc_event]=(1+(b[u.dc_event]?parseInt(b[u.dc_event]):0))+'';e={};e["dc_visit_"+u.cprofile]=b[u.dc_visit];e["dc_event_"+u.cprofile]=b[u.dc_event]+";exp-session";utag.loader.SC("utag_main",e);utag.data[u.dc_visit]=b[u.dc_visit];utag.data[u.dc_event]=b[u.dc_event];var dt=new Date();u.data.browser={};try{u.data.browser["height"]=window.innerHeight||document.body.clientHeight;u.data.browser["width"]=window.innerWidth||document.body.clientWidth;u.data.browser["screen_height"]=screen.height;u.data.browser["screen_width"]=screen.width;u.data.browser["timezone_offset"]=dt.getTimezoneOffset();}catch(e){utag.DB(e)}
u.data["event"]=a+'';u.data["post_time"]=dt.getTime();if(u.data_enrichment=="frequent"||u.data_enrichment=="infrequent"){u.visit_num=b[u.dc_visit];if(parseInt(u.visit_num)>1&&b[u.dc_event]=="1"){u.enrichment_polling=2;}
try{u.va_update=parseInt(localStorage.getItem("tealium_va_update")||0);}catch(e){utag.DB(e)}
u.visitor_id=u.visitor_id||b["cp.utag_main_v_id"];if((u.data_enrichment=="frequent"&&!(u.visit_num=="1"&&b[u.dc_event]=="1"))||(u.data_enrichment=="infrequent"&&parseInt(u.visit_num)>1&&parseInt(b[u.dc_event])<=5&&u.visit_num!=u.va_update)){u.make_enrichment_request=true;}else if(b._corder){u.make_enrichment_request=true;u.enrichment_polling=3;u.enrichment_polling_delay=4000;}
u.visitor_service_request=function(t,server){var s="//"+u.server_prefix+"visitor-service"+(u.region?"-"+u.region:"")+"."+u.server_domain;var p=u.get_account_profile(server);(function(p){var prefix="tealium_va";var key="_"+p[1]+"_"+p[2];utag.ut["writeva"+p[2]]=function(o){utag.DB("Visitor Attributes: "+prefix+key);utag.DB(o);var str=JSON.stringify(o);if(str!="{}"&&str!=""){try{localStorage.setItem('tealium_va_update',utag.data[u.dc_visit]);localStorage.setItem(prefix,str);localStorage.setItem(prefix+key,str);}catch(e){utag.DB(e)}
if(typeof tealium_enrichment=="function"){tealium_enrichment(o,prefix+key);}}}}(p.slice(0)));var vid=u.visitor_id;if(u.profile_specific_vid==1){vid+=p[2];}
utag.ut.loader({id:"tealium_visitor_service_7"+p[2],src:s+"/"+p[1]+"/"+p[2]+"/"+vid+"?callback=utag.ut%5B%22writeva"+p[2]+"%22%5D&rnd="+t});};u.do_enrichment=function(server,enrichment_polling,enrichment_polling_delay){if(typeof utag.ut.loader!="undefined"){for(var i=0;i<enrichment_polling;i++){setTimeout(function(){u.visitor_service_request((new Date).getTime(),server)},i*enrichment_polling_delay+1);}}}}
var json_string;var regExpReplace=new RegExp(u.visitor_id,"g");var sendData=function(){if(window.FormData){function postData(server_index,enrichment_polling,enrichment_polling_delay){if(server_index+1>u.server_list.length){if(u.ts_collect.queue.length>0){setTimeout(u.ts_collect.queue.shift(),1);}else{u.ts_collect.active=false;}
return;}
var xhr=new XMLHttpRequest();var server=u.server_list[server_index];var formData=new FormData();xhr.addEventListener('readystatechange',function(){if(xhr.readyState===3){try{u.region=xhr.getResponseHeader("X-Region")||u.region||"";}catch(res_error){utag.DB(res_error);u.region=u.region||"";}
if(u.region){var e={};e["dc_region_"+u.cprofile]=u.region+";exp-session";utag.loader.SC("utag_main",e);}
utag.DB("dc_region:"+u.region);}else if(xhr.readyState===4){postData(server_index+1,enrichment_polling,enrichment_polling_delay);if(u.make_enrichment_request&&u.enrichment_enabled[server]){u.do_enrichment(server,enrichment_polling,enrichment_polling_delay);}}});xhr.open('post',u.server_list[server_index],true);xhr.withCredentials=true;json_string=JSON.stringify(u.data);if(u.profile_specific_vid==1){json_string=json_string.replace(regExpReplace,u.visitor_id+u.get_account_profile(server)[2]);}
formData.append("data",json_string);xhr.send(formData);}
postData(0,u.enrichment_polling,u.enrichment_polling_delay);}else{for(var i=0;i<u.server_list.length;i++){(function(i,enrichment_polling,enrichment_polling_delay){var server=u.server_list[i];setTimeout(function(){json_string=JSON.stringify(u.data);if(u.profile_specific_vid==1){json_string=json_string.replace(regExpReplace,u.visitor_id+u.get_account_profile(server)[2]);}
var img=new Image();img.src=server+'?data='+encodeURIComponent(json_string);if(u.make_enrichment_request&&u.enrichment_enabled[server])u.do_enrichment(server,enrichment_polling,enrichment_polling_delay);},i*700);}(i,u.enrichment_polling,u.enrichment_polling_delay))}}};if(u.ts_collect.active){u.ts_collect.queue.push(sendData);}else{u.ts_collect.active=true;sendData();}}};utag.o[loader].loader.LOAD(id);})('7','axelspringer.transfermarkt-transfermarkt.de');}catch(e){utag.DB(e)}
