# Day 8 - Azure Monitor and Log Analytics 

## Objective 
- Add centralized monitoring and operational logging to the Cactus Manufacturing Azure environment.

## Business Scenario
- Cactus Manufacturing has deployed networking, security, compute, storage, and access controls.

- The company now needs visibility into resource changes, service health, failures, and other operational events.

## Business Problem

Infrastructure cannot be managed effectively without monitoring.

Without centralized logging:

- Resource changes are harder to investigate.
- Operational failures may go unoticed.
- Troubleshooting takes longer.
- Security and compliance investigations lack evidence.

## Azure Solution 

Created a Log Analytics workspace and configured the Azure Activity Log to send operational events to it.

Resources and configurations added:

- LAW-Cactus-Production
- DS-Subcription-ActivityLog

## Resources Created 

### Log Analytics Workspace

Name:

- LAW-Cactus-Production

Region:
- East US 2

Resource Group:
- RG-Cactus-Production

### Diagnostic Setting

Name:
- DS-Subcription-ActivityLog

Destination:
- LAW-Cactus-Production

### Design Decisions
- Used one centralized workspace for the production lab.
- Deployed the workspace in the same region as the existing environment.
- Collected subscription Activity Log events before enabling more detailed VM guest logging.
- Avoided enabling unnecessary high-volume data sources to control cost.

## Business Impact

Cactus Manufacturing now has a centralized location for operational events.

This improves troubleshooting, accountability, security investigations, and visibility into changes across the Azure environment.

## Key Takeways

- Azure Monitor provides visibility into Azure resources.
- Log Analytics stores and queries monitoring data.
- Diagnostic settings route logs to a destination.
- Monitoring should be added before the environment becomes too difficult to manage.
- Log collection should be intentional because ingestion can create cost.