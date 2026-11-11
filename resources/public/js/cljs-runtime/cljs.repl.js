goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__35199){
var map__35201 = p__35199;
var map__35201__$1 = cljs.core.__destructure_map(map__35201);
var m = map__35201__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35201__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35201__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__35248_35852 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__35249_35853 = null;
var count__35250_35854 = (0);
var i__35251_35855 = (0);
while(true){
if((i__35251_35855 < count__35250_35854)){
var f_35857 = chunk__35249_35853.cljs$core$IIndexed$_nth$arity$2(null,i__35251_35855);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_35857], 0));


var G__35858 = seq__35248_35852;
var G__35859 = chunk__35249_35853;
var G__35860 = count__35250_35854;
var G__35861 = (i__35251_35855 + (1));
seq__35248_35852 = G__35858;
chunk__35249_35853 = G__35859;
count__35250_35854 = G__35860;
i__35251_35855 = G__35861;
continue;
} else {
var temp__5804__auto___35862 = cljs.core.seq(seq__35248_35852);
if(temp__5804__auto___35862){
var seq__35248_35864__$1 = temp__5804__auto___35862;
if(cljs.core.chunked_seq_QMARK_(seq__35248_35864__$1)){
var c__5525__auto___35866 = cljs.core.chunk_first(seq__35248_35864__$1);
var G__35871 = cljs.core.chunk_rest(seq__35248_35864__$1);
var G__35872 = c__5525__auto___35866;
var G__35873 = cljs.core.count(c__5525__auto___35866);
var G__35874 = (0);
seq__35248_35852 = G__35871;
chunk__35249_35853 = G__35872;
count__35250_35854 = G__35873;
i__35251_35855 = G__35874;
continue;
} else {
var f_35875 = cljs.core.first(seq__35248_35864__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_35875], 0));


var G__35876 = cljs.core.next(seq__35248_35864__$1);
var G__35877 = null;
var G__35878 = (0);
var G__35879 = (0);
seq__35248_35852 = G__35876;
chunk__35249_35853 = G__35877;
count__35250_35854 = G__35878;
i__35251_35855 = G__35879;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_35880 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5002__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_35880], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_35880)))?cljs.core.second(arglists_35880):arglists_35880)], 0));
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
var seq__35317_35885 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__35318_35886 = null;
var count__35319_35887 = (0);
var i__35320_35888 = (0);
while(true){
if((i__35320_35888 < count__35319_35887)){
var vec__35340_35891 = chunk__35318_35886.cljs$core$IIndexed$_nth$arity$2(null,i__35320_35888);
var name_35892 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35340_35891,(0),null);
var map__35343_35893 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35340_35891,(1),null);
var map__35343_35894__$1 = cljs.core.__destructure_map(map__35343_35893);
var doc_35895 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35343_35894__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_35896 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35343_35894__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_35892], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_35896], 0));

if(cljs.core.truth_(doc_35895)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_35895], 0));
} else {
}


var G__35898 = seq__35317_35885;
var G__35899 = chunk__35318_35886;
var G__35900 = count__35319_35887;
var G__35901 = (i__35320_35888 + (1));
seq__35317_35885 = G__35898;
chunk__35318_35886 = G__35899;
count__35319_35887 = G__35900;
i__35320_35888 = G__35901;
continue;
} else {
var temp__5804__auto___35902 = cljs.core.seq(seq__35317_35885);
if(temp__5804__auto___35902){
var seq__35317_35903__$1 = temp__5804__auto___35902;
if(cljs.core.chunked_seq_QMARK_(seq__35317_35903__$1)){
var c__5525__auto___35905 = cljs.core.chunk_first(seq__35317_35903__$1);
var G__35906 = cljs.core.chunk_rest(seq__35317_35903__$1);
var G__35907 = c__5525__auto___35905;
var G__35908 = cljs.core.count(c__5525__auto___35905);
var G__35909 = (0);
seq__35317_35885 = G__35906;
chunk__35318_35886 = G__35907;
count__35319_35887 = G__35908;
i__35320_35888 = G__35909;
continue;
} else {
var vec__35352_35910 = cljs.core.first(seq__35317_35903__$1);
var name_35911 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35352_35910,(0),null);
var map__35355_35912 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35352_35910,(1),null);
var map__35355_35913__$1 = cljs.core.__destructure_map(map__35355_35912);
var doc_35914 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35355_35913__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_35915 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35355_35913__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_35911], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_35915], 0));

