---
title: "Console"
weight: 1
menu:
  cli:
    parent: "cli_data_sources"
    identifier: "cli_output_console"
    title: "Console"
---

## Overview
`console` writes to standard output in the command line. Any data points this data source receives will be displayed in the console.

When combined with the `--silent` flag, which silences all debug and error messages, you can use this to pipe output from Jet into any command-line program.

## Output Format
For each data point this data source receives, it will print text to the console in the format `key=value` followed by a newline.

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
