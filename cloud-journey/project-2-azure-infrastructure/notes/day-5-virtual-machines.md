# Day 5 - Azure Virtual MAchines

## Objective

Deploy the first workload into the Azure environment by creating a Virtual MAchine inside the existing enterprise infrastructure.

## Business Scenario 

Cactus Manufacturing has completed its networking and security foundation.
The appliucation team now requires a Windows Server to host an internal inventory management application.

## Business Problem

The company has networking and security but no compute resources.
Without Virtual Machines, business applications cannot run inside Azure.

## Azure Solution

Created:

- VM-App01

Connected to:

- VNET-Cactus-Production
- AppSubnet
- NSG-AppSubnet

Azure automatically created:

- Network Interface
- OS Disk
- Public IP (if enabled)


## Design Decisions 

- Deployed the VM into the existing application subnet.
- Used the existing Netowrk Security Group fro protection.
- Allowed Azure to create the supporting resources required for the deployment.

## Business Impact 

The Azure environment now hosts its firts compute resource.
Future business applications can be deployed onto this server while benefiting the netowrking and security infrastructure reated during previous lessons.

## Key Takeways

- Virtual Machines provide compute resources.
- Every VM depends on networking and security.
- Azure automatically creates supporting infrastructure during deployment.