if(cljs.core.truth_(doc_35914)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_35914], 0));
} else {
}


var G__35942 = cljs.core.next(seq__35317_35903__$1);
var G__35943 = null;
var G__35944 = (0);
var G__35945 = (0);
seq__35317_35885 = G__35942;
chunk__35318_35886 = G__35943;
count__35319_35887 = G__35944;
i__35320_35888 = G__35945;
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

var seq__35359 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__35360 = null;
var count__35361 = (0);
var i__35362 = (0);
while(true){
if((i__35362 < count__35361)){
var role = chunk__35360.cljs$core$IIndexed$_nth$arity$2(null,i__35362);
var temp__5804__auto___35948__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___35948__$1)){
var spec_35949 = temp__5804__auto___35948__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_35949)], 0));
} else {
}


var G__35951 = seq__35359;
var G__35952 = chunk__35360;
var G__35953 = count__35361;
var G__35954 = (i__35362 + (1));
seq__35359 = G__35951;
chunk__35360 = G__35952;
count__35361 = G__35953;
i__35362 = G__35954;
continue;
} else {
var temp__5804__auto____$1 = cljs.core.seq(seq__35359);
if(temp__5804__auto____$1){
var seq__35359__$1 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__35359__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__35359__$1);
var G__35956 = cljs.core.chunk_rest(seq__35359__$1);
var G__35957 = c__5525__auto__;
var G__35958 = cljs.core.count(c__5525__auto__);
var G__35959 = (0);
seq__35359 = G__35956;
chunk__35360 = G__35957;
count__35361 = G__35958;
i__35362 = G__35959;
continue;
} else {
var role = cljs.core.first(seq__35359__$1);
var temp__5804__auto___35961__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___35961__$2)){
var spec_35962 = temp__5804__auto___35961__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_35962)], 0));
} else {
}


