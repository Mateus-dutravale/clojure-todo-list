goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = true;

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_29327 = (function (this$){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (shadow.dom._to_dom[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5351__auto__.call(null,this$));
} else {
var m__5349__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5349__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_29327(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_29331 = (function (this$){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (shadow.dom._to_svg[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5351__auto__.call(null,this$));
} else {
var m__5349__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5349__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_29331(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__28213 = coll;
var G__28214 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__28213,G__28214) : shadow.dom.lazy_native_coll_seq.call(null,G__28213,G__28214));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__5002__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__28235 = arguments.length;
switch (G__28235) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__28243 = arguments.length;
switch (G__28243) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__28247 = arguments.length;
switch (G__28247) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__28259 = arguments.length;
switch (G__28259) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__28276 = arguments.length;
switch (G__28276) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__28288 = arguments.length;
switch (G__28288) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__5002__auto__ = (!((typeof document !== 'undefined')));
if(or__5002__auto__){
return or__5002__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e28375){if((e28375 instanceof Object)){
var e = e28375;
return console.log("didnt support attachEvent",el,e);
} else {
throw e28375;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__5002__auto__ = (!((typeof document !== 'undefined')));
if(or__5002__auto__){
return or__5002__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__28401 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__28402 = null;
var count__28403 = (0);
var i__28404 = (0);
while(true){
if((i__28404 < count__28403)){
var el = chunk__28402.cljs$core$IIndexed$_nth$arity$2(null,i__28404);
var handler_29384__$1 = ((function (seq__28401,chunk__28402,count__28403,i__28404,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__28401,chunk__28402,count__28403,i__28404,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_29384__$1);


var G__29385 = seq__28401;
var G__29386 = chunk__28402;
var G__29387 = count__28403;
var G__29388 = (i__28404 + (1));
seq__28401 = G__29385;
chunk__28402 = G__29386;
count__28403 = G__29387;
i__28404 = G__29388;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__28401);
if(temp__5804__auto__){
var seq__28401__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__28401__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__28401__$1);
var G__29389 = cljs.core.chunk_rest(seq__28401__$1);
var G__29390 = c__5525__auto__;
var G__29391 = cljs.core.count(c__5525__auto__);
var G__29392 = (0);
seq__28401 = G__29389;
chunk__28402 = G__29390;
count__28403 = G__29391;
i__28404 = G__29392;
continue;
} else {
var el = cljs.core.first(seq__28401__$1);
var handler_29393__$1 = ((function (seq__28401,chunk__28402,count__28403,i__28404,el,seq__28401__$1,temp__5804__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__28401,chunk__28402,count__28403,i__28404,el,seq__28401__$1,temp__5804__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_29393__$1);


var G__29394 = cljs.core.next(seq__28401__$1);
var G__29395 = null;
var G__29396 = (0);
var G__29397 = (0);
seq__28401 = G__29394;
chunk__28402 = G__29395;
count__28403 = G__29396;
i__28404 = G__29397;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__28444 = arguments.length;
switch (G__28444) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__28476 = cljs.core.seq(events);
var chunk__28477 = null;
var count__28478 = (0);
var i__28479 = (0);
while(true){
if((i__28479 < count__28478)){
var vec__28492 = chunk__28477.cljs$core$IIndexed$_nth$arity$2(null,i__28479);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28492,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28492,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__29403 = seq__28476;
var G__29404 = chunk__28477;
var G__29405 = count__28478;
var G__29406 = (i__28479 + (1));
seq__28476 = G__29403;
chunk__28477 = G__29404;
count__28478 = G__29405;
i__28479 = G__29406;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__28476);
if(temp__5804__auto__){
var seq__28476__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__28476__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__28476__$1);
var G__29407 = cljs.core.chunk_rest(seq__28476__$1);
var G__29408 = c__5525__auto__;
var G__29409 = cljs.core.count(c__5525__auto__);
var G__29410 = (0);
seq__28476 = G__29407;
chunk__28477 = G__29408;
count__28478 = G__29409;
i__28479 = G__29410;
continue;
} else {
var vec__28496 = cljs.core.first(seq__28476__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28496,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28496,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__29412 = cljs.core.next(seq__28476__$1);
var G__29413 = null;
var G__29414 = (0);
var G__29415 = (0);
seq__28476 = G__29412;
chunk__28477 = G__29413;
count__28478 = G__29414;
i__28479 = G__29415;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__28501 = cljs.core.seq(styles);
var chunk__28502 = null;
var count__28503 = (0);
var i__28504 = (0);
while(true){
if((i__28504 < count__28503)){
var vec__28541 = chunk__28502.cljs$core$IIndexed$_nth$arity$2(null,i__28504);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28541,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28541,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__29416 = seq__28501;
var G__29417 = chunk__28502;
var G__29418 = count__28503;
var G__29419 = (i__28504 + (1));
seq__28501 = G__29416;
chunk__28502 = G__29417;
count__28503 = G__29418;
i__28504 = G__29419;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__28501);
if(temp__5804__auto__){
var seq__28501__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__28501__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__28501__$1);
var G__29420 = cljs.core.chunk_rest(seq__28501__$1);
var G__29421 = c__5525__auto__;
var G__29422 = cljs.core.count(c__5525__auto__);
var G__29423 = (0);
seq__28501 = G__29420;
chunk__28502 = G__29421;
count__28503 = G__29422;
i__28504 = G__29423;
continue;
} else {
var vec__28549 = cljs.core.first(seq__28501__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28549,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28549,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__29427 = cljs.core.next(seq__28501__$1);
var G__29428 = null;
var G__29429 = (0);
var G__29430 = (0);
seq__28501 = G__29427;
chunk__28502 = G__29428;
count__28503 = G__29429;
i__28504 = G__29430;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__28560_29433 = key;
var G__28560_29434__$1 = (((G__28560_29433 instanceof cljs.core.Keyword))?G__28560_29433.fqn:null);
switch (G__28560_29434__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_29438 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5002__auto__ = goog.string.startsWith(ks_29438,"data-");
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return goog.string.startsWith(ks_29438,"aria-");
}
})())){
el.setAttribute(ks_29438,value);
} else {
(el[ks_29438] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__28613){
var map__28614 = p__28613;
var map__28614__$1 = cljs.core.__destructure_map(map__28614);
var props = map__28614__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28614__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__28615 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28615,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28615,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28615,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__28620 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__28620,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__28620;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__28624 = arguments.length;
switch (G__28624) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__28643){
var vec__28646 = p__28643;
var seq__28647 = cljs.core.seq(vec__28646);
var first__28648 = cljs.core.first(seq__28647);
var seq__28647__$1 = cljs.core.next(seq__28647);
var nn = first__28648;
var first__28648__$1 = cljs.core.first(seq__28647__$1);
var seq__28647__$2 = cljs.core.next(seq__28647__$1);
var np = first__28648__$1;
var nc = seq__28647__$2;
var node = vec__28646;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__28654 = nn;
var G__28655 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__28654,G__28655) : create_fn.call(null,G__28654,G__28655));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__28656 = nn;
var G__28657 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__28656,G__28657) : create_fn.call(null,G__28656,G__28657));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__28665 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28665,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28665,(1),null);
var seq__28673_29460 = cljs.core.seq(node_children);
var chunk__28674_29461 = null;
var count__28675_29462 = (0);
var i__28676_29463 = (0);
while(true){
if((i__28676_29463 < count__28675_29462)){
var child_struct_29465 = chunk__28674_29461.cljs$core$IIndexed$_nth$arity$2(null,i__28676_29463);
var children_29466 = shadow.dom.dom_node(child_struct_29465);
if(cljs.core.seq_QMARK_(children_29466)){
var seq__28731_29467 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_29466));
var chunk__28733_29468 = null;
var count__28734_29469 = (0);
var i__28735_29470 = (0);
while(true){
if((i__28735_29470 < count__28734_29469)){
var child_29471 = chunk__28733_29468.cljs$core$IIndexed$_nth$arity$2(null,i__28735_29470);
if(cljs.core.truth_(child_29471)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_29471);


var G__29473 = seq__28731_29467;
var G__29474 = chunk__28733_29468;
var G__29475 = count__28734_29469;
var G__29476 = (i__28735_29470 + (1));
seq__28731_29467 = G__29473;
chunk__28733_29468 = G__29474;
count__28734_29469 = G__29475;
i__28735_29470 = G__29476;
continue;
} else {
var G__29477 = seq__28731_29467;
var G__29478 = chunk__28733_29468;
var G__29479 = count__28734_29469;
var G__29480 = (i__28735_29470 + (1));
seq__28731_29467 = G__29477;
chunk__28733_29468 = G__29478;
count__28734_29469 = G__29479;
i__28735_29470 = G__29480;
continue;
}
} else {
var temp__5804__auto___29483 = cljs.core.seq(seq__28731_29467);
if(temp__5804__auto___29483){
var seq__28731_29485__$1 = temp__5804__auto___29483;
if(cljs.core.chunked_seq_QMARK_(seq__28731_29485__$1)){
var c__5525__auto___29486 = cljs.core.chunk_first(seq__28731_29485__$1);
var G__29487 = cljs.core.chunk_rest(seq__28731_29485__$1);
var G__29488 = c__5525__auto___29486;
var G__29489 = cljs.core.count(c__5525__auto___29486);
var G__29490 = (0);
seq__28731_29467 = G__29487;
chunk__28733_29468 = G__29488;
count__28734_29469 = G__29489;
i__28735_29470 = G__29490;
continue;
} else {
var child_29491 = cljs.core.first(seq__28731_29485__$1);
if(cljs.core.truth_(child_29491)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_29491);


var G__29493 = cljs.core.next(seq__28731_29485__$1);
var G__29494 = null;
var G__29495 = (0);
var G__29496 = (0);
seq__28731_29467 = G__29493;
chunk__28733_29468 = G__29494;
count__28734_29469 = G__29495;
i__28735_29470 = G__29496;
continue;
} else {
var G__29497 = cljs.core.next(seq__28731_29485__$1);
var G__29498 = null;
var G__29499 = (0);
var G__29500 = (0);
seq__28731_29467 = G__29497;
chunk__28733_29468 = G__29498;
count__28734_29469 = G__29499;
i__28735_29470 = G__29500;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_29466);
}


var G__29502 = seq__28673_29460;
var G__29503 = chunk__28674_29461;
var G__29504 = count__28675_29462;
var G__29505 = (i__28676_29463 + (1));
seq__28673_29460 = G__29502;
chunk__28674_29461 = G__29503;
count__28675_29462 = G__29504;
i__28676_29463 = G__29505;
continue;
} else {
var temp__5804__auto___29506 = cljs.core.seq(seq__28673_29460);
if(temp__5804__auto___29506){
var seq__28673_29507__$1 = temp__5804__auto___29506;
if(cljs.core.chunked_seq_QMARK_(seq__28673_29507__$1)){
var c__5525__auto___29508 = cljs.core.chunk_first(seq__28673_29507__$1);
var G__29509 = cljs.core.chunk_rest(seq__28673_29507__$1);
var G__29510 = c__5525__auto___29508;
var G__29511 = cljs.core.count(c__5525__auto___29508);
var G__29512 = (0);
seq__28673_29460 = G__29509;
chunk__28674_29461 = G__29510;
count__28675_29462 = G__29511;
i__28676_29463 = G__29512;
continue;
} else {
var child_struct_29513 = cljs.core.first(seq__28673_29507__$1);
var children_29514 = shadow.dom.dom_node(child_struct_29513);
if(cljs.core.seq_QMARK_(children_29514)){
var seq__28755_29515 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_29514));
var chunk__28757_29516 = null;
var count__28758_29517 = (0);
var i__28759_29518 = (0);
while(true){
if((i__28759_29518 < count__28758_29517)){
var child_29522 = chunk__28757_29516.cljs$core$IIndexed$_nth$arity$2(null,i__28759_29518);
if(cljs.core.truth_(child_29522)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_29522);


var G__29523 = seq__28755_29515;
var G__29524 = chunk__28757_29516;
var G__29525 = count__28758_29517;
var G__29526 = (i__28759_29518 + (1));
seq__28755_29515 = G__29523;
chunk__28757_29516 = G__29524;
count__28758_29517 = G__29525;
i__28759_29518 = G__29526;
continue;
} else {
var G__29527 = seq__28755_29515;
var G__29528 = chunk__28757_29516;
var G__29529 = count__28758_29517;
var G__29530 = (i__28759_29518 + (1));
seq__28755_29515 = G__29527;
chunk__28757_29516 = G__29528;
count__28758_29517 = G__29529;
i__28759_29518 = G__29530;
continue;
}
} else {
var temp__5804__auto___29535__$1 = cljs.core.seq(seq__28755_29515);
if(temp__5804__auto___29535__$1){
var seq__28755_29536__$1 = temp__5804__auto___29535__$1;
if(cljs.core.chunked_seq_QMARK_(seq__28755_29536__$1)){
var c__5525__auto___29537 = cljs.core.chunk_first(seq__28755_29536__$1);
var G__29539 = cljs.core.chunk_rest(seq__28755_29536__$1);
var G__29540 = c__5525__auto___29537;
var G__29541 = cljs.core.count(c__5525__auto___29537);
var G__29542 = (0);
seq__28755_29515 = G__29539;
chunk__28757_29516 = G__29540;
count__28758_29517 = G__29541;
i__28759_29518 = G__29542;
continue;
} else {
var child_29544 = cljs.core.first(seq__28755_29536__$1);
if(cljs.core.truth_(child_29544)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_29544);


var G__29545 = cljs.core.next(seq__28755_29536__$1);
var G__29546 = null;
var G__29547 = (0);
var G__29548 = (0);
seq__28755_29515 = G__29545;
chunk__28757_29516 = G__29546;
count__28758_29517 = G__29547;
i__28759_29518 = G__29548;
continue;
} else {
var G__29549 = cljs.core.next(seq__28755_29536__$1);
var G__29550 = null;
var G__29551 = (0);
var G__29552 = (0);
seq__28755_29515 = G__29549;
chunk__28757_29516 = G__29550;
count__28758_29517 = G__29551;
i__28759_29518 = G__29552;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_29514);
}


var G__29554 = cljs.core.next(seq__28673_29507__$1);
var G__29555 = null;
var G__29556 = (0);
var G__29557 = (0);
seq__28673_29460 = G__29554;
chunk__28674_29461 = G__29555;
count__28675_29462 = G__29556;
i__28676_29463 = G__29557;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__28783 = cljs.core.seq(node);
var chunk__28784 = null;
var count__28785 = (0);
var i__28786 = (0);
while(true){
if((i__28786 < count__28785)){
var n = chunk__28784.cljs$core$IIndexed$_nth$arity$2(null,i__28786);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__29562 = seq__28783;
var G__29563 = chunk__28784;
var G__29564 = count__28785;
var G__29565 = (i__28786 + (1));
seq__28783 = G__29562;
chunk__28784 = G__29563;
count__28785 = G__29564;
i__28786 = G__29565;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__28783);
if(temp__5804__auto__){
var seq__28783__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__28783__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__28783__$1);
var G__29568 = cljs.core.chunk_rest(seq__28783__$1);
var G__29569 = c__5525__auto__;
var G__29570 = cljs.core.count(c__5525__auto__);
var G__29571 = (0);
seq__28783 = G__29568;
chunk__28784 = G__29569;
count__28785 = G__29570;
i__28786 = G__29571;
continue;
} else {
var n = cljs.core.first(seq__28783__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__29576 = cljs.core.next(seq__28783__$1);
var G__29577 = null;
var G__29578 = (0);
var G__29579 = (0);
seq__28783 = G__29576;
chunk__28784 = G__29577;
count__28785 = G__29578;
i__28786 = G__29579;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__28799 = arguments.length;
switch (G__28799) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__28812 = arguments.length;
switch (G__28812) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__28829 = arguments.length;
switch (G__28829) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__5002__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__5732__auto__ = [];
var len__5726__auto___29600 = arguments.length;
var i__5727__auto___29601 = (0);
while(true){
if((i__5727__auto___29601 < len__5726__auto___29600)){
args__5732__auto__.push((arguments[i__5727__auto___29601]));

var G__29603 = (i__5727__auto___29601 + (1));
i__5727__auto___29601 = G__29603;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__28851_29607 = cljs.core.seq(nodes);
var chunk__28852_29608 = null;
var count__28853_29609 = (0);
var i__28854_29610 = (0);
while(true){
if((i__28854_29610 < count__28853_29609)){
var node_29611 = chunk__28852_29608.cljs$core$IIndexed$_nth$arity$2(null,i__28854_29610);
fragment.appendChild(shadow.dom._to_dom(node_29611));


var G__29612 = seq__28851_29607;
var G__29613 = chunk__28852_29608;
var G__29614 = count__28853_29609;
var G__29615 = (i__28854_29610 + (1));
seq__28851_29607 = G__29612;
chunk__28852_29608 = G__29613;
count__28853_29609 = G__29614;
i__28854_29610 = G__29615;
continue;
} else {
var temp__5804__auto___29616 = cljs.core.seq(seq__28851_29607);
if(temp__5804__auto___29616){
var seq__28851_29617__$1 = temp__5804__auto___29616;
if(cljs.core.chunked_seq_QMARK_(seq__28851_29617__$1)){
var c__5525__auto___29619 = cljs.core.chunk_first(seq__28851_29617__$1);
var G__29620 = cljs.core.chunk_rest(seq__28851_29617__$1);
var G__29621 = c__5525__auto___29619;
var G__29622 = cljs.core.count(c__5525__auto___29619);
var G__29623 = (0);
seq__28851_29607 = G__29620;
chunk__28852_29608 = G__29621;
count__28853_29609 = G__29622;
i__28854_29610 = G__29623;
continue;
} else {
var node_29625 = cljs.core.first(seq__28851_29617__$1);
fragment.appendChild(shadow.dom._to_dom(node_29625));


var G__29632 = cljs.core.next(seq__28851_29617__$1);
var G__29633 = null;
var G__29634 = (0);
var G__29635 = (0);
seq__28851_29607 = G__29632;
chunk__28852_29608 = G__29633;
count__28853_29609 = G__29634;
i__28854_29610 = G__29635;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq28846){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq28846));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__28872_29643 = cljs.core.seq(scripts);
var chunk__28873_29644 = null;
var count__28874_29645 = (0);
var i__28875_29646 = (0);
while(true){
if((i__28875_29646 < count__28874_29645)){
var vec__28887_29647 = chunk__28873_29644.cljs$core$IIndexed$_nth$arity$2(null,i__28875_29646);
var script_tag_29648 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28887_29647,(0),null);
var script_body_29649 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28887_29647,(1),null);
eval(script_body_29649);


var G__29650 = seq__28872_29643;
var G__29651 = chunk__28873_29644;
var G__29652 = count__28874_29645;
var G__29653 = (i__28875_29646 + (1));
seq__28872_29643 = G__29650;
chunk__28873_29644 = G__29651;
count__28874_29645 = G__29652;
i__28875_29646 = G__29653;
continue;
} else {
var temp__5804__auto___29654 = cljs.core.seq(seq__28872_29643);
if(temp__5804__auto___29654){
var seq__28872_29655__$1 = temp__5804__auto___29654;
if(cljs.core.chunked_seq_QMARK_(seq__28872_29655__$1)){
var c__5525__auto___29657 = cljs.core.chunk_first(seq__28872_29655__$1);
var G__29658 = cljs.core.chunk_rest(seq__28872_29655__$1);
var G__29659 = c__5525__auto___29657;
var G__29660 = cljs.core.count(c__5525__auto___29657);
var G__29661 = (0);
seq__28872_29643 = G__29658;
chunk__28873_29644 = G__29659;
count__28874_29645 = G__29660;
i__28875_29646 = G__29661;
continue;
} else {
var vec__28890_29663 = cljs.core.first(seq__28872_29655__$1);
var script_tag_29664 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28890_29663,(0),null);
var script_body_29665 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28890_29663,(1),null);
eval(script_body_29665);


var G__29672 = cljs.core.next(seq__28872_29655__$1);
var G__29673 = null;
var G__29674 = (0);
var G__29675 = (0);
seq__28872_29643 = G__29672;
chunk__28873_29644 = G__29673;
count__28874_29645 = G__29674;
i__28875_29646 = G__29675;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__28894){
var vec__28897 = p__28894;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28897,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28897,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__28907 = arguments.length;
switch (G__28907) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__28923 = cljs.core.seq(style_keys);
var chunk__28924 = null;
var count__28925 = (0);
var i__28926 = (0);
while(true){
if((i__28926 < count__28925)){
var it = chunk__28924.cljs$core$IIndexed$_nth$arity$2(null,i__28926);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__29714 = seq__28923;
var G__29715 = chunk__28924;
var G__29716 = count__28925;
var G__29717 = (i__28926 + (1));
seq__28923 = G__29714;
chunk__28924 = G__29715;
count__28925 = G__29716;
i__28926 = G__29717;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__28923);
if(temp__5804__auto__){
var seq__28923__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__28923__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__28923__$1);
var G__29718 = cljs.core.chunk_rest(seq__28923__$1);
var G__29719 = c__5525__auto__;
var G__29720 = cljs.core.count(c__5525__auto__);
var G__29721 = (0);
seq__28923 = G__29718;
chunk__28924 = G__29719;
count__28925 = G__29720;
i__28926 = G__29721;
continue;
} else {
var it = cljs.core.first(seq__28923__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__29723 = cljs.core.next(seq__28923__$1);
var G__29724 = null;
var G__29725 = (0);
var G__29726 = (0);
seq__28923 = G__29723;
chunk__28924 = G__29724;
count__28925 = G__29725;
i__28926 = G__29726;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5300__auto__,k__5301__auto__){
var self__ = this;
var this__5300__auto____$1 = this;
return this__5300__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5301__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5302__auto__,k28939,else__5303__auto__){
var self__ = this;
var this__5302__auto____$1 = this;
var G__28967 = k28939;
var G__28967__$1 = (((G__28967 instanceof cljs.core.Keyword))?G__28967.fqn:null);
switch (G__28967__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k28939,else__5303__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5320__auto__,f__5321__auto__,init__5322__auto__){
var self__ = this;
var this__5320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5323__auto__,p__28970){
var vec__28971 = p__28970;
var k__5324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28971,(0),null);
var v__5325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28971,(1),null);
return (f__5321__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5321__auto__.cljs$core$IFn$_invoke$arity$3(ret__5323__auto__,k__5324__auto__,v__5325__auto__) : f__5321__auto__.call(null,ret__5323__auto__,k__5324__auto__,v__5325__auto__));
}),init__5322__auto__,this__5320__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5315__auto__,writer__5316__auto__,opts__5317__auto__){
var self__ = this;
var this__5315__auto____$1 = this;
var pr_pair__5318__auto__ = (function (keyval__5319__auto__){
return cljs.core.pr_sequential_writer(writer__5316__auto__,cljs.core.pr_writer,""," ","",opts__5317__auto__,keyval__5319__auto__);
});
return cljs.core.pr_sequential_writer(writer__5316__auto__,pr_pair__5318__auto__,"#shadow.dom.Coordinate{",", ","}",opts__5317__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__28938){
var self__ = this;
var G__28938__$1 = this;
return (new cljs.core.RecordIter((0),G__28938__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5298__auto__){
var self__ = this;
var this__5298__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5295__auto__){
var self__ = this;
var this__5295__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5304__auto__){
var self__ = this;
var this__5304__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5296__auto__){
var self__ = this;
var this__5296__auto____$1 = this;
var h__5111__auto__ = self__.__hash;
if((!((h__5111__auto__ == null)))){
return h__5111__auto__;
} else {
var h__5111__auto____$1 = (function (coll__5297__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__5297__auto__));
})(this__5296__auto____$1);
(self__.__hash = h__5111__auto____$1);

return h__5111__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this28940,other28941){
var self__ = this;
var this28940__$1 = this;
return (((!((other28941 == null)))) && ((((this28940__$1.constructor === other28941.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this28940__$1.x,other28941.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this28940__$1.y,other28941.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this28940__$1.__extmap,other28941.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5310__auto__,k__5311__auto__){
var self__ = this;
var this__5310__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__5311__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5310__auto____$1),self__.__meta),k__5311__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5311__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5307__auto__,k28939){
var self__ = this;
var this__5307__auto____$1 = this;
var G__28992 = k28939;
var G__28992__$1 = (((G__28992 instanceof cljs.core.Keyword))?G__28992.fqn:null);
switch (G__28992__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k28939);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5308__auto__,k__5309__auto__,G__28938){
var self__ = this;
var this__5308__auto____$1 = this;
var pred__28997 = cljs.core.keyword_identical_QMARK_;
var expr__28998 = k__5309__auto__;
if(cljs.core.truth_((pred__28997.cljs$core$IFn$_invoke$arity$2 ? pred__28997.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__28998) : pred__28997.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__28998)))){
return (new shadow.dom.Coordinate(G__28938,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__28997.cljs$core$IFn$_invoke$arity$2 ? pred__28997.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__28998) : pred__28997.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__28998)))){
return (new shadow.dom.Coordinate(self__.x,G__28938,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5309__auto__,G__28938),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5313__auto__){
var self__ = this;
var this__5313__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5299__auto__,G__28938){
var self__ = this;
var this__5299__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__28938,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5305__auto__,entry__5306__auto__){
var self__ = this;
var this__5305__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5306__auto__)){
return this__5305__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5306__auto__,(0)),cljs.core._nth(entry__5306__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5305__auto____$1,entry__5306__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__5346__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__5346__auto__,writer__5347__auto__){
return cljs.core._write(writer__5347__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__28951){
var extmap__5342__auto__ = (function (){var G__29016 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__28951,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__28951)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__29016);
} else {
return G__29016;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__28951),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__28951),null,cljs.core.not_empty(extmap__5342__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5300__auto__,k__5301__auto__){
var self__ = this;
var this__5300__auto____$1 = this;
return this__5300__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5301__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5302__auto__,k29026,else__5303__auto__){
var self__ = this;
var this__5302__auto____$1 = this;
var G__29036 = k29026;
var G__29036__$1 = (((G__29036 instanceof cljs.core.Keyword))?G__29036.fqn:null);
switch (G__29036__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k29026,else__5303__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5320__auto__,f__5321__auto__,init__5322__auto__){
var self__ = this;
var this__5320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5323__auto__,p__29042){
var vec__29044 = p__29042;
var k__5324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29044,(0),null);
var v__5325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29044,(1),null);
return (f__5321__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5321__auto__.cljs$core$IFn$_invoke$arity$3(ret__5323__auto__,k__5324__auto__,v__5325__auto__) : f__5321__auto__.call(null,ret__5323__auto__,k__5324__auto__,v__5325__auto__));
}),init__5322__auto__,this__5320__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5315__auto__,writer__5316__auto__,opts__5317__auto__){
var self__ = this;
var this__5315__auto____$1 = this;
var pr_pair__5318__auto__ = (function (keyval__5319__auto__){
return cljs.core.pr_sequential_writer(writer__5316__auto__,cljs.core.pr_writer,""," ","",opts__5317__auto__,keyval__5319__auto__);
});
return cljs.core.pr_sequential_writer(writer__5316__auto__,pr_pair__5318__auto__,"#shadow.dom.Size{",", ","}",opts__5317__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__29025){
var self__ = this;
var G__29025__$1 = this;
return (new cljs.core.RecordIter((0),G__29025__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5298__auto__){
var self__ = this;
var this__5298__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5295__auto__){
var self__ = this;
var this__5295__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5304__auto__){
var self__ = this;
var this__5304__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5296__auto__){
var self__ = this;
var this__5296__auto____$1 = this;
var h__5111__auto__ = self__.__hash;
if((!((h__5111__auto__ == null)))){
return h__5111__auto__;
} else {
var h__5111__auto____$1 = (function (coll__5297__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__5297__auto__));
})(this__5296__auto____$1);
(self__.__hash = h__5111__auto____$1);

return h__5111__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this29027,other29028){
var self__ = this;
var this29027__$1 = this;
return (((!((other29028 == null)))) && ((((this29027__$1.constructor === other29028.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this29027__$1.w,other29028.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this29027__$1.h,other29028.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this29027__$1.__extmap,other29028.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5310__auto__,k__5311__auto__){
var self__ = this;
var this__5310__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__5311__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5310__auto____$1),self__.__meta),k__5311__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5311__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5307__auto__,k29026){
var self__ = this;
var this__5307__auto____$1 = this;
var G__29069 = k29026;
var G__29069__$1 = (((G__29069 instanceof cljs.core.Keyword))?G__29069.fqn:null);
switch (G__29069__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k29026);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5308__auto__,k__5309__auto__,G__29025){
var self__ = this;
var this__5308__auto____$1 = this;
var pred__29071 = cljs.core.keyword_identical_QMARK_;
var expr__29072 = k__5309__auto__;
if(cljs.core.truth_((pred__29071.cljs$core$IFn$_invoke$arity$2 ? pred__29071.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__29072) : pred__29071.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__29072)))){
return (new shadow.dom.Size(G__29025,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__29071.cljs$core$IFn$_invoke$arity$2 ? pred__29071.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__29072) : pred__29071.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__29072)))){
return (new shadow.dom.Size(self__.w,G__29025,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5309__auto__,G__29025),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5313__auto__){
var self__ = this;
var this__5313__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5299__auto__,G__29025){
var self__ = this;
var this__5299__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__29025,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5305__auto__,entry__5306__auto__){
var self__ = this;
var this__5305__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5306__auto__)){
return this__5305__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5306__auto__,(0)),cljs.core._nth(entry__5306__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5305__auto____$1,entry__5306__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__5346__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__5346__auto__,writer__5347__auto__){
return cljs.core._write(writer__5347__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__29029){
var extmap__5342__auto__ = (function (){var G__29082 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__29029,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__29029)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__29082);
} else {
return G__29082;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__29029),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__29029),null,cljs.core.not_empty(extmap__5342__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__5590__auto__ = opts;
var l__5591__auto__ = a__5590__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__5591__auto__)){
var G__29914 = (i + (1));
var G__29916 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__29914;
ret = G__29916;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__29114){
var vec__29115 = p__29114;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29115,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29115,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__29119 = arguments.length;
switch (G__29119) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5802__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5802__auto__)){
var child = temp__5802__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__29937 = ps;
var G__29938 = (i + (1));
el__$1 = G__29937;
i = G__29938;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__29148 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29148,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29148,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29148,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__29153_29949 = cljs.core.seq(props);
var chunk__29154_29950 = null;
var count__29156_29951 = (0);
var i__29158_29952 = (0);
while(true){
if((i__29158_29952 < count__29156_29951)){
var vec__29170_29953 = chunk__29154_29950.cljs$core$IIndexed$_nth$arity$2(null,i__29158_29952);
var k_29954 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29170_29953,(0),null);
var v_29955 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29170_29953,(1),null);
el.setAttributeNS((function (){var temp__5804__auto__ = cljs.core.namespace(k_29954);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_29954),v_29955);


var G__29957 = seq__29153_29949;
var G__29958 = chunk__29154_29950;
var G__29959 = count__29156_29951;
var G__29960 = (i__29158_29952 + (1));
seq__29153_29949 = G__29957;
chunk__29154_29950 = G__29958;
count__29156_29951 = G__29959;
i__29158_29952 = G__29960;
continue;
} else {
var temp__5804__auto___29963 = cljs.core.seq(seq__29153_29949);
if(temp__5804__auto___29963){
var seq__29153_29967__$1 = temp__5804__auto___29963;
if(cljs.core.chunked_seq_QMARK_(seq__29153_29967__$1)){
var c__5525__auto___29968 = cljs.core.chunk_first(seq__29153_29967__$1);
var G__29969 = cljs.core.chunk_rest(seq__29153_29967__$1);
var G__29970 = c__5525__auto___29968;
var G__29971 = cljs.core.count(c__5525__auto___29968);
var G__29972 = (0);
seq__29153_29949 = G__29969;
chunk__29154_29950 = G__29970;
count__29156_29951 = G__29971;
i__29158_29952 = G__29972;
continue;
} else {
var vec__29178_29974 = cljs.core.first(seq__29153_29967__$1);
var k_29975 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29178_29974,(0),null);
var v_29977 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29178_29974,(1),null);
el.setAttributeNS((function (){var temp__5804__auto____$1 = cljs.core.namespace(k_29975);
if(cljs.core.truth_(temp__5804__auto____$1)){
var ns = temp__5804__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_29975),v_29977);


var G__29990 = cljs.core.next(seq__29153_29967__$1);
var G__29991 = null;
var G__29992 = (0);
var G__29993 = (0);
seq__29153_29949 = G__29990;
chunk__29154_29950 = G__29991;
count__29156_29951 = G__29992;
i__29158_29952 = G__29993;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__29195 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29195,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29195,(1),null);
var seq__29199_29998 = cljs.core.seq(node_children);
var chunk__29201_29999 = null;
var count__29202_30000 = (0);
var i__29203_30001 = (0);
while(true){
if((i__29203_30001 < count__29202_30000)){
var child_struct_30002 = chunk__29201_29999.cljs$core$IIndexed$_nth$arity$2(null,i__29203_30001);
if((!((child_struct_30002 == null)))){
if(typeof child_struct_30002 === 'string'){
var text_30003 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_30003),child_struct_30002].join(''));
} else {
var children_30004 = shadow.dom.svg_node(child_struct_30002);
if(cljs.core.seq_QMARK_(children_30004)){
var seq__29243_30007 = cljs.core.seq(children_30004);
var chunk__29245_30008 = null;
var count__29246_30009 = (0);
var i__29247_30010 = (0);
while(true){
if((i__29247_30010 < count__29246_30009)){
var child_30014 = chunk__29245_30008.cljs$core$IIndexed$_nth$arity$2(null,i__29247_30010);
if(cljs.core.truth_(child_30014)){
node.appendChild(child_30014);


var G__30015 = seq__29243_30007;
var G__30016 = chunk__29245_30008;
var G__30017 = count__29246_30009;
var G__30018 = (i__29247_30010 + (1));
seq__29243_30007 = G__30015;
chunk__29245_30008 = G__30016;
count__29246_30009 = G__30017;
i__29247_30010 = G__30018;
continue;
} else {
var G__30019 = seq__29243_30007;
var G__30020 = chunk__29245_30008;
var G__30021 = count__29246_30009;
var G__30022 = (i__29247_30010 + (1));
seq__29243_30007 = G__30019;
chunk__29245_30008 = G__30020;
count__29246_30009 = G__30021;
i__29247_30010 = G__30022;
continue;
}
} else {
var temp__5804__auto___30023 = cljs.core.seq(seq__29243_30007);
if(temp__5804__auto___30023){
var seq__29243_30024__$1 = temp__5804__auto___30023;
if(cljs.core.chunked_seq_QMARK_(seq__29243_30024__$1)){
var c__5525__auto___30025 = cljs.core.chunk_first(seq__29243_30024__$1);
var G__30029 = cljs.core.chunk_rest(seq__29243_30024__$1);
var G__30030 = c__5525__auto___30025;
var G__30031 = cljs.core.count(c__5525__auto___30025);
var G__30032 = (0);
seq__29243_30007 = G__30029;
chunk__29245_30008 = G__30030;
count__29246_30009 = G__30031;
i__29247_30010 = G__30032;
continue;
} else {
var child_30034 = cljs.core.first(seq__29243_30024__$1);
if(cljs.core.truth_(child_30034)){
node.appendChild(child_30034);


var G__30037 = cljs.core.next(seq__29243_30024__$1);
var G__30038 = null;
var G__30039 = (0);
var G__30040 = (0);
seq__29243_30007 = G__30037;
chunk__29245_30008 = G__30038;
count__29246_30009 = G__30039;
i__29247_30010 = G__30040;
continue;
} else {
var G__30043 = cljs.core.next(seq__29243_30024__$1);
var G__30044 = null;
var G__30045 = (0);
var G__30046 = (0);
seq__29243_30007 = G__30043;
chunk__29245_30008 = G__30044;
count__29246_30009 = G__30045;
i__29247_30010 = G__30046;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_30004);
}
}


var G__30047 = seq__29199_29998;
var G__30048 = chunk__29201_29999;
var G__30049 = count__29202_30000;
var G__30050 = (i__29203_30001 + (1));
seq__29199_29998 = G__30047;
chunk__29201_29999 = G__30048;
count__29202_30000 = G__30049;
i__29203_30001 = G__30050;
continue;
} else {
var G__30051 = seq__29199_29998;
var G__30052 = chunk__29201_29999;
var G__30053 = count__29202_30000;
var G__30054 = (i__29203_30001 + (1));
seq__29199_29998 = G__30051;
chunk__29201_29999 = G__30052;
count__29202_30000 = G__30053;
i__29203_30001 = G__30054;
continue;
}
} else {
var temp__5804__auto___30056 = cljs.core.seq(seq__29199_29998);
if(temp__5804__auto___30056){
var seq__29199_30057__$1 = temp__5804__auto___30056;
if(cljs.core.chunked_seq_QMARK_(seq__29199_30057__$1)){
var c__5525__auto___30058 = cljs.core.chunk_first(seq__29199_30057__$1);
var G__30059 = cljs.core.chunk_rest(seq__29199_30057__$1);
var G__30060 = c__5525__auto___30058;
var G__30061 = cljs.core.count(c__5525__auto___30058);
var G__30062 = (0);
seq__29199_29998 = G__30059;
chunk__29201_29999 = G__30060;
count__29202_30000 = G__30061;
i__29203_30001 = G__30062;
continue;
} else {
var child_struct_30063 = cljs.core.first(seq__29199_30057__$1);
if((!((child_struct_30063 == null)))){
if(typeof child_struct_30063 === 'string'){
var text_30064 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_30064),child_struct_30063].join(''));
} else {
var children_30066 = shadow.dom.svg_node(child_struct_30063);
if(cljs.core.seq_QMARK_(children_30066)){
var seq__29258_30067 = cljs.core.seq(children_30066);
var chunk__29260_30068 = null;
var count__29261_30069 = (0);
var i__29262_30070 = (0);
while(true){
if((i__29262_30070 < count__29261_30069)){
var child_30071 = chunk__29260_30068.cljs$core$IIndexed$_nth$arity$2(null,i__29262_30070);
if(cljs.core.truth_(child_30071)){
node.appendChild(child_30071);


var G__30077 = seq__29258_30067;
var G__30078 = chunk__29260_30068;
var G__30079 = count__29261_30069;
var G__30080 = (i__29262_30070 + (1));
seq__29258_30067 = G__30077;
chunk__29260_30068 = G__30078;
count__29261_30069 = G__30079;
i__29262_30070 = G__30080;
continue;
} else {
var G__30081 = seq__29258_30067;
var G__30082 = chunk__29260_30068;
var G__30083 = count__29261_30069;
var G__30084 = (i__29262_30070 + (1));
seq__29258_30067 = G__30081;
chunk__29260_30068 = G__30082;
count__29261_30069 = G__30083;
i__29262_30070 = G__30084;
continue;
}
} else {
var temp__5804__auto___30086__$1 = cljs.core.seq(seq__29258_30067);
if(temp__5804__auto___30086__$1){
var seq__29258_30087__$1 = temp__5804__auto___30086__$1;
if(cljs.core.chunked_seq_QMARK_(seq__29258_30087__$1)){
var c__5525__auto___30088 = cljs.core.chunk_first(seq__29258_30087__$1);
var G__30090 = cljs.core.chunk_rest(seq__29258_30087__$1);
var G__30091 = c__5525__auto___30088;
var G__30092 = cljs.core.count(c__5525__auto___30088);
var G__30093 = (0);
seq__29258_30067 = G__30090;
chunk__29260_30068 = G__30091;
count__29261_30069 = G__30092;
i__29262_30070 = G__30093;
continue;
} else {
var child_30094 = cljs.core.first(seq__29258_30087__$1);
if(cljs.core.truth_(child_30094)){
node.appendChild(child_30094);


var G__30096 = cljs.core.next(seq__29258_30087__$1);
var G__30097 = null;
var G__30098 = (0);
var G__30099 = (0);
seq__29258_30067 = G__30096;
chunk__29260_30068 = G__30097;
count__29261_30069 = G__30098;
i__29262_30070 = G__30099;
continue;
} else {
var G__30100 = cljs.core.next(seq__29258_30087__$1);
var G__30101 = null;
var G__30102 = (0);
var G__30103 = (0);
seq__29258_30067 = G__30100;
chunk__29260_30068 = G__30101;
count__29261_30069 = G__30102;
i__29262_30070 = G__30103;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_30066);
}
}


var G__30104 = cljs.core.next(seq__29199_30057__$1);
var G__30105 = null;
var G__30106 = (0);
var G__30107 = (0);
seq__29199_29998 = G__30104;
chunk__29201_29999 = G__30105;
count__29202_30000 = G__30106;
i__29203_30001 = G__30107;
continue;
} else {
var G__30108 = cljs.core.next(seq__29199_30057__$1);
var G__30109 = null;
var G__30110 = (0);
var G__30111 = (0);
seq__29199_29998 = G__30108;
chunk__29201_29999 = G__30109;
count__29202_30000 = G__30110;
i__29203_30001 = G__30111;
continue;
}
}
} else {
}
}
break;
}

return node;
});
(shadow.dom.SVGElement["string"] = true);

(shadow.dom._to_svg["string"] = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

(shadow.dom.SVGElement["null"] = true);

(shadow.dom._to_svg["null"] = (function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__5732__auto__ = [];
var len__5726__auto___30198 = arguments.length;
var i__5727__auto___30199 = (0);
while(true){
if((i__5727__auto___30199 < len__5726__auto___30198)){
args__5732__auto__.push((arguments[i__5727__auto___30199]));

var G__30201 = (i__5727__auto___30199 + (1));
i__5727__auto___30199 = G__30201;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq29294){
var G__29295 = cljs.core.first(seq29294);
var seq29294__$1 = cljs.core.next(seq29294);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__29295,seq29294__$1);
}));


//# sourceMappingURL=shadow.dom.js.map
