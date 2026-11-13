goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = true;

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_29431 = (function (this$){
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
return shadow$dom$IElement$_to_dom$dyn_29431(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_29437 = (function (this$){
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
return shadow$dom$SVGElement$_to_svg$dyn_29437(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__28221 = coll;
var G__28222 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__28221,G__28222) : shadow.dom.lazy_native_coll_seq.call(null,G__28221,G__28222));
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
var G__28240 = arguments.length;
switch (G__28240) {
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
var G__28244 = arguments.length;
switch (G__28244) {
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
var G__28249 = arguments.length;
switch (G__28249) {
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
var G__28258 = arguments.length;
switch (G__28258) {
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
var G__28267 = arguments.length;
switch (G__28267) {
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
var G__28275 = arguments.length;
switch (G__28275) {
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
}catch (e28283){if((e28283 instanceof Object)){
var e = e28283;
return console.log("didnt support attachEvent",el,e);
} else {
throw e28283;

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
var seq__28287 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__28288 = null;
var count__28289 = (0);
var i__28290 = (0);
while(true){
if((i__28290 < count__28289)){
var el = chunk__28288.cljs$core$IIndexed$_nth$arity$2(null,i__28290);
var handler_29565__$1 = ((function (seq__28287,chunk__28288,count__28289,i__28290,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__28287,chunk__28288,count__28289,i__28290,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_29565__$1);


var G__29570 = seq__28287;
var G__29571 = chunk__28288;
var G__29572 = count__28289;
var G__29573 = (i__28290 + (1));
seq__28287 = G__29570;
chunk__28288 = G__29571;
count__28289 = G__29572;
i__28290 = G__29573;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__28287);
if(temp__5804__auto__){
var seq__28287__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__28287__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__28287__$1);
var G__29577 = cljs.core.chunk_rest(seq__28287__$1);
var G__29578 = c__5525__auto__;
var G__29579 = cljs.core.count(c__5525__auto__);
var G__29580 = (0);
seq__28287 = G__29577;
chunk__28288 = G__29578;
count__28289 = G__29579;
i__28290 = G__29580;
continue;
} else {
var el = cljs.core.first(seq__28287__$1);
var handler_29582__$1 = ((function (seq__28287,chunk__28288,count__28289,i__28290,el,seq__28287__$1,temp__5804__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__28287,chunk__28288,count__28289,i__28290,el,seq__28287__$1,temp__5804__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_29582__$1);


var G__29583 = cljs.core.next(seq__28287__$1);
var G__29584 = null;
var G__29585 = (0);
var G__29586 = (0);
seq__28287 = G__29583;
chunk__28288 = G__29584;
count__28289 = G__29585;
i__28290 = G__29586;
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
var G__28306 = arguments.length;
switch (G__28306) {
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
var seq__28311 = cljs.core.seq(events);
var chunk__28312 = null;
var count__28313 = (0);
var i__28314 = (0);
while(true){
if((i__28314 < count__28313)){
var vec__28335 = chunk__28312.cljs$core$IIndexed$_nth$arity$2(null,i__28314);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28335,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28335,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__29614 = seq__28311;
var G__29615 = chunk__28312;
var G__29616 = count__28313;
var G__29617 = (i__28314 + (1));
seq__28311 = G__29614;
chunk__28312 = G__29615;
count__28313 = G__29616;
i__28314 = G__29617;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__28311);
if(temp__5804__auto__){
var seq__28311__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__28311__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__28311__$1);
var G__29619 = cljs.core.chunk_rest(seq__28311__$1);
var G__29620 = c__5525__auto__;
var G__29621 = cljs.core.count(c__5525__auto__);
var G__29622 = (0);
seq__28311 = G__29619;
chunk__28312 = G__29620;
count__28313 = G__29621;
i__28314 = G__29622;
continue;
} else {
var vec__28344 = cljs.core.first(seq__28311__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28344,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28344,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__29626 = cljs.core.next(seq__28311__$1);
var G__29627 = null;
var G__29628 = (0);
var G__29629 = (0);
seq__28311 = G__29626;
chunk__28312 = G__29627;
count__28313 = G__29628;
i__28314 = G__29629;
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
var seq__28352 = cljs.core.seq(styles);
var chunk__28353 = null;
var count__28354 = (0);
var i__28355 = (0);
while(true){
if((i__28355 < count__28354)){
var vec__28378 = chunk__28353.cljs$core$IIndexed$_nth$arity$2(null,i__28355);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28378,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28378,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__29632 = seq__28352;
var G__29633 = chunk__28353;
var G__29634 = count__28354;
var G__29635 = (i__28355 + (1));
seq__28352 = G__29632;
chunk__28353 = G__29633;
count__28354 = G__29634;
i__28355 = G__29635;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__28352);
if(temp__5804__auto__){
var seq__28352__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__28352__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__28352__$1);
var G__29638 = cljs.core.chunk_rest(seq__28352__$1);
var G__29639 = c__5525__auto__;
var G__29640 = cljs.core.count(c__5525__auto__);
var G__29641 = (0);
seq__28352 = G__29638;
chunk__28353 = G__29639;
count__28354 = G__29640;
i__28355 = G__29641;
continue;
} else {
var vec__28381 = cljs.core.first(seq__28352__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28381,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28381,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__29648 = cljs.core.next(seq__28352__$1);
var G__29649 = null;
var G__29650 = (0);
var G__29651 = (0);
seq__28352 = G__29648;
chunk__28353 = G__29649;
count__28354 = G__29650;
i__28355 = G__29651;
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
var G__28384_29656 = key;
var G__28384_29657__$1 = (((G__28384_29656 instanceof cljs.core.Keyword))?G__28384_29656.fqn:null);
switch (G__28384_29657__$1) {
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
var ks_29661 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5002__auto__ = goog.string.startsWith(ks_29661,"data-");
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return goog.string.startsWith(ks_29661,"aria-");
}
})())){
el.setAttribute(ks_29661,value);
} else {
(el[ks_29661] = value);
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
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__28434){
var map__28435 = p__28434;
var map__28435__$1 = cljs.core.__destructure_map(map__28435);
var props = map__28435__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28435__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__28438 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28438,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28438,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28438,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__28451 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__28451,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__28451;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__28456 = arguments.length;
switch (G__28456) {
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

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__28514){
var vec__28517 = p__28514;
var seq__28518 = cljs.core.seq(vec__28517);
var first__28519 = cljs.core.first(seq__28518);
var seq__28518__$1 = cljs.core.next(seq__28518);
var nn = first__28519;
var first__28519__$1 = cljs.core.first(seq__28518__$1);
var seq__28518__$2 = cljs.core.next(seq__28518__$1);
var np = first__28519__$1;
var nc = seq__28518__$2;
var node = vec__28517;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__28522 = nn;
var G__28523 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__28522,G__28523) : create_fn.call(null,G__28522,G__28523));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__28525 = nn;
var G__28526 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__28525,G__28526) : create_fn.call(null,G__28525,G__28526));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__28547 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28547,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28547,(1),null);
var seq__28553_29716 = cljs.core.seq(node_children);
var chunk__28554_29717 = null;
var count__28555_29718 = (0);
var i__28556_29719 = (0);
while(true){
if((i__28556_29719 < count__28555_29718)){
var child_struct_29720 = chunk__28554_29717.cljs$core$IIndexed$_nth$arity$2(null,i__28556_29719);
var children_29722 = shadow.dom.dom_node(child_struct_29720);
if(cljs.core.seq_QMARK_(children_29722)){
var seq__28670_29723 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_29722));
var chunk__28672_29724 = null;
var count__28673_29725 = (0);
var i__28674_29726 = (0);
while(true){
if((i__28674_29726 < count__28673_29725)){
var child_29729 = chunk__28672_29724.cljs$core$IIndexed$_nth$arity$2(null,i__28674_29726);
if(cljs.core.truth_(child_29729)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_29729);


var G__29730 = seq__28670_29723;
var G__29731 = chunk__28672_29724;
var G__29732 = count__28673_29725;
var G__29733 = (i__28674_29726 + (1));
seq__28670_29723 = G__29730;
chunk__28672_29724 = G__29731;
count__28673_29725 = G__29732;
i__28674_29726 = G__29733;
continue;
} else {
var G__29735 = seq__28670_29723;
var G__29736 = chunk__28672_29724;
var G__29737 = count__28673_29725;
var G__29738 = (i__28674_29726 + (1));
seq__28670_29723 = G__29735;
chunk__28672_29724 = G__29736;
count__28673_29725 = G__29737;
i__28674_29726 = G__29738;
continue;
}
} else {
var temp__5804__auto___29739 = cljs.core.seq(seq__28670_29723);
if(temp__5804__auto___29739){
var seq__28670_29740__$1 = temp__5804__auto___29739;
if(cljs.core.chunked_seq_QMARK_(seq__28670_29740__$1)){
var c__5525__auto___29754 = cljs.core.chunk_first(seq__28670_29740__$1);
var G__29755 = cljs.core.chunk_rest(seq__28670_29740__$1);
var G__29756 = c__5525__auto___29754;
var G__29757 = cljs.core.count(c__5525__auto___29754);
var G__29758 = (0);
seq__28670_29723 = G__29755;
chunk__28672_29724 = G__29756;
count__28673_29725 = G__29757;
i__28674_29726 = G__29758;
continue;
} else {
var child_29759 = cljs.core.first(seq__28670_29740__$1);
if(cljs.core.truth_(child_29759)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_29759);


var G__29760 = cljs.core.next(seq__28670_29740__$1);
var G__29761 = null;
var G__29762 = (0);
var G__29763 = (0);
seq__28670_29723 = G__29760;
chunk__28672_29724 = G__29761;
count__28673_29725 = G__29762;
i__28674_29726 = G__29763;
continue;
} else {
var G__29765 = cljs.core.next(seq__28670_29740__$1);
var G__29766 = null;
var G__29767 = (0);
var G__29768 = (0);
seq__28670_29723 = G__29765;
chunk__28672_29724 = G__29766;
count__28673_29725 = G__29767;
i__28674_29726 = G__29768;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_29722);
}


var G__29769 = seq__28553_29716;
var G__29770 = chunk__28554_29717;
var G__29771 = count__28555_29718;
var G__29772 = (i__28556_29719 + (1));
seq__28553_29716 = G__29769;
chunk__28554_29717 = G__29770;
count__28555_29718 = G__29771;
i__28556_29719 = G__29772;
continue;
} else {
var temp__5804__auto___29773 = cljs.core.seq(seq__28553_29716);
if(temp__5804__auto___29773){
var seq__28553_29774__$1 = temp__5804__auto___29773;
if(cljs.core.chunked_seq_QMARK_(seq__28553_29774__$1)){
var c__5525__auto___29775 = cljs.core.chunk_first(seq__28553_29774__$1);
var G__29776 = cljs.core.chunk_rest(seq__28553_29774__$1);
var G__29777 = c__5525__auto___29775;
var G__29778 = cljs.core.count(c__5525__auto___29775);
var G__29779 = (0);
seq__28553_29716 = G__29776;
chunk__28554_29717 = G__29777;
count__28555_29718 = G__29778;
i__28556_29719 = G__29779;
continue;
} else {
var child_struct_29780 = cljs.core.first(seq__28553_29774__$1);
var children_29782 = shadow.dom.dom_node(child_struct_29780);
if(cljs.core.seq_QMARK_(children_29782)){
var seq__28693_29783 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_29782));
var chunk__28695_29784 = null;
var count__28696_29785 = (0);
var i__28697_29786 = (0);
while(true){
if((i__28697_29786 < count__28696_29785)){
var child_29788 = chunk__28695_29784.cljs$core$IIndexed$_nth$arity$2(null,i__28697_29786);
if(cljs.core.truth_(child_29788)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_29788);


var G__29789 = seq__28693_29783;
var G__29790 = chunk__28695_29784;
var G__29791 = count__28696_29785;
var G__29792 = (i__28697_29786 + (1));
seq__28693_29783 = G__29789;
chunk__28695_29784 = G__29790;
count__28696_29785 = G__29791;
i__28697_29786 = G__29792;
continue;
} else {
var G__29794 = seq__28693_29783;
var G__29795 = chunk__28695_29784;
var G__29796 = count__28696_29785;
var G__29797 = (i__28697_29786 + (1));
seq__28693_29783 = G__29794;
chunk__28695_29784 = G__29795;
count__28696_29785 = G__29796;
i__28697_29786 = G__29797;
continue;
}
} else {
var temp__5804__auto___29798__$1 = cljs.core.seq(seq__28693_29783);
if(temp__5804__auto___29798__$1){
var seq__28693_29799__$1 = temp__5804__auto___29798__$1;
if(cljs.core.chunked_seq_QMARK_(seq__28693_29799__$1)){
var c__5525__auto___29800 = cljs.core.chunk_first(seq__28693_29799__$1);
var G__29801 = cljs.core.chunk_rest(seq__28693_29799__$1);
var G__29802 = c__5525__auto___29800;
var G__29803 = cljs.core.count(c__5525__auto___29800);
var G__29804 = (0);
seq__28693_29783 = G__29801;
chunk__28695_29784 = G__29802;
count__28696_29785 = G__29803;
i__28697_29786 = G__29804;
continue;
} else {
var child_29805 = cljs.core.first(seq__28693_29799__$1);
if(cljs.core.truth_(child_29805)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_29805);


var G__29807 = cljs.core.next(seq__28693_29799__$1);
var G__29808 = null;
var G__29809 = (0);
var G__29810 = (0);
seq__28693_29783 = G__29807;
chunk__28695_29784 = G__29808;
count__28696_29785 = G__29809;
i__28697_29786 = G__29810;
continue;
} else {
var G__29811 = cljs.core.next(seq__28693_29799__$1);
var G__29812 = null;
var G__29813 = (0);
var G__29814 = (0);
seq__28693_29783 = G__29811;
chunk__28695_29784 = G__29812;
count__28696_29785 = G__29813;
i__28697_29786 = G__29814;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_29782);
}


var G__29815 = cljs.core.next(seq__28553_29774__$1);
var G__29816 = null;
var G__29817 = (0);
var G__29818 = (0);
seq__28553_29716 = G__29815;
chunk__28554_29717 = G__29816;
count__28555_29718 = G__29817;
i__28556_29719 = G__29818;
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
var seq__28743 = cljs.core.seq(node);
var chunk__28744 = null;
var count__28745 = (0);
var i__28746 = (0);
while(true){
if((i__28746 < count__28745)){
var n = chunk__28744.cljs$core$IIndexed$_nth$arity$2(null,i__28746);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__29821 = seq__28743;
var G__29822 = chunk__28744;
var G__29823 = count__28745;
var G__29824 = (i__28746 + (1));
seq__28743 = G__29821;
chunk__28744 = G__29822;
count__28745 = G__29823;
i__28746 = G__29824;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__28743);
if(temp__5804__auto__){
var seq__28743__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__28743__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__28743__$1);
var G__29828 = cljs.core.chunk_rest(seq__28743__$1);
var G__29829 = c__5525__auto__;
var G__29830 = cljs.core.count(c__5525__auto__);
var G__29831 = (0);
seq__28743 = G__29828;
chunk__28744 = G__29829;
count__28745 = G__29830;
i__28746 = G__29831;
continue;
} else {
var n = cljs.core.first(seq__28743__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__29836 = cljs.core.next(seq__28743__$1);
var G__29837 = null;
var G__29838 = (0);
var G__29839 = (0);
seq__28743 = G__29836;
chunk__28744 = G__29837;
count__28745 = G__29838;
i__28746 = G__29839;
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
var G__28754 = arguments.length;
switch (G__28754) {
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
var G__28759 = arguments.length;
switch (G__28759) {
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
var G__28775 = arguments.length;
switch (G__28775) {
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
var len__5726__auto___29889 = arguments.length;
var i__5727__auto___29890 = (0);
while(true){
if((i__5727__auto___29890 < len__5726__auto___29889)){
args__5732__auto__.push((arguments[i__5727__auto___29890]));

var G__29891 = (i__5727__auto___29890 + (1));
i__5727__auto___29890 = G__29891;
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
var seq__28795_29896 = cljs.core.seq(nodes);
var chunk__28796_29897 = null;
var count__28797_29898 = (0);
var i__28798_29899 = (0);
while(true){
if((i__28798_29899 < count__28797_29898)){
var node_29900 = chunk__28796_29897.cljs$core$IIndexed$_nth$arity$2(null,i__28798_29899);
fragment.appendChild(shadow.dom._to_dom(node_29900));


var G__29904 = seq__28795_29896;
var G__29905 = chunk__28796_29897;
var G__29906 = count__28797_29898;
var G__29907 = (i__28798_29899 + (1));
seq__28795_29896 = G__29904;
chunk__28796_29897 = G__29905;
count__28797_29898 = G__29906;
i__28798_29899 = G__29907;
continue;
} else {
var temp__5804__auto___29912 = cljs.core.seq(seq__28795_29896);
if(temp__5804__auto___29912){
var seq__28795_29913__$1 = temp__5804__auto___29912;
if(cljs.core.chunked_seq_QMARK_(seq__28795_29913__$1)){
var c__5525__auto___29914 = cljs.core.chunk_first(seq__28795_29913__$1);
var G__29915 = cljs.core.chunk_rest(seq__28795_29913__$1);
var G__29917 = c__5525__auto___29914;
var G__29918 = cljs.core.count(c__5525__auto___29914);
var G__29919 = (0);
seq__28795_29896 = G__29915;
chunk__28796_29897 = G__29917;
count__28797_29898 = G__29918;
i__28798_29899 = G__29919;
continue;
} else {
var node_29920 = cljs.core.first(seq__28795_29913__$1);
fragment.appendChild(shadow.dom._to_dom(node_29920));


var G__29922 = cljs.core.next(seq__28795_29913__$1);
var G__29923 = null;
var G__29924 = (0);
var G__29925 = (0);
seq__28795_29896 = G__29922;
chunk__28796_29897 = G__29923;
count__28797_29898 = G__29924;
i__28798_29899 = G__29925;
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
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq28787){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq28787));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__28825_29986 = cljs.core.seq(scripts);
var chunk__28826_29987 = null;
var count__28827_29988 = (0);
var i__28828_29989 = (0);
while(true){
if((i__28828_29989 < count__28827_29988)){
var vec__28839_29993 = chunk__28826_29987.cljs$core$IIndexed$_nth$arity$2(null,i__28828_29989);
var script_tag_29994 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28839_29993,(0),null);
var script_body_29995 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28839_29993,(1),null);
eval(script_body_29995);


var G__30027 = seq__28825_29986;
var G__30028 = chunk__28826_29987;
var G__30029 = count__28827_29988;
var G__30030 = (i__28828_29989 + (1));
seq__28825_29986 = G__30027;
chunk__28826_29987 = G__30028;
count__28827_29988 = G__30029;
i__28828_29989 = G__30030;
continue;
} else {
var temp__5804__auto___30031 = cljs.core.seq(seq__28825_29986);
if(temp__5804__auto___30031){
var seq__28825_30033__$1 = temp__5804__auto___30031;
if(cljs.core.chunked_seq_QMARK_(seq__28825_30033__$1)){
var c__5525__auto___30034 = cljs.core.chunk_first(seq__28825_30033__$1);
var G__30036 = cljs.core.chunk_rest(seq__28825_30033__$1);
var G__30037 = c__5525__auto___30034;
var G__30038 = cljs.core.count(c__5525__auto___30034);
var G__30039 = (0);
seq__28825_29986 = G__30036;
chunk__28826_29987 = G__30037;
count__28827_29988 = G__30038;
i__28828_29989 = G__30039;
continue;
} else {
var vec__28847_30042 = cljs.core.first(seq__28825_30033__$1);
var script_tag_30043 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28847_30042,(0),null);
var script_body_30044 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28847_30042,(1),null);
eval(script_body_30044);


var G__30049 = cljs.core.next(seq__28825_30033__$1);
var G__30050 = null;
var G__30051 = (0);
var G__30052 = (0);
seq__28825_29986 = G__30049;
chunk__28826_29987 = G__30050;
count__28827_29988 = G__30051;
i__28828_29989 = G__30052;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__28857){
var vec__28858 = p__28857;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28858,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28858,(1),null);
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
var G__28872 = arguments.length;
switch (G__28872) {
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
var seq__28903 = cljs.core.seq(style_keys);
var chunk__28904 = null;
var count__28905 = (0);
var i__28906 = (0);
while(true){
if((i__28906 < count__28905)){
var it = chunk__28904.cljs$core$IIndexed$_nth$arity$2(null,i__28906);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__30104 = seq__28903;
var G__30105 = chunk__28904;
var G__30106 = count__28905;
var G__30107 = (i__28906 + (1));
seq__28903 = G__30104;
chunk__28904 = G__30105;
count__28905 = G__30106;
i__28906 = G__30107;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__28903);
if(temp__5804__auto__){
var seq__28903__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__28903__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__28903__$1);
var G__30135 = cljs.core.chunk_rest(seq__28903__$1);
var G__30136 = c__5525__auto__;
var G__30137 = cljs.core.count(c__5525__auto__);
var G__30138 = (0);
seq__28903 = G__30135;
chunk__28904 = G__30136;
count__28905 = G__30137;
i__28906 = G__30138;
continue;
} else {
var it = cljs.core.first(seq__28903__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__30139 = cljs.core.next(seq__28903__$1);
var G__30140 = null;
var G__30141 = (0);
var G__30142 = (0);
seq__28903 = G__30139;
chunk__28904 = G__30140;
count__28905 = G__30141;
i__28906 = G__30142;
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

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5302__auto__,k28923,else__5303__auto__){
var self__ = this;
var this__5302__auto____$1 = this;
var G__28939 = k28923;
var G__28939__$1 = (((G__28939 instanceof cljs.core.Keyword))?G__28939.fqn:null);
switch (G__28939__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k28923,else__5303__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5320__auto__,f__5321__auto__,init__5322__auto__){
var self__ = this;
var this__5320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5323__auto__,p__28945){
var vec__28946 = p__28945;
var k__5324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28946,(0),null);
var v__5325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28946,(1),null);
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

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__28922){
var self__ = this;
var G__28922__$1 = this;
return (new cljs.core.RecordIter((0),G__28922__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this28924,other28925){
var self__ = this;
var this28924__$1 = this;
return (((!((other28925 == null)))) && ((((this28924__$1.constructor === other28925.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this28924__$1.x,other28925.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this28924__$1.y,other28925.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this28924__$1.__extmap,other28925.__extmap)))))))));
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

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5307__auto__,k28923){
var self__ = this;
var this__5307__auto____$1 = this;
var G__29002 = k28923;
var G__29002__$1 = (((G__29002 instanceof cljs.core.Keyword))?G__29002.fqn:null);
switch (G__29002__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k28923);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5308__auto__,k__5309__auto__,G__28922){
var self__ = this;
var this__5308__auto____$1 = this;
var pred__29008 = cljs.core.keyword_identical_QMARK_;
var expr__29009 = k__5309__auto__;
if(cljs.core.truth_((pred__29008.cljs$core$IFn$_invoke$arity$2 ? pred__29008.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__29009) : pred__29008.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__29009)))){
return (new shadow.dom.Coordinate(G__28922,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__29008.cljs$core$IFn$_invoke$arity$2 ? pred__29008.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__29009) : pred__29008.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__29009)))){
return (new shadow.dom.Coordinate(self__.x,G__28922,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5309__auto__,G__28922),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5313__auto__){
var self__ = this;
var this__5313__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5299__auto__,G__28922){
var self__ = this;
var this__5299__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__28922,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__28931){
var extmap__5342__auto__ = (function (){var G__29031 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__28931,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__28931)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__29031);
} else {
return G__29031;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__28931),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__28931),null,cljs.core.not_empty(extmap__5342__auto__),null));
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

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5302__auto__,k29046,else__5303__auto__){
var self__ = this;
var this__5302__auto____$1 = this;
var G__29062 = k29046;
var G__29062__$1 = (((G__29062 instanceof cljs.core.Keyword))?G__29062.fqn:null);
switch (G__29062__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k29046,else__5303__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5320__auto__,f__5321__auto__,init__5322__auto__){
var self__ = this;
var this__5320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5323__auto__,p__29067){
var vec__29068 = p__29067;
var k__5324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29068,(0),null);
var v__5325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29068,(1),null);
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

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__29045){
var self__ = this;
var G__29045__$1 = this;
return (new cljs.core.RecordIter((0),G__29045__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this29047,other29048){
var self__ = this;
var this29047__$1 = this;
return (((!((other29048 == null)))) && ((((this29047__$1.constructor === other29048.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this29047__$1.w,other29048.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this29047__$1.h,other29048.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this29047__$1.__extmap,other29048.__extmap)))))))));
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

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5307__auto__,k29046){
var self__ = this;
var this__5307__auto____$1 = this;
var G__29097 = k29046;
var G__29097__$1 = (((G__29097 instanceof cljs.core.Keyword))?G__29097.fqn:null);
switch (G__29097__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k29046);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5308__auto__,k__5309__auto__,G__29045){
var self__ = this;
var this__5308__auto____$1 = this;
var pred__29102 = cljs.core.keyword_identical_QMARK_;
var expr__29103 = k__5309__auto__;
if(cljs.core.truth_((pred__29102.cljs$core$IFn$_invoke$arity$2 ? pred__29102.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__29103) : pred__29102.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__29103)))){
return (new shadow.dom.Size(G__29045,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__29102.cljs$core$IFn$_invoke$arity$2 ? pred__29102.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__29103) : pred__29102.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__29103)))){
return (new shadow.dom.Size(self__.w,G__29045,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5309__auto__,G__29045),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5313__auto__){
var self__ = this;
var this__5313__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5299__auto__,G__29045){
var self__ = this;
var this__5299__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__29045,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__29054){
var extmap__5342__auto__ = (function (){var G__29128 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__29054,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__29054)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__29128);
} else {
return G__29128;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__29054),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__29054),null,cljs.core.not_empty(extmap__5342__auto__),null));
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
var G__30314 = (i + (1));
var G__30315 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__30314;
ret = G__30315;
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
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__29172){
var vec__29174 = p__29172;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29174,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29174,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__29182 = arguments.length;
switch (G__29182) {
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
var G__30328 = ps;
var G__30329 = (i + (1));
el__$1 = G__30328;
i = G__30329;
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
var vec__29239 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29239,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29239,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29239,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__29243_30345 = cljs.core.seq(props);
var chunk__29244_30346 = null;
var count__29245_30347 = (0);
var i__29246_30348 = (0);
while(true){
if((i__29246_30348 < count__29245_30347)){
var vec__29266_30350 = chunk__29244_30346.cljs$core$IIndexed$_nth$arity$2(null,i__29246_30348);
var k_30351 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29266_30350,(0),null);
var v_30352 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29266_30350,(1),null);
el.setAttributeNS((function (){var temp__5804__auto__ = cljs.core.namespace(k_30351);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_30351),v_30352);


var G__30353 = seq__29243_30345;
var G__30354 = chunk__29244_30346;
var G__30355 = count__29245_30347;
var G__30356 = (i__29246_30348 + (1));
seq__29243_30345 = G__30353;
chunk__29244_30346 = G__30354;
count__29245_30347 = G__30355;
i__29246_30348 = G__30356;
continue;
} else {
var temp__5804__auto___30361 = cljs.core.seq(seq__29243_30345);
if(temp__5804__auto___30361){
var seq__29243_30362__$1 = temp__5804__auto___30361;
if(cljs.core.chunked_seq_QMARK_(seq__29243_30362__$1)){
var c__5525__auto___30363 = cljs.core.chunk_first(seq__29243_30362__$1);
var G__30364 = cljs.core.chunk_rest(seq__29243_30362__$1);
var G__30365 = c__5525__auto___30363;
var G__30366 = cljs.core.count(c__5525__auto___30363);
var G__30367 = (0);
seq__29243_30345 = G__30364;
chunk__29244_30346 = G__30365;
count__29245_30347 = G__30366;
i__29246_30348 = G__30367;
continue;
} else {
var vec__29272_30368 = cljs.core.first(seq__29243_30362__$1);
var k_30369 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29272_30368,(0),null);
var v_30370 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29272_30368,(1),null);
el.setAttributeNS((function (){var temp__5804__auto____$1 = cljs.core.namespace(k_30369);
if(cljs.core.truth_(temp__5804__auto____$1)){
var ns = temp__5804__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_30369),v_30370);


var G__30377 = cljs.core.next(seq__29243_30362__$1);
var G__30378 = null;
var G__30379 = (0);
var G__30380 = (0);
seq__29243_30345 = G__30377;
chunk__29244_30346 = G__30378;
count__29245_30347 = G__30379;
i__29246_30348 = G__30380;
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
var vec__29284 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29284,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29284,(1),null);
var seq__29287_30382 = cljs.core.seq(node_children);
var chunk__29289_30383 = null;
var count__29290_30384 = (0);
var i__29291_30385 = (0);
while(true){
if((i__29291_30385 < count__29290_30384)){
var child_struct_30388 = chunk__29289_30383.cljs$core$IIndexed$_nth$arity$2(null,i__29291_30385);
if((!((child_struct_30388 == null)))){
if(typeof child_struct_30388 === 'string'){
var text_30389 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_30389),child_struct_30388].join(''));
} else {
var children_30390 = shadow.dom.svg_node(child_struct_30388);
if(cljs.core.seq_QMARK_(children_30390)){
var seq__29350_30391 = cljs.core.seq(children_30390);
var chunk__29352_30392 = null;
var count__29353_30393 = (0);
var i__29354_30394 = (0);
while(true){
if((i__29354_30394 < count__29353_30393)){
var child_30396 = chunk__29352_30392.cljs$core$IIndexed$_nth$arity$2(null,i__29354_30394);
if(cljs.core.truth_(child_30396)){
node.appendChild(child_30396);


var G__30397 = seq__29350_30391;
var G__30398 = chunk__29352_30392;
var G__30399 = count__29353_30393;
var G__30400 = (i__29354_30394 + (1));
seq__29350_30391 = G__30397;
chunk__29352_30392 = G__30398;
count__29353_30393 = G__30399;
i__29354_30394 = G__30400;
continue;
} else {
var G__30401 = seq__29350_30391;
var G__30402 = chunk__29352_30392;
var G__30403 = count__29353_30393;
var G__30404 = (i__29354_30394 + (1));
seq__29350_30391 = G__30401;
chunk__29352_30392 = G__30402;
count__29353_30393 = G__30403;
i__29354_30394 = G__30404;
continue;
}
} else {
var temp__5804__auto___30405 = cljs.core.seq(seq__29350_30391);
if(temp__5804__auto___30405){
var seq__29350_30406__$1 = temp__5804__auto___30405;
if(cljs.core.chunked_seq_QMARK_(seq__29350_30406__$1)){
var c__5525__auto___30407 = cljs.core.chunk_first(seq__29350_30406__$1);
var G__30408 = cljs.core.chunk_rest(seq__29350_30406__$1);
var G__30409 = c__5525__auto___30407;
var G__30410 = cljs.core.count(c__5525__auto___30407);
var G__30411 = (0);
seq__29350_30391 = G__30408;
chunk__29352_30392 = G__30409;
count__29353_30393 = G__30410;
i__29354_30394 = G__30411;
continue;
} else {
var child_30412 = cljs.core.first(seq__29350_30406__$1);
if(cljs.core.truth_(child_30412)){
node.appendChild(child_30412);


var G__30414 = cljs.core.next(seq__29350_30406__$1);
var G__30415 = null;
var G__30416 = (0);
var G__30417 = (0);
seq__29350_30391 = G__30414;
chunk__29352_30392 = G__30415;
count__29353_30393 = G__30416;
i__29354_30394 = G__30417;
continue;
} else {
var G__30418 = cljs.core.next(seq__29350_30406__$1);
var G__30419 = null;
var G__30420 = (0);
var G__30421 = (0);
seq__29350_30391 = G__30418;
chunk__29352_30392 = G__30419;
count__29353_30393 = G__30420;
i__29354_30394 = G__30421;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_30390);
}
}


var G__30422 = seq__29287_30382;
var G__30423 = chunk__29289_30383;
var G__30424 = count__29290_30384;
var G__30425 = (i__29291_30385 + (1));
seq__29287_30382 = G__30422;
chunk__29289_30383 = G__30423;
count__29290_30384 = G__30424;
i__29291_30385 = G__30425;
continue;
} else {
var G__30426 = seq__29287_30382;
var G__30427 = chunk__29289_30383;
var G__30428 = count__29290_30384;
var G__30429 = (i__29291_30385 + (1));
seq__29287_30382 = G__30426;
chunk__29289_30383 = G__30427;
count__29290_30384 = G__30428;
i__29291_30385 = G__30429;
continue;
}
} else {
var temp__5804__auto___30431 = cljs.core.seq(seq__29287_30382);
if(temp__5804__auto___30431){
var seq__29287_30432__$1 = temp__5804__auto___30431;
if(cljs.core.chunked_seq_QMARK_(seq__29287_30432__$1)){
var c__5525__auto___30433 = cljs.core.chunk_first(seq__29287_30432__$1);
var G__30434 = cljs.core.chunk_rest(seq__29287_30432__$1);
var G__30435 = c__5525__auto___30433;
var G__30436 = cljs.core.count(c__5525__auto___30433);
var G__30437 = (0);
seq__29287_30382 = G__30434;
chunk__29289_30383 = G__30435;
count__29290_30384 = G__30436;
i__29291_30385 = G__30437;
continue;
} else {
var child_struct_30440 = cljs.core.first(seq__29287_30432__$1);
if((!((child_struct_30440 == null)))){
if(typeof child_struct_30440 === 'string'){
var text_30444 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_30444),child_struct_30440].join(''));
} else {
var children_30446 = shadow.dom.svg_node(child_struct_30440);
if(cljs.core.seq_QMARK_(children_30446)){
var seq__29364_30447 = cljs.core.seq(children_30446);
var chunk__29366_30448 = null;
var count__29367_30449 = (0);
var i__29368_30450 = (0);
while(true){
if((i__29368_30450 < count__29367_30449)){
var child_30452 = chunk__29366_30448.cljs$core$IIndexed$_nth$arity$2(null,i__29368_30450);
if(cljs.core.truth_(child_30452)){
node.appendChild(child_30452);


var G__30454 = seq__29364_30447;
var G__30455 = chunk__29366_30448;
var G__30456 = count__29367_30449;
var G__30457 = (i__29368_30450 + (1));
seq__29364_30447 = G__30454;
chunk__29366_30448 = G__30455;
count__29367_30449 = G__30456;
i__29368_30450 = G__30457;
continue;
} else {
var G__30458 = seq__29364_30447;
var G__30459 = chunk__29366_30448;
var G__30460 = count__29367_30449;
var G__30461 = (i__29368_30450 + (1));
seq__29364_30447 = G__30458;
chunk__29366_30448 = G__30459;
count__29367_30449 = G__30460;
i__29368_30450 = G__30461;
continue;
}
} else {
var temp__5804__auto___30463__$1 = cljs.core.seq(seq__29364_30447);
if(temp__5804__auto___30463__$1){
var seq__29364_30464__$1 = temp__5804__auto___30463__$1;
if(cljs.core.chunked_seq_QMARK_(seq__29364_30464__$1)){
var c__5525__auto___30465 = cljs.core.chunk_first(seq__29364_30464__$1);
var G__30468 = cljs.core.chunk_rest(seq__29364_30464__$1);
var G__30469 = c__5525__auto___30465;
var G__30470 = cljs.core.count(c__5525__auto___30465);
var G__30471 = (0);
seq__29364_30447 = G__30468;
chunk__29366_30448 = G__30469;
count__29367_30449 = G__30470;
i__29368_30450 = G__30471;
continue;
} else {
var child_30472 = cljs.core.first(seq__29364_30464__$1);
if(cljs.core.truth_(child_30472)){
node.appendChild(child_30472);


var G__30474 = cljs.core.next(seq__29364_30464__$1);
var G__30475 = null;
var G__30476 = (0);
var G__30477 = (0);
seq__29364_30447 = G__30474;
chunk__29366_30448 = G__30475;
count__29367_30449 = G__30476;
i__29368_30450 = G__30477;
continue;
} else {
var G__30481 = cljs.core.next(seq__29364_30464__$1);
var G__30482 = null;
var G__30483 = (0);
var G__30484 = (0);
seq__29364_30447 = G__30481;
chunk__29366_30448 = G__30482;
count__29367_30449 = G__30483;
i__29368_30450 = G__30484;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_30446);
}
}


var G__30486 = cljs.core.next(seq__29287_30432__$1);
var G__30487 = null;
var G__30488 = (0);
var G__30489 = (0);
seq__29287_30382 = G__30486;
chunk__29289_30383 = G__30487;
count__29290_30384 = G__30488;
i__29291_30385 = G__30489;
continue;
} else {
var G__30490 = cljs.core.next(seq__29287_30432__$1);
var G__30491 = null;
var G__30492 = (0);
var G__30493 = (0);
seq__29287_30382 = G__30490;
chunk__29289_30383 = G__30491;
count__29290_30384 = G__30492;
i__29291_30385 = G__30493;
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
var len__5726__auto___30528 = arguments.length;
var i__5727__auto___30529 = (0);
while(true){
if((i__5727__auto___30529 < len__5726__auto___30528)){
args__5732__auto__.push((arguments[i__5727__auto___30529]));

var G__30530 = (i__5727__auto___30529 + (1));
i__5727__auto___30529 = G__30530;
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
(shadow.dom.svg.cljs$lang$applyTo = (function (seq29389){
var G__29390 = cljs.core.first(seq29389);
var seq29389__$1 = cljs.core.next(seq29389);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__29390,seq29389__$1);
}));


//# sourceMappingURL=shadow.dom.js.map
