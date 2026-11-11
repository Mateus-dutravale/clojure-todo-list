goog.provide('todo.frontend.core');
if((typeof todo !== 'undefined') && (typeof todo.frontend !== 'undefined') && (typeof todo.frontend.core !== 'undefined') && (typeof todo.frontend.core.app_state !== 'undefined')){
} else {
todo.frontend.core.app_state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"next-id","next-id",-224240762),(1),new cljs.core.Keyword(null,"input-text","input-text",-1336297114),"",new cljs.core.Keyword(null,"todos","todos",630308868),cljs.core.PersistentVector.EMPTY], null));
}
todo.frontend.core.adicionar_todo_local = (function todo$frontend$core$adicionar_todo_local(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(todo.frontend.core.app_state,(function (estado_atual){
var novo_titulo = new cljs.core.Keyword(null,"input-text","input-text",-1336297114).cljs$core$IFn$_invoke$arity$1(estado_atual);
var novo_id = new cljs.core.Keyword(null,"next-id","next-id",-224240762).cljs$core$IFn$_invoke$arity$1(estado_atual);
if(clojure.string.blank_QMARK_(novo_titulo)){
return estado_atual;
} else {
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"next-id","next-id",-224240762),(novo_id + (1)),new cljs.core.Keyword(null,"input-text","input-text",-1336297114),"",new cljs.core.Keyword(null,"todos","todos",630308868),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"todos","todos",630308868).cljs$core$IFn$_invoke$arity$1(estado_atual),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),novo_id,new cljs.core.Keyword(null,"title","title",636505583),novo_titulo], null))], null);
}
}));
});
todo.frontend.core.todo_form = (function todo$frontend$core$todo_form(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.todo-input","div.todo-input",1703680566),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"O que precisa ser feito?",new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"input-text","input-text",-1336297114).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(todo.frontend.core.app_state)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__38676_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(todo.frontend.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"input-text","input-text",-1336297114),p1__38676_SHARP_.target.value);
})], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),todo.frontend.core.adicionar_todo_local], null),"Adicionar (Local)"], null)], null);
});
todo.frontend.core.todo_list = (function todo$frontend$core$todo_list(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.todo-list","ul.todo-list",461840379),(function (){var iter__5480__auto__ = (function todo$frontend$core$todo_list_$_iter__38677(s__38678){
return (new cljs.core.LazySeq(null,(function (){
var s__38678__$1 = s__38678;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__38678__$1);
if(temp__5804__auto__){
var s__38678__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__38678__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__38678__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__38680 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__38679 = (0);
while(true){
if((i__38679 < size__5479__auto__)){
var todo__$1 = cljs.core._nth(c__5478__auto__,i__38679);
cljs.core.chunk_append(b__38680,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.todo-item","li.todo-item",-909811764),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(todo__$1)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(todo__$1)], null)));

var G__38681 = (i__38679 + (1));
i__38679 = G__38681;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__38680),todo$frontend$core$todo_list_$_iter__38677(cljs.core.chunk_rest(s__38678__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__38680),null);
}
} else {
var todo__$1 = cljs.core.first(s__38678__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.todo-item","li.todo-item",-909811764),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(todo__$1)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(todo__$1)], null)),todo$frontend$core$todo_list_$_iter__38677(cljs.core.rest(s__38678__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(new cljs.core.Keyword(null,"todos","todos",630308868).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(todo.frontend.core.app_state)));
})()], null);
});
todo.frontend.core.app = (function todo$frontend$core$app(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.todo-app","div.todo-app",-105024147),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Todo App (Somente Frontend)"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Isto \u00E9 100% local. Recarregue (F5) para ver os dados sumirem."], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [todo.frontend.core.todo_form], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [todo.frontend.core.todo_list], null)], null);
});
todo.frontend.core.init = (function todo$frontend$core$init(){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Frontend 'Todo Est\u00E1tico' inicializado..."], 0));

var root = reagent.dom.client.create_root.cljs$core$IFn$_invoke$arity$1(document.getElementById("app"));
return root.render(reagent.core.as_element.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [todo.frontend.core.app], null)));
});
goog.exportSymbol('todo.frontend.core.init', todo.frontend.core.init);

//# sourceMappingURL=todo.frontend.core.js.map
