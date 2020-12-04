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
The console data source allows data points to be read and written via the console / standard IO. Any data points this data source receives will be output to the console, and any values that are typed in will be written as data points.

When combined with the `--silent` flag, which silences all debug/error messages, you can use this to pipe output from other data sources into any command-line program.

## Input Format
Inputs can be typed into standard input in the format `key=value` followed by a newline. If the input is valid, this data point will be immediately written. If the input is invalid, the data source will output an error message.

## Output Format
For each data point this data source receives, it will print text to the console in the format `key=value` followed by a newline.