var G__35963 = cljs.core.next(seq__35359__$1);
var G__35964 = null;
var G__35965 = (0);
var G__35966 = (0);
seq__35359 = G__35963;
chunk__35360 = G__35964;
count__35361 = G__35965;
i__35362 = G__35966;
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
var map__35521 = datafied_throwable;
var map__35521__$1 = cljs.core.__destructure_map(map__35521);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35521__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35521__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__35521__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__35522 = cljs.core.last(via);
var map__35522__$1 = cljs.core.__destructure_map(map__35522);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35522__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35522__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35522__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__35523 = data;
var map__35523__$1 = cljs.core.__destructure_map(map__35523);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35523__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35523__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35523__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__35524 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__35524__$1 = cljs.core.__destructure_map(map__35524);
var top_data = map__35524__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35524__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__35532 = phase;
var G__35532__$1 = (((G__35532 instanceof cljs.core.Keyword))?G__35532.fqn:null);
switch (G__35532__$1) {
case "read-source":
var map__35535 = data;
var map__35535__$1 = cljs.core.__destructure_map(map__35535);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35535__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35535__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__35537 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__35537__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35537,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__35537);
var G__35537__$2 = (cljs.core.truth_((function (){var fexpr__35543 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__35543.cljs$core$IFn$_invoke$arity$1 ? fexpr__35543.cljs$core$IFn$_invoke$arity$1(source) : fexpr__35543.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__35537__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__35537__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35537__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__35537__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__35546 = top_data;
var G__35546__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35546,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__35546);
var G__35546__$2 = (cljs.core.truth_((function (){var fexpr__35549 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__35549.cljs$core$IFn$_invoke$arity$1 ? fexpr__35549.cljs$core$IFn$_invoke$arity$1(source) : fexpr__35549.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__35546__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__35546__$1);
var G__35546__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35546__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__35546__$2);
var G__35546__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35546__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__35546__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35546__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__35546__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__35630 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35630,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35630,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35630,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35630,(3),null);
var G__35633 = top_data;
var G__35633__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35633,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__35633);
var G__35633__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35633__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__35633__$1);
var G__35633__$3 = (cljs.core.truth_((function (){var and__5000__auto__ = source__$1;
if(cljs.core.truth_(and__5000__auto__)){
return method;
} else {
return and__5000__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35633__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__35633__$2);
var G__35633__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35633__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__35633__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35633__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__35633__$4;
}

break;
case "execution":
var vec__35647 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35647,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35647,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35647,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35647,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__35513_SHARP_){
var or__5002__auto__ = (p1__35513_SHARP_ == null);
if(or__5002__auto__){
return or__5002__auto__;
} else {
var fexpr__35657 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__35657.cljs$core$IFn$_invoke$arity$1 ? fexpr__35657.cljs$core$IFn$_invoke$arity$1(p1__35513_SHARP_) : fexpr__35657.call(null,p1__35513_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5002__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return line;
}
})();
var G__35660 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__35660__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35660,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__35660);
var G__35660__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35660__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__35660__$1);
var G__35660__$3 = (cljs.core.truth_((function (){var or__5002__auto__ = fn;
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
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35660__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__5002__auto__ = fn;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__35660__$2);
var G__35660__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35660__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__35660__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35660__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__35660__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__35532__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__35700){
var map__35701 = p__35700;
var map__35701__$1 = cljs.core.__destructure_map(map__35701);
var triage_data = map__35701__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35701__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35701__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35701__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35701__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35701__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35701__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35701__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35701__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
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
var G__35716 = phase;
var G__35716__$1 = (((G__35716 instanceof cljs.core.Keyword))?G__35716.fqn:null);
switch (G__35716__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__35720 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__35721 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__35722 = loc;
var G__35723 = (cljs.core.truth_(spec)?(function (){var sb__5647__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__35729_36013 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__35730_36014 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__35731_36015 = true;
var _STAR_print_fn_STAR__temp_val__35732_36016 = (function (x__5648__auto__){
return sb__5647__auto__.append(x__5648__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__35731_36015);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__35732_36016);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__35695_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__35695_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__35730_36014);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__35729_36013);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5647__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__35720,G__35721,G__35722,G__35723) : format.call(null,G__35720,G__35721,G__35722,G__35723));

break;
case "macroexpansion":
var G__35770 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__35771 = cause_type;
var G__35772 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__35773 = loc;
var G__35774 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__35770,G__35771,G__35772,G__35773,G__35774) : format.call(null,G__35770,G__35771,G__35772,G__35773,G__35774));

break;
case "compile-syntax-check":
var G__35775 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__35776 = cause_type;
var G__35777 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__35778 = loc;
var G__35779 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__35775,G__35776,G__35777,G__35778,G__35779) : format.call(null,G__35775,G__35776,G__35777,G__35778,G__35779));

break;
case "compilation":
var G__35781 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__35782 = cause_type;
var G__35783 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__35784 = loc;
var G__35785 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__35781,G__35782,G__35783,G__35784,G__35785) : format.call(null,G__35781,G__35782,G__35783,G__35784,G__35785));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__35788 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__35789 = symbol;
var G__35790 = loc;
var G__35791 = (function (){var sb__5647__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__35793_36028 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__35794_36029 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__35795_36030 = true;
var _STAR_print_fn_STAR__temp_val__35796_36031 = (function (x__5648__auto__){
return sb__5647__auto__.append(x__5648__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__35795_36030);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__35796_36031);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__35697_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__35697_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__35794_36029);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__35793_36028);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5647__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__35788,G__35789,G__35790,G__35791) : format.call(null,G__35788,G__35789,G__35790,G__35791));
} else {
var G__35805 = "Execution error%s at %s(%s).\n%s\n";
var G__35806 = cause_type;
var G__35807 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__35808 = loc;
var G__35809 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__35805,G__35806,G__35807,G__35808,G__35809) : format.call(null,G__35805,G__35806,G__35807,G__35808,G__35809));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__35716__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
