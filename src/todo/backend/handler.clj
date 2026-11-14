(ns todo.backend.handler
  "Este namespace define nossas 'funções de resposta' (Handlers)."
  (:require [todo.backend.db :as db]
            [clojure.string :as str]))

(defn hello-handler [_request]
  {:status 200
   :body "Hello, World!"})

;; --- Handler para Listar Todos ---
(defn list-todos-handler
  "Handler para a rota GET /api/todos."
  [_request]
  {:status 200
   :body {:todos (db/get-all-todos)}})

;; --- Handler para Criar um Todo ---
(defn create-todo-handler
  "Handler para a rota POST /api/todos."
  [request]
  (let [todo-data (:body request)
        title (:title todo-data)]
    (if (and title (not (str/blank? title)))
      (let [new-todo (db/create-todo todo-data)]
        {:status 201
         :body new-todo})
      {:status 400
       :body {:error "O 'título' (title) é obrigatório"}})))

;; --- Handler para Alternar (toggle) um Todo ---
(defn toggle-todo-handler
  "Handler para a rota POST /api/todos/:id/toggle."
  [request]
  (let [id (Integer/parseInt (get-in request [:path-params :id]))]
    (if-let [updated-todo (db/toggle-todo! id)]
      {:status 200 :body updated-todo}
      {:status 404 :body {:error "Todo não encontrado"}})))

;; --- Handler para Deletar um Todo ---
(defn delete-todo-handler
  "Handler para a rota DELETE /api/todos/:id."
  [request]
  (let [id (Integer/parseInt (get-in request [:path-params :id]))]
    (if-let [deleted-todo (db/delete-todo! id)]
      {:status 200 :body deleted-todo}
      {:status 404 :body {:error "Todo não encontrado"}})))