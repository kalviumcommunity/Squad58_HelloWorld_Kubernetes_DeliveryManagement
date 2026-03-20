# Kubernetes Cluster Architecture for Delivery Management System

## Introduction

This document explains the architecture of a Kubernetes cluster and how its components work together to manage the Delivery Management System.

---

## Kubernetes Cluster Overview

A Kubernetes cluster consists of two main components:

* Control Plane
* Worker Nodes

The control plane manages the system, while worker nodes run the application workloads.

---

## Control Plane Components

The control plane is responsible for managing the overall state of the cluster.

### API Server

* Acts as the central communication hub
* All components interact through the API server

### Scheduler

* Decides which worker node should run a pod
* Assigns workloads based on resource availability

### Controller Manager

* Ensures the system matches the desired state
* Automatically fixes issues such as failed pods

---

## Worker Node Components

Worker nodes are responsible for running the application.

### Kubelet

* Communicates with the control plane
* Ensures containers are running as expected

### Container Runtime

* Runs the actual containers (e.g., Docker)

---

## Interaction Between Components

1. Developer defines desired state (e.g., number of pods)
2. Control plane monitors actual state
3. If mismatch occurs, controller manager detects it
4. Scheduler assigns new pods to worker nodes
5. Kubelet runs containers on worker nodes

---

## Application to This Project

In this Delivery Management System:

* Frontend and backend services run as pods
* Kubernetes distributes them across worker nodes
* Control plane ensures availability and scaling

---

## Self-Healing Behavior

If a pod crashes:

* Kubelet reports failure
* Controller manager detects mismatch
* Scheduler assigns a replacement pod
* System restores desired state automatically

---

## Conclusion

Kubernetes uses control plane and worker node interaction to ensure application reliability, scalability, and automated recovery in production environments.
