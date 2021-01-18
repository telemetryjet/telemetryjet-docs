---
title: "CPU/Memory Stats"
menu:
  cli:
    parent: "cli_input_data_sources"
---

## Overview
`system-stats` collects CPU, Memory, and disk space metrics from the device it is running on. This can be used to monitor the performance of a telemetry hub such as a Raspberry Pi.

## Dimensions
This data source produces the following dimensions:

- cpu
- cpu.idle
- ram.available
- ram.used
- ram.total
- disk.capacity
- disk.available
- disk.usage

## Example Definition
<pre>
{
  "id": "system-stats-example",
  "type": "system-stats"
}
</pre>