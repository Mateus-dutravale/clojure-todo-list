goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__35301){
var map__35304 = p__35301;
var map__35304__$1 = cljs.core.__destructure_map(map__35304);
var m = map__35304__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35304__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35304__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__5002__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return [(function (){var temp__5804__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__35353_35861 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__35354_35862 = null;
var count__35355_35863 = (0);
var i__35356_35864 = (0);
while(true){
if((i__35356_35864 < count__35355_35863)){
var f_35867 = chunk__35354_35862.cljs$core$IIndexed$_nth$arity$2(null,i__35356_35864);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_35867], 0));


var G__35868 = seq__35353_35861;
var G__35869 = chunk__35354_35862;
var G__35870 = count__35355_35863;
var G__35871 = (i__35356_35864 + (1));
seq__35353_35861 = G__35868;
chunk__35354_35862 = G__35869;
count__35355_35863 = G__35870;
i__35356_35864 = G__35871;
continue;
} else {
var temp__5804__auto___35872 = cljs.core.seq(seq__35353_35861);
if(temp__5804__auto___35872){
var seq__35353_35873__$1 = temp__5804__auto___35872;
if(cljs.core.chunked_seq_QMARK_(seq__35353_35873__$1)){
var c__5525__auto___35874 = cljs.core.chunk_first(seq__35353_35873__$1);
var G__35876 = cljs.core.chunk_rest(seq__35353_35873__$1);
var G__35877 = c__5525__auto___35874;
var G__35878 = cljs.core.count(c__5525__auto___35874);
var G__35879 = (0);
seq__35353_35861 = G__35876;
chunk__35354_35862 = G__35877;
count__35355_35863 = G__35878;
i__35356_35864 = G__35879;
continue;
} else {
var f_35881 = cljs.core.first(seq__35353_35873__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_35881], 0));


var G__35882 = cljs.core.next(seq__35353_35873__$1);
var G__35883 = null;
var G__35884 = (0);
var G__35885 = (0);
seq__35353_35861 = G__35882;
chunk__35354_35862 = G__35883;
count__35355_35863 = G__35884;
i__35356_35864 = G__35885;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_35888 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5002__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_35888], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_35888)))?cljs.core.second(arglists_35888):arglists_35888)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__35387_35894 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__35388_35895 = null;
var count__35389_35896 = (0);
var i__35390_35897 = (0);
while(true){
if((i__35390_35897 < count__35389_35896)){
var vec__35451_35898 = chunk__35388_35895.cljs$core$IIndexed$_nth$arity$2(null,i__35390_35897);
var name_35899 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35451_35898,(0),null);
var map__35454_35900 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35451_35898,(1),null);
var map__35454_35901__$1 = cljs.core.__destructure_map(map__35454_35900);
var doc_35902 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35454_35901__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_35903 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35454_35901__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_35899], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_35903], 0));

if(cljs.core.truth_(doc_35902)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_35902], 0));
} else {
}


var G__35908 = seq__35387_35894;
var G__35909 = chunk__35388_35895;
var G__35910 = count__35389_35896;
var G__35911 = (i__35390_35897 + (1));
seq__35387_35894 = G__35908;
chunk__35388_35895 = G__35909;
count__35389_35896 = G__35910;
i__35390_35897 = G__35911;
continue;
} else {
var temp__5804__auto___35912 = cljs.core.seq(seq__35387_35894);
if(temp__5804__auto___35912){
var seq__35387_35915__$1 = temp__5804__auto___35912;
if(cljs.core.chunked_seq_QMARK_(seq__35387_35915__$1)){
var c__5525__auto___35917 = cljs.core.chunk_first(seq__35387_35915__$1);
var G__35918 = cljs.core.chunk_rest(seq__35387_35915__$1);
var G__35919 = c__5525__auto___35917;
var G__35920 = cljs.core.count(c__5525__auto___35917);
var G__35921 = (0);
seq__35387_35894 = G__35918;
chunk__35388_35895 = G__35919;
count__35389_35896 = G__35920;
i__35390_35897 = G__35921;
continue;
} else {
var vec__35532_35922 = cljs.core.first(seq__35387_35915__$1);
var name_35923 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35532_35922,(0),null);
var map__35535_35924 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35532_35922,(1),null);
var map__35535_35925__$1 = cljs.core.__destructure_map(map__35535_35924);
var doc_35926 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35535_35925__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_35927 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35535_35925__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_35923], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_35927], 0));

