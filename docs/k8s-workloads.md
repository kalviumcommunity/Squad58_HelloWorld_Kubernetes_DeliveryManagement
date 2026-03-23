# Kubernetes Pods and ReplicaSets

## Overview

This document explains how Pods and ReplicaSets are used in the project to manage application workloads.

---

## Pods

A Pod is the smallest unit in Kubernetes that runs a container.

In this project:

* A frontend container is deployed inside a Pod
* Labels are used to identify the Pod

---

## ReplicaSet

A ReplicaSet ensures that a specified number of Pods are always running.

In this project:

* 3 replicas of the frontend Pod are maintained
* Labels and selectors connect ReplicaSet with Pods

---

## Labels and Selectors

Labels:

* app: frontend

Selectors:

* match Pods with label app: frontend

This ensures correct management of Pods.

---

## Desired State Management

Kubernetes maintains a desired state.

If a Pod is deleted:

* ReplicaSet detects the change
* Automatically creates a new Pod

---

## Importance

ReplicaSets provide:

* High availability
* Fault tolerance
* Automatic recovery

---

## Conclusion

Pods and ReplicaSets allow Kubernetes to manage application instances reliably and maintain system stability.
