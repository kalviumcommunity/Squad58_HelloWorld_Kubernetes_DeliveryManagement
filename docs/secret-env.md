# Secrets and Environment Variables in CI/CD using GitHub Actions

## Overview

This document explains how sensitive information such as API keys and credentials are securely managed in a CI/CD pipeline using GitHub Actions.

In this implementation, secrets are not stored in the source code. Instead, they are securely stored in GitHub and accessed only during workflow execution. This ensures that sensitive data is protected from exposure.

---

## What are Secrets

Secrets are sensitive pieces of information such as:

* API keys
* Authentication tokens
* Database passwords

These values must never be hardcoded in the codebase or workflow files because they can be exposed to anyone with repository access.

---

## Secure Storage of Secrets

Secrets are stored in GitHub using:

Repository → Settings → Secrets and Variables → Actions

In this project, a secret named **API_KEY** is added.

Key points:

* The value is encrypted and hidden
* It cannot be viewed after saving
* It is not stored in the repository code

This ensures that sensitive data remains secure even if the repository is shared publicly.

---

## Using Secrets in CI Workflow

The CI workflow is defined in:

.github/workflows/ci.yml

Secrets are accessed using the following syntax:

${{ secrets.API_KEY }}

In the workflow, the secret is used as an environment variable:

* The secret is assigned to an environment variable
* It is used only during execution
* It is never printed or exposed

This demonstrates secure handling of sensitive data.

---

## Runtime Injection of Secrets

Secrets are injected only at runtime when the workflow is executed.

This means:

* Secrets are not stored in files
* They exist temporarily during execution
* They are automatically masked in logs

This approach prevents accidental exposure of sensitive data.

---

## CI Pipeline Steps

The pipeline performs the following steps:

1. Checkout the repository
2. Setup Node.js environment
3. Install dependencies
4. Inject secret securely
5. Run tests

The secret is used during execution without being exposed in the code or logs.

---

## Security Best Practices Followed

* Secrets are not hardcoded in code or YAML
* Secrets are stored using GitHub secret manager
* Secrets are accessed using `${{ secrets.NAME }}`
* No sensitive values are printed in logs
* Dummy values are used for demonstration

These practices ensure a secure CI/CD pipeline.

---

## Scenario Explanation

### Problem

A developer adds an API key directly inside the CI workflow file.

---

### Why this is a serious issue

* The API key becomes visible in the repository
* Anyone with access can misuse it
* It may lead to data leaks or unauthorized access
* Even if removed later, it remains in Git history

---

### How secret managers prevent this

GitHub Actions protects secrets by:

* Encrypting values
* Restricting access
* Masking secrets in logs
* Allowing usage only during workflow execution

---

### How this pipeline handles secrets

In this pipeline:

* A dummy API key is stored in GitHub Secrets
* It is accessed using `${{ secrets.API_KEY }}`
* It is injected only at runtime
* It is not visible in code or logs

---

### Immediate steps if a secret is exposed

If a secret is accidentally committed:

1. Revoke the exposed key immediately
2. Generate a new key
3. Remove the key from the repository
4. Update the workflow to use secrets properly
5. Monitor for any misuse

---

## Conclusion

Secure secret management is essential for protecting applications and maintaining trust.

By using GitHub Actions secrets:

* Sensitive data is stored securely
* Secrets are injected only at runtime
* Exposure risks are minimized

This ensures that the CI/CD pipeline is secure, reliable, and production-ready.

---


