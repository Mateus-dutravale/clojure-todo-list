goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__5732__auto__ = [];
var len__5726__auto___38035 = arguments.length;
var i__5727__auto___38036 = (0);
while(true){
if((i__5727__auto___38036 < len__5726__auto___38035)){
args__5732__auto__.push((arguments[i__5727__auto___38036]));

var G__38037 = (i__5727__auto___38036 + (1));
i__5727__auto___38036 = G__38037;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq37604){
var G__37605 = cljs.core.first(seq37604);
var seq37604__$1 = cljs.core.next(seq37604);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37605,seq37604__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__37610 = cljs.core.seq(sources);
var chunk__37611 = null;
var count__37612 = (0);
var i__37613 = (0);
while(true){
if((i__37613 < count__37612)){
var map__37621 = chunk__37611.cljs$core$IIndexed$_nth$arity$2(null,i__37613);
var map__37621__$1 = cljs.core.__destructure_map(map__37621);
var src = map__37621__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37621__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37621__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37621__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37621__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e37622){var e_38038 = e37622;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_38038);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_38038.message)].join('')));
}

var G__38039 = seq__37610;
var G__38040 = chunk__37611;
var G__38041 = count__37612;
var G__38042 = (i__37613 + (1));
seq__37610 = G__38039;
chunk__37611 = G__38040;
count__37612 = G__38041;
i__37613 = G__38042;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__37610);
if(temp__5804__auto__){
var seq__37610__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37610__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__37610__$1);
var G__38043 = cljs.core.chunk_rest(seq__37610__$1);
var G__38044 = c__5525__auto__;
var G__38045 = cljs.core.count(c__5525__auto__);
var G__38046 = (0);
seq__37610 = G__38043;
chunk__37611 = G__38044;
count__37612 = G__38045;
i__37613 = G__38046;
continue;
} else {
var map__37623 = cljs.core.first(seq__37610__$1);
var map__37623__$1 = cljs.core.__destructure_map(map__37623);
var src = map__37623__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37623__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37623__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37623__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37623__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e37624){var e_38047 = e37624;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_38047);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_38047.message)].join('')));
}

var G__38048 = cljs.core.next(seq__37610__$1);
var G__38049 = null;
var G__38050 = (0);
var G__38051 = (0);
seq__37610 = G__38048;
chunk__37611 = G__38049;
count__37612 = G__38050;
i__37613 = G__38051;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (next){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (next.cljs$core$IFn$_invoke$arity$0 ? next.cljs$core$IFn$_invoke$arity$0() : next.call(null));
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__37628 = cljs.core.seq(js_requires);
var chunk__37629 = null;
var count__37630 = (0);
var i__37631 = (0);
while(true){
if((i__37631 < count__37630)){
var js_ns = chunk__37629.cljs$core$IIndexed$_nth$arity$2(null,i__37631);
var require_str_38052 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_38052);


var G__38053 = seq__37628;
var G__38054 = chunk__37629;
var G__38055 = count__37630;
var G__38056 = (i__37631 + (1));
seq__37628 = G__38053;
chunk__37629 = G__38054;
count__37630 = G__38055;
i__37631 = G__38056;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__37628);
if(temp__5804__auto__){
var seq__37628__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37628__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__37628__$1);
var G__38058 = cljs.core.chunk_rest(seq__37628__$1);
var G__38059 = c__5525__auto__;
var G__38060 = cljs.core.count(c__5525__auto__);
var G__38061 = (0);
seq__37628 = G__38058;
chunk__37629 = G__38059;
count__37630 = G__38060;
i__37631 = G__38061;
continue;
} else {
var js_ns = cljs.core.first(seq__37628__$1);
var require_str_38062 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_38062);


