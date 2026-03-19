# Container Build, Run, and Debugging

## Overview

This document explains how the frontend container was built, executed, and debugged locally.

---

## Step 1: Build the Image

The Docker image was built using the Dockerfile:

docker build -t frontend-app ./frontend

This step validates that the Dockerfile is correctly configured.

---

## Step 2: Run the Container

The container was started using:

docker run -p 5173:5173 frontend-app

Initially, the container exited immediately after starting.

---

## Step 3: Identify the Issue

Logs were inspected using:

docker logs <container_id>

The logs indicated that the command being executed was incorrect.

The Dockerfile was using:

CMD ["npm", "start"]

However, the frontend project uses Vite and requires:

npm run preview

---

## Step 4: Fix the Issue

The Dockerfile was updated to:

CMD ["npm", "run", "preview"]

---

## Step 5: Validate the Fix

After rebuilding and running the container again, the application started successfully and remained running.

---

## Key Learnings

* Container logs are the primary debugging tool
* Incorrect startup commands are a common cause of container failure
* Debugging involves identifying the issue, fixing it, and validating the result

---

## Conclusion

This exercise demonstrates how container issues can be diagnosed and resolved using logs and proper understanding of runtime behavior.
