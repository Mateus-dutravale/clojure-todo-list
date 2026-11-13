goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__5732__auto__ = [];
var len__5726__auto___38179 = arguments.length;
var i__5727__auto___38180 = (0);
while(true){
if((i__5727__auto___38180 < len__5726__auto___38179)){
args__5732__auto__.push((arguments[i__5727__auto___38180]));

var G__38181 = (i__5727__auto___38180 + (1));
i__5727__auto___38180 = G__38181;
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
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq37728){
var G__37729 = cljs.core.first(seq37728);
var seq37728__$1 = cljs.core.next(seq37728);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37729,seq37728__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__37737 = cljs.core.seq(sources);
var chunk__37738 = null;
var count__37739 = (0);
var i__37740 = (0);
while(true){
if((i__37740 < count__37739)){
var map__37751 = chunk__37738.cljs$core$IIndexed$_nth$arity$2(null,i__37740);
var map__37751__$1 = cljs.core.__destructure_map(map__37751);
var src = map__37751__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37751__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37751__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37751__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37751__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e37752){var e_38182 = e37752;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_38182);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_38182.message)].join('')));
}

var G__38186 = seq__37737;
var G__38187 = chunk__37738;
var G__38188 = count__37739;
var G__38189 = (i__37740 + (1));
seq__37737 = G__38186;
chunk__37738 = G__38187;
count__37739 = G__38188;
i__37740 = G__38189;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__37737);
if(temp__5804__auto__){
var seq__37737__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37737__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__37737__$1);
var G__38192 = cljs.core.chunk_rest(seq__37737__$1);
var G__38193 = c__5525__auto__;
var G__38194 = cljs.core.count(c__5525__auto__);
var G__38195 = (0);
seq__37737 = G__38192;
chunk__37738 = G__38193;
count__37739 = G__38194;
i__37740 = G__38195;
continue;
} else {
var map__37756 = cljs.core.first(seq__37737__$1);
var map__37756__$1 = cljs.core.__destructure_map(map__37756);
var src = map__37756__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37756__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37756__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37756__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37756__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e37757){var e_38197 = e37757;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_38197);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_38197.message)].join('')));
}

var G__38198 = cljs.core.next(seq__37737__$1);
var G__38199 = null;
var G__38200 = (0);
var G__38201 = (0);
seq__37737 = G__38198;
chunk__37738 = G__38199;
count__37739 = G__38200;
i__37740 = G__38201;
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
var seq__37759 = cljs.core.seq(js_requires);
var chunk__37760 = null;
var count__37761 = (0);
var i__37762 = (0);
while(true){
if((i__37762 < count__37761)){
var js_ns = chunk__37760.cljs$core$IIndexed$_nth$arity$2(null,i__37762);
var require_str_38202 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_38202);


var G__38203 = seq__37759;
var G__38204 = chunk__37760;
var G__38205 = count__37761;
var G__38206 = (i__37762 + (1));
seq__37759 = G__38203;
chunk__37760 = G__38204;
count__37761 = G__38205;
i__37762 = G__38206;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__37759);
if(temp__5804__auto__){
var seq__37759__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37759__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__37759__$1);
var G__38207 = cljs.core.chunk_rest(seq__37759__$1);
var G__38208 = c__5525__auto__;
var G__38209 = cljs.core.count(c__5525__auto__);
var G__38210 = (0);
seq__37759 = G__38207;
chunk__37760 = G__38208;
count__37761 = G__38209;
i__37762 = G__38210;
continue;
} else {
var js_ns = cljs.core.first(seq__37759__$1);
var require_str_38211 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_38211);


