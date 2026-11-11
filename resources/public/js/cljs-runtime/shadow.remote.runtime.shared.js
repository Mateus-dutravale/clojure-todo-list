goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__30914){
var map__30915 = p__30914;
var map__30915__$1 = cljs.core.__destructure_map(map__30915);
var runtime = map__30915__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30915__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__5002__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
var self_id_31276 = shadow.remote.runtime.shared.get_client_id(runtime);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"to","to",192099007).cljs$core$IFn$_invoke$arity$1(msg),self_id_31276)){
shadow.remote.runtime.api.relay_msg(runtime,msg);
} else {
Promise.resolve((1)).then((function (){
var G__30925 = runtime;
var G__30926 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"from","from",1815293044),self_id_31276);
return (shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2 ? shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2(G__30925,G__30926) : shadow.remote.runtime.shared.process.call(null,G__30925,G__30926));
}));
}

return msg;
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__30927,res){
var map__30928 = p__30927;
var map__30928__$1 = cljs.core.__destructure_map(map__30928);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30928__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30928__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__30929 = res;
var G__30929__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__30929,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__30929);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__30929__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__30929__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__30938 = arguments.length;
switch (G__30938) {
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

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__30946,msg,handlers,timeout_after_ms){
var map__30972 = p__30946;
var map__30972__$1 = cljs.core.__destructure_map(map__30972);
var runtime = map__30972__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30972__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
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
var len__5726__auto___31315 = arguments.length;
var i__5727__auto___31317 = (0);
while(true){
if((i__5727__auto___31317 < len__5726__auto___31315)){
args__5732__auto__.push((arguments[i__5727__auto___31317]));

var G__31318 = (i__5727__auto___31317 + (1));
i__5727__auto___31317 = G__31318;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((2) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5733__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__31004,ev,args){
var map__31005 = p__31004;
var map__31005__$1 = cljs.core.__destructure_map(map__31005);
var runtime = map__31005__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31005__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__31009 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__31012 = null;
var count__31013 = (0);
var i__31014 = (0);
while(true){
if((i__31014 < count__31013)){
var ext = chunk__31012.cljs$core$IIndexed$_nth$arity$2(null,i__31014);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__31319 = seq__31009;
var G__31320 = chunk__31012;
var G__31321 = count__31013;
var G__31322 = (i__31014 + (1));
seq__31009 = G__31319;
chunk__31012 = G__31320;
count__31013 = G__31321;
i__31014 = G__31322;
continue;
} else {
var G__31323 = seq__31009;
var G__31324 = chunk__31012;
var G__31325 = count__31013;
var G__31326 = (i__31014 + (1));
seq__31009 = G__31323;
chunk__31012 = G__31324;
count__31013 = G__31325;
i__31014 = G__31326;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__31009);
if(temp__5804__auto__){
var seq__31009__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__31009__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__31009__$1);
var G__31329 = cljs.core.chunk_rest(seq__31009__$1);
var G__31330 = c__5525__auto__;
var G__31331 = cljs.core.count(c__5525__auto__);
var G__31332 = (0);
seq__31009 = G__31329;
chunk__31012 = G__31330;
count__31013 = G__31331;
i__31014 = G__31332;
continue;
} else {
var ext = cljs.core.first(seq__31009__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__31335 = cljs.core.next(seq__31009__$1);
var G__31336 = null;
var G__31337 = (0);
var G__31338 = (0);
seq__31009 = G__31335;
chunk__31012 = G__31336;
count__31013 = G__31337;
i__31014 = G__31338;
continue;
} else {
var G__31341 = cljs.core.next(seq__31009__$1);
var G__31342 = null;
var G__31343 = (0);
var G__31344 = (0);
seq__31009 = G__31341;
chunk__31012 = G__31342;
count__31013 = G__31343;
i__31014 = G__31344;
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
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq31001){
var G__31002 = cljs.core.first(seq31001);
var seq31001__$1 = cljs.core.next(seq31001);
var G__31003 = cljs.core.first(seq31001__$1);
var seq31001__$2 = cljs.core.next(seq31001__$1);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31002,G__31003,seq31001__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__31044,p__31045){
var map__31046 = p__31044;
var map__31046__$1 = cljs.core.__destructure_map(map__31046);
var runtime = map__31046__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31046__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__31047 = p__31045;
var map__31047__$1 = cljs.core.__destructure_map(map__31047);
var msg = map__31047__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31047__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"welcome","welcome",-578152123),true], 0));

var map__31050 = cljs.core.deref(state_ref);
var map__31050__$1 = cljs.core.__destructure_map(map__31050);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31050__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31050__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__31067,msg){
var map__31068 = p__31067;
var map__31068__$1 = cljs.core.__destructure_map(map__31068);
var runtime = map__31068__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31068__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__31092,key,p__31093){
var map__31095 = p__31092;
var map__31095__$1 = cljs.core.__destructure_map(map__31095);
var state = map__31095__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31095__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__31096 = p__31093;
var map__31096__$1 = cljs.core.__destructure_map(map__31096);
var spec = map__31096__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31096__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
var transit_write_handlers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31096__$1,new cljs.core.Keyword(null,"transit-write-handlers","transit-write-handlers",1886308716));
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
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__31105,key,spec){
var map__31106 = p__31105;
var map__31106__$1 = cljs.core.__destructure_map(map__31106);
var runtime = map__31106__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31106__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);

