(ns todo.backend.db
  "Este namespace gerencia os dados dos 'todos'
   usando um banco de dados persistente SQLite."
  (:require [next.jdbc :as jdbc]))

;; --- 1. A Configuração (Especificação do Banco) ---
(def db-spec {:dbtype "sqlite"
              :dbname "prod.db"})

;; --- 2. Função de Inicialização ---
(defn initialize-database!
  "Cria a tabela 'todos' no banco de dados se ela não existir."
  []
  (jdbc/execute! db-spec ["
    CREATE TABLE IF NOT EXISTS todos (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT,
      description TEXT,
      completed BOOLEAN DEFAULT 0,
      created_at TEXT
    )
  "]))

;; --- 3. Funções do CRUD ---
(defn get-all-todos
  "Retorna uma lista com todos os 'todos' no banco."
  []
  (jdbc/execute! db-spec ["SELECT * FROM todos ORDER BY created_at DESC"]))

(defn create-todo
  "Cria um novo 'todo', salva no banco e o retorna."
  [todo-data]
  (jdbc/execute-one! db-spec ["
    INSERT INTO todos (title, description, completed, created_at)
    VALUES (?, ?, ?, ?)
    RETURNING *"
    (:title todo-data)
    (:description todo-data)
    0
    (str (java.time.Instant/now))]))

(defn toggle-todo!
  "Alterna o status 'completed' de um todo no banco."
  [id]
  (jdbc/execute-one! db-spec ["
    UPDATE todos
    SET completed = (1 - completed)
    WHERE id = ?
    RETURNING *"
    id]))

(defn delete-todo!
  "Remove um todo do banco. Retorna o todo removido, ou nil se não existir."
  [id]
  (jdbc/execute-one! db-spec ["
    DELETE FROM todos
    WHERE id = ?
    RETURNING *"
    id]))