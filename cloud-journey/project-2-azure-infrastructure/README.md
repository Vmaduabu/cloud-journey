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
- Azure Virtual Machines *(Upcoming)*
- Azure Storage *(Upcoming)*
- Azure Monitor *(Upcoming)*
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
└── RG-Cactus-Production
    │
    ├── VNET-Cactus-Production
    │   │
    │   └── AppSubnet
    │        │
    │        └── NSG-AppSubnet
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

### In Progress

- Enterprise Infrastructure Expansion
- Network Security Planning

### Upcoming

- Network Security Groups
- Additional Subnets
- Azure Virtual Machines
- Azure Storage Accounts
- Microsoft Entra ID
- Azure Monitor
- Cloud Security Controls
- Infrastructure Automation
- Final Architecture Diagram

---

## Repository Structure

```text
project-2-azure-infrastructure/
│
├── README.md
├── notes/
│   ├── day-1-cloud-fundamentals.md
│   ├── day-2-resource-groups.md
│   └── day-3-virtual-networks.md
│
├── screenshots/
│   ├── day2-resource-group.png
│   ├── day3-vnet-overview.png
│   ├── day3-app-subnet.png
│   └── day3-resource-group.png
│
└── diagrams/
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