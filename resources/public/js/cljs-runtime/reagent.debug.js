goog.provide('reagent.debug');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__37432__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__37432 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__37433__i = 0, G__37433__a = new Array(arguments.length -  0);
while (G__37433__i < G__37433__a.length) {G__37433__a[G__37433__i] = arguments[G__37433__i + 0]; ++G__37433__i;}
  args = new cljs.core.IndexedSeq(G__37433__a,0,null);
} 
return G__37432__delegate.call(this,args);};
G__37432.cljs$lang$maxFixedArity = 0;
G__37432.cljs$lang$applyTo = (function (arglist__37435){
var args = cljs.core.seq(arglist__37435);
return G__37432__delegate(args);
});
G__37432.cljs$core$IFn$_invoke$arity$variadic = G__37432__delegate;
return G__37432;
})()
);

(o.error = (function() { 
var G__37436__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__37436 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__37437__i = 0, G__37437__a = new Array(arguments.length -  0);
while (G__37437__i < G__37437__a.length) {G__37437__a[G__37437__i] = arguments[G__37437__i + 0]; ++G__37437__i;}
  args = new cljs.core.IndexedSeq(G__37437__a,0,null);
} 
return G__37436__delegate.call(this,args);};
G__37436.cljs$lang$maxFixedArity = 0;
G__37436.cljs$lang$applyTo = (function (arglist__37438){
var args = cljs.core.seq(arglist__37438);
return G__37436__delegate(args);
});
G__37436.cljs$core$IFn$_invoke$arity$variadic = G__37436__delegate;
return G__37436;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});

//# sourceMappingURL=reagent.debug.js.map
