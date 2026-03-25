# Delivery Management Platform (Frontend + Backend + DevOps)

This repository demonstrates a production-style baseline for a delivery service that needs frequent pricing/menu updates without full-system downtime.

## Problem Mapping

- Real-time rollout support: stable/canary pricing logic exposed through API query versioning.
- No database dependency: menus and restaurant data are hardcoded for assignment/demo use.
- Deployment readiness: Dockerized frontend/backend, Kubernetes Helm chart, and GitHub Actions CI/CD.

## Architecture

- Frontend: React + Vite UI for city-based menu view and pricing simulation.
- Backend: Express API with health checks, city/menu endpoints, and pricing algorithm versions.
- Container Runtime: Docker multi-stage images.
- Orchestration: Helm chart deploying both services with probes.
- CI/CD: GitHub Actions pipeline for test/build, image publish, and Helm deployment.

## API Endpoints

- `GET /health` -> service health
- `GET /api/cities` -> available city list
- `GET /api/menus?city=Bangalore` -> menu snapshot per city
- `GET /api/pricing/quote?city=Bangalore&distanceKm=4&peak=true&version=canary` -> delivery fee quote

## Local Development

### 1) Backend

```bash
cd backend
npm install
npm test
npm run dev
```

Backend runs at `http://localhost:8080`.

### 2) Frontend

```bash
cd frontend
npm install
npm run dev
```

Frontend runs at `http://localhost:5173` and proxies `/api` to backend.

## Run with Docker Compose

```bash
docker compose up --build
```

- Frontend: `http://localhost:3000`
- Backend API: `http://localhost:8080`

## Deploy with Helm

1. Update image repositories in `delivery-app/values.yaml`.
2. Install/upgrade chart:

```bash
helm upgrade --install delivery-app ./delivery-app \
	--namespace delivery-app \
	--create-namespace
```

3. Optional ingress:

```bash
helm upgrade --install delivery-app ./delivery-app \
	--namespace delivery-app \
	--set ingress.enabled=true \
	--set ingress.host=delivery.local
```

## CI/CD Pipeline

Workflow file: `.github/workflows/ci.yml`

Pipeline stages:

1. Install dependencies.
2. Run backend tests.
3. Build frontend.
4. Validate Docker builds (PR + push).
5. On push to main/master:
	 - Push backend/frontend Docker images to Docker Hub.
	 - Deploy to Kubernetes using Helm.

Required GitHub Secrets:

- `DOCKERHUB_USERNAME`
- `DOCKERHUB_TOKEN`
- `KUBE_CONFIG_BASE64` (base64 kubeconfig content)

## Verified Commands in This Repo

These commands were executed successfully:

```bash
cd backend && npm test
cd frontend && npm run build
helm lint ./delivery-app
```
