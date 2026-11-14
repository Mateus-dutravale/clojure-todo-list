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
})).then((function (p1__29264_SHARP_){
return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(p1__29264_SHARP_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
}));
});
todo.frontend.core.get_todos = (function todo$frontend$core$get_todos(){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(todo.frontend.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"loading","loading",-737050189),true,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"error","error",-978969032),null], 0));

var c__28185__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28186__auto__ = (function (){var switch__28021__auto__ = (function (state_29300){
var state_val_29301 = (state_29300[(1)]);
if((state_val_29301 === (7))){
var inst_29280 = (state_29300[(7)]);
var inst_29283 = cljs.core.ex_data(inst_29280);
var inst_29284 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_29283);
var inst_29285 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_29284,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var state_29300__$1 = state_29300;
var statearr_29302_29515 = state_29300__$1;
(statearr_29302_29515[(2)] = inst_29285);

(statearr_29302_29515[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29301 === (1))){
var state_29300__$1 = state_29300;
var statearr_29303_29516 = state_29300__$1;
(statearr_29303_29516[(2)] = null);

(statearr_29303_29516[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29301 === (4))){
var inst_29265 = (state_29300[(2)]);
var inst_29266 = inst_29265.message;
var inst_29267 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(todo.frontend.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"error","error",-978969032),inst_29266,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"loading","loading",-737050189),false], 0));
var state_29300__$1 = state_29300;
var statearr_29304_29517 = state_29300__$1;
(statearr_29304_29517[(2)] = inst_29267);

(statearr_29304_29517[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29301 === (6))){
var inst_29280 = (state_29300[(7)]);
var inst_29281 = (state_29300[(8)]);
var inst_29280__$1 = (state_29300[(2)]);
var inst_29281__$1 = (inst_29280__$1 instanceof cljs.core.ExceptionInfo);
var state_29300__$1 = (function (){var statearr_29305 = state_29300;
(statearr_29305[(7)] = inst_29280__$1);

(statearr_29305[(8)] = inst_29281__$1);

return statearr_29305;
})();
if(cljs.core.truth_(inst_29281__$1)){
var statearr_29306_29518 = state_29300__$1;
(statearr_29306_29518[(1)] = (7));

} else {
var statearr_29307_29519 = state_29300__$1;
(statearr_29307_29519[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29301 === (3))){
var inst_29298 = (state_29300[(2)]);
var state_29300__$1 = state_29300;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29300__$1,inst_29298);
} else {
if((state_val_29301 === (12))){
var inst_29293 = (state_29300[(2)]);
var inst_29294 = new cljs.core.Keyword(null,"todos","todos",630308868).cljs$core$IFn$_invoke$arity$1(inst_29293);
var inst_29295 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(todo.frontend.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"todos","todos",630308868),inst_29294,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"loading","loading",-737050189),false], 0));
var _ = (function (){var statearr_29308 = state_29300;
(statearr_29308[(4)] = cljs.core.rest((state_29300[(4)])));

return statearr_29308;
})();
var state_29300__$1 = state_29300;
var statearr_29309_29520 = state_29300__$1;
(statearr_29309_29520[(2)] = inst_29295);

(statearr_29309_29520[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29301 === (2))){
var _ = (function (){var statearr_29310 = state_29300;
(statearr_29310[(4)] = cljs.core.cons((5),(state_29300[(4)])));

return statearr_29310;
})();
var inst_29273 = [todo.frontend.core.api_url,"/todos"].join('');
var inst_29274 = [new cljs.core.Keyword(null,"method","method",55703592)];
var inst_29275 = ["GET"];
var inst_29276 = cljs.core.PersistentHashMap.fromArrays(inst_29274,inst_29275);
var inst_29277 = todo.frontend.core.fetch_json(inst_29273,inst_29276);
var inst_29278 = cljs.core.async.interop.p__GT_c(inst_29277);
var state_29300__$1 = state_29300;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29300__$1,(6),inst_29278);
} else {
if((state_val_29301 === (11))){
var inst_29280 = (state_29300[(7)]);
var state_29300__$1 = state_29300;
var statearr_29312_29521 = state_29300__$1;
(statearr_29312_29521[(2)] = inst_29280);

(statearr_29312_29521[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29301 === (9))){
var inst_29288 = (state_29300[(2)]);
var state_29300__$1 = state_29300;
if(cljs.core.truth_(inst_29288)){
var statearr_29313_29522 = state_29300__$1;
(statearr_29313_29522[(1)] = (10));

} else {
var statearr_29314_29523 = state_29300__$1;
(statearr_29314_29523[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29301 === (5))){
var _ = (function (){var statearr_29315 = state_29300;
(statearr_29315[(4)] = cljs.core.rest((state_29300[(4)])));

return statearr_29315;
})();
var state_29300__$1 = state_29300;
var ex29311 = (state_29300__$1[(2)]);
var statearr_29316_29524 = state_29300__$1;
(statearr_29316_29524[(5)] = ex29311);


if((ex29311 instanceof Error)){
var statearr_29317_29525 = state_29300__$1;
(statearr_29317_29525[(1)] = (4));

(statearr_29317_29525[(5)] = null);

} else {
throw ex29311;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29301 === (10))){
var inst_29280 = (state_29300[(7)]);
var inst_29290 = (function(){throw inst_29280})();
var state_29300__$1 = state_29300;
var statearr_29318_29526 = state_29300__$1;
(statearr_29318_29526[(2)] = inst_29290);

(statearr_29318_29526[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29301 === (8))){
var inst_29281 = (state_29300[(8)]);
var state_29300__$1 = state_29300;
var statearr_29319_29527 = state_29300__$1;
(statearr_29319_29527[(2)] = inst_29281);

(statearr_29319_29527[(1)] = (9));


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
var statearr_29320 = [null,null,null,null,null,null,null,null,null];
(statearr_29320[(0)] = todo$frontend$core$get_todos_$_state_machine__28022__auto__);

(statearr_29320[(1)] = (1));

return statearr_29320;
});
var todo$frontend$core$get_todos_$_state_machine__28022__auto____1 = (function (state_29300){
while(true){
var ret_value__28023__auto__ = (function (){try{while(true){
var result__28024__auto__ = switch__28021__auto__(state_29300);
if(cljs.core.keyword_identical_QMARK_(result__28024__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28024__auto__;
}
break;
}
}catch (e29321){var ex__28025__auto__ = e29321;
var statearr_29322_29528 = state_29300;
(statearr_29322_29528[(2)] = ex__28025__auto__);


if(cljs.core.seq((state_29300[(4)]))){
var statearr_29323_29529 = state_29300;
(statearr_29323_29529[(1)] = cljs.core.first((state_29300[(4)])));

} else {
throw ex__28025__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28023__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29530 = state_29300;
state_29300 = G__29530;
continue;
} else {
return ret_value__28023__auto__;
}
break;
}
});
todo$frontend$core$get_todos_$_state_machine__28022__auto__ = function(state_29300){
switch(arguments.length){
case 0:
return todo$frontend$core$get_todos_$_state_machine__28022__auto____0.call(this);
case 1:
return todo$frontend$core$get_todos_$_state_machine__28022__auto____1.call(this,state_29300);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
todo$frontend$core$get_todos_$_state_machine__28022__auto__.cljs$core$IFn$_invoke$arity$0 = todo$frontend$core$get_todos_$_state_machine__28022__auto____0;
todo$frontend$core$get_todos_$_state_machine__28022__auto__.cljs$core$IFn$_invoke$arity$1 = todo$frontend$core$get_todos_$_state_machine__28022__auto____1;
return todo$frontend$core$get_todos_$_state_machine__28022__auto__;
})()
})();
var state__28187__auto__ = (function (){var statearr_29324 = f__28186__auto__();
(statearr_29324[(6)] = c__28185__auto__);

return statearr_29324;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28187__auto__);
}));

return c__28185__auto__;
});
todo.frontend.core.create_todo = (function todo$frontend$core$create_todo(todo_data){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(todo.frontend.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"loading","loading",-737050189),true,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"error","error",-978969032),null], 0));