var G__38063 = cljs.core.next(seq__37628__$1);
var G__38064 = null;
var G__38065 = (0);
var G__38066 = (0);
seq__37628 = G__38063;
chunk__37629 = G__38064;
count__37630 = G__38065;
i__37631 = G__38066;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__37641){
var map__37642 = p__37641;
var map__37642__$1 = cljs.core.__destructure_map(map__37642);
var msg = map__37642__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37642__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37642__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__5480__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37645(s__37646){
return (new cljs.core.LazySeq(null,(function (){
var s__37646__$1 = s__37646;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__37646__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var map__37656 = cljs.core.first(xs__6360__auto__);
var map__37656__$1 = cljs.core.__destructure_map(map__37656);
var src = map__37656__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37656__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37656__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__5476__auto__ = ((function (s__37646__$1,map__37656,map__37656__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__37642,map__37642__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37645_$_iter__37647(s__37648){
return (new cljs.core.LazySeq(null,((function (s__37646__$1,map__37656,map__37656__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__37642,map__37642__$1,msg,info,reload_info){
return (function (){
var s__37648__$1 = s__37648;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__37648__$1);
if(temp__5804__auto____$1){
var s__37648__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__37648__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__37648__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__37650 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__37649 = (0);
while(true){
if((i__37649 < size__5479__auto__)){
var warning = cljs.core._nth(c__5478__auto__,i__37649);
cljs.core.chunk_append(b__37650,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__38069 = (i__37649 + (1));
i__37649 = G__38069;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__37650),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37645_$_iter__37647(cljs.core.chunk_rest(s__37648__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__37650),null);
}
} else {
var warning = cljs.core.first(s__37648__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37645_$_iter__37647(cljs.core.rest(s__37648__$2)));
}
} else {
return null;
}
break;
}
});})(s__37646__$1,map__37656,map__37656__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__37642,map__37642__$1,msg,info,reload_info))
,null,null));
});})(s__37646__$1,map__37656,map__37656__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__37642,map__37642__$1,msg,info,reload_info))
;
var fs__5477__auto__ = cljs.core.seq(iterys__5476__auto__(warnings));
if(fs__5477__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5477__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37645(cljs.core.rest(s__37646__$1)));
} else {
var G__38071 = cljs.core.rest(s__37646__$1);
s__37646__$1 = G__38071;
continue;
}
} else {
var G__38072 = cljs.core.rest(s__37646__$1);
s__37646__$1 = G__38072;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__37662_38073 = cljs.core.seq(warnings);
var chunk__37663_38074 = null;
var count__37664_38075 = (0);
var i__37665_38076 = (0);
while(true){
if((i__37665_38076 < count__37664_38075)){
var map__37672_38077 = chunk__37663_38074.cljs$core$IIndexed$_nth$arity$2(null,i__37665_38076);
var map__37672_38078__$1 = cljs.core.__destructure_map(map__37672_38077);
var w_38079 = map__37672_38078__$1;
var msg_38080__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37672_38078__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_38081 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37672_38078__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_38082 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37672_38078__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_38083 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37672_38078__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_38083)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_38081),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_38082),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_38080__$1)].join(''));


var G__38084 = seq__37662_38073;
var G__38085 = chunk__37663_38074;
var G__38086 = count__37664_38075;
var G__38087 = (i__37665_38076 + (1));
seq__37662_38073 = G__38084;
chunk__37663_38074 = G__38085;
count__37664_38075 = G__38086;
i__37665_38076 = G__38087;
continue;
} else {
var temp__5804__auto___38088 = cljs.core.seq(seq__37662_38073);
if(temp__5804__auto___38088){
var seq__37662_38089__$1 = temp__5804__auto___38088;
if(cljs.core.chunked_seq_QMARK_(seq__37662_38089__$1)){
var c__5525__auto___38090 = cljs.core.chunk_first(seq__37662_38089__$1);
var G__38091 = cljs.core.chunk_rest(seq__37662_38089__$1);
var G__38092 = c__5525__auto___38090;
var G__38093 = cljs.core.count(c__5525__auto___38090);
var G__38094 = (0);
seq__37662_38073 = G__38091;
chunk__37663_38074 = G__38092;
count__37664_38075 = G__38093;
i__37665_38076 = G__38094;
continue;
} else {
var map__37673_38095 = cljs.core.first(seq__37662_38089__$1);
var map__37673_38096__$1 = cljs.core.__destructure_map(map__37673_38095);
var w_38097 = map__37673_38096__$1;
var msg_38098__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37673_38096__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_38099 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37673_38096__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_38100 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37673_38096__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_38101 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37673_38096__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_38101)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_38099),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_38100),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_38098__$1)].join(''));