var G__38212 = cljs.core.next(seq__37759__$1);
var G__38213 = null;
var G__38214 = (0);
var G__38215 = (0);
seq__37759 = G__38212;
chunk__37760 = G__38213;
count__37761 = G__38214;
i__37762 = G__38215;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__37765){
var map__37766 = p__37765;
var map__37766__$1 = cljs.core.__destructure_map(map__37766);
var msg = map__37766__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37766__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37766__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__5480__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37767(s__37768){
return (new cljs.core.LazySeq(null,(function (){
var s__37768__$1 = s__37768;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__37768__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var map__37773 = cljs.core.first(xs__6360__auto__);
var map__37773__$1 = cljs.core.__destructure_map(map__37773);
var src = map__37773__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37773__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37773__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__5476__auto__ = ((function (s__37768__$1,map__37773,map__37773__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__37766,map__37766__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37767_$_iter__37769(s__37770){
return (new cljs.core.LazySeq(null,((function (s__37768__$1,map__37773,map__37773__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__37766,map__37766__$1,msg,info,reload_info){
return (function (){
var s__37770__$1 = s__37770;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__37770__$1);
if(temp__5804__auto____$1){
var s__37770__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__37770__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__37770__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__37772 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__37771 = (0);
while(true){
if((i__37771 < size__5479__auto__)){
var warning = cljs.core._nth(c__5478__auto__,i__37771);
cljs.core.chunk_append(b__37772,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__38217 = (i__37771 + (1));
i__37771 = G__38217;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__37772),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37767_$_iter__37769(cljs.core.chunk_rest(s__37770__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__37772),null);
}
} else {
var warning = cljs.core.first(s__37770__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37767_$_iter__37769(cljs.core.rest(s__37770__$2)));
}
} else {
return null;
}
break;
}
});})(s__37768__$1,map__37773,map__37773__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__37766,map__37766__$1,msg,info,reload_info))
,null,null));
});})(s__37768__$1,map__37773,map__37773__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__37766,map__37766__$1,msg,info,reload_info))
;
var fs__5477__auto__ = cljs.core.seq(iterys__5476__auto__(warnings));
if(fs__5477__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5477__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37767(cljs.core.rest(s__37768__$1)));
} else {
var G__38218 = cljs.core.rest(s__37768__$1);
s__37768__$1 = G__38218;
continue;
}
} else {
var G__38219 = cljs.core.rest(s__37768__$1);
s__37768__$1 = G__38219;
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
var seq__37774_38220 = cljs.core.seq(warnings);
var chunk__37775_38221 = null;
var count__37776_38222 = (0);
var i__37777_38223 = (0);
while(true){
if((i__37777_38223 < count__37776_38222)){
var map__37780_38224 = chunk__37775_38221.cljs$core$IIndexed$_nth$arity$2(null,i__37777_38223);
var map__37780_38225__$1 = cljs.core.__destructure_map(map__37780_38224);
var w_38226 = map__37780_38225__$1;
var msg_38227__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37780_38225__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_38228 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37780_38225__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_38229 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37780_38225__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_38230 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37780_38225__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_38230)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_38228),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_38229),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_38227__$1)].join(''));


var G__38231 = seq__37774_38220;
var G__38232 = chunk__37775_38221;
var G__38233 = count__37776_38222;
var G__38234 = (i__37777_38223 + (1));
seq__37774_38220 = G__38231;
chunk__37775_38221 = G__38232;
count__37776_38222 = G__38233;
i__37777_38223 = G__38234;
continue;
} else {
var temp__5804__auto___38235 = cljs.core.seq(seq__37774_38220);
if(temp__5804__auto___38235){
var seq__37774_38236__$1 = temp__5804__auto___38235;
if(cljs.core.chunked_seq_QMARK_(seq__37774_38236__$1)){
var c__5525__auto___38237 = cljs.core.chunk_first(seq__37774_38236__$1);
var G__38238 = cljs.core.chunk_rest(seq__37774_38236__$1);
var G__38239 = c__5525__auto___38237;
var G__38240 = cljs.core.count(c__5525__auto___38237);
var G__38241 = (0);
seq__37774_38220 = G__38238;
chunk__37775_38221 = G__38239;
count__37776_38222 = G__38240;
i__37777_38223 = G__38241;
continue;
} else {
var map__37781_38242 = cljs.core.first(seq__37774_38236__$1);
var map__37781_38243__$1 = cljs.core.__destructure_map(map__37781_38242);
var w_38244 = map__37781_38243__$1;
var msg_38245__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37781_38243__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_38246 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37781_38243__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_38247 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37781_38243__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_38248 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37781_38243__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_38248)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_38246),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_38247),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_38245__$1)].join(''));


var G__38250 = cljs.core.next(seq__37774_38236__$1);
var G__38251 = null;
var G__38252 = (0);
var G__38253 = (0);
seq__37774_38220 = G__38250;
chunk__37775_38221 = G__38251;
count__37776_38222 = G__38252;
i__37777_38223 = G__38253;
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

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__37763_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__37763_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
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
return cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__37783 = node_uri;
G__37783.setQuery(null);

G__37783.setPath(new$);