if(cljs.core.truth_(doc_35926)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_35926], 0));
} else {
}


var G__35934 = cljs.core.next(seq__35387_35915__$1);
var G__35935 = null;
var G__35936 = (0);
var G__35937 = (0);
seq__35387_35894 = G__35934;
chunk__35388_35895 = G__35935;
count__35389_35896 = G__35936;
i__35390_35897 = G__35937;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5804__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5804__auto__)){
var fnspec = temp__5804__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__35563 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__35564 = null;
var count__35565 = (0);
var i__35566 = (0);
while(true){
if((i__35566 < count__35565)){
var role = chunk__35564.cljs$core$IIndexed$_nth$arity$2(null,i__35566);
var temp__5804__auto___35941__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___35941__$1)){
var spec_35945 = temp__5804__auto___35941__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_35945)], 0));
} else {
}


var G__35946 = seq__35563;
var G__35947 = chunk__35564;
var G__35948 = count__35565;
var G__35949 = (i__35566 + (1));
seq__35563 = G__35946;
chunk__35564 = G__35947;
count__35565 = G__35948;
i__35566 = G__35949;
continue;
} else {
var temp__5804__auto____$1 = cljs.core.seq(seq__35563);
if(temp__5804__auto____$1){
var seq__35563__$1 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__35563__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__35563__$1);
var G__35950 = cljs.core.chunk_rest(seq__35563__$1);
var G__35951 = c__5525__auto__;
var G__35952 = cljs.core.count(c__5525__auto__);
var G__35953 = (0);
seq__35563 = G__35950;
chunk__35564 = G__35951;
count__35565 = G__35952;
i__35566 = G__35953;
continue;
} else {
var role = cljs.core.first(seq__35563__$1);
var temp__5804__auto___35955__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___35955__$2)){
var spec_35956 = temp__5804__auto___35955__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_35956)], 0));
} else {
}


