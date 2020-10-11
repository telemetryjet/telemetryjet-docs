---
title: "API Reference"
weight: 10
---
TelemetryJet's API allows interaction with the platform programmatically. The API is made of several components:

- The __REST API__, used for editing resources (Systems, Dashboards, Devices, etc.) and pulling historical data
- The __Streaming API__, used for sending/receiving live streaming data points

This section is a conceptual overview of the models and functionality of the API. Although you can interact with the API directly, the best starting point is to use the TelemetryJet Client SDK. The SDK wraps around these APIs, and provides abstractions that make it easy to build your own {{< helptext "Software Devices" >}} or other integrations into the system.