---
title: "Key-Value File"
menu:
  cli:
    parent: "cli_data_sources"
draft: true
---

<div class="bp3-callout">The CLI is in early alpha. Need help getting started, or found a bug? <a href="https://github.com/telemetryjet/telemetryjet-cli/issues/new">Open an Issue</a> on our GitHub repository. We appreciate your patience and early support.
</div>
<br />

## Overview
`key-value-file` writes data to a file as Key-Value text. Each data point is represented with a `key=value` string. 

## Options
- `filename` *(Required)*: A string path to a file. If this is a relative path, it will be evaluated according to the directory Jet is run from, not the configuration file directory.
- `mode` *(Required)*: File output mode. Should be a String value, one of `overwrite`, `append`, or `new`. Overwrite mode will erase the file, Append mode will add lines to the end of the file, and `new` will add a counter after the end of the filename to create a new file each time it is run.

## I/O Format
Each data point received will be written to the file `key=value` followed by a newline. Data points are always output in the order they were received from other data sources.

Any equals sign in the output will be converted into an escaped string `\=`.

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
  "id": "key-value-file-demo",
  "type": "key-value-file",
  "option": {
    "filename": "test.txt",
    "mode": "overwrite"
  }
}
</pre>
