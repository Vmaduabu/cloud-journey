# Day 4 - Network Security Groups

## Objective 

Prepare the Azure envireonment for future workloads by securing the application subnet with a Network Security Group.

# Business Scenario

Catcus Manufacturing has completed the initial Azure network.
Before application servers are deployed, the security team requires every subnet to have security policy attached.

# Business Problem

Virtual Networks provide connectivity but do not control network traffic.
Without a Network Security Group, future resources deployed into AppSubnet would not have subnet-level security policies applied.

## Azure Solution

Created:

- NSG-AppSubnet

Associated with:

- Appsubnet

No custom rules were created during this lesson because there are currently no workloads requiring network access.

## Resources Created

- NSG-AppSubnet


## Design Decisions

- Created a dedicated Network Security Group for the application subnet.
- Assciated the NSG with the subnet rather than individual resources.
- Left the default security rules unchanged until business requirements exist.

# Business Impact 

Future resources deployed into AppSubnet will auto atically inherit the subnet's security policy.
This creates a more consistent and scalable security model while preparing the environment for future application deployments.


## Key Takeways

- Virtual Networks provide connectivity.
- Network Security Groups provide traffic control.
- Security should be established before workloads are deployed.
- Security rules should be driven by business requirements, not assumptions.