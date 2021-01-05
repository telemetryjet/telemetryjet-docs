---
title: "TelemetryJet"
weight: 1
menu:
  arduino_sdk:
    parent: "arduino_sdk_h"
---

The TelemetryJet object handles communication and caching of data over the serial stream. To use the TelemetryJet Arduino SDK, you must create one or more instance of `TelemetryJet`.

Once a `TelemetryJet` object is instantiated, it is used to create `Dimension` objects which wrap around functionality to read and write data points.