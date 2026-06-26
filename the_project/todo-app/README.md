# Todo App

## Running with Docker

docker build -t todo-app .

docker run -e PORT="PORT" -p "HOSTPORT":"CONTAINER-PORT" todo-app

## Deploy with Kubernetes and check that it works

kubectl apply -f manifests/deployment.yaml

kubectl get pods

kubectl port-forward todo-app-dep-7648bc994d-p5fwx HOSTPORT:PORT


