# Project 2 - Azure Enterprise Infrastructure Lab

## Objective

Design and build an enterprise-style Microsoft Azure environment that demonstrates cloud administration, networking, identity, storage, monitoring, and security fundamentals while following enterprise cloud best practices.

---

## Scenario

Cactus Manufacturing is a fictional mid-sized manufacturing company migrating its on-premises infrastructure to Microsoft Azure.

This project simulates how an infrastructure team would design, deploy, and manage a secure Azure environment capable of supporting business applications as the company grows.

---

## Business Objectives

- Build a secure cloud environment.
- Create a scalable network architecture.
- Organize Azure resources using enterprise best practices.
- Prepare the environment for identity, monitoring, storage, and compute.
- Document design decisions throughout the project.

---

## Project Goals

- Learn Azure infrastructure fundamentals.
- Build an enterprise-style Azure environment.
- Gain hands-on Azure administration experience.
- Follow enterprise cloud design principles.
- Document architectural decisions.
- Build a portfolio project representative of real-world cloud engineering.

---

## Technologies

- Microsoft Azure
- Azure Resource Groups
- Azure Virtual Network
- Microsoft Entra ID *(Upcoming)*
- Azure Virtual Machines
- Azure Storage 
- Azure Monitor 
- Log Analytics
- Azure 
-Azure Role-Based Access Control (RBAC)
- Git
- GitHub
- Markdown

---

## Skills Being Developed

- Azure Fundamentals
- Cloud Infrastructure
- Virtual Networking
- Identity & Access Management
- Cloud Security
- Infrastructure Documentation
- Enterprise Architecture
- Resource Organization

---

## Current Architecture

```text
Azure Subscription
│
├── Activity Log
│   │
│   └── DS-Subscription-ActivityLog
│       │
│       └── LAW-Cactus-Production
│
└── RG-Cactus-Production
    │
    ├── VNET-Cactus-Production
    │   │
    │   └── AppSubnet
    │       │
    │       └── NSG-AppSubnet
    │
    ├── VM-App01
    ├── stcactusprod01
    └── LAW-Cactus-Production
```

Additional infrastructure will be added throughout the project.

---

## Project Progress

### Completed

- Azure Free Account Created
- Cost Management Budget Configured
- Budget Alerts Configured
- Explored Azure Portal
- Created Resource Group (RG-Cactus-Production)
- Established enterprise naming convention
- Created Azure Virtual Network (VNET-Cactus-Production)
- Configured address space (10.0.0.0/16)
- Created Application Subnet (AppSubnet)
- Initialized GitHub repository
- Completed Day 1 documentation
- Completed Day 2 documentation
- Completed Day 3 documentation
- Created Network Security Group (NSG-AppSubnet)
- Associated NSG with AppSubnet
- Completed Day 4 documentation
- Created Azure Virtual Machine (VM-App01)
- Connected VM to AppSubnet
- Deployed first compute resource
- Completed Day 5 documentation
- Created Azure Storage Account
- Added centralized cloud storage 
- Completed Day 6 documentation
- Configured Azure Role-Based Access Control
- Assigned Virtual Machine Contributor role
- Completed Day 7 documentation
- Created Log Analytics workspace (LAW-Cactus)
- Configured subscription Activity Log diagnostic settings
- Centralized operational logs in Log Analytics
- Completed Day 8 documentation
### In Progress

- Monitoring Validation
- Architecture Documentation

### Upcoming

- Additional Monitoring Configuration
- Backup and Recovery
- Cloud Security Controls 
- Infrastructure Automation
- Final Architecture Diagram

---

## Repository Structure

```text
project-2-azure-infrastructure/
│
├── README.md
│
├── notes/
│   ├── day-1-cloud-fundamentals.md
│   ├── day-2-resource-groups.md
│   ├── day-3-virtual-networks.md
│   ├── day-4-network-security-groups.md
│   ├── day-5-virtual-machines.md
│   ├── day-6-storage-accounts.md
│   ├── day-7-identity-access-management.md
│   └── day-8-azure-monitor-log-analytics.md
│
├── screenshots/
│   ├── day2-resource-group.png
│   │
│   ├── day3-vnet-overview.png
│   ├── day3-app-subnet.png
│   ├── day3-resource-group.png
│   │
│   ├── day4-nsg-overview.png
│   ├── day4-default-inbound-rules.png
│   ├── day4-subnet-association.png
│   │
│   ├── day5-vm-overview.png
│   ├── day5-networking.png
│   ├── day5-resource-group.png
│   │
│   ├── day6-storage-overview.png
│   ├── day6-storage-containers.png
│   ├── day6-resource-group.png
│   │
│   ├── day7-iam-overview.png
│   ├── day7-role-assignments.png
│   ├── day7-role-definition.png
│   │
│   ├── day8-log-analytics-overview.png
│   ├── day8-diagnostic-setting.png
│   └── day8-log-query.png
│
└── diagrams/
    ├── diagram-1-network-foundation.png
    │
    ├── diagram-2-first-workload.png
    │
    └── diagram-3-current-architecture.png
```

---

## Learning Objectives

By the end of this project I will be able to:

- Organize Azure resources using enterprise best practices.
- Design and deploy secure Azure virtual networks.
- Deploy and manage Azure infrastructure.
- Configure identity and access management.
- Monitor Azure resources.
- Document enterprise cloud environments.
- Explain the reasoning behind architectural decisions.

---

## Status

Active Development

Current Milestone

Enterprise Network Foundation Complete

Next Milestone

Deploy and configure Azure Network Security Groups.