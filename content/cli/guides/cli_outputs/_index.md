---
title: "Output Types"
weight: 3
menu:
  cli:
    parent: "cli_guides"
    identifier: "cli_outputs"
    title: "Output Types"
---

Each data source you provide requires an output destination. Outputs are specified with the `--output` option, which should immediately follow the `--input` option.

### Type
To set the output type, use a string immediately following the option:
`--output <type>`

#### No-op Output
To completely ignore any output data, use `--output none`. This can be used if you would like to send control signals to a data source, but do not need to receive telemetry data.


### Configuration
Depending on the option type, you may also pass a configuration string after the option type.


### Examples
To output to the console, use `--output console`.

To output to a CSV file, use `--output csv:test_data.csv`.