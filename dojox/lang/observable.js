//>>built
define("dojox/lang/observable",["dojo","dijit","dojox"],function(b,k,e){b.provide("dojox.lang.observable");b.experimental("dojox.lang.observable");e.lang.observable=function(b,i,g,h){return e.lang.makeObservable(i,g,h)(b)};e.lang.makeObservable=function(b,i,g,h){function k(c,d,a){return function(){return g(c,d,a,arguments)}}h=h||{};g=g||function(c,d,a,b){return d[a].apply(c,b)};if(e.lang.lettableWin){var l=e.lang.makeObservable;l.inc=(l.inc||0)+1;var n="gettable_"+l.inc;e.lang.lettableWin[n]=b;var o=
"settable_"+l.inc;e.lang.lettableWin[o]=i;var p={};return function(c){if(c.__observable)return c.__observable;if(c.data__)throw Error("Can wrap an object that is already wrapped");var d=[],a,b;for(a in h)d.push(a);b={type:1,event:1};for(a in c)a.match(/^[a-zA-Z][\w\$_]*$/)&&!(a in h)&&!(a in b)&&d.push(a);var j=d.join(","),f;a=p[j];if(!a){var i="dj_lettable_"+l.inc++,g=i+"_dj_getter",m=["Class "+i,"\tPublic data__"];for(a=0,b=d.length;a<b;a++){f=d[a];var q=typeof c[f];"function"==q||h[f]?m.push("  Public "+
f):"object"!=q&&m.push("\tPublic Property Let "+f+"(val)","\t\tCall "+o+'(me.data__,"'+f+'",val)',"\tEnd Property","\tPublic Property Get "+f,"\t\t"+f+" = "+n+'(me.data__,"'+f+'")',"\tEnd Property")}m.push("End Class");m.push("Function "+g+"()","\tDim tmp","\tSet tmp = New "+i,"\tSet "+g+" = tmp","End Function");e.lang.lettableWin.vbEval(m.join("\n"));p[j]=a=function(){return e.lang.lettableWin.construct(g)}}j=a();j.data__=c;try{c.__observable=j}catch(s){}for(a=0,b=d.length;a<b;a++){f=d[a];try{var r=
c[f]}catch(t){}if("function"==typeof r||h[f])j[f]=k(j,c,f)}return j}}return function(c){if(c.__observable)return c.__observable;var d=c instanceof Array?[]:{};d.data__=c;for(var a in c)"_"!=a.charAt(0)&&("function"==typeof c[a]?d[a]=k(d,c,a):"object"!=typeof c[a]&&function(a){d.__defineGetter__(a,function(){return b(c,a)});d.__defineSetter__(a,function(b){return i(c,a,b)})}(a));for(a in h)d[a]=k(d,c,a);return c.__observable=d}};if(!{}.__defineGetter__)if(b.isIE)document.body?(b=document.createElement("iframe"),
document.body.appendChild(b)):(document.write("<iframe id='dj_vb_eval_frame'></iframe>"),b=document.getElementById("dj_vb_eval_frame")),b.style.display="none",k=b.contentWindow.document,e.lang.lettableWin=b.contentWindow,k.write('<html><head><script language="VBScript" type="text/VBScript">Function vb_global_eval(code)ExecuteGlobal(code)End Function<\/script><script type="text/javascript">function vbEval(code){ \nreturn vb_global_eval(code);}function construct(name){ \nreturn window[name]();}<\/script></head><body>vb-eval</body></html>'),
k.close();else throw Error("This browser does not support getters and setters");e.lang.ReadOnlyProxy=e.lang.makeObservable(function(b,e){return b[e]},function(){})});