---
title: "Data Source Types"
weight: 3
menu:
  cli:
    parent: "cli_guides"
    identifier: "cli_data_sources"
    title: "Data Source Types"
---

Jet can interface with many data source types, including files, serial devices, and software protocols. Click each type for more information and usage details.

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
      <td>Write</td>
      <td>Write data to the console output.</td>
    </tr>
    <tr>
      <td><a href="/cli/guides/data_sources/csv-file">csv-file</a></td>
      <td>Write</td>
      <td>Write data into a CSV file.</td>
    </tr>
    <tr>
      <td><a href="/cli/guides/data_sources/key-value-file">key-value-file</a></td>
      <td>Write</td>
      <td>Write data into a text file in Key-Value (<code>key=value</code>) format.</td>
    </tr>
    <tr>
      <td><a href="/cli/guides/data_sources/csv-serial">csv-serial</a></td>
      <td>Both</td>
      <td>Read and write data as CSV lines over a serial stream.</td>
    </tr>
    <tr>
      <td><a href="/cli/guides/data_sources/key-value-serial">key-value-serial</a></td>
      <td>Both</td>
      <td>Read and write data as Key-Value lines over a serial stream.</td>
    </tr>
  </tbody>
</table>

<br />
Need a data source type that is not listed? [Open an Issue](https://github.com/telemetryjet/telemetryjet-cli/issues/new) on the CLI Github suggesting it should be officially supported.