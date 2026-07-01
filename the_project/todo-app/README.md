# Todo App

## Running with Docker

docker build -t todo-app .

docker run -e PORT="PORT" -p "HOSTPORT":"CONTAINER-PORT" todo-app

## Deploy with Kubernetes

kubectl apply -f manifests/deployment.yaml

kubectl apply -f manifests/service.yaml






