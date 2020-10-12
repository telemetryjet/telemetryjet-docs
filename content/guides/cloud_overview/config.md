---
title: "Configuration Options"
weight: 20
menu:
  guides:
    parent: "cloud_overview"
    title: "Configuration Options"
---

## Setup
TelemetryJet has several global configuration settings. Configuration can be set via a `.telemetryjet` file containing JSON key/values, or via environment variables.

When the server starts, configuration loads in the following priority (Lower numbers override higher numbers):

1. Environment Variables
2. A `.telemetryjet` file in the working directory
3. A `.telemetryjet` file in the user's home directory
4. Program defaults

The `.telemetryjet` file must contain JSON with a flat structure. If the file is invalid, it will be ignored.

### Example of a .telemetryjet config file:

{{< highlight json >}}
{
    "data_dir" : "~/telemetryjet",
    "logging" : true,
    "log_level" : "debug"
}
{{< / highlight >}}

### Example of Environment Variables

Environment Variables override the JSON configuration. All options are set using variables prefixed with `TELEMETRYJET_`. For example, to set the data directory before running the server:

{{< highlight bash >}}
export TELEMETRYJET_DATA_DIR=../data
{{< / highlight >}}

## List of Options

<table class="bp3-html-table bp3-html-table-bordered bp3-small">
  <thead>
    <tr>
      <th>JSON Key</th>
      <th>Environment Variable</th>
      <th>Type</th>
      <th>Default</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>data_dir</td>
      <td>DATA_DIR</td>
      <td>String</td>
      <td>"~/telemetryjet"</td>
      <td>Path to the "data directory", a folder which holds all the files TelemetryJet exports, such as the SQLite database.</td>
    </tr>
    <tr>
      <td>logging</td>
      <td>LOGGING</td>
      <td>Boolean</td>
      <td>true</td>
      <td>Turns all logging on and off. Note: This will only affect startup log messages if set via environment variable.</td>
    </tr>
    <tr>
      <td>log_level</td>
      <td>LOG_LEVEL</td>
      <td>String</td>
      <td>"header"</td>
      <td>Filters logging by level. Options: <i>header, debug, info, warning, error, none.</i> Note: This will only affect startup log messages if set via environment variable. 
      </td>
    </tr>
    <tr>
      <td>rest_api_port</td>
      <td>REST_API_PORT</td>
      <td>Integer</td>
      <td>9000</td>
      <td>Port that the REST API will run on. If this port is in use, the program will throw an error and exit.
      </td>
    </tr>
  </tbody>
</table>


...