var G__38102 = cljs.core.next(seq__37662_38089__$1);
var G__38103 = null;
var G__38104 = (0);
var G__38105 = (0);
seq__37662_38073 = G__38102;
chunk__37663_38074 = G__38103;
count__37664_38075 = G__38104;
i__37665_38076 = G__38105;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__37636_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__37636_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__5000__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__5000__auto__){
var and__5000__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__5000__auto____$1){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__37698 = node_uri;
G__37698.setQuery(null);

G__37698.setPath(new$);

return G__37698;
})());
} else {
return and__5000__auto____$1;
}
} else {
return and__5000__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__37699){
var map__37701 = p__37699;
var map__37701__$1 = cljs.core.__destructure_map(map__37701);
var msg = map__37701__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37701__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37701__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__37702 = cljs.core.seq(updates);
var chunk__37704 = null;
var count__37705 = (0);
var i__37706 = (0);
while(true){
if((i__37706 < count__37705)){
var path = chunk__37704.cljs$core$IIndexed$_nth$arity$2(null,i__37706);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__37862_38110 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__37866_38111 = null;
var count__37867_38112 = (0);
var i__37868_38113 = (0);
while(true){
if((i__37868_38113 < count__37867_38112)){
var node_38114 = chunk__37866_38111.cljs$core$IIndexed$_nth$arity$2(null,i__37868_38113);
if(cljs.core.not(node_38114.shadow$old)){
var path_match_38115 = shadow.cljs.devtools.client.browser.match_paths(node_38114.getAttribute("href"),path);
if(cljs.core.truth_(path_match_38115)){
var new_link_38116 = (function (){var G__37902 = node_38114.cloneNode(true);
G__37902.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_38115),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__37902;
})();
(node_38114.shadow$old = true);

(new_link_38116.onload = ((function (seq__37862_38110,chunk__37866_38111,count__37867_38112,i__37868_38113,seq__37702,chunk__37704,count__37705,i__37706,new_link_38116,path_match_38115,node_38114,path,map__37701,map__37701__$1,msg,updates,reload_info){
return (function (e){
var seq__37906_38117 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__37908_38118 = null;
var count__37909_38119 = (0);
var i__37910_38120 = (0);
while(true){
if((i__37910_38120 < count__37909_38119)){
var map__37915_38121 = chunk__37908_38118.cljs$core$IIndexed$_nth$arity$2(null,i__37910_38120);
var map__37915_38122__$1 = cljs.core.__destructure_map(map__37915_38121);
var task_38123 = map__37915_38122__$1;
var fn_str_38124 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37915_38122__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_38126 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37915_38122__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_38128 = goog.getObjectByName(fn_str_38124,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_38126)].join(''));

(fn_obj_38128.cljs$core$IFn$_invoke$arity$2 ? fn_obj_38128.cljs$core$IFn$_invoke$arity$2(path,new_link_38116) : fn_obj_38128.call(null,path,new_link_38116));


var G__38129 = seq__37906_38117;
var G__38130 = chunk__37908_38118;
var G__38131 = count__37909_38119;
var G__38132 = (i__37910_38120 + (1));
seq__37906_38117 = G__38129;
chunk__37908_38118 = G__38130;
count__37909_38119 = G__38131;
i__37910_38120 = G__38132;
continue;
} else {
var temp__5804__auto___38133 = cljs.core.seq(seq__37906_38117);
if(temp__5804__auto___38133){
var seq__37906_38134__$1 = temp__5804__auto___38133;
if(cljs.core.chunked_seq_QMARK_(seq__37906_38134__$1)){
var c__5525__auto___38135 = cljs.core.chunk_first(seq__37906_38134__$1);
var G__38136 = cljs.core.chunk_rest(seq__37906_38134__$1);
var G__38137 = c__5525__auto___38135;
var G__38138 = cljs.core.count(c__5525__auto___38135);
var G__38139 = (0);
seq__37906_38117 = G__38136;
chunk__37908_38118 = G__38137;
count__37909_38119 = G__38138;
i__37910_38120 = G__38139;
continue;
} else {
var map__37916_38140 = cljs.core.first(seq__37906_38134__$1);
var map__37916_38141__$1 = cljs.core.__destructure_map(map__37916_38140);
var task_38142 = map__37916_38141__$1;
var fn_str_38143 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37916_38141__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_38144 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37916_38141__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_38145 = goog.getObjectByName(fn_str_38143,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_38144)].join(''));

(fn_obj_38145.cljs$core$IFn$_invoke$arity$2 ? fn_obj_38145.cljs$core$IFn$_invoke$arity$2(path,new_link_38116) : fn_obj_38145.call(null,path,new_link_38116));


var G__38146 = cljs.core.next(seq__37906_38134__$1);
var G__38147 = null;
var G__38148 = (0);
var G__38149 = (0);
seq__37906_38117 = G__38146;
chunk__37908_38118 = G__38147;
count__37909_38119 = G__38148;
i__37910_38120 = G__38149;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_38114);
});})(seq__37862_38110,chunk__37866_38111,count__37867_38112,i__37868_38113,seq__37702,chunk__37704,count__37705,i__37706,new_link_38116,path_match_38115,node_38114,path,map__37701,map__37701__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_38115], 0));

goog.dom.insertSiblingAfter(new_link_38116,node_38114);


var G__38150 = seq__37862_38110;
var G__38151 = chunk__37866_38111;
var G__38152 = count__37867_38112;
var G__38153 = (i__37868_38113 + (1));
seq__37862_38110 = G__38150;
chunk__37866_38111 = G__38151;
count__37867_38112 = G__38152;
i__37868_38113 = G__38153;
continue;
} else {
var G__38154 = seq__37862_38110;
var G__38155 = chunk__37866_38111;
var G__38156 = count__37867_38112;
var G__38157 = (i__37868_38113 + (1));
seq__37862_38110 = G__38154;
chunk__37866_38111 = G__38155;
count__37867_38112 = G__38156;
i__37868_38113 = G__38157;
continue;
}
} else {
var G__38158 = seq__37862_38110;
var G__38159 = chunk__37866_38111;
var G__38160 = count__37867_38112;
var G__38161 = (i__37868_38113 + (1));
seq__37862_38110 = G__38158;
chunk__37866_38111 = G__38159;
count__37867_38112 = G__38160;
i__37868_38113 = G__38161;
continue;
}
} else {
var temp__5804__auto___38162 = cljs.core.seq(seq__37862_38110);
if(temp__5804__auto___38162){
var seq__37862_38163__$1 = temp__5804__auto___38162;
if(cljs.core.chunked_seq_QMARK_(seq__37862_38163__$1)){
var c__5525__auto___38164 = cljs.core.chunk_first(seq__37862_38163__$1);
var G__38165 = cljs.core.chunk_rest(seq__37862_38163__$1);
var G__38166 = c__5525__auto___38164;
var G__38167 = cljs.core.count(c__5525__auto___38164);
var G__38168 = (0);
seq__37862_38110 = G__38165;
chunk__37866_38111 = G__38166;
count__37867_38112 = G__38167;
i__37868_38113 = G__38168;
continue;
} else {
var node_38169 = cljs.core.first(seq__37862_38163__$1);
if(cljs.core.not(node_38169.shadow$old)){
var path_match_38170 = shadow.cljs.devtools.client.browser.match_paths(node_38169.getAttribute("href"),path);
if(cljs.core.truth_(path_match_38170)){
var new_link_38171 = (function (){var G__37918 = node_38169.cloneNode(true);
G__37918.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_38170),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__37918;
})();
(node_38169.shadow$old = true);

(new_link_38171.onload = ((function (seq__37862_38110,chunk__37866_38111,count__37867_38112,i__37868_38113,seq__37702,chunk__37704,count__37705,i__37706,new_link_38171,path_match_38170,node_38169,seq__37862_38163__$1,temp__5804__auto___38162,path,map__37701,map__37701__$1,msg,updates,reload_info){
return (function (e){
var seq__37919_38175 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__37921_38176 = null;
var count__37922_38177 = (0);
var i__37923_38178 = (0);
while(true){
if((i__37923_38178 < count__37922_38177)){
var map__37927_38179 = chunk__37921_38176.cljs$core$IIndexed$_nth$arity$2(null,i__37923_38178);
var map__37927_38180__$1 = cljs.core.__destructure_map(map__37927_38179);
var task_38181 = map__37927_38180__$1;
var fn_str_38182 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37927_38180__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_38183 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37927_38180__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_38187 = goog.getObjectByName(fn_str_38182,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_38183)].join(''));

(fn_obj_38187.cljs$core$IFn$_invoke$arity$2 ? fn_obj_38187.cljs$core$IFn$_invoke$arity$2(path,new_link_38171) : fn_obj_38187.call(null,path,new_link_38171));


var G__38188 = seq__37919_38175;
var G__38189 = chunk__37921_38176;
var G__38190 = count__37922_38177;
var G__38191 = (i__37923_38178 + (1));
seq__37919_38175 = G__38188;
chunk__37921_38176 = G__38189;
count__37922_38177 = G__38190;
i__37923_38178 = G__38191;
continue;
} else {
var temp__5804__auto___38192__$1 = cljs.core.seq(seq__37919_38175);
if(temp__5804__auto___38192__$1){
var seq__37919_38193__$1 = temp__5804__auto___38192__$1;
if(cljs.core.chunked_seq_QMARK_(seq__37919_38193__$1)){
var c__5525__auto___38194 = cljs.core.chunk_first(seq__37919_38193__$1);
var G__38195 = cljs.core.chunk_rest(seq__37919_38193__$1);
var G__38196 = c__5525__auto___38194;
var G__38197 = cljs.core.count(c__5525__auto___38194);
var G__38198 = (0);
seq__37919_38175 = G__38195;
chunk__37921_38176 = G__38196;
count__37922_38177 = G__38197;
i__37923_38178 = G__38198;
continue;
} else {
var map__37928_38199 = cljs.core.first(seq__37919_38193__$1);
var map__37928_38200__$1 = cljs.core.__destructure_map(map__37928_38199);
var task_38201 = map__37928_38200__$1;
var fn_str_38202 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37928_38200__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_38203 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37928_38200__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_38204 = goog.getObjectByName(fn_str_38202,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_38203)].join(''));

(fn_obj_38204.cljs$core$IFn$_invoke$arity$2 ? fn_obj_38204.cljs$core$IFn$_invoke$arity$2(path,new_link_38171) : fn_obj_38204.call(null,path,new_link_38171));


var G__38205 = cljs.core.next(seq__37919_38193__$1);
var G__38206 = null;
var G__38207 = (0);
var G__38208 = (0);
seq__37919_38175 = G__38205;
chunk__37921_38176 = G__38206;
count__37922_38177 = G__38207;
i__37923_38178 = G__38208;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_38169);
});})(seq__37862_38110,chunk__37866_38111,count__37867_38112,i__37868_38113,seq__37702,chunk__37704,count__37705,i__37706,new_link_38171,path_match_38170,node_38169,seq__37862_38163__$1,temp__5804__auto___38162,path,map__37701,map__37701__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_38170], 0));

goog.dom.insertSiblingAfter(new_link_38171,node_38169);


var G__38209 = cljs.core.next(seq__37862_38163__$1);
var G__38210 = null;
var G__38211 = (0);
var G__38212 = (0);
seq__37862_38110 = G__38209;
chunk__37866_38111 = G__38210;
count__37867_38112 = G__38211;
i__37868_38113 = G__38212;
continue;
} else {
var G__38213 = cljs.core.next(seq__37862_38163__$1);
var G__38214 = null;
var G__38215 = (0);
var G__38216 = (0);
seq__37862_38110 = G__38213;
chunk__37866_38111 = G__38214;
count__37867_38112 = G__38215;
i__37868_38113 = G__38216;
continue;
}
} else {
var G__38217 = cljs.core.next(seq__37862_38163__$1);
var G__38218 = null;
var G__38219 = (0);
var G__38220 = (0);
seq__37862_38110 = G__38217;
chunk__37866_38111 = G__38218;
count__37867_38112 = G__38219;
i__37868_38113 = G__38220;
continue;
}
}
} else {
}
}
break;
}


