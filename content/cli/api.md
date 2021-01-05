---
title: "All Commands"
menu: "cli"
menu:
  cli:
    parent: "cli_api"
    title: "All Commands"
---

{{% apiCard header="jet --help" example=`> jet stream --help
Create and run a network of data sources.
Usage: jet stream [OPTIONS] [configurations...]

Positionals:
  configurations TEXT ...     Configuration files to load.

Options:
  -h,--help     Print this help message and exit
  -s,--silent   Don't log any debug or error messages
  -t,--test     Test configuration and exit without running` %}}
Display help text for the CLI.

To display help for a section, add `--help` after a subcommand.

For example, to display help for the `stream` command, use `jet stream --help`.
{{% /apiCard %}}

{{% apiCard header="jet --version" example=`> jet --version
TelemetryJet CLI (version 0.0.1, platform Windows-10.0.19042, architecture AMD64)` %}}
Display the version for the CLI.
{{% /apiCard %}}

{{% apiCard header="jet stream" example=`> jet stream config1.json` %}}
Load one or more configuration files, and start streaming data between data sources. You can specify JSON files with relative paths, absolute paths, or [Glob syntax](https://en.wikipedia.org/wiki/Glob_(programming)) to select files using a pattern. 

For more information about how to create a configuration file, see [Usage](/cli/guides/usage/).


**Options**
- `-s,--silent`: Don't output any debugging information. With this flag enabled, the only data printed to standard output will be values from `console-output` data sources. This can be used when piping the output of jet to another program.

- `-t,--test`: Load the configurations, but don't actually start the network. This can be used to validate and test your configuration files.

- `-e,--exit`: Exit immediately if there is an error. Normally, the CLI will continue to run and try to reconnect if a data source loses connection, for example, a USB serial device is unplugged or network connection is lost. With this flag applied, the CLI will log an error and exit instead.

{{% /apiCard %}}

{{% apiCard header="jet list-ports" example=`> jet list-ports --verbose
COM1
 - Description: Communications Port (COM1)
 - Transport: Software` %}}
List available serial ports. This utility command can be used to find serial port names, for use in any of the serial stream data sources.

**Options**
- `-v,--verbose`: Display additional metadata for the port, including transport type, hardware identifiers, and any other information available. This can help distinguish the ports available.
{{% /apiCard %}}
