# Log Output Application

## Running locally

Build the image:

```bash
docker build -t log-output .
```

Run the container:

```bash
docker run -p 3000:3000 log-output
```

Open:

```
http://localhost:3000/status
```

## Running in Kubernetes

Deploy the application:

```bash
kubectl apply -f manifests/
```

Check resources:

```bash
kubectl get pods
kubectl get svc
kubectl get ingress
```

Access the application through the Ingress:

```
http://localhost:8081/status
```