var temp__5808__auto___31393 = new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125).cljs$core$IFn$_invoke$arity$1(spec);
if((temp__5808__auto___31393 == null)){
} else {
var on_welcome_31394 = temp__5808__auto___31393;
if(cljs.core.truth_(new cljs.core.Keyword(null,"welcome","welcome",-578152123).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))){
(on_welcome_31394.cljs$core$IFn$_invoke$arity$0 ? on_welcome_31394.cljs$core$IFn$_invoke$arity$0() : on_welcome_31394.call(null));
} else {
}
}

return runtime;
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__31112_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__31112_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__31114_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__31114_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__31115_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__31115_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__31117_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__31117_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__31118_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__31118_SHARP_);
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
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__31158,key){
var map__31159 = p__31158;
var map__31159__$1 = cljs.core.__destructure_map(map__31159);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31159__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__31169,msg){
var map__31171 = p__31169;
var map__31171__$1 = cljs.core.__destructure_map(map__31171);
var runtime = map__31171__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31171__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__31178,p__31179){
var map__31180 = p__31178;
var map__31180__$1 = cljs.core.__destructure_map(map__31180);
var runtime = map__31180__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31180__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__31182 = p__31179;
var map__31182__$1 = cljs.core.__destructure_map(map__31182);
var msg = map__31182__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31182__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31182__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
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
var seq__31194 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__31196 = null;
var count__31197 = (0);
var i__31198 = (0);
while(true){
if((i__31198 < count__31197)){
var map__31225 = chunk__31196.cljs$core$IIndexed$_nth$arity$2(null,i__31198);
var map__31225__$1 = cljs.core.__destructure_map(map__31225);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31225__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__31425 = seq__31194;
var G__31426 = chunk__31196;
var G__31427 = count__31197;
var G__31428 = (i__31198 + (1));
seq__31194 = G__31425;
chunk__31196 = G__31426;
count__31197 = G__31427;
i__31198 = G__31428;
continue;
} else {
var G__31429 = seq__31194;
var G__31430 = chunk__31196;
var G__31431 = count__31197;
var G__31432 = (i__31198 + (1));
seq__31194 = G__31429;
chunk__31196 = G__31430;
count__31197 = G__31431;
i__31198 = G__31432;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__31194);
if(temp__5804__auto__){
var seq__31194__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__31194__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__31194__$1);
var G__31434 = cljs.core.chunk_rest(seq__31194__$1);
var G__31435 = c__5525__auto__;
var G__31436 = cljs.core.count(c__5525__auto__);
var G__31437 = (0);
seq__31194 = G__31434;
chunk__31196 = G__31435;
count__31197 = G__31436;
i__31198 = G__31437;
continue;
} else {
var map__31242 = cljs.core.first(seq__31194__$1);
var map__31242__$1 = cljs.core.__destructure_map(map__31242);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31242__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__31440 = cljs.core.next(seq__31194__$1);
var G__31441 = null;
var G__31442 = (0);
var G__31443 = (0);
seq__31194 = G__31440;
chunk__31196 = G__31441;
count__31197 = G__31442;
i__31198 = G__31443;
continue;
} else {
var G__31444 = cljs.core.next(seq__31194__$1);
var G__31445 = null;
var G__31446 = (0);
var G__31447 = (0);
seq__31194 = G__31444;
chunk__31196 = G__31445;
count__31197 = G__31446;
i__31198 = G__31447;
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
