goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__30825){
var map__30826 = p__30825;
var map__30826__$1 = cljs.core.__destructure_map(map__30826);
var runtime = map__30826__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30826__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__5002__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
var self_id_31202 = shadow.remote.runtime.shared.get_client_id(runtime);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"to","to",192099007).cljs$core$IFn$_invoke$arity$1(msg),self_id_31202)){
shadow.remote.runtime.api.relay_msg(runtime,msg);
} else {
Promise.resolve((1)).then((function (){
var G__30842 = runtime;
var G__30843 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"from","from",1815293044),self_id_31202);
return (shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2 ? shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2(G__30842,G__30843) : shadow.remote.runtime.shared.process.call(null,G__30842,G__30843));
}));
}

return msg;
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__30844,res){
var map__30845 = p__30844;
var map__30845__$1 = cljs.core.__destructure_map(map__30845);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30845__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30845__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__30851 = res;
var G__30851__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__30851,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__30851);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__30851__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__30851__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__30863 = arguments.length;
switch (G__30863) {
case 3:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3 = (function (runtime,msg,handlers){
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4(runtime,msg,handlers,(0));
}));

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__30872,msg,handlers,timeout_after_ms){
var map__30878 = p__30872;
var map__30878__$1 = cljs.core.__destructure_map(map__30878);
var runtime = map__30878__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30878__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
if(cljs.core.map_QMARK_(msg)){
} else {
throw (new Error("Assert failed: (map? msg)"));
}

if(cljs.core.map_QMARK_(handlers)){
} else {
throw (new Error("Assert failed: (map? handlers)"));
}

if(cljs.core.nat_int_QMARK_(timeout_after_ms)){
} else {
throw (new Error("Assert failed: (nat-int? timeout-after-ms)"));
}

var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__5732__auto__ = [];
var len__5726__auto___31241 = arguments.length;
var i__5727__auto___31242 = (0);
while(true){
if((i__5727__auto___31242 < len__5726__auto___31241)){
args__5732__auto__.push((arguments[i__5727__auto___31242]));

var G__31243 = (i__5727__auto___31242 + (1));
i__5727__auto___31242 = G__31243;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((2) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5733__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__30947,ev,args){
var map__30954 = p__30947;
var map__30954__$1 = cljs.core.__destructure_map(map__30954);
var runtime = map__30954__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30954__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__30960 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__30963 = null;
var count__30964 = (0);
var i__30965 = (0);
while(true){
if((i__30965 < count__30964)){
var ext = chunk__30963.cljs$core$IIndexed$_nth$arity$2(null,i__30965);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__31251 = seq__30960;
var G__31252 = chunk__30963;
var G__31253 = count__30964;
var G__31254 = (i__30965 + (1));
seq__30960 = G__31251;
chunk__30963 = G__31252;
count__30964 = G__31253;
i__30965 = G__31254;
continue;
} else {
var G__31261 = seq__30960;
var G__31262 = chunk__30963;
var G__31264 = count__30964;
var G__31265 = (i__30965 + (1));
seq__30960 = G__31261;
chunk__30963 = G__31262;
count__30964 = G__31264;
i__30965 = G__31265;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__30960);
if(temp__5804__auto__){
var seq__30960__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__30960__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__30960__$1);
var G__31271 = cljs.core.chunk_rest(seq__30960__$1);
var G__31272 = c__5525__auto__;
var G__31273 = cljs.core.count(c__5525__auto__);
var G__31274 = (0);
seq__30960 = G__31271;
chunk__30963 = G__31272;
count__30964 = G__31273;
i__30965 = G__31274;
continue;
} else {
var ext = cljs.core.first(seq__30960__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__31287 = cljs.core.next(seq__30960__$1);
var G__31288 = null;
var G__31289 = (0);
var G__31290 = (0);
seq__30960 = G__31287;
chunk__30963 = G__31288;
count__30964 = G__31289;
i__30965 = G__31290;
continue;
} else {
var G__31291 = cljs.core.next(seq__30960__$1);
var G__31292 = null;
var G__31293 = (0);
var G__31294 = (0);
seq__30960 = G__31291;
chunk__30963 = G__31292;
count__30964 = G__31293;
i__30965 = G__31294;
continue;
}
}
} else {
return null;
}
}
break;
}
}));

(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq30913){
var G__30914 = cljs.core.first(seq30913);
var seq30913__$1 = cljs.core.next(seq30913);
var G__30915 = cljs.core.first(seq30913__$1);
var seq30913__$2 = cljs.core.next(seq30913__$1);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30914,G__30915,seq30913__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__30994,p__30995){
var map__30997 = p__30994;
var map__30997__$1 = cljs.core.__destructure_map(map__30997);
var runtime = map__30997__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30997__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__30998 = p__30995;
var map__30998__$1 = cljs.core.__destructure_map(map__30998);
var msg = map__30998__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30998__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"welcome","welcome",-578152123),true], 0));

