goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31750 = (function (f,blockable,meta31751){
this.f = f;
this.blockable = blockable;
this.meta31751 = meta31751;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31750.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31752,meta31751__$1){
var self__ = this;
var _31752__$1 = this;
return (new cljs.core.async.t_cljs$core$async31750(self__.f,self__.blockable,meta31751__$1));
}));

(cljs.core.async.t_cljs$core$async31750.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31752){
var self__ = this;
var _31752__$1 = this;
return self__.meta31751;
}));

(cljs.core.async.t_cljs$core$async31750.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31750.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async31750.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async31750.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async31750.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta31751","meta31751",-2070195146,null)], null);
}));

(cljs.core.async.t_cljs$core$async31750.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31750.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31750");

(cljs.core.async.t_cljs$core$async31750.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async31750");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31750.
 */
cljs.core.async.__GT_t_cljs$core$async31750 = (function cljs$core$async$__GT_t_cljs$core$async31750(f,blockable,meta31751){
return (new cljs.core.async.t_cljs$core$async31750(f,blockable,meta31751));
});


cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__31744 = arguments.length;
switch (G__31744) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
return (new cljs.core.async.t_cljs$core$async31750(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__31772 = arguments.length;
switch (G__31772) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__31779 = arguments.length;
switch (G__31779) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__31787 = arguments.length;
switch (G__31787) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_35108 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_35108) : fn1.call(null,val_35108));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_35108) : fn1.call(null,val_35108));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__31800 = arguments.length;
switch (G__31800) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5802__auto__)){
var ret = temp__5802__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5802__auto__)){
var retb = temp__5802__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5593__auto___35116 = n;
var x_35117 = (0);
while(true){
if((x_35117 < n__5593__auto___35116)){
(a[x_35117] = x_35117);

var G__35118 = (x_35117 + (1));
x_35117 = G__35118;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle(a);

return a;
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31816 = (function (flag,meta31817){
this.flag = flag;
this.meta31817 = meta31817;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31816.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31818,meta31817__$1){
var self__ = this;
var _31818__$1 = this;
return (new cljs.core.async.t_cljs$core$async31816(self__.flag,meta31817__$1));
}));

(cljs.core.async.t_cljs$core$async31816.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31818){
var self__ = this;
var _31818__$1 = this;
return self__.meta31817;
}));

(cljs.core.async.t_cljs$core$async31816.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31816.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async31816.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async31816.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async31816.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta31817","meta31817",1977480806,null)], null);
}));

(cljs.core.async.t_cljs$core$async31816.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31816.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31816");

(cljs.core.async.t_cljs$core$async31816.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async31816");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31816.
 */
cljs.core.async.__GT_t_cljs$core$async31816 = (function cljs$core$async$__GT_t_cljs$core$async31816(flag,meta31817){
return (new cljs.core.async.t_cljs$core$async31816(flag,meta31817));
});


cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
return (new cljs.core.async.t_cljs$core$async31816(flag,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31835 = (function (flag,cb,meta31836){
this.flag = flag;
this.cb = cb;
this.meta31836 = meta31836;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31835.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31837,meta31836__$1){
var self__ = this;
var _31837__$1 = this;
return (new cljs.core.async.t_cljs$core$async31835(self__.flag,self__.cb,meta31836__$1));
}));

(cljs.core.async.t_cljs$core$async31835.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31837){
var self__ = this;
var _31837__$1 = this;
return self__.meta31836;
}));

(cljs.core.async.t_cljs$core$async31835.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31835.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async31835.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async31835.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async31835.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta31836","meta31836",-1834335704,null)], null);
}));

