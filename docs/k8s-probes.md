# Kubernetes Liveness and Readiness Probes

## Overview

This document explains how liveness and readiness probes improve application reliability in Kubernetes by enabling automatic recovery and safe traffic management.

Kubernetes continuously monitors application health using these probes and takes corrective actions when needed.

---

## Liveness Probe

The liveness probe checks whether the application is still functioning correctly after it has started.

It answers the question:

> "Is the application alive and working?"

If the liveness probe fails:

* Kubernetes assumes the application is stuck or broken
* The container is automatically restarted

This helps recover from situations where:

* the application becomes unresponsive
* there is a memory leak or internal error
* the application is running but not working correctly

This behavior is part of Kubernetes' **self-healing mechanism**.

---

## Readiness Probe

The readiness probe checks whether the application is ready to handle incoming requests.

It answers the question:

> "Can this application safely receive traffic right now?"

If the readiness probe fails:

* The Pod is marked as **Not Ready**
* The Pod is removed from service endpoints
* No traffic is sent to the Pod

Unlike liveness, the container is **not restarted**.

This is useful when:

* the application is still starting
* dependencies (like databases or APIs) are not ready
* the application is temporarily overloaded

---

## Key Difference

* **Liveness Probe** → ensures the application is running correctly and restarts it if needed
* **Readiness Probe** → ensures the application is ready to serve users and controls traffic

In simple terms:

* Liveness = *restart the app if broken*
* Readiness = *stop sending traffic if not ready*

---

## Behavior in This Setup

In this configuration:

* The liveness probe checks the root endpoint `/` → this succeeds
* The readiness probe checks `/ready` → this fails intentionally

### Result:

* The container continues running (liveness passes)
* The Pod is marked as **Not Ready**
* Kubernetes does not send any traffic to the Pod

This demonstrates that:

* Kubernetes does not restart a healthy container unnecessarily
* It prevents users from accessing an unhealthy or unprepared application

---

## Why Both Probes Are Needed

Using only one probe is not sufficient:

### If only liveness probe is used:

* The application might receive traffic even when not ready
* Users may experience errors or slow responses

### If only readiness probe is used:

* The application may remain broken without being restarted

### Using both together:

* Liveness ensures recovery from failures
* Readiness ensures safe traffic handling

This combination improves:

* system reliability
* fault tolerance
* user experience

---

## Real-World Example

Consider a delivery management system:

* When the app starts, it needs time to connect to the database
* During this time, readiness probe prevents traffic
* If the app later crashes or hangs, the liveness probe restarts it

This ensures:

* users never see broken responses
* the system recovers automatically

---

## Conclusion

Liveness and readiness probes work together to provide:

* automatic failure recovery (self-healing)
* intelligent traffic routing
* improved stability in production environments

They are essential for building reliable and scalable cloud-native applications.
