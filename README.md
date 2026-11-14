# Todo List — Clojure/ClojureScript

> 🎥 **Vídeo de Apresentação:** [Assistir à demonstração e explicação da arquitetura](COLE_O_LINK_DO_VIDEO_AQUI)

**Integrantes da Dupla:**
- Emerson Paulo Pinheiro Muniz
- Mateus Dutra Vale

**Tutorial original:** [Tutorial Clojure/ClojureScript: Construindo uma Aplicação Persistente e Reativa](https://lambdageo-edu.github.io/lambdageo-tutorials/clojure/)

---

## Descrição do Projeto

Aplicação full-stack de lista de tarefas (Todo List), construída de forma incremental para estudar a arquitetura de aplicações funcionais modernas:

- **Backend:** Clojure, com [Ring](https://github.com/ring-clojure/ring) (servidor HTTP Jetty), [Reitit](https://github.com/metosin/reitit) (roteamento) e `ring-cors`, expondo uma API REST com CRUD completo.
- **Banco de Dados:** SQLite, acessado via [next.jdbc](https://github.com/seancorfield/next-jdbc), garantindo persistência real em disco (`prod.db`).
- **Frontend:** ClojureScript com [Reagent](https://github.com/reagent-project/reagent) (React), [Shadow-CLJS](https://github.com/thheller/shadow-cljs) e `core.async` (`go` / `<p!`), consumindo a API REST de forma assíncrona via `fetch`.

---

## Pré-requisitos

| Ferramenta | Versão mínima |
| :--- | :--- |
| Java (JDK) | 11+ |
| [Clojure CLI](https://clojure.org/guides/install_clojure) (`clj`) | 1.11+ |
| Node.js (`node` / `npm`) | 18+ |

---

## Instruções de Execução (Como Rodar Localmente)

### 1. Clonar o repositório e instalar as dependências do frontend

```bash
git clone [https://github.com/Mateus-dutravale/clojure-todo-list.git](https://github.com/Mateus-dutravale/clojure-todo-list.git)
cd clojure-todo-list
npm install
```

### 2. Iniciar os dois servidores simultaneamente

Abra dois terminais na pasta raiz do projeto:

* **Terminal 1 — Backend (API na porta 3000):**

```bash
clj -M:run
```

Na primeira execução, as dependências Clojure serão baixadas e o arquivo de banco `prod.db` será criado automaticamente.

* **Terminal 2 — Frontend (Servidor de desenvolvimento na porta 8000):**

```bash
npx shadow-cljs watch app
```

Aguarde até aparecer a mensagem `Build completed`.

### 3. Acessar a aplicação

Abra o navegador em: **[http://localhost:8000](http://localhost:8000)**

---

## Endpoints da API

| Método | Rota | Descrição |
| :--- | :--- | :--- |
| `GET` | `/api/hello` | Rota de teste inicial ("Hello, World!") |
| `GET` | `/api/todos` | Lista todas as tarefas cadastradas |
| `POST` | `/api/todos` | Cria uma nova tarefa (`{"title": "..."}`) |
| `POST` | `/api/todos/:id/toggle` | Alterna o status da tarefa entre concluída e pendente |
| `DELETE` | `/api/todos/:id` | Remove uma tarefa pelo ID |