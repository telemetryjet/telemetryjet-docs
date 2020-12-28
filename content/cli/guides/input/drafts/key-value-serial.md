---
title: "Key-Value Serial Stream"
menu:
  cli:
    parent: "cli_data_sources"
draft: true
---

<div class="bp3-callout">The CLI is in early alpha. Need help getting started, or found a bug? <a href="https://github.com/telemetryjet/telemetryjet-cli/issues/new">Open an Issue</a> on our GitHub repository. We appreciate your patience and early support.
</div>
<br />

## Overview
`key-value-stream` reads and writes data to a serial stream as Key-Value text. Each data point is represented with a `key=value` string. 

## Options
- `port` *(Required)*: The serial port to connect to. If this port is unavailable, Jet will attempt to periodically reconnect to it. Use the `jet list-ports` command to display available serial ports and find your hardware devices.
- `baudrate` *(Required)*: Baudrate for serial communications. Common rates are `9600`, `14400`, `19200`, `28800`, `38400`, `57600`, or `115200`.

## I/O Format
Each data point received from other data sources will be written to the serial stream as `key=value` followed by a newline. Data points are always output to the stream in the order they were received from other data sources.

Each data point received from the serial stream must take the same form of `key=value` followed by a newline. 

When parsed, the line will be split by the first `=` character found in the string. 

Any characters before the separator are used as the data point key and any characters after the separator are used as the data point value.

If the line cannot be parsed successfully, it will be ignored.

## Example Definition
<pre>
{
  "id": "testserialdevice",
  "type": "key-value-stream",
  "options": {
    "port": "COM6",
    "baudrate": 115200
  }
}
</pre>
