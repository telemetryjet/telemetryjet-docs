---
title: "Console Input"
menu:
  cli:
    parent: "cli_input_data_sources"
    title: "Console"
---

<div class="bp3-callout">The CLI is in early alpha. Need help getting started, or found a bug? <a href="https://github.com/telemetryjet/telemetryjet-cli/issues/new">Open an Issue</a> on our GitHub repository. We appreciate your patience and early support.
</div>
<br />

## Overview
`console` writes to standard output in the command line. Any data points this data source receives will be displayed in the console.

When combined with the `--silent` flag, which silences all debug and error messages, you can use this to pipe output from Jet into any command-line program.

## I/O Format
For each data point this data source receives, it will print text to the console in the format `key=value` followed by a newline.  This data source does not produce any data points.

<pre>
throttle=0.00
throttle=0.53
throttle=0.74
throttle=1.00
throttle=1.00
throttle=1.00
</pre>

## Example Definition
<pre>
{
  "id": "console-logger",
  "type": "console"
}
</pre>
