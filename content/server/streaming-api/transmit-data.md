---
title: "Transmitting Data Points"
weight: 4
menu:
  server:
    parent: "server_api_ws"
---


To transmit data points, write a JSON object to the following websocket topic:

`/topic/data`.

The connection must have a valid access token, and the API key in the data point request must be valid.

The data point will be immediately published to the data source, and retransmitted to any subscribers of the dimension.