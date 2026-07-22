## Docker image

```
elleniini/ping-pong:1.11
```

## Deploy to Kubernetes

Apply the Deployment and Service:

```bash
kubectl apply -f manifests
```

The application shares the Ingress with the Log Output application. After updating the shared Ingress, requests to:

```
/pingpong
```

will be routed to this application.

