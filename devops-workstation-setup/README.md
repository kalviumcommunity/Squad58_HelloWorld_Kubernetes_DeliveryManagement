# DevOps Workstation Setup Verification

## Operating System

Windows 11

## Installed DevOps Tools

The following tools were installed and verified on the workstation:

* Git
* Docker
* kubectl (Kubernetes CLI)
* Helm (Kubernetes package manager)

## Verification Commands

The following commands were executed to verify that each tool is installed and functioning correctly:

```
git --version
docker --version
docker run hello-world
kubectl version --client
helm version
kubectl cluster-info
```

Screenshots of the command outputs are available in the **/verification** folder.

## Kubernetes Setup

kubectl is installed and working on the system.
A Kubernetes cluster is not currently running locally, so `kubectl cluster-info` shows a connection error. This confirms that the CLI is installed but not connected to a cluster.

## Status

All required DevOps tools are installed and accessible from the terminal.
The workstation is ready for development and implementation work in Sprint #3.
PR verification change
