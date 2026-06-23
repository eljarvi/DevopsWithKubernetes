## Log Output Application

### How to run locally

Build the image:
docker build -t log-output .

Run the container: 
docker run log-output

### How to run in Kubernetes
kubectl apply -f manifests/deployment.yaml

kubectl get pods

kubectl logs PODNAME