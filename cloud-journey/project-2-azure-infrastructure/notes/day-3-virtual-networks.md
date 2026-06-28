# Day 3 - Azure Virtual Networks

## Objective

Build the networking foundation for the Cactus Manufacturing Azure environment by creating a Virtual Network (VNET) and an application Subnet.


## Business Scenario 

Cactus Manufacturing has decided to migrate its infrastructure from an on-premises environment to Microsoft Azure. As part this migration, the company plans to deploy business applications, virtual machines, databases, storage accounts, and monitoring solutions.

Before any of these resources can be deployed, the company needs a secure, scalable, and organized network where Azure resources can communicate privately.


## Business Problem

Without a Virtual Network:

- Azure resources cannot communicate securely.
- Future infrastructure becomes difficult to organize.
- Security boundaries cannot be enforced.
- Scaling the environment becomes increasingly complex.

To support future business growth, the networking foundation must be established before deploying any production workloads.

## Azure Solution

Azure Virtual Networks (VNets) provide private networking with Microsoft Azure.

For todays's implementation, I created: 

- Virtual Network
- Application Subnet

These resources establish the networking foundation that every fufture Azure resource will rely upon.


## Resources Created

### Resource Group

- RG-Cactus-Production

### Virtual Network

Name:

- VNET-Cactus-Production

Region:

- East US 2

Address Space

- 10.0.0.0/16

### Subnet 

Name 

- AppSubnet

Address Range

- 10.0.1.0/24

## Design Decisions

### Why create a Virtual Network?

Every Azure deployment begins with networking. A Virtual Network provides secure communication between Azure resources while allowing future workloads to be organized into logical network segments.

### Why use 10.0.0.0/16?

A /16 address space provides enough IP addresses for future growth requiring the netowrk to be redesigned later.

### Why create AppSubnet first?

Application workloads should be isoloated from management and database resources. Beginning with an Application Subnet follows common enterprise networking practices and prepares the environment for future expansion.

## Business Impact

Today's deployment provides Cactus Manufacturing with a secure networking foundation that supports future cloud resources while improving organization, scalability, and long-term maintainability.

Business value created:

- Secure private communication between Azure resources
- Scalable network design
- Better organization of cloud infrastructure
- Foundation for future security controls
- Reduced operational complexity as the environment grows


## Key Takeaways

- Every Azure deployment starts with networking.
- Virtual Networks provide secure communication between Azure resources.
- Proper IP planning makes future expansion significantly easier.
- Enterprise infeastructure should always be designed with future business growth in mind.