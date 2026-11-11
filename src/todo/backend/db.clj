(ns todo.backend.db
  "Este namespace gerencia os dados dos 'todos' em memória.")

(def todos-db (atom {}))

(def next-id (atom 0))

(defn get-all-todos
  "Retorna uma lista com todos os 'todos' no banco."
  []
  (vec (vals @todos-db)))

(defn create-todo
  "Cria um novo 'todo', salva no banco e o retorna."
  [todo-data] 
  (let [ id (swap! next-id inc)
        new-todo (assoc todo-data
                        :id id
                        :completed false
                        :created-at (str (java.time.Instant/now)))]

    (swap! todos-db assoc id new-todo)
    new-todo))