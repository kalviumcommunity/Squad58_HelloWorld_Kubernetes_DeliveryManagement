# Docker Image Management and Registry Usage

## Overview

This document explains how the frontend Docker image was tagged, pushed to a registry, and pulled for verification.

---

## Image Tagging

The local image was tagged using:

docker tag frontend-app <username>/frontend-app:v1

Tagging is important because it uniquely identifies image versions.

---

## Pushing Image to Registry

The image was pushed to Docker Hub:

docker push <username>/frontend-app:v1

This uploads the image to a remote registry, making it accessible to other systems and environments.

---

## Pulling Image

To verify the image, it was pulled back:

docker pull <username>/frontend-app:v1

This ensures the image is available and can be used in other environments.

---

## Tagging Strategy

* v1 → stable version
* future versions can use v2, v3, etc.

Using version-based tags helps track changes and supports rollback if needed.

---

## Role in CI/CD

In CI/CD pipelines:

* images are built during CI
* pushed to registry
* pulled by deployment systems

This ensures consistent deployments across environments.

---

## Public vs Private Registry

Docker Hub can be public or private:

* Public → open access
* Private → restricted access

For this project, a public registry is used for simplicity.

---

## Conclusion

Using a registry allows images to be shared, versioned, and reused across environments, making deployments more reliable and scalable.
