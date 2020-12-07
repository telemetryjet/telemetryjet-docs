---
title: "Server"
weight: 3
menu:
  cli:
    parent: "cli_data_sources"
    identifier: "cli_output_server"
    title: "Server"
draft: true
---

The Server destination streams all incoming telemetry data into a TelemetryJet Server.
If the server is not available, the CLI will cache these data points in a local database until it is able to connect.

To use a server as an output destination, you must specify an alias with the `--output` parameter, for example `--output server:default`. The alias is a unique string that maps to a TelemetryJet server and credentials.

## Configuration

Server destinations are configured with the `jet server` command group. A server destination consists of a URL, username, and password, and is referenced by a unique alias.

See the [API Reference: Server Commands](/api/cli_server/) for a full overview of the server command group.

## Video Tutorial: Server Output Type
{{< youtube DgAFddBqowU >}}