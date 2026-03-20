# Local Kubernetes Cluster Setup

## Overview

This document explains how a local Kubernetes cluster was set up and verified for the Delivery Management System project.

---

## Tool Used

Minikube was used to create the local Kubernetes cluster.

Minikube allows running a single-node Kubernetes cluster locally for development and testing.

---

## Cluster Creation

The cluster was started using:

minikube start

This command initializes a local Kubernetes cluster with all required components.

---

## Verifying Cluster Status

The cluster was verified using:

kubectl cluster-info

This confirms that the control plane is running and accessible.

---

## Checking Nodes

kubectl get nodes

This command confirms that the worker node is ready and part of the cluster.

---

## kubectl Connectivity

kubectl is used to interact with the Kubernetes cluster.

It communicates with the Kubernetes API server.

Successful execution of commands confirms proper connectivity.

---

## Integration with Project

This local cluster will be used to:

* Deploy frontend and backend services as pods
* Test containerized applications locally
* Validate Kubernetes configurations before production

---

## Importance of Local Setup

A local Kubernetes cluster helps:

* Debug deployment issues early
* Test scalability and behavior
* Simulate real-world cloud environments

---

## Conclusion

This setup provides a foundation for deploying and managing applications in Kubernetes for the project.
