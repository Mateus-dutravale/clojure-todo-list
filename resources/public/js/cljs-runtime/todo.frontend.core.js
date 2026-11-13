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
})).then((function (p1__28465_SHARP_){
return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(p1__28465_SHARP_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
}));
});
todo.frontend.core.get_todos = (function todo$frontend$core$get_todos(){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(todo.frontend.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"loading","loading",-737050189),true,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"error","error",-978969032),null], 0));

var c__28268__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28269__auto__ = (function (){var switch__28021__auto__ = (function (state_28501){
var state_val_28502 = (state_28501[(1)]);
if((state_val_28502 === (7))){
var inst_28481 = (state_28501[(7)]);
var inst_28484 = cljs.core.ex_data(inst_28481);
var inst_28485 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_28484);
var inst_28486 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_28485,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var state_28501__$1 = state_28501;
var statearr_28503_28596 = state_28501__$1;
(statearr_28503_28596[(2)] = inst_28486);

(statearr_28503_28596[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28502 === (1))){
var state_28501__$1 = state_28501;
var statearr_28504_28597 = state_28501__$1;
(statearr_28504_28597[(2)] = null);

(statearr_28504_28597[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28502 === (4))){
var inst_28466 = (state_28501[(2)]);
var inst_28467 = inst_28466.message;
var inst_28468 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(todo.frontend.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"error","error",-978969032),inst_28467,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"loading","loading",-737050189),false], 0));
var state_28501__$1 = state_28501;
var statearr_28505_28598 = state_28501__$1;
(statearr_28505_28598[(2)] = inst_28468);

(statearr_28505_28598[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28502 === (6))){
var inst_28481 = (state_28501[(7)]);
var inst_28482 = (state_28501[(8)]);
var inst_28481__$1 = (state_28501[(2)]);
var inst_28482__$1 = (inst_28481__$1 instanceof cljs.core.ExceptionInfo);
var state_28501__$1 = (function (){var statearr_28506 = state_28501;
(statearr_28506[(7)] = inst_28481__$1);

(statearr_28506[(8)] = inst_28482__$1);

return statearr_28506;
})();
if(cljs.core.truth_(inst_28482__$1)){
var statearr_28507_28599 = state_28501__$1;
(statearr_28507_28599[(1)] = (7));

} else {
var statearr_28508_28600 = state_28501__$1;
(statearr_28508_28600[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28502 === (3))){
var inst_28499 = (state_28501[(2)]);
var state_28501__$1 = state_28501;
return cljs.core.async.impl.ioc_helpers.return_chan(state_28501__$1,inst_28499);
} else {
if((state_val_28502 === (12))){
var inst_28494 = (state_28501[(2)]);
var inst_28495 = new cljs.core.Keyword(null,"todos","todos",630308868).cljs$core$IFn$_invoke$arity$1(inst_28494);
var inst_28496 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(todo.frontend.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"todos","todos",630308868),inst_28495,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"loading","loading",-737050189),false], 0));
var _ = (function (){var statearr_28509 = state_28501;
(statearr_28509[(4)] = cljs.core.rest((state_28501[(4)])));

return statearr_28509;
})();
var state_28501__$1 = state_28501;
var statearr_28510_28601 = state_28501__$1;
(statearr_28510_28601[(2)] = inst_28496);

(statearr_28510_28601[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28502 === (2))){
var _ = (function (){var statearr_28511 = state_28501;
(statearr_28511[(4)] = cljs.core.cons((5),(state_28501[(4)])));

return statearr_28511;
})();
var inst_28474 = [todo.frontend.core.api_url,"/todos"].join('');
var inst_28475 = [new cljs.core.Keyword(null,"method","method",55703592)];
var inst_28476 = ["GET"];
var inst_28477 = cljs.core.PersistentHashMap.fromArrays(inst_28475,inst_28476);
var inst_28478 = todo.frontend.core.fetch_json(inst_28474,inst_28477);
var inst_28479 = cljs.core.async.interop.p__GT_c(inst_28478);
var state_28501__$1 = state_28501;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28501__$1,(6),inst_28479);
} else {
if((state_val_28502 === (11))){
var inst_28481 = (state_28501[(7)]);
var state_28501__$1 = state_28501;
var statearr_28513_28602 = state_28501__$1;
(statearr_28513_28602[(2)] = inst_28481);

(statearr_28513_28602[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28502 === (9))){
var inst_28489 = (state_28501[(2)]);
var state_28501__$1 = state_28501;
if(cljs.core.truth_(inst_28489)){
var statearr_28514_28603 = state_28501__$1;
(statearr_28514_28603[(1)] = (10));

} else {
var statearr_28515_28604 = state_28501__$1;
(statearr_28515_28604[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28502 === (5))){
var _ = (function (){var statearr_28516 = state_28501;
(statearr_28516[(4)] = cljs.core.rest((state_28501[(4)])));

return statearr_28516;
})();
var state_28501__$1 = state_28501;
var ex28512 = (state_28501__$1[(2)]);
var statearr_28517_28605 = state_28501__$1;
(statearr_28517_28605[(5)] = ex28512);


if((ex28512 instanceof Error)){
var statearr_28518_28606 = state_28501__$1;
(statearr_28518_28606[(1)] = (4));

(statearr_28518_28606[(5)] = null);

} else {
throw ex28512;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28502 === (10))){
var inst_28481 = (state_28501[(7)]);
var inst_28491 = (function(){throw inst_28481})();
var state_28501__$1 = state_28501;
var statearr_28519_28607 = state_28501__$1;
(statearr_28519_28607[(2)] = inst_28491);

(statearr_28519_28607[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28502 === (8))){
var inst_28482 = (state_28501[(8)]);
var state_28501__$1 = state_28501;
var statearr_28520_28608 = state_28501__$1;
(statearr_28520_28608[(2)] = inst_28482);

(statearr_28520_28608[(1)] = (9));


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
var todo$frontend$core$get_todos_$_state_machine__28022__auto__ = null;
var todo$frontend$core$get_todos_$_state_machine__28022__auto____0 = (function (){
var statearr_28521 = [null,null,null,null,null,null,null,null,null];
(statearr_28521[(0)] = todo$frontend$core$get_todos_$_state_machine__28022__auto__);

(statearr_28521[(1)] = (1));

return statearr_28521;
});
var todo$frontend$core$get_todos_$_state_machine__28022__auto____1 = (function (state_28501){
while(true){
var ret_value__28023__auto__ = (function (){try{while(true){
var result__28024__auto__ = switch__28021__auto__(state_28501);
if(cljs.core.keyword_identical_QMARK_(result__28024__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28024__auto__;
}
break;
}
}catch (e28522){var ex__28025__auto__ = e28522;
var statearr_28523_28609 = state_28501;
(statearr_28523_28609[(2)] = ex__28025__auto__);


if(cljs.core.seq((state_28501[(4)]))){
var statearr_28524_28610 = state_28501;
(statearr_28524_28610[(1)] = cljs.core.first((state_28501[(4)])));

} else {
throw ex__28025__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28023__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28611 = state_28501;
state_28501 = G__28611;
continue;
} else {
return ret_value__28023__auto__;
}
break;
}
});
todo$frontend$core$get_todos_$_state_machine__28022__auto__ = function(state_28501){
switch(arguments.length){
case 0:
return todo$frontend$core$get_todos_$_state_machine__28022__auto____0.call(this);
case 1:
return todo$frontend$core$get_todos_$_state_machine__28022__auto____1.call(this,state_28501);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
todo$frontend$core$get_todos_$_state_machine__28022__auto__.cljs$core$IFn$_invoke$arity$0 = todo$frontend$core$get_todos_$_state_machine__28022__auto____0;
todo$frontend$core$get_todos_$_state_machine__28022__auto__.cljs$core$IFn$_invoke$arity$1 = todo$frontend$core$get_todos_$_state_machine__28022__auto____1;
return todo$frontend$core$get_todos_$_state_machine__28022__auto__;
})()
})();
var state__28270__auto__ = (function (){var statearr_28525 = f__28269__auto__();
(statearr_28525[(6)] = c__28268__auto__);

return statearr_28525;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28270__auto__);
}));

return c__28268__auto__;
});
todo.frontend.core.create_todo = (function todo$frontend$core$create_todo(todo_data){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(todo.frontend.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"loading","loading",-737050189),true,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"error","error",-978969032),null], 0));

var c__28268__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28269__auto__ = (function (){var switch__28021__auto__ = (function (state_28565){
var state_val_28566 = (state_28565[(1)]);
if((state_val_28566 === (7))){
var inst_28546 = (state_28565[(7)]);
var inst_28549 = cljs.core.ex_data(inst_28546);
var inst_28550 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_28549);
var inst_28551 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_28550,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var state_28565__$1 = state_28565;
var statearr_28567_28612 = state_28565__$1;
(statearr_28567_28612[(2)] = inst_28551);

(statearr_28567_28612[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28566 === (1))){
var state_28565__$1 = state_28565;
var statearr_28568_28613 = state_28565__$1;
(statearr_28568_28613[(2)] = null);

(statearr_28568_28613[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28566 === (4))){
var inst_28526 = (state_28565[(2)]);
var inst_28527 = inst_28526.message;
var inst_28528 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(todo.frontend.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"error","error",-978969032),inst_28527,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"loading","loading",-737050189),false], 0));
var state_28565__$1 = state_28565;
var statearr_28569_28614 = state_28565__$1;
(statearr_28569_28614[(2)] = inst_28528);

(statearr_28569_28614[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28566 === (6))){
var inst_28546 = (state_28565[(7)]);
var inst_28547 = (state_28565[(8)]);
var inst_28546__$1 = (state_28565[(2)]);
var inst_28547__$1 = (inst_28546__$1 instanceof cljs.core.ExceptionInfo);
var state_28565__$1 = (function (){var statearr_28570 = state_28565;
(statearr_28570[(7)] = inst_28546__$1);

(statearr_28570[(8)] = inst_28547__$1);

return statearr_28570;
})();
if(cljs.core.truth_(inst_28547__$1)){
var statearr_28571_28615 = state_28565__$1;
(statearr_28571_28615[(1)] = (7));

} else {
var statearr_28572_28616 = state_28565__$1;
(statearr_28572_28616[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28566 === (3))){
var inst_28563 = (state_28565[(2)]);
var state_28565__$1 = state_28565;
return cljs.core.async.impl.ioc_helpers.return_chan(state_28565__$1,inst_28563);
} else {
if((state_val_28566 === (12))){
var inst_28559 = (state_28565[(2)]);
var inst_28560 = todo.frontend.core.get_todos();
var _ = (function (){var statearr_28573 = state_28565;
(statearr_28573[(4)] = cljs.core.rest((state_28565[(4)])));

return statearr_28573;
})();
var state_28565__$1 = (function (){var statearr_28574 = state_28565;
(statearr_28574[(9)] = inst_28559);

return statearr_28574;
})();
var statearr_28575_28617 = state_28565__$1;
(statearr_28575_28617[(2)] = inst_28560);

(statearr_28575_28617[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28566 === (2))){
var _ = (function (){var statearr_28576 = state_28565;
(statearr_28576[(4)] = cljs.core.cons((5),(state_28565[(4)])));

return statearr_28576;
})();
var inst_28534 = [todo.frontend.core.api_url,"/todos"].join('');
var inst_28535 = [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.Keyword(null,"body","body",-2049205669)];
var inst_28536 = ["Content-Type"];
var inst_28537 = ["application/json"];
var inst_28538 = cljs.core.PersistentHashMap.fromArrays(inst_28536,inst_28537);
var inst_28539 = cljs.core.clj__GT_js(todo_data);
var inst_28540 = JSON.stringify(inst_28539);
var inst_28541 = ["POST",inst_28538,inst_28540];
var inst_28542 = cljs.core.PersistentHashMap.fromArrays(inst_28535,inst_28541);
var inst_28543 = todo.frontend.core.fetch_json(inst_28534,inst_28542);
var inst_28544 = cljs.core.async.interop.p__GT_c(inst_28543);
var state_28565__$1 = state_28565;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28565__$1,(6),inst_28544);
} else {
if((state_val_28566 === (11))){
var inst_28546 = (state_28565[(7)]);
var state_28565__$1 = state_28565;
var statearr_28578_28618 = state_28565__$1;
(statearr_28578_28618[(2)] = inst_28546);

(statearr_28578_28618[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28566 === (9))){
var inst_28554 = (state_28565[(2)]);
var state_28565__$1 = state_28565;
if(cljs.core.truth_(inst_28554)){
var statearr_28579_28619 = state_28565__$1;
(statearr_28579_28619[(1)] = (10));

} else {
var statearr_28580_28620 = state_28565__$1;
(statearr_28580_28620[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28566 === (5))){
var _ = (function (){var statearr_28581 = state_28565;
(statearr_28581[(4)] = cljs.core.rest((state_28565[(4)])));

return statearr_28581;
})();
var state_28565__$1 = state_28565;
var ex28577 = (state_28565__$1[(2)]);
var statearr_28582_28621 = state_28565__$1;
(statearr_28582_28621[(5)] = ex28577);


if((ex28577 instanceof Error)){
var statearr_28583_28622 = state_28565__$1;
(statearr_28583_28622[(1)] = (4));

(statearr_28583_28622[(5)] = null);

} else {
throw ex28577;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28566 === (10))){
var inst_28546 = (state_28565[(7)]);
var inst_28556 = (function(){throw inst_28546})();
var state_28565__$1 = state_28565;
var statearr_28584_28623 = state_28565__$1;
(statearr_28584_28623[(2)] = inst_28556);

(statearr_28584_28623[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28566 === (8))){
var inst_28547 = (state_28565[(8)]);
var state_28565__$1 = state_28565;
var statearr_28585_28624 = state_28565__$1;
(statearr_28585_28624[(2)] = inst_28547);

(statearr_28585_28624[(1)] = (9));


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
var todo$frontend$core$create_todo_$_state_machine__28022__auto__ = null;
var todo$frontend$core$create_todo_$_state_machine__28022__auto____0 = (function (){
var statearr_28586 = [null,null,null,null,null,null,null,null,null,null];
(statearr_28586[(0)] = todo$frontend$core$create_todo_$_state_machine__28022__auto__);

(statearr_28586[(1)] = (1));

return statearr_28586;
});
var todo$frontend$core$create_todo_$_state_machine__28022__auto____1 = (function (state_28565){
while(true){
var ret_value__28023__auto__ = (function (){try{while(true){
var result__28024__auto__ = switch__28021__auto__(state_28565);
if(cljs.core.keyword_identical_QMARK_(result__28024__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28024__auto__;
}
break;
}
}catch (e28587){var ex__28025__auto__ = e28587;
var statearr_28588_28625 = state_28565;
(statearr_28588_28625[(2)] = ex__28025__auto__);


if(cljs.core.seq((state_28565[(4)]))){
var statearr_28589_28626 = state_28565;
(statearr_28589_28626[(1)] = cljs.core.first((state_28565[(4)])));

} else {
throw ex__28025__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28023__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28627 = state_28565;
state_28565 = G__28627;
continue;
} else {
return ret_value__28023__auto__;
}
break;
}
});
todo$frontend$core$create_todo_$_state_machine__28022__auto__ = function(state_28565){
switch(arguments.length){
case 0:
return todo$frontend$core$create_todo_$_state_machine__28022__auto____0.call(this);
case 1:
return todo$frontend$core$create_todo_$_state_machine__28022__auto____1.call(this,state_28565);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
todo$frontend$core$create_todo_$_state_machine__28022__auto__.cljs$core$IFn$_invoke$arity$0 = todo$frontend$core$create_todo_$_state_machine__28022__auto____0;
todo$frontend$core$create_todo_$_state_machine__28022__auto__.cljs$core$IFn$_invoke$arity$1 = todo$frontend$core$create_todo_$_state_machine__28022__auto____1;
return todo$frontend$core$create_todo_$_state_machine__28022__auto__;
})()
})();
var state__28270__auto__ = (function (){var statearr_28590 = f__28269__auto__();
(statearr_28590[(6)] = c__28268__auto__);

return statearr_28590;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28270__auto__);
}));

return c__28268__auto__;
});
todo.frontend.core.todo_form = (function todo$frontend$core$todo_form(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.todo-input","div.todo-input",1703680566),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"O que precisa ser feito?",new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"input-text","input-text",-1336297114).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(todo.frontend.core.app_state)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__28591_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(todo.frontend.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"input-text","input-text",-1336297114),p1__28591_SHARP_.target.value);
})], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
todo.frontend.core.create_todo(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"input-text","input-text",-1336297114).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(todo.frontend.core.app_state))], null));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(todo.frontend.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"input-text","input-text",-1336297114),"");
})], null),"Adicionar"], null)], null);
});
todo.frontend.core.todo_list = (function todo$frontend$core$todo_list(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.todo-list","ul.todo-list",461840379),(function (){var iter__5480__auto__ = (function todo$frontend$core$todo_list_$_iter__28592(s__28593){
return (new cljs.core.LazySeq(null,(function (){
var s__28593__$1 = s__28593;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__28593__$1);
if(temp__5804__auto__){
var s__28593__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__28593__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__28593__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__28595 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__28594 = (0);
while(true){
if((i__28594 < size__5479__auto__)){
var todo__$1 = cljs.core._nth(c__5478__auto__,i__28594);
cljs.core.chunk_append(b__28595,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.todo-item","li.todo-item",-909811764),new cljs.core.Keyword("todos","title","todos/title",727314196).cljs$core$IFn$_invoke$arity$1(todo__$1)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword("todos","id","todos/id",-1277077177).cljs$core$IFn$_invoke$arity$1(todo__$1)], null)));

var G__28628 = (i__28594 + (1));
i__28594 = G__28628;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__28595),todo$frontend$core$todo_list_$_iter__28592(cljs.core.chunk_rest(s__28593__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__28595),null);
}
} else {
var todo__$1 = cljs.core.first(s__28593__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.todo-item","li.todo-item",-909811764),new cljs.core.Keyword("todos","title","todos/title",727314196).cljs$core$IFn$_invoke$arity$1(todo__$1)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword("todos","id","todos/id",-1277077177).cljs$core$IFn$_invoke$arity$1(todo__$1)], null)),todo$frontend$core$todo_list_$_iter__28592(cljs.core.rest(s__28593__$2)));
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

var root_28629 = reagent.dom.client.create_root.cljs$core$IFn$_invoke$arity$1(document.getElementById("app"));
root_28629.render(reagent.core.as_element.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [todo.frontend.core.app], null)));

return todo.frontend.core.get_todos();
});
goog.exportSymbol('todo.frontend.core.init', todo.frontend.core.init);

//# sourceMappingURL=todo.frontend.core.js.map
