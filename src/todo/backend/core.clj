(ns todo.backend.core
  (:require [ring.adapter.jetty :as jetty]
            [reitit.ring :as ring]
            [todo.backend.handler :as handler])
  (:gen-class))

(def app-routes
  (ring/router
   [["/api/hello"
     {:get {:handler handler/hello-handler}}]]))

(def app
  (ring/ring-handler
   app-routes
   (ring/create-default-handler)))

(defn -main [& args]
  (let [port (Integer/parseInt (or (first args) "3000"))]
    (jetty/run-jetty #'app {:port port :join? false})
    (println (str "Servidor iniciado na porta " port))))
