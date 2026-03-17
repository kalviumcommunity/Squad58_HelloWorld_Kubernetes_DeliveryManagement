# Delivery Management System (Sprint #3)

## Overview

This project is part of Sprint #3 and focuses on building a cloud-native Delivery Management System using modern DevOps practices.

The objective is to demonstrate:

* Containerized application development
* Kubernetes-based deployment
* CI/CD pipeline integration
* Structured Git workflows

---

## Project Structure

```
.
├── backend/        # Node.js backend services
├── frontend/       # React (Vite) frontend application
└── README.md
```

---

## Tech Stack

### Backend

* Node.js
* Express

### Frontend

* React
* Vite

### DevOps Tools

* Docker
* Kubernetes (Minikube / Docker Desktop / Kind)
* GitHub Actions (CI/CD)
* Helm (optional)

---

## Getting Started

### 1. Clone the Repository

```
git clone https://github.com/<your-username>/Squad58_HelloWorld_Kubernetes_DeliveryManagement.git
cd Squad58_HelloWorld_Kubernetes_DeliveryManagement
```

---

### 2. Run Backend

```
cd backend
npm install
npm start
```

---

### 3. Run Frontend

```
cd frontend
npm install
npm run dev
```

---

## CI/CD Pipeline

This project includes a Continuous Integration pipeline using GitHub Actions.

### Pipeline Features

* Automatically triggers on push and pull requests
* Installs dependencies
* Builds the frontend application
* Fails early if build issues are detected

### Pipeline Location

```
.github/workflows/ci.yml
```

---

## Git Workflow

This repository follows a structured Git workflow:

### Branching Strategy

* `main` → stable production-ready code
* `feature/*` → development branches for new features or improvements

### Commit Practices

* Use small, meaningful commits
* Follow clear commit messages describing changes

Example:

```
Add CI pipeline for automated build validation
Update README with project structure
Fix frontend build issue
```

---

## Contribution Guidelines

1. Create a new branch from `main`:

```
git checkout -b feature/your-feature-name
```

2. Make changes with clear commits:

```
git commit -m "Describe your change"
```

3. Push branch:

```
git push origin feature/your-feature-name
```

4. Create a Pull Request for review

---

## DevOps Practices Implemented

* Continuous Integration using GitHub Actions
* Automated build validation
* Structured repository organization
* Branch-based development workflow

---

## Future Improvements

* Add automated testing stage in CI pipeline
* Integrate Docker image build and push
* Deploy application to Kubernetes cluster
* Add Helm charts for deployment automation

---

## Conclusion

This project establishes a foundation for DevOps-driven development by combining version control discipline, CI/CD automation, and scalable deployment practices.