(cljs.core.async.t_cljs$core$async31835.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31835.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31835");

(cljs.core.async.t_cljs$core$async31835.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async31835");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31835.
 */
cljs.core.async.__GT_t_cljs$core$async31835 = (function cljs$core$async$__GT_t_cljs$core$async31835(flag,cb,meta31836){
return (new cljs.core.async.t_cljs$core$async31835(flag,cb,meta31836));
});


cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
return (new cljs.core.async.t_cljs$core$async31835(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__31846_SHARP_){
var G__31850 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__31846_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__31850) : fret.call(null,G__31850));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__31847_SHARP_){
var G__31853 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__31847_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__31853) : fret.call(null,G__31853));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__5002__auto__ = wport;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return port;
}
})()], null));
} else {
var G__35125 = (i + (1));
i = G__35125;
continue;
}
} else {
return null;
}
break;
}
})();
var or__5002__auto__ = ret;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5804__auto__ = (function (){var and__5000__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__5000__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__5000__auto__;
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var got = temp__5804__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__5732__auto__ = [];
var len__5726__auto___35127 = arguments.length;
var i__5727__auto___35129 = (0);
while(true){
if((i__5727__auto___35129 < len__5726__auto___35127)){
args__5732__auto__.push((arguments[i__5727__auto___35129]));

var G__35130 = (i__5727__auto___35129 + (1));
i__5727__auto___35129 = G__35130;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__31871){
var map__31872 = p__31871;
var map__31872__$1 = cljs.core.__destructure_map(map__31872);
var opts = map__31872__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq31861){
var G__31862 = cljs.core.first(seq31861);
var seq31861__$1 = cljs.core.next(seq31861);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31862,seq31861__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__31887 = arguments.length;
switch (G__31887) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__31647__auto___35138 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31648__auto__ = (function (){var switch__30657__auto__ = (function (state_31932){
var state_val_31933 = (state_31932[(1)]);
if((state_val_31933 === (7))){
var inst_31927 = (state_31932[(2)]);
var state_31932__$1 = state_31932;
var statearr_31942_35139 = state_31932__$1;
(statearr_31942_35139[(2)] = inst_31927);

(statearr_31942_35139[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31933 === (1))){
var state_31932__$1 = state_31932;
var statearr_31943_35140 = state_31932__$1;
(statearr_31943_35140[(2)] = null);

(statearr_31943_35140[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31933 === (4))){
var inst_31903 = (state_31932[(7)]);
var inst_31903__$1 = (state_31932[(2)]);
var inst_31907 = (inst_31903__$1 == null);
var state_31932__$1 = (function (){var statearr_31953 = state_31932;
(statearr_31953[(7)] = inst_31903__$1);

return statearr_31953;
})();
if(cljs.core.truth_(inst_31907)){
var statearr_31955_35141 = state_31932__$1;
(statearr_31955_35141[(1)] = (5));

} else {
var statearr_31956_35142 = state_31932__$1;
(statearr_31956_35142[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31933 === (13))){
var state_31932__$1 = state_31932;
var statearr_31960_35143 = state_31932__$1;
(statearr_31960_35143[(2)] = null);

(statearr_31960_35143[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31933 === (6))){
var inst_31903 = (state_31932[(7)]);
var state_31932__$1 = state_31932;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31932__$1,(11),to,inst_31903);
} else {
if((state_val_31933 === (3))){
var inst_31929 = (state_31932[(2)]);
var state_31932__$1 = state_31932;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31932__$1,inst_31929);
} else {
if((state_val_31933 === (12))){
var state_31932__$1 = state_31932;
var statearr_31970_35144 = state_31932__$1;
(statearr_31970_35144[(2)] = null);

(statearr_31970_35144[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31933 === (2))){
var state_31932__$1 = state_31932;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31932__$1,(4),from);
} else {
if((state_val_31933 === (11))){
var inst_31920 = (state_31932[(2)]);
var state_31932__$1 = state_31932;
if(cljs.core.truth_(inst_31920)){
var statearr_31971_35145 = state_31932__$1;
(statearr_31971_35145[(1)] = (12));

} else {
var statearr_31973_35146 = state_31932__$1;
(statearr_31973_35146[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31933 === (9))){
var state_31932__$1 = state_31932;
var statearr_31974_35147 = state_31932__$1;
(statearr_31974_35147[(2)] = null);

(statearr_31974_35147[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31933 === (5))){
var state_31932__$1 = state_31932;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31975_35148 = state_31932__$1;
(statearr_31975_35148[(1)] = (8));

} else {
var statearr_31976_35149 = state_31932__$1;
(statearr_31976_35149[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31933 === (14))){
var inst_31925 = (state_31932[(2)]);
var state_31932__$1 = state_31932;
var statearr_31977_35150 = state_31932__$1;
(statearr_31977_35150[(2)] = inst_31925);

(statearr_31977_35150[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31933 === (10))){
var inst_31917 = (state_31932[(2)]);
var state_31932__$1 = state_31932;
var statearr_31980_35155 = state_31932__$1;
(statearr_31980_35155[(2)] = inst_31917);

(statearr_31980_35155[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31933 === (8))){
var inst_31912 = cljs.core.async.close_BANG_(to);
var state_31932__$1 = state_31932;
var statearr_31982_35156 = state_31932__$1;
(statearr_31982_35156[(2)] = inst_31912);

(statearr_31982_35156[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__30658__auto__ = null;
var cljs$core$async$state_machine__30658__auto____0 = (function (){
var statearr_31986 = [null,null,null,null,null,null,null,null];
(statearr_31986[(0)] = cljs$core$async$state_machine__30658__auto__);

(statearr_31986[(1)] = (1));

return statearr_31986;
});
var cljs$core$async$state_machine__30658__auto____1 = (function (state_31932){
while(true){
var ret_value__30659__auto__ = (function (){try{while(true){
var result__30660__auto__ = switch__30657__auto__(state_31932);
if(cljs.core.keyword_identical_QMARK_(result__30660__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30660__auto__;
}
break;
}
}catch (e31987){var ex__30661__auto__ = e31987;
var statearr_31988_35162 = state_31932;
(statearr_31988_35162[(2)] = ex__30661__auto__);


if(cljs.core.seq((state_31932[(4)]))){
var statearr_31990_35163 = state_31932;
(statearr_31990_35163[(1)] = cljs.core.first((state_31932[(4)])));

} else {
throw ex__30661__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30659__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35164 = state_31932;
state_31932 = G__35164;
continue;
} else {
return ret_value__30659__auto__;
}
break;
}
});
cljs$core$async$state_machine__30658__auto__ = function(state_31932){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30658__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30658__auto____1.call(this,state_31932);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30658__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30658__auto____0;
cljs$core$async$state_machine__30658__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30658__auto____1;
return cljs$core$async$state_machine__30658__auto__;
})()
})();
var state__31649__auto__ = (function (){var statearr_31991 = f__31648__auto__();
(statearr_31991[(6)] = c__31647__auto___35138);

return statearr_31991;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31649__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process__$1 = (function (p__32007){
var vec__32009 = p__32007;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32009,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32009,(1),null);
var job = vec__32009;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__31647__auto___35168 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31648__auto__ = (function (){var switch__30657__auto__ = (function (state_32016){
var state_val_32017 = (state_32016[(1)]);
if((state_val_32017 === (1))){
var state_32016__$1 = state_32016;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32016__$1,(2),res,v);
} else {
if((state_val_32017 === (2))){
var inst_32013 = (state_32016[(2)]);
var inst_32014 = cljs.core.async.close_BANG_(res);
var state_32016__$1 = (function (){var statearr_32022 = state_32016;
(statearr_32022[(7)] = inst_32013);

return statearr_32022;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_32016__$1,inst_32014);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30658__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30658__auto____0 = (function (){
var statearr_32025 = [null,null,null,null,null,null,null,null];
(statearr_32025[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30658__auto__);

(statearr_32025[(1)] = (1));

return statearr_32025;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30658__auto____1 = (function (state_32016){
while(true){
var ret_value__30659__auto__ = (function (){try{while(true){
var result__30660__auto__ = switch__30657__auto__(state_32016);
if(cljs.core.keyword_identical_QMARK_(result__30660__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30660__auto__;
}
break;
}
}catch (e32026){var ex__30661__auto__ = e32026;
var statearr_32027_35170 = state_32016;
(statearr_32027_35170[(2)] = ex__30661__auto__);


if(cljs.core.seq((state_32016[(4)]))){
var statearr_32028_35171 = state_32016;
(statearr_32028_35171[(1)] = cljs.core.first((state_32016[(4)])));

} else {
throw ex__30661__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30659__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35172 = state_32016;
state_32016 = G__35172;
continue;
} else {
return ret_value__30659__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30658__auto__ = function(state_32016){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30658__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30658__auto____1.call(this,state_32016);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30658__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30658__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30658__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30658__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30658__auto__;
})()
})();
var state__31649__auto__ = (function (){var statearr_32029 = f__31648__auto__();
(statearr_32029[(6)] = c__31647__auto___35168);

return statearr_32029;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31649__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__32036){
var vec__32037 = p__32036;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32037,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32037,(1),null);
var job = vec__32037;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__5593__auto___35175 = n;
var __35176 = (0);
while(true){
if((__35176 < n__5593__auto___35175)){
var G__32046_35177 = type;
var G__32046_35178__$1 = (((G__32046_35177 instanceof cljs.core.Keyword))?G__32046_35177.fqn:null);
switch (G__32046_35178__$1) {
case "compute":
var c__31647__auto___35180 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__35176,c__31647__auto___35180,G__32046_35177,G__32046_35178__$1,n__5593__auto___35175,jobs,results,process__$1,async){
return (function (){
var f__31648__auto__ = (function (){var switch__30657__auto__ = ((function (__35176,c__31647__auto___35180,G__32046_35177,G__32046_35178__$1,n__5593__auto___35175,jobs,results,process__$1,async){
return (function (state_32060){
var state_val_32061 = (state_32060[(1)]);
if((state_val_32061 === (1))){
var state_32060__$1 = state_32060;
var statearr_32063_35181 = state_32060__$1;
(statearr_32063_35181[(2)] = null);

(statearr_32063_35181[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32061 === (2))){
var state_32060__$1 = state_32060;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32060__$1,(4),jobs);
} else {
if((state_val_32061 === (3))){
var inst_32057 = (state_32060[(2)]);
var state_32060__$1 = state_32060;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32060__$1,inst_32057);
} else {
if((state_val_32061 === (4))){
var inst_32049 = (state_32060[(2)]);
var inst_32050 = process__$1(inst_32049);
var state_32060__$1 = state_32060;
if(cljs.core.truth_(inst_32050)){
var statearr_32072_35182 = state_32060__$1;
(statearr_32072_35182[(1)] = (5));

} else {
var statearr_32073_35183 = state_32060__$1;
(statearr_32073_35183[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32061 === (5))){
var state_32060__$1 = state_32060;
var statearr_32074_35184 = state_32060__$1;
(statearr_32074_35184[(2)] = null);

(statearr_32074_35184[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32061 === (6))){
var state_32060__$1 = state_32060;
var statearr_32076_35185 = state_32060__$1;
(statearr_32076_35185[(2)] = null);

(statearr_32076_35185[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32061 === (7))){
var inst_32055 = (state_32060[(2)]);
var state_32060__$1 = state_32060;
var statearr_32078_35186 = state_32060__$1;
(statearr_32078_35186[(2)] = inst_32055);

(statearr_32078_35186[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__35176,c__31647__auto___35180,G__32046_35177,G__32046_35178__$1,n__5593__auto___35175,jobs,results,process__$1,async))
;
return ((function (__35176,switch__30657__auto__,c__31647__auto___35180,G__32046_35177,G__32046_35178__$1,n__5593__auto___35175,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30658__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30658__auto____0 = (function (){
var statearr_32079 = [null,null,null,null,null,null,null];
(statearr_32079[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30658__auto__);

(statearr_32079[(1)] = (1));

return statearr_32079;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30658__auto____1 = (function (state_32060){
while(true){
var ret_value__30659__auto__ = (function (){try{while(true){
var result__30660__auto__ = switch__30657__auto__(state_32060);
if(cljs.core.keyword_identical_QMARK_(result__30660__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30660__auto__;
}
break;
}
}catch (e32085){var ex__30661__auto__ = e32085;
var statearr_32086_35193 = state_32060;
(statearr_32086_35193[(2)] = ex__30661__auto__);


if(cljs.core.seq((state_32060[(4)]))){
var statearr_32087_35195 = state_32060;
(statearr_32087_35195[(1)] = cljs.core.first((state_32060[(4)])));

} else {
throw ex__30661__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30659__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35196 = state_32060;
state_32060 = G__35196;
continue;
} else {
return ret_value__30659__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30658__auto__ = function(state_32060){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30658__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30658__auto____1.call(this,state_32060);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30658__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30658__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30658__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30658__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30658__auto__;
})()
;})(__35176,switch__30657__auto__,c__31647__auto___35180,G__32046_35177,G__32046_35178__$1,n__5593__auto___35175,jobs,results,process__$1,async))
})();
var state__31649__auto__ = (function (){var statearr_32088 = f__31648__auto__();
(statearr_32088[(6)] = c__31647__auto___35180);

return statearr_32088;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31649__auto__);
});})(__35176,c__31647__auto___35180,G__32046_35177,G__32046_35178__$1,n__5593__auto___35175,jobs,results,process__$1,async))
);


break;
case "async":
var c__31647__auto___35197 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__35176,c__31647__auto___35197,G__32046_35177,G__32046_35178__$1,n__5593__auto___35175,jobs,results,process__$1,async){
return (function (){
var f__31648__auto__ = (function (){var switch__30657__auto__ = ((function (__35176,c__31647__auto___35197,G__32046_35177,G__32046_35178__$1,n__5593__auto___35175,jobs,results,process__$1,async){
return (function (state_32102){
var state_val_32103 = (state_32102[(1)]);
if((state_val_32103 === (1))){
var state_32102__$1 = state_32102;
var statearr_32104_35198 = state_32102__$1;
(statearr_32104_35198[(2)] = null);

(statearr_32104_35198[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32103 === (2))){
var state_32102__$1 = state_32102;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32102__$1,(4),jobs);
} else {
if((state_val_32103 === (3))){
var inst_32099 = (state_32102[(2)]);
var state_32102__$1 = state_32102;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32102__$1,inst_32099);
} else {
if((state_val_32103 === (4))){
var inst_32091 = (state_32102[(2)]);
var inst_32092 = async(inst_32091);
var state_32102__$1 = state_32102;
if(cljs.core.truth_(inst_32092)){
var statearr_32107_35202 = state_32102__$1;
(statearr_32107_35202[(1)] = (5));

} else {
var statearr_32109_35204 = state_32102__$1;
(statearr_32109_35204[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32103 === (5))){
var state_32102__$1 = state_32102;
var statearr_32110_35205 = state_32102__$1;
(statearr_32110_35205[(2)] = null);

(statearr_32110_35205[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32103 === (6))){
var state_32102__$1 = state_32102;
var statearr_32113_35207 = state_32102__$1;
(statearr_32113_35207[(2)] = null);

(statearr_32113_35207[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32103 === (7))){
var inst_32097 = (state_32102[(2)]);
var state_32102__$1 = state_32102;
var statearr_32115_35208 = state_32102__$1;
(statearr_32115_35208[(2)] = inst_32097);

(statearr_32115_35208[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__35176,c__31647__auto___35197,G__32046_35177,G__32046_35178__$1,n__5593__auto___35175,jobs,results,process__$1,async))
;
return ((function (__35176,switch__30657__auto__,c__31647__auto___35197,G__32046_35177,G__32046_35178__$1,n__5593__auto___35175,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30658__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30658__auto____0 = (function (){
var statearr_32120 = [null,null,null,null,null,null,null];
(statearr_32120[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30658__auto__);

(statearr_32120[(1)] = (1));

return statearr_32120;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30658__auto____1 = (function (state_32102){
while(true){
var ret_value__30659__auto__ = (function (){try{while(true){
var result__30660__auto__ = switch__30657__auto__(state_32102);
if(cljs.core.keyword_identical_QMARK_(result__30660__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30660__auto__;
}
break;
}
}catch (e32121){var ex__30661__auto__ = e32121;
var statearr_32122_35209 = state_32102;
(statearr_32122_35209[(2)] = ex__30661__auto__);


if(cljs.core.seq((state_32102[(4)]))){
var statearr_32123_35211 = state_32102;
(statearr_32123_35211[(1)] = cljs.core.first((state_32102[(4)])));

} else {
throw ex__30661__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30659__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35212 = state_32102;
state_32102 = G__35212;
continue;
} else {
return ret_value__30659__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30658__auto__ = function(state_32102){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30658__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30658__auto____1.call(this,state_32102);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30658__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30658__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30658__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30658__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30658__auto__;
})()
;})(__35176,switch__30657__auto__,c__31647__auto___35197,G__32046_35177,G__32046_35178__$1,n__5593__auto___35175,jobs,results,process__$1,async))
})();
var state__31649__auto__ = (function (){var statearr_32124 = f__31648__auto__();
(statearr_32124[(6)] = c__31647__auto___35197);

return statearr_32124;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31649__auto__);
});})(__35176,c__31647__auto___35197,G__32046_35177,G__32046_35178__$1,n__5593__auto___35175,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__32046_35178__$1)].join('')));

}

var G__35213 = (__35176 + (1));
__35176 = G__35213;
continue;
} else {
}
break;
}

var c__31647__auto___35214 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31648__auto__ = (function (){var switch__30657__auto__ = (function (state_32153){
var state_val_32154 = (state_32153[(1)]);
if((state_val_32154 === (7))){
var inst_32149 = (state_32153[(2)]);
var state_32153__$1 = state_32153;
var statearr_32159_35219 = state_32153__$1;
(statearr_32159_35219[(2)] = inst_32149);

(statearr_32159_35219[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32154 === (1))){
var state_32153__$1 = state_32153;
var statearr_32162_35220 = state_32153__$1;
(statearr_32162_35220[(2)] = null);

(statearr_32162_35220[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32154 === (4))){
var inst_32132 = (state_32153[(7)]);
var inst_32132__$1 = (state_32153[(2)]);
var inst_32133 = (inst_32132__$1 == null);
var state_32153__$1 = (function (){var statearr_32164 = state_32153;
(statearr_32164[(7)] = inst_32132__$1);

return statearr_32164;
})();
if(cljs.core.truth_(inst_32133)){
var statearr_32165_35223 = state_32153__$1;
(statearr_32165_35223[(1)] = (5));

} else {
var statearr_32166_35224 = state_32153__$1;
(statearr_32166_35224[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32154 === (6))){
var inst_32137 = (state_32153[(8)]);
var inst_32132 = (state_32153[(7)]);
var inst_32137__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_32140 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_32141 = [inst_32132,inst_32137__$1];
var inst_32142 = (new cljs.core.PersistentVector(null,2,(5),inst_32140,inst_32141,null));
var state_32153__$1 = (function (){var statearr_32171 = state_32153;
(statearr_32171[(8)] = inst_32137__$1);

return statearr_32171;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32153__$1,(8),jobs,inst_32142);
} else {
if((state_val_32154 === (3))){
var inst_32151 = (state_32153[(2)]);
var state_32153__$1 = state_32153;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32153__$1,inst_32151);
} else {
if((state_val_32154 === (2))){
var state_32153__$1 = state_32153;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32153__$1,(4),from);
} else {
if((state_val_32154 === (9))){
var inst_32146 = (state_32153[(2)]);
var state_32153__$1 = (function (){var statearr_32174 = state_32153;
(statearr_32174[(9)] = inst_32146);

return statearr_32174;
})();
var statearr_32175_35226 = state_32153__$1;
(statearr_32175_35226[(2)] = null);

(statearr_32175_35226[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32154 === (5))){
var inst_32135 = cljs.core.async.close_BANG_(jobs);
var state_32153__$1 = state_32153;
var statearr_32177_35228 = state_32153__$1;
(statearr_32177_35228[(2)] = inst_32135);

(statearr_32177_35228[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32154 === (8))){
var inst_32137 = (state_32153[(8)]);
var inst_32144 = (state_32153[(2)]);
var state_32153__$1 = (function (){var statearr_32183 = state_32153;
(statearr_32183[(10)] = inst_32144);

return statearr_32183;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32153__$1,(9),results,inst_32137);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30658__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30658__auto____0 = (function (){
var statearr_32184 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32184[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30658__auto__);

(statearr_32184[(1)] = (1));

return statearr_32184;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30658__auto____1 = (function (state_32153){
while(true){
var ret_value__30659__auto__ = (function (){try{while(true){
var result__30660__auto__ = switch__30657__auto__(state_32153);
if(cljs.core.keyword_identical_QMARK_(result__30660__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30660__auto__;
}
break;
}
}catch (e32185){var ex__30661__auto__ = e32185;
var statearr_32186_35231 = state_32153;
(statearr_32186_35231[(2)] = ex__30661__auto__);


if(cljs.core.seq((state_32153[(4)]))){
var statearr_32187_35232 = state_32153;
(statearr_32187_35232[(1)] = cljs.core.first((state_32153[(4)])));

} else {
throw ex__30661__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30659__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35233 = state_32153;
state_32153 = G__35233;
continue;
} else {
return ret_value__30659__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30658__auto__ = function(state_32153){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30658__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30658__auto____1.call(this,state_32153);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30658__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30658__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30658__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30658__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30658__auto__;
})()
})();
var state__31649__auto__ = (function (){var statearr_32188 = f__31648__auto__();
(statearr_32188[(6)] = c__31647__auto___35214);

return statearr_32188;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31649__auto__);
}));


var c__31647__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31648__auto__ = (function (){var switch__30657__auto__ = (function (state_32235){
var state_val_32236 = (state_32235[(1)]);
if((state_val_32236 === (7))){
var inst_32231 = (state_32235[(2)]);
var state_32235__$1 = state_32235;
var statearr_32239_35234 = state_32235__$1;
(statearr_32239_35234[(2)] = inst_32231);

(statearr_32239_35234[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32236 === (20))){
var state_32235__$1 = state_32235;
var statearr_32243_35235 = state_32235__$1;
(statearr_32243_35235[(2)] = null);

(statearr_32243_35235[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32236 === (1))){
var state_32235__$1 = state_32235;
var statearr_32245_35236 = state_32235__$1;
(statearr_32245_35236[(2)] = null);

(statearr_32245_35236[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32236 === (4))){
var inst_32191 = (state_32235[(7)]);
var inst_32191__$1 = (state_32235[(2)]);
var inst_32194 = (inst_32191__$1 == null);
var state_32235__$1 = (function (){var statearr_32252 = state_32235;
(statearr_32252[(7)] = inst_32191__$1);

return statearr_32252;
})();
if(cljs.core.truth_(inst_32194)){
var statearr_32253_35237 = state_32235__$1;
(statearr_32253_35237[(1)] = (5));

} else {
var statearr_32255_35238 = state_32235__$1;
(statearr_32255_35238[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32236 === (15))){
var inst_32207 = (state_32235[(8)]);
var state_32235__$1 = state_32235;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32235__$1,(18),to,inst_32207);
} else {
if((state_val_32236 === (21))){
var inst_32226 = (state_32235[(2)]);
var state_32235__$1 = state_32235;
var statearr_32265_35243 = state_32235__$1;
(statearr_32265_35243[(2)] = inst_32226);

(statearr_32265_35243[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32236 === (13))){
var inst_32228 = (state_32235[(2)]);
var state_32235__$1 = (function (){var statearr_32267 = state_32235;
(statearr_32267[(9)] = inst_32228);

return statearr_32267;
})();
var statearr_32270_35244 = state_32235__$1;
(statearr_32270_35244[(2)] = null);

(statearr_32270_35244[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32236 === (6))){
var inst_32191 = (state_32235[(7)]);
var state_32235__$1 = state_32235;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32235__$1,(11),inst_32191);
} else {
if((state_val_32236 === (17))){
var inst_32218 = (state_32235[(2)]);
var state_32235__$1 = state_32235;
if(cljs.core.truth_(inst_32218)){
var statearr_32273_35245 = state_32235__$1;
(statearr_32273_35245[(1)] = (19));

} else {
var statearr_32276_35247 = state_32235__$1;
(statearr_32276_35247[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32236 === (3))){
var inst_32233 = (state_32235[(2)]);
var state_32235__$1 = state_32235;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32235__$1,inst_32233);
} else {
if((state_val_32236 === (12))){
var inst_32204 = (state_32235[(10)]);
var state_32235__$1 = state_32235;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32235__$1,(14),inst_32204);
} else {
if((state_val_32236 === (2))){
var state_32235__$1 = state_32235;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32235__$1,(4),results);
} else {
if((state_val_32236 === (19))){
var state_32235__$1 = state_32235;
var statearr_32282_35252 = state_32235__$1;
(statearr_32282_35252[(2)] = null);

(statearr_32282_35252[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32236 === (11))){
var inst_32204 = (state_32235[(2)]);
var state_32235__$1 = (function (){var statearr_32284 = state_32235;
(statearr_32284[(10)] = inst_32204);

return statearr_32284;
})();
var statearr_32285_35253 = state_32235__$1;
(statearr_32285_35253[(2)] = null);

(statearr_32285_35253[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32236 === (9))){
var state_32235__$1 = state_32235;
var statearr_32290_35257 = state_32235__$1;
(statearr_32290_35257[(2)] = null);

(statearr_32290_35257[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32236 === (5))){
var state_32235__$1 = state_32235;
if(cljs.core.truth_(close_QMARK_)){
var statearr_32292_35258 = state_32235__$1;
(statearr_32292_35258[(1)] = (8));

} else {
var statearr_32293_35259 = state_32235__$1;
(statearr_32293_35259[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32236 === (14))){
var inst_32212 = (state_32235[(11)]);
var inst_32207 = (state_32235[(8)]);
var inst_32207__$1 = (state_32235[(2)]);
var inst_32211 = (inst_32207__$1 == null);
var inst_32212__$1 = cljs.core.not(inst_32211);
var state_32235__$1 = (function (){var statearr_32303 = state_32235;
(statearr_32303[(11)] = inst_32212__$1);

(statearr_32303[(8)] = inst_32207__$1);

return statearr_32303;
})();
if(inst_32212__$1){
var statearr_32304_35260 = state_32235__$1;
(statearr_32304_35260[(1)] = (15));

} else {
var statearr_32306_35261 = state_32235__$1;
(statearr_32306_35261[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32236 === (16))){
var inst_32212 = (state_32235[(11)]);
var state_32235__$1 = state_32235;
var statearr_32308_35262 = state_32235__$1;
(statearr_32308_35262[(2)] = inst_32212);

(statearr_32308_35262[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32236 === (10))){
var inst_32201 = (state_32235[(2)]);
var state_32235__$1 = state_32235;
var statearr_32313_35263 = state_32235__$1;
(statearr_32313_35263[(2)] = inst_32201);

(statearr_32313_35263[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32236 === (18))){
var inst_32215 = (state_32235[(2)]);
var state_32235__$1 = state_32235;
var statearr_32314_35264 = state_32235__$1;
(statearr_32314_35264[(2)] = inst_32215);

(statearr_32314_35264[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32236 === (8))){
var inst_32198 = cljs.core.async.close_BANG_(to);
var state_32235__$1 = state_32235;
var statearr_32318_35265 = state_32235__$1;
(statearr_32318_35265[(2)] = inst_32198);

(statearr_32318_35265[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30658__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30658__auto____0 = (function (){
var statearr_32323 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32323[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30658__auto__);

(statearr_32323[(1)] = (1));

return statearr_32323;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30658__auto____1 = (function (state_32235){
while(true){
var ret_value__30659__auto__ = (function (){try{while(true){
var result__30660__auto__ = switch__30657__auto__(state_32235);
if(cljs.core.keyword_identical_QMARK_(result__30660__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30660__auto__;
}
break;
}
}catch (e32328){var ex__30661__auto__ = e32328;
var statearr_32329_35270 = state_32235;
(statearr_32329_35270[(2)] = ex__30661__auto__);


if(cljs.core.seq((state_32235[(4)]))){
var statearr_32331_35274 = state_32235;
(statearr_32331_35274[(1)] = cljs.core.first((state_32235[(4)])));

} else {
throw ex__30661__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30659__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35275 = state_32235;
state_32235 = G__35275;
continue;
} else {
return ret_value__30659__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30658__auto__ = function(state_32235){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30658__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30658__auto____1.call(this,state_32235);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30658__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30658__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30658__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30658__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30658__auto__;
})()
})();
var state__31649__auto__ = (function (){var statearr_32336 = f__31648__auto__();
(statearr_32336[(6)] = c__31647__auto__);

return statearr_32336;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31649__auto__);
}));

return c__31647__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). The
 *   presumption is that af will return immediately, having launched some
 *   asynchronous operation whose completion/callback will put results on
 *   the channel, then close! it. Outputs will be returned in order
 *   relative to the inputs. By default, the to channel will be closed
 *   when the from channel closes, but can be determined by the close?
 *   parameter. Will stop consuming the from channel if the to channel
 *   closes. See also pipeline, pipeline-blocking.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__32342 = arguments.length;
switch (G__32342) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__32362 = arguments.length;
switch (G__32362) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__32384 = arguments.length;
switch (G__32384) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__31647__auto___35285 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31648__auto__ = (function (){var switch__30657__auto__ = (function (state_32426){
var state_val_32427 = (state_32426[(1)]);
if((state_val_32427 === (7))){
var inst_32421 = (state_32426[(2)]);
var state_32426__$1 = state_32426;
var statearr_32436_35286 = state_32426__$1;
(statearr_32436_35286[(2)] = inst_32421);

(statearr_32436_35286[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32427 === (1))){
var state_32426__$1 = state_32426;
var statearr_32439_35289 = state_32426__$1;
(statearr_32439_35289[(2)] = null);

(statearr_32439_35289[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32427 === (4))){
var inst_32399 = (state_32426[(7)]);
var inst_32399__$1 = (state_32426[(2)]);
var inst_32400 = (inst_32399__$1 == null);
var state_32426__$1 = (function (){var statearr_32442 = state_32426;
(statearr_32442[(7)] = inst_32399__$1);

return statearr_32442;
})();
if(cljs.core.truth_(inst_32400)){
var statearr_32443_35291 = state_32426__$1;
(statearr_32443_35291[(1)] = (5));

} else {
var statearr_32446_35292 = state_32426__$1;
(statearr_32446_35292[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32427 === (13))){
var state_32426__$1 = state_32426;
var statearr_32448_35294 = state_32426__$1;
(statearr_32448_35294[(2)] = null);

(statearr_32448_35294[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32427 === (6))){
var inst_32399 = (state_32426[(7)]);
var inst_32407 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_32399) : p.call(null,inst_32399));
var state_32426__$1 = state_32426;
if(cljs.core.truth_(inst_32407)){
var statearr_32452_35295 = state_32426__$1;
(statearr_32452_35295[(1)] = (9));

} else {
var statearr_32454_35297 = state_32426__$1;
(statearr_32454_35297[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32427 === (3))){
var inst_32423 = (state_32426[(2)]);
var state_32426__$1 = state_32426;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32426__$1,inst_32423);
} else {
if((state_val_32427 === (12))){
var state_32426__$1 = state_32426;
var statearr_32459_35302 = state_32426__$1;
(statearr_32459_35302[(2)] = null);

(statearr_32459_35302[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32427 === (2))){
var state_32426__$1 = state_32426;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32426__$1,(4),ch);
} else {
if((state_val_32427 === (11))){
var inst_32399 = (state_32426[(7)]);
var inst_32412 = (state_32426[(2)]);
var state_32426__$1 = state_32426;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32426__$1,(8),inst_32412,inst_32399);
} else {
if((state_val_32427 === (9))){
var state_32426__$1 = state_32426;
var statearr_32466_35308 = state_32426__$1;
(statearr_32466_35308[(2)] = tc);

(statearr_32466_35308[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32427 === (5))){
var inst_32402 = cljs.core.async.close_BANG_(tc);
var inst_32404 = cljs.core.async.close_BANG_(fc);
var state_32426__$1 = (function (){var statearr_32471 = state_32426;
(statearr_32471[(8)] = inst_32402);

return statearr_32471;
})();
var statearr_32473_35310 = state_32426__$1;
(statearr_32473_35310[(2)] = inst_32404);

(statearr_32473_35310[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32427 === (14))){
var inst_32419 = (state_32426[(2)]);
var state_32426__$1 = state_32426;
var statearr_32475_35311 = state_32426__$1;
(statearr_32475_35311[(2)] = inst_32419);

(statearr_32475_35311[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32427 === (10))){
var state_32426__$1 = state_32426;
var statearr_32476_35312 = state_32426__$1;
(statearr_32476_35312[(2)] = fc);

(statearr_32476_35312[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32427 === (8))){
var inst_32414 = (state_32426[(2)]);
var state_32426__$1 = state_32426;
if(cljs.core.truth_(inst_32414)){
var statearr_32480_35313 = state_32426__$1;
(statearr_32480_35313[(1)] = (12));

} else {
var statearr_32482_35314 = state_32426__$1;
(statearr_32482_35314[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__30658__auto__ = null;
var cljs$core$async$state_machine__30658__auto____0 = (function (){
var statearr_32487 = [null,null,null,null,null,null,null,null,null];
(statearr_32487[(0)] = cljs$core$async$state_machine__30658__auto__);

(statearr_32487[(1)] = (1));

return statearr_32487;
});
var cljs$core$async$state_machine__30658__auto____1 = (function (state_32426){
while(true){
var ret_value__30659__auto__ = (function (){try{while(true){
var result__30660__auto__ = switch__30657__auto__(state_32426);
if(cljs.core.keyword_identical_QMARK_(result__30660__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30660__auto__;
}
break;
}
}catch (e32491){var ex__30661__auto__ = e32491;
var statearr_32494_35315 = state_32426;
(statearr_32494_35315[(2)] = ex__30661__auto__);


if(cljs.core.seq((state_32426[(4)]))){
var statearr_32496_35316 = state_32426;
(statearr_32496_35316[(1)] = cljs.core.first((state_32426[(4)])));

} else {
throw ex__30661__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30659__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35321 = state_32426;
state_32426 = G__35321;
continue;
} else {
return ret_value__30659__auto__;
}
break;
}
});
cljs$core$async$state_machine__30658__auto__ = function(state_32426){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30658__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30658__auto____1.call(this,state_32426);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30658__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30658__auto____0;
cljs$core$async$state_machine__30658__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30658__auto____1;
return cljs$core$async$state_machine__30658__auto__;
})()
})();
var state__31649__auto__ = (function (){var statearr_32499 = f__31648__auto__();
(statearr_32499[(6)] = c__31647__auto___35285);

return statearr_32499;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31649__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__31647__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31648__auto__ = (function (){var switch__30657__auto__ = (function (state_32532){
var state_val_32534 = (state_32532[(1)]);
if((state_val_32534 === (7))){
var inst_32527 = (state_32532[(2)]);
var state_32532__$1 = state_32532;
var statearr_32541_35326 = state_32532__$1;
(statearr_32541_35326[(2)] = inst_32527);

(statearr_32541_35326[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32534 === (1))){
var inst_32506 = init;
var inst_32510 = inst_32506;
var state_32532__$1 = (function (){var statearr_32543 = state_32532;
(statearr_32543[(7)] = inst_32510);

return statearr_32543;
})();
var statearr_32546_35327 = state_32532__$1;
(statearr_32546_35327[(2)] = null);

(statearr_32546_35327[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32534 === (4))){
var inst_32513 = (state_32532[(8)]);
var inst_32513__$1 = (state_32532[(2)]);
var inst_32514 = (inst_32513__$1 == null);
var state_32532__$1 = (function (){var statearr_32553 = state_32532;
(statearr_32553[(8)] = inst_32513__$1);

return statearr_32553;
})();
if(cljs.core.truth_(inst_32514)){
var statearr_32554_35328 = state_32532__$1;
(statearr_32554_35328[(1)] = (5));

} else {
var statearr_32559_35329 = state_32532__$1;
(statearr_32559_35329[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32534 === (6))){
var inst_32518 = (state_32532[(9)]);
var inst_32510 = (state_32532[(7)]);
var inst_32513 = (state_32532[(8)]);
var inst_32518__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_32510,inst_32513) : f.call(null,inst_32510,inst_32513));
var inst_32519 = cljs.core.reduced_QMARK_(inst_32518__$1);
var state_32532__$1 = (function (){var statearr_32562 = state_32532;
(statearr_32562[(9)] = inst_32518__$1);

return statearr_32562;
})();
if(inst_32519){
var statearr_32564_35337 = state_32532__$1;
(statearr_32564_35337[(1)] = (8));

} else {
var statearr_32569_35338 = state_32532__$1;
(statearr_32569_35338[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32534 === (3))){
var inst_32529 = (state_32532[(2)]);
var state_32532__$1 = state_32532;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32532__$1,inst_32529);
} else {
if((state_val_32534 === (2))){
var state_32532__$1 = state_32532;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32532__$1,(4),ch);
} else {
if((state_val_32534 === (9))){
var inst_32518 = (state_32532[(9)]);
var inst_32510 = inst_32518;
var state_32532__$1 = (function (){var statearr_32579 = state_32532;
(statearr_32579[(7)] = inst_32510);

return statearr_32579;
})();
var statearr_32580_35339 = state_32532__$1;
(statearr_32580_35339[(2)] = null);

(statearr_32580_35339[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32534 === (5))){
var inst_32510 = (state_32532[(7)]);
var state_32532__$1 = state_32532;
var statearr_32583_35344 = state_32532__$1;
(statearr_32583_35344[(2)] = inst_32510);

(statearr_32583_35344[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32534 === (10))){
var inst_32525 = (state_32532[(2)]);
var state_32532__$1 = state_32532;
var statearr_32584_35345 = state_32532__$1;
(statearr_32584_35345[(2)] = inst_32525);

(statearr_32584_35345[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32534 === (8))){
var inst_32518 = (state_32532[(9)]);
var inst_32521 = cljs.core.deref(inst_32518);
var state_32532__$1 = state_32532;
var statearr_32588_35350 = state_32532__$1;
(statearr_32588_35350[(2)] = inst_32521);

(statearr_32588_35350[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__30658__auto__ = null;
var cljs$core$async$reduce_$_state_machine__30658__auto____0 = (function (){
var statearr_32590 = [null,null,null,null,null,null,null,null,null,null];
(statearr_32590[(0)] = cljs$core$async$reduce_$_state_machine__30658__auto__);

(statearr_32590[(1)] = (1));

return statearr_32590;
});
var cljs$core$async$reduce_$_state_machine__30658__auto____1 = (function (state_32532){
while(true){
var ret_value__30659__auto__ = (function (){try{while(true){
var result__30660__auto__ = switch__30657__auto__(state_32532);
if(cljs.core.keyword_identical_QMARK_(result__30660__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30660__auto__;
}
break;
}
}catch (e32591){var ex__30661__auto__ = e32591;
var statearr_32593_35356 = state_32532;
(statearr_32593_35356[(2)] = ex__30661__auto__);


if(cljs.core.seq((state_32532[(4)]))){
var statearr_32595_35357 = state_32532;
(statearr_32595_35357[(1)] = cljs.core.first((state_32532[(4)])));

} else {
throw ex__30661__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30659__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35358 = state_32532;
state_32532 = G__35358;
continue;
} else {
return ret_value__30659__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__30658__auto__ = function(state_32532){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__30658__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__30658__auto____1.call(this,state_32532);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__30658__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__30658__auto____0;
cljs$core$async$reduce_$_state_machine__30658__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__30658__auto____1;
return cljs$core$async$reduce_$_state_machine__30658__auto__;
})()
})();
var state__31649__auto__ = (function (){var statearr_32604 = f__31648__auto__();
(statearr_32604[(6)] = c__31647__auto__);

return statearr_32604;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31649__auto__);
}));

return c__31647__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__31647__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31648__auto__ = (function (){var switch__30657__auto__ = (function (state_32620){
var state_val_32621 = (state_32620[(1)]);
if((state_val_32621 === (1))){
var inst_32610 = cljs.core.async.reduce(f__$1,init,ch);
var state_32620__$1 = state_32620;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32620__$1,(2),inst_32610);
} else {
if((state_val_32621 === (2))){
var inst_32612 = (state_32620[(2)]);
var inst_32614 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_32612) : f__$1.call(null,inst_32612));
var state_32620__$1 = state_32620;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32620__$1,inst_32614);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__30658__auto__ = null;
var cljs$core$async$transduce_$_state_machine__30658__auto____0 = (function (){
var statearr_32629 = [null,null,null,null,null,null,null];
(statearr_32629[(0)] = cljs$core$async$transduce_$_state_machine__30658__auto__);

(statearr_32629[(1)] = (1));

return statearr_32629;
});
var cljs$core$async$transduce_$_state_machine__30658__auto____1 = (function (state_32620){
while(true){
var ret_value__30659__auto__ = (function (){try{while(true){
var result__30660__auto__ = switch__30657__auto__(state_32620);
if(cljs.core.keyword_identical_QMARK_(result__30660__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30660__auto__;
}
break;
}
}catch (e32631){var ex__30661__auto__ = e32631;
var statearr_32632_35366 = state_32620;
(statearr_32632_35366[(2)] = ex__30661__auto__);


if(cljs.core.seq((state_32620[(4)]))){
var statearr_32634_35367 = state_32620;
(statearr_32634_35367[(1)] = cljs.core.first((state_32620[(4)])));

} else {
throw ex__30661__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30659__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35368 = state_32620;
state_32620 = G__35368;
continue;
} else {
return ret_value__30659__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__30658__auto__ = function(state_32620){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__30658__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__30658__auto____1.call(this,state_32620);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__30658__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__30658__auto____0;
cljs$core$async$transduce_$_state_machine__30658__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__30658__auto____1;
return cljs$core$async$transduce_$_state_machine__30658__auto__;
})()
})();
var state__31649__auto__ = (function (){var statearr_32645 = f__31648__auto__();
(statearr_32645[(6)] = c__31647__auto__);

return statearr_32645;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31649__auto__);
}));

return c__31647__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__32652 = arguments.length;
switch (G__32652) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__31647__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31648__auto__ = (function (){var switch__30657__auto__ = (function (state_32686){
var state_val_32687 = (state_32686[(1)]);
if((state_val_32687 === (7))){
var inst_32660 = (state_32686[(2)]);
var state_32686__$1 = state_32686;
var statearr_32690_35373 = state_32686__$1;
(statearr_32690_35373[(2)] = inst_32660);

(statearr_32690_35373[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32687 === (1))){
var inst_32654 = cljs.core.seq(coll);
var inst_32655 = inst_32654;
var state_32686__$1 = (function (){var statearr_32692 = state_32686;
(statearr_32692[(7)] = inst_32655);

return statearr_32692;
})();
var statearr_32696_35374 = state_32686__$1;
(statearr_32696_35374[(2)] = null);

(statearr_32696_35374[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32687 === (4))){
var inst_32655 = (state_32686[(7)]);
var inst_32658 = cljs.core.first(inst_32655);
var state_32686__$1 = state_32686;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32686__$1,(7),ch,inst_32658);
} else {
if((state_val_32687 === (13))){
var inst_32677 = (state_32686[(2)]);
var state_32686__$1 = state_32686;
var statearr_32701_35376 = state_32686__$1;
(statearr_32701_35376[(2)] = inst_32677);

(statearr_32701_35376[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32687 === (6))){
var inst_32663 = (state_32686[(2)]);
var state_32686__$1 = state_32686;
if(cljs.core.truth_(inst_32663)){
var statearr_32703_35377 = state_32686__$1;
(statearr_32703_35377[(1)] = (8));

} else {
var statearr_32704_35378 = state_32686__$1;
(statearr_32704_35378[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32687 === (3))){
var inst_32681 = (state_32686[(2)]);
var state_32686__$1 = state_32686;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32686__$1,inst_32681);
} else {
if((state_val_32687 === (12))){
var state_32686__$1 = state_32686;
var statearr_32709_35379 = state_32686__$1;
(statearr_32709_35379[(2)] = null);

(statearr_32709_35379[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32687 === (2))){
var inst_32655 = (state_32686[(7)]);
var state_32686__$1 = state_32686;
if(cljs.core.truth_(inst_32655)){
var statearr_32710_35381 = state_32686__$1;
(statearr_32710_35381[(1)] = (4));

} else {
var statearr_32711_35382 = state_32686__$1;
(statearr_32711_35382[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32687 === (11))){
var inst_32674 = cljs.core.async.close_BANG_(ch);
var state_32686__$1 = state_32686;
var statearr_32713_35383 = state_32686__$1;
(statearr_32713_35383[(2)] = inst_32674);

(statearr_32713_35383[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32687 === (9))){
var state_32686__$1 = state_32686;
if(cljs.core.truth_(close_QMARK_)){
var statearr_32718_35384 = state_32686__$1;
(statearr_32718_35384[(1)] = (11));

} else {
var statearr_32726_35385 = state_32686__$1;
(statearr_32726_35385[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32687 === (5))){
var inst_32655 = (state_32686[(7)]);
var state_32686__$1 = state_32686;
var statearr_32731_35389 = state_32686__$1;
(statearr_32731_35389[(2)] = inst_32655);

(statearr_32731_35389[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32687 === (10))){
var inst_32679 = (state_32686[(2)]);
var state_32686__$1 = state_32686;
var statearr_32734_35390 = state_32686__$1;
(statearr_32734_35390[(2)] = inst_32679);

(statearr_32734_35390[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32687 === (8))){
var inst_32655 = (state_32686[(7)]);
var inst_32669 = cljs.core.next(inst_32655);
var inst_32655__$1 = inst_32669;
var state_32686__$1 = (function (){var statearr_32735 = state_32686;
(statearr_32735[(7)] = inst_32655__$1);

return statearr_32735;
})();
var statearr_32740_35392 = state_32686__$1;
(statearr_32740_35392[(2)] = null);

(statearr_32740_35392[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__30658__auto__ = null;
var cljs$core$async$state_machine__30658__auto____0 = (function (){
var statearr_32746 = [null,null,null,null,null,null,null,null];
(statearr_32746[(0)] = cljs$core$async$state_machine__30658__auto__);

(statearr_32746[(1)] = (1));

return statearr_32746;
});
var cljs$core$async$state_machine__30658__auto____1 = (function (state_32686){
while(true){
var ret_value__30659__auto__ = (function (){try{while(true){
var result__30660__auto__ = switch__30657__auto__(state_32686);
if(cljs.core.keyword_identical_QMARK_(result__30660__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30660__auto__;
}
break;
}
}catch (e32752){var ex__30661__auto__ = e32752;
var statearr_32755_35393 = state_32686;
(statearr_32755_35393[(2)] = ex__30661__auto__);


if(cljs.core.seq((state_32686[(4)]))){
var statearr_32756_35395 = state_32686;
(statearr_32756_35395[(1)] = cljs.core.first((state_32686[(4)])));

} else {
throw ex__30661__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30659__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35396 = state_32686;
state_32686 = G__35396;
continue;
} else {
return ret_value__30659__auto__;
}
break;
}
});
cljs$core$async$state_machine__30658__auto__ = function(state_32686){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30658__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30658__auto____1.call(this,state_32686);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30658__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30658__auto____0;
cljs$core$async$state_machine__30658__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30658__auto____1;
return cljs$core$async$state_machine__30658__auto__;
})()
})();
var state__31649__auto__ = (function (){var statearr_32760 = f__31648__auto__();
(statearr_32760[(6)] = c__31647__auto__);

return statearr_32760;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31649__auto__);
}));

return c__31647__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__32773 = arguments.length;
switch (G__32773) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_35398 = (function (_){
var x__5350__auto__ = (((_ == null))?null:_);
var m__5351__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5351__auto__.call(null,_));
} else {
var m__5349__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5349__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_35398(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_35402 = (function (m,ch,close_QMARK_){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5351__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__5349__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5349__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_35402(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_35410 = (function (m,ch){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5351__auto__.call(null,m,ch));
} else {
var m__5349__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5349__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_35410(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_35411 = (function (m){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5351__auto__.call(null,m));
} else {
var m__5349__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5349__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_35411(m);
}
});


/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32828 = (function (ch,cs,meta32829){
this.ch = ch;
this.cs = cs;
this.meta32829 = meta32829;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32828.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32830,meta32829__$1){
var self__ = this;
var _32830__$1 = this;
return (new cljs.core.async.t_cljs$core$async32828(self__.ch,self__.cs,meta32829__$1));
}));

(cljs.core.async.t_cljs$core$async32828.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32830){
var self__ = this;
var _32830__$1 = this;
return self__.meta32829;
}));

(cljs.core.async.t_cljs$core$async32828.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32828.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async32828.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32828.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async32828.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async32828.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async32828.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta32829","meta32829",-1753990631,null)], null);
}));

(cljs.core.async.t_cljs$core$async32828.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32828.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32828");

(cljs.core.async.t_cljs$core$async32828.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async32828");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32828.
 */
cljs.core.async.__GT_t_cljs$core$async32828 = (function cljs$core$async$__GT_t_cljs$core$async32828(ch,cs,meta32829){
return (new cljs.core.async.t_cljs$core$async32828(ch,cs,meta32829));
});


/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (new cljs.core.async.t_cljs$core$async32828(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__31647__auto___35415 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31648__auto__ = (function (){var switch__30657__auto__ = (function (state_33007){
var state_val_33008 = (state_33007[(1)]);
if((state_val_33008 === (7))){
var inst_33003 = (state_33007[(2)]);
var state_33007__$1 = state_33007;
var statearr_33015_35416 = state_33007__$1;
(statearr_33015_35416[(2)] = inst_33003);

(statearr_33015_35416[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33008 === (20))){
var inst_32882 = (state_33007[(7)]);
var inst_32894 = cljs.core.first(inst_32882);
var inst_32895 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32894,(0),null);
var inst_32896 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32894,(1),null);
var state_33007__$1 = (function (){var statearr_33019 = state_33007;
(statearr_33019[(8)] = inst_32895);

return statearr_33019;
})();
if(cljs.core.truth_(inst_32896)){
var statearr_33021_35421 = state_33007__$1;
(statearr_33021_35421[(1)] = (22));

} else {
var statearr_33022_35422 = state_33007__$1;
(statearr_33022_35422[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33008 === (27))){
var inst_32931 = (state_33007[(9)]);
var inst_32924 = (state_33007[(10)]);
var inst_32848 = (state_33007[(11)]);
var inst_32926 = (state_33007[(12)]);
var inst_32931__$1 = cljs.core._nth(inst_32924,inst_32926);
var inst_32932 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_32931__$1,inst_32848,done);
var state_33007__$1 = (function (){var statearr_33026 = state_33007;
(statearr_33026[(9)] = inst_32931__$1);

return statearr_33026;
})();
if(cljs.core.truth_(inst_32932)){
var statearr_33031_35425 = state_33007__$1;
(statearr_33031_35425[(1)] = (30));

} else {
var statearr_33035_35426 = state_33007__$1;
(statearr_33035_35426[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33008 === (1))){
var state_33007__$1 = state_33007;
var statearr_33036_35427 = state_33007__$1;
(statearr_33036_35427[(2)] = null);

(statearr_33036_35427[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33008 === (24))){
var inst_32882 = (state_33007[(7)]);
var inst_32901 = (state_33007[(2)]);
var inst_32902 = cljs.core.next(inst_32882);
var inst_32857 = inst_32902;
var inst_32858 = null;
var inst_32859 = (0);
var inst_32860 = (0);
var state_33007__$1 = (function (){var statearr_33039 = state_33007;
(statearr_33039[(13)] = inst_32857);

(statearr_33039[(14)] = inst_32859);

(statearr_33039[(15)] = inst_32860);

(statearr_33039[(16)] = inst_32901);

(statearr_33039[(17)] = inst_32858);

return statearr_33039;
})();
var statearr_33040_35431 = state_33007__$1;
(statearr_33040_35431[(2)] = null);

(statearr_33040_35431[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33008 === (39))){
var state_33007__$1 = state_33007;
var statearr_33050_35433 = state_33007__$1;
(statearr_33050_35433[(2)] = null);

(statearr_33050_35433[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33008 === (4))){
var inst_32848 = (state_33007[(11)]);
var inst_32848__$1 = (state_33007[(2)]);
var inst_32849 = (inst_32848__$1 == null);
var state_33007__$1 = (function (){var statearr_33051 = state_33007;
(statearr_33051[(11)] = inst_32848__$1);

return statearr_33051;
})();
if(cljs.core.truth_(inst_32849)){
var statearr_33052_35434 = state_33007__$1;
(statearr_33052_35434[(1)] = (5));

} else {
var statearr_33053_35435 = state_33007__$1;
(statearr_33053_35435[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33008 === (15))){
var inst_32857 = (state_33007[(13)]);
var inst_32859 = (state_33007[(14)]);
var inst_32860 = (state_33007[(15)]);
var inst_32858 = (state_33007[(17)]);
var inst_32875 = (state_33007[(2)]);
var inst_32876 = (inst_32860 + (1));
var tmp33045 = inst_32857;
var tmp33046 = inst_32859;
var tmp33047 = inst_32858;
var inst_32857__$1 = tmp33045;
var inst_32858__$1 = tmp33047;
var inst_32859__$1 = tmp33046;
var inst_32860__$1 = inst_32876;
var state_33007__$1 = (function (){var statearr_33054 = state_33007;
(statearr_33054[(13)] = inst_32857__$1);

(statearr_33054[(14)] = inst_32859__$1);

(statearr_33054[(15)] = inst_32860__$1);

(statearr_33054[(17)] = inst_32858__$1);

(statearr_33054[(18)] = inst_32875);

return statearr_33054;
})();
var statearr_33055_35437 = state_33007__$1;
(statearr_33055_35437[(2)] = null);

(statearr_33055_35437[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33008 === (21))){
var inst_32905 = (state_33007[(2)]);
var state_33007__$1 = state_33007;
var statearr_33059_35438 = state_33007__$1;
(statearr_33059_35438[(2)] = inst_32905);

(statearr_33059_35438[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33008 === (31))){
var inst_32931 = (state_33007[(9)]);
var inst_32935 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_32931);
var state_33007__$1 = state_33007;
var statearr_33068_35439 = state_33007__$1;
(statearr_33068_35439[(2)] = inst_32935);

(statearr_33068_35439[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33008 === (32))){
var inst_32924 = (state_33007[(10)]);
var inst_32925 = (state_33007[(19)]);
var inst_32926 = (state_33007[(12)]);
var inst_32923 = (state_33007[(20)]);
var inst_32937 = (state_33007[(2)]);
var inst_32939 = (inst_32926 + (1));
var tmp33056 = inst_32924;
var tmp33057 = inst_32925;
var tmp33058 = inst_32923;
var inst_32923__$1 = tmp33058;
var inst_32924__$1 = tmp33056;
var inst_32925__$1 = tmp33057;
var inst_32926__$1 = inst_32939;
var state_33007__$1 = (function (){var statearr_33069 = state_33007;
(statearr_33069[(10)] = inst_32924__$1);

(statearr_33069[(19)] = inst_32925__$1);

(statearr_33069[(12)] = inst_32926__$1);

(statearr_33069[(20)] = inst_32923__$1);

(statearr_33069[(21)] = inst_32937);

return statearr_33069;
})();
var statearr_33070_35440 = state_33007__$1;
(statearr_33070_35440[(2)] = null);

(statearr_33070_35440[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33008 === (40))){
var inst_32952 = (state_33007[(22)]);
var inst_32956 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_32952);
var state_33007__$1 = state_33007;
var statearr_33071_35445 = state_33007__$1;
(statearr_33071_35445[(2)] = inst_32956);

(statearr_33071_35445[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33008 === (33))){
var inst_32943 = (state_33007[(23)]);
var inst_32945 = cljs.core.chunked_seq_QMARK_(inst_32943);
var state_33007__$1 = state_33007;
if(inst_32945){
var statearr_33072_35459 = state_33007__$1;
(statearr_33072_35459[(1)] = (36));

} else {
var statearr_33073_35460 = state_33007__$1;
(statearr_33073_35460[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33008 === (13))){
var inst_32869 = (state_33007[(24)]);
var inst_32872 = cljs.core.async.close_BANG_(inst_32869);
var state_33007__$1 = state_33007;
var statearr_33077_35461 = state_33007__$1;
(statearr_33077_35461[(2)] = inst_32872);

(statearr_33077_35461[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33008 === (22))){
var inst_32895 = (state_33007[(8)]);
var inst_32898 = cljs.core.async.close_BANG_(inst_32895);
var state_33007__$1 = state_33007;
var statearr_33080_35462 = state_33007__$1;
(statearr_33080_35462[(2)] = inst_32898);

(statearr_33080_35462[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33008 === (36))){
var inst_32943 = (state_33007[(23)]);
var inst_32947 = cljs.core.chunk_first(inst_32943);
var inst_32948 = cljs.core.chunk_rest(inst_32943);
var inst_32949 = cljs.core.count(inst_32947);
var inst_32923 = inst_32948;
var inst_32924 = inst_32947;
var inst_32925 = inst_32949;
var inst_32926 = (0);
var state_33007__$1 = (function (){var statearr_33083 = state_33007;
(statearr_33083[(10)] = inst_32924);

(statearr_33083[(19)] = inst_32925);

(statearr_33083[(12)] = inst_32926);

(statearr_33083[(20)] = inst_32923);

return statearr_33083;
})();
var statearr_33084_35467 = state_33007__$1;
(statearr_33084_35467[(2)] = null);

(statearr_33084_35467[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33008 === (41))){
var inst_32943 = (state_33007[(23)]);
var inst_32958 = (state_33007[(2)]);
var inst_32959 = cljs.core.next(inst_32943);
var inst_32923 = inst_32959;
var inst_32924 = null;
var inst_32925 = (0);
var inst_32926 = (0);
var state_33007__$1 = (function (){var statearr_33085 = state_33007;
(statearr_33085[(10)] = inst_32924);

(statearr_33085[(25)] = inst_32958);

(statearr_33085[(19)] = inst_32925);

(statearr_33085[(12)] = inst_32926);

(statearr_33085[(20)] = inst_32923);

return statearr_33085;
})();
var statearr_33086_35471 = state_33007__$1;
(statearr_33086_35471[(2)] = null);

(statearr_33086_35471[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33008 === (43))){
var state_33007__$1 = state_33007;
var statearr_33087_35472 = state_33007__$1;
(statearr_33087_35472[(2)] = null);

(statearr_33087_35472[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33008 === (29))){
var inst_32967 = (state_33007[(2)]);
var state_33007__$1 = state_33007;
var statearr_33088_35477 = state_33007__$1;
(statearr_33088_35477[(2)] = inst_32967);

(statearr_33088_35477[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33008 === (44))){
var inst_33000 = (state_33007[(2)]);
var state_33007__$1 = (function (){var statearr_33089 = state_33007;
(statearr_33089[(26)] = inst_33000);

return statearr_33089;
})();
var statearr_33090_35478 = state_33007__$1;
(statearr_33090_35478[(2)] = null);

(statearr_33090_35478[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33008 === (6))){
var inst_32915 = (state_33007[(27)]);
var inst_32914 = cljs.core.deref(cs);
var inst_32915__$1 = cljs.core.keys(inst_32914);
var inst_32916 = cljs.core.count(inst_32915__$1);
var inst_32917 = cljs.core.reset_BANG_(dctr,inst_32916);
var inst_32922 = cljs.core.seq(inst_32915__$1);
var inst_32923 = inst_32922;
var inst_32924 = null;
var inst_32925 = (0);
var inst_32926 = (0);
var state_33007__$1 = (function (){var statearr_33092 = state_33007;
(statearr_33092[(28)] = inst_32917);

(statearr_33092[(27)] = inst_32915__$1);

(statearr_33092[(10)] = inst_32924);

(statearr_33092[(19)] = inst_32925);

(statearr_33092[(12)] = inst_32926);

(statearr_33092[(20)] = inst_32923);

return statearr_33092;
})();
var statearr_33094_35496 = state_33007__$1;
(statearr_33094_35496[(2)] = null);

(statearr_33094_35496[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33008 === (28))){
var inst_32943 = (state_33007[(23)]);
var inst_32923 = (state_33007[(20)]);
var inst_32943__$1 = cljs.core.seq(inst_32923);
var state_33007__$1 = (function (){var statearr_33095 = state_33007;
(statearr_33095[(23)] = inst_32943__$1);

return statearr_33095;
})();
if(inst_32943__$1){
var statearr_33096_35497 = state_33007__$1;
(statearr_33096_35497[(1)] = (33));

} else {
var statearr_33098_35498 = state_33007__$1;
(statearr_33098_35498[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33008 === (25))){
var inst_32925 = (state_33007[(19)]);
var inst_32926 = (state_33007[(12)]);
var inst_32928 = (inst_32926 < inst_32925);
var inst_32929 = inst_32928;
var state_33007__$1 = state_33007;
if(cljs.core.truth_(inst_32929)){
var statearr_33103_35499 = state_33007__$1;
(statearr_33103_35499[(1)] = (27));

} else {
var statearr_33104_35500 = state_33007__$1;
(statearr_33104_35500[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33008 === (34))){
var state_33007__$1 = state_33007;
var statearr_33105_35501 = state_33007__$1;
(statearr_33105_35501[(2)] = null);

(statearr_33105_35501[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33008 === (17))){
var state_33007__$1 = state_33007;
var statearr_33111_35502 = state_33007__$1;
(statearr_33111_35502[(2)] = null);

(statearr_33111_35502[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33008 === (3))){
var inst_33005 = (state_33007[(2)]);
var state_33007__$1 = state_33007;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33007__$1,inst_33005);
} else {
if((state_val_33008 === (12))){
var inst_32910 = (state_33007[(2)]);
var state_33007__$1 = state_33007;
var statearr_33112_35514 = state_33007__$1;
(statearr_33112_35514[(2)] = inst_32910);

(statearr_33112_35514[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33008 === (2))){
var state_33007__$1 = state_33007;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33007__$1,(4),ch);
} else {
if((state_val_33008 === (23))){
var state_33007__$1 = state_33007;
var statearr_33113_35515 = state_33007__$1;
(statearr_33113_35515[(2)] = null);

(statearr_33113_35515[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33008 === (35))){
var inst_32965 = (state_33007[(2)]);
var state_33007__$1 = state_33007;
var statearr_33115_35520 = state_33007__$1;
(statearr_33115_35520[(2)] = inst_32965);

(statearr_33115_35520[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33008 === (19))){
var inst_32882 = (state_33007[(7)]);
var inst_32886 = cljs.core.chunk_first(inst_32882);
var inst_32887 = cljs.core.chunk_rest(inst_32882);
var inst_32888 = cljs.core.count(inst_32886);
var inst_32857 = inst_32887;
var inst_32858 = inst_32886;
var inst_32859 = inst_32888;
var inst_32860 = (0);
var state_33007__$1 = (function (){var statearr_33117 = state_33007;
(statearr_33117[(13)] = inst_32857);

(statearr_33117[(14)] = inst_32859);

(statearr_33117[(15)] = inst_32860);

(statearr_33117[(17)] = inst_32858);

return statearr_33117;
})();
var statearr_33119_35528 = state_33007__$1;
(statearr_33119_35528[(2)] = null);

(statearr_33119_35528[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33008 === (11))){
var inst_32882 = (state_33007[(7)]);
var inst_32857 = (state_33007[(13)]);
var inst_32882__$1 = cljs.core.seq(inst_32857);
var state_33007__$1 = (function (){var statearr_33122 = state_33007;
(statearr_33122[(7)] = inst_32882__$1);

return statearr_33122;
})();
if(inst_32882__$1){
var statearr_33126_35529 = state_33007__$1;
(statearr_33126_35529[(1)] = (16));

} else {
var statearr_33127_35530 = state_33007__$1;
(statearr_33127_35530[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33008 === (9))){
var inst_32912 = (state_33007[(2)]);
var state_33007__$1 = state_33007;
var statearr_33128_35531 = state_33007__$1;
(statearr_33128_35531[(2)] = inst_32912);

(statearr_33128_35531[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33008 === (5))){
var inst_32855 = cljs.core.deref(cs);
var inst_32856 = cljs.core.seq(inst_32855);
var inst_32857 = inst_32856;
var inst_32858 = null;
var inst_32859 = (0);
var inst_32860 = (0);
var state_33007__$1 = (function (){var statearr_33131 = state_33007;
(statearr_33131[(13)] = inst_32857);

(statearr_33131[(14)] = inst_32859);

(statearr_33131[(15)] = inst_32860);

(statearr_33131[(17)] = inst_32858);

return statearr_33131;
})();
var statearr_33132_35533 = state_33007__$1;
(statearr_33132_35533[(2)] = null);

(statearr_33132_35533[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33008 === (14))){
var state_33007__$1 = state_33007;
var statearr_33133_35534 = state_33007__$1;
(statearr_33133_35534[(2)] = null);

(statearr_33133_35534[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33008 === (45))){
var inst_32991 = (state_33007[(2)]);
var state_33007__$1 = state_33007;
var statearr_33134_35536 = state_33007__$1;
(statearr_33134_35536[(2)] = inst_32991);

(statearr_33134_35536[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33008 === (26))){
var inst_32915 = (state_33007[(27)]);
var inst_32969 = (state_33007[(2)]);
var inst_32970 = cljs.core.seq(inst_32915);
var state_33007__$1 = (function (){var statearr_33136 = state_33007;
(statearr_33136[(29)] = inst_32969);

return statearr_33136;
})();
if(inst_32970){
var statearr_33140_35538 = state_33007__$1;
(statearr_33140_35538[(1)] = (42));

} else {
var statearr_33141_35542 = state_33007__$1;
(statearr_33141_35542[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33008 === (16))){
var inst_32882 = (state_33007[(7)]);
var inst_32884 = cljs.core.chunked_seq_QMARK_(inst_32882);
var state_33007__$1 = state_33007;
if(inst_32884){
var statearr_33142_35544 = state_33007__$1;
(statearr_33142_35544[(1)] = (19));

} else {
var statearr_33143_35545 = state_33007__$1;
(statearr_33143_35545[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33008 === (38))){
var inst_32962 = (state_33007[(2)]);
var state_33007__$1 = state_33007;
var statearr_33144_35547 = state_33007__$1;
(statearr_33144_35547[(2)] = inst_32962);

(statearr_33144_35547[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33008 === (30))){
var state_33007__$1 = state_33007;
var statearr_33145_35548 = state_33007__$1;
(statearr_33145_35548[(2)] = null);

(statearr_33145_35548[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33008 === (10))){
var inst_32860 = (state_33007[(15)]);
var inst_32858 = (state_33007[(17)]);
var inst_32868 = cljs.core._nth(inst_32858,inst_32860);
var inst_32869 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32868,(0),null);
var inst_32870 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32868,(1),null);
var state_33007__$1 = (function (){var statearr_33147 = state_33007;
(statearr_33147[(24)] = inst_32869);

return statearr_33147;
})();
if(cljs.core.truth_(inst_32870)){
var statearr_33148_35550 = state_33007__$1;
(statearr_33148_35550[(1)] = (13));

} else {
var statearr_33149_35551 = state_33007__$1;
(statearr_33149_35551[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33008 === (18))){
var inst_32908 = (state_33007[(2)]);
var state_33007__$1 = state_33007;
var statearr_33151_35552 = state_33007__$1;
(statearr_33151_35552[(2)] = inst_32908);

(statearr_33151_35552[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33008 === (42))){
var state_33007__$1 = state_33007;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33007__$1,(45),dchan);
} else {
if((state_val_33008 === (37))){
var inst_32943 = (state_33007[(23)]);
var inst_32848 = (state_33007[(11)]);
var inst_32952 = (state_33007[(22)]);
var inst_32952__$1 = cljs.core.first(inst_32943);
var inst_32953 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_32952__$1,inst_32848,done);
var state_33007__$1 = (function (){var statearr_33152 = state_33007;
(statearr_33152[(22)] = inst_32952__$1);

return statearr_33152;
})();
if(cljs.core.truth_(inst_32953)){
var statearr_33159_35563 = state_33007__$1;
(statearr_33159_35563[(1)] = (39));

} else {
var statearr_33161_35569 = state_33007__$1;
(statearr_33161_35569[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33008 === (8))){
var inst_32859 = (state_33007[(14)]);
var inst_32860 = (state_33007[(15)]);
var inst_32862 = (inst_32860 < inst_32859);
var inst_32863 = inst_32862;
var state_33007__$1 = state_33007;
if(cljs.core.truth_(inst_32863)){
var statearr_33168_35582 = state_33007__$1;
(statearr_33168_35582[(1)] = (10));

} else {
var statearr_33169_35583 = state_33007__$1;
(statearr_33169_35583[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__30658__auto__ = null;
var cljs$core$async$mult_$_state_machine__30658__auto____0 = (function (){
var statearr_33177 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33177[(0)] = cljs$core$async$mult_$_state_machine__30658__auto__);

(statearr_33177[(1)] = (1));

return statearr_33177;
});
var cljs$core$async$mult_$_state_machine__30658__auto____1 = (function (state_33007){
while(true){
var ret_value__30659__auto__ = (function (){try{while(true){
var result__30660__auto__ = switch__30657__auto__(state_33007);
if(cljs.core.keyword_identical_QMARK_(result__30660__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30660__auto__;
}
break;
}
}catch (e33178){var ex__30661__auto__ = e33178;
var statearr_33183_35591 = state_33007;
(statearr_33183_35591[(2)] = ex__30661__auto__);


if(cljs.core.seq((state_33007[(4)]))){
var statearr_33191_35592 = state_33007;
(statearr_33191_35592[(1)] = cljs.core.first((state_33007[(4)])));

} else {
throw ex__30661__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30659__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35593 = state_33007;
state_33007 = G__35593;
continue;
} else {
return ret_value__30659__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__30658__auto__ = function(state_33007){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__30658__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__30658__auto____1.call(this,state_33007);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__30658__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__30658__auto____0;
cljs$core$async$mult_$_state_machine__30658__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__30658__auto____1;
return cljs$core$async$mult_$_state_machine__30658__auto__;
})()
})();
var state__31649__auto__ = (function (){var statearr_33195 = f__31648__auto__();
(statearr_33195[(6)] = c__31647__auto___35415);

return statearr_33195;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31649__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__33204 = arguments.length;
switch (G__33204) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_35621 = (function (m,ch){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5351__auto__.call(null,m,ch));
} else {
var m__5349__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5349__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_35621(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_35626 = (function (m,ch){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5351__auto__.call(null,m,ch));
} else {
var m__5349__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5349__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_35626(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_35628 = (function (m){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5351__auto__.call(null,m));
} else {
var m__5349__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5349__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_35628(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_35629 = (function (m,state_map){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5351__auto__.call(null,m,state_map));
} else {
var m__5349__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5349__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_35629(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_35634 = (function (m,mode){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5351__auto__.call(null,m,mode));
} else {
var m__5349__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5349__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_35634(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5732__auto__ = [];
var len__5726__auto___35644 = arguments.length;
var i__5727__auto___35645 = (0);
while(true){
if((i__5727__auto___35645 < len__5726__auto___35644)){
args__5732__auto__.push((arguments[i__5727__auto___35645]));

var G__35646 = (i__5727__auto___35645 + (1));
i__5727__auto___35645 = G__35646;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((3) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5733__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__33262){
var map__33263 = p__33262;
var map__33263__$1 = cljs.core.__destructure_map(map__33263);
var opts = map__33263__$1;
var statearr_33266_35654 = state;
(statearr_33266_35654[(1)] = cont_block);


var temp__5804__auto__ = cljs.core.async.do_alts((function (val){
var statearr_33269_35655 = state;
(statearr_33269_35655[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5804__auto__)){
var cb = temp__5804__auto__;
var statearr_33271_35656 = state;
(statearr_33271_35656[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq33258){
var G__33259 = cljs.core.first(seq33258);
var seq33258__$1 = cljs.core.next(seq33258);
var G__33260 = cljs.core.first(seq33258__$1);
var seq33258__$2 = cljs.core.next(seq33258__$1);
var G__33261 = cljs.core.first(seq33258__$2);
var seq33258__$3 = cljs.core.next(seq33258__$2);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33259,G__33260,G__33261,seq33258__$3);
}));


/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33288 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta33289){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta33289 = meta33289;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33288.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33290,meta33289__$1){
var self__ = this;
var _33290__$1 = this;
return (new cljs.core.async.t_cljs$core$async33288(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta33289__$1));
}));

(cljs.core.async.t_cljs$core$async33288.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33290){
var self__ = this;
var _33290__$1 = this;
return self__.meta33289;
}));

(cljs.core.async.t_cljs$core$async33288.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33288.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async33288.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33288.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async33288.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async33288.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async33288.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async33288.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async33288.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta33289","meta33289",212226923,null)], null);
}));

(cljs.core.async.t_cljs$core$async33288.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33288.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33288");

(cljs.core.async.t_cljs$core$async33288.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async33288");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33288.
 */
cljs.core.async.__GT_t_cljs$core$async33288 = (function cljs$core$async$__GT_t_cljs$core$async33288(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta33289){
return (new cljs.core.async.t_cljs$core$async33288(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta33289));
});


/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (new cljs.core.async.t_cljs$core$async33288(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
var c__31647__auto___35672 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31648__auto__ = (function (){var switch__30657__auto__ = (function (state_33400){
var state_val_33401 = (state_33400[(1)]);
if((state_val_33401 === (7))){
var inst_33355 = (state_33400[(2)]);
var state_33400__$1 = state_33400;
if(cljs.core.truth_(inst_33355)){
var statearr_33404_35674 = state_33400__$1;
(statearr_33404_35674[(1)] = (8));

} else {
var statearr_33405_35675 = state_33400__$1;
(statearr_33405_35675[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33401 === (20))){
var inst_33346 = (state_33400[(7)]);
var state_33400__$1 = state_33400;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33400__$1,(23),out,inst_33346);
} else {
if((state_val_33401 === (1))){
var inst_33328 = calc_state();
var inst_33329 = cljs.core.__destructure_map(inst_33328);
var inst_33330 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33329,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_33331 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33329,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_33332 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33329,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_33333 = inst_33328;
var state_33400__$1 = (function (){var statearr_33409 = state_33400;
(statearr_33409[(8)] = inst_33332);

(statearr_33409[(9)] = inst_33330);

(statearr_33409[(10)] = inst_33331);

(statearr_33409[(11)] = inst_33333);

return statearr_33409;
})();
var statearr_33410_35676 = state_33400__$1;
(statearr_33410_35676[(2)] = null);

(statearr_33410_35676[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33401 === (24))){
var inst_33337 = (state_33400[(12)]);
var inst_33333 = inst_33337;
var state_33400__$1 = (function (){var statearr_33412 = state_33400;
(statearr_33412[(11)] = inst_33333);

return statearr_33412;
})();
var statearr_33413_35678 = state_33400__$1;
(statearr_33413_35678[(2)] = null);

(statearr_33413_35678[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33401 === (4))){
var inst_33346 = (state_33400[(7)]);
var inst_33348 = (state_33400[(13)]);
var inst_33345 = (state_33400[(2)]);
var inst_33346__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33345,(0),null);
var inst_33347 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33345,(1),null);
var inst_33348__$1 = (inst_33346__$1 == null);
var state_33400__$1 = (function (){var statearr_33414 = state_33400;
(statearr_33414[(14)] = inst_33347);

(statearr_33414[(7)] = inst_33346__$1);

(statearr_33414[(13)] = inst_33348__$1);

return statearr_33414;
})();
if(cljs.core.truth_(inst_33348__$1)){
var statearr_33415_35681 = state_33400__$1;
(statearr_33415_35681[(1)] = (5));

} else {
var statearr_33416_35682 = state_33400__$1;
(statearr_33416_35682[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33401 === (15))){
var inst_33370 = (state_33400[(15)]);
var inst_33338 = (state_33400[(16)]);
var inst_33370__$1 = cljs.core.empty_QMARK_(inst_33338);
var state_33400__$1 = (function (){var statearr_33419 = state_33400;
(statearr_33419[(15)] = inst_33370__$1);

return statearr_33419;
})();
if(inst_33370__$1){
var statearr_33421_35684 = state_33400__$1;
(statearr_33421_35684[(1)] = (17));

} else {
var statearr_33422_35685 = state_33400__$1;
(statearr_33422_35685[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33401 === (21))){
var inst_33337 = (state_33400[(12)]);
var inst_33333 = inst_33337;
var state_33400__$1 = (function (){var statearr_33423 = state_33400;
(statearr_33423[(11)] = inst_33333);

return statearr_33423;
})();
var statearr_33424_35690 = state_33400__$1;
(statearr_33424_35690[(2)] = null);

(statearr_33424_35690[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33401 === (13))){
var inst_33362 = (state_33400[(2)]);
var inst_33364 = calc_state();
var inst_33333 = inst_33364;
var state_33400__$1 = (function (){var statearr_33425 = state_33400;
(statearr_33425[(17)] = inst_33362);

(statearr_33425[(11)] = inst_33333);

return statearr_33425;
})();
var statearr_33426_35691 = state_33400__$1;
(statearr_33426_35691[(2)] = null);

(statearr_33426_35691[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33401 === (22))){
var inst_33391 = (state_33400[(2)]);
var state_33400__$1 = state_33400;
var statearr_33427_35692 = state_33400__$1;
(statearr_33427_35692[(2)] = inst_33391);

(statearr_33427_35692[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33401 === (6))){
var inst_33347 = (state_33400[(14)]);
var inst_33352 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_33347,change);
var state_33400__$1 = state_33400;
var statearr_33428_35693 = state_33400__$1;
(statearr_33428_35693[(2)] = inst_33352);

(statearr_33428_35693[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33401 === (25))){
var state_33400__$1 = state_33400;
var statearr_33429_35694 = state_33400__$1;
(statearr_33429_35694[(2)] = null);

(statearr_33429_35694[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33401 === (17))){
var inst_33347 = (state_33400[(14)]);
var inst_33339 = (state_33400[(18)]);
var inst_33373 = (inst_33339.cljs$core$IFn$_invoke$arity$1 ? inst_33339.cljs$core$IFn$_invoke$arity$1(inst_33347) : inst_33339.call(null,inst_33347));
var inst_33374 = cljs.core.not(inst_33373);
var state_33400__$1 = state_33400;
var statearr_33430_35696 = state_33400__$1;
(statearr_33430_35696[(2)] = inst_33374);

(statearr_33430_35696[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33401 === (3))){
var inst_33395 = (state_33400[(2)]);
var state_33400__$1 = state_33400;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33400__$1,inst_33395);
} else {
if((state_val_33401 === (12))){
var state_33400__$1 = state_33400;
var statearr_33431_35699 = state_33400__$1;
(statearr_33431_35699[(2)] = null);

(statearr_33431_35699[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33401 === (2))){
var inst_33337 = (state_33400[(12)]);
var inst_33333 = (state_33400[(11)]);
var inst_33337__$1 = cljs.core.__destructure_map(inst_33333);
var inst_33338 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33337__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_33339 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33337__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_33340 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33337__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_33400__$1 = (function (){var statearr_33435 = state_33400;
(statearr_33435[(12)] = inst_33337__$1);

(statearr_33435[(16)] = inst_33338);

(statearr_33435[(18)] = inst_33339);

return statearr_33435;
})();
return cljs.core.async.ioc_alts_BANG_(state_33400__$1,(4),inst_33340);
} else {
if((state_val_33401 === (23))){
var inst_33382 = (state_33400[(2)]);
var state_33400__$1 = state_33400;
if(cljs.core.truth_(inst_33382)){
var statearr_33437_35702 = state_33400__$1;
(statearr_33437_35702[(1)] = (24));

} else {
var statearr_33438_35703 = state_33400__$1;
(statearr_33438_35703[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33401 === (19))){
var inst_33377 = (state_33400[(2)]);
var state_33400__$1 = state_33400;
var statearr_33439_35704 = state_33400__$1;
(statearr_33439_35704[(2)] = inst_33377);

(statearr_33439_35704[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33401 === (11))){
var inst_33347 = (state_33400[(14)]);
var inst_33359 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_33347);
var state_33400__$1 = state_33400;
var statearr_33440_35709 = state_33400__$1;
(statearr_33440_35709[(2)] = inst_33359);

(statearr_33440_35709[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33401 === (9))){
var inst_33367 = (state_33400[(19)]);
var inst_33347 = (state_33400[(14)]);
var inst_33338 = (state_33400[(16)]);
var inst_33367__$1 = (inst_33338.cljs$core$IFn$_invoke$arity$1 ? inst_33338.cljs$core$IFn$_invoke$arity$1(inst_33347) : inst_33338.call(null,inst_33347));
var state_33400__$1 = (function (){var statearr_33441 = state_33400;
(statearr_33441[(19)] = inst_33367__$1);

return statearr_33441;
})();
if(cljs.core.truth_(inst_33367__$1)){
var statearr_33442_35710 = state_33400__$1;
(statearr_33442_35710[(1)] = (14));

} else {
var statearr_33443_35711 = state_33400__$1;
(statearr_33443_35711[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33401 === (5))){
var inst_33348 = (state_33400[(13)]);
var state_33400__$1 = state_33400;
var statearr_33444_35712 = state_33400__$1;
(statearr_33444_35712[(2)] = inst_33348);

(statearr_33444_35712[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33401 === (14))){
var inst_33367 = (state_33400[(19)]);
var state_33400__$1 = state_33400;
var statearr_33445_35714 = state_33400__$1;
(statearr_33445_35714[(2)] = inst_33367);

(statearr_33445_35714[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33401 === (26))){
var inst_33387 = (state_33400[(2)]);
var state_33400__$1 = state_33400;
var statearr_33447_35715 = state_33400__$1;
(statearr_33447_35715[(2)] = inst_33387);

(statearr_33447_35715[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33401 === (16))){
var inst_33379 = (state_33400[(2)]);
var state_33400__$1 = state_33400;
if(cljs.core.truth_(inst_33379)){
var statearr_33448_35717 = state_33400__$1;
(statearr_33448_35717[(1)] = (20));

} else {
var statearr_33449_35718 = state_33400__$1;
(statearr_33449_35718[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33401 === (10))){
var inst_33393 = (state_33400[(2)]);
var state_33400__$1 = state_33400;
var statearr_33450_35719 = state_33400__$1;
(statearr_33450_35719[(2)] = inst_33393);

(statearr_33450_35719[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33401 === (18))){
var inst_33370 = (state_33400[(15)]);
var state_33400__$1 = state_33400;
var statearr_33451_35728 = state_33400__$1;
(statearr_33451_35728[(2)] = inst_33370);

(statearr_33451_35728[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33401 === (8))){
var inst_33346 = (state_33400[(7)]);
var inst_33357 = (inst_33346 == null);
var state_33400__$1 = state_33400;
if(cljs.core.truth_(inst_33357)){
var statearr_33452_35733 = state_33400__$1;
(statearr_33452_35733[(1)] = (11));

} else {
var statearr_33453_35734 = state_33400__$1;
(statearr_33453_35734[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__30658__auto__ = null;
var cljs$core$async$mix_$_state_machine__30658__auto____0 = (function (){
var statearr_33457 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33457[(0)] = cljs$core$async$mix_$_state_machine__30658__auto__);

(statearr_33457[(1)] = (1));

return statearr_33457;
});
var cljs$core$async$mix_$_state_machine__30658__auto____1 = (function (state_33400){
while(true){
var ret_value__30659__auto__ = (function (){try{while(true){
var result__30660__auto__ = switch__30657__auto__(state_33400);
if(cljs.core.keyword_identical_QMARK_(result__30660__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30660__auto__;
}
break;
}
}catch (e33458){var ex__30661__auto__ = e33458;
var statearr_33459_35741 = state_33400;
(statearr_33459_35741[(2)] = ex__30661__auto__);


if(cljs.core.seq((state_33400[(4)]))){
var statearr_33460_35742 = state_33400;
(statearr_33460_35742[(1)] = cljs.core.first((state_33400[(4)])));

} else {
throw ex__30661__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30659__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35743 = state_33400;
state_33400 = G__35743;
continue;
} else {
return ret_value__30659__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__30658__auto__ = function(state_33400){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__30658__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__30658__auto____1.call(this,state_33400);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__30658__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__30658__auto____0;
cljs$core$async$mix_$_state_machine__30658__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__30658__auto____1;
return cljs$core$async$mix_$_state_machine__30658__auto__;
})()
})();
var state__31649__auto__ = (function (){var statearr_33465 = f__31648__auto__();
(statearr_33465[(6)] = c__31647__auto___35672);

return statearr_33465;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31649__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_35748 = (function (p,v,ch,close_QMARK_){
var x__5350__auto__ = (((p == null))?null:p);
var m__5351__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5351__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__5349__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5349__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_35748(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_35750 = (function (p,v,ch){
var x__5350__auto__ = (((p == null))?null:p);
var m__5351__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5351__auto__.call(null,p,v,ch));
} else {
var m__5349__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5349__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_35750(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_35751 = (function() {
var G__35752 = null;
var G__35752__1 = (function (p){
var x__5350__auto__ = (((p == null))?null:p);
var m__5351__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5351__auto__.call(null,p));
} else {
var m__5349__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5349__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__35752__2 = (function (p,v){
var x__5350__auto__ = (((p == null))?null:p);
var m__5351__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5351__auto__.call(null,p,v));
} else {
var m__5349__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5349__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__35752 = function(p,v){
switch(arguments.length){
case 1:
return G__35752__1.call(this,p);
case 2:
return G__35752__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__35752.cljs$core$IFn$_invoke$arity$1 = G__35752__1;
G__35752.cljs$core$IFn$_invoke$arity$2 = G__35752__2;
return G__35752;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__33515 = arguments.length;
switch (G__33515) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_35751(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_35751(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);



/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33585 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta33586){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta33586 = meta33586;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33585.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33587,meta33586__$1){
var self__ = this;
var _33587__$1 = this;
return (new cljs.core.async.t_cljs$core$async33585(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta33586__$1));
}));

(cljs.core.async.t_cljs$core$async33585.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33587){
var self__ = this;
var _33587__$1 = this;
return self__.meta33586;
}));

(cljs.core.async.t_cljs$core$async33585.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33585.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async33585.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33585.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async33585.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5804__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5804__auto__)){
var m = temp__5804__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async33585.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async33585.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async33585.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta33586","meta33586",476975768,null)], null);
}));

(cljs.core.async.t_cljs$core$async33585.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33585.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33585");

(cljs.core.async.t_cljs$core$async33585.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async33585");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33585.
 */
cljs.core.async.__GT_t_cljs$core$async33585 = (function cljs$core$async$__GT_t_cljs$core$async33585(ch,topic_fn,buf_fn,mults,ensure_mult,meta33586){
return (new cljs.core.async.t_cljs$core$async33585(ch,topic_fn,buf_fn,mults,ensure_mult,meta33586));
});


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__33572 = arguments.length;
switch (G__33572) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__5002__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__33554_SHARP_){
if(cljs.core.truth_((p1__33554_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__33554_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__33554_SHARP_.call(null,topic)))){
return p1__33554_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__33554_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (new cljs.core.async.t_cljs$core$async33585(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
var c__31647__auto___35780 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31648__auto__ = (function (){var switch__30657__auto__ = (function (state_33696){
var state_val_33697 = (state_33696[(1)]);
if((state_val_33697 === (7))){
var inst_33689 = (state_33696[(2)]);
var state_33696__$1 = state_33696;
var statearr_33699_35786 = state_33696__$1;
(statearr_33699_35786[(2)] = inst_33689);

(statearr_33699_35786[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33697 === (20))){
var state_33696__$1 = state_33696;
var statearr_33700_35787 = state_33696__$1;
(statearr_33700_35787[(2)] = null);

(statearr_33700_35787[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33697 === (1))){
var state_33696__$1 = state_33696;
var statearr_33701_35792 = state_33696__$1;
(statearr_33701_35792[(2)] = null);

(statearr_33701_35792[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33697 === (24))){
var inst_33672 = (state_33696[(7)]);
var inst_33681 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_33672);
var state_33696__$1 = state_33696;
var statearr_33706_35797 = state_33696__$1;
(statearr_33706_35797[(2)] = inst_33681);

(statearr_33706_35797[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33697 === (4))){
var inst_33612 = (state_33696[(8)]);
var inst_33612__$1 = (state_33696[(2)]);
var inst_33613 = (inst_33612__$1 == null);
var state_33696__$1 = (function (){var statearr_33709 = state_33696;
(statearr_33709[(8)] = inst_33612__$1);

return statearr_33709;
})();
if(cljs.core.truth_(inst_33613)){
var statearr_33711_35799 = state_33696__$1;
(statearr_33711_35799[(1)] = (5));

} else {
var statearr_33717_35800 = state_33696__$1;
(statearr_33717_35800[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33697 === (15))){
var inst_33666 = (state_33696[(2)]);
var state_33696__$1 = state_33696;
var statearr_33719_35801 = state_33696__$1;
(statearr_33719_35801[(2)] = inst_33666);

(statearr_33719_35801[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33697 === (21))){
var inst_33686 = (state_33696[(2)]);
var state_33696__$1 = (function (){var statearr_33720 = state_33696;
(statearr_33720[(9)] = inst_33686);

return statearr_33720;
})();
var statearr_33721_35802 = state_33696__$1;
(statearr_33721_35802[(2)] = null);

(statearr_33721_35802[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33697 === (13))){
var inst_33640 = (state_33696[(10)]);
var inst_33646 = cljs.core.chunked_seq_QMARK_(inst_33640);
var state_33696__$1 = state_33696;
if(inst_33646){
var statearr_33723_35803 = state_33696__$1;
(statearr_33723_35803[(1)] = (16));

} else {
var statearr_33724_35804 = state_33696__$1;
(statearr_33724_35804[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33697 === (22))){
var inst_33678 = (state_33696[(2)]);
var state_33696__$1 = state_33696;
if(cljs.core.truth_(inst_33678)){
var statearr_33725_35813 = state_33696__$1;
(statearr_33725_35813[(1)] = (23));

} else {
var statearr_33726_35814 = state_33696__$1;
(statearr_33726_35814[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33697 === (6))){
var inst_33674 = (state_33696[(11)]);
var inst_33672 = (state_33696[(7)]);
var inst_33612 = (state_33696[(8)]);
var inst_33672__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_33612) : topic_fn.call(null,inst_33612));
var inst_33673 = cljs.core.deref(mults);
var inst_33674__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33673,inst_33672__$1);
var state_33696__$1 = (function (){var statearr_33727 = state_33696;
(statearr_33727[(11)] = inst_33674__$1);

(statearr_33727[(7)] = inst_33672__$1);

return statearr_33727;
})();
if(cljs.core.truth_(inst_33674__$1)){
var statearr_33728_35815 = state_33696__$1;
(statearr_33728_35815[(1)] = (19));

} else {
var statearr_33729_35816 = state_33696__$1;
(statearr_33729_35816[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33697 === (25))){
var inst_33683 = (state_33696[(2)]);
var state_33696__$1 = state_33696;
var statearr_33735_35817 = state_33696__$1;
(statearr_33735_35817[(2)] = inst_33683);

(statearr_33735_35817[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33697 === (17))){
var inst_33640 = (state_33696[(10)]);
var inst_33657 = cljs.core.first(inst_33640);
var inst_33658 = cljs.core.async.muxch_STAR_(inst_33657);
var inst_33659 = cljs.core.async.close_BANG_(inst_33658);
var inst_33660 = cljs.core.next(inst_33640);
var inst_33622 = inst_33660;
var inst_33623 = null;
var inst_33624 = (0);
var inst_33625 = (0);
var state_33696__$1 = (function (){var statearr_33747 = state_33696;
(statearr_33747[(12)] = inst_33622);

(statearr_33747[(13)] = inst_33624);

(statearr_33747[(14)] = inst_33659);

(statearr_33747[(15)] = inst_33625);

(statearr_33747[(16)] = inst_33623);

return statearr_33747;
})();
var statearr_33755_35820 = state_33696__$1;
(statearr_33755_35820[(2)] = null);

(statearr_33755_35820[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33697 === (3))){
var inst_33691 = (state_33696[(2)]);
var state_33696__$1 = state_33696;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33696__$1,inst_33691);
} else {
if((state_val_33697 === (12))){
var inst_33668 = (state_33696[(2)]);
var state_33696__$1 = state_33696;
var statearr_33756_35821 = state_33696__$1;
(statearr_33756_35821[(2)] = inst_33668);

(statearr_33756_35821[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33697 === (2))){
var state_33696__$1 = state_33696;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33696__$1,(4),ch);
} else {
if((state_val_33697 === (23))){
var state_33696__$1 = state_33696;
var statearr_33757_35822 = state_33696__$1;
(statearr_33757_35822[(2)] = null);

(statearr_33757_35822[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33697 === (19))){
var inst_33674 = (state_33696[(11)]);
var inst_33612 = (state_33696[(8)]);
var inst_33676 = cljs.core.async.muxch_STAR_(inst_33674);
var state_33696__$1 = state_33696;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33696__$1,(22),inst_33676,inst_33612);
} else {
if((state_val_33697 === (11))){
var inst_33622 = (state_33696[(12)]);
var inst_33640 = (state_33696[(10)]);
var inst_33640__$1 = cljs.core.seq(inst_33622);
var state_33696__$1 = (function (){var statearr_33758 = state_33696;
(statearr_33758[(10)] = inst_33640__$1);

return statearr_33758;
})();
if(inst_33640__$1){
var statearr_33769_35823 = state_33696__$1;
(statearr_33769_35823[(1)] = (13));

} else {
var statearr_33773_35825 = state_33696__$1;
(statearr_33773_35825[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33697 === (9))){
var inst_33670 = (state_33696[(2)]);
var state_33696__$1 = state_33696;
var statearr_33774_35827 = state_33696__$1;
(statearr_33774_35827[(2)] = inst_33670);

(statearr_33774_35827[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33697 === (5))){
var inst_33619 = cljs.core.deref(mults);
var inst_33620 = cljs.core.vals(inst_33619);
var inst_33621 = cljs.core.seq(inst_33620);
var inst_33622 = inst_33621;
var inst_33623 = null;
var inst_33624 = (0);
var inst_33625 = (0);
var state_33696__$1 = (function (){var statearr_33775 = state_33696;
(statearr_33775[(12)] = inst_33622);

(statearr_33775[(13)] = inst_33624);

(statearr_33775[(15)] = inst_33625);

(statearr_33775[(16)] = inst_33623);

return statearr_33775;
})();
var statearr_33776_35828 = state_33696__$1;
(statearr_33776_35828[(2)] = null);

(statearr_33776_35828[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33697 === (14))){
var state_33696__$1 = state_33696;
var statearr_33780_35829 = state_33696__$1;
(statearr_33780_35829[(2)] = null);

(statearr_33780_35829[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33697 === (16))){
var inst_33640 = (state_33696[(10)]);
var inst_33648 = cljs.core.chunk_first(inst_33640);
var inst_33653 = cljs.core.chunk_rest(inst_33640);
var inst_33654 = cljs.core.count(inst_33648);
var inst_33622 = inst_33653;
var inst_33623 = inst_33648;
var inst_33624 = inst_33654;
var inst_33625 = (0);
var state_33696__$1 = (function (){var statearr_33785 = state_33696;
(statearr_33785[(12)] = inst_33622);

(statearr_33785[(13)] = inst_33624);

(statearr_33785[(15)] = inst_33625);

(statearr_33785[(16)] = inst_33623);

return statearr_33785;
})();
var statearr_33790_35833 = state_33696__$1;
(statearr_33790_35833[(2)] = null);

(statearr_33790_35833[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33697 === (10))){
var inst_33622 = (state_33696[(12)]);
var inst_33624 = (state_33696[(13)]);
var inst_33625 = (state_33696[(15)]);
var inst_33623 = (state_33696[(16)]);
var inst_33630 = cljs.core._nth(inst_33623,inst_33625);
var inst_33631 = cljs.core.async.muxch_STAR_(inst_33630);
var inst_33632 = cljs.core.async.close_BANG_(inst_33631);
var inst_33633 = (inst_33625 + (1));
var tmp33777 = inst_33622;
var tmp33778 = inst_33624;
var tmp33779 = inst_33623;
var inst_33622__$1 = tmp33777;
var inst_33623__$1 = tmp33779;
var inst_33624__$1 = tmp33778;
var inst_33625__$1 = inst_33633;
var state_33696__$1 = (function (){var statearr_33794 = state_33696;
(statearr_33794[(12)] = inst_33622__$1);

(statearr_33794[(17)] = inst_33632);

(statearr_33794[(13)] = inst_33624__$1);

(statearr_33794[(15)] = inst_33625__$1);

(statearr_33794[(16)] = inst_33623__$1);

return statearr_33794;
})();
var statearr_33798_35834 = state_33696__$1;
(statearr_33798_35834[(2)] = null);

(statearr_33798_35834[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33697 === (18))){
var inst_33663 = (state_33696[(2)]);
var state_33696__$1 = state_33696;
var statearr_33799_35835 = state_33696__$1;
(statearr_33799_35835[(2)] = inst_33663);

(statearr_33799_35835[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33697 === (8))){
var inst_33624 = (state_33696[(13)]);
var inst_33625 = (state_33696[(15)]);
var inst_33627 = (inst_33625 < inst_33624);
var inst_33628 = inst_33627;
var state_33696__$1 = state_33696;
if(cljs.core.truth_(inst_33628)){
var statearr_33800_35836 = state_33696__$1;
(statearr_33800_35836[(1)] = (10));

} else {
var statearr_33801_35837 = state_33696__$1;
(statearr_33801_35837[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__30658__auto__ = null;
var cljs$core$async$state_machine__30658__auto____0 = (function (){
var statearr_33803 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33803[(0)] = cljs$core$async$state_machine__30658__auto__);

(statearr_33803[(1)] = (1));

return statearr_33803;
});
var cljs$core$async$state_machine__30658__auto____1 = (function (state_33696){
while(true){
var ret_value__30659__auto__ = (function (){try{while(true){
var result__30660__auto__ = switch__30657__auto__(state_33696);
if(cljs.core.keyword_identical_QMARK_(result__30660__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30660__auto__;
}
break;
}
}catch (e33805){var ex__30661__auto__ = e33805;
var statearr_33806_35839 = state_33696;
(statearr_33806_35839[(2)] = ex__30661__auto__);


if(cljs.core.seq((state_33696[(4)]))){
var statearr_33808_35840 = state_33696;
(statearr_33808_35840[(1)] = cljs.core.first((state_33696[(4)])));

} else {
throw ex__30661__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30659__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35841 = state_33696;
state_33696 = G__35841;
continue;
} else {
return ret_value__30659__auto__;
}
break;
}
});
cljs$core$async$state_machine__30658__auto__ = function(state_33696){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30658__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30658__auto____1.call(this,state_33696);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30658__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30658__auto____0;
cljs$core$async$state_machine__30658__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30658__auto____1;
return cljs$core$async$state_machine__30658__auto__;
})()
})();
var state__31649__auto__ = (function (){var statearr_33810 = f__31648__auto__();
(statearr_33810[(6)] = c__31647__auto___35780);

return statearr_33810;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31649__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__33823 = arguments.length;
switch (G__33823) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__33852 = arguments.length;
switch (G__33852) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__33855 = arguments.length;
switch (G__33855) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
if((cnt === (0))){
cljs.core.async.close_BANG_(out);
} else {
var c__31647__auto___35850 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31648__auto__ = (function (){var switch__30657__auto__ = (function (state_33924){
var state_val_33925 = (state_33924[(1)]);
if((state_val_33925 === (7))){
var state_33924__$1 = state_33924;
var statearr_33929_35851 = state_33924__$1;
(statearr_33929_35851[(2)] = null);

(statearr_33929_35851[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33925 === (1))){
var state_33924__$1 = state_33924;
var statearr_33930_35856 = state_33924__$1;
(statearr_33930_35856[(2)] = null);

(statearr_33930_35856[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33925 === (4))){
var inst_33861 = (state_33924[(7)]);
var inst_33865 = (state_33924[(8)]);
var inst_33867 = (inst_33865 < inst_33861);
var state_33924__$1 = state_33924;
if(cljs.core.truth_(inst_33867)){
var statearr_33931_35863 = state_33924__$1;
(statearr_33931_35863[(1)] = (6));

} else {
var statearr_33932_35865 = state_33924__$1;
(statearr_33932_35865[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33925 === (15))){
var inst_33902 = (state_33924[(9)]);
var inst_33910 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_33902);
var state_33924__$1 = state_33924;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33924__$1,(17),out,inst_33910);
} else {
if((state_val_33925 === (13))){
var inst_33902 = (state_33924[(9)]);
var inst_33902__$1 = (state_33924[(2)]);
var inst_33903 = cljs.core.some(cljs.core.nil_QMARK_,inst_33902__$1);
var state_33924__$1 = (function (){var statearr_33943 = state_33924;
(statearr_33943[(9)] = inst_33902__$1);

return statearr_33943;
})();
if(cljs.core.truth_(inst_33903)){
var statearr_33947_35881 = state_33924__$1;
(statearr_33947_35881[(1)] = (14));

} else {
var statearr_33954_35882 = state_33924__$1;
(statearr_33954_35882[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33925 === (6))){
var state_33924__$1 = state_33924;
var statearr_33955_35883 = state_33924__$1;
(statearr_33955_35883[(2)] = null);

(statearr_33955_35883[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33925 === (17))){
var inst_33912 = (state_33924[(2)]);
var state_33924__$1 = (function (){var statearr_33966 = state_33924;
(statearr_33966[(10)] = inst_33912);

return statearr_33966;
})();
var statearr_33970_35884 = state_33924__$1;
(statearr_33970_35884[(2)] = null);

(statearr_33970_35884[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33925 === (3))){
var inst_33918 = (state_33924[(2)]);
var state_33924__$1 = state_33924;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33924__$1,inst_33918);
} else {
if((state_val_33925 === (12))){
var _ = (function (){var statearr_33974 = state_33924;
(statearr_33974[(4)] = cljs.core.rest((state_33924[(4)])));

return statearr_33974;
})();
var state_33924__$1 = state_33924;
var ex33958 = (state_33924__$1[(2)]);
var statearr_33979_35889 = state_33924__$1;
(statearr_33979_35889[(5)] = ex33958);


if((ex33958 instanceof Object)){
var statearr_33982_35890 = state_33924__$1;
(statearr_33982_35890[(1)] = (11));

(statearr_33982_35890[(5)] = null);

} else {
throw ex33958;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33925 === (2))){
var inst_33860 = cljs.core.reset_BANG_(dctr,cnt);
var inst_33861 = cnt;
var inst_33865 = (0);
var state_33924__$1 = (function (){var statearr_33985 = state_33924;
(statearr_33985[(11)] = inst_33860);

(statearr_33985[(7)] = inst_33861);

(statearr_33985[(8)] = inst_33865);

return statearr_33985;
})();
var statearr_33986_35897 = state_33924__$1;
(statearr_33986_35897[(2)] = null);

(statearr_33986_35897[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33925 === (11))){
var inst_33871 = (state_33924[(2)]);
var inst_33872 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_33924__$1 = (function (){var statearr_33990 = state_33924;
(statearr_33990[(12)] = inst_33871);

return statearr_33990;
})();
var statearr_33991_35904 = state_33924__$1;
(statearr_33991_35904[(2)] = inst_33872);

(statearr_33991_35904[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33925 === (9))){
var inst_33865 = (state_33924[(8)]);
var _ = (function (){var statearr_33992 = state_33924;
(statearr_33992[(4)] = cljs.core.cons((12),(state_33924[(4)])));

return statearr_33992;
})();
var inst_33879 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_33865) : chs__$1.call(null,inst_33865));
var inst_33880 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_33865) : done.call(null,inst_33865));
var inst_33881 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_33879,inst_33880);
var ___$1 = (function (){var statearr_33993 = state_33924;
(statearr_33993[(4)] = cljs.core.rest((state_33924[(4)])));

return statearr_33993;
})();
var state_33924__$1 = state_33924;
var statearr_33994_35917 = state_33924__$1;
(statearr_33994_35917[(2)] = inst_33881);

(statearr_33994_35917[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33925 === (5))){
var inst_33897 = (state_33924[(2)]);
var state_33924__$1 = (function (){var statearr_33996 = state_33924;
(statearr_33996[(13)] = inst_33897);

return statearr_33996;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33924__$1,(13),dchan);
} else {
if((state_val_33925 === (14))){
var inst_33908 = cljs.core.async.close_BANG_(out);
var state_33924__$1 = state_33924;
var statearr_33998_35918 = state_33924__$1;
(statearr_33998_35918[(2)] = inst_33908);

(statearr_33998_35918[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33925 === (16))){
var inst_33916 = (state_33924[(2)]);
var state_33924__$1 = state_33924;
var statearr_33999_35919 = state_33924__$1;
(statearr_33999_35919[(2)] = inst_33916);

(statearr_33999_35919[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33925 === (10))){
var inst_33865 = (state_33924[(8)]);
var inst_33884 = (state_33924[(2)]);
var inst_33891 = (inst_33865 + (1));
var inst_33865__$1 = inst_33891;
var state_33924__$1 = (function (){var statearr_34003 = state_33924;
(statearr_34003[(8)] = inst_33865__$1);

(statearr_34003[(14)] = inst_33884);

return statearr_34003;
})();
var statearr_34006_35923 = state_33924__$1;
(statearr_34006_35923[(2)] = null);

(statearr_34006_35923[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33925 === (8))){
var inst_33895 = (state_33924[(2)]);
var state_33924__$1 = state_33924;
var statearr_34007_35928 = state_33924__$1;
(statearr_34007_35928[(2)] = inst_33895);

(statearr_34007_35928[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__30658__auto__ = null;
var cljs$core$async$state_machine__30658__auto____0 = (function (){
var statearr_34008 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34008[(0)] = cljs$core$async$state_machine__30658__auto__);

(statearr_34008[(1)] = (1));

return statearr_34008;
});
var cljs$core$async$state_machine__30658__auto____1 = (function (state_33924){
while(true){
var ret_value__30659__auto__ = (function (){try{while(true){
var result__30660__auto__ = switch__30657__auto__(state_33924);
if(cljs.core.keyword_identical_QMARK_(result__30660__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30660__auto__;
}
break;
}
}catch (e34009){var ex__30661__auto__ = e34009;
var statearr_34010_35930 = state_33924;
(statearr_34010_35930[(2)] = ex__30661__auto__);


if(cljs.core.seq((state_33924[(4)]))){
var statearr_34014_35931 = state_33924;
(statearr_34014_35931[(1)] = cljs.core.first((state_33924[(4)])));

} else {
throw ex__30661__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30659__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35932 = state_33924;
state_33924 = G__35932;
continue;
} else {
return ret_value__30659__auto__;
}
break;
}
});
cljs$core$async$state_machine__30658__auto__ = function(state_33924){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30658__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30658__auto____1.call(this,state_33924);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30658__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30658__auto____0;
cljs$core$async$state_machine__30658__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30658__auto____1;
return cljs$core$async$state_machine__30658__auto__;
})()
})();
var state__31649__auto__ = (function (){var statearr_34017 = f__31648__auto__();
(statearr_34017[(6)] = c__31647__auto___35850);

return statearr_34017;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31649__auto__);
}));

}

return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__34020 = arguments.length;
switch (G__34020) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__31647__auto___35935 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31648__auto__ = (function (){var switch__30657__auto__ = (function (state_34065){
var state_val_34066 = (state_34065[(1)]);
if((state_val_34066 === (7))){
var inst_34041 = (state_34065[(7)]);
var inst_34040 = (state_34065[(8)]);
var inst_34040__$1 = (state_34065[(2)]);
var inst_34041__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34040__$1,(0),null);
var inst_34042 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34040__$1,(1),null);
var inst_34043 = (inst_34041__$1 == null);
var state_34065__$1 = (function (){var statearr_34072 = state_34065;
(statearr_34072[(9)] = inst_34042);

(statearr_34072[(7)] = inst_34041__$1);

(statearr_34072[(8)] = inst_34040__$1);

return statearr_34072;
})();
if(cljs.core.truth_(inst_34043)){
var statearr_34080_35936 = state_34065__$1;
(statearr_34080_35936[(1)] = (8));

} else {
var statearr_34081_35938 = state_34065__$1;
(statearr_34081_35938[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34066 === (1))){
var inst_34029 = cljs.core.vec(chs);
var inst_34031 = inst_34029;
var state_34065__$1 = (function (){var statearr_34082 = state_34065;
(statearr_34082[(10)] = inst_34031);

return statearr_34082;
})();
var statearr_34083_35940 = state_34065__$1;
(statearr_34083_35940[(2)] = null);

(statearr_34083_35940[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34066 === (4))){
var inst_34031 = (state_34065[(10)]);
var state_34065__$1 = state_34065;
return cljs.core.async.ioc_alts_BANG_(state_34065__$1,(7),inst_34031);
} else {
if((state_val_34066 === (6))){
var inst_34058 = (state_34065[(2)]);
var state_34065__$1 = state_34065;
var statearr_34089_35941 = state_34065__$1;
(statearr_34089_35941[(2)] = inst_34058);

(statearr_34089_35941[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34066 === (3))){
var inst_34060 = (state_34065[(2)]);
var state_34065__$1 = state_34065;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34065__$1,inst_34060);
} else {
if((state_val_34066 === (2))){
var inst_34031 = (state_34065[(10)]);
var inst_34033 = cljs.core.count(inst_34031);
var inst_34034 = (inst_34033 > (0));
var state_34065__$1 = state_34065;
if(cljs.core.truth_(inst_34034)){
var statearr_34094_35946 = state_34065__$1;
(statearr_34094_35946[(1)] = (4));

} else {
var statearr_34095_35947 = state_34065__$1;
(statearr_34095_35947[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34066 === (11))){
var inst_34031 = (state_34065[(10)]);
var inst_34050 = (state_34065[(2)]);
var tmp34091 = inst_34031;
var inst_34031__$1 = tmp34091;
var state_34065__$1 = (function (){var statearr_34104 = state_34065;
(statearr_34104[(11)] = inst_34050);

(statearr_34104[(10)] = inst_34031__$1);

return statearr_34104;
})();
var statearr_34106_35950 = state_34065__$1;
(statearr_34106_35950[(2)] = null);

(statearr_34106_35950[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34066 === (9))){
var inst_34041 = (state_34065[(7)]);
var state_34065__$1 = state_34065;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34065__$1,(11),out,inst_34041);
} else {
if((state_val_34066 === (5))){
var inst_34056 = cljs.core.async.close_BANG_(out);
var state_34065__$1 = state_34065;
var statearr_34109_35960 = state_34065__$1;
(statearr_34109_35960[(2)] = inst_34056);

(statearr_34109_35960[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34066 === (10))){
var inst_34053 = (state_34065[(2)]);
var state_34065__$1 = state_34065;
var statearr_34112_35967 = state_34065__$1;
(statearr_34112_35967[(2)] = inst_34053);

(statearr_34112_35967[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34066 === (8))){
var inst_34042 = (state_34065[(9)]);
var inst_34041 = (state_34065[(7)]);
var inst_34040 = (state_34065[(8)]);
var inst_34031 = (state_34065[(10)]);
var inst_34045 = (function (){var cs = inst_34031;
var vec__34036 = inst_34040;
var v = inst_34041;
var c = inst_34042;
return (function (p1__34018_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__34018_SHARP_);
});
})();
var inst_34046 = cljs.core.filterv(inst_34045,inst_34031);
var inst_34031__$1 = inst_34046;
var state_34065__$1 = (function (){var statearr_34117 = state_34065;
(statearr_34117[(10)] = inst_34031__$1);

return statearr_34117;
})();
var statearr_34118_35968 = state_34065__$1;
(statearr_34118_35968[(2)] = null);

(statearr_34118_35968[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__30658__auto__ = null;
var cljs$core$async$state_machine__30658__auto____0 = (function (){
var statearr_34122 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34122[(0)] = cljs$core$async$state_machine__30658__auto__);

(statearr_34122[(1)] = (1));

return statearr_34122;
});
var cljs$core$async$state_machine__30658__auto____1 = (function (state_34065){
while(true){
var ret_value__30659__auto__ = (function (){try{while(true){
var result__30660__auto__ = switch__30657__auto__(state_34065);
if(cljs.core.keyword_identical_QMARK_(result__30660__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30660__auto__;
}
break;
}
}catch (e34126){var ex__30661__auto__ = e34126;
var statearr_34127_35974 = state_34065;
(statearr_34127_35974[(2)] = ex__30661__auto__);


if(cljs.core.seq((state_34065[(4)]))){
var statearr_34129_35975 = state_34065;
(statearr_34129_35975[(1)] = cljs.core.first((state_34065[(4)])));

} else {
throw ex__30661__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30659__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35977 = state_34065;
state_34065 = G__35977;
continue;
} else {
return ret_value__30659__auto__;
}
break;
}
});
cljs$core$async$state_machine__30658__auto__ = function(state_34065){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30658__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30658__auto____1.call(this,state_34065);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30658__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30658__auto____0;
cljs$core$async$state_machine__30658__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30658__auto____1;
return cljs$core$async$state_machine__30658__auto__;
})()
})();
var state__31649__auto__ = (function (){var statearr_34134 = f__31648__auto__();
(statearr_34134[(6)] = c__31647__auto___35935);

return statearr_34134;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31649__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__34145 = arguments.length;
switch (G__34145) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__31647__auto___35979 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31648__auto__ = (function (){var switch__30657__auto__ = (function (state_34176){
var state_val_34177 = (state_34176[(1)]);
if((state_val_34177 === (7))){
var inst_34153 = (state_34176[(7)]);
var inst_34153__$1 = (state_34176[(2)]);
var inst_34154 = (inst_34153__$1 == null);
var inst_34155 = cljs.core.not(inst_34154);
var state_34176__$1 = (function (){var statearr_34195 = state_34176;
(statearr_34195[(7)] = inst_34153__$1);

return statearr_34195;
})();
if(inst_34155){
var statearr_34196_35980 = state_34176__$1;
(statearr_34196_35980[(1)] = (8));

} else {
var statearr_34197_35981 = state_34176__$1;
(statearr_34197_35981[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34177 === (1))){
var inst_34148 = (0);
var state_34176__$1 = (function (){var statearr_34202 = state_34176;
(statearr_34202[(8)] = inst_34148);

return statearr_34202;
})();
var statearr_34207_35982 = state_34176__$1;
(statearr_34207_35982[(2)] = null);

(statearr_34207_35982[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34177 === (4))){
var state_34176__$1 = state_34176;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34176__$1,(7),ch);
} else {
if((state_val_34177 === (6))){
var inst_34169 = (state_34176[(2)]);
var state_34176__$1 = state_34176;
var statearr_34212_35983 = state_34176__$1;
(statearr_34212_35983[(2)] = inst_34169);

(statearr_34212_35983[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34177 === (3))){
var inst_34171 = (state_34176[(2)]);
var inst_34172 = cljs.core.async.close_BANG_(out);
var state_34176__$1 = (function (){var statearr_34214 = state_34176;
(statearr_34214[(9)] = inst_34171);

return statearr_34214;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_34176__$1,inst_34172);
} else {
if((state_val_34177 === (2))){
var inst_34148 = (state_34176[(8)]);
var inst_34150 = (inst_34148 < n);
var state_34176__$1 = state_34176;
if(cljs.core.truth_(inst_34150)){
var statearr_34215_35984 = state_34176__$1;
(statearr_34215_35984[(1)] = (4));

} else {
var statearr_34216_35985 = state_34176__$1;
(statearr_34216_35985[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34177 === (11))){
var inst_34148 = (state_34176[(8)]);
var inst_34158 = (state_34176[(2)]);
var inst_34159 = (inst_34148 + (1));
var inst_34148__$1 = inst_34159;
var state_34176__$1 = (function (){var statearr_34223 = state_34176;
(statearr_34223[(10)] = inst_34158);

(statearr_34223[(8)] = inst_34148__$1);

return statearr_34223;
})();
var statearr_34224_35986 = state_34176__$1;
(statearr_34224_35986[(2)] = null);

(statearr_34224_35986[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34177 === (9))){
var state_34176__$1 = state_34176;
var statearr_34225_35987 = state_34176__$1;
(statearr_34225_35987[(2)] = null);

(statearr_34225_35987[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34177 === (5))){
var state_34176__$1 = state_34176;
var statearr_34226_35988 = state_34176__$1;
(statearr_34226_35988[(2)] = null);

(statearr_34226_35988[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34177 === (10))){
var inst_34163 = (state_34176[(2)]);
var state_34176__$1 = state_34176;
var statearr_34227_35990 = state_34176__$1;
(statearr_34227_35990[(2)] = inst_34163);

(statearr_34227_35990[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34177 === (8))){
var inst_34153 = (state_34176[(7)]);
var state_34176__$1 = state_34176;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34176__$1,(11),out,inst_34153);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__30658__auto__ = null;
var cljs$core$async$state_machine__30658__auto____0 = (function (){
var statearr_34232 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34232[(0)] = cljs$core$async$state_machine__30658__auto__);

(statearr_34232[(1)] = (1));

return statearr_34232;
});
var cljs$core$async$state_machine__30658__auto____1 = (function (state_34176){
while(true){
var ret_value__30659__auto__ = (function (){try{while(true){
var result__30660__auto__ = switch__30657__auto__(state_34176);
if(cljs.core.keyword_identical_QMARK_(result__30660__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30660__auto__;
}
break;
}
}catch (e34233){var ex__30661__auto__ = e34233;
var statearr_34234_35994 = state_34176;
(statearr_34234_35994[(2)] = ex__30661__auto__);


if(cljs.core.seq((state_34176[(4)]))){
var statearr_34235_35995 = state_34176;
(statearr_34235_35995[(1)] = cljs.core.first((state_34176[(4)])));

} else {
throw ex__30661__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30659__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35997 = state_34176;
state_34176 = G__35997;
continue;
} else {
return ret_value__30659__auto__;
}
break;
}
});
cljs$core$async$state_machine__30658__auto__ = function(state_34176){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30658__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30658__auto____1.call(this,state_34176);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30658__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30658__auto____0;
cljs$core$async$state_machine__30658__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30658__auto____1;
return cljs$core$async$state_machine__30658__auto__;
})()
})();
var state__31649__auto__ = (function (){var statearr_34236 = f__31648__auto__();
(statearr_34236[(6)] = c__31647__auto___35979);

return statearr_34236;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31649__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);


/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34270 = (function (f,ch,meta34254,_,fn1,meta34271){
this.f = f;
this.ch = ch;
this.meta34254 = meta34254;
this._ = _;
this.fn1 = fn1;
this.meta34271 = meta34271;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34270.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34272,meta34271__$1){
var self__ = this;
var _34272__$1 = this;
return (new cljs.core.async.t_cljs$core$async34270(self__.f,self__.ch,self__.meta34254,self__._,self__.fn1,meta34271__$1));
}));

(cljs.core.async.t_cljs$core$async34270.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34272){
var self__ = this;
var _34272__$1 = this;
return self__.meta34271;
}));

(cljs.core.async.t_cljs$core$async34270.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34270.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async34270.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async34270.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__34244_SHARP_){
var G__34291 = (((p1__34244_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__34244_SHARP_) : self__.f.call(null,p1__34244_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__34291) : f1.call(null,G__34291));
});
}));

(cljs.core.async.t_cljs$core$async34270.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34254","meta34254",-1770146121,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async34253","cljs.core.async/t_cljs$core$async34253",-1209459726,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta34271","meta34271",-2010468967,null)], null);
}));

(cljs.core.async.t_cljs$core$async34270.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34270.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34270");

(cljs.core.async.t_cljs$core$async34270.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async34270");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34270.
 */
cljs.core.async.__GT_t_cljs$core$async34270 = (function cljs$core$async$__GT_t_cljs$core$async34270(f,ch,meta34254,_,fn1,meta34271){
return (new cljs.core.async.t_cljs$core$async34270(f,ch,meta34254,_,fn1,meta34271));
});



/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34253 = (function (f,ch,meta34254){
this.f = f;
this.ch = ch;
this.meta34254 = meta34254;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34253.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34255,meta34254__$1){
var self__ = this;
var _34255__$1 = this;
return (new cljs.core.async.t_cljs$core$async34253(self__.f,self__.ch,meta34254__$1));
}));

(cljs.core.async.t_cljs$core$async34253.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34255){
var self__ = this;
var _34255__$1 = this;
return self__.meta34254;
}));

(cljs.core.async.t_cljs$core$async34253.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34253.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async34253.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async34253.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34253.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(new cljs.core.async.t_cljs$core$async34270(self__.f,self__.ch,self__.meta34254,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY)));
if(cljs.core.truth_((function (){var and__5000__auto__ = ret;
if(cljs.core.truth_(and__5000__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5000__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__34306 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__34306) : self__.f.call(null,G__34306));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async34253.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34253.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async34253.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34254","meta34254",-1770146121,null)], null);
}));

(cljs.core.async.t_cljs$core$async34253.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34253.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34253");

(cljs.core.async.t_cljs$core$async34253.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async34253");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34253.
 */
cljs.core.async.__GT_t_cljs$core$async34253 = (function cljs$core$async$__GT_t_cljs$core$async34253(f,ch,meta34254){
return (new cljs.core.async.t_cljs$core$async34253(f,ch,meta34254));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
return (new cljs.core.async.t_cljs$core$async34253(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34341 = (function (f,ch,meta34342){
this.f = f;
this.ch = ch;
this.meta34342 = meta34342;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34341.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34343,meta34342__$1){
var self__ = this;
var _34343__$1 = this;
return (new cljs.core.async.t_cljs$core$async34341(self__.f,self__.ch,meta34342__$1));
}));

(cljs.core.async.t_cljs$core$async34341.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34343){
var self__ = this;
var _34343__$1 = this;
return self__.meta34342;
}));

(cljs.core.async.t_cljs$core$async34341.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34341.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async34341.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34341.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async34341.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34341.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async34341.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34342","meta34342",817471502,null)], null);
}));

(cljs.core.async.t_cljs$core$async34341.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34341.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34341");

(cljs.core.async.t_cljs$core$async34341.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async34341");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34341.
 */
cljs.core.async.__GT_t_cljs$core$async34341 = (function cljs$core$async$__GT_t_cljs$core$async34341(f,ch,meta34342){
return (new cljs.core.async.t_cljs$core$async34341(f,ch,meta34342));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
return (new cljs.core.async.t_cljs$core$async34341(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34360 = (function (p,ch,meta34361){
this.p = p;
this.ch = ch;
this.meta34361 = meta34361;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34360.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34362,meta34361__$1){
var self__ = this;
var _34362__$1 = this;
return (new cljs.core.async.t_cljs$core$async34360(self__.p,self__.ch,meta34361__$1));
}));

(cljs.core.async.t_cljs$core$async34360.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34362){
var self__ = this;
var _34362__$1 = this;
return self__.meta34361;
}));

(cljs.core.async.t_cljs$core$async34360.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34360.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async34360.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async34360.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34360.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async34360.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34360.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async34360.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34361","meta34361",-1661721914,null)], null);
}));

(cljs.core.async.t_cljs$core$async34360.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34360.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34360");

(cljs.core.async.t_cljs$core$async34360.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async34360");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34360.
 */
cljs.core.async.__GT_t_cljs$core$async34360 = (function cljs$core$async$__GT_t_cljs$core$async34360(p,ch,meta34361){
return (new cljs.core.async.t_cljs$core$async34360(p,ch,meta34361));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
return (new cljs.core.async.t_cljs$core$async34360(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__34385 = arguments.length;
switch (G__34385) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__31647__auto___36018 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31648__auto__ = (function (){var switch__30657__auto__ = (function (state_34412){
var state_val_34413 = (state_34412[(1)]);
if((state_val_34413 === (7))){
var inst_34404 = (state_34412[(2)]);
var state_34412__$1 = state_34412;
var statearr_34419_36019 = state_34412__$1;
(statearr_34419_36019[(2)] = inst_34404);

(statearr_34419_36019[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34413 === (1))){
var state_34412__$1 = state_34412;
var statearr_34420_36025 = state_34412__$1;
(statearr_34420_36025[(2)] = null);

(statearr_34420_36025[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34413 === (4))){
var inst_34390 = (state_34412[(7)]);
var inst_34390__$1 = (state_34412[(2)]);
var inst_34391 = (inst_34390__$1 == null);
var state_34412__$1 = (function (){var statearr_34421 = state_34412;
(statearr_34421[(7)] = inst_34390__$1);

return statearr_34421;
})();
if(cljs.core.truth_(inst_34391)){
var statearr_34422_36026 = state_34412__$1;
(statearr_34422_36026[(1)] = (5));

} else {
var statearr_34423_36027 = state_34412__$1;
(statearr_34423_36027[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34413 === (6))){
var inst_34390 = (state_34412[(7)]);
var inst_34395 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_34390) : p.call(null,inst_34390));
var state_34412__$1 = state_34412;
if(cljs.core.truth_(inst_34395)){
var statearr_34427_36032 = state_34412__$1;
(statearr_34427_36032[(1)] = (8));

} else {
var statearr_34428_36033 = state_34412__$1;
(statearr_34428_36033[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34413 === (3))){
var inst_34407 = (state_34412[(2)]);
var state_34412__$1 = state_34412;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34412__$1,inst_34407);
} else {
if((state_val_34413 === (2))){
var state_34412__$1 = state_34412;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34412__$1,(4),ch);
} else {
if((state_val_34413 === (11))){
var inst_34398 = (state_34412[(2)]);
var state_34412__$1 = state_34412;
var statearr_34429_36034 = state_34412__$1;
(statearr_34429_36034[(2)] = inst_34398);

(statearr_34429_36034[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34413 === (9))){
var state_34412__$1 = state_34412;
var statearr_34430_36035 = state_34412__$1;
(statearr_34430_36035[(2)] = null);

(statearr_34430_36035[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34413 === (5))){
var inst_34393 = cljs.core.async.close_BANG_(out);
var state_34412__$1 = state_34412;
var statearr_34436_36036 = state_34412__$1;
(statearr_34436_36036[(2)] = inst_34393);

(statearr_34436_36036[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34413 === (10))){
var inst_34401 = (state_34412[(2)]);
var state_34412__$1 = (function (){var statearr_34439 = state_34412;
(statearr_34439[(8)] = inst_34401);

return statearr_34439;
})();
var statearr_34440_36040 = state_34412__$1;
(statearr_34440_36040[(2)] = null);

(statearr_34440_36040[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34413 === (8))){
var inst_34390 = (state_34412[(7)]);
var state_34412__$1 = state_34412;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34412__$1,(11),out,inst_34390);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__30658__auto__ = null;
var cljs$core$async$state_machine__30658__auto____0 = (function (){
var statearr_34442 = [null,null,null,null,null,null,null,null,null];
(statearr_34442[(0)] = cljs$core$async$state_machine__30658__auto__);

(statearr_34442[(1)] = (1));

return statearr_34442;
});
var cljs$core$async$state_machine__30658__auto____1 = (function (state_34412){
while(true){
var ret_value__30659__auto__ = (function (){try{while(true){
var result__30660__auto__ = switch__30657__auto__(state_34412);
if(cljs.core.keyword_identical_QMARK_(result__30660__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30660__auto__;
}
break;
}
}catch (e34443){var ex__30661__auto__ = e34443;
var statearr_34444_36041 = state_34412;
(statearr_34444_36041[(2)] = ex__30661__auto__);


if(cljs.core.seq((state_34412[(4)]))){
var statearr_34445_36045 = state_34412;
(statearr_34445_36045[(1)] = cljs.core.first((state_34412[(4)])));

} else {
throw ex__30661__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30659__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36046 = state_34412;
state_34412 = G__36046;
continue;
} else {
return ret_value__30659__auto__;
}
break;
}
});
cljs$core$async$state_machine__30658__auto__ = function(state_34412){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30658__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30658__auto____1.call(this,state_34412);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30658__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30658__auto____0;
cljs$core$async$state_machine__30658__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30658__auto____1;
return cljs$core$async$state_machine__30658__auto__;
})()
})();
var state__31649__auto__ = (function (){var statearr_34448 = f__31648__auto__();
(statearr_34448[(6)] = c__31647__auto___36018);

return statearr_34448;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31649__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__34460 = arguments.length;
switch (G__34460) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__31647__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31648__auto__ = (function (){var switch__30657__auto__ = (function (state_34554){
var state_val_34555 = (state_34554[(1)]);
if((state_val_34555 === (7))){
var inst_34548 = (state_34554[(2)]);
var state_34554__$1 = state_34554;
var statearr_34559_36049 = state_34554__$1;
(statearr_34559_36049[(2)] = inst_34548);

(statearr_34559_36049[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34555 === (20))){
var inst_34509 = (state_34554[(7)]);
var inst_34529 = (state_34554[(2)]);
var inst_34530 = cljs.core.next(inst_34509);
var inst_34495 = inst_34530;
var inst_34496 = null;
var inst_34497 = (0);
var inst_34498 = (0);
var state_34554__$1 = (function (){var statearr_34561 = state_34554;
(statearr_34561[(8)] = inst_34529);

(statearr_34561[(9)] = inst_34498);

(statearr_34561[(10)] = inst_34497);

(statearr_34561[(11)] = inst_34495);

(statearr_34561[(12)] = inst_34496);

return statearr_34561;
})();
var statearr_34565_36053 = state_34554__$1;
(statearr_34565_36053[(2)] = null);

(statearr_34565_36053[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34555 === (1))){
var state_34554__$1 = state_34554;
var statearr_34567_36054 = state_34554__$1;
(statearr_34567_36054[(2)] = null);

(statearr_34567_36054[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34555 === (4))){
var inst_34475 = (state_34554[(13)]);
var inst_34475__$1 = (state_34554[(2)]);
var inst_34477 = (inst_34475__$1 == null);
var state_34554__$1 = (function (){var statearr_34569 = state_34554;
(statearr_34569[(13)] = inst_34475__$1);

return statearr_34569;
})();
if(cljs.core.truth_(inst_34477)){
var statearr_34571_36055 = state_34554__$1;
(statearr_34571_36055[(1)] = (5));

} else {
var statearr_34572_36056 = state_34554__$1;
(statearr_34572_36056[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34555 === (15))){
var state_34554__$1 = state_34554;
var statearr_34576_36057 = state_34554__$1;
(statearr_34576_36057[(2)] = null);

(statearr_34576_36057[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34555 === (21))){
var state_34554__$1 = state_34554;
var statearr_34578_36058 = state_34554__$1;
(statearr_34578_36058[(2)] = null);

(statearr_34578_36058[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34555 === (13))){
var inst_34498 = (state_34554[(9)]);
var inst_34497 = (state_34554[(10)]);
var inst_34495 = (state_34554[(11)]);
var inst_34496 = (state_34554[(12)]);
var inst_34505 = (state_34554[(2)]);
var inst_34506 = (inst_34498 + (1));
var tmp34573 = inst_34497;
var tmp34574 = inst_34495;
var tmp34575 = inst_34496;
var inst_34495__$1 = tmp34574;
var inst_34496__$1 = tmp34575;
var inst_34497__$1 = tmp34573;
var inst_34498__$1 = inst_34506;
var state_34554__$1 = (function (){var statearr_34584 = state_34554;
(statearr_34584[(14)] = inst_34505);

(statearr_34584[(9)] = inst_34498__$1);

(statearr_34584[(10)] = inst_34497__$1);

(statearr_34584[(11)] = inst_34495__$1);

(statearr_34584[(12)] = inst_34496__$1);

return statearr_34584;
})();
var statearr_34592_36061 = state_34554__$1;
(statearr_34592_36061[(2)] = null);

(statearr_34592_36061[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34555 === (22))){
var state_34554__$1 = state_34554;
var statearr_34594_36064 = state_34554__$1;
(statearr_34594_36064[(2)] = null);

(statearr_34594_36064[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34555 === (6))){
var inst_34475 = (state_34554[(13)]);
var inst_34493 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_34475) : f.call(null,inst_34475));
var inst_34494 = cljs.core.seq(inst_34493);
var inst_34495 = inst_34494;
var inst_34496 = null;
var inst_34497 = (0);
var inst_34498 = (0);
var state_34554__$1 = (function (){var statearr_34595 = state_34554;
(statearr_34595[(9)] = inst_34498);

(statearr_34595[(10)] = inst_34497);

(statearr_34595[(11)] = inst_34495);

(statearr_34595[(12)] = inst_34496);

return statearr_34595;
})();
var statearr_34596_36065 = state_34554__$1;
(statearr_34596_36065[(2)] = null);

(statearr_34596_36065[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34555 === (17))){
var inst_34509 = (state_34554[(7)]);
var inst_34513 = cljs.core.chunk_first(inst_34509);
var inst_34520 = cljs.core.chunk_rest(inst_34509);
var inst_34522 = cljs.core.count(inst_34513);
var inst_34495 = inst_34520;
var inst_34496 = inst_34513;
var inst_34497 = inst_34522;
var inst_34498 = (0);
var state_34554__$1 = (function (){var statearr_34620 = state_34554;
(statearr_34620[(9)] = inst_34498);

(statearr_34620[(10)] = inst_34497);

(statearr_34620[(11)] = inst_34495);

(statearr_34620[(12)] = inst_34496);

return statearr_34620;
})();
var statearr_34631_36066 = state_34554__$1;
(statearr_34631_36066[(2)] = null);

(statearr_34631_36066[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34555 === (3))){
var inst_34550 = (state_34554[(2)]);
var state_34554__$1 = state_34554;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34554__$1,inst_34550);
} else {
if((state_val_34555 === (12))){
var inst_34538 = (state_34554[(2)]);
var state_34554__$1 = state_34554;
var statearr_34651_36067 = state_34554__$1;
(statearr_34651_36067[(2)] = inst_34538);

(statearr_34651_36067[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34555 === (2))){
var state_34554__$1 = state_34554;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34554__$1,(4),in$);
} else {
if((state_val_34555 === (23))){
var inst_34546 = (state_34554[(2)]);
var state_34554__$1 = state_34554;
var statearr_34657_36068 = state_34554__$1;
(statearr_34657_36068[(2)] = inst_34546);

(statearr_34657_36068[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34555 === (19))){
var inst_34533 = (state_34554[(2)]);
var state_34554__$1 = state_34554;
var statearr_34662_36069 = state_34554__$1;
(statearr_34662_36069[(2)] = inst_34533);

(statearr_34662_36069[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34555 === (11))){
var inst_34509 = (state_34554[(7)]);
var inst_34495 = (state_34554[(11)]);
var inst_34509__$1 = cljs.core.seq(inst_34495);
var state_34554__$1 = (function (){var statearr_34663 = state_34554;
(statearr_34663[(7)] = inst_34509__$1);

return statearr_34663;
})();
if(inst_34509__$1){
var statearr_34664_36071 = state_34554__$1;
(statearr_34664_36071[(1)] = (14));

} else {
var statearr_34665_36072 = state_34554__$1;
(statearr_34665_36072[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34555 === (9))){
var inst_34540 = (state_34554[(2)]);
var inst_34541 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_34554__$1 = (function (){var statearr_34666 = state_34554;
(statearr_34666[(15)] = inst_34540);

return statearr_34666;
})();
if(cljs.core.truth_(inst_34541)){
var statearr_34667_36073 = state_34554__$1;
(statearr_34667_36073[(1)] = (21));

} else {
var statearr_34668_36074 = state_34554__$1;
(statearr_34668_36074[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34555 === (5))){
var inst_34480 = cljs.core.async.close_BANG_(out);
var state_34554__$1 = state_34554;
var statearr_34670_36080 = state_34554__$1;
(statearr_34670_36080[(2)] = inst_34480);

(statearr_34670_36080[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34555 === (14))){
var inst_34509 = (state_34554[(7)]);
var inst_34511 = cljs.core.chunked_seq_QMARK_(inst_34509);
var state_34554__$1 = state_34554;
if(inst_34511){
var statearr_34677_36081 = state_34554__$1;
(statearr_34677_36081[(1)] = (17));

} else {
var statearr_34678_36085 = state_34554__$1;
(statearr_34678_36085[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34555 === (16))){
var inst_34536 = (state_34554[(2)]);
var state_34554__$1 = state_34554;
var statearr_34679_36086 = state_34554__$1;
(statearr_34679_36086[(2)] = inst_34536);

(statearr_34679_36086[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34555 === (10))){
var inst_34498 = (state_34554[(9)]);
var inst_34496 = (state_34554[(12)]);
var inst_34503 = cljs.core._nth(inst_34496,inst_34498);
var state_34554__$1 = state_34554;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34554__$1,(13),out,inst_34503);
} else {
if((state_val_34555 === (18))){
var inst_34509 = (state_34554[(7)]);
var inst_34527 = cljs.core.first(inst_34509);
var state_34554__$1 = state_34554;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34554__$1,(20),out,inst_34527);
} else {
if((state_val_34555 === (8))){
var inst_34498 = (state_34554[(9)]);
var inst_34497 = (state_34554[(10)]);
var inst_34500 = (inst_34498 < inst_34497);
var inst_34501 = inst_34500;
var state_34554__$1 = state_34554;
if(cljs.core.truth_(inst_34501)){
var statearr_34686_36087 = state_34554__$1;
(statearr_34686_36087[(1)] = (10));

} else {
var statearr_34687_36088 = state_34554__$1;
(statearr_34687_36088[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__30658__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__30658__auto____0 = (function (){
var statearr_34696 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34696[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__30658__auto__);

(statearr_34696[(1)] = (1));

return statearr_34696;
});
var cljs$core$async$mapcat_STAR__$_state_machine__30658__auto____1 = (function (state_34554){
while(true){
var ret_value__30659__auto__ = (function (){try{while(true){
var result__30660__auto__ = switch__30657__auto__(state_34554);
if(cljs.core.keyword_identical_QMARK_(result__30660__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30660__auto__;
}
break;
}
}catch (e34703){var ex__30661__auto__ = e34703;
var statearr_34708_36092 = state_34554;
(statearr_34708_36092[(2)] = ex__30661__auto__);


if(cljs.core.seq((state_34554[(4)]))){
var statearr_34712_36093 = state_34554;
(statearr_34712_36093[(1)] = cljs.core.first((state_34554[(4)])));

} else {
throw ex__30661__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30659__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36094 = state_34554;
state_34554 = G__36094;
continue;
} else {
return ret_value__30659__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__30658__auto__ = function(state_34554){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__30658__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__30658__auto____1.call(this,state_34554);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__30658__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__30658__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__30658__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__30658__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__30658__auto__;
})()
})();
var state__31649__auto__ = (function (){var statearr_34715 = f__31648__auto__();
(statearr_34715[(6)] = c__31647__auto__);

return statearr_34715;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31649__auto__);
}));

return c__31647__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__34719 = arguments.length;
switch (G__34719) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__34759 = arguments.length;
switch (G__34759) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__34771 = arguments.length;
switch (G__34771) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__31647__auto___36102 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31648__auto__ = (function (){var switch__30657__auto__ = (function (state_34797){
var state_val_34798 = (state_34797[(1)]);
if((state_val_34798 === (7))){
var inst_34792 = (state_34797[(2)]);
var state_34797__$1 = state_34797;
var statearr_34799_36103 = state_34797__$1;
(statearr_34799_36103[(2)] = inst_34792);

(statearr_34799_36103[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34798 === (1))){
var inst_34773 = null;
var state_34797__$1 = (function (){var statearr_34801 = state_34797;
(statearr_34801[(7)] = inst_34773);

return statearr_34801;
})();
var statearr_34802_36107 = state_34797__$1;
(statearr_34802_36107[(2)] = null);

(statearr_34802_36107[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34798 === (4))){
var inst_34777 = (state_34797[(8)]);
var inst_34777__$1 = (state_34797[(2)]);
var inst_34778 = (inst_34777__$1 == null);
var inst_34779 = cljs.core.not(inst_34778);
var state_34797__$1 = (function (){var statearr_34804 = state_34797;
(statearr_34804[(8)] = inst_34777__$1);

return statearr_34804;
})();
if(inst_34779){
var statearr_34805_36113 = state_34797__$1;
(statearr_34805_36113[(1)] = (5));

} else {
var statearr_34806_36114 = state_34797__$1;
(statearr_34806_36114[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34798 === (6))){
var state_34797__$1 = state_34797;
var statearr_34808_36115 = state_34797__$1;
(statearr_34808_36115[(2)] = null);

(statearr_34808_36115[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34798 === (3))){
var inst_34794 = (state_34797[(2)]);
var inst_34795 = cljs.core.async.close_BANG_(out);
var state_34797__$1 = (function (){var statearr_34809 = state_34797;
(statearr_34809[(9)] = inst_34794);

return statearr_34809;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_34797__$1,inst_34795);
} else {
if((state_val_34798 === (2))){
var state_34797__$1 = state_34797;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34797__$1,(4),ch);
} else {
if((state_val_34798 === (11))){
var inst_34777 = (state_34797[(8)]);
var inst_34786 = (state_34797[(2)]);
var inst_34773 = inst_34777;
var state_34797__$1 = (function (){var statearr_34811 = state_34797;
(statearr_34811[(7)] = inst_34773);

(statearr_34811[(10)] = inst_34786);

return statearr_34811;
})();
var statearr_34813_36119 = state_34797__$1;
(statearr_34813_36119[(2)] = null);

(statearr_34813_36119[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34798 === (9))){
var inst_34777 = (state_34797[(8)]);
var state_34797__$1 = state_34797;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34797__$1,(11),out,inst_34777);
} else {
if((state_val_34798 === (5))){
var inst_34773 = (state_34797[(7)]);
var inst_34777 = (state_34797[(8)]);
var inst_34781 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_34777,inst_34773);
var state_34797__$1 = state_34797;
if(inst_34781){
var statearr_34820_36120 = state_34797__$1;
(statearr_34820_36120[(1)] = (8));

} else {
var statearr_34821_36121 = state_34797__$1;
(statearr_34821_36121[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34798 === (10))){
var inst_34789 = (state_34797[(2)]);
var state_34797__$1 = state_34797;
var statearr_34826_36125 = state_34797__$1;
(statearr_34826_36125[(2)] = inst_34789);

(statearr_34826_36125[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34798 === (8))){
var inst_34773 = (state_34797[(7)]);
var tmp34818 = inst_34773;
var inst_34773__$1 = tmp34818;
var state_34797__$1 = (function (){var statearr_34827 = state_34797;
(statearr_34827[(7)] = inst_34773__$1);

return statearr_34827;
})();
var statearr_34828_36126 = state_34797__$1;
(statearr_34828_36126[(2)] = null);

(statearr_34828_36126[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__30658__auto__ = null;
var cljs$core$async$state_machine__30658__auto____0 = (function (){
var statearr_34830 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34830[(0)] = cljs$core$async$state_machine__30658__auto__);

(statearr_34830[(1)] = (1));

return statearr_34830;
});
var cljs$core$async$state_machine__30658__auto____1 = (function (state_34797){
while(true){
var ret_value__30659__auto__ = (function (){try{while(true){
var result__30660__auto__ = switch__30657__auto__(state_34797);
if(cljs.core.keyword_identical_QMARK_(result__30660__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30660__auto__;
}
break;
}
}catch (e34835){var ex__30661__auto__ = e34835;
var statearr_34836_36128 = state_34797;
(statearr_34836_36128[(2)] = ex__30661__auto__);


if(cljs.core.seq((state_34797[(4)]))){
var statearr_34837_36130 = state_34797;
(statearr_34837_36130[(1)] = cljs.core.first((state_34797[(4)])));

} else {
throw ex__30661__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30659__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36131 = state_34797;
state_34797 = G__36131;
continue;
} else {
return ret_value__30659__auto__;
}
break;
}
});
cljs$core$async$state_machine__30658__auto__ = function(state_34797){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30658__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30658__auto____1.call(this,state_34797);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30658__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30658__auto____0;
cljs$core$async$state_machine__30658__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30658__auto____1;
return cljs$core$async$state_machine__30658__auto__;
})()
})();
var state__31649__auto__ = (function (){var statearr_34839 = f__31648__auto__();
(statearr_34839[(6)] = c__31647__auto___36102);

return statearr_34839;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31649__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__34841 = arguments.length;
switch (G__34841) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__31647__auto___36134 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31648__auto__ = (function (){var switch__30657__auto__ = (function (state_34880){
var state_val_34884 = (state_34880[(1)]);
if((state_val_34884 === (7))){
var inst_34876 = (state_34880[(2)]);
var state_34880__$1 = state_34880;
var statearr_34895_36135 = state_34880__$1;
(statearr_34895_36135[(2)] = inst_34876);

(statearr_34895_36135[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34884 === (1))){
var inst_34843 = (new Array(n));
var inst_34844 = inst_34843;
var inst_34845 = (0);
var state_34880__$1 = (function (){var statearr_34896 = state_34880;
(statearr_34896[(7)] = inst_34845);

(statearr_34896[(8)] = inst_34844);

return statearr_34896;
})();
var statearr_34901_36137 = state_34880__$1;
(statearr_34901_36137[(2)] = null);

(statearr_34901_36137[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34884 === (4))){
var inst_34848 = (state_34880[(9)]);
var inst_34848__$1 = (state_34880[(2)]);
var inst_34849 = (inst_34848__$1 == null);
var inst_34850 = cljs.core.not(inst_34849);
var state_34880__$1 = (function (){var statearr_34902 = state_34880;
(statearr_34902[(9)] = inst_34848__$1);

return statearr_34902;
})();
if(inst_34850){
var statearr_34903_36138 = state_34880__$1;
(statearr_34903_36138[(1)] = (5));

} else {
var statearr_34904_36139 = state_34880__$1;
(statearr_34904_36139[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34884 === (15))){
var inst_34870 = (state_34880[(2)]);
var state_34880__$1 = state_34880;
var statearr_34905_36141 = state_34880__$1;
(statearr_34905_36141[(2)] = inst_34870);

(statearr_34905_36141[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34884 === (13))){
var state_34880__$1 = state_34880;
var statearr_34906_36142 = state_34880__$1;
(statearr_34906_36142[(2)] = null);

(statearr_34906_36142[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34884 === (6))){
var inst_34845 = (state_34880[(7)]);
var inst_34866 = (inst_34845 > (0));
var state_34880__$1 = state_34880;
if(cljs.core.truth_(inst_34866)){
var statearr_34907_36145 = state_34880__$1;
(statearr_34907_36145[(1)] = (12));

} else {
var statearr_34908_36146 = state_34880__$1;
(statearr_34908_36146[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34884 === (3))){
var inst_34878 = (state_34880[(2)]);
var state_34880__$1 = state_34880;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34880__$1,inst_34878);
} else {
if((state_val_34884 === (12))){
var inst_34844 = (state_34880[(8)]);
var inst_34868 = cljs.core.vec(inst_34844);
var state_34880__$1 = state_34880;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34880__$1,(15),out,inst_34868);
} else {
if((state_val_34884 === (2))){
var state_34880__$1 = state_34880;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34880__$1,(4),ch);
} else {
if((state_val_34884 === (11))){
var inst_34860 = (state_34880[(2)]);
var inst_34861 = (new Array(n));
var inst_34844 = inst_34861;
var inst_34845 = (0);
var state_34880__$1 = (function (){var statearr_34909 = state_34880;
(statearr_34909[(7)] = inst_34845);

(statearr_34909[(8)] = inst_34844);

(statearr_34909[(10)] = inst_34860);

return statearr_34909;
})();
var statearr_34912_36147 = state_34880__$1;
(statearr_34912_36147[(2)] = null);

(statearr_34912_36147[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34884 === (9))){
var inst_34844 = (state_34880[(8)]);
var inst_34858 = cljs.core.vec(inst_34844);
var state_34880__$1 = state_34880;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34880__$1,(11),out,inst_34858);
} else {
if((state_val_34884 === (5))){
var inst_34848 = (state_34880[(9)]);
var inst_34845 = (state_34880[(7)]);
var inst_34844 = (state_34880[(8)]);
var inst_34853 = (state_34880[(11)]);
var inst_34852 = (inst_34844[inst_34845] = inst_34848);
var inst_34853__$1 = (inst_34845 + (1));
var inst_34854 = (inst_34853__$1 < n);
var state_34880__$1 = (function (){var statearr_34913 = state_34880;
(statearr_34913[(12)] = inst_34852);

(statearr_34913[(11)] = inst_34853__$1);

return statearr_34913;
})();
if(cljs.core.truth_(inst_34854)){
var statearr_34914_36148 = state_34880__$1;
(statearr_34914_36148[(1)] = (8));

} else {
var statearr_34915_36149 = state_34880__$1;
(statearr_34915_36149[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34884 === (14))){
var inst_34873 = (state_34880[(2)]);
var inst_34874 = cljs.core.async.close_BANG_(out);
var state_34880__$1 = (function (){var statearr_34917 = state_34880;
(statearr_34917[(13)] = inst_34873);

return statearr_34917;
})();
var statearr_34918_36150 = state_34880__$1;
(statearr_34918_36150[(2)] = inst_34874);

(statearr_34918_36150[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34884 === (10))){
var inst_34864 = (state_34880[(2)]);
var state_34880__$1 = state_34880;
var statearr_34922_36151 = state_34880__$1;
(statearr_34922_36151[(2)] = inst_34864);

(statearr_34922_36151[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34884 === (8))){
var inst_34844 = (state_34880[(8)]);
var inst_34853 = (state_34880[(11)]);
var tmp34916 = inst_34844;
var inst_34844__$1 = tmp34916;
var inst_34845 = inst_34853;
var state_34880__$1 = (function (){var statearr_34923 = state_34880;
(statearr_34923[(7)] = inst_34845);

(statearr_34923[(8)] = inst_34844__$1);

return statearr_34923;
})();
var statearr_34924_36178 = state_34880__$1;
(statearr_34924_36178[(2)] = null);

(statearr_34924_36178[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__30658__auto__ = null;
var cljs$core$async$state_machine__30658__auto____0 = (function (){
var statearr_34928 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34928[(0)] = cljs$core$async$state_machine__30658__auto__);

(statearr_34928[(1)] = (1));

return statearr_34928;
});
var cljs$core$async$state_machine__30658__auto____1 = (function (state_34880){
while(true){
var ret_value__30659__auto__ = (function (){try{while(true){
var result__30660__auto__ = switch__30657__auto__(state_34880);
if(cljs.core.keyword_identical_QMARK_(result__30660__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30660__auto__;
}
break;
}
}catch (e34929){var ex__30661__auto__ = e34929;
var statearr_34930_36184 = state_34880;
(statearr_34930_36184[(2)] = ex__30661__auto__);


if(cljs.core.seq((state_34880[(4)]))){
var statearr_34931_36187 = state_34880;
(statearr_34931_36187[(1)] = cljs.core.first((state_34880[(4)])));

} else {
throw ex__30661__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30659__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36189 = state_34880;
state_34880 = G__36189;
continue;
} else {
return ret_value__30659__auto__;
}
break;
}
});
cljs$core$async$state_machine__30658__auto__ = function(state_34880){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30658__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30658__auto____1.call(this,state_34880);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30658__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30658__auto____0;
cljs$core$async$state_machine__30658__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30658__auto____1;
return cljs$core$async$state_machine__30658__auto__;
})()
})();
var state__31649__auto__ = (function (){var statearr_34932 = f__31648__auto__();
(statearr_34932[(6)] = c__31647__auto___36134);

return statearr_34932;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31649__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__34934 = arguments.length;
switch (G__34934) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__31647__auto___36191 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31648__auto__ = (function (){var switch__30657__auto__ = (function (state_34983){
var state_val_34984 = (state_34983[(1)]);
if((state_val_34984 === (7))){
var inst_34979 = (state_34983[(2)]);
var state_34983__$1 = state_34983;
var statearr_34989_36195 = state_34983__$1;
(statearr_34989_36195[(2)] = inst_34979);

(statearr_34989_36195[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34984 === (1))){
var inst_34939 = [];
var inst_34940 = inst_34939;
var inst_34941 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_34983__$1 = (function (){var statearr_34990 = state_34983;
(statearr_34990[(7)] = inst_34941);

(statearr_34990[(8)] = inst_34940);

return statearr_34990;
})();
var statearr_34991_36198 = state_34983__$1;
(statearr_34991_36198[(2)] = null);

(statearr_34991_36198[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34984 === (4))){
var inst_34944 = (state_34983[(9)]);
var inst_34944__$1 = (state_34983[(2)]);
var inst_34945 = (inst_34944__$1 == null);
var inst_34946 = cljs.core.not(inst_34945);
var state_34983__$1 = (function (){var statearr_34992 = state_34983;
(statearr_34992[(9)] = inst_34944__$1);

return statearr_34992;
})();
if(inst_34946){
var statearr_34993_36205 = state_34983__$1;
(statearr_34993_36205[(1)] = (5));

} else {
var statearr_34994_36206 = state_34983__$1;
(statearr_34994_36206[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34984 === (15))){
var inst_34940 = (state_34983[(8)]);
var inst_34971 = cljs.core.vec(inst_34940);
var state_34983__$1 = state_34983;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34983__$1,(18),out,inst_34971);
} else {
if((state_val_34984 === (13))){
var inst_34966 = (state_34983[(2)]);
var state_34983__$1 = state_34983;
var statearr_34996_36207 = state_34983__$1;
(statearr_34996_36207[(2)] = inst_34966);

(statearr_34996_36207[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34984 === (6))){
var inst_34940 = (state_34983[(8)]);
var inst_34968 = inst_34940.length;
var inst_34969 = (inst_34968 > (0));
var state_34983__$1 = state_34983;
if(cljs.core.truth_(inst_34969)){
var statearr_35000_36208 = state_34983__$1;
(statearr_35000_36208[(1)] = (15));

} else {
var statearr_35001_36210 = state_34983__$1;
(statearr_35001_36210[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34984 === (17))){
var inst_34976 = (state_34983[(2)]);
var inst_34977 = cljs.core.async.close_BANG_(out);
var state_34983__$1 = (function (){var statearr_35006 = state_34983;
(statearr_35006[(10)] = inst_34976);

return statearr_35006;
})();
var statearr_35007_36215 = state_34983__$1;
(statearr_35007_36215[(2)] = inst_34977);

(statearr_35007_36215[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34984 === (3))){
var inst_34981 = (state_34983[(2)]);
var state_34983__$1 = state_34983;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34983__$1,inst_34981);
} else {
if((state_val_34984 === (12))){
var inst_34940 = (state_34983[(8)]);
var inst_34959 = cljs.core.vec(inst_34940);
var state_34983__$1 = state_34983;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34983__$1,(14),out,inst_34959);
} else {
if((state_val_34984 === (2))){
var state_34983__$1 = state_34983;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34983__$1,(4),ch);
} else {
if((state_val_34984 === (11))){
var inst_34944 = (state_34983[(9)]);
var inst_34940 = (state_34983[(8)]);
var inst_34948 = (state_34983[(11)]);
var inst_34956 = inst_34940.push(inst_34944);
var tmp35008 = inst_34940;
var inst_34940__$1 = tmp35008;
var inst_34941 = inst_34948;
var state_34983__$1 = (function (){var statearr_35013 = state_34983;
(statearr_35013[(7)] = inst_34941);

(statearr_35013[(12)] = inst_34956);

(statearr_35013[(8)] = inst_34940__$1);

return statearr_35013;
})();
var statearr_35014_36221 = state_34983__$1;
(statearr_35014_36221[(2)] = null);

(statearr_35014_36221[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34984 === (9))){
var inst_34941 = (state_34983[(7)]);
var inst_34952 = cljs.core.keyword_identical_QMARK_(inst_34941,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_34983__$1 = state_34983;
var statearr_35015_36222 = state_34983__$1;
(statearr_35015_36222[(2)] = inst_34952);

(statearr_35015_36222[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34984 === (5))){
var inst_34944 = (state_34983[(9)]);
var inst_34941 = (state_34983[(7)]);
var inst_34949 = (state_34983[(13)]);
var inst_34948 = (state_34983[(11)]);
var inst_34948__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_34944) : f.call(null,inst_34944));
var inst_34949__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_34948__$1,inst_34941);
var state_34983__$1 = (function (){var statearr_35017 = state_34983;
(statearr_35017[(13)] = inst_34949__$1);

(statearr_35017[(11)] = inst_34948__$1);

return statearr_35017;
})();
if(inst_34949__$1){
var statearr_35018_36240 = state_34983__$1;
(statearr_35018_36240[(1)] = (8));

} else {
var statearr_35019_36241 = state_34983__$1;
(statearr_35019_36241[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34984 === (14))){
var inst_34944 = (state_34983[(9)]);
var inst_34948 = (state_34983[(11)]);
var inst_34961 = (state_34983[(2)]);
var inst_34962 = [];
var inst_34963 = inst_34962.push(inst_34944);
var inst_34940 = inst_34962;
var inst_34941 = inst_34948;
var state_34983__$1 = (function (){var statearr_35020 = state_34983;
(statearr_35020[(7)] = inst_34941);

(statearr_35020[(8)] = inst_34940);

(statearr_35020[(14)] = inst_34961);

(statearr_35020[(15)] = inst_34963);

return statearr_35020;
})();
var statearr_35021_36243 = state_34983__$1;
(statearr_35021_36243[(2)] = null);

(statearr_35021_36243[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34984 === (16))){
var state_34983__$1 = state_34983;
var statearr_35022_36244 = state_34983__$1;
(statearr_35022_36244[(2)] = null);

(statearr_35022_36244[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34984 === (10))){
var inst_34954 = (state_34983[(2)]);
var state_34983__$1 = state_34983;
if(cljs.core.truth_(inst_34954)){
var statearr_35023_36245 = state_34983__$1;
(statearr_35023_36245[(1)] = (11));

} else {
var statearr_35024_36246 = state_34983__$1;
(statearr_35024_36246[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34984 === (18))){
var inst_34973 = (state_34983[(2)]);
var state_34983__$1 = state_34983;
var statearr_35027_36251 = state_34983__$1;
(statearr_35027_36251[(2)] = inst_34973);

(statearr_35027_36251[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34984 === (8))){
var inst_34949 = (state_34983[(13)]);
var state_34983__$1 = state_34983;
var statearr_35031_36252 = state_34983__$1;
(statearr_35031_36252[(2)] = inst_34949);

(statearr_35031_36252[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__30658__auto__ = null;
var cljs$core$async$state_machine__30658__auto____0 = (function (){
var statearr_35034 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35034[(0)] = cljs$core$async$state_machine__30658__auto__);

(statearr_35034[(1)] = (1));

return statearr_35034;
});
var cljs$core$async$state_machine__30658__auto____1 = (function (state_34983){
while(true){
var ret_value__30659__auto__ = (function (){try{while(true){
var result__30660__auto__ = switch__30657__auto__(state_34983);
if(cljs.core.keyword_identical_QMARK_(result__30660__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30660__auto__;
}
break;
}
}catch (e35035){var ex__30661__auto__ = e35035;
var statearr_35036_36253 = state_34983;
(statearr_35036_36253[(2)] = ex__30661__auto__);


if(cljs.core.seq((state_34983[(4)]))){
var statearr_35037_36254 = state_34983;
(statearr_35037_36254[(1)] = cljs.core.first((state_34983[(4)])));

} else {
throw ex__30661__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30659__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36256 = state_34983;
state_34983 = G__36256;
continue;
} else {
return ret_value__30659__auto__;
}
break;
}
});
cljs$core$async$state_machine__30658__auto__ = function(state_34983){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30658__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30658__auto____1.call(this,state_34983);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30658__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30658__auto____0;
cljs$core$async$state_machine__30658__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30658__auto____1;
return cljs$core$async$state_machine__30658__auto__;
})()
})();
var state__31649__auto__ = (function (){var statearr_35038 = f__31648__auto__();
(statearr_35038[(6)] = c__31647__auto___36191);

return statearr_35038;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31649__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