return G__37783;
})());
} else {
return and__5000__auto____$1;
}
} else {
return and__5000__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__37784){
var map__37785 = p__37784;
var map__37785__$1 = cljs.core.__destructure_map(map__37785);
var msg = map__37785__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37785__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37785__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__37786 = cljs.core.seq(updates);
var chunk__37788 = null;
var count__37789 = (0);
var i__37790 = (0);
while(true){
if((i__37790 < count__37789)){
var path = chunk__37788.cljs$core$IIndexed$_nth$arity$2(null,i__37790);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__37930_38254 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__37934_38255 = null;
var count__37935_38256 = (0);
var i__37936_38257 = (0);
while(true){
if((i__37936_38257 < count__37935_38256)){
var node_38258 = chunk__37934_38255.cljs$core$IIndexed$_nth$arity$2(null,i__37936_38257);
if(cljs.core.not(node_38258.shadow$old)){
var path_match_38259 = shadow.cljs.devtools.client.browser.match_paths(node_38258.getAttribute("href"),path);
if(cljs.core.truth_(path_match_38259)){
var new_link_38260 = (function (){var G__37983 = node_38258.cloneNode(true);
G__37983.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_38259),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__37983;
})();
(node_38258.shadow$old = true);

(new_link_38260.onload = ((function (seq__37930_38254,chunk__37934_38255,count__37935_38256,i__37936_38257,seq__37786,chunk__37788,count__37789,i__37790,new_link_38260,path_match_38259,node_38258,path,map__37785,map__37785__$1,msg,updates,reload_info){
return (function (e){
var seq__37986_38261 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__37988_38262 = null;
var count__37989_38263 = (0);
var i__37990_38264 = (0);
while(true){
if((i__37990_38264 < count__37989_38263)){
var map__37998_38265 = chunk__37988_38262.cljs$core$IIndexed$_nth$arity$2(null,i__37990_38264);
var map__37998_38266__$1 = cljs.core.__destructure_map(map__37998_38265);
var task_38267 = map__37998_38266__$1;
var fn_str_38268 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37998_38266__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_38269 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37998_38266__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_38270 = goog.getObjectByName(fn_str_38268,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_38269)].join(''));

(fn_obj_38270.cljs$core$IFn$_invoke$arity$2 ? fn_obj_38270.cljs$core$IFn$_invoke$arity$2(path,new_link_38260) : fn_obj_38270.call(null,path,new_link_38260));


var G__38271 = seq__37986_38261;
var G__38272 = chunk__37988_38262;
var G__38273 = count__37989_38263;
var G__38274 = (i__37990_38264 + (1));
seq__37986_38261 = G__38271;
chunk__37988_38262 = G__38272;
count__37989_38263 = G__38273;
i__37990_38264 = G__38274;
continue;
} else {
var temp__5804__auto___38275 = cljs.core.seq(seq__37986_38261);
if(temp__5804__auto___38275){
var seq__37986_38276__$1 = temp__5804__auto___38275;
if(cljs.core.chunked_seq_QMARK_(seq__37986_38276__$1)){
var c__5525__auto___38277 = cljs.core.chunk_first(seq__37986_38276__$1);
var G__38278 = cljs.core.chunk_rest(seq__37986_38276__$1);
var G__38279 = c__5525__auto___38277;
var G__38280 = cljs.core.count(c__5525__auto___38277);
var G__38281 = (0);
seq__37986_38261 = G__38278;
chunk__37988_38262 = G__38279;
count__37989_38263 = G__38280;
i__37990_38264 = G__38281;
continue;
} else {
var map__37999_38282 = cljs.core.first(seq__37986_38276__$1);
var map__37999_38283__$1 = cljs.core.__destructure_map(map__37999_38282);
var task_38284 = map__37999_38283__$1;
var fn_str_38285 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37999_38283__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_38286 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37999_38283__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_38287 = goog.getObjectByName(fn_str_38285,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_38286)].join(''));

(fn_obj_38287.cljs$core$IFn$_invoke$arity$2 ? fn_obj_38287.cljs$core$IFn$_invoke$arity$2(path,new_link_38260) : fn_obj_38287.call(null,path,new_link_38260));


var G__38288 = cljs.core.next(seq__37986_38276__$1);
var G__38289 = null;
var G__38290 = (0);
var G__38291 = (0);
seq__37986_38261 = G__38288;
chunk__37988_38262 = G__38289;
count__37989_38263 = G__38290;
i__37990_38264 = G__38291;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_38258);
});})(seq__37930_38254,chunk__37934_38255,count__37935_38256,i__37936_38257,seq__37786,chunk__37788,count__37789,i__37790,new_link_38260,path_match_38259,node_38258,path,map__37785,map__37785__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_38259], 0));

goog.dom.insertSiblingAfter(new_link_38260,node_38258);


var G__38292 = seq__37930_38254;
var G__38293 = chunk__37934_38255;
var G__38294 = count__37935_38256;
var G__38295 = (i__37936_38257 + (1));
seq__37930_38254 = G__38292;
chunk__37934_38255 = G__38293;
count__37935_38256 = G__38294;
i__37936_38257 = G__38295;
continue;
} else {
var G__38296 = seq__37930_38254;
var G__38297 = chunk__37934_38255;
var G__38298 = count__37935_38256;
var G__38299 = (i__37936_38257 + (1));
seq__37930_38254 = G__38296;
chunk__37934_38255 = G__38297;
count__37935_38256 = G__38298;
i__37936_38257 = G__38299;
continue;
}
} else {
var G__38300 = seq__37930_38254;
var G__38301 = chunk__37934_38255;
var G__38302 = count__37935_38256;
var G__38303 = (i__37936_38257 + (1));
seq__37930_38254 = G__38300;
chunk__37934_38255 = G__38301;
count__37935_38256 = G__38302;
i__37936_38257 = G__38303;
continue;
}
} else {
var temp__5804__auto___38304 = cljs.core.seq(seq__37930_38254);
if(temp__5804__auto___38304){
var seq__37930_38305__$1 = temp__5804__auto___38304;
if(cljs.core.chunked_seq_QMARK_(seq__37930_38305__$1)){
var c__5525__auto___38306 = cljs.core.chunk_first(seq__37930_38305__$1);
var G__38307 = cljs.core.chunk_rest(seq__37930_38305__$1);
var G__38308 = c__5525__auto___38306;
var G__38309 = cljs.core.count(c__5525__auto___38306);
var G__38310 = (0);
seq__37930_38254 = G__38307;
chunk__37934_38255 = G__38308;
count__37935_38256 = G__38309;
i__37936_38257 = G__38310;
continue;
} else {
var node_38311 = cljs.core.first(seq__37930_38305__$1);
if(cljs.core.not(node_38311.shadow$old)){
var path_match_38312 = shadow.cljs.devtools.client.browser.match_paths(node_38311.getAttribute("href"),path);
if(cljs.core.truth_(path_match_38312)){
var new_link_38313 = (function (){var G__38022 = node_38311.cloneNode(true);
G__38022.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_38312),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__38022;
})();
(node_38311.shadow$old = true);

(new_link_38313.onload = ((function (seq__37930_38254,chunk__37934_38255,count__37935_38256,i__37936_38257,seq__37786,chunk__37788,count__37789,i__37790,new_link_38313,path_match_38312,node_38311,seq__37930_38305__$1,temp__5804__auto___38304,path,map__37785,map__37785__$1,msg,updates,reload_info){
return (function (e){
var seq__38035_38314 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__38037_38315 = null;
var count__38038_38316 = (0);
var i__38039_38317 = (0);
while(true){
if((i__38039_38317 < count__38038_38316)){
var map__38044_38318 = chunk__38037_38315.cljs$core$IIndexed$_nth$arity$2(null,i__38039_38317);
var map__38044_38319__$1 = cljs.core.__destructure_map(map__38044_38318);
var task_38320 = map__38044_38319__$1;
var fn_str_38321 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38044_38319__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_38322 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38044_38319__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_38323 = goog.getObjectByName(fn_str_38321,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_38322)].join(''));

(fn_obj_38323.cljs$core$IFn$_invoke$arity$2 ? fn_obj_38323.cljs$core$IFn$_invoke$arity$2(path,new_link_38313) : fn_obj_38323.call(null,path,new_link_38313));


var G__38324 = seq__38035_38314;
var G__38325 = chunk__38037_38315;
var G__38326 = count__38038_38316;
var G__38327 = (i__38039_38317 + (1));
seq__38035_38314 = G__38324;
chunk__38037_38315 = G__38325;
count__38038_38316 = G__38326;
i__38039_38317 = G__38327;
continue;
} else {
var temp__5804__auto___38328__$1 = cljs.core.seq(seq__38035_38314);
if(temp__5804__auto___38328__$1){
var seq__38035_38329__$1 = temp__5804__auto___38328__$1;
if(cljs.core.chunked_seq_QMARK_(seq__38035_38329__$1)){
var c__5525__auto___38330 = cljs.core.chunk_first(seq__38035_38329__$1);
var G__38331 = cljs.core.chunk_rest(seq__38035_38329__$1);
var G__38332 = c__5525__auto___38330;
var G__38333 = cljs.core.count(c__5525__auto___38330);
var G__38334 = (0);
seq__38035_38314 = G__38331;
chunk__38037_38315 = G__38332;
count__38038_38316 = G__38333;
i__38039_38317 = G__38334;
continue;
} else {
var map__38061_38335 = cljs.core.first(seq__38035_38329__$1);
var map__38061_38336__$1 = cljs.core.__destructure_map(map__38061_38335);
var task_38337 = map__38061_38336__$1;
var fn_str_38338 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38061_38336__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_38339 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38061_38336__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_38340 = goog.getObjectByName(fn_str_38338,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_38339)].join(''));

(fn_obj_38340.cljs$core$IFn$_invoke$arity$2 ? fn_obj_38340.cljs$core$IFn$_invoke$arity$2(path,new_link_38313) : fn_obj_38340.call(null,path,new_link_38313));


var G__38341 = cljs.core.next(seq__38035_38329__$1);
var G__38342 = null;
var G__38343 = (0);
var G__38344 = (0);
seq__38035_38314 = G__38341;
chunk__38037_38315 = G__38342;
count__38038_38316 = G__38343;
i__38039_38317 = G__38344;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_38311);
});})(seq__37930_38254,chunk__37934_38255,count__37935_38256,i__37936_38257,seq__37786,chunk__37788,count__37789,i__37790,new_link_38313,path_match_38312,node_38311,seq__37930_38305__$1,temp__5804__auto___38304,path,map__37785,map__37785__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_38312], 0));

goog.dom.insertSiblingAfter(new_link_38313,node_38311);


var G__38345 = cljs.core.next(seq__37930_38305__$1);
var G__38346 = null;
var G__38347 = (0);
var G__38348 = (0);
seq__37930_38254 = G__38345;
chunk__37934_38255 = G__38346;
count__37935_38256 = G__38347;
i__37936_38257 = G__38348;
continue;
} else {
var G__38349 = cljs.core.next(seq__37930_38305__$1);
var G__38350 = null;
var G__38351 = (0);
var G__38352 = (0);
seq__37930_38254 = G__38349;
chunk__37934_38255 = G__38350;
count__37935_38256 = G__38351;
i__37936_38257 = G__38352;
continue;
}
} else {
var G__38353 = cljs.core.next(seq__37930_38305__$1);
var G__38354 = null;
var G__38355 = (0);
var G__38356 = (0);
seq__37930_38254 = G__38353;
chunk__37934_38255 = G__38354;
count__37935_38256 = G__38355;
i__37936_38257 = G__38356;
continue;
}
}
} else {
}
}
break;
}