var G__35961 = cljs.core.next(seq__35563__$1);
var G__35962 = null;
var G__35963 = (0);
var G__35964 = (0);
seq__35563 = G__35961;
chunk__35564 = G__35962;
count__35565 = G__35963;
i__35566 = G__35964;
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
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
return cljs.core.Throwable__GT_map(o);
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__35642 = datafied_throwable;
var map__35642__$1 = cljs.core.__destructure_map(map__35642);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35642__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35642__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__35642__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__35643 = cljs.core.last(via);
var map__35643__$1 = cljs.core.__destructure_map(map__35643);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35643__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35643__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35643__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__35644 = data;
var map__35644__$1 = cljs.core.__destructure_map(map__35644);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35644__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35644__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35644__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__35645 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__35645__$1 = cljs.core.__destructure_map(map__35645);
var top_data = map__35645__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35645__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__35680 = phase;
var G__35680__$1 = (((G__35680 instanceof cljs.core.Keyword))?G__35680.fqn:null);
switch (G__35680__$1) {
case "read-source":
var map__35687 = data;
var map__35687__$1 = cljs.core.__destructure_map(map__35687);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35687__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35687__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__35690 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__35690__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35690,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__35690);
var G__35690__$2 = (cljs.core.truth_((function (){var fexpr__35711 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__35711.cljs$core$IFn$_invoke$arity$1 ? fexpr__35711.cljs$core$IFn$_invoke$arity$1(source) : fexpr__35711.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__35690__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__35690__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35690__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__35690__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__35716 = top_data;
var G__35716__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35716,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__35716);
var G__35716__$2 = (cljs.core.truth_((function (){var fexpr__35722 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__35722.cljs$core$IFn$_invoke$arity$1 ? fexpr__35722.cljs$core$IFn$_invoke$arity$1(source) : fexpr__35722.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__35716__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__35716__$1);
var G__35716__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35716__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__35716__$2);
var G__35716__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35716__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__35716__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35716__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__35716__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__35727 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35727,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35727,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35727,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35727,(3),null);
var G__35736 = top_data;
var G__35736__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35736,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__35736);
var G__35736__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35736__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__35736__$1);
var G__35736__$3 = (cljs.core.truth_((function (){var and__5000__auto__ = source__$1;
if(cljs.core.truth_(and__5000__auto__)){
return method;
} else {
return and__5000__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35736__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__35736__$2);
var G__35736__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35736__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__35736__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35736__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__35736__$4;
}

break;
case "execution":
var vec__35741 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35741,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35741,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35741,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35741,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__35629_SHARP_){
var or__5002__auto__ = (p1__35629_SHARP_ == null);
if(or__5002__auto__){
return or__5002__auto__;
} else {
var fexpr__35744 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__35744.cljs$core$IFn$_invoke$arity$1 ? fexpr__35744.cljs$core$IFn$_invoke$arity$1(p1__35629_SHARP_) : fexpr__35744.call(null,p1__35629_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5002__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return line;
}
})();
var G__35758 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__35758__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35758,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__35758);
var G__35758__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35758__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__35758__$1);
var G__35758__$3 = (cljs.core.truth_((function (){var or__5002__auto__ = fn;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
var and__5000__auto__ = source__$1;
if(cljs.core.truth_(and__5000__auto__)){
return method;
} else {
return and__5000__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35758__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__5002__auto__ = fn;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__35758__$2);
var G__35758__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35758__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__35758__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35758__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__35758__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__35680__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__35770){
var map__35771 = p__35770;
var map__35771__$1 = cljs.core.__destructure_map(map__35771);
var triage_data = map__35771__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35771__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35771__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35771__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35771__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35771__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35771__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35771__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35771__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5002__auto__ = source;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5002__auto__ = line;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__5002__auto__ = class$;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__35788 = phase;
var G__35788__$1 = (((G__35788 instanceof cljs.core.Keyword))?G__35788.fqn:null);
switch (G__35788__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__35791 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__35792 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__35793 = loc;
var G__35794 = (cljs.core.truth_(spec)?(function (){var sb__5647__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__35795_36051 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__35796_36052 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__35797_36053 = true;
var _STAR_print_fn_STAR__temp_val__35798_36054 = (function (x__5648__auto__){
return sb__5647__auto__.append(x__5648__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__35797_36053);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__35798_36054);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__35767_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__35767_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__35796_36052);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__35795_36051);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5647__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__35791,G__35792,G__35793,G__35794) : format.call(null,G__35791,G__35792,G__35793,G__35794));

break;
case "macroexpansion":
var G__35803 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__35804 = cause_type;
var G__35805 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__35806 = loc;
var G__35807 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__35803,G__35804,G__35805,G__35806,G__35807) : format.call(null,G__35803,G__35804,G__35805,G__35806,G__35807));

break;
case "compile-syntax-check":
var G__35808 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__35809 = cause_type;
var G__35810 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__35811 = loc;
var G__35812 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__35808,G__35809,G__35810,G__35811,G__35812) : format.call(null,G__35808,G__35809,G__35810,G__35811,G__35812));

break;
case "compilation":
var G__35815 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__35816 = cause_type;
var G__35817 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__35818 = loc;
var G__35819 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__35815,G__35816,G__35817,G__35818,G__35819) : format.call(null,G__35815,G__35816,G__35817,G__35818,G__35819));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__35820 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__35821 = symbol;
var G__35822 = loc;
var G__35823 = (function (){var sb__5647__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__35824_36064 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__35825_36065 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__35826_36066 = true;
var _STAR_print_fn_STAR__temp_val__35827_36067 = (function (x__5648__auto__){
return sb__5647__auto__.append(x__5648__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__35826_36066);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__35827_36067);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__35768_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__35768_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__35825_36065);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__35824_36064);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5647__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__35820,G__35821,G__35822,G__35823) : format.call(null,G__35820,G__35821,G__35822,G__35823));
} else {
var G__35832 = "Execution error%s at %s(%s).\n%s\n";
var G__35833 = cause_type;
var G__35834 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__35835 = loc;
var G__35836 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__35832,G__35833,G__35834,G__35835,G__35836) : format.call(null,G__35832,G__35833,G__35834,G__35835,G__35836));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__35788__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
