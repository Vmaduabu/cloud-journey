# Day 7 - Identity & Access Management

## Objective 

Implement Role-Based Access Control (RBAC) to provide secure access to Azure resources.

## Bsuiness Scenario

Cactus Manufacturing is expanding its IT team.
New employees require access to Azure resources, but they should only receive the permissions necessary to perform their jobs.

## Business Problem 

Granting every employee Owner permissions increases the risk of accidental changes or resource deletion.
The company needs a way to control access while following the principle of least priveledge.

## Resources Configured

- Azure Role Assignment

Role Used:

- Virtual Machine Contributor

Scope:

- RG-Cactus-Production


## Design Decisions 

- Used a built-in Azure role instead of creating a custom role.
- Assigned permissions at Resource Group level.
- Followed the principle of least pivilege

## Business Impact 

Employees can perform their assigned responsibilities without receving unnecessary administrative permissions.
This reduces operational risk while supporting future team growth.


## Key Takeways

- ENtra ID Manages identities. 
- RBAC manages permissions.
- Least privilege is a core security principle.
- Built-in roles should be used whenever possible.