## Log Output Application

### How to run locally

Build the image:
docker build -t log-output .

Run the container: 
docker run log-output

### How to run in Kubernetes

kubectl create deployment log-output --image=elleniini/log-output:1.1
kubectl get pods
kubectl logs <pod-name>