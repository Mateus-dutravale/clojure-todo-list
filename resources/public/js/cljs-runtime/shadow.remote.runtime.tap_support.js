goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__36920,p__36921){
var map__36922 = p__36920;
var map__36922__$1 = cljs.core.__destructure_map(map__36922);
var svc = map__36922__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36922__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36922__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36922__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__36923 = p__36921;
var map__36923__$1 = cljs.core.__destructure_map(map__36923);
var msg = map__36923__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36923__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36923__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36923__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__36923__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history__$1)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__36928,p__36929){
var map__36930 = p__36928;
var map__36930__$1 = cljs.core.__destructure_map(map__36930);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36930__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__36931 = p__36929;
var map__36931__$1 = cljs.core.__destructure_map(map__36931);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36931__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__36936,p__36937){
var map__36938 = p__36936;
var map__36938__$1 = cljs.core.__destructure_map(map__36938);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36938__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36938__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__36939 = p__36937;
var map__36939__$1 = cljs.core.__destructure_map(map__36939);
var msg = map__36939__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__36939__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__36943,tid){
var map__36944 = p__36943;
var map__36944__$1 = cljs.core.__destructure_map(map__36944);
var svc = map__36944__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36944__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__36956 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__36957 = null;
var count__36958 = (0);
var i__36959 = (0);
while(true){
if((i__36959 < count__36958)){
var vec__36974 = chunk__36957.cljs$core$IIndexed$_nth$arity$2(null,i__36959);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36974,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36974,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__37028 = seq__36956;
var G__37029 = chunk__36957;
var G__37030 = count__36958;
var G__37031 = (i__36959 + (1));
seq__36956 = G__37028;
chunk__36957 = G__37029;
count__36958 = G__37030;
i__36959 = G__37031;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__36956);
if(temp__5804__auto__){
var seq__36956__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36956__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__36956__$1);
var G__37032 = cljs.core.chunk_rest(seq__36956__$1);
var G__37033 = c__5525__auto__;
var G__37034 = cljs.core.count(c__5525__auto__);
var G__37035 = (0);
seq__36956 = G__37032;
chunk__36957 = G__37033;
count__36958 = G__37034;
i__36959 = G__37035;
continue;
} else {
var vec__36999 = cljs.core.first(seq__36956__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36999,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36999,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__37039 = cljs.core.next(seq__36956__$1);
var G__37040 = null;
var G__37041 = (0);
var G__37042 = (0);
seq__36956 = G__37039;
chunk__36957 = G__37040;
count__36958 = G__37041;
i__36959 = G__37042;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
});
var svc = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229),obj_support,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461),tap_fn,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911),subs_ref], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__36949_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__36949_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__36950_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__36950_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__36951_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__36951_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__36952_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__36952_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__37003){
var map__37004 = p__37003;
var map__37004__$1 = cljs.core.__destructure_map(map__37004);
var svc = map__37004__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37004__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37004__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
