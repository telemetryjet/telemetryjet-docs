---
title: "Arduino SDK"
weight: 1
menu:
  root:
    title: "Arduino SDK"
  arduino_sdk:
    parent: "arduino_sdk_guides"
    identifier: "arduino_sdk_overview"
    title: "Overview"
---

## Overview

The TelemetryJet Arduino SDK a lightweight, flexible library for communicating with microcontrollers. The Arduino SDK is a wrapper around <a href="https://msgpack.org/index.html">MessagePack</a> that allows you to send and receive data points using a high-level API.

### Features

#### Bidirectional Communication
The SDK encodes and decodes data with MessagePack over a serial connection, providing a robust telemetry link that requires minimal setup. Easily send or receive data and configure transmission rate, error checking, and other serial communication settings.

#### Pub/sub messaging & caching
Filter incoming data points, so your microcontroller only stores values you've selected. Data you've subscribed to caches locally on your device.

#### Easy integration with any software
The SDK sends pure MessagePack structures. You can easily parse messages in any program using <a href="https://msgpack.org/index.html">MessagePack's language bindings</a>, or use the TelemetryJet CLI to stream data into other data sources without code.