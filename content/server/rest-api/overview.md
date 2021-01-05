---
title: "Overview: REST API"
weight: -1
menu:
  server:
    parent: "server_api"
    title: "Overview"
---
TelemetryJet's API allows interaction with the platform programmatically. The API is made of several components:

- The __REST API__, used for editing resources (Data Sources, Dashboards, Dimensions, etc.) and pulling historical data
- The __Streaming API__, used for sending/receiving live streaming data points over a WebSocket connection

This section is a conceptual overview of the models and functionality of the REST API. 

<div class="bp3-callout bp3-intent-warning"><b>Note on Writing Data Points with the REST API:</b> You can write data points with the REST API. However, the REST API for data points may be rate limited. The recommended way to send data points from software is via the Streaming API, or via any of the supported integrations in the TelemetryJet CLI. 
</div>
<br />
