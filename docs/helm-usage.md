# Helm Usage for Kubernetes Deployment

## Overview

This document explains how Helm is used to manage Kubernetes deployments in the Delivery Management System.

---

## What is Helm

Helm is a package manager for Kubernetes that simplifies deployment and management of applications.

Instead of manually applying multiple YAML files, Helm allows managing them as a single package called a chart.

---

## Helm Installation

Helm was installed and verified using:

helm version

---

## Helm Chart

A Helm chart was created using:

helm create delivery-app

This chart includes:

* Deployment configuration
* Service configuration
* Default values in values.yaml

---

## Managing Application with Helm

The application was deployed using:

helm install delivery-release ./delivery-app

Helm creates a release which represents a running instance of the application.

---

## values.yaml

The values.yaml file is used to manage configuration such as:

* number of replicas
* container image
* environment-specific settings

This allows easy customization for different environments.

---

## Advantages Over Raw YAML

Helm simplifies:

* deployment (single command instead of multiple files)
* upgrades (helm upgrade)
* rollback (helm rollback)

---

## Conclusion

Helm improves consistency, reduces errors, and simplifies Kubernetes application management.