var G__38221 = seq__37702;
var G__38222 = chunk__37704;
var G__38223 = count__37705;
var G__38224 = (i__37706 + (1));
seq__37702 = G__38221;
chunk__37704 = G__38222;
count__37705 = G__38223;
i__37706 = G__38224;
continue;
} else {
var G__38225 = seq__37702;
var G__38226 = chunk__37704;
var G__38227 = count__37705;
var G__38228 = (i__37706 + (1));
seq__37702 = G__38225;
chunk__37704 = G__38226;
count__37705 = G__38227;
i__37706 = G__38228;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__37702);
if(temp__5804__auto__){
var seq__37702__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37702__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__37702__$1);
var G__38229 = cljs.core.chunk_rest(seq__37702__$1);
var G__38230 = c__5525__auto__;
var G__38231 = cljs.core.count(c__5525__auto__);
var G__38232 = (0);
seq__37702 = G__38229;
chunk__37704 = G__38230;
count__37705 = G__38231;
i__37706 = G__38232;
continue;
} else {
var path = cljs.core.first(seq__37702__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__37929_38233 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__37933_38234 = null;
var count__37934_38235 = (0);
var i__37935_38236 = (0);
while(true){
if((i__37935_38236 < count__37934_38235)){
var node_38238 = chunk__37933_38234.cljs$core$IIndexed$_nth$arity$2(null,i__37935_38236);
if(cljs.core.not(node_38238.shadow$old)){
var path_match_38239 = shadow.cljs.devtools.client.browser.match_paths(node_38238.getAttribute("href"),path);
if(cljs.core.truth_(path_match_38239)){
var new_link_38240 = (function (){var G__37974 = node_38238.cloneNode(true);
G__37974.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_38239),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__37974;
})();
(node_38238.shadow$old = true);

(new_link_38240.onload = ((function (seq__37929_38233,chunk__37933_38234,count__37934_38235,i__37935_38236,seq__37702,chunk__37704,count__37705,i__37706,new_link_38240,path_match_38239,node_38238,path,seq__37702__$1,temp__5804__auto__,map__37701,map__37701__$1,msg,updates,reload_info){
return (function (e){
var seq__37975_38241 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__37977_38242 = null;
var count__37978_38243 = (0);
var i__37979_38244 = (0);
while(true){
if((i__37979_38244 < count__37978_38243)){
var map__37987_38245 = chunk__37977_38242.cljs$core$IIndexed$_nth$arity$2(null,i__37979_38244);
var map__37987_38246__$1 = cljs.core.__destructure_map(map__37987_38245);
var task_38247 = map__37987_38246__$1;
var fn_str_38248 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37987_38246__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_38249 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37987_38246__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_38250 = goog.getObjectByName(fn_str_38248,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_38249)].join(''));

(fn_obj_38250.cljs$core$IFn$_invoke$arity$2 ? fn_obj_38250.cljs$core$IFn$_invoke$arity$2(path,new_link_38240) : fn_obj_38250.call(null,path,new_link_38240));


var G__38252 = seq__37975_38241;
var G__38253 = chunk__37977_38242;
var G__38254 = count__37978_38243;
var G__38255 = (i__37979_38244 + (1));
seq__37975_38241 = G__38252;
chunk__37977_38242 = G__38253;
count__37978_38243 = G__38254;
i__37979_38244 = G__38255;
continue;
} else {
var temp__5804__auto___38256__$1 = cljs.core.seq(seq__37975_38241);
if(temp__5804__auto___38256__$1){
var seq__37975_38257__$1 = temp__5804__auto___38256__$1;
if(cljs.core.chunked_seq_QMARK_(seq__37975_38257__$1)){
var c__5525__auto___38258 = cljs.core.chunk_first(seq__37975_38257__$1);
var G__38259 = cljs.core.chunk_rest(seq__37975_38257__$1);
var G__38260 = c__5525__auto___38258;
var G__38261 = cljs.core.count(c__5525__auto___38258);
var G__38262 = (0);
seq__37975_38241 = G__38259;
chunk__37977_38242 = G__38260;
count__37978_38243 = G__38261;
i__37979_38244 = G__38262;
continue;
} else {
var map__37989_38263 = cljs.core.first(seq__37975_38257__$1);
var map__37989_38264__$1 = cljs.core.__destructure_map(map__37989_38263);
var task_38265 = map__37989_38264__$1;
var fn_str_38266 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37989_38264__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_38267 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37989_38264__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_38268 = goog.getObjectByName(fn_str_38266,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_38267)].join(''));

(fn_obj_38268.cljs$core$IFn$_invoke$arity$2 ? fn_obj_38268.cljs$core$IFn$_invoke$arity$2(path,new_link_38240) : fn_obj_38268.call(null,path,new_link_38240));


var G__38269 = cljs.core.next(seq__37975_38257__$1);
var G__38270 = null;
var G__38271 = (0);
var G__38272 = (0);
seq__37975_38241 = G__38269;
chunk__37977_38242 = G__38270;
count__37978_38243 = G__38271;
i__37979_38244 = G__38272;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_38238);
});})(seq__37929_38233,chunk__37933_38234,count__37934_38235,i__37935_38236,seq__37702,chunk__37704,count__37705,i__37706,new_link_38240,path_match_38239,node_38238,path,seq__37702__$1,temp__5804__auto__,map__37701,map__37701__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_38239], 0));

goog.dom.insertSiblingAfter(new_link_38240,node_38238);


var G__38273 = seq__37929_38233;
var G__38274 = chunk__37933_38234;
var G__38275 = count__37934_38235;
var G__38276 = (i__37935_38236 + (1));
seq__37929_38233 = G__38273;
chunk__37933_38234 = G__38274;
count__37934_38235 = G__38275;
i__37935_38236 = G__38276;
continue;
} else {
var G__38277 = seq__37929_38233;
var G__38278 = chunk__37933_38234;
var G__38279 = count__37934_38235;
var G__38280 = (i__37935_38236 + (1));
seq__37929_38233 = G__38277;
chunk__37933_38234 = G__38278;
count__37934_38235 = G__38279;
i__37935_38236 = G__38280;
continue;
}
} else {
var G__38281 = seq__37929_38233;
var G__38282 = chunk__37933_38234;
var G__38283 = count__37934_38235;
var G__38284 = (i__37935_38236 + (1));
seq__37929_38233 = G__38281;
chunk__37933_38234 = G__38282;
count__37934_38235 = G__38283;
i__37935_38236 = G__38284;
continue;
}
} else {
var temp__5804__auto___38285__$1 = cljs.core.seq(seq__37929_38233);
if(temp__5804__auto___38285__$1){
var seq__37929_38286__$1 = temp__5804__auto___38285__$1;
if(cljs.core.chunked_seq_QMARK_(seq__37929_38286__$1)){
var c__5525__auto___38287 = cljs.core.chunk_first(seq__37929_38286__$1);
var G__38288 = cljs.core.chunk_rest(seq__37929_38286__$1);
var G__38289 = c__5525__auto___38287;
var G__38290 = cljs.core.count(c__5525__auto___38287);
var G__38291 = (0);
seq__37929_38233 = G__38288;
chunk__37933_38234 = G__38289;
count__37934_38235 = G__38290;
i__37935_38236 = G__38291;
continue;
} else {
var node_38292 = cljs.core.first(seq__37929_38286__$1);
if(cljs.core.not(node_38292.shadow$old)){
var path_match_38293 = shadow.cljs.devtools.client.browser.match_paths(node_38292.getAttribute("href"),path);
if(cljs.core.truth_(path_match_38293)){
var new_link_38294 = (function (){var G__37991 = node_38292.cloneNode(true);
G__37991.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_38293),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__37991;
})();
(node_38292.shadow$old = true);

(new_link_38294.onload = ((function (seq__37929_38233,chunk__37933_38234,count__37934_38235,i__37935_38236,seq__37702,chunk__37704,count__37705,i__37706,new_link_38294,path_match_38293,node_38292,seq__37929_38286__$1,temp__5804__auto___38285__$1,path,seq__37702__$1,temp__5804__auto__,map__37701,map__37701__$1,msg,updates,reload_info){
return (function (e){
var seq__37994_38295 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__37996_38296 = null;
var count__37997_38297 = (0);
var i__37998_38298 = (0);
while(true){
if((i__37998_38298 < count__37997_38297)){
var map__38005_38300 = chunk__37996_38296.cljs$core$IIndexed$_nth$arity$2(null,i__37998_38298);
var map__38005_38301__$1 = cljs.core.__destructure_map(map__38005_38300);
var task_38302 = map__38005_38301__$1;
var fn_str_38303 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38005_38301__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_38304 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38005_38301__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_38305 = goog.getObjectByName(fn_str_38303,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_38304)].join(''));

(fn_obj_38305.cljs$core$IFn$_invoke$arity$2 ? fn_obj_38305.cljs$core$IFn$_invoke$arity$2(path,new_link_38294) : fn_obj_38305.call(null,path,new_link_38294));


var G__38307 = seq__37994_38295;
var G__38308 = chunk__37996_38296;
var G__38309 = count__37997_38297;
var G__38310 = (i__37998_38298 + (1));
seq__37994_38295 = G__38307;
chunk__37996_38296 = G__38308;
count__37997_38297 = G__38309;
i__37998_38298 = G__38310;
continue;
} else {
var temp__5804__auto___38311__$2 = cljs.core.seq(seq__37994_38295);
if(temp__5804__auto___38311__$2){
var seq__37994_38312__$1 = temp__5804__auto___38311__$2;
if(cljs.core.chunked_seq_QMARK_(seq__37994_38312__$1)){
var c__5525__auto___38313 = cljs.core.chunk_first(seq__37994_38312__$1);
var G__38314 = cljs.core.chunk_rest(seq__37994_38312__$1);
var G__38315 = c__5525__auto___38313;
var G__38316 = cljs.core.count(c__5525__auto___38313);
var G__38317 = (0);
seq__37994_38295 = G__38314;
chunk__37996_38296 = G__38315;
count__37997_38297 = G__38316;
i__37998_38298 = G__38317;
continue;
} else {
var map__38006_38319 = cljs.core.first(seq__37994_38312__$1);
var map__38006_38320__$1 = cljs.core.__destructure_map(map__38006_38319);
var task_38321 = map__38006_38320__$1;
var fn_str_38322 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38006_38320__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_38323 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38006_38320__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_38324 = goog.getObjectByName(fn_str_38322,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_38323)].join(''));

(fn_obj_38324.cljs$core$IFn$_invoke$arity$2 ? fn_obj_38324.cljs$core$IFn$_invoke$arity$2(path,new_link_38294) : fn_obj_38324.call(null,path,new_link_38294));


var G__38325 = cljs.core.next(seq__37994_38312__$1);
var G__38326 = null;
var G__38327 = (0);
var G__38328 = (0);
seq__37994_38295 = G__38325;
chunk__37996_38296 = G__38326;
count__37997_38297 = G__38327;
i__37998_38298 = G__38328;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_38292);
});})(seq__37929_38233,chunk__37933_38234,count__37934_38235,i__37935_38236,seq__37702,chunk__37704,count__37705,i__37706,new_link_38294,path_match_38293,node_38292,seq__37929_38286__$1,temp__5804__auto___38285__$1,path,seq__37702__$1,temp__5804__auto__,map__37701,map__37701__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_38293], 0));

goog.dom.insertSiblingAfter(new_link_38294,node_38292);


var G__38329 = cljs.core.next(seq__37929_38286__$1);
var G__38330 = null;
var G__38331 = (0);
var G__38332 = (0);
seq__37929_38233 = G__38329;
chunk__37933_38234 = G__38330;
count__37934_38235 = G__38331;
i__37935_38236 = G__38332;
continue;
} else {
var G__38333 = cljs.core.next(seq__37929_38286__$1);
var G__38334 = null;
var G__38335 = (0);
var G__38336 = (0);
seq__37929_38233 = G__38333;
chunk__37933_38234 = G__38334;
count__37934_38235 = G__38335;
i__37935_38236 = G__38336;
continue;
}
} else {
var G__38337 = cljs.core.next(seq__37929_38286__$1);
var G__38338 = null;
var G__38339 = (0);
var G__38340 = (0);
seq__37929_38233 = G__38337;
chunk__37933_38234 = G__38338;
count__37934_38235 = G__38339;
i__37935_38236 = G__38340;
continue;
}
}
} else {
}
}
break;
}


