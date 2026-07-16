# Log Output Application

## Running in Kubernetes

Deploy the application:

```bash
kubectl apply -f manifests
```

Check resources:

```bash
kubectl get pods
kubectl get svc
kubectl get ingress
```

Access the application through the Ingress:

```
http://localhost:8081
```