# Todo List — Clojure/ClojureScript

> 🎥 **Vídeo de Apresentação:** [Assistir à demonstração e explicação da arquitetura](https://drive.google.com/drive/u/1/folders/1GGtm0kptp7wcMYBHQShBbfvNtA0m_MYX)

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

## Pré-requisitos e versões

Para reproduzir o ambiente do tutorial, use as versões abaixo. O `shadow-cljs` deve ter a mesma versão no npm e no `deps.edn`.

| Ferramenta / Biblioteca | Versão |
| :--- | :--- |
| Java (JDK) | 11 ou superior (17 ou 21 recomendado) |
| [Clojure CLI](https://clojure.org/guides/install_clojure) (`clj` / `clojure`) | 1.11+ |
| Node.js (`node` / `npm`) | 18 ou superior |
| **`shadow-cljs`** (npm e `deps.edn`) | **`2.28.23`** |
| `reagent/reagent` | `2.0.0` |
| `react` / `react-dom` (npm) | `19.2.0` |
| `ring/ring-core` / `ring/ring-jetty-adapter` | `1.12.2` |
| `metosin/reitit-ring` | `0.7.0` |
| `ring/ring-json` | `0.5.1` |
| `ring-cors/ring-cors` | `0.1.13` |
| `seancorfield/next.jdbc` | `1.2.659` |
| `org.xerial/sqlite-jdbc` | `3.45.3.0` |

---

## Instruções de Execução (Como Rodar Localmente)

### 1. Clonar o repositório e instalar as dependências do frontend

```bash
git clone https://github.com/Mateus-dutravale/clojure-todo-list.git
cd clojure-todo-list
npm ci
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