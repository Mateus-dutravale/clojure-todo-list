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
cljs.core.async.t_cljs$core$async31450 = (function (f,blockable,meta31451){
this.f = f;
this.blockable = blockable;
this.meta31451 = meta31451;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31450.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31452,meta31451__$1){
var self__ = this;
var _31452__$1 = this;
return (new cljs.core.async.t_cljs$core$async31450(self__.f,self__.blockable,meta31451__$1));
}));

(cljs.core.async.t_cljs$core$async31450.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31452){
var self__ = this;
var _31452__$1 = this;
return self__.meta31451;
}));

(cljs.core.async.t_cljs$core$async31450.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31450.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async31450.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async31450.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async31450.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta31451","meta31451",73060290,null)], null);
}));

(cljs.core.async.t_cljs$core$async31450.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31450.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31450");

(cljs.core.async.t_cljs$core$async31450.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async31450");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31450.
 */
cljs.core.async.__GT_t_cljs$core$async31450 = (function cljs$core$async$__GT_t_cljs$core$async31450(f,blockable,meta31451){
return (new cljs.core.async.t_cljs$core$async31450(f,blockable,meta31451));
});


cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__31432 = arguments.length;
switch (G__31432) {
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
return (new cljs.core.async.t_cljs$core$async31450(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__31537 = arguments.length;
switch (G__31537) {
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
var G__31563 = arguments.length;
switch (G__31563) {
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
var G__31575 = arguments.length;
switch (G__31575) {
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
var val_34868 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_34868) : fn1.call(null,val_34868));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_34868) : fn1.call(null,val_34868));
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
var G__31589 = arguments.length;
switch (G__31589) {
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
var n__5593__auto___34874 = n;
var x_34875 = (0);
while(true){
if((x_34875 < n__5593__auto___34874)){
(a[x_34875] = x_34875);

var G__34876 = (x_34875 + (1));
x_34875 = G__34876;
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
cljs.core.async.t_cljs$core$async31607 = (function (flag,meta31608){
this.flag = flag;
this.meta31608 = meta31608;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31607.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31609,meta31608__$1){
var self__ = this;
var _31609__$1 = this;
return (new cljs.core.async.t_cljs$core$async31607(self__.flag,meta31608__$1));
}));

(cljs.core.async.t_cljs$core$async31607.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31609){
var self__ = this;
var _31609__$1 = this;
return self__.meta31608;
}));

(cljs.core.async.t_cljs$core$async31607.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31607.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async31607.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async31607.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async31607.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta31608","meta31608",-1216968277,null)], null);
}));

(cljs.core.async.t_cljs$core$async31607.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31607.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31607");

(cljs.core.async.t_cljs$core$async31607.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async31607");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31607.
 */
cljs.core.async.__GT_t_cljs$core$async31607 = (function cljs$core$async$__GT_t_cljs$core$async31607(flag,meta31608){
return (new cljs.core.async.t_cljs$core$async31607(flag,meta31608));
});


cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
return (new cljs.core.async.t_cljs$core$async31607(flag,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31621 = (function (flag,cb,meta31622){
this.flag = flag;
this.cb = cb;
this.meta31622 = meta31622;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31621.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31623,meta31622__$1){
var self__ = this;
var _31623__$1 = this;
return (new cljs.core.async.t_cljs$core$async31621(self__.flag,self__.cb,meta31622__$1));
}));

(cljs.core.async.t_cljs$core$async31621.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31623){
var self__ = this;
var _31623__$1 = this;
return self__.meta31622;
}));

(cljs.core.async.t_cljs$core$async31621.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31621.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async31621.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async31621.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async31621.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta31622","meta31622",-1748485977,null)], null);
}));

(cljs.core.async.t_cljs$core$async31621.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31621.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31621");

(cljs.core.async.t_cljs$core$async31621.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async31621");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31621.
 */
cljs.core.async.__GT_t_cljs$core$async31621 = (function cljs$core$async$__GT_t_cljs$core$async31621(flag,cb,meta31622){
return (new cljs.core.async.t_cljs$core$async31621(flag,cb,meta31622));
});


cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
return (new cljs.core.async.t_cljs$core$async31621(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
var ports__$1 = cljs.core.vec(ports);
var n = cljs.core.count(ports__$1);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports__$1,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,ports__$1,n,idxs,priority){
return (function (p1__31629_SHARP_){
var G__31633 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__31629_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__31633) : fret.call(null,G__31633));
});})(i,val,idx,port,wport,flag,ports__$1,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,ports__$1,n,idxs,priority){
return (function (p1__31630_SHARP_){
var G__31634 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__31630_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__31634) : fret.call(null,G__31634));
});})(i,idx,port,wport,flag,ports__$1,n,idxs,priority))
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
var G__34902 = (i + (1));
i = G__34902;
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
var len__5726__auto___34906 = arguments.length;
var i__5727__auto___34907 = (0);
while(true){
if((i__5727__auto___34907 < len__5726__auto___34906)){
args__5732__auto__.push((arguments[i__5727__auto___34907]));

var G__34908 = (i__5727__auto___34907 + (1));
i__5727__auto___34907 = G__34908;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__31648){
var map__31649 = p__31648;
var map__31649__$1 = cljs.core.__destructure_map(map__31649);
var opts = map__31649__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq31640){
var G__31641 = cljs.core.first(seq31640);
var seq31640__$1 = cljs.core.next(seq31640);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31641,seq31640__$1);
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
var G__31653 = arguments.length;
switch (G__31653) {
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
var c__31198__auto___34922 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31199__auto__ = (function (){var switch__30575__auto__ = (function (state_31697){
var state_val_31698 = (state_31697[(1)]);
if((state_val_31698 === (7))){
var inst_31692 = (state_31697[(2)]);
var state_31697__$1 = state_31697;
var statearr_31704_34923 = state_31697__$1;
(statearr_31704_34923[(2)] = inst_31692);

(statearr_31704_34923[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31698 === (1))){
var state_31697__$1 = state_31697;
var statearr_31705_34924 = state_31697__$1;
(statearr_31705_34924[(2)] = null);

(statearr_31705_34924[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31698 === (4))){
var inst_31663 = (state_31697[(7)]);
var inst_31663__$1 = (state_31697[(2)]);
var inst_31666 = (inst_31663__$1 == null);
var state_31697__$1 = (function (){var statearr_31706 = state_31697;
(statearr_31706[(7)] = inst_31663__$1);

return statearr_31706;
})();
if(cljs.core.truth_(inst_31666)){
var statearr_31707_34925 = state_31697__$1;
(statearr_31707_34925[(1)] = (5));

} else {
var statearr_31708_34926 = state_31697__$1;
(statearr_31708_34926[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31698 === (13))){
var state_31697__$1 = state_31697;
var statearr_31709_34927 = state_31697__$1;
(statearr_31709_34927[(2)] = null);

(statearr_31709_34927[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31698 === (6))){
var inst_31663 = (state_31697[(7)]);
var state_31697__$1 = state_31697;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31697__$1,(11),to,inst_31663);
} else {
if((state_val_31698 === (3))){
var inst_31694 = (state_31697[(2)]);
var state_31697__$1 = state_31697;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31697__$1,inst_31694);
} else {
if((state_val_31698 === (12))){
var state_31697__$1 = state_31697;
var statearr_31712_34928 = state_31697__$1;
(statearr_31712_34928[(2)] = null);

(statearr_31712_34928[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31698 === (2))){
var state_31697__$1 = state_31697;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31697__$1,(4),from);
} else {
if((state_val_31698 === (11))){
var inst_31684 = (state_31697[(2)]);
var state_31697__$1 = state_31697;
if(cljs.core.truth_(inst_31684)){
var statearr_31716_34932 = state_31697__$1;
(statearr_31716_34932[(1)] = (12));

} else {
var statearr_31717_34933 = state_31697__$1;
(statearr_31717_34933[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31698 === (9))){
var state_31697__$1 = state_31697;
var statearr_31718_34934 = state_31697__$1;
(statearr_31718_34934[(2)] = null);

(statearr_31718_34934[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31698 === (5))){
var state_31697__$1 = state_31697;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31719_34935 = state_31697__$1;
(statearr_31719_34935[(1)] = (8));

} else {
var statearr_31720_34936 = state_31697__$1;
(statearr_31720_34936[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31698 === (14))){
var inst_31690 = (state_31697[(2)]);
var state_31697__$1 = state_31697;
var statearr_31723_34937 = state_31697__$1;
(statearr_31723_34937[(2)] = inst_31690);

(statearr_31723_34937[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31698 === (10))){
var inst_31679 = (state_31697[(2)]);
var state_31697__$1 = state_31697;
var statearr_31727_34938 = state_31697__$1;
(statearr_31727_34938[(2)] = inst_31679);

(statearr_31727_34938[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31698 === (8))){
var inst_31674 = cljs.core.async.close_BANG_(to);
var state_31697__$1 = state_31697;
var statearr_31728_34939 = state_31697__$1;
(statearr_31728_34939[(2)] = inst_31674);

(statearr_31728_34939[(1)] = (10));


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
var cljs$core$async$state_machine__30576__auto__ = null;
var cljs$core$async$state_machine__30576__auto____0 = (function (){
var statearr_31729 = [null,null,null,null,null,null,null,null];
(statearr_31729[(0)] = cljs$core$async$state_machine__30576__auto__);

(statearr_31729[(1)] = (1));

return statearr_31729;
});
var cljs$core$async$state_machine__30576__auto____1 = (function (state_31697){
while(true){
var ret_value__30577__auto__ = (function (){try{while(true){
var result__30578__auto__ = switch__30575__auto__(state_31697);
if(cljs.core.keyword_identical_QMARK_(result__30578__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30578__auto__;
}
break;
}
}catch (e31731){var ex__30579__auto__ = e31731;
var statearr_31732_34940 = state_31697;
(statearr_31732_34940[(2)] = ex__30579__auto__);


if(cljs.core.seq((state_31697[(4)]))){
var statearr_31733_34941 = state_31697;
(statearr_31733_34941[(1)] = cljs.core.first((state_31697[(4)])));

} else {
throw ex__30579__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30577__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34942 = state_31697;
state_31697 = G__34942;
continue;
} else {
return ret_value__30577__auto__;
}
break;
}
});
cljs$core$async$state_machine__30576__auto__ = function(state_31697){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30576__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30576__auto____1.call(this,state_31697);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30576__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30576__auto____0;
cljs$core$async$state_machine__30576__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30576__auto____1;
return cljs$core$async$state_machine__30576__auto__;
})()
})();
var state__31220__auto__ = (function (){var statearr_31734 = f__31199__auto__();
(statearr_31734[(6)] = c__31198__auto___34922);

return statearr_31734;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31220__auto__);
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
var process__$1 = (function (p__31745){
var vec__31746 = p__31745;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31746,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31746,(1),null);
var job = vec__31746;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__31198__auto___34944 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31199__auto__ = (function (){var switch__30575__auto__ = (function (state_31754){
var state_val_31755 = (state_31754[(1)]);
if((state_val_31755 === (1))){
var state_31754__$1 = state_31754;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31754__$1,(2),res,v);
} else {
if((state_val_31755 === (2))){
var inst_31751 = (state_31754[(2)]);
var inst_31752 = cljs.core.async.close_BANG_(res);
var state_31754__$1 = (function (){var statearr_31762 = state_31754;
(statearr_31762[(7)] = inst_31751);

return statearr_31762;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_31754__$1,inst_31752);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30576__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30576__auto____0 = (function (){
var statearr_31763 = [null,null,null,null,null,null,null,null];
(statearr_31763[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30576__auto__);

(statearr_31763[(1)] = (1));

return statearr_31763;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30576__auto____1 = (function (state_31754){
while(true){
var ret_value__30577__auto__ = (function (){try{while(true){
var result__30578__auto__ = switch__30575__auto__(state_31754);
if(cljs.core.keyword_identical_QMARK_(result__30578__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30578__auto__;
}
break;
}
}catch (e31764){var ex__30579__auto__ = e31764;
var statearr_31765_34948 = state_31754;
(statearr_31765_34948[(2)] = ex__30579__auto__);


if(cljs.core.seq((state_31754[(4)]))){
var statearr_31766_34953 = state_31754;
(statearr_31766_34953[(1)] = cljs.core.first((state_31754[(4)])));

} else {
throw ex__30579__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30577__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34958 = state_31754;
state_31754 = G__34958;
continue;
} else {
return ret_value__30577__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30576__auto__ = function(state_31754){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30576__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30576__auto____1.call(this,state_31754);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30576__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30576__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30576__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30576__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30576__auto__;
})()
})();
var state__31220__auto__ = (function (){var statearr_31767 = f__31199__auto__();
(statearr_31767[(6)] = c__31198__auto___34944);

return statearr_31767;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31220__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__31769){
var vec__31770 = p__31769;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31770,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31770,(1),null);
var job = vec__31770;
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
var n__5593__auto___34963 = n;
var __34964 = (0);
while(true){
if((__34964 < n__5593__auto___34963)){
var G__31773_34966 = type;
var G__31773_34967__$1 = (((G__31773_34966 instanceof cljs.core.Keyword))?G__31773_34966.fqn:null);
switch (G__31773_34967__$1) {
case "compute":
var c__31198__auto___34969 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__34964,c__31198__auto___34969,G__31773_34966,G__31773_34967__$1,n__5593__auto___34963,jobs,results,process__$1,async){
return (function (){
var f__31199__auto__ = (function (){var switch__30575__auto__ = ((function (__34964,c__31198__auto___34969,G__31773_34966,G__31773_34967__$1,n__5593__auto___34963,jobs,results,process__$1,async){
return (function (state_31786){
var state_val_31787 = (state_31786[(1)]);
if((state_val_31787 === (1))){
var state_31786__$1 = state_31786;
var statearr_31789_34980 = state_31786__$1;
(statearr_31789_34980[(2)] = null);

(statearr_31789_34980[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31787 === (2))){
var state_31786__$1 = state_31786;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31786__$1,(4),jobs);
} else {
if((state_val_31787 === (3))){
var inst_31784 = (state_31786[(2)]);
var state_31786__$1 = state_31786;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31786__$1,inst_31784);
} else {
if((state_val_31787 === (4))){
var inst_31776 = (state_31786[(2)]);
var inst_31777 = process__$1(inst_31776);
var state_31786__$1 = state_31786;
if(cljs.core.truth_(inst_31777)){
var statearr_31794_34984 = state_31786__$1;
(statearr_31794_34984[(1)] = (5));

} else {
var statearr_31795_34986 = state_31786__$1;
(statearr_31795_34986[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31787 === (5))){
var state_31786__$1 = state_31786;
var statearr_31796_34990 = state_31786__$1;
(statearr_31796_34990[(2)] = null);

(statearr_31796_34990[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31787 === (6))){
var state_31786__$1 = state_31786;
var statearr_31798_34996 = state_31786__$1;
(statearr_31798_34996[(2)] = null);

(statearr_31798_34996[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31787 === (7))){
var inst_31782 = (state_31786[(2)]);
var state_31786__$1 = state_31786;
var statearr_31800_35000 = state_31786__$1;
(statearr_31800_35000[(2)] = inst_31782);

(statearr_31800_35000[(1)] = (3));


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
});})(__34964,c__31198__auto___34969,G__31773_34966,G__31773_34967__$1,n__5593__auto___34963,jobs,results,process__$1,async))
;
return ((function (__34964,switch__30575__auto__,c__31198__auto___34969,G__31773_34966,G__31773_34967__$1,n__5593__auto___34963,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30576__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30576__auto____0 = (function (){
var statearr_31805 = [null,null,null,null,null,null,null];
(statearr_31805[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30576__auto__);

(statearr_31805[(1)] = (1));

return statearr_31805;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30576__auto____1 = (function (state_31786){
while(true){
var ret_value__30577__auto__ = (function (){try{while(true){
var result__30578__auto__ = switch__30575__auto__(state_31786);
if(cljs.core.keyword_identical_QMARK_(result__30578__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30578__auto__;
}
break;
}
}catch (e31806){var ex__30579__auto__ = e31806;
var statearr_31807_35010 = state_31786;
(statearr_31807_35010[(2)] = ex__30579__auto__);


if(cljs.core.seq((state_31786[(4)]))){
var statearr_31809_35011 = state_31786;
(statearr_31809_35011[(1)] = cljs.core.first((state_31786[(4)])));

} else {
throw ex__30579__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30577__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35012 = state_31786;
state_31786 = G__35012;
continue;
} else {
return ret_value__30577__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30576__auto__ = function(state_31786){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30576__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30576__auto____1.call(this,state_31786);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30576__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30576__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30576__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30576__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30576__auto__;
})()
;})(__34964,switch__30575__auto__,c__31198__auto___34969,G__31773_34966,G__31773_34967__$1,n__5593__auto___34963,jobs,results,process__$1,async))
})();
var state__31220__auto__ = (function (){var statearr_31814 = f__31199__auto__();
(statearr_31814[(6)] = c__31198__auto___34969);

return statearr_31814;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31220__auto__);
});})(__34964,c__31198__auto___34969,G__31773_34966,G__31773_34967__$1,n__5593__auto___34963,jobs,results,process__$1,async))
);


break;
case "async":
var c__31198__auto___35016 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__34964,c__31198__auto___35016,G__31773_34966,G__31773_34967__$1,n__5593__auto___34963,jobs,results,process__$1,async){
return (function (){
var f__31199__auto__ = (function (){var switch__30575__auto__ = ((function (__34964,c__31198__auto___35016,G__31773_34966,G__31773_34967__$1,n__5593__auto___34963,jobs,results,process__$1,async){
return (function (state_31828){
var state_val_31829 = (state_31828[(1)]);
if((state_val_31829 === (1))){
var state_31828__$1 = state_31828;
var statearr_31834_35017 = state_31828__$1;
(statearr_31834_35017[(2)] = null);

(statearr_31834_35017[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31829 === (2))){
var state_31828__$1 = state_31828;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31828__$1,(4),jobs);
} else {
if((state_val_31829 === (3))){
var inst_31826 = (state_31828[(2)]);
var state_31828__$1 = state_31828;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31828__$1,inst_31826);
} else {
if((state_val_31829 === (4))){
var inst_31817 = (state_31828[(2)]);
var inst_31818 = async(inst_31817);
var state_31828__$1 = state_31828;
if(cljs.core.truth_(inst_31818)){
var statearr_31842_35021 = state_31828__$1;
(statearr_31842_35021[(1)] = (5));

} else {
var statearr_31843_35022 = state_31828__$1;
(statearr_31843_35022[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31829 === (5))){
var state_31828__$1 = state_31828;
var statearr_31844_35023 = state_31828__$1;
(statearr_31844_35023[(2)] = null);

(statearr_31844_35023[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31829 === (6))){
var state_31828__$1 = state_31828;
var statearr_31849_35024 = state_31828__$1;
(statearr_31849_35024[(2)] = null);

(statearr_31849_35024[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31829 === (7))){
var inst_31824 = (state_31828[(2)]);
var state_31828__$1 = state_31828;
var statearr_31853_35025 = state_31828__$1;
(statearr_31853_35025[(2)] = inst_31824);

(statearr_31853_35025[(1)] = (3));


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
});})(__34964,c__31198__auto___35016,G__31773_34966,G__31773_34967__$1,n__5593__auto___34963,jobs,results,process__$1,async))
;
return ((function (__34964,switch__30575__auto__,c__31198__auto___35016,G__31773_34966,G__31773_34967__$1,n__5593__auto___34963,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30576__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30576__auto____0 = (function (){
var statearr_31860 = [null,null,null,null,null,null,null];
(statearr_31860[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30576__auto__);

(statearr_31860[(1)] = (1));

return statearr_31860;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30576__auto____1 = (function (state_31828){
while(true){
var ret_value__30577__auto__ = (function (){try{while(true){
var result__30578__auto__ = switch__30575__auto__(state_31828);
if(cljs.core.keyword_identical_QMARK_(result__30578__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30578__auto__;
}
break;
}
}catch (e31862){var ex__30579__auto__ = e31862;
var statearr_31863_35026 = state_31828;
(statearr_31863_35026[(2)] = ex__30579__auto__);


if(cljs.core.seq((state_31828[(4)]))){
var statearr_31867_35027 = state_31828;
(statearr_31867_35027[(1)] = cljs.core.first((state_31828[(4)])));

} else {
throw ex__30579__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30577__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35028 = state_31828;
state_31828 = G__35028;
continue;
} else {
return ret_value__30577__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30576__auto__ = function(state_31828){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30576__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30576__auto____1.call(this,state_31828);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30576__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30576__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30576__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30576__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30576__auto__;
})()
;})(__34964,switch__30575__auto__,c__31198__auto___35016,G__31773_34966,G__31773_34967__$1,n__5593__auto___34963,jobs,results,process__$1,async))
})();
var state__31220__auto__ = (function (){var statearr_31871 = f__31199__auto__();
(statearr_31871[(6)] = c__31198__auto___35016);

return statearr_31871;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31220__auto__);
});})(__34964,c__31198__auto___35016,G__31773_34966,G__31773_34967__$1,n__5593__auto___34963,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31773_34967__$1)].join('')));

}

var G__35029 = (__34964 + (1));
__34964 = G__35029;
continue;
} else {
}
break;
}

var c__31198__auto___35030 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31199__auto__ = (function (){var switch__30575__auto__ = (function (state_31914){
var state_val_31915 = (state_31914[(1)]);
if((state_val_31915 === (7))){
var inst_31910 = (state_31914[(2)]);
var state_31914__$1 = state_31914;
var statearr_31929_35031 = state_31914__$1;
(statearr_31929_35031[(2)] = inst_31910);

(statearr_31929_35031[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31915 === (1))){
var state_31914__$1 = state_31914;
var statearr_31930_35032 = state_31914__$1;
(statearr_31930_35032[(2)] = null);

(statearr_31930_35032[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31915 === (4))){
var inst_31881 = (state_31914[(7)]);
var inst_31881__$1 = (state_31914[(2)]);
var inst_31883 = (inst_31881__$1 == null);
var state_31914__$1 = (function (){var statearr_31932 = state_31914;
(statearr_31932[(7)] = inst_31881__$1);

return statearr_31932;
})();
if(cljs.core.truth_(inst_31883)){
var statearr_31934_35033 = state_31914__$1;
(statearr_31934_35033[(1)] = (5));

} else {
var statearr_31936_35034 = state_31914__$1;
(statearr_31936_35034[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31915 === (6))){
var inst_31881 = (state_31914[(7)]);
var inst_31890 = (state_31914[(8)]);
var inst_31890__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_31897 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_31901 = [inst_31881,inst_31890__$1];
var inst_31902 = (new cljs.core.PersistentVector(null,2,(5),inst_31897,inst_31901,null));
var state_31914__$1 = (function (){var statearr_31940 = state_31914;
(statearr_31940[(8)] = inst_31890__$1);

return statearr_31940;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31914__$1,(8),jobs,inst_31902);
} else {
if((state_val_31915 === (3))){
var inst_31912 = (state_31914[(2)]);
var state_31914__$1 = state_31914;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31914__$1,inst_31912);
} else {
if((state_val_31915 === (2))){
var state_31914__$1 = state_31914;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31914__$1,(4),from);
} else {
if((state_val_31915 === (9))){
var inst_31906 = (state_31914[(2)]);
var state_31914__$1 = (function (){var statearr_31944 = state_31914;
(statearr_31944[(9)] = inst_31906);

return statearr_31944;
})();
var statearr_31945_35045 = state_31914__$1;
(statearr_31945_35045[(2)] = null);

(statearr_31945_35045[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31915 === (5))){
var inst_31887 = cljs.core.async.close_BANG_(jobs);
var state_31914__$1 = state_31914;
var statearr_31948_35046 = state_31914__$1;
(statearr_31948_35046[(2)] = inst_31887);

(statearr_31948_35046[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31915 === (8))){
var inst_31890 = (state_31914[(8)]);
var inst_31904 = (state_31914[(2)]);
var state_31914__$1 = (function (){var statearr_31949 = state_31914;
(statearr_31949[(10)] = inst_31904);

return statearr_31949;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31914__$1,(9),results,inst_31890);
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
var cljs$core$async$pipeline_STAR__$_state_machine__30576__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30576__auto____0 = (function (){
var statearr_31956 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31956[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30576__auto__);

(statearr_31956[(1)] = (1));

return statearr_31956;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30576__auto____1 = (function (state_31914){
while(true){
var ret_value__30577__auto__ = (function (){try{while(true){
var result__30578__auto__ = switch__30575__auto__(state_31914);
if(cljs.core.keyword_identical_QMARK_(result__30578__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30578__auto__;
}
break;
}
}catch (e31960){var ex__30579__auto__ = e31960;
var statearr_31961_35052 = state_31914;
(statearr_31961_35052[(2)] = ex__30579__auto__);


if(cljs.core.seq((state_31914[(4)]))){
var statearr_31965_35054 = state_31914;
(statearr_31965_35054[(1)] = cljs.core.first((state_31914[(4)])));

} else {
throw ex__30579__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30577__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35059 = state_31914;
state_31914 = G__35059;
continue;
} else {
return ret_value__30577__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30576__auto__ = function(state_31914){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30576__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30576__auto____1.call(this,state_31914);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30576__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30576__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30576__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30576__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30576__auto__;
})()
})();
var state__31220__auto__ = (function (){var statearr_31972 = f__31199__auto__();
(statearr_31972[(6)] = c__31198__auto___35030);

return statearr_31972;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31220__auto__);
}));


var c__31198__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31199__auto__ = (function (){var switch__30575__auto__ = (function (state_32025){
var state_val_32026 = (state_32025[(1)]);
if((state_val_32026 === (7))){
var inst_32021 = (state_32025[(2)]);
var state_32025__$1 = state_32025;
var statearr_32028_35060 = state_32025__$1;
(statearr_32028_35060[(2)] = inst_32021);

(statearr_32028_35060[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32026 === (20))){
var state_32025__$1 = state_32025;
var statearr_32034_35061 = state_32025__$1;
(statearr_32034_35061[(2)] = null);

(statearr_32034_35061[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32026 === (1))){
var state_32025__$1 = state_32025;
var statearr_32042_35063 = state_32025__$1;
(statearr_32042_35063[(2)] = null);

(statearr_32042_35063[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32026 === (4))){
var inst_31978 = (state_32025[(7)]);
var inst_31978__$1 = (state_32025[(2)]);
var inst_31982 = (inst_31978__$1 == null);
var state_32025__$1 = (function (){var statearr_32043 = state_32025;
(statearr_32043[(7)] = inst_31978__$1);

return statearr_32043;
})();
if(cljs.core.truth_(inst_31982)){
var statearr_32044_35064 = state_32025__$1;
(statearr_32044_35064[(1)] = (5));

} else {
var statearr_32045_35065 = state_32025__$1;
(statearr_32045_35065[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32026 === (15))){
var inst_31999 = (state_32025[(8)]);
var state_32025__$1 = state_32025;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32025__$1,(18),to,inst_31999);
} else {
if((state_val_32026 === (21))){
var inst_32015 = (state_32025[(2)]);
var state_32025__$1 = state_32025;
var statearr_32052_35066 = state_32025__$1;
(statearr_32052_35066[(2)] = inst_32015);

(statearr_32052_35066[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32026 === (13))){
var inst_32017 = (state_32025[(2)]);
var state_32025__$1 = (function (){var statearr_32054 = state_32025;
(statearr_32054[(9)] = inst_32017);

return statearr_32054;
})();
var statearr_32055_35067 = state_32025__$1;
(statearr_32055_35067[(2)] = null);

(statearr_32055_35067[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32026 === (6))){
var inst_31978 = (state_32025[(7)]);
var state_32025__$1 = state_32025;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32025__$1,(11),inst_31978);
} else {
if((state_val_32026 === (17))){
var inst_32009 = (state_32025[(2)]);
var state_32025__$1 = state_32025;
if(cljs.core.truth_(inst_32009)){
var statearr_32056_35068 = state_32025__$1;
(statearr_32056_35068[(1)] = (19));

} else {
var statearr_32057_35069 = state_32025__$1;
(statearr_32057_35069[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32026 === (3))){
var inst_32023 = (state_32025[(2)]);
var state_32025__$1 = state_32025;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32025__$1,inst_32023);
} else {
if((state_val_32026 === (12))){
var inst_31992 = (state_32025[(10)]);
var state_32025__$1 = state_32025;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32025__$1,(14),inst_31992);
} else {
if((state_val_32026 === (2))){
var state_32025__$1 = state_32025;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32025__$1,(4),results);
} else {
if((state_val_32026 === (19))){
var state_32025__$1 = state_32025;
var statearr_32067_35070 = state_32025__$1;
(statearr_32067_35070[(2)] = null);

(statearr_32067_35070[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32026 === (11))){
var inst_31992 = (state_32025[(2)]);
var state_32025__$1 = (function (){var statearr_32068 = state_32025;
(statearr_32068[(10)] = inst_31992);

return statearr_32068;
})();
var statearr_32069_35071 = state_32025__$1;
(statearr_32069_35071[(2)] = null);

(statearr_32069_35071[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32026 === (9))){
var state_32025__$1 = state_32025;
var statearr_32074_35072 = state_32025__$1;
(statearr_32074_35072[(2)] = null);

(statearr_32074_35072[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32026 === (5))){
var state_32025__$1 = state_32025;
if(cljs.core.truth_(close_QMARK_)){
var statearr_32078_35073 = state_32025__$1;
(statearr_32078_35073[(1)] = (8));

} else {
var statearr_32079_35074 = state_32025__$1;
(statearr_32079_35074[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32026 === (14))){
var inst_31999 = (state_32025[(8)]);
var inst_32001 = (state_32025[(11)]);
var inst_31999__$1 = (state_32025[(2)]);
var inst_32000 = (inst_31999__$1 == null);
var inst_32001__$1 = cljs.core.not(inst_32000);
var state_32025__$1 = (function (){var statearr_32084 = state_32025;
(statearr_32084[(8)] = inst_31999__$1);

(statearr_32084[(11)] = inst_32001__$1);

return statearr_32084;
})();
if(inst_32001__$1){
var statearr_32085_35075 = state_32025__$1;
(statearr_32085_35075[(1)] = (15));

} else {
var statearr_32086_35076 = state_32025__$1;
(statearr_32086_35076[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32026 === (16))){
var inst_32001 = (state_32025[(11)]);
var state_32025__$1 = state_32025;
var statearr_32087_35077 = state_32025__$1;
(statearr_32087_35077[(2)] = inst_32001);

(statearr_32087_35077[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32026 === (10))){
var inst_31988 = (state_32025[(2)]);
var state_32025__$1 = state_32025;
var statearr_32088_35078 = state_32025__$1;
(statearr_32088_35078[(2)] = inst_31988);

(statearr_32088_35078[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32026 === (18))){
var inst_32005 = (state_32025[(2)]);
var state_32025__$1 = state_32025;
var statearr_32089_35079 = state_32025__$1;
(statearr_32089_35079[(2)] = inst_32005);

(statearr_32089_35079[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32026 === (8))){
var inst_31985 = cljs.core.async.close_BANG_(to);
var state_32025__$1 = state_32025;
var statearr_32090_35080 = state_32025__$1;
(statearr_32090_35080[(2)] = inst_31985);

(statearr_32090_35080[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__30576__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30576__auto____0 = (function (){
var statearr_32091 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32091[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30576__auto__);

(statearr_32091[(1)] = (1));

return statearr_32091;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30576__auto____1 = (function (state_32025){
while(true){
var ret_value__30577__auto__ = (function (){try{while(true){
var result__30578__auto__ = switch__30575__auto__(state_32025);
if(cljs.core.keyword_identical_QMARK_(result__30578__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30578__auto__;
}
break;
}
}catch (e32092){var ex__30579__auto__ = e32092;
var statearr_32093_35081 = state_32025;
(statearr_32093_35081[(2)] = ex__30579__auto__);


if(cljs.core.seq((state_32025[(4)]))){
var statearr_32094_35082 = state_32025;
(statearr_32094_35082[(1)] = cljs.core.first((state_32025[(4)])));

} else {
throw ex__30579__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30577__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35084 = state_32025;
state_32025 = G__35084;
continue;
} else {
return ret_value__30577__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30576__auto__ = function(state_32025){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30576__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30576__auto____1.call(this,state_32025);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30576__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30576__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30576__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30576__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30576__auto__;
})()
})();
var state__31220__auto__ = (function (){var statearr_32097 = f__31199__auto__();
(statearr_32097[(6)] = c__31198__auto__);

return statearr_32097;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31220__auto__);
}));

return c__31198__auto__;
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
var G__32099 = arguments.length;
switch (G__32099) {
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
var G__32112 = arguments.length;
switch (G__32112) {
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
var G__32133 = arguments.length;
switch (G__32133) {
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
var c__31198__auto___35092 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31199__auto__ = (function (){var switch__30575__auto__ = (function (state_32167){
var state_val_32168 = (state_32167[(1)]);
if((state_val_32168 === (7))){
var inst_32163 = (state_32167[(2)]);
var state_32167__$1 = state_32167;
var statearr_32173_35096 = state_32167__$1;
(statearr_32173_35096[(2)] = inst_32163);

(statearr_32173_35096[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32168 === (1))){
var state_32167__$1 = state_32167;
var statearr_32176_35097 = state_32167__$1;
(statearr_32176_35097[(2)] = null);

(statearr_32176_35097[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32168 === (4))){
var inst_32144 = (state_32167[(7)]);
var inst_32144__$1 = (state_32167[(2)]);
var inst_32145 = (inst_32144__$1 == null);
var state_32167__$1 = (function (){var statearr_32177 = state_32167;
(statearr_32177[(7)] = inst_32144__$1);

return statearr_32177;
})();
if(cljs.core.truth_(inst_32145)){
var statearr_32178_35099 = state_32167__$1;
(statearr_32178_35099[(1)] = (5));

} else {
var statearr_32180_35100 = state_32167__$1;
(statearr_32180_35100[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32168 === (13))){
var state_32167__$1 = state_32167;
var statearr_32183_35102 = state_32167__$1;
(statearr_32183_35102[(2)] = null);

(statearr_32183_35102[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32168 === (6))){
var inst_32144 = (state_32167[(7)]);
var inst_32150 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_32144) : p.call(null,inst_32144));
var state_32167__$1 = state_32167;
if(cljs.core.truth_(inst_32150)){
var statearr_32185_35103 = state_32167__$1;
(statearr_32185_35103[(1)] = (9));

} else {
var statearr_32186_35104 = state_32167__$1;
(statearr_32186_35104[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32168 === (3))){
var inst_32165 = (state_32167[(2)]);
var state_32167__$1 = state_32167;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32167__$1,inst_32165);
} else {
if((state_val_32168 === (12))){
var state_32167__$1 = state_32167;
var statearr_32190_35105 = state_32167__$1;
(statearr_32190_35105[(2)] = null);

(statearr_32190_35105[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32168 === (2))){
var state_32167__$1 = state_32167;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32167__$1,(4),ch);
} else {
if((state_val_32168 === (11))){
var inst_32144 = (state_32167[(7)]);
var inst_32154 = (state_32167[(2)]);
var state_32167__$1 = state_32167;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32167__$1,(8),inst_32154,inst_32144);
} else {
if((state_val_32168 === (9))){
var state_32167__$1 = state_32167;
var statearr_32192_35106 = state_32167__$1;
(statearr_32192_35106[(2)] = tc);

(statearr_32192_35106[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32168 === (5))){
var inst_32147 = cljs.core.async.close_BANG_(tc);
var inst_32148 = cljs.core.async.close_BANG_(fc);
var state_32167__$1 = (function (){var statearr_32193 = state_32167;
(statearr_32193[(8)] = inst_32147);

return statearr_32193;
})();
var statearr_32195_35108 = state_32167__$1;
(statearr_32195_35108[(2)] = inst_32148);

(statearr_32195_35108[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32168 === (14))){
var inst_32161 = (state_32167[(2)]);
var state_32167__$1 = state_32167;
var statearr_32203_35111 = state_32167__$1;
(statearr_32203_35111[(2)] = inst_32161);

(statearr_32203_35111[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32168 === (10))){
var state_32167__$1 = state_32167;
var statearr_32205_35112 = state_32167__$1;
(statearr_32205_35112[(2)] = fc);

(statearr_32205_35112[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32168 === (8))){
var inst_32156 = (state_32167[(2)]);
var state_32167__$1 = state_32167;
if(cljs.core.truth_(inst_32156)){
var statearr_32207_35113 = state_32167__$1;
(statearr_32207_35113[(1)] = (12));

} else {
var statearr_32208_35114 = state_32167__$1;
(statearr_32208_35114[(1)] = (13));

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
var cljs$core$async$state_machine__30576__auto__ = null;
var cljs$core$async$state_machine__30576__auto____0 = (function (){
var statearr_32210 = [null,null,null,null,null,null,null,null,null];
(statearr_32210[(0)] = cljs$core$async$state_machine__30576__auto__);

(statearr_32210[(1)] = (1));

return statearr_32210;
});
var cljs$core$async$state_machine__30576__auto____1 = (function (state_32167){
while(true){
var ret_value__30577__auto__ = (function (){try{while(true){
var result__30578__auto__ = switch__30575__auto__(state_32167);
if(cljs.core.keyword_identical_QMARK_(result__30578__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30578__auto__;
}
break;
}
}catch (e32212){var ex__30579__auto__ = e32212;
var statearr_32214_35115 = state_32167;
(statearr_32214_35115[(2)] = ex__30579__auto__);


if(cljs.core.seq((state_32167[(4)]))){
var statearr_32217_35116 = state_32167;
(statearr_32217_35116[(1)] = cljs.core.first((state_32167[(4)])));

} else {
throw ex__30579__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30577__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35117 = state_32167;
state_32167 = G__35117;
continue;
} else {
return ret_value__30577__auto__;
}
break;
}
});
cljs$core$async$state_machine__30576__auto__ = function(state_32167){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30576__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30576__auto____1.call(this,state_32167);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30576__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30576__auto____0;
cljs$core$async$state_machine__30576__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30576__auto____1;
return cljs$core$async$state_machine__30576__auto__;
})()
})();
var state__31220__auto__ = (function (){var statearr_32221 = f__31199__auto__();
(statearr_32221[(6)] = c__31198__auto___35092);

return statearr_32221;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31220__auto__);
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
var c__31198__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31199__auto__ = (function (){var switch__30575__auto__ = (function (state_32255){
var state_val_32256 = (state_32255[(1)]);
if((state_val_32256 === (7))){
var inst_32248 = (state_32255[(2)]);
var state_32255__$1 = state_32255;
var statearr_32264_35119 = state_32255__$1;
(statearr_32264_35119[(2)] = inst_32248);

(statearr_32264_35119[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32256 === (1))){
var inst_32223 = init;
var inst_32226 = inst_32223;
var state_32255__$1 = (function (){var statearr_32267 = state_32255;
(statearr_32267[(7)] = inst_32226);

return statearr_32267;
})();
var statearr_32269_35120 = state_32255__$1;
(statearr_32269_35120[(2)] = null);

(statearr_32269_35120[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32256 === (4))){
var inst_32231 = (state_32255[(8)]);
var inst_32231__$1 = (state_32255[(2)]);
var inst_32232 = (inst_32231__$1 == null);
var state_32255__$1 = (function (){var statearr_32271 = state_32255;
(statearr_32271[(8)] = inst_32231__$1);

return statearr_32271;
})();
if(cljs.core.truth_(inst_32232)){
var statearr_32274_35122 = state_32255__$1;
(statearr_32274_35122[(1)] = (5));

} else {
var statearr_32277_35123 = state_32255__$1;
(statearr_32277_35123[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32256 === (6))){
var inst_32226 = (state_32255[(7)]);
var inst_32231 = (state_32255[(8)]);
var inst_32235 = (state_32255[(9)]);
var inst_32235__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_32226,inst_32231) : f.call(null,inst_32226,inst_32231));
var inst_32236 = cljs.core.reduced_QMARK_(inst_32235__$1);
var state_32255__$1 = (function (){var statearr_32281 = state_32255;
(statearr_32281[(9)] = inst_32235__$1);

return statearr_32281;
})();
if(inst_32236){
var statearr_32282_35125 = state_32255__$1;
(statearr_32282_35125[(1)] = (8));

} else {
var statearr_32285_35126 = state_32255__$1;
(statearr_32285_35126[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32256 === (3))){
var inst_32250 = (state_32255[(2)]);
var state_32255__$1 = state_32255;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32255__$1,inst_32250);
} else {
if((state_val_32256 === (2))){
var state_32255__$1 = state_32255;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32255__$1,(4),ch);
} else {
if((state_val_32256 === (9))){
var inst_32235 = (state_32255[(9)]);
var inst_32226 = inst_32235;
var state_32255__$1 = (function (){var statearr_32296 = state_32255;
(statearr_32296[(7)] = inst_32226);

return statearr_32296;
})();
var statearr_32298_35128 = state_32255__$1;
(statearr_32298_35128[(2)] = null);

(statearr_32298_35128[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32256 === (5))){
var inst_32226 = (state_32255[(7)]);
var state_32255__$1 = state_32255;
var statearr_32302_35129 = state_32255__$1;
(statearr_32302_35129[(2)] = inst_32226);

(statearr_32302_35129[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32256 === (10))){
var inst_32246 = (state_32255[(2)]);
var state_32255__$1 = state_32255;
var statearr_32304_35130 = state_32255__$1;
(statearr_32304_35130[(2)] = inst_32246);

(statearr_32304_35130[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32256 === (8))){
var inst_32235 = (state_32255[(9)]);
var inst_32241 = cljs.core.deref(inst_32235);
var state_32255__$1 = state_32255;
var statearr_32306_35137 = state_32255__$1;
(statearr_32306_35137[(2)] = inst_32241);

(statearr_32306_35137[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__30576__auto__ = null;
var cljs$core$async$reduce_$_state_machine__30576__auto____0 = (function (){
var statearr_32313 = [null,null,null,null,null,null,null,null,null,null];
(statearr_32313[(0)] = cljs$core$async$reduce_$_state_machine__30576__auto__);

(statearr_32313[(1)] = (1));

return statearr_32313;
});
var cljs$core$async$reduce_$_state_machine__30576__auto____1 = (function (state_32255){
while(true){
var ret_value__30577__auto__ = (function (){try{while(true){
var result__30578__auto__ = switch__30575__auto__(state_32255);
if(cljs.core.keyword_identical_QMARK_(result__30578__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30578__auto__;
}
break;
}
}catch (e32316){var ex__30579__auto__ = e32316;
var statearr_32318_35138 = state_32255;
(statearr_32318_35138[(2)] = ex__30579__auto__);


if(cljs.core.seq((state_32255[(4)]))){
var statearr_32321_35139 = state_32255;
(statearr_32321_35139[(1)] = cljs.core.first((state_32255[(4)])));

} else {
throw ex__30579__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30577__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35140 = state_32255;
state_32255 = G__35140;
continue;
} else {
return ret_value__30577__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__30576__auto__ = function(state_32255){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__30576__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__30576__auto____1.call(this,state_32255);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__30576__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__30576__auto____0;
cljs$core$async$reduce_$_state_machine__30576__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__30576__auto____1;
return cljs$core$async$reduce_$_state_machine__30576__auto__;
})()
})();
var state__31220__auto__ = (function (){var statearr_32327 = f__31199__auto__();
(statearr_32327[(6)] = c__31198__auto__);

return statearr_32327;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31220__auto__);
}));

return c__31198__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__31198__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31199__auto__ = (function (){var switch__30575__auto__ = (function (state_32341){
var state_val_32342 = (state_32341[(1)]);
if((state_val_32342 === (1))){
var inst_32335 = cljs.core.async.reduce(f__$1,init,ch);
var state_32341__$1 = state_32341;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32341__$1,(2),inst_32335);
} else {
if((state_val_32342 === (2))){
var inst_32338 = (state_32341[(2)]);
var inst_32339 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_32338) : f__$1.call(null,inst_32338));
var state_32341__$1 = state_32341;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32341__$1,inst_32339);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__30576__auto__ = null;
var cljs$core$async$transduce_$_state_machine__30576__auto____0 = (function (){
var statearr_32358 = [null,null,null,null,null,null,null];
(statearr_32358[(0)] = cljs$core$async$transduce_$_state_machine__30576__auto__);

(statearr_32358[(1)] = (1));

return statearr_32358;
});
var cljs$core$async$transduce_$_state_machine__30576__auto____1 = (function (state_32341){
while(true){
var ret_value__30577__auto__ = (function (){try{while(true){
var result__30578__auto__ = switch__30575__auto__(state_32341);
if(cljs.core.keyword_identical_QMARK_(result__30578__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30578__auto__;
}
break;
}
}catch (e32362){var ex__30579__auto__ = e32362;
var statearr_32364_35144 = state_32341;
(statearr_32364_35144[(2)] = ex__30579__auto__);


if(cljs.core.seq((state_32341[(4)]))){
var statearr_32365_35145 = state_32341;
(statearr_32365_35145[(1)] = cljs.core.first((state_32341[(4)])));

} else {
throw ex__30579__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30577__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35146 = state_32341;
state_32341 = G__35146;
continue;
} else {
return ret_value__30577__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__30576__auto__ = function(state_32341){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__30576__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__30576__auto____1.call(this,state_32341);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__30576__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__30576__auto____0;
cljs$core$async$transduce_$_state_machine__30576__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__30576__auto____1;
return cljs$core$async$transduce_$_state_machine__30576__auto__;
})()
})();
var state__31220__auto__ = (function (){var statearr_32370 = f__31199__auto__();
(statearr_32370[(6)] = c__31198__auto__);

return statearr_32370;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31220__auto__);
}));

return c__31198__auto__;
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
var G__32378 = arguments.length;
switch (G__32378) {
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
var c__31198__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31199__auto__ = (function (){var switch__30575__auto__ = (function (state_32411){
var state_val_32412 = (state_32411[(1)]);
if((state_val_32412 === (7))){
var inst_32391 = (state_32411[(2)]);
var state_32411__$1 = state_32411;
var statearr_32418_35154 = state_32411__$1;
(statearr_32418_35154[(2)] = inst_32391);

(statearr_32418_35154[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32412 === (1))){
var inst_32385 = cljs.core.seq(coll);
var inst_32386 = inst_32385;
var state_32411__$1 = (function (){var statearr_32419 = state_32411;
(statearr_32419[(7)] = inst_32386);

return statearr_32419;
})();
var statearr_32421_35155 = state_32411__$1;
(statearr_32421_35155[(2)] = null);

(statearr_32421_35155[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32412 === (4))){
var inst_32386 = (state_32411[(7)]);
var inst_32389 = cljs.core.first(inst_32386);
var state_32411__$1 = state_32411;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32411__$1,(7),ch,inst_32389);
} else {
if((state_val_32412 === (13))){
var inst_32404 = (state_32411[(2)]);
var state_32411__$1 = state_32411;
var statearr_32428_35156 = state_32411__$1;
(statearr_32428_35156[(2)] = inst_32404);

(statearr_32428_35156[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32412 === (6))){
var inst_32394 = (state_32411[(2)]);
var state_32411__$1 = state_32411;
if(cljs.core.truth_(inst_32394)){
var statearr_32432_35157 = state_32411__$1;
(statearr_32432_35157[(1)] = (8));

} else {
var statearr_32433_35158 = state_32411__$1;
(statearr_32433_35158[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32412 === (3))){
var inst_32408 = (state_32411[(2)]);
var state_32411__$1 = state_32411;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32411__$1,inst_32408);
} else {
if((state_val_32412 === (12))){
var state_32411__$1 = state_32411;
var statearr_32436_35163 = state_32411__$1;
(statearr_32436_35163[(2)] = null);

(statearr_32436_35163[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32412 === (2))){
var inst_32386 = (state_32411[(7)]);
var state_32411__$1 = state_32411;
if(cljs.core.truth_(inst_32386)){
var statearr_32441_35166 = state_32411__$1;
(statearr_32441_35166[(1)] = (4));

} else {
var statearr_32443_35167 = state_32411__$1;
(statearr_32443_35167[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32412 === (11))){
var inst_32401 = cljs.core.async.close_BANG_(ch);
var state_32411__$1 = state_32411;
var statearr_32444_35170 = state_32411__$1;
(statearr_32444_35170[(2)] = inst_32401);

(statearr_32444_35170[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32412 === (9))){
var state_32411__$1 = state_32411;
if(cljs.core.truth_(close_QMARK_)){
var statearr_32446_35171 = state_32411__$1;
(statearr_32446_35171[(1)] = (11));

} else {
var statearr_32447_35172 = state_32411__$1;
(statearr_32447_35172[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32412 === (5))){
var inst_32386 = (state_32411[(7)]);
var state_32411__$1 = state_32411;
var statearr_32448_35173 = state_32411__$1;
(statearr_32448_35173[(2)] = inst_32386);

(statearr_32448_35173[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32412 === (10))){
var inst_32406 = (state_32411[(2)]);
var state_32411__$1 = state_32411;
var statearr_32451_35175 = state_32411__$1;
(statearr_32451_35175[(2)] = inst_32406);

(statearr_32451_35175[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32412 === (8))){
var inst_32386 = (state_32411[(7)]);
var inst_32396 = cljs.core.next(inst_32386);
var inst_32386__$1 = inst_32396;
var state_32411__$1 = (function (){var statearr_32454 = state_32411;
(statearr_32454[(7)] = inst_32386__$1);

return statearr_32454;
})();
var statearr_32455_35176 = state_32411__$1;
(statearr_32455_35176[(2)] = null);

(statearr_32455_35176[(1)] = (2));


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
var cljs$core$async$state_machine__30576__auto__ = null;
var cljs$core$async$state_machine__30576__auto____0 = (function (){
var statearr_32459 = [null,null,null,null,null,null,null,null];
(statearr_32459[(0)] = cljs$core$async$state_machine__30576__auto__);

(statearr_32459[(1)] = (1));

return statearr_32459;
});
var cljs$core$async$state_machine__30576__auto____1 = (function (state_32411){
while(true){
var ret_value__30577__auto__ = (function (){try{while(true){
var result__30578__auto__ = switch__30575__auto__(state_32411);
if(cljs.core.keyword_identical_QMARK_(result__30578__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30578__auto__;
}
break;
}
}catch (e32462){var ex__30579__auto__ = e32462;
var statearr_32464_35177 = state_32411;
(statearr_32464_35177[(2)] = ex__30579__auto__);


if(cljs.core.seq((state_32411[(4)]))){
var statearr_32466_35178 = state_32411;
(statearr_32466_35178[(1)] = cljs.core.first((state_32411[(4)])));

} else {
throw ex__30579__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30577__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35179 = state_32411;
state_32411 = G__35179;
continue;
} else {
return ret_value__30577__auto__;
}
break;
}
});
cljs$core$async$state_machine__30576__auto__ = function(state_32411){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30576__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30576__auto____1.call(this,state_32411);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30576__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30576__auto____0;
cljs$core$async$state_machine__30576__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30576__auto____1;
return cljs$core$async$state_machine__30576__auto__;
})()
})();
var state__31220__auto__ = (function (){var statearr_32467 = f__31199__auto__();
(statearr_32467[(6)] = c__31198__auto__);

return statearr_32467;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31220__auto__);
}));

return c__31198__auto__;
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
var G__32478 = arguments.length;
switch (G__32478) {
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

var cljs$core$async$Mux$muxch_STAR_$dyn_35186 = (function (_){
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
return cljs$core$async$Mux$muxch_STAR_$dyn_35186(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_35187 = (function (m,ch,close_QMARK_){
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
return cljs$core$async$Mult$tap_STAR_$dyn_35187(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_35193 = (function (m,ch){
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
return cljs$core$async$Mult$untap_STAR_$dyn_35193(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_35196 = (function (m){
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
return cljs$core$async$Mult$untap_all_STAR_$dyn_35196(m);
}
});


/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32531 = (function (ch,cs,meta32532){
this.ch = ch;
this.cs = cs;
this.meta32532 = meta32532;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32531.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32533,meta32532__$1){
var self__ = this;
var _32533__$1 = this;
return (new cljs.core.async.t_cljs$core$async32531(self__.ch,self__.cs,meta32532__$1));
}));

(cljs.core.async.t_cljs$core$async32531.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32533){
var self__ = this;
var _32533__$1 = this;
return self__.meta32532;
}));

(cljs.core.async.t_cljs$core$async32531.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32531.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async32531.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32531.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async32531.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async32531.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async32531.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta32532","meta32532",1285423067,null)], null);
}));

(cljs.core.async.t_cljs$core$async32531.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32531.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32531");

(cljs.core.async.t_cljs$core$async32531.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async32531");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32531.
 */
cljs.core.async.__GT_t_cljs$core$async32531 = (function cljs$core$async$__GT_t_cljs$core$async32531(ch,cs,meta32532){
return (new cljs.core.async.t_cljs$core$async32531(ch,cs,meta32532));
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
var m = (new cljs.core.async.t_cljs$core$async32531(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__31198__auto___35202 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31199__auto__ = (function (){var switch__30575__auto__ = (function (state_32722){
var state_val_32723 = (state_32722[(1)]);
if((state_val_32723 === (7))){
var inst_32711 = (state_32722[(2)]);
var state_32722__$1 = state_32722;
var statearr_32736_35203 = state_32722__$1;
(statearr_32736_35203[(2)] = inst_32711);

(statearr_32736_35203[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32723 === (20))){
var inst_32595 = (state_32722[(7)]);
var inst_32609 = cljs.core.first(inst_32595);
var inst_32610 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32609,(0),null);
var inst_32611 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32609,(1),null);
var state_32722__$1 = (function (){var statearr_32741 = state_32722;
(statearr_32741[(8)] = inst_32610);

return statearr_32741;
})();
if(cljs.core.truth_(inst_32611)){
var statearr_32744_35209 = state_32722__$1;
(statearr_32744_35209[(1)] = (22));

} else {
var statearr_32746_35213 = state_32722__$1;
(statearr_32746_35213[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32723 === (27))){
var inst_32641 = (state_32722[(9)]);
var inst_32643 = (state_32722[(10)]);
var inst_32649 = (state_32722[(11)]);
var inst_32558 = (state_32722[(12)]);
var inst_32649__$1 = cljs.core._nth(inst_32641,inst_32643);
var inst_32650 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_32649__$1,inst_32558,done);
var state_32722__$1 = (function (){var statearr_32755 = state_32722;
(statearr_32755[(11)] = inst_32649__$1);

return statearr_32755;
})();
if(cljs.core.truth_(inst_32650)){
var statearr_32756_35225 = state_32722__$1;
(statearr_32756_35225[(1)] = (30));

} else {
var statearr_32758_35226 = state_32722__$1;
(statearr_32758_35226[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32723 === (1))){
var state_32722__$1 = state_32722;
var statearr_32760_35230 = state_32722__$1;
(statearr_32760_35230[(2)] = null);

(statearr_32760_35230[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32723 === (24))){
var inst_32595 = (state_32722[(7)]);
var inst_32616 = (state_32722[(2)]);
var inst_32617 = cljs.core.next(inst_32595);
var inst_32567 = inst_32617;
var inst_32568 = null;
var inst_32569 = (0);
var inst_32570 = (0);
var state_32722__$1 = (function (){var statearr_32763 = state_32722;
(statearr_32763[(13)] = inst_32616);

(statearr_32763[(14)] = inst_32567);

(statearr_32763[(15)] = inst_32568);

(statearr_32763[(16)] = inst_32569);

(statearr_32763[(17)] = inst_32570);

return statearr_32763;
})();
var statearr_32764_35244 = state_32722__$1;
(statearr_32764_35244[(2)] = null);

(statearr_32764_35244[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32723 === (39))){
var state_32722__$1 = state_32722;
var statearr_32775_35250 = state_32722__$1;
(statearr_32775_35250[(2)] = null);

(statearr_32775_35250[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32723 === (4))){
var inst_32558 = (state_32722[(12)]);
var inst_32558__$1 = (state_32722[(2)]);
var inst_32559 = (inst_32558__$1 == null);
var state_32722__$1 = (function (){var statearr_32778 = state_32722;
(statearr_32778[(12)] = inst_32558__$1);

return statearr_32778;
})();
if(cljs.core.truth_(inst_32559)){
var statearr_32782_35260 = state_32722__$1;
(statearr_32782_35260[(1)] = (5));

} else {
var statearr_32783_35265 = state_32722__$1;
(statearr_32783_35265[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32723 === (15))){
var inst_32570 = (state_32722[(17)]);
var inst_32567 = (state_32722[(14)]);
var inst_32568 = (state_32722[(15)]);
var inst_32569 = (state_32722[(16)]);
var inst_32588 = (state_32722[(2)]);
var inst_32589 = (inst_32570 + (1));
var tmp32769 = inst_32569;
var tmp32770 = inst_32568;
var tmp32771 = inst_32567;
var inst_32567__$1 = tmp32771;
var inst_32568__$1 = tmp32770;
var inst_32569__$1 = tmp32769;
var inst_32570__$1 = inst_32589;
var state_32722__$1 = (function (){var statearr_32787 = state_32722;
(statearr_32787[(18)] = inst_32588);

(statearr_32787[(14)] = inst_32567__$1);

(statearr_32787[(15)] = inst_32568__$1);

(statearr_32787[(16)] = inst_32569__$1);

(statearr_32787[(17)] = inst_32570__$1);

return statearr_32787;
})();
var statearr_32791_35268 = state_32722__$1;
(statearr_32791_35268[(2)] = null);

(statearr_32791_35268[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32723 === (21))){
var inst_32620 = (state_32722[(2)]);
var state_32722__$1 = state_32722;
var statearr_32799_35269 = state_32722__$1;
(statearr_32799_35269[(2)] = inst_32620);

(statearr_32799_35269[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32723 === (31))){
var inst_32649 = (state_32722[(11)]);
var inst_32655 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_32649);
var state_32722__$1 = state_32722;
var statearr_32800_35270 = state_32722__$1;
(statearr_32800_35270[(2)] = inst_32655);

(statearr_32800_35270[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32723 === (32))){
var inst_32643 = (state_32722[(10)]);
var inst_32640 = (state_32722[(19)]);
var inst_32641 = (state_32722[(9)]);
var inst_32642 = (state_32722[(20)]);
var inst_32657 = (state_32722[(2)]);
var inst_32662 = (inst_32643 + (1));
var tmp32796 = inst_32641;
var tmp32797 = inst_32642;
var tmp32798 = inst_32640;
var inst_32640__$1 = tmp32798;
var inst_32641__$1 = tmp32796;
var inst_32642__$1 = tmp32797;
var inst_32643__$1 = inst_32662;
var state_32722__$1 = (function (){var statearr_32805 = state_32722;
(statearr_32805[(21)] = inst_32657);

(statearr_32805[(19)] = inst_32640__$1);

(statearr_32805[(9)] = inst_32641__$1);

(statearr_32805[(20)] = inst_32642__$1);

(statearr_32805[(10)] = inst_32643__$1);

return statearr_32805;
})();
var statearr_32808_35275 = state_32722__$1;
(statearr_32808_35275[(2)] = null);

(statearr_32808_35275[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32723 === (40))){
var inst_32679 = (state_32722[(22)]);
var inst_32683 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_32679);
var state_32722__$1 = state_32722;
var statearr_32812_35276 = state_32722__$1;
(statearr_32812_35276[(2)] = inst_32683);

(statearr_32812_35276[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32723 === (33))){
var inst_32666 = (state_32722[(23)]);
var inst_32670 = cljs.core.chunked_seq_QMARK_(inst_32666);
var state_32722__$1 = state_32722;
if(inst_32670){
var statearr_32816_35277 = state_32722__$1;
(statearr_32816_35277[(1)] = (36));

} else {
var statearr_32819_35278 = state_32722__$1;
(statearr_32819_35278[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32723 === (13))){
var inst_32579 = (state_32722[(24)]);
var inst_32585 = cljs.core.async.close_BANG_(inst_32579);
var state_32722__$1 = state_32722;
var statearr_32820_35280 = state_32722__$1;
(statearr_32820_35280[(2)] = inst_32585);

(statearr_32820_35280[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32723 === (22))){
var inst_32610 = (state_32722[(8)]);
var inst_32613 = cljs.core.async.close_BANG_(inst_32610);
var state_32722__$1 = state_32722;
var statearr_32821_35281 = state_32722__$1;
(statearr_32821_35281[(2)] = inst_32613);

(statearr_32821_35281[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32723 === (36))){
var inst_32666 = (state_32722[(23)]);
var inst_32673 = cljs.core.chunk_first(inst_32666);
var inst_32674 = cljs.core.chunk_rest(inst_32666);
var inst_32675 = cljs.core.count(inst_32673);
var inst_32640 = inst_32674;
var inst_32641 = inst_32673;
var inst_32642 = inst_32675;
var inst_32643 = (0);
var state_32722__$1 = (function (){var statearr_32830 = state_32722;
(statearr_32830[(19)] = inst_32640);

(statearr_32830[(9)] = inst_32641);

(statearr_32830[(20)] = inst_32642);

(statearr_32830[(10)] = inst_32643);

return statearr_32830;
})();
var statearr_32831_35282 = state_32722__$1;
(statearr_32831_35282[(2)] = null);

(statearr_32831_35282[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32723 === (41))){
var inst_32666 = (state_32722[(23)]);
var inst_32685 = (state_32722[(2)]);
var inst_32686 = cljs.core.next(inst_32666);
var inst_32640 = inst_32686;
var inst_32641 = null;
var inst_32642 = (0);
var inst_32643 = (0);
var state_32722__$1 = (function (){var statearr_32832 = state_32722;
(statearr_32832[(25)] = inst_32685);

(statearr_32832[(19)] = inst_32640);

(statearr_32832[(9)] = inst_32641);

(statearr_32832[(20)] = inst_32642);

(statearr_32832[(10)] = inst_32643);

return statearr_32832;
})();
var statearr_32836_35283 = state_32722__$1;
(statearr_32836_35283[(2)] = null);

(statearr_32836_35283[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32723 === (43))){
var state_32722__$1 = state_32722;
var statearr_32838_35284 = state_32722__$1;
(statearr_32838_35284[(2)] = null);

(statearr_32838_35284[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32723 === (29))){
var inst_32694 = (state_32722[(2)]);
var state_32722__$1 = state_32722;
var statearr_32842_35286 = state_32722__$1;
(statearr_32842_35286[(2)] = inst_32694);

(statearr_32842_35286[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32723 === (44))){
var inst_32708 = (state_32722[(2)]);
var state_32722__$1 = (function (){var statearr_32844 = state_32722;
(statearr_32844[(26)] = inst_32708);

return statearr_32844;
})();
var statearr_32845_35287 = state_32722__$1;
(statearr_32845_35287[(2)] = null);

(statearr_32845_35287[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32723 === (6))){
var inst_32631 = (state_32722[(27)]);
var inst_32629 = cljs.core.deref(cs);
var inst_32631__$1 = cljs.core.keys(inst_32629);
var inst_32633 = cljs.core.count(inst_32631__$1);
var inst_32634 = cljs.core.reset_BANG_(dctr,inst_32633);
var inst_32639 = cljs.core.seq(inst_32631__$1);
var inst_32640 = inst_32639;
var inst_32641 = null;
var inst_32642 = (0);
var inst_32643 = (0);
var state_32722__$1 = (function (){var statearr_32847 = state_32722;
(statearr_32847[(27)] = inst_32631__$1);

(statearr_32847[(28)] = inst_32634);

(statearr_32847[(19)] = inst_32640);

(statearr_32847[(9)] = inst_32641);

(statearr_32847[(20)] = inst_32642);

(statearr_32847[(10)] = inst_32643);

return statearr_32847;
})();
var statearr_32848_35293 = state_32722__$1;
(statearr_32848_35293[(2)] = null);

(statearr_32848_35293[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32723 === (28))){
var inst_32640 = (state_32722[(19)]);
var inst_32666 = (state_32722[(23)]);
var inst_32666__$1 = cljs.core.seq(inst_32640);
var state_32722__$1 = (function (){var statearr_32854 = state_32722;
(statearr_32854[(23)] = inst_32666__$1);

return statearr_32854;
})();
if(inst_32666__$1){
var statearr_32857_35296 = state_32722__$1;
(statearr_32857_35296[(1)] = (33));

} else {
var statearr_32858_35297 = state_32722__$1;
(statearr_32858_35297[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32723 === (25))){
var inst_32643 = (state_32722[(10)]);
var inst_32642 = (state_32722[(20)]);
var inst_32646 = (inst_32643 < inst_32642);
var inst_32647 = inst_32646;
var state_32722__$1 = state_32722;
if(cljs.core.truth_(inst_32647)){
var statearr_32859_35302 = state_32722__$1;
(statearr_32859_35302[(1)] = (27));

} else {
var statearr_32860_35303 = state_32722__$1;
(statearr_32860_35303[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32723 === (34))){
var state_32722__$1 = state_32722;
var statearr_32863_35305 = state_32722__$1;
(statearr_32863_35305[(2)] = null);

(statearr_32863_35305[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32723 === (17))){
var state_32722__$1 = state_32722;
var statearr_32864_35306 = state_32722__$1;
(statearr_32864_35306[(2)] = null);

(statearr_32864_35306[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32723 === (3))){
var inst_32713 = (state_32722[(2)]);
var state_32722__$1 = state_32722;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32722__$1,inst_32713);
} else {
if((state_val_32723 === (12))){
var inst_32625 = (state_32722[(2)]);
var state_32722__$1 = state_32722;
var statearr_32866_35308 = state_32722__$1;
(statearr_32866_35308[(2)] = inst_32625);

(statearr_32866_35308[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32723 === (2))){
var state_32722__$1 = state_32722;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32722__$1,(4),ch);
} else {
if((state_val_32723 === (23))){
var state_32722__$1 = state_32722;
var statearr_32871_35312 = state_32722__$1;
(statearr_32871_35312[(2)] = null);

(statearr_32871_35312[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32723 === (35))){
var inst_32692 = (state_32722[(2)]);
var state_32722__$1 = state_32722;
var statearr_32880_35315 = state_32722__$1;
(statearr_32880_35315[(2)] = inst_32692);

(statearr_32880_35315[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32723 === (19))){
var inst_32595 = (state_32722[(7)]);
var inst_32600 = cljs.core.chunk_first(inst_32595);
var inst_32601 = cljs.core.chunk_rest(inst_32595);
var inst_32602 = cljs.core.count(inst_32600);
var inst_32567 = inst_32601;
var inst_32568 = inst_32600;
var inst_32569 = inst_32602;
var inst_32570 = (0);
var state_32722__$1 = (function (){var statearr_32881 = state_32722;
(statearr_32881[(14)] = inst_32567);

(statearr_32881[(15)] = inst_32568);

(statearr_32881[(16)] = inst_32569);

(statearr_32881[(17)] = inst_32570);

return statearr_32881;
})();
var statearr_32888_35317 = state_32722__$1;
(statearr_32888_35317[(2)] = null);

(statearr_32888_35317[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32723 === (11))){
var inst_32567 = (state_32722[(14)]);
var inst_32595 = (state_32722[(7)]);
var inst_32595__$1 = cljs.core.seq(inst_32567);
var state_32722__$1 = (function (){var statearr_32890 = state_32722;
(statearr_32890[(7)] = inst_32595__$1);

return statearr_32890;
})();
if(inst_32595__$1){
var statearr_32894_35318 = state_32722__$1;
(statearr_32894_35318[(1)] = (16));

} else {
var statearr_32895_35319 = state_32722__$1;
(statearr_32895_35319[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32723 === (9))){
var inst_32627 = (state_32722[(2)]);
var state_32722__$1 = state_32722;
var statearr_32897_35320 = state_32722__$1;
(statearr_32897_35320[(2)] = inst_32627);

(statearr_32897_35320[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32723 === (5))){
var inst_32565 = cljs.core.deref(cs);
var inst_32566 = cljs.core.seq(inst_32565);
var inst_32567 = inst_32566;
var inst_32568 = null;
var inst_32569 = (0);
var inst_32570 = (0);
var state_32722__$1 = (function (){var statearr_32898 = state_32722;
(statearr_32898[(14)] = inst_32567);

(statearr_32898[(15)] = inst_32568);

(statearr_32898[(16)] = inst_32569);

(statearr_32898[(17)] = inst_32570);

return statearr_32898;
})();
var statearr_32902_35322 = state_32722__$1;
(statearr_32902_35322[(2)] = null);

(statearr_32902_35322[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32723 === (14))){
var state_32722__$1 = state_32722;
var statearr_32904_35323 = state_32722__$1;
(statearr_32904_35323[(2)] = null);

(statearr_32904_35323[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32723 === (45))){
var inst_32705 = (state_32722[(2)]);
var state_32722__$1 = state_32722;
var statearr_32905_35325 = state_32722__$1;
(statearr_32905_35325[(2)] = inst_32705);

(statearr_32905_35325[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32723 === (26))){
var inst_32631 = (state_32722[(27)]);
var inst_32696 = (state_32722[(2)]);
var inst_32697 = cljs.core.seq(inst_32631);
var state_32722__$1 = (function (){var statearr_32911 = state_32722;
(statearr_32911[(29)] = inst_32696);

return statearr_32911;
})();
if(inst_32697){
var statearr_32912_35329 = state_32722__$1;
(statearr_32912_35329[(1)] = (42));

} else {
var statearr_32914_35331 = state_32722__$1;
(statearr_32914_35331[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32723 === (16))){
var inst_32595 = (state_32722[(7)]);
var inst_32598 = cljs.core.chunked_seq_QMARK_(inst_32595);
var state_32722__$1 = state_32722;
if(inst_32598){
var statearr_32915_35332 = state_32722__$1;
(statearr_32915_35332[(1)] = (19));

} else {
var statearr_32916_35333 = state_32722__$1;
(statearr_32916_35333[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32723 === (38))){
var inst_32689 = (state_32722[(2)]);
var state_32722__$1 = state_32722;
var statearr_32919_35335 = state_32722__$1;
(statearr_32919_35335[(2)] = inst_32689);

(statearr_32919_35335[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32723 === (30))){
var state_32722__$1 = state_32722;
var statearr_32921_35336 = state_32722__$1;
(statearr_32921_35336[(2)] = null);

(statearr_32921_35336[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32723 === (10))){
var inst_32568 = (state_32722[(15)]);
var inst_32570 = (state_32722[(17)]);
var inst_32578 = cljs.core._nth(inst_32568,inst_32570);
var inst_32579 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32578,(0),null);
var inst_32581 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32578,(1),null);
var state_32722__$1 = (function (){var statearr_32927 = state_32722;
(statearr_32927[(24)] = inst_32579);

return statearr_32927;
})();
if(cljs.core.truth_(inst_32581)){
var statearr_32929_35338 = state_32722__$1;
(statearr_32929_35338[(1)] = (13));

} else {
var statearr_32933_35339 = state_32722__$1;
(statearr_32933_35339[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32723 === (18))){
var inst_32623 = (state_32722[(2)]);
var state_32722__$1 = state_32722;
var statearr_32935_35340 = state_32722__$1;
(statearr_32935_35340[(2)] = inst_32623);

(statearr_32935_35340[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32723 === (42))){
var state_32722__$1 = state_32722;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32722__$1,(45),dchan);
} else {
if((state_val_32723 === (37))){
var inst_32666 = (state_32722[(23)]);
var inst_32679 = (state_32722[(22)]);
var inst_32558 = (state_32722[(12)]);
var inst_32679__$1 = cljs.core.first(inst_32666);
var inst_32680 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_32679__$1,inst_32558,done);
var state_32722__$1 = (function (){var statearr_32936 = state_32722;
(statearr_32936[(22)] = inst_32679__$1);

return statearr_32936;
})();
if(cljs.core.truth_(inst_32680)){
var statearr_32937_35344 = state_32722__$1;
(statearr_32937_35344[(1)] = (39));

} else {
var statearr_32941_35345 = state_32722__$1;
(statearr_32941_35345[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32723 === (8))){
var inst_32570 = (state_32722[(17)]);
var inst_32569 = (state_32722[(16)]);
var inst_32572 = (inst_32570 < inst_32569);
var inst_32573 = inst_32572;
var state_32722__$1 = state_32722;
if(cljs.core.truth_(inst_32573)){
var statearr_32943_35351 = state_32722__$1;
(statearr_32943_35351[(1)] = (10));

} else {
var statearr_32944_35352 = state_32722__$1;
(statearr_32944_35352[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__30576__auto__ = null;
var cljs$core$async$mult_$_state_machine__30576__auto____0 = (function (){
var statearr_32953 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32953[(0)] = cljs$core$async$mult_$_state_machine__30576__auto__);

(statearr_32953[(1)] = (1));

return statearr_32953;
});
var cljs$core$async$mult_$_state_machine__30576__auto____1 = (function (state_32722){
while(true){
var ret_value__30577__auto__ = (function (){try{while(true){
var result__30578__auto__ = switch__30575__auto__(state_32722);
if(cljs.core.keyword_identical_QMARK_(result__30578__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30578__auto__;
}
break;
}
}catch (e32954){var ex__30579__auto__ = e32954;
var statearr_32955_35358 = state_32722;
(statearr_32955_35358[(2)] = ex__30579__auto__);


if(cljs.core.seq((state_32722[(4)]))){
var statearr_32957_35359 = state_32722;
(statearr_32957_35359[(1)] = cljs.core.first((state_32722[(4)])));

} else {
throw ex__30579__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30577__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35361 = state_32722;
state_32722 = G__35361;
continue;
} else {
return ret_value__30577__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__30576__auto__ = function(state_32722){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__30576__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__30576__auto____1.call(this,state_32722);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__30576__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__30576__auto____0;
cljs$core$async$mult_$_state_machine__30576__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__30576__auto____1;
return cljs$core$async$mult_$_state_machine__30576__auto__;
})()
})();
var state__31220__auto__ = (function (){var statearr_32987 = f__31199__auto__();
(statearr_32987[(6)] = c__31198__auto___35202);

return statearr_32987;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31220__auto__);
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
var G__32990 = arguments.length;
switch (G__32990) {
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

var cljs$core$async$Mix$admix_STAR_$dyn_35365 = (function (m,ch){
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
return cljs$core$async$Mix$admix_STAR_$dyn_35365(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_35366 = (function (m,ch){
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
return cljs$core$async$Mix$unmix_STAR_$dyn_35366(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_35369 = (function (m){
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
return cljs$core$async$Mix$unmix_all_STAR_$dyn_35369(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_35370 = (function (m,state_map){
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
return cljs$core$async$Mix$toggle_STAR_$dyn_35370(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_35373 = (function (m,mode){
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
return cljs$core$async$Mix$solo_mode_STAR_$dyn_35373(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5732__auto__ = [];
var len__5726__auto___35374 = arguments.length;
var i__5727__auto___35375 = (0);
while(true){
if((i__5727__auto___35375 < len__5726__auto___35374)){
args__5732__auto__.push((arguments[i__5727__auto___35375]));

var G__35376 = (i__5727__auto___35375 + (1));
i__5727__auto___35375 = G__35376;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((3) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5733__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__33019){
var map__33020 = p__33019;
var map__33020__$1 = cljs.core.__destructure_map(map__33020);
var opts = map__33020__$1;
var statearr_33024_35377 = state;
(statearr_33024_35377[(1)] = cont_block);


var temp__5804__auto__ = cljs.core.async.do_alts((function (val){
var statearr_33028_35378 = state;
(statearr_33028_35378[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5804__auto__)){
var cb = temp__5804__auto__;
var statearr_33029_35380 = state;
(statearr_33029_35380[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq33013){
var G__33015 = cljs.core.first(seq33013);
var seq33013__$1 = cljs.core.next(seq33013);
var G__33016 = cljs.core.first(seq33013__$1);
var seq33013__$2 = cljs.core.next(seq33013__$1);
var G__33017 = cljs.core.first(seq33013__$2);
var seq33013__$3 = cljs.core.next(seq33013__$2);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33015,G__33016,G__33017,seq33013__$3);
}));


/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33036 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta33037){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta33037 = meta33037;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33036.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33038,meta33037__$1){
var self__ = this;
var _33038__$1 = this;
return (new cljs.core.async.t_cljs$core$async33036(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta33037__$1));
}));

(cljs.core.async.t_cljs$core$async33036.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33038){
var self__ = this;
var _33038__$1 = this;
return self__.meta33037;
}));

(cljs.core.async.t_cljs$core$async33036.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33036.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async33036.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33036.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async33036.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async33036.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async33036.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async33036.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async33036.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta33037","meta33037",-292334821,null)], null);
}));

(cljs.core.async.t_cljs$core$async33036.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33036.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33036");

(cljs.core.async.t_cljs$core$async33036.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async33036");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33036.
 */
cljs.core.async.__GT_t_cljs$core$async33036 = (function cljs$core$async$__GT_t_cljs$core$async33036(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta33037){
return (new cljs.core.async.t_cljs$core$async33036(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta33037));
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
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (cljs.core.seq(solos))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (new cljs.core.async.t_cljs$core$async33036(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
var c__31198__auto___35402 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31199__auto__ = (function (){var switch__30575__auto__ = (function (state_33126){
var state_val_33127 = (state_33126[(1)]);
if((state_val_33127 === (7))){
var inst_33083 = (state_33126[(2)]);
var state_33126__$1 = state_33126;
if(cljs.core.truth_(inst_33083)){
var statearr_33128_35408 = state_33126__$1;
(statearr_33128_35408[(1)] = (8));

} else {
var statearr_33129_35409 = state_33126__$1;
(statearr_33129_35409[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33127 === (20))){
var inst_33076 = (state_33126[(7)]);
var state_33126__$1 = state_33126;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33126__$1,(23),out,inst_33076);
} else {
if((state_val_33127 === (1))){
var inst_33059 = calc_state();
var inst_33060 = cljs.core.__destructure_map(inst_33059);
var inst_33061 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33060,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_33062 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33060,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_33063 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33060,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_33064 = inst_33059;
var state_33126__$1 = (function (){var statearr_33133 = state_33126;
(statearr_33133[(8)] = inst_33061);

(statearr_33133[(9)] = inst_33062);

(statearr_33133[(10)] = inst_33063);

(statearr_33133[(11)] = inst_33064);

return statearr_33133;
})();
var statearr_33134_35411 = state_33126__$1;
(statearr_33134_35411[(2)] = null);

(statearr_33134_35411[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33127 === (24))){
var inst_33067 = (state_33126[(12)]);
var inst_33064 = inst_33067;
var state_33126__$1 = (function (){var statearr_33139 = state_33126;
(statearr_33139[(11)] = inst_33064);

return statearr_33139;
})();
var statearr_33141_35412 = state_33126__$1;
(statearr_33141_35412[(2)] = null);

(statearr_33141_35412[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33127 === (4))){
var inst_33076 = (state_33126[(7)]);
var inst_33078 = (state_33126[(13)]);
var inst_33075 = (state_33126[(2)]);
var inst_33076__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33075,(0),null);
var inst_33077 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33075,(1),null);
var inst_33078__$1 = (inst_33076__$1 == null);
var state_33126__$1 = (function (){var statearr_33142 = state_33126;
(statearr_33142[(7)] = inst_33076__$1);

(statearr_33142[(14)] = inst_33077);

(statearr_33142[(13)] = inst_33078__$1);

return statearr_33142;
})();
if(cljs.core.truth_(inst_33078__$1)){
var statearr_33143_35414 = state_33126__$1;
(statearr_33143_35414[(1)] = (5));

} else {
var statearr_33144_35415 = state_33126__$1;
(statearr_33144_35415[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33127 === (15))){
var inst_33068 = (state_33126[(15)]);
var inst_33099 = (state_33126[(16)]);
var inst_33099__$1 = cljs.core.empty_QMARK_(inst_33068);
var state_33126__$1 = (function (){var statearr_33150 = state_33126;
(statearr_33150[(16)] = inst_33099__$1);

return statearr_33150;
})();
if(inst_33099__$1){
var statearr_33151_35420 = state_33126__$1;
(statearr_33151_35420[(1)] = (17));

} else {
var statearr_33152_35421 = state_33126__$1;
(statearr_33152_35421[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33127 === (21))){
var inst_33067 = (state_33126[(12)]);
var inst_33064 = inst_33067;
var state_33126__$1 = (function (){var statearr_33154 = state_33126;
(statearr_33154[(11)] = inst_33064);

return statearr_33154;
})();
var statearr_33155_35423 = state_33126__$1;
(statearr_33155_35423[(2)] = null);

(statearr_33155_35423[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33127 === (13))){
var inst_33091 = (state_33126[(2)]);
var inst_33092 = calc_state();
var inst_33064 = inst_33092;
var state_33126__$1 = (function (){var statearr_33157 = state_33126;
(statearr_33157[(17)] = inst_33091);

(statearr_33157[(11)] = inst_33064);

return statearr_33157;
})();
var statearr_33158_35441 = state_33126__$1;
(statearr_33158_35441[(2)] = null);

(statearr_33158_35441[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33127 === (22))){
var inst_33119 = (state_33126[(2)]);
var state_33126__$1 = state_33126;
var statearr_33160_35442 = state_33126__$1;
(statearr_33160_35442[(2)] = inst_33119);

(statearr_33160_35442[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33127 === (6))){
var inst_33077 = (state_33126[(14)]);
var inst_33081 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_33077,change);
var state_33126__$1 = state_33126;
var statearr_33165_35443 = state_33126__$1;
(statearr_33165_35443[(2)] = inst_33081);

(statearr_33165_35443[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33127 === (25))){
var state_33126__$1 = state_33126;
var statearr_33166_35444 = state_33126__$1;
(statearr_33166_35444[(2)] = null);

(statearr_33166_35444[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33127 === (17))){
var inst_33069 = (state_33126[(18)]);
var inst_33077 = (state_33126[(14)]);
var inst_33101 = (inst_33069.cljs$core$IFn$_invoke$arity$1 ? inst_33069.cljs$core$IFn$_invoke$arity$1(inst_33077) : inst_33069.call(null,inst_33077));
var inst_33102 = cljs.core.not(inst_33101);
var state_33126__$1 = state_33126;
var statearr_33167_35445 = state_33126__$1;
(statearr_33167_35445[(2)] = inst_33102);

(statearr_33167_35445[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33127 === (3))){
var inst_33124 = (state_33126[(2)]);
var state_33126__$1 = state_33126;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33126__$1,inst_33124);
} else {
if((state_val_33127 === (12))){
var state_33126__$1 = state_33126;
var statearr_33171_35459 = state_33126__$1;
(statearr_33171_35459[(2)] = null);

(statearr_33171_35459[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33127 === (2))){
var inst_33064 = (state_33126[(11)]);
var inst_33067 = (state_33126[(12)]);
var inst_33067__$1 = cljs.core.__destructure_map(inst_33064);
var inst_33068 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33067__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_33069 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33067__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_33070 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33067__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_33126__$1 = (function (){var statearr_33172 = state_33126;
(statearr_33172[(12)] = inst_33067__$1);

(statearr_33172[(15)] = inst_33068);

(statearr_33172[(18)] = inst_33069);

return statearr_33172;
})();
return cljs.core.async.ioc_alts_BANG_(state_33126__$1,(4),inst_33070);
} else {
if((state_val_33127 === (23))){
var inst_33110 = (state_33126[(2)]);
var state_33126__$1 = state_33126;
if(cljs.core.truth_(inst_33110)){
var statearr_33173_35464 = state_33126__$1;
(statearr_33173_35464[(1)] = (24));

} else {
var statearr_33174_35465 = state_33126__$1;
(statearr_33174_35465[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33127 === (19))){
var inst_33105 = (state_33126[(2)]);
var state_33126__$1 = state_33126;
var statearr_33182_35468 = state_33126__$1;
(statearr_33182_35468[(2)] = inst_33105);

(statearr_33182_35468[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33127 === (11))){
var inst_33077 = (state_33126[(14)]);
var inst_33087 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_33077);
var state_33126__$1 = state_33126;
var statearr_33192_35474 = state_33126__$1;
(statearr_33192_35474[(2)] = inst_33087);

(statearr_33192_35474[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33127 === (9))){
var inst_33068 = (state_33126[(15)]);
var inst_33077 = (state_33126[(14)]);
var inst_33095 = (state_33126[(19)]);
var inst_33095__$1 = (inst_33068.cljs$core$IFn$_invoke$arity$1 ? inst_33068.cljs$core$IFn$_invoke$arity$1(inst_33077) : inst_33068.call(null,inst_33077));
var state_33126__$1 = (function (){var statearr_33199 = state_33126;
(statearr_33199[(19)] = inst_33095__$1);

return statearr_33199;
})();
if(cljs.core.truth_(inst_33095__$1)){
var statearr_33200_35478 = state_33126__$1;
(statearr_33200_35478[(1)] = (14));

} else {
var statearr_33201_35479 = state_33126__$1;
(statearr_33201_35479[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33127 === (5))){
var inst_33078 = (state_33126[(13)]);
var state_33126__$1 = state_33126;
var statearr_33202_35480 = state_33126__$1;
(statearr_33202_35480[(2)] = inst_33078);

(statearr_33202_35480[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33127 === (14))){
var inst_33095 = (state_33126[(19)]);
var state_33126__$1 = state_33126;
var statearr_33206_35481 = state_33126__$1;
(statearr_33206_35481[(2)] = inst_33095);

(statearr_33206_35481[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33127 === (26))){
var inst_33115 = (state_33126[(2)]);
var state_33126__$1 = state_33126;
var statearr_33207_35491 = state_33126__$1;
(statearr_33207_35491[(2)] = inst_33115);

(statearr_33207_35491[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33127 === (16))){
var inst_33107 = (state_33126[(2)]);
var state_33126__$1 = state_33126;
if(cljs.core.truth_(inst_33107)){
var statearr_33213_35496 = state_33126__$1;
(statearr_33213_35496[(1)] = (20));

} else {
var statearr_33218_35497 = state_33126__$1;
(statearr_33218_35497[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33127 === (10))){
var inst_33121 = (state_33126[(2)]);
var state_33126__$1 = state_33126;
var statearr_33222_35501 = state_33126__$1;
(statearr_33222_35501[(2)] = inst_33121);

(statearr_33222_35501[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33127 === (18))){
var inst_33099 = (state_33126[(16)]);
var state_33126__$1 = state_33126;
var statearr_33230_35515 = state_33126__$1;
(statearr_33230_35515[(2)] = inst_33099);

(statearr_33230_35515[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33127 === (8))){
var inst_33076 = (state_33126[(7)]);
var inst_33085 = (inst_33076 == null);
var state_33126__$1 = state_33126;
if(cljs.core.truth_(inst_33085)){
var statearr_33231_35516 = state_33126__$1;
(statearr_33231_35516[(1)] = (11));

} else {
var statearr_33232_35517 = state_33126__$1;
(statearr_33232_35517[(1)] = (12));

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
var cljs$core$async$mix_$_state_machine__30576__auto__ = null;
var cljs$core$async$mix_$_state_machine__30576__auto____0 = (function (){
var statearr_33239 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33239[(0)] = cljs$core$async$mix_$_state_machine__30576__auto__);

(statearr_33239[(1)] = (1));

return statearr_33239;
});
var cljs$core$async$mix_$_state_machine__30576__auto____1 = (function (state_33126){
while(true){
var ret_value__30577__auto__ = (function (){try{while(true){
var result__30578__auto__ = switch__30575__auto__(state_33126);
if(cljs.core.keyword_identical_QMARK_(result__30578__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30578__auto__;
}
break;
}
}catch (e33240){var ex__30579__auto__ = e33240;
var statearr_33241_35518 = state_33126;
(statearr_33241_35518[(2)] = ex__30579__auto__);


if(cljs.core.seq((state_33126[(4)]))){
var statearr_33242_35519 = state_33126;
(statearr_33242_35519[(1)] = cljs.core.first((state_33126[(4)])));

} else {
throw ex__30579__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30577__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35528 = state_33126;
state_33126 = G__35528;
continue;
} else {
return ret_value__30577__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__30576__auto__ = function(state_33126){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__30576__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__30576__auto____1.call(this,state_33126);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__30576__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__30576__auto____0;
cljs$core$async$mix_$_state_machine__30576__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__30576__auto____1;
return cljs$core$async$mix_$_state_machine__30576__auto__;
})()
})();
var state__31220__auto__ = (function (){var statearr_33244 = f__31199__auto__();
(statearr_33244[(6)] = c__31198__auto___35402);

return statearr_33244;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31220__auto__);
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

var cljs$core$async$Pub$sub_STAR_$dyn_35536 = (function (p,v,ch,close_QMARK_){
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
return cljs$core$async$Pub$sub_STAR_$dyn_35536(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_35552 = (function (p,v,ch){
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
return cljs$core$async$Pub$unsub_STAR_$dyn_35552(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_35561 = (function() {
var G__35562 = null;
var G__35562__1 = (function (p){
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
var G__35562__2 = (function (p,v){
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
G__35562 = function(p,v){
switch(arguments.length){
case 1:
return G__35562__1.call(this,p);
case 2:
return G__35562__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__35562.cljs$core$IFn$_invoke$arity$1 = G__35562__1;
G__35562.cljs$core$IFn$_invoke$arity$2 = G__35562__2;
return G__35562;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__33278 = arguments.length;
switch (G__33278) {
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_35561(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_35561(p,v);
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
cljs.core.async.t_cljs$core$async33308 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta33309){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta33309 = meta33309;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33308.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33310,meta33309__$1){
var self__ = this;
var _33310__$1 = this;
return (new cljs.core.async.t_cljs$core$async33308(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta33309__$1));
}));

(cljs.core.async.t_cljs$core$async33308.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33310){
var self__ = this;
var _33310__$1 = this;
return self__.meta33309;
}));

(cljs.core.async.t_cljs$core$async33308.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33308.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async33308.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33308.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async33308.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async33308.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async33308.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async33308.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta33309","meta33309",-1579371966,null)], null);
}));

(cljs.core.async.t_cljs$core$async33308.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33308.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33308");

(cljs.core.async.t_cljs$core$async33308.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async33308");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33308.
 */
cljs.core.async.__GT_t_cljs$core$async33308 = (function cljs$core$async$__GT_t_cljs$core$async33308(ch,topic_fn,buf_fn,mults,ensure_mult,meta33309){
return (new cljs.core.async.t_cljs$core$async33308(ch,topic_fn,buf_fn,mults,ensure_mult,meta33309));
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
var G__33298 = arguments.length;
switch (G__33298) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__33292_SHARP_){
if(cljs.core.truth_((p1__33292_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__33292_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__33292_SHARP_.call(null,topic)))){
return p1__33292_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__33292_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (new cljs.core.async.t_cljs$core$async33308(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
var c__31198__auto___35578 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31199__auto__ = (function (){var switch__30575__auto__ = (function (state_33419){
var state_val_33420 = (state_33419[(1)]);
if((state_val_33420 === (7))){
var inst_33415 = (state_33419[(2)]);
var state_33419__$1 = state_33419;
var statearr_33421_35579 = state_33419__$1;
(statearr_33421_35579[(2)] = inst_33415);

(statearr_33421_35579[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33420 === (20))){
var state_33419__$1 = state_33419;
var statearr_33422_35580 = state_33419__$1;
(statearr_33422_35580[(2)] = null);

(statearr_33422_35580[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33420 === (1))){
var state_33419__$1 = state_33419;
var statearr_33427_35581 = state_33419__$1;
(statearr_33427_35581[(2)] = null);

(statearr_33427_35581[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33420 === (24))){
var inst_33398 = (state_33419[(7)]);
var inst_33407 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_33398);
var state_33419__$1 = state_33419;
var statearr_33435_35582 = state_33419__$1;
(statearr_33435_35582[(2)] = inst_33407);

(statearr_33435_35582[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33420 === (4))){
var inst_33339 = (state_33419[(8)]);
var inst_33339__$1 = (state_33419[(2)]);
var inst_33340 = (inst_33339__$1 == null);
var state_33419__$1 = (function (){var statearr_33436 = state_33419;
(statearr_33436[(8)] = inst_33339__$1);

return statearr_33436;
})();
if(cljs.core.truth_(inst_33340)){
var statearr_33437_35583 = state_33419__$1;
(statearr_33437_35583[(1)] = (5));

} else {
var statearr_33438_35584 = state_33419__$1;
(statearr_33438_35584[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33420 === (15))){
var inst_33392 = (state_33419[(2)]);
var state_33419__$1 = state_33419;
var statearr_33439_35586 = state_33419__$1;
(statearr_33439_35586[(2)] = inst_33392);

(statearr_33439_35586[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33420 === (21))){
var inst_33412 = (state_33419[(2)]);
var state_33419__$1 = (function (){var statearr_33440 = state_33419;
(statearr_33440[(9)] = inst_33412);

return statearr_33440;
})();
var statearr_33441_35587 = state_33419__$1;
(statearr_33441_35587[(2)] = null);

(statearr_33441_35587[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33420 === (13))){
var inst_33371 = (state_33419[(10)]);
var inst_33373 = cljs.core.chunked_seq_QMARK_(inst_33371);
var state_33419__$1 = state_33419;
if(inst_33373){
var statearr_33442_35588 = state_33419__$1;
(statearr_33442_35588[(1)] = (16));

} else {
var statearr_33443_35589 = state_33419__$1;
(statearr_33443_35589[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33420 === (22))){
var inst_33404 = (state_33419[(2)]);
var state_33419__$1 = state_33419;
if(cljs.core.truth_(inst_33404)){
var statearr_33444_35590 = state_33419__$1;
(statearr_33444_35590[(1)] = (23));

} else {
var statearr_33445_35591 = state_33419__$1;
(statearr_33445_35591[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33420 === (6))){
var inst_33339 = (state_33419[(8)]);
var inst_33398 = (state_33419[(7)]);
var inst_33400 = (state_33419[(11)]);
var inst_33398__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_33339) : topic_fn.call(null,inst_33339));
var inst_33399 = cljs.core.deref(mults);
var inst_33400__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33399,inst_33398__$1);
var state_33419__$1 = (function (){var statearr_33457 = state_33419;
(statearr_33457[(7)] = inst_33398__$1);

(statearr_33457[(11)] = inst_33400__$1);

return statearr_33457;
})();
if(cljs.core.truth_(inst_33400__$1)){
var statearr_33458_35595 = state_33419__$1;
(statearr_33458_35595[(1)] = (19));

} else {
var statearr_33459_35596 = state_33419__$1;
(statearr_33459_35596[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33420 === (25))){
var inst_33409 = (state_33419[(2)]);
var state_33419__$1 = state_33419;
var statearr_33462_35597 = state_33419__$1;
(statearr_33462_35597[(2)] = inst_33409);

(statearr_33462_35597[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33420 === (17))){
var inst_33371 = (state_33419[(10)]);
var inst_33380 = cljs.core.first(inst_33371);
var inst_33381 = cljs.core.async.muxch_STAR_(inst_33380);
var inst_33382 = cljs.core.async.close_BANG_(inst_33381);
var inst_33386 = cljs.core.next(inst_33371);
var inst_33349 = inst_33386;
var inst_33350 = null;
var inst_33351 = (0);
var inst_33352 = (0);
var state_33419__$1 = (function (){var statearr_33466 = state_33419;
(statearr_33466[(12)] = inst_33382);

(statearr_33466[(13)] = inst_33349);

(statearr_33466[(14)] = inst_33350);

(statearr_33466[(15)] = inst_33351);

(statearr_33466[(16)] = inst_33352);

return statearr_33466;
})();
var statearr_33467_35598 = state_33419__$1;
(statearr_33467_35598[(2)] = null);

(statearr_33467_35598[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33420 === (3))){
var inst_33417 = (state_33419[(2)]);
var state_33419__$1 = state_33419;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33419__$1,inst_33417);
} else {
if((state_val_33420 === (12))){
var inst_33394 = (state_33419[(2)]);
var state_33419__$1 = state_33419;
var statearr_33471_35600 = state_33419__$1;
(statearr_33471_35600[(2)] = inst_33394);

(statearr_33471_35600[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33420 === (2))){
var state_33419__$1 = state_33419;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33419__$1,(4),ch);
} else {
if((state_val_33420 === (23))){
var state_33419__$1 = state_33419;
var statearr_33477_35601 = state_33419__$1;
(statearr_33477_35601[(2)] = null);

(statearr_33477_35601[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33420 === (19))){
var inst_33400 = (state_33419[(11)]);
var inst_33339 = (state_33419[(8)]);
var inst_33402 = cljs.core.async.muxch_STAR_(inst_33400);
var state_33419__$1 = state_33419;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33419__$1,(22),inst_33402,inst_33339);
} else {
if((state_val_33420 === (11))){
var inst_33349 = (state_33419[(13)]);
var inst_33371 = (state_33419[(10)]);
var inst_33371__$1 = cljs.core.seq(inst_33349);
var state_33419__$1 = (function (){var statearr_33489 = state_33419;
(statearr_33489[(10)] = inst_33371__$1);

return statearr_33489;
})();
if(inst_33371__$1){
var statearr_33490_35602 = state_33419__$1;
(statearr_33490_35602[(1)] = (13));

} else {
var statearr_33491_35603 = state_33419__$1;
(statearr_33491_35603[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33420 === (9))){
var inst_33396 = (state_33419[(2)]);
var state_33419__$1 = state_33419;
var statearr_33492_35604 = state_33419__$1;
(statearr_33492_35604[(2)] = inst_33396);

(statearr_33492_35604[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33420 === (5))){
var inst_33346 = cljs.core.deref(mults);
var inst_33347 = cljs.core.vals(inst_33346);
var inst_33348 = cljs.core.seq(inst_33347);
var inst_33349 = inst_33348;
var inst_33350 = null;
var inst_33351 = (0);
var inst_33352 = (0);
var state_33419__$1 = (function (){var statearr_33495 = state_33419;
(statearr_33495[(13)] = inst_33349);

(statearr_33495[(14)] = inst_33350);

(statearr_33495[(15)] = inst_33351);

(statearr_33495[(16)] = inst_33352);

return statearr_33495;
})();
var statearr_33499_35605 = state_33419__$1;
(statearr_33499_35605[(2)] = null);

(statearr_33499_35605[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33420 === (14))){
var state_33419__$1 = state_33419;
var statearr_33503_35606 = state_33419__$1;
(statearr_33503_35606[(2)] = null);

(statearr_33503_35606[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33420 === (16))){
var inst_33371 = (state_33419[(10)]);
var inst_33375 = cljs.core.chunk_first(inst_33371);
var inst_33376 = cljs.core.chunk_rest(inst_33371);
var inst_33377 = cljs.core.count(inst_33375);
var inst_33349 = inst_33376;
var inst_33350 = inst_33375;
var inst_33351 = inst_33377;
var inst_33352 = (0);
var state_33419__$1 = (function (){var statearr_33504 = state_33419;
(statearr_33504[(13)] = inst_33349);

(statearr_33504[(14)] = inst_33350);

(statearr_33504[(15)] = inst_33351);

(statearr_33504[(16)] = inst_33352);

return statearr_33504;
})();
var statearr_33505_35608 = state_33419__$1;
(statearr_33505_35608[(2)] = null);

(statearr_33505_35608[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33420 === (10))){
var inst_33350 = (state_33419[(14)]);
var inst_33352 = (state_33419[(16)]);
var inst_33349 = (state_33419[(13)]);
var inst_33351 = (state_33419[(15)]);
var inst_33360 = cljs.core._nth(inst_33350,inst_33352);
var inst_33361 = cljs.core.async.muxch_STAR_(inst_33360);
var inst_33362 = cljs.core.async.close_BANG_(inst_33361);
var inst_33363 = (inst_33352 + (1));
var tmp33500 = inst_33350;
var tmp33501 = inst_33351;
var tmp33502 = inst_33349;
var inst_33349__$1 = tmp33502;
var inst_33350__$1 = tmp33500;
var inst_33351__$1 = tmp33501;
var inst_33352__$1 = inst_33363;
var state_33419__$1 = (function (){var statearr_33506 = state_33419;
(statearr_33506[(17)] = inst_33362);

(statearr_33506[(13)] = inst_33349__$1);

(statearr_33506[(14)] = inst_33350__$1);

(statearr_33506[(15)] = inst_33351__$1);

(statearr_33506[(16)] = inst_33352__$1);

return statearr_33506;
})();
var statearr_33507_35609 = state_33419__$1;
(statearr_33507_35609[(2)] = null);

(statearr_33507_35609[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33420 === (18))){
var inst_33389 = (state_33419[(2)]);
var state_33419__$1 = state_33419;
var statearr_33508_35610 = state_33419__$1;
(statearr_33508_35610[(2)] = inst_33389);

(statearr_33508_35610[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33420 === (8))){
var inst_33352 = (state_33419[(16)]);
var inst_33351 = (state_33419[(15)]);
var inst_33354 = (inst_33352 < inst_33351);
var inst_33355 = inst_33354;
var state_33419__$1 = state_33419;
if(cljs.core.truth_(inst_33355)){
var statearr_33511_35613 = state_33419__$1;
(statearr_33511_35613[(1)] = (10));

} else {
var statearr_33512_35614 = state_33419__$1;
(statearr_33512_35614[(1)] = (11));

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
var cljs$core$async$state_machine__30576__auto__ = null;
var cljs$core$async$state_machine__30576__auto____0 = (function (){
var statearr_33514 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33514[(0)] = cljs$core$async$state_machine__30576__auto__);

(statearr_33514[(1)] = (1));

return statearr_33514;
});
var cljs$core$async$state_machine__30576__auto____1 = (function (state_33419){
while(true){
var ret_value__30577__auto__ = (function (){try{while(true){
var result__30578__auto__ = switch__30575__auto__(state_33419);
if(cljs.core.keyword_identical_QMARK_(result__30578__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30578__auto__;
}
break;
}
}catch (e33515){var ex__30579__auto__ = e33515;
var statearr_33516_35615 = state_33419;
(statearr_33516_35615[(2)] = ex__30579__auto__);


if(cljs.core.seq((state_33419[(4)]))){
var statearr_33517_35616 = state_33419;
(statearr_33517_35616[(1)] = cljs.core.first((state_33419[(4)])));

} else {
throw ex__30579__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30577__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35617 = state_33419;
state_33419 = G__35617;
continue;
} else {
return ret_value__30577__auto__;
}
break;
}
});
cljs$core$async$state_machine__30576__auto__ = function(state_33419){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30576__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30576__auto____1.call(this,state_33419);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30576__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30576__auto____0;
cljs$core$async$state_machine__30576__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30576__auto____1;
return cljs$core$async$state_machine__30576__auto__;
})()
})();
var state__31220__auto__ = (function (){var statearr_33519 = f__31199__auto__();
(statearr_33519[(6)] = c__31198__auto___35578);

return statearr_33519;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31220__auto__);
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
var G__33524 = arguments.length;
switch (G__33524) {
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
var G__33529 = arguments.length;
switch (G__33529) {
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
var G__33537 = arguments.length;
switch (G__33537) {
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
var c__31198__auto___35625 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31199__auto__ = (function (){var switch__30575__auto__ = (function (state_33620){
var state_val_33621 = (state_33620[(1)]);
if((state_val_33621 === (7))){
var state_33620__$1 = state_33620;
var statearr_33640_35626 = state_33620__$1;
(statearr_33640_35626[(2)] = null);

(statearr_33640_35626[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33621 === (1))){
var state_33620__$1 = state_33620;
var statearr_33641_35628 = state_33620__$1;
(statearr_33641_35628[(2)] = null);

(statearr_33641_35628[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33621 === (4))){
var inst_33554 = (state_33620[(7)]);
var inst_33553 = (state_33620[(8)]);
var inst_33561 = (inst_33554 < inst_33553);
var state_33620__$1 = state_33620;
if(cljs.core.truth_(inst_33561)){
var statearr_33656_35630 = state_33620__$1;
(statearr_33656_35630[(1)] = (6));

} else {
var statearr_33657_35631 = state_33620__$1;
(statearr_33657_35631[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33621 === (15))){
var inst_33598 = (state_33620[(9)]);
var inst_33603 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_33598);
var state_33620__$1 = state_33620;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33620__$1,(17),out,inst_33603);
} else {
if((state_val_33621 === (13))){
var inst_33598 = (state_33620[(9)]);
var inst_33598__$1 = (state_33620[(2)]);
var inst_33599 = cljs.core.some(cljs.core.nil_QMARK_,inst_33598__$1);
var state_33620__$1 = (function (){var statearr_33664 = state_33620;
(statearr_33664[(9)] = inst_33598__$1);

return statearr_33664;
})();
if(cljs.core.truth_(inst_33599)){
var statearr_33665_35632 = state_33620__$1;
(statearr_33665_35632[(1)] = (14));

} else {
var statearr_33669_35633 = state_33620__$1;
(statearr_33669_35633[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33621 === (6))){
var state_33620__$1 = state_33620;
var statearr_33675_35634 = state_33620__$1;
(statearr_33675_35634[(2)] = null);

(statearr_33675_35634[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33621 === (17))){
var inst_33605 = (state_33620[(2)]);
var state_33620__$1 = (function (){var statearr_33681 = state_33620;
(statearr_33681[(10)] = inst_33605);

return statearr_33681;
})();
var statearr_33682_35641 = state_33620__$1;
(statearr_33682_35641[(2)] = null);

(statearr_33682_35641[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33621 === (3))){
var inst_33610 = (state_33620[(2)]);
var state_33620__$1 = state_33620;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33620__$1,inst_33610);
} else {
if((state_val_33621 === (12))){
var _ = (function (){var statearr_33687 = state_33620;
(statearr_33687[(4)] = cljs.core.rest((state_33620[(4)])));

return statearr_33687;
})();
var state_33620__$1 = state_33620;
var ex33680 = (state_33620__$1[(2)]);
var statearr_33691_35646 = state_33620__$1;
(statearr_33691_35646[(5)] = ex33680);


if((ex33680 instanceof Object)){
var statearr_33692_35647 = state_33620__$1;
(statearr_33692_35647[(1)] = (11));

(statearr_33692_35647[(5)] = null);

} else {
throw ex33680;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33621 === (2))){
var inst_33552 = cljs.core.reset_BANG_(dctr,cnt);
var inst_33553 = cnt;
var inst_33554 = (0);
var state_33620__$1 = (function (){var statearr_33696 = state_33620;
(statearr_33696[(11)] = inst_33552);

(statearr_33696[(8)] = inst_33553);

(statearr_33696[(7)] = inst_33554);

return statearr_33696;
})();
var statearr_33697_35656 = state_33620__$1;
(statearr_33697_35656[(2)] = null);

(statearr_33697_35656[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33621 === (11))){
var inst_33574 = (state_33620[(2)]);
var inst_33578 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_33620__$1 = (function (){var statearr_33698 = state_33620;
(statearr_33698[(12)] = inst_33574);

return statearr_33698;
})();
var statearr_33699_35657 = state_33620__$1;
(statearr_33699_35657[(2)] = inst_33578);

(statearr_33699_35657[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33621 === (9))){
var inst_33554 = (state_33620[(7)]);
var _ = (function (){var statearr_33703 = state_33620;
(statearr_33703[(4)] = cljs.core.cons((12),(state_33620[(4)])));

return statearr_33703;
})();
var inst_33584 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_33554) : chs__$1.call(null,inst_33554));
var inst_33585 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_33554) : done.call(null,inst_33554));
var inst_33586 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_33584,inst_33585);
var ___$1 = (function (){var statearr_33705 = state_33620;
(statearr_33705[(4)] = cljs.core.rest((state_33620[(4)])));

return statearr_33705;
})();
var state_33620__$1 = state_33620;
var statearr_33706_35658 = state_33620__$1;
(statearr_33706_35658[(2)] = inst_33586);

(statearr_33706_35658[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33621 === (5))){
var inst_33596 = (state_33620[(2)]);
var state_33620__$1 = (function (){var statearr_33707 = state_33620;
(statearr_33707[(13)] = inst_33596);

return statearr_33707;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33620__$1,(13),dchan);
} else {
if((state_val_33621 === (14))){
var inst_33601 = cljs.core.async.close_BANG_(out);
var state_33620__$1 = state_33620;
var statearr_33708_35659 = state_33620__$1;
(statearr_33708_35659[(2)] = inst_33601);

(statearr_33708_35659[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33621 === (16))){
var inst_33608 = (state_33620[(2)]);
var state_33620__$1 = state_33620;
var statearr_33709_35660 = state_33620__$1;
(statearr_33709_35660[(2)] = inst_33608);

(statearr_33709_35660[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33621 === (10))){
var inst_33554 = (state_33620[(7)]);
var inst_33589 = (state_33620[(2)]);
var inst_33590 = (inst_33554 + (1));
var inst_33554__$1 = inst_33590;
var state_33620__$1 = (function (){var statearr_33710 = state_33620;
(statearr_33710[(14)] = inst_33589);

(statearr_33710[(7)] = inst_33554__$1);

return statearr_33710;
})();
var statearr_33711_35665 = state_33620__$1;
(statearr_33711_35665[(2)] = null);

(statearr_33711_35665[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33621 === (8))){
var inst_33594 = (state_33620[(2)]);
var state_33620__$1 = state_33620;
var statearr_33712_35666 = state_33620__$1;
(statearr_33712_35666[(2)] = inst_33594);

(statearr_33712_35666[(1)] = (5));


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
var cljs$core$async$state_machine__30576__auto__ = null;
var cljs$core$async$state_machine__30576__auto____0 = (function (){
var statearr_33713 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33713[(0)] = cljs$core$async$state_machine__30576__auto__);

(statearr_33713[(1)] = (1));

return statearr_33713;
});
var cljs$core$async$state_machine__30576__auto____1 = (function (state_33620){
while(true){
var ret_value__30577__auto__ = (function (){try{while(true){
var result__30578__auto__ = switch__30575__auto__(state_33620);
if(cljs.core.keyword_identical_QMARK_(result__30578__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30578__auto__;
}
break;
}
}catch (e33726){var ex__30579__auto__ = e33726;
var statearr_33727_35669 = state_33620;
(statearr_33727_35669[(2)] = ex__30579__auto__);


if(cljs.core.seq((state_33620[(4)]))){
var statearr_33728_35670 = state_33620;
(statearr_33728_35670[(1)] = cljs.core.first((state_33620[(4)])));

} else {
throw ex__30579__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30577__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35672 = state_33620;
state_33620 = G__35672;
continue;
} else {
return ret_value__30577__auto__;
}
break;
}
});
cljs$core$async$state_machine__30576__auto__ = function(state_33620){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30576__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30576__auto____1.call(this,state_33620);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30576__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30576__auto____0;
cljs$core$async$state_machine__30576__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30576__auto____1;
return cljs$core$async$state_machine__30576__auto__;
})()
})();
var state__31220__auto__ = (function (){var statearr_33729 = f__31199__auto__();
(statearr_33729[(6)] = c__31198__auto___35625);

return statearr_33729;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31220__auto__);
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
var G__33733 = arguments.length;
switch (G__33733) {
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
var c__31198__auto___35675 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31199__auto__ = (function (){var switch__30575__auto__ = (function (state_33794){
var state_val_33795 = (state_33794[(1)]);
if((state_val_33795 === (7))){
var inst_33757 = (state_33794[(7)]);
var inst_33758 = (state_33794[(8)]);
var inst_33757__$1 = (state_33794[(2)]);
var inst_33758__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33757__$1,(0),null);
var inst_33769 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33757__$1,(1),null);
var inst_33773 = (inst_33758__$1 == null);
var state_33794__$1 = (function (){var statearr_33796 = state_33794;
(statearr_33796[(7)] = inst_33757__$1);

(statearr_33796[(8)] = inst_33758__$1);

(statearr_33796[(9)] = inst_33769);

return statearr_33796;
})();
if(cljs.core.truth_(inst_33773)){
var statearr_33797_35676 = state_33794__$1;
(statearr_33797_35676[(1)] = (8));

} else {
var statearr_33799_35677 = state_33794__$1;
(statearr_33799_35677[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33795 === (1))){
var inst_33747 = cljs.core.vec(chs);
var inst_33748 = inst_33747;
var state_33794__$1 = (function (){var statearr_33800 = state_33794;
(statearr_33800[(10)] = inst_33748);

return statearr_33800;
})();
var statearr_33801_35678 = state_33794__$1;
(statearr_33801_35678[(2)] = null);

(statearr_33801_35678[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33795 === (4))){
var inst_33748 = (state_33794[(10)]);
var state_33794__$1 = state_33794;
return cljs.core.async.ioc_alts_BANG_(state_33794__$1,(7),inst_33748);
} else {
if((state_val_33795 === (6))){
var inst_33790 = (state_33794[(2)]);
var state_33794__$1 = state_33794;
var statearr_33802_35679 = state_33794__$1;
(statearr_33802_35679[(2)] = inst_33790);

(statearr_33802_35679[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33795 === (3))){
var inst_33792 = (state_33794[(2)]);
var state_33794__$1 = state_33794;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33794__$1,inst_33792);
} else {
if((state_val_33795 === (2))){
var inst_33748 = (state_33794[(10)]);
var inst_33750 = cljs.core.count(inst_33748);
var inst_33751 = (inst_33750 > (0));
var state_33794__$1 = state_33794;
if(cljs.core.truth_(inst_33751)){
var statearr_33807_35681 = state_33794__$1;
(statearr_33807_35681[(1)] = (4));

} else {
var statearr_33809_35682 = state_33794__$1;
(statearr_33809_35682[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33795 === (11))){
var inst_33748 = (state_33794[(10)]);
var inst_33783 = (state_33794[(2)]);
var tmp33805 = inst_33748;
var inst_33748__$1 = tmp33805;
var state_33794__$1 = (function (){var statearr_33810 = state_33794;
(statearr_33810[(11)] = inst_33783);

(statearr_33810[(10)] = inst_33748__$1);

return statearr_33810;
})();
var statearr_33811_35686 = state_33794__$1;
(statearr_33811_35686[(2)] = null);

(statearr_33811_35686[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33795 === (9))){
var inst_33758 = (state_33794[(8)]);
var state_33794__$1 = state_33794;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33794__$1,(11),out,inst_33758);
} else {
if((state_val_33795 === (5))){
var inst_33788 = cljs.core.async.close_BANG_(out);
var state_33794__$1 = state_33794;
var statearr_33818_35688 = state_33794__$1;
(statearr_33818_35688[(2)] = inst_33788);

(statearr_33818_35688[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33795 === (10))){
var inst_33786 = (state_33794[(2)]);
var state_33794__$1 = state_33794;
var statearr_33819_35689 = state_33794__$1;
(statearr_33819_35689[(2)] = inst_33786);

(statearr_33819_35689[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33795 === (8))){
var inst_33748 = (state_33794[(10)]);
var inst_33757 = (state_33794[(7)]);
var inst_33758 = (state_33794[(8)]);
var inst_33769 = (state_33794[(9)]);
var inst_33778 = (function (){var cs = inst_33748;
var vec__33753 = inst_33757;
var v = inst_33758;
var c = inst_33769;
return (function (p1__33731_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__33731_SHARP_);
});
})();
var inst_33779 = cljs.core.filterv(inst_33778,inst_33748);
var inst_33748__$1 = inst_33779;
var state_33794__$1 = (function (){var statearr_33821 = state_33794;
(statearr_33821[(10)] = inst_33748__$1);

return statearr_33821;
})();
var statearr_33822_35699 = state_33794__$1;
(statearr_33822_35699[(2)] = null);

(statearr_33822_35699[(1)] = (2));


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
var cljs$core$async$state_machine__30576__auto__ = null;
var cljs$core$async$state_machine__30576__auto____0 = (function (){
var statearr_33834 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33834[(0)] = cljs$core$async$state_machine__30576__auto__);

(statearr_33834[(1)] = (1));

return statearr_33834;
});
var cljs$core$async$state_machine__30576__auto____1 = (function (state_33794){
while(true){
var ret_value__30577__auto__ = (function (){try{while(true){
var result__30578__auto__ = switch__30575__auto__(state_33794);
if(cljs.core.keyword_identical_QMARK_(result__30578__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30578__auto__;
}
break;
}
}catch (e33835){var ex__30579__auto__ = e33835;
var statearr_33836_35703 = state_33794;
(statearr_33836_35703[(2)] = ex__30579__auto__);


if(cljs.core.seq((state_33794[(4)]))){
var statearr_33838_35704 = state_33794;
(statearr_33838_35704[(1)] = cljs.core.first((state_33794[(4)])));

} else {
throw ex__30579__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30577__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35705 = state_33794;
state_33794 = G__35705;
continue;
} else {
return ret_value__30577__auto__;
}
break;
}
});
cljs$core$async$state_machine__30576__auto__ = function(state_33794){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30576__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30576__auto____1.call(this,state_33794);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30576__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30576__auto____0;
cljs$core$async$state_machine__30576__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30576__auto____1;
return cljs$core$async$state_machine__30576__auto__;
})()
})();
var state__31220__auto__ = (function (){var statearr_33840 = f__31199__auto__();
(statearr_33840[(6)] = c__31198__auto___35675);

return statearr_33840;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31220__auto__);
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
var G__33849 = arguments.length;
switch (G__33849) {
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
var c__31198__auto___35710 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31199__auto__ = (function (){var switch__30575__auto__ = (function (state_33893){
var state_val_33894 = (state_33893[(1)]);
if((state_val_33894 === (7))){
var inst_33872 = (state_33893[(7)]);
var inst_33872__$1 = (state_33893[(2)]);
var inst_33876 = (inst_33872__$1 == null);
var inst_33877 = cljs.core.not(inst_33876);
var state_33893__$1 = (function (){var statearr_33895 = state_33893;
(statearr_33895[(7)] = inst_33872__$1);

return statearr_33895;
})();
if(inst_33877){
var statearr_33899_35712 = state_33893__$1;
(statearr_33899_35712[(1)] = (8));

} else {
var statearr_33903_35713 = state_33893__$1;
(statearr_33903_35713[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33894 === (1))){
var inst_33867 = (0);
var state_33893__$1 = (function (){var statearr_33904 = state_33893;
(statearr_33904[(8)] = inst_33867);

return statearr_33904;
})();
var statearr_33905_35714 = state_33893__$1;
(statearr_33905_35714[(2)] = null);

(statearr_33905_35714[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33894 === (4))){
var state_33893__$1 = state_33893;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33893__$1,(7),ch);
} else {
if((state_val_33894 === (6))){
var inst_33888 = (state_33893[(2)]);
var state_33893__$1 = state_33893;
var statearr_33906_35715 = state_33893__$1;
(statearr_33906_35715[(2)] = inst_33888);

(statearr_33906_35715[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33894 === (3))){
var inst_33890 = (state_33893[(2)]);
var inst_33891 = cljs.core.async.close_BANG_(out);
var state_33893__$1 = (function (){var statearr_33907 = state_33893;
(statearr_33907[(9)] = inst_33890);

return statearr_33907;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_33893__$1,inst_33891);
} else {
if((state_val_33894 === (2))){
var inst_33867 = (state_33893[(8)]);
var inst_33869 = (inst_33867 < n);
var state_33893__$1 = state_33893;
if(cljs.core.truth_(inst_33869)){
var statearr_33908_35720 = state_33893__$1;
(statearr_33908_35720[(1)] = (4));

} else {
var statearr_33909_35721 = state_33893__$1;
(statearr_33909_35721[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33894 === (11))){
var inst_33867 = (state_33893[(8)]);
var inst_33880 = (state_33893[(2)]);
var inst_33881 = (inst_33867 + (1));
var inst_33867__$1 = inst_33881;
var state_33893__$1 = (function (){var statearr_33910 = state_33893;
(statearr_33910[(10)] = inst_33880);

(statearr_33910[(8)] = inst_33867__$1);

return statearr_33910;
})();
var statearr_33911_35723 = state_33893__$1;
(statearr_33911_35723[(2)] = null);

(statearr_33911_35723[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33894 === (9))){
var state_33893__$1 = state_33893;
var statearr_33914_35724 = state_33893__$1;
(statearr_33914_35724[(2)] = null);

(statearr_33914_35724[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33894 === (5))){
var state_33893__$1 = state_33893;
var statearr_33916_35725 = state_33893__$1;
(statearr_33916_35725[(2)] = null);

(statearr_33916_35725[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33894 === (10))){
var inst_33885 = (state_33893[(2)]);
var state_33893__$1 = state_33893;
var statearr_33917_35726 = state_33893__$1;
(statearr_33917_35726[(2)] = inst_33885);

(statearr_33917_35726[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33894 === (8))){
var inst_33872 = (state_33893[(7)]);
var state_33893__$1 = state_33893;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33893__$1,(11),out,inst_33872);
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
var cljs$core$async$state_machine__30576__auto__ = null;
var cljs$core$async$state_machine__30576__auto____0 = (function (){
var statearr_33931 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33931[(0)] = cljs$core$async$state_machine__30576__auto__);

(statearr_33931[(1)] = (1));

return statearr_33931;
});
var cljs$core$async$state_machine__30576__auto____1 = (function (state_33893){
while(true){
var ret_value__30577__auto__ = (function (){try{while(true){
var result__30578__auto__ = switch__30575__auto__(state_33893);
if(cljs.core.keyword_identical_QMARK_(result__30578__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30578__auto__;
}
break;
}
}catch (e33934){var ex__30579__auto__ = e33934;
var statearr_33935_35730 = state_33893;
(statearr_33935_35730[(2)] = ex__30579__auto__);


if(cljs.core.seq((state_33893[(4)]))){
var statearr_33936_35731 = state_33893;
(statearr_33936_35731[(1)] = cljs.core.first((state_33893[(4)])));

} else {
throw ex__30579__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30577__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35732 = state_33893;
state_33893 = G__35732;
continue;
} else {
return ret_value__30577__auto__;
}
break;
}
});
cljs$core$async$state_machine__30576__auto__ = function(state_33893){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30576__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30576__auto____1.call(this,state_33893);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30576__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30576__auto____0;
cljs$core$async$state_machine__30576__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30576__auto____1;
return cljs$core$async$state_machine__30576__auto__;
})()
})();
var state__31220__auto__ = (function (){var statearr_33949 = f__31199__auto__();
(statearr_33949[(6)] = c__31198__auto___35710);

return statearr_33949;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31220__auto__);
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
cljs.core.async.t_cljs$core$async33994 = (function (f,ch,meta33955,_,fn1,meta33995){
this.f = f;
this.ch = ch;
this.meta33955 = meta33955;
this._ = _;
this.fn1 = fn1;
this.meta33995 = meta33995;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33994.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33996,meta33995__$1){
var self__ = this;
var _33996__$1 = this;
return (new cljs.core.async.t_cljs$core$async33994(self__.f,self__.ch,self__.meta33955,self__._,self__.fn1,meta33995__$1));
}));

(cljs.core.async.t_cljs$core$async33994.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33996){
var self__ = this;
var _33996__$1 = this;
return self__.meta33995;
}));

(cljs.core.async.t_cljs$core$async33994.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33994.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async33994.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async33994.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__33953_SHARP_){
var G__34006 = (((p1__33953_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__33953_SHARP_) : self__.f.call(null,p1__33953_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__34006) : f1.call(null,G__34006));
});
}));

(cljs.core.async.t_cljs$core$async33994.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33955","meta33955",-1394151381,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async33954","cljs.core.async/t_cljs$core$async33954",2044546839,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta33995","meta33995",1362545496,null)], null);
}));

(cljs.core.async.t_cljs$core$async33994.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33994.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33994");

(cljs.core.async.t_cljs$core$async33994.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async33994");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33994.
 */
cljs.core.async.__GT_t_cljs$core$async33994 = (function cljs$core$async$__GT_t_cljs$core$async33994(f,ch,meta33955,_,fn1,meta33995){
return (new cljs.core.async.t_cljs$core$async33994(f,ch,meta33955,_,fn1,meta33995));
});



/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33954 = (function (f,ch,meta33955){
this.f = f;
this.ch = ch;
this.meta33955 = meta33955;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33954.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33956,meta33955__$1){
var self__ = this;
var _33956__$1 = this;
return (new cljs.core.async.t_cljs$core$async33954(self__.f,self__.ch,meta33955__$1));
}));

(cljs.core.async.t_cljs$core$async33954.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33956){
var self__ = this;
var _33956__$1 = this;
return self__.meta33955;
}));

(cljs.core.async.t_cljs$core$async33954.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33954.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async33954.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async33954.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33954.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(new cljs.core.async.t_cljs$core$async33994(self__.f,self__.ch,self__.meta33955,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY)));
if(cljs.core.truth_((function (){var and__5000__auto__ = ret;
if(cljs.core.truth_(and__5000__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5000__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__34013 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__34013) : self__.f.call(null,G__34013));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async33954.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33954.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async33954.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33955","meta33955",-1394151381,null)], null);
}));

(cljs.core.async.t_cljs$core$async33954.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33954.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33954");

(cljs.core.async.t_cljs$core$async33954.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async33954");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33954.
 */
cljs.core.async.__GT_t_cljs$core$async33954 = (function cljs$core$async$__GT_t_cljs$core$async33954(f,ch,meta33955){
return (new cljs.core.async.t_cljs$core$async33954(f,ch,meta33955));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
return (new cljs.core.async.t_cljs$core$async33954(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34024 = (function (f,ch,meta34025){
this.f = f;
this.ch = ch;
this.meta34025 = meta34025;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34024.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34026,meta34025__$1){
var self__ = this;
var _34026__$1 = this;
return (new cljs.core.async.t_cljs$core$async34024(self__.f,self__.ch,meta34025__$1));
}));

(cljs.core.async.t_cljs$core$async34024.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34026){
var self__ = this;
var _34026__$1 = this;
return self__.meta34025;
}));

(cljs.core.async.t_cljs$core$async34024.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34024.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async34024.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34024.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async34024.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34024.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async34024.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34025","meta34025",-734719813,null)], null);
}));

(cljs.core.async.t_cljs$core$async34024.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34024.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34024");

(cljs.core.async.t_cljs$core$async34024.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async34024");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34024.
 */
cljs.core.async.__GT_t_cljs$core$async34024 = (function cljs$core$async$__GT_t_cljs$core$async34024(f,ch,meta34025){
return (new cljs.core.async.t_cljs$core$async34024(f,ch,meta34025));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
return (new cljs.core.async.t_cljs$core$async34024(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34055 = (function (p,ch,meta34056){
this.p = p;
this.ch = ch;
this.meta34056 = meta34056;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34055.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34057,meta34056__$1){
var self__ = this;
var _34057__$1 = this;
return (new cljs.core.async.t_cljs$core$async34055(self__.p,self__.ch,meta34056__$1));
}));

(cljs.core.async.t_cljs$core$async34055.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34057){
var self__ = this;
var _34057__$1 = this;
return self__.meta34056;
}));

(cljs.core.async.t_cljs$core$async34055.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34055.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async34055.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async34055.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34055.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async34055.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34055.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async34055.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34056","meta34056",-383622783,null)], null);
}));

(cljs.core.async.t_cljs$core$async34055.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34055.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34055");

(cljs.core.async.t_cljs$core$async34055.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async34055");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34055.
 */
cljs.core.async.__GT_t_cljs$core$async34055 = (function cljs$core$async$__GT_t_cljs$core$async34055(p,ch,meta34056){
return (new cljs.core.async.t_cljs$core$async34055(p,ch,meta34056));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
return (new cljs.core.async.t_cljs$core$async34055(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__34060 = arguments.length;
switch (G__34060) {
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
var c__31198__auto___35769 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31199__auto__ = (function (){var switch__30575__auto__ = (function (state_34081){
var state_val_34082 = (state_34081[(1)]);
if((state_val_34082 === (7))){
var inst_34077 = (state_34081[(2)]);
var state_34081__$1 = state_34081;
var statearr_34083_35772 = state_34081__$1;
(statearr_34083_35772[(2)] = inst_34077);

(statearr_34083_35772[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34082 === (1))){
var state_34081__$1 = state_34081;
var statearr_34084_35773 = state_34081__$1;
(statearr_34084_35773[(2)] = null);

(statearr_34084_35773[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34082 === (4))){
var inst_34063 = (state_34081[(7)]);
var inst_34063__$1 = (state_34081[(2)]);
var inst_34064 = (inst_34063__$1 == null);
var state_34081__$1 = (function (){var statearr_34085 = state_34081;
(statearr_34085[(7)] = inst_34063__$1);

return statearr_34085;
})();
if(cljs.core.truth_(inst_34064)){
var statearr_34086_35774 = state_34081__$1;
(statearr_34086_35774[(1)] = (5));

} else {
var statearr_34090_35775 = state_34081__$1;
(statearr_34090_35775[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34082 === (6))){
var inst_34063 = (state_34081[(7)]);
var inst_34068 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_34063) : p.call(null,inst_34063));
var state_34081__$1 = state_34081;
if(cljs.core.truth_(inst_34068)){
var statearr_34091_35778 = state_34081__$1;
(statearr_34091_35778[(1)] = (8));

} else {
var statearr_34092_35779 = state_34081__$1;
(statearr_34092_35779[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34082 === (3))){
var inst_34079 = (state_34081[(2)]);
var state_34081__$1 = state_34081;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34081__$1,inst_34079);
} else {
if((state_val_34082 === (2))){
var state_34081__$1 = state_34081;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34081__$1,(4),ch);
} else {
if((state_val_34082 === (11))){
var inst_34071 = (state_34081[(2)]);
var state_34081__$1 = state_34081;
var statearr_34097_35782 = state_34081__$1;
(statearr_34097_35782[(2)] = inst_34071);

(statearr_34097_35782[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34082 === (9))){
var state_34081__$1 = state_34081;
var statearr_34102_35785 = state_34081__$1;
(statearr_34102_35785[(2)] = null);

(statearr_34102_35785[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34082 === (5))){
var inst_34066 = cljs.core.async.close_BANG_(out);
var state_34081__$1 = state_34081;
var statearr_34103_35789 = state_34081__$1;
(statearr_34103_35789[(2)] = inst_34066);

(statearr_34103_35789[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34082 === (10))){
var inst_34074 = (state_34081[(2)]);
var state_34081__$1 = (function (){var statearr_34108 = state_34081;
(statearr_34108[(8)] = inst_34074);

return statearr_34108;
})();
var statearr_34109_35790 = state_34081__$1;
(statearr_34109_35790[(2)] = null);

(statearr_34109_35790[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34082 === (8))){
var inst_34063 = (state_34081[(7)]);
var state_34081__$1 = state_34081;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34081__$1,(11),out,inst_34063);
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
var cljs$core$async$state_machine__30576__auto__ = null;
var cljs$core$async$state_machine__30576__auto____0 = (function (){
var statearr_34112 = [null,null,null,null,null,null,null,null,null];
(statearr_34112[(0)] = cljs$core$async$state_machine__30576__auto__);

(statearr_34112[(1)] = (1));

return statearr_34112;
});
var cljs$core$async$state_machine__30576__auto____1 = (function (state_34081){
while(true){
var ret_value__30577__auto__ = (function (){try{while(true){
var result__30578__auto__ = switch__30575__auto__(state_34081);
if(cljs.core.keyword_identical_QMARK_(result__30578__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30578__auto__;
}
break;
}
}catch (e34113){var ex__30579__auto__ = e34113;
var statearr_34114_35799 = state_34081;
(statearr_34114_35799[(2)] = ex__30579__auto__);


if(cljs.core.seq((state_34081[(4)]))){
var statearr_34115_35800 = state_34081;
(statearr_34115_35800[(1)] = cljs.core.first((state_34081[(4)])));

} else {
throw ex__30579__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30577__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35801 = state_34081;
state_34081 = G__35801;
continue;
} else {
return ret_value__30577__auto__;
}
break;
}
});
cljs$core$async$state_machine__30576__auto__ = function(state_34081){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30576__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30576__auto____1.call(this,state_34081);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30576__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30576__auto____0;
cljs$core$async$state_machine__30576__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30576__auto____1;
return cljs$core$async$state_machine__30576__auto__;
})()
})();
var state__31220__auto__ = (function (){var statearr_34120 = f__31199__auto__();
(statearr_34120[(6)] = c__31198__auto___35769);

return statearr_34120;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31220__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__34124 = arguments.length;
switch (G__34124) {
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
var c__31198__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31199__auto__ = (function (){var switch__30575__auto__ = (function (state_34215){
var state_val_34216 = (state_34215[(1)]);
if((state_val_34216 === (7))){
var inst_34209 = (state_34215[(2)]);
var state_34215__$1 = state_34215;
var statearr_34224_35828 = state_34215__$1;
(statearr_34224_35828[(2)] = inst_34209);

(statearr_34224_35828[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34216 === (20))){
var inst_34171 = (state_34215[(7)]);
var inst_34190 = (state_34215[(2)]);
var inst_34191 = cljs.core.next(inst_34171);
var inst_34154 = inst_34191;
var inst_34155 = null;
var inst_34156 = (0);
var inst_34157 = (0);
var state_34215__$1 = (function (){var statearr_34228 = state_34215;
(statearr_34228[(8)] = inst_34190);

(statearr_34228[(9)] = inst_34154);

(statearr_34228[(10)] = inst_34155);

(statearr_34228[(11)] = inst_34156);

(statearr_34228[(12)] = inst_34157);

return statearr_34228;
})();
var statearr_34229_35829 = state_34215__$1;
(statearr_34229_35829[(2)] = null);

(statearr_34229_35829[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34216 === (1))){
var state_34215__$1 = state_34215;
var statearr_34232_35830 = state_34215__$1;
(statearr_34232_35830[(2)] = null);

(statearr_34232_35830[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34216 === (4))){
var inst_34140 = (state_34215[(13)]);
var inst_34140__$1 = (state_34215[(2)]);
var inst_34143 = (inst_34140__$1 == null);
var state_34215__$1 = (function (){var statearr_34241 = state_34215;
(statearr_34241[(13)] = inst_34140__$1);

return statearr_34241;
})();
if(cljs.core.truth_(inst_34143)){
var statearr_34244_35837 = state_34215__$1;
(statearr_34244_35837[(1)] = (5));

} else {
var statearr_34247_35838 = state_34215__$1;
(statearr_34247_35838[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34216 === (15))){
var state_34215__$1 = state_34215;
var statearr_34254_35839 = state_34215__$1;
(statearr_34254_35839[(2)] = null);

(statearr_34254_35839[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34216 === (21))){
var state_34215__$1 = state_34215;
var statearr_34266_35840 = state_34215__$1;
(statearr_34266_35840[(2)] = null);

(statearr_34266_35840[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34216 === (13))){
var inst_34157 = (state_34215[(12)]);
var inst_34154 = (state_34215[(9)]);
var inst_34155 = (state_34215[(10)]);
var inst_34156 = (state_34215[(11)]);
var inst_34167 = (state_34215[(2)]);
var inst_34168 = (inst_34157 + (1));
var tmp34249 = inst_34156;
var tmp34250 = inst_34155;
var tmp34251 = inst_34154;
var inst_34154__$1 = tmp34251;
var inst_34155__$1 = tmp34250;
var inst_34156__$1 = tmp34249;
var inst_34157__$1 = inst_34168;
var state_34215__$1 = (function (){var statearr_34269 = state_34215;
(statearr_34269[(14)] = inst_34167);

(statearr_34269[(9)] = inst_34154__$1);

(statearr_34269[(10)] = inst_34155__$1);

(statearr_34269[(11)] = inst_34156__$1);

(statearr_34269[(12)] = inst_34157__$1);

return statearr_34269;
})();
var statearr_34270_35841 = state_34215__$1;
(statearr_34270_35841[(2)] = null);

(statearr_34270_35841[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34216 === (22))){
var state_34215__$1 = state_34215;
var statearr_34271_35852 = state_34215__$1;
(statearr_34271_35852[(2)] = null);

(statearr_34271_35852[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34216 === (6))){
var inst_34140 = (state_34215[(13)]);
var inst_34152 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_34140) : f.call(null,inst_34140));
var inst_34153 = cljs.core.seq(inst_34152);
var inst_34154 = inst_34153;
var inst_34155 = null;
var inst_34156 = (0);
var inst_34157 = (0);
var state_34215__$1 = (function (){var statearr_34281 = state_34215;
(statearr_34281[(9)] = inst_34154);

(statearr_34281[(10)] = inst_34155);

(statearr_34281[(11)] = inst_34156);

(statearr_34281[(12)] = inst_34157);

return statearr_34281;
})();
var statearr_34282_35854 = state_34215__$1;
(statearr_34282_35854[(2)] = null);

(statearr_34282_35854[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34216 === (17))){
var inst_34171 = (state_34215[(7)]);
var inst_34175 = cljs.core.chunk_first(inst_34171);
var inst_34178 = cljs.core.chunk_rest(inst_34171);
var inst_34181 = cljs.core.count(inst_34175);
var inst_34154 = inst_34178;
var inst_34155 = inst_34175;
var inst_34156 = inst_34181;
var inst_34157 = (0);
var state_34215__$1 = (function (){var statearr_34287 = state_34215;
(statearr_34287[(9)] = inst_34154);

(statearr_34287[(10)] = inst_34155);

(statearr_34287[(11)] = inst_34156);

(statearr_34287[(12)] = inst_34157);

return statearr_34287;
})();
var statearr_34291_35860 = state_34215__$1;
(statearr_34291_35860[(2)] = null);

(statearr_34291_35860[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34216 === (3))){
var inst_34211 = (state_34215[(2)]);
var state_34215__$1 = state_34215;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34215__$1,inst_34211);
} else {
if((state_val_34216 === (12))){
var inst_34199 = (state_34215[(2)]);
var state_34215__$1 = state_34215;
var statearr_34300_35875 = state_34215__$1;
(statearr_34300_35875[(2)] = inst_34199);

(statearr_34300_35875[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34216 === (2))){
var state_34215__$1 = state_34215;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34215__$1,(4),in$);
} else {
if((state_val_34216 === (23))){
var inst_34207 = (state_34215[(2)]);
var state_34215__$1 = state_34215;
var statearr_34303_35889 = state_34215__$1;
(statearr_34303_35889[(2)] = inst_34207);

(statearr_34303_35889[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34216 === (19))){
var inst_34194 = (state_34215[(2)]);
var state_34215__$1 = state_34215;
var statearr_34307_35892 = state_34215__$1;
(statearr_34307_35892[(2)] = inst_34194);

(statearr_34307_35892[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34216 === (11))){
var inst_34154 = (state_34215[(9)]);
var inst_34171 = (state_34215[(7)]);
var inst_34171__$1 = cljs.core.seq(inst_34154);
var state_34215__$1 = (function (){var statearr_34308 = state_34215;
(statearr_34308[(7)] = inst_34171__$1);

return statearr_34308;
})();
if(inst_34171__$1){
var statearr_34309_35904 = state_34215__$1;
(statearr_34309_35904[(1)] = (14));

} else {
var statearr_34310_35905 = state_34215__$1;
(statearr_34310_35905[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34216 === (9))){
var inst_34201 = (state_34215[(2)]);
var inst_34202 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_34215__$1 = (function (){var statearr_34313 = state_34215;
(statearr_34313[(15)] = inst_34201);

return statearr_34313;
})();
if(cljs.core.truth_(inst_34202)){
var statearr_34314_35906 = state_34215__$1;
(statearr_34314_35906[(1)] = (21));

} else {
var statearr_34316_35907 = state_34215__$1;
(statearr_34316_35907[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34216 === (5))){
var inst_34145 = cljs.core.async.close_BANG_(out);
var state_34215__$1 = state_34215;
var statearr_34321_35916 = state_34215__$1;
(statearr_34321_35916[(2)] = inst_34145);

(statearr_34321_35916[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34216 === (14))){
var inst_34171 = (state_34215[(7)]);
var inst_34173 = cljs.core.chunked_seq_QMARK_(inst_34171);
var state_34215__$1 = state_34215;
if(inst_34173){
var statearr_34322_35928 = state_34215__$1;
(statearr_34322_35928[(1)] = (17));

} else {
var statearr_34323_35932 = state_34215__$1;
(statearr_34323_35932[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34216 === (16))){
var inst_34197 = (state_34215[(2)]);
var state_34215__$1 = state_34215;
var statearr_34324_35933 = state_34215__$1;
(statearr_34324_35933[(2)] = inst_34197);

(statearr_34324_35933[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34216 === (10))){
var inst_34155 = (state_34215[(10)]);
var inst_34157 = (state_34215[(12)]);
var inst_34165 = cljs.core._nth(inst_34155,inst_34157);
var state_34215__$1 = state_34215;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34215__$1,(13),out,inst_34165);
} else {
if((state_val_34216 === (18))){
var inst_34171 = (state_34215[(7)]);
var inst_34188 = cljs.core.first(inst_34171);
var state_34215__$1 = state_34215;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34215__$1,(20),out,inst_34188);
} else {
if((state_val_34216 === (8))){
var inst_34157 = (state_34215[(12)]);
var inst_34156 = (state_34215[(11)]);
var inst_34162 = (inst_34157 < inst_34156);
var inst_34163 = inst_34162;
var state_34215__$1 = state_34215;
if(cljs.core.truth_(inst_34163)){
var statearr_34332_35940 = state_34215__$1;
(statearr_34332_35940[(1)] = (10));

} else {
var statearr_34334_35942 = state_34215__$1;
(statearr_34334_35942[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__30576__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__30576__auto____0 = (function (){
var statearr_34340 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34340[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__30576__auto__);

(statearr_34340[(1)] = (1));

return statearr_34340;
});
var cljs$core$async$mapcat_STAR__$_state_machine__30576__auto____1 = (function (state_34215){
while(true){
var ret_value__30577__auto__ = (function (){try{while(true){
var result__30578__auto__ = switch__30575__auto__(state_34215);
if(cljs.core.keyword_identical_QMARK_(result__30578__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30578__auto__;
}
break;
}
}catch (e34341){var ex__30579__auto__ = e34341;
var statearr_34342_35954 = state_34215;
(statearr_34342_35954[(2)] = ex__30579__auto__);


if(cljs.core.seq((state_34215[(4)]))){
var statearr_34343_35957 = state_34215;
(statearr_34343_35957[(1)] = cljs.core.first((state_34215[(4)])));

} else {
throw ex__30579__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30577__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35965 = state_34215;
state_34215 = G__35965;
continue;
} else {
return ret_value__30577__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__30576__auto__ = function(state_34215){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__30576__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__30576__auto____1.call(this,state_34215);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__30576__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__30576__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__30576__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__30576__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__30576__auto__;
})()
})();
var state__31220__auto__ = (function (){var statearr_34352 = f__31199__auto__();
(statearr_34352[(6)] = c__31198__auto__);

return statearr_34352;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31220__auto__);
}));

return c__31198__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__34358 = arguments.length;
switch (G__34358) {
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
var G__34376 = arguments.length;
switch (G__34376) {
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
var G__34384 = arguments.length;
switch (G__34384) {
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
var c__31198__auto___35993 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31199__auto__ = (function (){var switch__30575__auto__ = (function (state_34426){
var state_val_34427 = (state_34426[(1)]);
if((state_val_34427 === (7))){
var inst_34419 = (state_34426[(2)]);
var state_34426__$1 = state_34426;
var statearr_34441_35995 = state_34426__$1;
(statearr_34441_35995[(2)] = inst_34419);

(statearr_34441_35995[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34427 === (1))){
var inst_34395 = null;
var state_34426__$1 = (function (){var statearr_34451 = state_34426;
(statearr_34451[(7)] = inst_34395);

return statearr_34451;
})();
var statearr_34459_35996 = state_34426__$1;
(statearr_34459_35996[(2)] = null);

(statearr_34459_35996[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34427 === (4))){
var inst_34400 = (state_34426[(8)]);
var inst_34400__$1 = (state_34426[(2)]);
var inst_34404 = (inst_34400__$1 == null);
var inst_34405 = cljs.core.not(inst_34404);
var state_34426__$1 = (function (){var statearr_34479 = state_34426;
(statearr_34479[(8)] = inst_34400__$1);

return statearr_34479;
})();
if(inst_34405){
var statearr_34480_35998 = state_34426__$1;
(statearr_34480_35998[(1)] = (5));

} else {
var statearr_34481_35999 = state_34426__$1;
(statearr_34481_35999[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34427 === (6))){
var state_34426__$1 = state_34426;
var statearr_34494_36000 = state_34426__$1;
(statearr_34494_36000[(2)] = null);

(statearr_34494_36000[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34427 === (3))){
var inst_34421 = (state_34426[(2)]);
var inst_34422 = cljs.core.async.close_BANG_(out);
var state_34426__$1 = (function (){var statearr_34498 = state_34426;
(statearr_34498[(9)] = inst_34421);

return statearr_34498;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_34426__$1,inst_34422);
} else {
if((state_val_34427 === (2))){
var state_34426__$1 = state_34426;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34426__$1,(4),ch);
} else {
if((state_val_34427 === (11))){
var inst_34400 = (state_34426[(8)]);
var inst_34413 = (state_34426[(2)]);
var inst_34395 = inst_34400;
var state_34426__$1 = (function (){var statearr_34517 = state_34426;
(statearr_34517[(10)] = inst_34413);

(statearr_34517[(7)] = inst_34395);

return statearr_34517;
})();
var statearr_34518_36004 = state_34426__$1;
(statearr_34518_36004[(2)] = null);

(statearr_34518_36004[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34427 === (9))){
var inst_34400 = (state_34426[(8)]);
var state_34426__$1 = state_34426;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34426__$1,(11),out,inst_34400);
} else {
if((state_val_34427 === (5))){
var inst_34400 = (state_34426[(8)]);
var inst_34395 = (state_34426[(7)]);
var inst_34407 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_34400,inst_34395);
var state_34426__$1 = state_34426;
if(inst_34407){
var statearr_34522_36009 = state_34426__$1;
(statearr_34522_36009[(1)] = (8));

} else {
var statearr_34523_36010 = state_34426__$1;
(statearr_34523_36010[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34427 === (10))){
var inst_34416 = (state_34426[(2)]);
var state_34426__$1 = state_34426;
var statearr_34524_36012 = state_34426__$1;
(statearr_34524_36012[(2)] = inst_34416);

(statearr_34524_36012[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34427 === (8))){
var inst_34395 = (state_34426[(7)]);
var tmp34520 = inst_34395;
var inst_34395__$1 = tmp34520;
var state_34426__$1 = (function (){var statearr_34525 = state_34426;
(statearr_34525[(7)] = inst_34395__$1);

return statearr_34525;
})();
var statearr_34526_36016 = state_34426__$1;
(statearr_34526_36016[(2)] = null);

(statearr_34526_36016[(1)] = (2));


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
var cljs$core$async$state_machine__30576__auto__ = null;
var cljs$core$async$state_machine__30576__auto____0 = (function (){
var statearr_34528 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34528[(0)] = cljs$core$async$state_machine__30576__auto__);

(statearr_34528[(1)] = (1));

return statearr_34528;
});
var cljs$core$async$state_machine__30576__auto____1 = (function (state_34426){
while(true){
var ret_value__30577__auto__ = (function (){try{while(true){
var result__30578__auto__ = switch__30575__auto__(state_34426);
if(cljs.core.keyword_identical_QMARK_(result__30578__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30578__auto__;
}
break;
}
}catch (e34534){var ex__30579__auto__ = e34534;
var statearr_34535_36020 = state_34426;
(statearr_34535_36020[(2)] = ex__30579__auto__);


if(cljs.core.seq((state_34426[(4)]))){
var statearr_34536_36021 = state_34426;
(statearr_34536_36021[(1)] = cljs.core.first((state_34426[(4)])));

} else {
throw ex__30579__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30577__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36022 = state_34426;
state_34426 = G__36022;
continue;
} else {
return ret_value__30577__auto__;
}
break;
}
});
cljs$core$async$state_machine__30576__auto__ = function(state_34426){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30576__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30576__auto____1.call(this,state_34426);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30576__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30576__auto____0;
cljs$core$async$state_machine__30576__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30576__auto____1;
return cljs$core$async$state_machine__30576__auto__;
})()
})();
var state__31220__auto__ = (function (){var statearr_34542 = f__31199__auto__();
(statearr_34542[(6)] = c__31198__auto___35993);

return statearr_34542;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31220__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__34546 = arguments.length;
switch (G__34546) {
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
var c__31198__auto___36025 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31199__auto__ = (function (){var switch__30575__auto__ = (function (state_34606){
var state_val_34607 = (state_34606[(1)]);
if((state_val_34607 === (7))){
var inst_34602 = (state_34606[(2)]);
var state_34606__$1 = state_34606;
var statearr_34610_36026 = state_34606__$1;
(statearr_34610_36026[(2)] = inst_34602);

(statearr_34610_36026[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34607 === (1))){
var inst_34560 = (new Array(n));
var inst_34562 = inst_34560;
var inst_34563 = (0);
var state_34606__$1 = (function (){var statearr_34612 = state_34606;
(statearr_34612[(7)] = inst_34562);

(statearr_34612[(8)] = inst_34563);

return statearr_34612;
})();
var statearr_34613_36027 = state_34606__$1;
(statearr_34613_36027[(2)] = null);

(statearr_34613_36027[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34607 === (4))){
var inst_34566 = (state_34606[(9)]);
var inst_34566__$1 = (state_34606[(2)]);
var inst_34567 = (inst_34566__$1 == null);
var inst_34568 = cljs.core.not(inst_34567);
var state_34606__$1 = (function (){var statearr_34618 = state_34606;
(statearr_34618[(9)] = inst_34566__$1);

return statearr_34618;
})();
if(inst_34568){
var statearr_34619_36032 = state_34606__$1;
(statearr_34619_36032[(1)] = (5));

} else {
var statearr_34620_36033 = state_34606__$1;
(statearr_34620_36033[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34607 === (15))){
var inst_34591 = (state_34606[(2)]);
var state_34606__$1 = state_34606;
var statearr_34628_36034 = state_34606__$1;
(statearr_34628_36034[(2)] = inst_34591);

(statearr_34628_36034[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34607 === (13))){
var state_34606__$1 = state_34606;
var statearr_34629_36036 = state_34606__$1;
(statearr_34629_36036[(2)] = null);

(statearr_34629_36036[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34607 === (6))){
var inst_34563 = (state_34606[(8)]);
var inst_34587 = (inst_34563 > (0));
var state_34606__$1 = state_34606;
if(cljs.core.truth_(inst_34587)){
var statearr_34633_36045 = state_34606__$1;
(statearr_34633_36045[(1)] = (12));

} else {
var statearr_34635_36047 = state_34606__$1;
(statearr_34635_36047[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34607 === (3))){
var inst_34604 = (state_34606[(2)]);
var state_34606__$1 = state_34606;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34606__$1,inst_34604);
} else {
if((state_val_34607 === (12))){
var inst_34562 = (state_34606[(7)]);
var inst_34589 = cljs.core.vec(inst_34562);
var state_34606__$1 = state_34606;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34606__$1,(15),out,inst_34589);
} else {
if((state_val_34607 === (2))){
var state_34606__$1 = state_34606;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34606__$1,(4),ch);
} else {
if((state_val_34607 === (11))){
var inst_34579 = (state_34606[(2)]);
var inst_34581 = (new Array(n));
var inst_34562 = inst_34581;
var inst_34563 = (0);
var state_34606__$1 = (function (){var statearr_34640 = state_34606;
(statearr_34640[(10)] = inst_34579);

(statearr_34640[(7)] = inst_34562);

(statearr_34640[(8)] = inst_34563);

return statearr_34640;
})();
var statearr_34642_36058 = state_34606__$1;
(statearr_34642_36058[(2)] = null);

(statearr_34642_36058[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34607 === (9))){
var inst_34562 = (state_34606[(7)]);
var inst_34576 = cljs.core.vec(inst_34562);
var state_34606__$1 = state_34606;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34606__$1,(11),out,inst_34576);
} else {
if((state_val_34607 === (5))){
var inst_34562 = (state_34606[(7)]);
var inst_34563 = (state_34606[(8)]);
var inst_34566 = (state_34606[(9)]);
var inst_34571 = (state_34606[(11)]);
var inst_34570 = (inst_34562[inst_34563] = inst_34566);
var inst_34571__$1 = (inst_34563 + (1));
var inst_34572 = (inst_34571__$1 < n);
var state_34606__$1 = (function (){var statearr_34644 = state_34606;
(statearr_34644[(12)] = inst_34570);

(statearr_34644[(11)] = inst_34571__$1);

return statearr_34644;
})();
if(cljs.core.truth_(inst_34572)){
var statearr_34645_36059 = state_34606__$1;
(statearr_34645_36059[(1)] = (8));

} else {
var statearr_34646_36060 = state_34606__$1;
(statearr_34646_36060[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34607 === (14))){
var inst_34594 = (state_34606[(2)]);
var inst_34600 = cljs.core.async.close_BANG_(out);
var state_34606__$1 = (function (){var statearr_34655 = state_34606;
(statearr_34655[(13)] = inst_34594);

return statearr_34655;
})();
var statearr_34656_36061 = state_34606__$1;
(statearr_34656_36061[(2)] = inst_34600);

(statearr_34656_36061[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34607 === (10))){
var inst_34584 = (state_34606[(2)]);
var state_34606__$1 = state_34606;
var statearr_34658_36062 = state_34606__$1;
(statearr_34658_36062[(2)] = inst_34584);

(statearr_34658_36062[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34607 === (8))){
var inst_34562 = (state_34606[(7)]);
var inst_34571 = (state_34606[(11)]);
var tmp34647 = inst_34562;
var inst_34562__$1 = tmp34647;
var inst_34563 = inst_34571;
var state_34606__$1 = (function (){var statearr_34665 = state_34606;
(statearr_34665[(7)] = inst_34562__$1);

(statearr_34665[(8)] = inst_34563);

return statearr_34665;
})();
var statearr_34666_36063 = state_34606__$1;
(statearr_34666_36063[(2)] = null);

(statearr_34666_36063[(1)] = (2));


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
var cljs$core$async$state_machine__30576__auto__ = null;
var cljs$core$async$state_machine__30576__auto____0 = (function (){
var statearr_34673 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34673[(0)] = cljs$core$async$state_machine__30576__auto__);

(statearr_34673[(1)] = (1));

return statearr_34673;
});
var cljs$core$async$state_machine__30576__auto____1 = (function (state_34606){
while(true){
var ret_value__30577__auto__ = (function (){try{while(true){
var result__30578__auto__ = switch__30575__auto__(state_34606);
if(cljs.core.keyword_identical_QMARK_(result__30578__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30578__auto__;
}
break;
}
}catch (e34674){var ex__30579__auto__ = e34674;
var statearr_34676_36068 = state_34606;
(statearr_34676_36068[(2)] = ex__30579__auto__);


if(cljs.core.seq((state_34606[(4)]))){
var statearr_34677_36069 = state_34606;
(statearr_34677_36069[(1)] = cljs.core.first((state_34606[(4)])));

} else {
throw ex__30579__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30577__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36070 = state_34606;
state_34606 = G__36070;
continue;
} else {
return ret_value__30577__auto__;
}
break;
}
});
cljs$core$async$state_machine__30576__auto__ = function(state_34606){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30576__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30576__auto____1.call(this,state_34606);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30576__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30576__auto____0;
cljs$core$async$state_machine__30576__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30576__auto____1;
return cljs$core$async$state_machine__30576__auto__;
})()
})();
var state__31220__auto__ = (function (){var statearr_34678 = f__31199__auto__();
(statearr_34678[(6)] = c__31198__auto___36025);

return statearr_34678;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31220__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__34685 = arguments.length;
switch (G__34685) {
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
var c__31198__auto___36072 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31199__auto__ = (function (){var switch__30575__auto__ = (function (state_34733){
var state_val_34734 = (state_34733[(1)]);
if((state_val_34734 === (7))){
var inst_34728 = (state_34733[(2)]);
var state_34733__$1 = state_34733;
var statearr_34736_36078 = state_34733__$1;
(statearr_34736_36078[(2)] = inst_34728);

(statearr_34736_36078[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34734 === (1))){
var inst_34688 = [];
var inst_34689 = inst_34688;
var inst_34690 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_34733__$1 = (function (){var statearr_34739 = state_34733;
(statearr_34739[(7)] = inst_34689);

(statearr_34739[(8)] = inst_34690);

return statearr_34739;
})();
var statearr_34740_36079 = state_34733__$1;
(statearr_34740_36079[(2)] = null);

(statearr_34740_36079[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34734 === (4))){
var inst_34693 = (state_34733[(9)]);
var inst_34693__$1 = (state_34733[(2)]);
var inst_34694 = (inst_34693__$1 == null);
var inst_34695 = cljs.core.not(inst_34694);
var state_34733__$1 = (function (){var statearr_34741 = state_34733;
(statearr_34741[(9)] = inst_34693__$1);

return statearr_34741;
})();
if(inst_34695){
var statearr_34742_36080 = state_34733__$1;
(statearr_34742_36080[(1)] = (5));

} else {
var statearr_34743_36084 = state_34733__$1;
(statearr_34743_36084[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34734 === (15))){
var inst_34689 = (state_34733[(7)]);
var inst_34720 = cljs.core.vec(inst_34689);
var state_34733__$1 = state_34733;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34733__$1,(18),out,inst_34720);
} else {
if((state_val_34734 === (13))){
var inst_34715 = (state_34733[(2)]);
var state_34733__$1 = state_34733;
var statearr_34754_36086 = state_34733__$1;
(statearr_34754_36086[(2)] = inst_34715);

(statearr_34754_36086[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34734 === (6))){
var inst_34689 = (state_34733[(7)]);
var inst_34717 = inst_34689.length;
var inst_34718 = (inst_34717 > (0));
var state_34733__$1 = state_34733;
if(cljs.core.truth_(inst_34718)){
var statearr_34755_36091 = state_34733__$1;
(statearr_34755_36091[(1)] = (15));

} else {
var statearr_34756_36092 = state_34733__$1;
(statearr_34756_36092[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34734 === (17))){
var inst_34725 = (state_34733[(2)]);
var inst_34726 = cljs.core.async.close_BANG_(out);
var state_34733__$1 = (function (){var statearr_34759 = state_34733;
(statearr_34759[(10)] = inst_34725);

return statearr_34759;
})();
var statearr_34760_36093 = state_34733__$1;
(statearr_34760_36093[(2)] = inst_34726);

(statearr_34760_36093[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34734 === (3))){
var inst_34730 = (state_34733[(2)]);
var state_34733__$1 = state_34733;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34733__$1,inst_34730);
} else {
if((state_val_34734 === (12))){
var inst_34689 = (state_34733[(7)]);
var inst_34708 = cljs.core.vec(inst_34689);
var state_34733__$1 = state_34733;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34733__$1,(14),out,inst_34708);
} else {
if((state_val_34734 === (2))){
var state_34733__$1 = state_34733;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34733__$1,(4),ch);
} else {
if((state_val_34734 === (11))){
var inst_34689 = (state_34733[(7)]);
var inst_34693 = (state_34733[(9)]);
var inst_34697 = (state_34733[(11)]);
var inst_34705 = inst_34689.push(inst_34693);
var tmp34762 = inst_34689;
var inst_34689__$1 = tmp34762;
var inst_34690 = inst_34697;
var state_34733__$1 = (function (){var statearr_34767 = state_34733;
(statearr_34767[(12)] = inst_34705);

(statearr_34767[(7)] = inst_34689__$1);

(statearr_34767[(8)] = inst_34690);

return statearr_34767;
})();
var statearr_34768_36095 = state_34733__$1;
(statearr_34768_36095[(2)] = null);

(statearr_34768_36095[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34734 === (9))){
var inst_34690 = (state_34733[(8)]);
var inst_34701 = cljs.core.keyword_identical_QMARK_(inst_34690,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_34733__$1 = state_34733;
var statearr_34771_36096 = state_34733__$1;
(statearr_34771_36096[(2)] = inst_34701);

(statearr_34771_36096[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34734 === (5))){
var inst_34693 = (state_34733[(9)]);
var inst_34697 = (state_34733[(11)]);
var inst_34690 = (state_34733[(8)]);
var inst_34698 = (state_34733[(13)]);
var inst_34697__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_34693) : f.call(null,inst_34693));
var inst_34698__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_34697__$1,inst_34690);
var state_34733__$1 = (function (){var statearr_34773 = state_34733;
(statearr_34773[(11)] = inst_34697__$1);

(statearr_34773[(13)] = inst_34698__$1);

return statearr_34773;
})();
if(inst_34698__$1){
var statearr_34774_36097 = state_34733__$1;
(statearr_34774_36097[(1)] = (8));

} else {
var statearr_34775_36098 = state_34733__$1;
(statearr_34775_36098[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34734 === (14))){
var inst_34693 = (state_34733[(9)]);
var inst_34697 = (state_34733[(11)]);
var inst_34710 = (state_34733[(2)]);
var inst_34711 = [];
var inst_34712 = inst_34711.push(inst_34693);
var inst_34689 = inst_34711;
var inst_34690 = inst_34697;
var state_34733__$1 = (function (){var statearr_34781 = state_34733;
(statearr_34781[(14)] = inst_34710);

(statearr_34781[(15)] = inst_34712);

(statearr_34781[(7)] = inst_34689);

(statearr_34781[(8)] = inst_34690);

return statearr_34781;
})();
var statearr_34783_36101 = state_34733__$1;
(statearr_34783_36101[(2)] = null);

(statearr_34783_36101[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34734 === (16))){
var state_34733__$1 = state_34733;
var statearr_34784_36102 = state_34733__$1;
(statearr_34784_36102[(2)] = null);

(statearr_34784_36102[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34734 === (10))){
var inst_34703 = (state_34733[(2)]);
var state_34733__$1 = state_34733;
if(cljs.core.truth_(inst_34703)){
var statearr_34789_36103 = state_34733__$1;
(statearr_34789_36103[(1)] = (11));

} else {
var statearr_34790_36104 = state_34733__$1;
(statearr_34790_36104[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34734 === (18))){
var inst_34722 = (state_34733[(2)]);
var state_34733__$1 = state_34733;
var statearr_34791_36107 = state_34733__$1;
(statearr_34791_36107[(2)] = inst_34722);

(statearr_34791_36107[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34734 === (8))){
var inst_34698 = (state_34733[(13)]);
var state_34733__$1 = state_34733;
var statearr_34800_36109 = state_34733__$1;
(statearr_34800_36109[(2)] = inst_34698);

(statearr_34800_36109[(1)] = (10));


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
var cljs$core$async$state_machine__30576__auto__ = null;
var cljs$core$async$state_machine__30576__auto____0 = (function (){
var statearr_34805 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34805[(0)] = cljs$core$async$state_machine__30576__auto__);

(statearr_34805[(1)] = (1));

return statearr_34805;
});
var cljs$core$async$state_machine__30576__auto____1 = (function (state_34733){
while(true){
var ret_value__30577__auto__ = (function (){try{while(true){
var result__30578__auto__ = switch__30575__auto__(state_34733);
if(cljs.core.keyword_identical_QMARK_(result__30578__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30578__auto__;
}
break;
}
}catch (e34809){var ex__30579__auto__ = e34809;
var statearr_34813_36110 = state_34733;
(statearr_34813_36110[(2)] = ex__30579__auto__);


if(cljs.core.seq((state_34733[(4)]))){
var statearr_34814_36111 = state_34733;
(statearr_34814_36111[(1)] = cljs.core.first((state_34733[(4)])));

} else {
throw ex__30579__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30577__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36112 = state_34733;
state_34733 = G__36112;
continue;
} else {
return ret_value__30577__auto__;
}
break;
}
});
cljs$core$async$state_machine__30576__auto__ = function(state_34733){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30576__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30576__auto____1.call(this,state_34733);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30576__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30576__auto____0;
cljs$core$async$state_machine__30576__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30576__auto____1;
return cljs$core$async$state_machine__30576__auto__;
})()
})();
var state__31220__auto__ = (function (){var statearr_34815 = f__31199__auto__();
(statearr_34815[(6)] = c__31198__auto___36072);

return statearr_34815;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31220__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
