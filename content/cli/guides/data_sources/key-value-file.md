---
title: "Key-Value File"
weight: 5
menu:
  cli:
    parent: "cli_data_sources"
---

## Overview
Write data to a file in Key-Value (`key=value`) format. This data source will output every data point it receives to a file in order. Each line will consist of a `key=value` string separated by a newline. 

Any equals sign in the output will be converted into an escaped string `\=`.

## Options
- `filename` *(Required)*: A string path to a file. If this is a relative path, it will be evaluated according to the directory Jet is run from, not the configuration file directory.
- `mode`: File output mode. Should be a String value, one of `overwrite`, `append`, or `new`. Overwrite mode will erase the file, Append mode will add lines to the end of the file, and `new` will add a counter after the end of the filename to create a new file each time it is run.

## Output Format

## Example Definition
<pre>
{
  "id": "",
  "type": ""
}
</pre>
