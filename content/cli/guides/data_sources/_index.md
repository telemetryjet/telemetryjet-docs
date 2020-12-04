---
title: "Data Source Types"
weight: 3
menu:
  cli:
    parent: "cli_guides"
    identifier: "cli_data_sources"
    title: "Data Source Types"
---

Jet can interface with many data source types, including files, serial devices, and software protocols. This section details the behavior and configuration options for every data source type.

<table class="bp3-html-table bp3-html-table-bordered bp3-html-table-condensed bp3-html-table-striped" style="width: 100%">
  <thead>
    <tr>
      <th style="width: 100px;">Type</th>
      <th style="width: 100px;">Read/Write/Both</th>
      <th style="width: 200px;">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><a href="/cli/guides/data_sources/console">console</a></td>
      <td>Both</td>
      <td>Read and write data to standard IO.</td>
    </tr>
    <tr>
      <td><a href="/cli/guides/data_sources/csv">csv</a></td>
      <td>Write</td>
      <td>Write data into a CSV file.</td>
    </tr>
    <tr>
      <td><a href="/cli/guides/data_sources/sqlite">sqlite</a></td>
      <td>Write</td>
      <td>Write data into a SQLite table.</td>
    </tr>
    <tr>
      <td><a href="/cli/guides/data_sources/xlsx">xlsx</a></td>
      <td>Write</td>
      <td>Write data into a Excel spreadsheet.</td>
    </tr>
    <tr>
      <td><a href="/cli/guides/data_sources/tjet-server">tjet-server</a></td>
      <td>Both</td>
      <td>Communicate with a TelemetryJet Server.</td>
    </tr>
    <tr>
      <td><a href="/cli/guides/data_sources/tjet-arduino">tjet-arduino</a></td>
      <td>Both</td>
      <td>Communicate with the TelemetryJet Arduino SDK on a serial device.</td>
    </tr>
    <tr>
      <td><a href="/cli/guides/data_sources/nmea-0183">nmea-0183</a></td>
      <td>Read</td>
      <td>Read data in NMEA 0183 format from a serial device.</td>
    </tr>
    <tr>
      <td><a href="/cli/guides/data_sources/vesc">vesc</a></td>
      <td>Both</td>
      <td>Communicate with VESC motor controllers using the VESC UART protocol over a serial device.</td>
    </tr>
  </tbody>
</table>