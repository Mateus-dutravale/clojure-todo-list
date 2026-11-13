goog.provide('todo.frontend.core');
if((typeof todo !== 'undefined') && (typeof todo.frontend !== 'undefined') && (typeof todo.frontend.core !== 'undefined') && (typeof todo.frontend.core.app_state !== 'undefined')){
} else {
todo.frontend.core.app_state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"input-text","input-text",-1336297114),"",new cljs.core.Keyword(null,"todos","todos",630308868),cljs.core.PersistentVector.EMPTY], null));
}
todo.frontend.core.api_url = "http://localhost:3000/api";
todo.frontend.core.fetch_json = (function todo$frontend$core$fetch_json(url,options){
return fetch(url,cljs.core.clj__GT_js(options)).then((function (response){
if(cljs.core.truth_(response.ok)){
} else {
throw (new Error(["HTTP error: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(response.status)].join('')));
}

return response.json();
})).then((function (p1__38642_SHARP_){
return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(p1__38642_SHARP_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
}));
});
todo.frontend.core.get_todos = (function todo$frontend$core$get_todos(){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(todo.frontend.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"loading","loading",-737050189),true,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"error","error",-978969032),null], 0));

var c__31198__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31199__auto__ = (function (){var switch__30575__auto__ = (function (state_38705){
var state_val_38706 = (state_38705[(1)]);
if((state_val_38706 === (7))){
var inst_38681 = (state_38705[(7)]);
var inst_38685 = cljs.core.ex_data(inst_38681);
var inst_38686 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_38685);
var inst_38687 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_38686,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var state_38705__$1 = state_38705;
var statearr_38707_38800 = state_38705__$1;
(statearr_38707_38800[(2)] = inst_38687);

(statearr_38707_38800[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38706 === (1))){
var state_38705__$1 = state_38705;
var statearr_38708_38801 = state_38705__$1;
(statearr_38708_38801[(2)] = null);

(statearr_38708_38801[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38706 === (4))){
var inst_38663 = (state_38705[(2)]);
var inst_38665 = inst_38663.message;
var inst_38666 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(todo.frontend.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"error","error",-978969032),inst_38665,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"loading","loading",-737050189),false], 0));
var state_38705__$1 = state_38705;
var statearr_38709_38802 = state_38705__$1;
(statearr_38709_38802[(2)] = inst_38666);

(statearr_38709_38802[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38706 === (6))){
var inst_38681 = (state_38705[(7)]);
var inst_38683 = (state_38705[(8)]);
var inst_38681__$1 = (state_38705[(2)]);
var inst_38683__$1 = (inst_38681__$1 instanceof cljs.core.ExceptionInfo);
var state_38705__$1 = (function (){var statearr_38710 = state_38705;
(statearr_38710[(7)] = inst_38681__$1);

(statearr_38710[(8)] = inst_38683__$1);

return statearr_38710;
})();
if(cljs.core.truth_(inst_38683__$1)){
var statearr_38711_38803 = state_38705__$1;
(statearr_38711_38803[(1)] = (7));

} else {
var statearr_38712_38804 = state_38705__$1;
(statearr_38712_38804[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38706 === (3))){
var inst_38700 = (state_38705[(2)]);
var state_38705__$1 = state_38705;
return cljs.core.async.impl.ioc_helpers.return_chan(state_38705__$1,inst_38700);
} else {
if((state_val_38706 === (12))){
var inst_38695 = (state_38705[(2)]);
var inst_38696 = new cljs.core.Keyword(null,"todos","todos",630308868).cljs$core$IFn$_invoke$arity$1(inst_38695);
var inst_38697 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(todo.frontend.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"todos","todos",630308868),inst_38696,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"loading","loading",-737050189),false], 0));
var _ = (function (){var statearr_38713 = state_38705;
(statearr_38713[(4)] = cljs.core.rest((state_38705[(4)])));

return statearr_38713;
})();
var state_38705__$1 = state_38705;
var statearr_38714_38805 = state_38705__$1;
(statearr_38714_38805[(2)] = inst_38697);

(statearr_38714_38805[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38706 === (2))){
var _ = (function (){var statearr_38715 = state_38705;
(statearr_38715[(4)] = cljs.core.cons((5),(state_38705[(4)])));

return statearr_38715;
})();
var inst_38672 = [todo.frontend.core.api_url,"/todos"].join('');
var inst_38675 = [new cljs.core.Keyword(null,"method","method",55703592)];
var inst_38676 = ["GET"];
var inst_38677 = cljs.core.PersistentHashMap.fromArrays(inst_38675,inst_38676);
var inst_38678 = todo.frontend.core.fetch_json(inst_38672,inst_38677);
var inst_38679 = cljs.core.async.interop.p__GT_c(inst_38678);
var state_38705__$1 = state_38705;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38705__$1,(6),inst_38679);
} else {
if((state_val_38706 === (11))){
var inst_38681 = (state_38705[(7)]);
var state_38705__$1 = state_38705;
var statearr_38717_38806 = state_38705__$1;
(statearr_38717_38806[(2)] = inst_38681);

(statearr_38717_38806[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38706 === (9))){
var inst_38690 = (state_38705[(2)]);
var state_38705__$1 = state_38705;
if(cljs.core.truth_(inst_38690)){
var statearr_38718_38807 = state_38705__$1;
(statearr_38718_38807[(1)] = (10));

} else {
var statearr_38719_38808 = state_38705__$1;
(statearr_38719_38808[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38706 === (5))){
var _ = (function (){var statearr_38720 = state_38705;
(statearr_38720[(4)] = cljs.core.rest((state_38705[(4)])));

return statearr_38720;
})();
var state_38705__$1 = state_38705;
var ex38716 = (state_38705__$1[(2)]);
var statearr_38721_38809 = state_38705__$1;
(statearr_38721_38809[(5)] = ex38716);


if((ex38716 instanceof Error)){
var statearr_38722_38810 = state_38705__$1;
(statearr_38722_38810[(1)] = (4));

(statearr_38722_38810[(5)] = null);

} else {
throw ex38716;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38706 === (10))){
var inst_38681 = (state_38705[(7)]);
var inst_38692 = (function(){throw inst_38681})();
var state_38705__$1 = state_38705;
var statearr_38723_38811 = state_38705__$1;
(statearr_38723_38811[(2)] = inst_38692);

(statearr_38723_38811[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38706 === (8))){
var inst_38683 = (state_38705[(8)]);
var state_38705__$1 = state_38705;
var statearr_38724_38812 = state_38705__$1;
(statearr_38724_38812[(2)] = inst_38683);

(statearr_38724_38812[(1)] = (9));


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
});
return (function() {
var todo$frontend$core$get_todos_$_state_machine__30576__auto__ = null;
var todo$frontend$core$get_todos_$_state_machine__30576__auto____0 = (function (){
var statearr_38725 = [null,null,null,null,null,null,null,null,null];
(statearr_38725[(0)] = todo$frontend$core$get_todos_$_state_machine__30576__auto__);

(statearr_38725[(1)] = (1));

return statearr_38725;
});
var todo$frontend$core$get_todos_$_state_machine__30576__auto____1 = (function (state_38705){
while(true){
var ret_value__30577__auto__ = (function (){try{while(true){
var result__30578__auto__ = switch__30575__auto__(state_38705);
if(cljs.core.keyword_identical_QMARK_(result__30578__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30578__auto__;
}
break;
}
}catch (e38726){var ex__30579__auto__ = e38726;
var statearr_38727_38813 = state_38705;
(statearr_38727_38813[(2)] = ex__30579__auto__);


if(cljs.core.seq((state_38705[(4)]))){
var statearr_38728_38814 = state_38705;
(statearr_38728_38814[(1)] = cljs.core.first((state_38705[(4)])));

} else {
throw ex__30579__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30577__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38815 = state_38705;
state_38705 = G__38815;
continue;
} else {
return ret_value__30577__auto__;
}
break;
}
});
todo$frontend$core$get_todos_$_state_machine__30576__auto__ = function(state_38705){
switch(arguments.length){
case 0:
return todo$frontend$core$get_todos_$_state_machine__30576__auto____0.call(this);
case 1:
return todo$frontend$core$get_todos_$_state_machine__30576__auto____1.call(this,state_38705);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
todo$frontend$core$get_todos_$_state_machine__30576__auto__.cljs$core$IFn$_invoke$arity$0 = todo$frontend$core$get_todos_$_state_machine__30576__auto____0;
todo$frontend$core$get_todos_$_state_machine__30576__auto__.cljs$core$IFn$_invoke$arity$1 = todo$frontend$core$get_todos_$_state_machine__30576__auto____1;
return todo$frontend$core$get_todos_$_state_machine__30576__auto__;
})()
})();
var state__31220__auto__ = (function (){var statearr_38729 = f__31199__auto__();
(statearr_38729[(6)] = c__31198__auto__);

return statearr_38729;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31220__auto__);
}));

return c__31198__auto__;
});
todo.frontend.core.create_todo = (function todo$frontend$core$create_todo(todo_data){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(todo.frontend.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"loading","loading",-737050189),true,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"error","error",-978969032),null], 0));

var c__31198__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31199__auto__ = (function (){var switch__30575__auto__ = (function (state_38769){
var state_val_38770 = (state_38769[(1)]);
if((state_val_38770 === (7))){
var inst_38750 = (state_38769[(7)]);
var inst_38753 = cljs.core.ex_data(inst_38750);
var inst_38754 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_38753);
var inst_38755 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_38754,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var state_38769__$1 = state_38769;
var statearr_38771_38816 = state_38769__$1;
(statearr_38771_38816[(2)] = inst_38755);

(statearr_38771_38816[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38770 === (1))){
var state_38769__$1 = state_38769;
var statearr_38772_38817 = state_38769__$1;
(statearr_38772_38817[(2)] = null);

(statearr_38772_38817[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38770 === (4))){
var inst_38730 = (state_38769[(2)]);
var inst_38731 = inst_38730.message;
var inst_38732 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(todo.frontend.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"error","error",-978969032),inst_38731,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"loading","loading",-737050189),false], 0));
var state_38769__$1 = state_38769;
var statearr_38773_38818 = state_38769__$1;
(statearr_38773_38818[(2)] = inst_38732);

(statearr_38773_38818[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38770 === (6))){
var inst_38750 = (state_38769[(7)]);
var inst_38751 = (state_38769[(8)]);
var inst_38750__$1 = (state_38769[(2)]);
var inst_38751__$1 = (inst_38750__$1 instanceof cljs.core.ExceptionInfo);
var state_38769__$1 = (function (){var statearr_38774 = state_38769;
(statearr_38774[(7)] = inst_38750__$1);

(statearr_38774[(8)] = inst_38751__$1);

return statearr_38774;
})();
if(cljs.core.truth_(inst_38751__$1)){
var statearr_38775_38819 = state_38769__$1;
(statearr_38775_38819[(1)] = (7));

} else {
var statearr_38776_38820 = state_38769__$1;
(statearr_38776_38820[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38770 === (3))){
var inst_38767 = (state_38769[(2)]);
var state_38769__$1 = state_38769;
return cljs.core.async.impl.ioc_helpers.return_chan(state_38769__$1,inst_38767);
} else {
if((state_val_38770 === (12))){
var inst_38763 = (state_38769[(2)]);
var inst_38764 = todo.frontend.core.get_todos();
var _ = (function (){var statearr_38777 = state_38769;
(statearr_38777[(4)] = cljs.core.rest((state_38769[(4)])));

return statearr_38777;
})();
var state_38769__$1 = (function (){var statearr_38778 = state_38769;
(statearr_38778[(9)] = inst_38763);

return statearr_38778;
})();
var statearr_38779_38821 = state_38769__$1;
(statearr_38779_38821[(2)] = inst_38764);

(statearr_38779_38821[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38770 === (2))){
var _ = (function (){var statearr_38780 = state_38769;
(statearr_38780[(4)] = cljs.core.cons((5),(state_38769[(4)])));

return statearr_38780;
})();
var inst_38738 = [todo.frontend.core.api_url,"/todos"].join('');
var inst_38739 = [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.Keyword(null,"body","body",-2049205669)];
var inst_38740 = ["Content-Type"];
var inst_38741 = ["application/json"];
var inst_38742 = cljs.core.PersistentHashMap.fromArrays(inst_38740,inst_38741);
var inst_38743 = cljs.core.clj__GT_js(todo_data);
var inst_38744 = JSON.stringify(inst_38743);
var inst_38745 = ["POST",inst_38742,inst_38744];
var inst_38746 = cljs.core.PersistentHashMap.fromArrays(inst_38739,inst_38745);
var inst_38747 = todo.frontend.core.fetch_json(inst_38738,inst_38746);
var inst_38748 = cljs.core.async.interop.p__GT_c(inst_38747);
var state_38769__$1 = state_38769;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38769__$1,(6),inst_38748);
} else {
if((state_val_38770 === (11))){
var inst_38750 = (state_38769[(7)]);
var state_38769__$1 = state_38769;
var statearr_38782_38822 = state_38769__$1;
(statearr_38782_38822[(2)] = inst_38750);

(statearr_38782_38822[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38770 === (9))){
var inst_38758 = (state_38769[(2)]);
var state_38769__$1 = state_38769;
if(cljs.core.truth_(inst_38758)){
var statearr_38783_38823 = state_38769__$1;
(statearr_38783_38823[(1)] = (10));

} else {
var statearr_38784_38824 = state_38769__$1;
(statearr_38784_38824[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38770 === (5))){
var _ = (function (){var statearr_38785 = state_38769;
(statearr_38785[(4)] = cljs.core.rest((state_38769[(4)])));

return statearr_38785;
})();
var state_38769__$1 = state_38769;
var ex38781 = (state_38769__$1[(2)]);
var statearr_38786_38825 = state_38769__$1;
(statearr_38786_38825[(5)] = ex38781);


if((ex38781 instanceof Error)){
var statearr_38787_38826 = state_38769__$1;
(statearr_38787_38826[(1)] = (4));

(statearr_38787_38826[(5)] = null);

} else {
throw ex38781;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38770 === (10))){
var inst_38750 = (state_38769[(7)]);
var inst_38760 = (function(){throw inst_38750})();
var state_38769__$1 = state_38769;
var statearr_38788_38827 = state_38769__$1;
(statearr_38788_38827[(2)] = inst_38760);

(statearr_38788_38827[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38770 === (8))){
var inst_38751 = (state_38769[(8)]);
var state_38769__$1 = state_38769;
var statearr_38789_38828 = state_38769__$1;
(statearr_38789_38828[(2)] = inst_38751);

(statearr_38789_38828[(1)] = (9));


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
});
return (function() {
var todo$frontend$core$create_todo_$_state_machine__30576__auto__ = null;
var todo$frontend$core$create_todo_$_state_machine__30576__auto____0 = (function (){
var statearr_38790 = [null,null,null,null,null,null,null,null,null,null];
(statearr_38790[(0)] = todo$frontend$core$create_todo_$_state_machine__30576__auto__);

(statearr_38790[(1)] = (1));

return statearr_38790;
});
var todo$frontend$core$create_todo_$_state_machine__30576__auto____1 = (function (state_38769){
while(true){
var ret_value__30577__auto__ = (function (){try{while(true){
var result__30578__auto__ = switch__30575__auto__(state_38769);
if(cljs.core.keyword_identical_QMARK_(result__30578__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30578__auto__;
}
break;
}
}catch (e38791){var ex__30579__auto__ = e38791;
var statearr_38792_38829 = state_38769;
(statearr_38792_38829[(2)] = ex__30579__auto__);


if(cljs.core.seq((state_38769[(4)]))){
var statearr_38793_38830 = state_38769;
(statearr_38793_38830[(1)] = cljs.core.first((state_38769[(4)])));

} else {
throw ex__30579__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30577__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38831 = state_38769;
state_38769 = G__38831;
continue;
} else {
return ret_value__30577__auto__;
}
break;
}
});
todo$frontend$core$create_todo_$_state_machine__30576__auto__ = function(state_38769){
switch(arguments.length){
case 0:
return todo$frontend$core$create_todo_$_state_machine__30576__auto____0.call(this);
case 1:
return todo$frontend$core$create_todo_$_state_machine__30576__auto____1.call(this,state_38769);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
todo$frontend$core$create_todo_$_state_machine__30576__auto__.cljs$core$IFn$_invoke$arity$0 = todo$frontend$core$create_todo_$_state_machine__30576__auto____0;
todo$frontend$core$create_todo_$_state_machine__30576__auto__.cljs$core$IFn$_invoke$arity$1 = todo$frontend$core$create_todo_$_state_machine__30576__auto____1;
return todo$frontend$core$create_todo_$_state_machine__30576__auto__;
})()
})();
var state__31220__auto__ = (function (){var statearr_38794 = f__31199__auto__();
(statearr_38794[(6)] = c__31198__auto__);

return statearr_38794;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31220__auto__);
}));

return c__31198__auto__;
});
todo.frontend.core.todo_form = (function todo$frontend$core$todo_form(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.todo-input","div.todo-input",1703680566),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"O que precisa ser feito?",new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"input-text","input-text",-1336297114).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(todo.frontend.core.app_state)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__38795_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(todo.frontend.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"input-text","input-text",-1336297114),p1__38795_SHARP_.target.value);
})], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
todo.frontend.core.create_todo(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"input-text","input-text",-1336297114).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(todo.frontend.core.app_state))], null));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(todo.frontend.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"input-text","input-text",-1336297114),"");
})], null),"Adicionar"], null)], null);
});
todo.frontend.core.todo_list = (function todo$frontend$core$todo_list(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.todo-list","ul.todo-list",461840379),(function (){var iter__5480__auto__ = (function todo$frontend$core$todo_list_$_iter__38796(s__38797){
return (new cljs.core.LazySeq(null,(function (){
var s__38797__$1 = s__38797;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__38797__$1);
if(temp__5804__auto__){
var s__38797__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__38797__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__38797__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__38799 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__38798 = (0);
while(true){
if((i__38798 < size__5479__auto__)){
var todo__$1 = cljs.core._nth(c__5478__auto__,i__38798);
cljs.core.chunk_append(b__38799,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.todo-item","li.todo-item",-909811764),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(todo__$1)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(todo__$1)], null)));

var G__38832 = (i__38798 + (1));
i__38798 = G__38832;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__38799),todo$frontend$core$todo_list_$_iter__38796(cljs.core.chunk_rest(s__38797__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__38799),null);
}
} else {
var todo__$1 = cljs.core.first(s__38797__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.todo-item","li.todo-item",-909811764),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(todo__$1)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(todo__$1)], null)),todo$frontend$core$todo_list_$_iter__38796(cljs.core.rest(s__38797__$2)));
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
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.todo-app","div.todo-app",-105024147),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Todo App"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Conectado \u00E0 API. Os dados sobrevivem ao F5!"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [todo.frontend.core.todo_form], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [todo.frontend.core.todo_list], null)], null);
});
todo.frontend.core.init = (function todo$frontend$core$init(){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Frontend inicializado..."], 0));

var root_38833 = reagent.dom.client.create_root.cljs$core$IFn$_invoke$arity$1(document.getElementById("app"));
root_38833.render(reagent.core.as_element.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [todo.frontend.core.app], null)));

return todo.frontend.core.get_todos();
});
goog.exportSymbol('todo.frontend.core.init', todo.frontend.core.init);

//# sourceMappingURL=todo.frontend.core.js.map
