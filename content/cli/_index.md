---
title: "TelemetryJet CLI"
weight: 1
menu:
  root:
    title: "CLI"
  cli:
    parent: "cli_guides"
    identifier: "cli_overview"
    title: "Overview"
---

## Overview

The TelemetryJet CLI, `jet`, is a command-line tool for defining, monitoring, and controlling embedded telemetry systems.

Use Jet to stream data between a number of data sources, including serial devices, files, and the TelemetryJet server. Jet uses declarative configuration: You specify your data sources in JSON configuration files, and Jet handles the details of streaming data between the sources.

## Use Cases

Jet is an extremely versatile tool. Here are some examples of how you can use it:

**Stream data to a CSV file:** Use Jet to stream hardware telemetry data straight into a CSV file, without any programming required.

**Stream data to a TelemetryJet Server:** Stream data to a TelemetryJet Server, and build live dashboards and visualizations that are viewable from anywhere.

**Network multiple microcontrollers:** Use a Raspberry Pi as a central telemetry hub, building a network of microcontrollers which can communicate with each other bidirectionally.

**Monitor existing embedded platforms:** Subscribe to data from ROS or other standard platforms and stream into a TelemetryJet Server.

**Set up declarative configuration for embedded devices:** Define throttle curves, PID control terms, or other parameters centrally, and distribute new values without requiring code changes.

## Getting Started

To get started, learn how to [Install the TelemetryJet CLI.](/cli/guides/installation/)

Once Jet is installed, learn more about [Usage of the CLI.](/cli/guides/usage/)