var c__28185__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28186__auto__ = (function (){var switch__28021__auto__ = (function (state_29364){
var state_val_29365 = (state_29364[(1)]);
if((state_val_29365 === (7))){
var inst_29345 = (state_29364[(7)]);
var inst_29348 = cljs.core.ex_data(inst_29345);
var inst_29349 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_29348);
var inst_29350 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_29349,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var state_29364__$1 = state_29364;
var statearr_29366_29531 = state_29364__$1;
(statearr_29366_29531[(2)] = inst_29350);

(statearr_29366_29531[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29365 === (1))){
var state_29364__$1 = state_29364;
var statearr_29367_29532 = state_29364__$1;
(statearr_29367_29532[(2)] = null);

(statearr_29367_29532[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29365 === (4))){
var inst_29325 = (state_29364[(2)]);
var inst_29326 = inst_29325.message;
var inst_29327 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(todo.frontend.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"error","error",-978969032),inst_29326,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"loading","loading",-737050189),false], 0));
var state_29364__$1 = state_29364;
var statearr_29368_29533 = state_29364__$1;
(statearr_29368_29533[(2)] = inst_29327);

(statearr_29368_29533[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29365 === (6))){
var inst_29345 = (state_29364[(7)]);
var inst_29346 = (state_29364[(8)]);
var inst_29345__$1 = (state_29364[(2)]);
var inst_29346__$1 = (inst_29345__$1 instanceof cljs.core.ExceptionInfo);
var state_29364__$1 = (function (){var statearr_29369 = state_29364;
(statearr_29369[(7)] = inst_29345__$1);

(statearr_29369[(8)] = inst_29346__$1);

return statearr_29369;
})();
if(cljs.core.truth_(inst_29346__$1)){
var statearr_29370_29534 = state_29364__$1;
(statearr_29370_29534[(1)] = (7));

} else {
var statearr_29371_29535 = state_29364__$1;
(statearr_29371_29535[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29365 === (3))){
var inst_29362 = (state_29364[(2)]);
var state_29364__$1 = state_29364;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29364__$1,inst_29362);
} else {
if((state_val_29365 === (12))){
var inst_29358 = (state_29364[(2)]);
var inst_29359 = todo.frontend.core.get_todos();
var _ = (function (){var statearr_29372 = state_29364;
(statearr_29372[(4)] = cljs.core.rest((state_29364[(4)])));

return statearr_29372;
})();
var state_29364__$1 = (function (){var statearr_29373 = state_29364;
(statearr_29373[(9)] = inst_29358);

return statearr_29373;
})();
var statearr_29374_29536 = state_29364__$1;
(statearr_29374_29536[(2)] = inst_29359);

(statearr_29374_29536[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29365 === (2))){
var _ = (function (){var statearr_29375 = state_29364;
(statearr_29375[(4)] = cljs.core.cons((5),(state_29364[(4)])));

return statearr_29375;
})();
var inst_29333 = [todo.frontend.core.api_url,"/todos"].join('');
var inst_29334 = [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.Keyword(null,"body","body",-2049205669)];
var inst_29335 = ["Content-Type"];
var inst_29336 = ["application/json"];
var inst_29337 = cljs.core.PersistentHashMap.fromArrays(inst_29335,inst_29336);
var inst_29338 = cljs.core.clj__GT_js(todo_data);
var inst_29339 = JSON.stringify(inst_29338);
var inst_29340 = ["POST",inst_29337,inst_29339];
var inst_29341 = cljs.core.PersistentHashMap.fromArrays(inst_29334,inst_29340);
var inst_29342 = todo.frontend.core.fetch_json(inst_29333,inst_29341);
var inst_29343 = cljs.core.async.interop.p__GT_c(inst_29342);
var state_29364__$1 = state_29364;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29364__$1,(6),inst_29343);
} else {
if((state_val_29365 === (11))){
var inst_29345 = (state_29364[(7)]);
var state_29364__$1 = state_29364;
var statearr_29377_29537 = state_29364__$1;
(statearr_29377_29537[(2)] = inst_29345);

(statearr_29377_29537[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29365 === (9))){
var inst_29353 = (state_29364[(2)]);
var state_29364__$1 = state_29364;
if(cljs.core.truth_(inst_29353)){
var statearr_29378_29538 = state_29364__$1;
(statearr_29378_29538[(1)] = (10));

} else {
var statearr_29379_29539 = state_29364__$1;
(statearr_29379_29539[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29365 === (5))){
var _ = (function (){var statearr_29380 = state_29364;
(statearr_29380[(4)] = cljs.core.rest((state_29364[(4)])));

return statearr_29380;
})();
var state_29364__$1 = state_29364;
var ex29376 = (state_29364__$1[(2)]);
var statearr_29381_29540 = state_29364__$1;
(statearr_29381_29540[(5)] = ex29376);


if((ex29376 instanceof Error)){
var statearr_29382_29541 = state_29364__$1;
(statearr_29382_29541[(1)] = (4));

(statearr_29382_29541[(5)] = null);

} else {
throw ex29376;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29365 === (10))){
var inst_29345 = (state_29364[(7)]);
var inst_29355 = (function(){throw inst_29345})();
var state_29364__$1 = state_29364;
var statearr_29383_29542 = state_29364__$1;
(statearr_29383_29542[(2)] = inst_29355);

(statearr_29383_29542[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29365 === (8))){
var inst_29346 = (state_29364[(8)]);
var state_29364__$1 = state_29364;
var statearr_29384_29543 = state_29364__$1;
(statearr_29384_29543[(2)] = inst_29346);

(statearr_29384_29543[(1)] = (9));


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
var statearr_29385 = [null,null,null,null,null,null,null,null,null,null];
(statearr_29385[(0)] = todo$frontend$core$create_todo_$_state_machine__28022__auto__);

(statearr_29385[(1)] = (1));

return statearr_29385;
});
var todo$frontend$core$create_todo_$_state_machine__28022__auto____1 = (function (state_29364){
while(true){
var ret_value__28023__auto__ = (function (){try{while(true){
var result__28024__auto__ = switch__28021__auto__(state_29364);
if(cljs.core.keyword_identical_QMARK_(result__28024__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28024__auto__;
}
break;
}
}catch (e29386){var ex__28025__auto__ = e29386;
var statearr_29387_29544 = state_29364;
(statearr_29387_29544[(2)] = ex__28025__auto__);


if(cljs.core.seq((state_29364[(4)]))){
var statearr_29388_29545 = state_29364;
(statearr_29388_29545[(1)] = cljs.core.first((state_29364[(4)])));

} else {
throw ex__28025__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28023__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29546 = state_29364;
state_29364 = G__29546;
continue;
} else {
return ret_value__28023__auto__;
}
break;
}
});
todo$frontend$core$create_todo_$_state_machine__28022__auto__ = function(state_29364){
switch(arguments.length){
case 0:
return todo$frontend$core$create_todo_$_state_machine__28022__auto____0.call(this);
case 1:
return todo$frontend$core$create_todo_$_state_machine__28022__auto____1.call(this,state_29364);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
todo$frontend$core$create_todo_$_state_machine__28022__auto__.cljs$core$IFn$_invoke$arity$0 = todo$frontend$core$create_todo_$_state_machine__28022__auto____0;
todo$frontend$core$create_todo_$_state_machine__28022__auto__.cljs$core$IFn$_invoke$arity$1 = todo$frontend$core$create_todo_$_state_machine__28022__auto____1;
return todo$frontend$core$create_todo_$_state_machine__28022__auto__;
})()
})();
var state__28187__auto__ = (function (){var statearr_29389 = f__28186__auto__();
(statearr_29389[(6)] = c__28185__auto__);

return statearr_29389;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28187__auto__);
}));

return c__28185__auto__;
});
/**
 * Chama a API para alternar o status de um todo.
 */
todo.frontend.core.toggle_todo = (function todo$frontend$core$toggle_todo(id){
var c__28185__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28186__auto__ = (function (){var switch__28021__auto__ = (function (state_29424){
var state_val_29425 = (state_29424[(1)]);
if((state_val_29425 === (7))){
var inst_29405 = (state_29424[(7)]);
var inst_29408 = cljs.core.ex_data(inst_29405);
var inst_29409 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_29408);
var inst_29410 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_29409,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var state_29424__$1 = state_29424;
var statearr_29426_29547 = state_29424__$1;
(statearr_29426_29547[(2)] = inst_29410);

(statearr_29426_29547[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29425 === (1))){
var state_29424__$1 = state_29424;
var statearr_29427_29548 = state_29424__$1;
(statearr_29427_29548[(2)] = null);

(statearr_29427_29548[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29425 === (4))){
var inst_29390 = (state_29424[(2)]);
var inst_29391 = inst_29390.message;
var inst_29392 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(todo.frontend.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"error","error",-978969032),inst_29391,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"loading","loading",-737050189),false], 0));
var state_29424__$1 = state_29424;
var statearr_29428_29549 = state_29424__$1;
(statearr_29428_29549[(2)] = inst_29392);

(statearr_29428_29549[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29425 === (6))){
var inst_29405 = (state_29424[(7)]);
var inst_29406 = (state_29424[(8)]);
var inst_29405__$1 = (state_29424[(2)]);
var inst_29406__$1 = (inst_29405__$1 instanceof cljs.core.ExceptionInfo);
var state_29424__$1 = (function (){var statearr_29429 = state_29424;
(statearr_29429[(7)] = inst_29405__$1);

(statearr_29429[(8)] = inst_29406__$1);

return statearr_29429;
})();
if(cljs.core.truth_(inst_29406__$1)){
var statearr_29430_29550 = state_29424__$1;
(statearr_29430_29550[(1)] = (7));

} else {
var statearr_29431_29551 = state_29424__$1;
(statearr_29431_29551[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29425 === (3))){
var inst_29422 = (state_29424[(2)]);
var state_29424__$1 = state_29424;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29424__$1,inst_29422);
} else {
if((state_val_29425 === (12))){
var inst_29418 = (state_29424[(2)]);
var inst_29419 = todo.frontend.core.get_todos();
var _ = (function (){var statearr_29432 = state_29424;
(statearr_29432[(4)] = cljs.core.rest((state_29424[(4)])));

return statearr_29432;
})();
var state_29424__$1 = (function (){var statearr_29433 = state_29424;
(statearr_29433[(9)] = inst_29418);

return statearr_29433;
})();
var statearr_29434_29552 = state_29424__$1;
(statearr_29434_29552[(2)] = inst_29419);

(statearr_29434_29552[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29425 === (2))){
var _ = (function (){var statearr_29435 = state_29424;
(statearr_29435[(4)] = cljs.core.cons((5),(state_29424[(4)])));

return statearr_29435;
})();
var inst_29398 = [todo.frontend.core.api_url,"/todos/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),"/toggle"].join('');
var inst_29399 = [new cljs.core.Keyword(null,"method","method",55703592)];
var inst_29400 = ["POST"];
var inst_29401 = cljs.core.PersistentHashMap.fromArrays(inst_29399,inst_29400);
var inst_29402 = todo.frontend.core.fetch_json(inst_29398,inst_29401);
var inst_29403 = cljs.core.async.interop.p__GT_c(inst_29402);
var state_29424__$1 = state_29424;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29424__$1,(6),inst_29403);
} else {
if((state_val_29425 === (11))){
var inst_29405 = (state_29424[(7)]);
var state_29424__$1 = state_29424;
var statearr_29437_29553 = state_29424__$1;
(statearr_29437_29553[(2)] = inst_29405);

(statearr_29437_29553[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29425 === (9))){
var inst_29413 = (state_29424[(2)]);
var state_29424__$1 = state_29424;
if(cljs.core.truth_(inst_29413)){
var statearr_29438_29554 = state_29424__$1;
(statearr_29438_29554[(1)] = (10));

} else {
var statearr_29439_29555 = state_29424__$1;
(statearr_29439_29555[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29425 === (5))){
var _ = (function (){var statearr_29440 = state_29424;
(statearr_29440[(4)] = cljs.core.rest((state_29424[(4)])));

return statearr_29440;
})();
var state_29424__$1 = state_29424;
var ex29436 = (state_29424__$1[(2)]);
var statearr_29441_29556 = state_29424__$1;
(statearr_29441_29556[(5)] = ex29436);


if((ex29436 instanceof Error)){
var statearr_29442_29557 = state_29424__$1;
(statearr_29442_29557[(1)] = (4));

(statearr_29442_29557[(5)] = null);

} else {
throw ex29436;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29425 === (10))){
var inst_29405 = (state_29424[(7)]);
var inst_29415 = (function(){throw inst_29405})();
var state_29424__$1 = state_29424;
var statearr_29443_29558 = state_29424__$1;
(statearr_29443_29558[(2)] = inst_29415);

(statearr_29443_29558[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29425 === (8))){
var inst_29406 = (state_29424[(8)]);
var state_29424__$1 = state_29424;
var statearr_29444_29559 = state_29424__$1;
(statearr_29444_29559[(2)] = inst_29406);

(statearr_29444_29559[(1)] = (9));


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
var todo$frontend$core$toggle_todo_$_state_machine__28022__auto__ = null;
var todo$frontend$core$toggle_todo_$_state_machine__28022__auto____0 = (function (){
var statearr_29445 = [null,null,null,null,null,null,null,null,null,null];
(statearr_29445[(0)] = todo$frontend$core$toggle_todo_$_state_machine__28022__auto__);

(statearr_29445[(1)] = (1));

return statearr_29445;
});
var todo$frontend$core$toggle_todo_$_state_machine__28022__auto____1 = (function (state_29424){
while(true){
var ret_value__28023__auto__ = (function (){try{while(true){
var result__28024__auto__ = switch__28021__auto__(state_29424);
if(cljs.core.keyword_identical_QMARK_(result__28024__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28024__auto__;
}
break;
}
}catch (e29446){var ex__28025__auto__ = e29446;
var statearr_29447_29560 = state_29424;
(statearr_29447_29560[(2)] = ex__28025__auto__);


if(cljs.core.seq((state_29424[(4)]))){
var statearr_29448_29561 = state_29424;
(statearr_29448_29561[(1)] = cljs.core.first((state_29424[(4)])));

} else {
throw ex__28025__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28023__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29562 = state_29424;
state_29424 = G__29562;
continue;
} else {
return ret_value__28023__auto__;
}
break;
}
});
todo$frontend$core$toggle_todo_$_state_machine__28022__auto__ = function(state_29424){
switch(arguments.length){
case 0:
return todo$frontend$core$toggle_todo_$_state_machine__28022__auto____0.call(this);
case 1:
return todo$frontend$core$toggle_todo_$_state_machine__28022__auto____1.call(this,state_29424);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
todo$frontend$core$toggle_todo_$_state_machine__28022__auto__.cljs$core$IFn$_invoke$arity$0 = todo$frontend$core$toggle_todo_$_state_machine__28022__auto____0;
todo$frontend$core$toggle_todo_$_state_machine__28022__auto__.cljs$core$IFn$_invoke$arity$1 = todo$frontend$core$toggle_todo_$_state_machine__28022__auto____1;
return todo$frontend$core$toggle_todo_$_state_machine__28022__auto__;
})()
})();
var state__28187__auto__ = (function (){var statearr_29449 = f__28186__auto__();
(statearr_29449[(6)] = c__28185__auto__);

return statearr_29449;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28187__auto__);
}));

return c__28185__auto__;
});
/**
 * Chama a API para remover um todo.
 */
todo.frontend.core.delete_todo = (function todo$frontend$core$delete_todo(id){
var c__28185__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28186__auto__ = (function (){var switch__28021__auto__ = (function (state_29484){
var state_val_29485 = (state_29484[(1)]);
if((state_val_29485 === (7))){
var inst_29465 = (state_29484[(7)]);
var inst_29468 = cljs.core.ex_data(inst_29465);
var inst_29469 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_29468);
var inst_29470 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_29469,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var state_29484__$1 = state_29484;
var statearr_29486_29563 = state_29484__$1;
(statearr_29486_29563[(2)] = inst_29470);

(statearr_29486_29563[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29485 === (1))){
var state_29484__$1 = state_29484;
var statearr_29487_29564 = state_29484__$1;
(statearr_29487_29564[(2)] = null);

(statearr_29487_29564[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29485 === (4))){
var inst_29450 = (state_29484[(2)]);
var inst_29451 = inst_29450.message;
var inst_29452 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(todo.frontend.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"error","error",-978969032),inst_29451,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"loading","loading",-737050189),false], 0));
var state_29484__$1 = state_29484;
var statearr_29488_29565 = state_29484__$1;
(statearr_29488_29565[(2)] = inst_29452);

(statearr_29488_29565[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29485 === (6))){
var inst_29465 = (state_29484[(7)]);
var inst_29466 = (state_29484[(8)]);
var inst_29465__$1 = (state_29484[(2)]);
var inst_29466__$1 = (inst_29465__$1 instanceof cljs.core.ExceptionInfo);
var state_29484__$1 = (function (){var statearr_29489 = state_29484;
(statearr_29489[(7)] = inst_29465__$1);

(statearr_29489[(8)] = inst_29466__$1);

return statearr_29489;
})();
if(cljs.core.truth_(inst_29466__$1)){
var statearr_29490_29566 = state_29484__$1;
(statearr_29490_29566[(1)] = (7));

} else {
var statearr_29491_29567 = state_29484__$1;
(statearr_29491_29567[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29485 === (3))){
var inst_29482 = (state_29484[(2)]);
var state_29484__$1 = state_29484;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29484__$1,inst_29482);
} else {
if((state_val_29485 === (12))){
var inst_29478 = (state_29484[(2)]);
var inst_29479 = todo.frontend.core.get_todos();
var _ = (function (){var statearr_29492 = state_29484;
(statearr_29492[(4)] = cljs.core.rest((state_29484[(4)])));

return statearr_29492;
})();
var state_29484__$1 = (function (){var statearr_29493 = state_29484;
(statearr_29493[(9)] = inst_29478);

return statearr_29493;
})();
var statearr_29494_29568 = state_29484__$1;
(statearr_29494_29568[(2)] = inst_29479);

(statearr_29494_29568[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29485 === (2))){
var _ = (function (){var statearr_29495 = state_29484;
(statearr_29495[(4)] = cljs.core.cons((5),(state_29484[(4)])));

return statearr_29495;
})();
var inst_29458 = [todo.frontend.core.api_url,"/todos/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join('');
var inst_29459 = [new cljs.core.Keyword(null,"method","method",55703592)];
var inst_29460 = ["DELETE"];
var inst_29461 = cljs.core.PersistentHashMap.fromArrays(inst_29459,inst_29460);
var inst_29462 = todo.frontend.core.fetch_json(inst_29458,inst_29461);
var inst_29463 = cljs.core.async.interop.p__GT_c(inst_29462);
var state_29484__$1 = state_29484;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29484__$1,(6),inst_29463);
} else {
if((state_val_29485 === (11))){
var inst_29465 = (state_29484[(7)]);
var state_29484__$1 = state_29484;
var statearr_29497_29569 = state_29484__$1;
(statearr_29497_29569[(2)] = inst_29465);

(statearr_29497_29569[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29485 === (9))){
var inst_29473 = (state_29484[(2)]);
var state_29484__$1 = state_29484;
if(cljs.core.truth_(inst_29473)){
var statearr_29498_29570 = state_29484__$1;
(statearr_29498_29570[(1)] = (10));

} else {
var statearr_29499_29571 = state_29484__$1;
(statearr_29499_29571[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29485 === (5))){
var _ = (function (){var statearr_29500 = state_29484;
(statearr_29500[(4)] = cljs.core.rest((state_29484[(4)])));

return statearr_29500;
})();
var state_29484__$1 = state_29484;
var ex29496 = (state_29484__$1[(2)]);
var statearr_29501_29572 = state_29484__$1;
(statearr_29501_29572[(5)] = ex29496);


if((ex29496 instanceof Error)){
var statearr_29502_29573 = state_29484__$1;
(statearr_29502_29573[(1)] = (4));

(statearr_29502_29573[(5)] = null);

} else {
throw ex29496;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29485 === (10))){
var inst_29465 = (state_29484[(7)]);
var inst_29475 = (function(){throw inst_29465})();
var state_29484__$1 = state_29484;
var statearr_29503_29574 = state_29484__$1;
(statearr_29503_29574[(2)] = inst_29475);

(statearr_29503_29574[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29485 === (8))){
var inst_29466 = (state_29484[(8)]);
var state_29484__$1 = state_29484;
var statearr_29504_29575 = state_29484__$1;
(statearr_29504_29575[(2)] = inst_29466);

(statearr_29504_29575[(1)] = (9));


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
var todo$frontend$core$delete_todo_$_state_machine__28022__auto__ = null;
var todo$frontend$core$delete_todo_$_state_machine__28022__auto____0 = (function (){
var statearr_29505 = [null,null,null,null,null,null,null,null,null,null];
(statearr_29505[(0)] = todo$frontend$core$delete_todo_$_state_machine__28022__auto__);

(statearr_29505[(1)] = (1));

return statearr_29505;
});
var todo$frontend$core$delete_todo_$_state_machine__28022__auto____1 = (function (state_29484){
while(true){
var ret_value__28023__auto__ = (function (){try{while(true){
var result__28024__auto__ = switch__28021__auto__(state_29484);
if(cljs.core.keyword_identical_QMARK_(result__28024__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28024__auto__;
}
break;
}
}catch (e29506){var ex__28025__auto__ = e29506;
var statearr_29507_29576 = state_29484;
(statearr_29507_29576[(2)] = ex__28025__auto__);


if(cljs.core.seq((state_29484[(4)]))){
var statearr_29508_29577 = state_29484;
(statearr_29508_29577[(1)] = cljs.core.first((state_29484[(4)])));

} else {
throw ex__28025__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28023__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29578 = state_29484;
state_29484 = G__29578;
continue;
} else {
return ret_value__28023__auto__;
}
break;
}
});
todo$frontend$core$delete_todo_$_state_machine__28022__auto__ = function(state_29484){
switch(arguments.length){
case 0:
return todo$frontend$core$delete_todo_$_state_machine__28022__auto____0.call(this);
case 1:
return todo$frontend$core$delete_todo_$_state_machine__28022__auto____1.call(this,state_29484);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
todo$frontend$core$delete_todo_$_state_machine__28022__auto__.cljs$core$IFn$_invoke$arity$0 = todo$frontend$core$delete_todo_$_state_machine__28022__auto____0;
todo$frontend$core$delete_todo_$_state_machine__28022__auto__.cljs$core$IFn$_invoke$arity$1 = todo$frontend$core$delete_todo_$_state_machine__28022__auto____1;
return todo$frontend$core$delete_todo_$_state_machine__28022__auto__;
})()
})();
var state__28187__auto__ = (function (){var statearr_29509 = f__28186__auto__();
(statearr_29509[(6)] = c__28185__auto__);

return statearr_29509;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28187__auto__);
}));

return c__28185__auto__;
});
todo.frontend.core.todo_form = (function todo$frontend$core$todo_form(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.todo-input","div.todo-input",1703680566),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"O que precisa ser feito?",new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"input-text","input-text",-1336297114).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(todo.frontend.core.app_state)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__29510_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(todo.frontend.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"input-text","input-text",-1336297114),p1__29510_SHARP_.target.value);
})], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
todo.frontend.core.create_todo(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"input-text","input-text",-1336297114).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(todo.frontend.core.app_state))], null));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(todo.frontend.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"input-text","input-text",-1336297114),"");
})], null),"Adicionar"], null)], null);
});
todo.frontend.core.todo_list = (function todo$frontend$core$todo_list(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.todo-list","ul.todo-list",461840379),(function (){var iter__5480__auto__ = (function todo$frontend$core$todo_list_$_iter__29511(s__29512){
return (new cljs.core.LazySeq(null,(function (){
var s__29512__$1 = s__29512;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__29512__$1);
if(temp__5804__auto__){
var s__29512__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__29512__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__29512__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__29514 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__29513 = (0);
while(true){
if((i__29513 < size__5479__auto__)){
var todo__$1 = cljs.core._nth(c__5478__auto__,i__29513);
cljs.core.chunk_append(b__29514,cljs.core.with_meta(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.todo-item","li.todo-item",-909811764),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),new cljs.core.Keyword("todos","completed","todos/completed",-107244354).cljs$core$IFn$_invoke$arity$1(todo__$1)))?"completed":null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.todo-checkbox","input.todo-checkbox",-1710678468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"checked","checked",-50955819),cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((0),new cljs.core.Keyword("todos","completed","todos/completed",-107244354).cljs$core$IFn$_invoke$arity$1(todo__$1)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (i__29513,todo__$1,c__5478__auto__,size__5479__auto__,b__29514,s__29512__$2,temp__5804__auto__){
return (function (){
return todo.frontend.core.toggle_todo(new cljs.core.Keyword("todos","id","todos/id",-1277077177).cljs$core$IFn$_invoke$arity$1(todo__$1));
});})(i__29513,todo__$1,c__5478__auto__,size__5479__auto__,b__29514,s__29512__$2,temp__5804__auto__))
], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.todo-title","span.todo-title",-1255980881),new cljs.core.Keyword("todos","title","todos/title",727314196).cljs$core$IFn$_invoke$arity$1(todo__$1)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.delete-btn","button.delete-btn",369140748),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__29513,todo__$1,c__5478__auto__,size__5479__auto__,b__29514,s__29512__$2,temp__5804__auto__){
return (function (){
return todo.frontend.core.delete_todo(new cljs.core.Keyword("todos","id","todos/id",-1277077177).cljs$core$IFn$_invoke$arity$1(todo__$1));
});})(i__29513,todo__$1,c__5478__auto__,size__5479__auto__,b__29514,s__29512__$2,temp__5804__auto__))
], null),"X"], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword("todos","id","todos/id",-1277077177).cljs$core$IFn$_invoke$arity$1(todo__$1)], null)));

var G__29579 = (i__29513 + (1));
i__29513 = G__29579;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__29514),todo$frontend$core$todo_list_$_iter__29511(cljs.core.chunk_rest(s__29512__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__29514),null);
}
} else {
var todo__$1 = cljs.core.first(s__29512__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.todo-item","li.todo-item",-909811764),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),new cljs.core.Keyword("todos","completed","todos/completed",-107244354).cljs$core$IFn$_invoke$arity$1(todo__$1)))?"completed":null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.todo-checkbox","input.todo-checkbox",-1710678468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"checked","checked",-50955819),cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((0),new cljs.core.Keyword("todos","completed","todos/completed",-107244354).cljs$core$IFn$_invoke$arity$1(todo__$1)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (todo__$1,s__29512__$2,temp__5804__auto__){
return (function (){
return todo.frontend.core.toggle_todo(new cljs.core.Keyword("todos","id","todos/id",-1277077177).cljs$core$IFn$_invoke$arity$1(todo__$1));
});})(todo__$1,s__29512__$2,temp__5804__auto__))
], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.todo-title","span.todo-title",-1255980881),new cljs.core.Keyword("todos","title","todos/title",727314196).cljs$core$IFn$_invoke$arity$1(todo__$1)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.delete-btn","button.delete-btn",369140748),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (todo__$1,s__29512__$2,temp__5804__auto__){
return (function (){
return todo.frontend.core.delete_todo(new cljs.core.Keyword("todos","id","todos/id",-1277077177).cljs$core$IFn$_invoke$arity$1(todo__$1));
});})(todo__$1,s__29512__$2,temp__5804__auto__))
], null),"X"], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword("todos","id","todos/id",-1277077177).cljs$core$IFn$_invoke$arity$1(todo__$1)], null)),todo$frontend$core$todo_list_$_iter__29511(cljs.core.rest(s__29512__$2)));
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

var root_29580 = reagent.dom.client.create_root.cljs$core$IFn$_invoke$arity$1(document.getElementById("app"));
root_29580.render(reagent.core.as_element.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [todo.frontend.core.app], null)));

return todo.frontend.core.get_todos();
});
goog.exportSymbol('todo.frontend.core.init', todo.frontend.core.init);

//# sourceMappingURL=todo.frontend.core.js.map
