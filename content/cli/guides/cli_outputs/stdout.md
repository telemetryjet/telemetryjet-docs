---
title: "Console"
weight: 1
menu:
  cli:
    parent: "cli_outputs"
    identifier: "cli_output_stdout"
    title: "Console"
---

The console output destination displays all incoming telemetry data in standard output. This can be used for debugging purposes, or to pipe data into other command-line applications.

## Formatting
Each console line will appear in the format. Data is immediately printed to the output when it is received from the data source.
<pre>
key=value
</pre>

## Example
<pre>
jet stream --input raw:/dev/random --output console
...
value=123
value=53
value=12
value=1
</pre>

## Video Tutorial: Console Output Type

{{< youtube DgAFddBqowU >}}