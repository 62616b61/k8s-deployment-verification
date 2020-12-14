# k8s-deployment-verification

> Kubernetes Deployment Verification CLI tool

## Usage
Pipe deployment manifest file into `check.js`.
```bash
cat manifest.yaml | ./check.js
```

Explicitly specify GitHub Deployment environment with `--env` parameter.
```bash
cat manifest.yaml | ./check.js --env staging
```

Provide manifests directly from K8S cluster.
```bash
kubectl get deploy app -o yaml | ./check.js
```

Make sure `GITHUB_TOKEN` is available as environment variable if trying to access a private repository.
```bash
export GITHUB_TOKEN=...

or

GIHUB_TOKEN=... cat manifest.yaml | ./check.js
```
