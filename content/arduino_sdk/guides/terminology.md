---
title: "Terminology"
weight: 2
menu:
  arduino_sdk:
    parent: "arduino_sdk_overview"
---

## Data Source

A data source is a producer or consumer of data in the TelemetryJet CLI. A microcontroller running the TelemetryJet Arduino SDK is a single data source. You may receive data from one or more data sources.

## Dimension

A dimension is a single series of data, identified by a unique string name that you provide. 

## Data Point

A data point is a single sample connected to a dimension. A data point contains a dimension ID, timestamp in milliseconds, and a value. TelemetryJet supports data of multiple types.