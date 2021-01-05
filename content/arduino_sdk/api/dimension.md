---
title: "Dimension"
weight: 2
menu:
  arduino_sdk:
    parent: "arduino_sdk_h"
---

The `Dimension` object is used to read and write data points for a specific dimension. A `TelemetryJet` object creates `Dimension` objects, which you then use to access the data.

The TelemetryJet Arduino SDK will only store and process data that you have created a `Dimension` for. If you want to read or write data, you should create a Dimension mapped to that dimension identifier.