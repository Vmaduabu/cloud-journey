# Day 6 - Azure Storage Accounts

## Objective

Deploy centralized cloud storage to support business applications and future Azure services.

---

## Business Scenario

Cactus Manufacturing has deployed its first application server.

The company now requires centralized storage for application data, documents, logs, and future backups.

---

## Business Problem

Storing important business data only on a Virtual Machine creates operational risk.

The company needs durable, centralized storage that can be accessed by future Azure services.

---

## Azure Solution

Created:

- Azure Storage Account

This storage account will serve as the central location for business data as the Azure environment expands.

---

## Resources Created

- Azure Storage Account

---

## Design Decisions

- Used the existing Resource Group.
- Deployed in East US 2.
- Selected Standard performance.
- Selected locally redundant storage (LRS) to minimize cost while supporting the lab environment.

---

## Business Impact

The Azure environment now includes centralized cloud storage.

Future applications, backups, logs, and services can use this storage account instead of relying solely on local VM storage.

---

## Screenshots

- day6-storage-overview.png
- day6-storage-containers.png
- day6-resource-group.png

---

## Key Takeaways

- Virtual Machines provide compute.
- Storage Accounts provide durable cloud storage.
- Separating compute from storage improves scalability and reliability.