var G__38357 = seq__37786;
var G__38358 = chunk__37788;
var G__38359 = count__37789;
var G__38360 = (i__37790 + (1));
seq__37786 = G__38357;
chunk__37788 = G__38358;
count__37789 = G__38359;
i__37790 = G__38360;
continue;
} else {
var G__38361 = seq__37786;
var G__38362 = chunk__37788;
var G__38363 = count__37789;
var G__38364 = (i__37790 + (1));
seq__37786 = G__38361;
chunk__37788 = G__38362;
count__37789 = G__38363;
i__37790 = G__38364;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__37786);
if(temp__5804__auto__){
var seq__37786__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37786__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__37786__$1);
var G__38365 = cljs.core.chunk_rest(seq__37786__$1);
var G__38366 = c__5525__auto__;
var G__38367 = cljs.core.count(c__5525__auto__);
var G__38368 = (0);
seq__37786 = G__38365;
chunk__37788 = G__38366;
count__37789 = G__38367;
i__37790 = G__38368;
continue;
} else {
var path = cljs.core.first(seq__37786__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__38069_38369 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__38073_38370 = null;
var count__38074_38371 = (0);
var i__38075_38372 = (0);
while(true){
if((i__38075_38372 < count__38074_38371)){
var node_38373 = chunk__38073_38370.cljs$core$IIndexed$_nth$arity$2(null,i__38075_38372);
if(cljs.core.not(node_38373.shadow$old)){
var path_match_38374 = shadow.cljs.devtools.client.browser.match_paths(node_38373.getAttribute("href"),path);
if(cljs.core.truth_(path_match_38374)){
var new_link_38375 = (function (){var G__38113 = node_38373.cloneNode(true);
G__38113.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_38374),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__38113;
})();
(node_38373.shadow$old = true);

(new_link_38375.onload = ((function (seq__38069_38369,chunk__38073_38370,count__38074_38371,i__38075_38372,seq__37786,chunk__37788,count__37789,i__37790,new_link_38375,path_match_38374,node_38373,path,seq__37786__$1,temp__5804__auto__,map__37785,map__37785__$1,msg,updates,reload_info){
return (function (e){
var seq__38114_38376 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__38116_38377 = null;
var count__38117_38378 = (0);
var i__38118_38379 = (0);
while(true){
if((i__38118_38379 < count__38117_38378)){
var map__38124_38380 = chunk__38116_38377.cljs$core$IIndexed$_nth$arity$2(null,i__38118_38379);
var map__38124_38381__$1 = cljs.core.__destructure_map(map__38124_38380);
var task_38382 = map__38124_38381__$1;
var fn_str_38383 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38124_38381__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_38384 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38124_38381__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_38385 = goog.getObjectByName(fn_str_38383,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_38384)].join(''));

(fn_obj_38385.cljs$core$IFn$_invoke$arity$2 ? fn_obj_38385.cljs$core$IFn$_invoke$arity$2(path,new_link_38375) : fn_obj_38385.call(null,path,new_link_38375));


var G__38386 = seq__38114_38376;
var G__38387 = chunk__38116_38377;
var G__38388 = count__38117_38378;
var G__38389 = (i__38118_38379 + (1));
seq__38114_38376 = G__38386;
chunk__38116_38377 = G__38387;
count__38117_38378 = G__38388;
i__38118_38379 = G__38389;
continue;
} else {
var temp__5804__auto___38390__$1 = cljs.core.seq(seq__38114_38376);
if(temp__5804__auto___38390__$1){
var seq__38114_38391__$1 = temp__5804__auto___38390__$1;
if(cljs.core.chunked_seq_QMARK_(seq__38114_38391__$1)){
var c__5525__auto___38392 = cljs.core.chunk_first(seq__38114_38391__$1);
var G__38393 = cljs.core.chunk_rest(seq__38114_38391__$1);
var G__38394 = c__5525__auto___38392;
var G__38395 = cljs.core.count(c__5525__auto___38392);
var G__38396 = (0);
seq__38114_38376 = G__38393;
chunk__38116_38377 = G__38394;
count__38117_38378 = G__38395;
i__38118_38379 = G__38396;
continue;
} else {
var map__38128_38397 = cljs.core.first(seq__38114_38391__$1);
var map__38128_38398__$1 = cljs.core.__destructure_map(map__38128_38397);
var task_38399 = map__38128_38398__$1;
var fn_str_38400 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38128_38398__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_38401 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38128_38398__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_38402 = goog.getObjectByName(fn_str_38400,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_38401)].join(''));

(fn_obj_38402.cljs$core$IFn$_invoke$arity$2 ? fn_obj_38402.cljs$core$IFn$_invoke$arity$2(path,new_link_38375) : fn_obj_38402.call(null,path,new_link_38375));


var G__38403 = cljs.core.next(seq__38114_38391__$1);
var G__38404 = null;
var G__38405 = (0);
var G__38406 = (0);
seq__38114_38376 = G__38403;
chunk__38116_38377 = G__38404;
count__38117_38378 = G__38405;
i__38118_38379 = G__38406;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_38373);
});})(seq__38069_38369,chunk__38073_38370,count__38074_38371,i__38075_38372,seq__37786,chunk__37788,count__37789,i__37790,new_link_38375,path_match_38374,node_38373,path,seq__37786__$1,temp__5804__auto__,map__37785,map__37785__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_38374], 0));

goog.dom.insertSiblingAfter(new_link_38375,node_38373);


var G__38407 = seq__38069_38369;
var G__38408 = chunk__38073_38370;
var G__38409 = count__38074_38371;
var G__38410 = (i__38075_38372 + (1));
seq__38069_38369 = G__38407;
chunk__38073_38370 = G__38408;
count__38074_38371 = G__38409;
i__38075_38372 = G__38410;
continue;
} else {
var G__38411 = seq__38069_38369;
var G__38412 = chunk__38073_38370;
var G__38413 = count__38074_38371;
var G__38414 = (i__38075_38372 + (1));
seq__38069_38369 = G__38411;
chunk__38073_38370 = G__38412;
count__38074_38371 = G__38413;
i__38075_38372 = G__38414;
continue;
}
} else {
var G__38415 = seq__38069_38369;
var G__38416 = chunk__38073_38370;
var G__38417 = count__38074_38371;
var G__38418 = (i__38075_38372 + (1));
seq__38069_38369 = G__38415;
chunk__38073_38370 = G__38416;
count__38074_38371 = G__38417;
i__38075_38372 = G__38418;
continue;
}
} else {
var temp__5804__auto___38419__$1 = cljs.core.seq(seq__38069_38369);
if(temp__5804__auto___38419__$1){
var seq__38069_38420__$1 = temp__5804__auto___38419__$1;
if(cljs.core.chunked_seq_QMARK_(seq__38069_38420__$1)){
var c__5525__auto___38421 = cljs.core.chunk_first(seq__38069_38420__$1);
var G__38422 = cljs.core.chunk_rest(seq__38069_38420__$1);
var G__38423 = c__5525__auto___38421;
var G__38424 = cljs.core.count(c__5525__auto___38421);
var G__38425 = (0);
seq__38069_38369 = G__38422;
chunk__38073_38370 = G__38423;
count__38074_38371 = G__38424;
i__38075_38372 = G__38425;
continue;
} else {
var node_38426 = cljs.core.first(seq__38069_38420__$1);
if(cljs.core.not(node_38426.shadow$old)){
var path_match_38427 = shadow.cljs.devtools.client.browser.match_paths(node_38426.getAttribute("href"),path);
if(cljs.core.truth_(path_match_38427)){
var new_link_38428 = (function (){var G__38130 = node_38426.cloneNode(true);
G__38130.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_38427),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__38130;
})();
(node_38426.shadow$old = true);

(new_link_38428.onload = ((function (seq__38069_38369,chunk__38073_38370,count__38074_38371,i__38075_38372,seq__37786,chunk__37788,count__37789,i__37790,new_link_38428,path_match_38427,node_38426,seq__38069_38420__$1,temp__5804__auto___38419__$1,path,seq__37786__$1,temp__5804__auto__,map__37785,map__37785__$1,msg,updates,reload_info){
return (function (e){
var seq__38131_38429 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__38133_38430 = null;
var count__38134_38431 = (0);
var i__38135_38432 = (0);
while(true){
if((i__38135_38432 < count__38134_38431)){
var map__38139_38433 = chunk__38133_38430.cljs$core$IIndexed$_nth$arity$2(null,i__38135_38432);
var map__38139_38434__$1 = cljs.core.__destructure_map(map__38139_38433);
var task_38435 = map__38139_38434__$1;
var fn_str_38436 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38139_38434__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_38437 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38139_38434__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_38438 = goog.getObjectByName(fn_str_38436,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_38437)].join(''));

(fn_obj_38438.cljs$core$IFn$_invoke$arity$2 ? fn_obj_38438.cljs$core$IFn$_invoke$arity$2(path,new_link_38428) : fn_obj_38438.call(null,path,new_link_38428));


var G__38439 = seq__38131_38429;
var G__38440 = chunk__38133_38430;
var G__38441 = count__38134_38431;
var G__38442 = (i__38135_38432 + (1));
seq__38131_38429 = G__38439;
chunk__38133_38430 = G__38440;
count__38134_38431 = G__38441;
i__38135_38432 = G__38442;
continue;
} else {
var temp__5804__auto___38443__$2 = cljs.core.seq(seq__38131_38429);
if(temp__5804__auto___38443__$2){
var seq__38131_38444__$1 = temp__5804__auto___38443__$2;
if(cljs.core.chunked_seq_QMARK_(seq__38131_38444__$1)){
var c__5525__auto___38445 = cljs.core.chunk_first(seq__38131_38444__$1);
var G__38446 = cljs.core.chunk_rest(seq__38131_38444__$1);
var G__38447 = c__5525__auto___38445;
var G__38448 = cljs.core.count(c__5525__auto___38445);
var G__38449 = (0);
seq__38131_38429 = G__38446;
chunk__38133_38430 = G__38447;
count__38134_38431 = G__38448;
i__38135_38432 = G__38449;
continue;
} else {
var map__38141_38450 = cljs.core.first(seq__38131_38444__$1);
var map__38141_38451__$1 = cljs.core.__destructure_map(map__38141_38450);
var task_38452 = map__38141_38451__$1;
var fn_str_38453 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38141_38451__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_38454 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38141_38451__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_38455 = goog.getObjectByName(fn_str_38453,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_38454)].join(''));

(fn_obj_38455.cljs$core$IFn$_invoke$arity$2 ? fn_obj_38455.cljs$core$IFn$_invoke$arity$2(path,new_link_38428) : fn_obj_38455.call(null,path,new_link_38428));


var G__38456 = cljs.core.next(seq__38131_38444__$1);
var G__38457 = null;
var G__38458 = (0);
var G__38459 = (0);
seq__38131_38429 = G__38456;
chunk__38133_38430 = G__38457;
count__38134_38431 = G__38458;
i__38135_38432 = G__38459;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_38426);
});})(seq__38069_38369,chunk__38073_38370,count__38074_38371,i__38075_38372,seq__37786,chunk__37788,count__37789,i__37790,new_link_38428,path_match_38427,node_38426,seq__38069_38420__$1,temp__5804__auto___38419__$1,path,seq__37786__$1,temp__5804__auto__,map__37785,map__37785__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_38427], 0));

goog.dom.insertSiblingAfter(new_link_38428,node_38426);


var G__38460 = cljs.core.next(seq__38069_38420__$1);
var G__38461 = null;
var G__38462 = (0);
var G__38463 = (0);
seq__38069_38369 = G__38460;
chunk__38073_38370 = G__38461;
count__38074_38371 = G__38462;
i__38075_38372 = G__38463;
continue;
} else {
var G__38464 = cljs.core.next(seq__38069_38420__$1);
var G__38465 = null;
var G__38466 = (0);
var G__38467 = (0);
seq__38069_38369 = G__38464;
chunk__38073_38370 = G__38465;
count__38074_38371 = G__38466;
i__38075_38372 = G__38467;
continue;
}
} else {
var G__38468 = cljs.core.next(seq__38069_38420__$1);
var G__38469 = null;
var G__38470 = (0);
var G__38471 = (0);
seq__38069_38369 = G__38468;
chunk__38073_38370 = G__38469;
count__38074_38371 = G__38470;
i__38075_38372 = G__38471;
continue;
}
}
} else {
}
}
break;
}