var G__38341 = cljs.core.next(seq__37702__$1);
var G__38342 = null;
var G__38343 = (0);
var G__38344 = (0);
seq__37702 = G__38341;
chunk__37704 = G__38342;
count__37705 = G__38343;
i__37706 = G__38344;
continue;
} else {
var G__38345 = cljs.core.next(seq__37702__$1);
var G__38346 = null;
var G__38347 = (0);
var G__38348 = (0);
seq__37702 = G__38345;
chunk__37704 = G__38346;
count__37705 = G__38347;
i__37706 = G__38348;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$4 = (function (this$,code,success,fail){
var this$__$1 = this;
try{var G__38012 = shadow.cljs.devtools.client.browser.global_eval(code);
return (success.cljs$core$IFn$_invoke$arity$1 ? success.cljs$core$IFn$_invoke$arity$1(G__38012) : success.call(null,G__38012));
}catch (e38011){var e = e38011;
return (fail.cljs$core$IFn$_invoke$arity$1 ? fail.cljs$core$IFn$_invoke$arity$1(e) : fail.call(null,e));
}}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$5 = (function (this$,ns,p__38013,success,fail){
var map__38014 = p__38013;
var map__38014__$1 = cljs.core.__destructure_map(map__38014);
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38014__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
try{var G__38016 = shadow.cljs.devtools.client.browser.global_eval(js);
return (success.cljs$core$IFn$_invoke$arity$1 ? success.cljs$core$IFn$_invoke$arity$1(G__38016) : success.call(null,G__38016));
}catch (e38015){var e = e38015;
return (fail.cljs$core$IFn$_invoke$arity$1 ? fail.cljs$core$IFn$_invoke$arity$1(e) : fail.call(null,e));
}}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__38017,done,error){
var map__38018 = p__38017;
var map__38018__$1 = cljs.core.__destructure_map(map__38018);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38018__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__38021,done,error){
var map__38022 = p__38021;
var map__38022__$1 = cljs.core.__destructure_map(map__38022);
var msg = map__38022__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38022__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38022__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38022__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__38023){
var map__38024 = p__38023;
var map__38024__$1 = cljs.core.__destructure_map(map__38024);
var src = map__38024__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38024__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__5000__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__5000__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__5000__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__38025 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__38025) : done.call(null,G__38025));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__38026){
var map__38027 = p__38026;
var map__38027__$1 = cljs.core.__destructure_map(map__38027);
var msg__$1 = map__38027__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38027__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e38028){var ex = e38028;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__38029){
var map__38030 = p__38029;
var map__38030__$1 = cljs.core.__destructure_map(map__38030);
var env = map__38030__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38030__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (msg){
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__38031){
var map__38032 = p__38031;
var map__38032__$1 = cljs.core.__destructure_map(map__38032);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38032__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38032__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__38033){
var map__38034 = p__38033;
var map__38034__$1 = cljs.core.__destructure_map(map__38034);
var svc = map__38034__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38034__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
