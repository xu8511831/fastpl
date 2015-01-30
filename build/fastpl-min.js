/**
 * @file js template
 * @author xucaiyu
 * @email 569455187@qq.com
 * @version 1.0.0
 * @date 2014-11-26
 * @license MIT License 
 */
!function(){function e(e,t){return e?e:t}var t={"<":"&lt;",">":"&gt;","&":"&amp;",'"':"&quot;","'":"&#x27;","/":"&#x2f;"},n={},r=function(e){return t[e]},o=function(e){return"string"!=typeof e?e:e.replace(/[&<>"']+/gim,r)},a=Array.isArray||function(e){return"[object Array]"==={}.toString.call(e)},i=function(e,t,n,r){var o,i;if(a(e))for(o=t,i=n;i>o;o++)r.call(e,e[o],o,e);else for(o in e)r.call(e,e[o],o)},s=function(e,t){if(e){var n=new Date(e.replace(/\-/g,"/")),r={"M+":n.getMonth()+1,"d+":n.getDate(),"h+":n.getHours()%12==0?12:n.getHours()%12,"H+":n.getHours(),"m+":n.getMinutes(),"s+":n.getSeconds(),"q+":Math.floor((n.getMonth()+3)/3),S:n.getMilliseconds()},o={0:"日",1:"一",2:"二",3:"三",4:"四",5:"五",6:"六"};/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(n.getFullYear()+"").substring(4-RegExp.$1.length))),/(E+)/.test(t)&&(t=t.replace(RegExp.$1,(RegExp.$1.length>1?RegExp.$1.length>2?"星期":"周":"")+o[n.getDay()+""]));for(var a in r)new RegExp("("+a+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?r[a]:("00"+r[a]).substring((""+r[a]).length)));return t}},c=function(e){return e?String(e).replace(/\B(?=(?:\d{3})+$)/g,","):void 0},u=function(e){var t=typeof e;if("string"===t)return e.length;if("object"===t){var n=0;for(var r in e)n++;return n}return!1},f=function(e,t){if("string"!=typeof e)throw"Template not found";var n=f._parse.call(f,e);return void 0===t?n:n.render(t)},l={_escape_:o,_each_:i,_ifEmpty_:e,count:u,date_format:s,number_format:c};f.tools=function(e,t){if("object"==typeof e)for(var n in e)l[n]=e[n];else l[e]=t},f.getTools=function(){return l},f.tags={langOpen:"{{",langClose:"}}",varOpen:"\\${",varClose:"}",commentOpen:"<!--",commentClose:"-->"},f.statement={"if":function(e){return"if("+e+"){"},"else if":function(e){return"}else if("+e+"){"},"else":function(){return"}else{"},"/if":function(){return"}"},"for":function(e,t){var n="",r=t&&/\d+/.test(t.split(",")[0]);return n=r===!1?"_each_("+e+",0,"+e+".length,function("+t+"){":r?"_each_([],"+t+",function($value,"+e+"){":"_each_("+e+",0,"+e+".length,function($value,$index){"},"/for":function(){return"});"},log:function(e){return"console.log("+e+");"}},f._compile=function(e){function t(e){var t;e&&!_[e]&&(t=l[e]?"$tools."+e:"$data."+e,g+=e+"="+t+",",_[e]=!0)}var n,r="\\s*(\\/?\\w+(?:\\s*if)?)\\s*(?:([^\\"+f.tags.langClose+"\\(]*)(?:\\(([\\d\\w,]*)\\))?)\\s*",o=f.tags.langOpen+r+f.tags.langClose,a=f.tags.varOpen+"([=\\s]?)([^\\|]+?)\\s*(?:(\\|+)([\\s\\S]+?))?"+f.tags.varClose,i=f.tags.commentOpen+"[\\s\\S]*"+f.tags.commentClose,s=new RegExp(o,"igm"),c=new RegExp(a,"igm"),u=new RegExp(i,"igm"),g="",p="",_={};return n=e.replace(u,"").replace(s,function(e,t,n,r){var o=f.statement[t];if(!o)throw"Unknown template tag: "+t;return"'; "+o(n,r)+" _str+='"}).replace(c,function(e,n,r,o,a){if("||"==o&&(-1===r.indexOf(".")&&t(r),r="_ifEmpty_("+r+","+a+")"),"="!==n&&(r="_escape_("+r+")"),"|"==o&&a){var i=a.split(":"),s=i[0].replace(/\s/g,""),c=i[1]||void 0;r=s+"("+r+","+c+")",t(s)}return"'+"+r+"+'"}).replace(/[\r\t\n]/g,""),g="var _escape_=$tools._escape_,_each_=$tools._each_,_ifEmpty_=$tools._ifEmpty_,"+g,p="_str = '';_str+='"+n+"'; return new String(_str);",function(e){var t,n="";return l._each_(e,0,0,function(e,t){n+=t+"=$data."+t+","}),t=g+n+p,new Function("$data, $tools",t)(e,l)}},f._parse=function(e){function t(){this._tpl=r,this.render=function(e){try{return this._tpl(e).replace(/(^\s*)|(\s*$)/g,"")}catch(t){throw t}}}var r;return n[e]?r=n[e]:(r=this._compile(e),n[e]=r),new t},"function"==typeof define?define(function(){return f}):"undefined"!=typeof exports?module.exports=f:window.fasTpl=f}();