var G__38472 = cljs.core.next(seq__37786__$1);
var G__38473 = null;
var G__38474 = (0);
var G__38475 = (0);
seq__37786 = G__38472;
chunk__37788 = G__38473;
count__37789 = G__38474;
i__37790 = G__38475;
continue;
} else {
var G__38476 = cljs.core.next(seq__37786__$1);
var G__38477 = null;
var G__38478 = (0);
var G__38479 = (0);
seq__37786 = G__38476;
chunk__37788 = G__38477;
count__37789 = G__38478;
i__37790 = G__38479;
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
try{var G__38143 = shadow.cljs.devtools.client.browser.global_eval(code);
return (success.cljs$core$IFn$_invoke$arity$1 ? success.cljs$core$IFn$_invoke$arity$1(G__38143) : success.call(null,G__38143));
}catch (e38142){var e = e38142;
return (fail.cljs$core$IFn$_invoke$arity$1 ? fail.cljs$core$IFn$_invoke$arity$1(e) : fail.call(null,e));
}}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$5 = (function (this$,ns,p__38144,success,fail){
var map__38145 = p__38144;
var map__38145__$1 = cljs.core.__destructure_map(map__38145);
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38145__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
try{var G__38147 = shadow.cljs.devtools.client.browser.global_eval(js);
return (success.cljs$core$IFn$_invoke$arity$1 ? success.cljs$core$IFn$_invoke$arity$1(G__38147) : success.call(null,G__38147));
}catch (e38146){var e = e38146;
return (fail.cljs$core$IFn$_invoke$arity$1 ? fail.cljs$core$IFn$_invoke$arity$1(e) : fail.call(null,e));
}}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__38148,done,error){
var map__38149 = p__38148;
var map__38149__$1 = cljs.core.__destructure_map(map__38149);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38149__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__38151,done,error){
var map__38152 = p__38151;
var map__38152__$1 = cljs.core.__destructure_map(map__38152);
var msg = map__38152__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38152__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38152__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38152__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__38158){
var map__38159 = p__38158;
var map__38159__$1 = cljs.core.__destructure_map(map__38159);
var src = map__38159__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38159__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__5000__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__5000__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__5000__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__38162 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__38162) : done.call(null,G__38162));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__38163){
var map__38164 = p__38163;
var map__38164__$1 = cljs.core.__destructure_map(map__38164);
var msg__$1 = map__38164__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38164__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e38165){var ex = e38165;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__38169){
var map__38170 = p__38169;
var map__38170__$1 = cljs.core.__destructure_map(map__38170);
var env = map__38170__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38170__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
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
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__38174){
var map__38175 = p__38174;
var map__38175__$1 = cljs.core.__destructure_map(map__38175);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38175__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38175__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
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
}),(function (p__38177){
var map__38178 = p__38177;
var map__38178__$1 = cljs.core.__destructure_map(map__38178);
var svc = map__38178__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38178__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
