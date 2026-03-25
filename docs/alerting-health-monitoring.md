# Alerting and Health Monitoring using Prometheus

## Overview

This document explains how alerting is implemented using Prometheus to detect unhealthy states in a Kubernetes environment.

Monitoring helps observe system behavior, but alerting ensures that failures are detected and acted upon.

---

## Alert Configuration

An alert named **PodNotReady** is configured.

It is based on the following condition:

kube_pod_status_ready{condition="false"} == 1

This condition checks whether any pod is not in a ready state.

---

## Alert Logic

The alert triggers when:

* A pod is not ready
* The condition persists for more than 1 minute

The delay is used to avoid false positives caused by temporary restarts.

---

## Why This Alert Matters

A pod in a not ready state cannot serve traffic.

This directly affects application availability and user experience.

Detecting this condition early helps prevent larger failures.

---

## Failure Simulation

The alert was tested by simulating failure using:

* Deleting a pod
* Scaling deployment to zero replicas

This caused the alert to transition from inactive to firing state.

---

## Alert Behavior

The alert goes through the following states:

* Inactive → No issue
* Pending → Condition detected but waiting
* Firing → Condition confirmed

---

## Recovery

When the system returns to a healthy state, the alert automatically clears.

---

## Importance of Alerting

Monitoring alone is not sufficient because it requires manual observation.

Alerting ensures that engineers are notified immediately when something goes wrong.

---

## Conclusion

Alerting enables proactive detection of failures and improves system reliability.

It is an essential component of production-grade systems.