var map__31008 = cljs.core.deref(state_ref);
var map__31008__$1 = cljs.core.__destructure_map(map__31008);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31008__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31008__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__31027,msg){
var map__31028 = p__31027;
var map__31028__$1 = cljs.core.__destructure_map(map__31028);
var runtime = map__31028__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31028__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__31060,key,p__31061){
var map__31062 = p__31060;
var map__31062__$1 = cljs.core.__destructure_map(map__31062);
var state = map__31062__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31062__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__31063 = p__31061;
var map__31063__$1 = cljs.core.__destructure_map(map__31063);
var spec = map__31063__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31063__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
var transit_write_handlers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31063__$1,new cljs.core.Keyword(null,"transit-write-handlers","transit-write-handlers",1886308716));
if(cljs.core.contains_QMARK_(extensions,key)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("extension already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"spec","spec",347520401),spec], null));
} else {
}

return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("op already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"op","op",-1882987955),op_kw], null));
} else {
}

return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null),op_handler);
}),cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null),spec),ops);
});
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__31087,key,spec){
var map__31089 = p__31087;
var map__31089__$1 = cljs.core.__destructure_map(map__31089);
var runtime = map__31089__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31089__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);

var temp__5808__auto___31375 = new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125).cljs$core$IFn$_invoke$arity$1(spec);
if((temp__5808__auto___31375 == null)){
} else {
var on_welcome_31377 = temp__5808__auto___31375;
if(cljs.core.truth_(new cljs.core.Keyword(null,"welcome","welcome",-578152123).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))){
(on_welcome_31377.cljs$core$IFn$_invoke$arity$0 ? on_welcome_31377.cljs$core$IFn$_invoke$arity$0() : on_welcome_31377.call(null));
} else {
}
}

return runtime;
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__31094_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__31094_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__31098_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__31098_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__31099_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__31099_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__31100_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__31100_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__31101_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__31101_SHARP_);
})], null)], null));
});
shadow.remote.runtime.shared.del_extension_STAR_ = (function shadow$remote$runtime$shared$del_extension_STAR_(state,key){
var ext = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null));
if(cljs.core.not(ext)){
return state;
} else {
return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063)], null),cljs.core.dissoc,op_kw);
}),cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.dissoc,key),new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(ext));
}
});
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__31111,key){
var map__31113 = p__31111;
var map__31113__$1 = cljs.core.__destructure_map(map__31113);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31113__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__31119,msg){
var map__31120 = p__31119;
var map__31120__$1 = cljs.core.__destructure_map(map__31120);
var runtime = map__31120__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31120__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__31130,p__31131){
var map__31132 = p__31130;
var map__31132__$1 = cljs.core.__destructure_map(map__31132);
var runtime = map__31132__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31132__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__31133 = p__31131;
var map__31133__$1 = cljs.core.__destructure_map(map__31133);
var msg = map__31133__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31133__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31133__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.truth_(call_id)){
var cfg = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null));
var call_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cfg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),op], null));
if(cljs.core.truth_(call_handler)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([call_id], 0));

return (call_handler.cljs$core$IFn$_invoke$arity$1 ? call_handler.cljs$core$IFn$_invoke$arity$1(msg) : call_handler.call(null,msg));
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
return shadow.remote.runtime.shared.unhandled_call_result(cfg,msg);

}
}
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-not-found","client-not-found",-1754042614),op)){
return shadow.remote.runtime.shared.unhandled_client_not_found(runtime,msg);
} else {
return shadow.remote.runtime.shared.reply_unknown_op(runtime,msg);

}
}
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__31144 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__31146 = null;
var count__31147 = (0);
var i__31148 = (0);
while(true){
if((i__31148 < count__31147)){
var map__31171 = chunk__31146.cljs$core$IIndexed$_nth$arity$2(null,i__31148);
var map__31171__$1 = cljs.core.__destructure_map(map__31171);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31171__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__31405 = seq__31144;
var G__31406 = chunk__31146;
var G__31407 = count__31147;
var G__31408 = (i__31148 + (1));
seq__31144 = G__31405;
chunk__31146 = G__31406;
count__31147 = G__31407;
i__31148 = G__31408;
continue;
} else {
var G__31411 = seq__31144;
var G__31412 = chunk__31146;
var G__31413 = count__31147;
var G__31414 = (i__31148 + (1));
seq__31144 = G__31411;
chunk__31146 = G__31412;
count__31147 = G__31413;
i__31148 = G__31414;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__31144);
if(temp__5804__auto__){
var seq__31144__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__31144__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__31144__$1);
var G__31415 = cljs.core.chunk_rest(seq__31144__$1);
var G__31416 = c__5525__auto__;
var G__31417 = cljs.core.count(c__5525__auto__);
var G__31418 = (0);
seq__31144 = G__31415;
chunk__31146 = G__31416;
count__31147 = G__31417;
i__31148 = G__31418;
continue;
} else {
var map__31178 = cljs.core.first(seq__31144__$1);
var map__31178__$1 = cljs.core.__destructure_map(map__31178);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31178__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__31420 = cljs.core.next(seq__31144__$1);
var G__31421 = null;
var G__31422 = (0);
var G__31423 = (0);
seq__31144 = G__31420;
chunk__31146 = G__31421;
count__31147 = G__31422;
i__31148 = G__31423;
continue;
} else {
var G__31428 = cljs.core.next(seq__31144__$1);
var G__31429 = null;
var G__31430 = (0);
var G__31431 = (0);
seq__31144 = G__31428;
chunk__31146 = G__31429;
count__31147 = G__31430;
i__31148 = G__31431;
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

//# sourceMappingURL=shadow.remote.runtime.shared.js.map
