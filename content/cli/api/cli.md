---
title: "All Commands"
menu: "cli"
menu:
  cli:
    parent: "cli_api"
    title: "All Commands"
---


{{% apiCard header="`jet --help`" example=`> jet server --help
Manage TelemetryJet server connections.
Usage: jet server [OPTIONS] [SUBCOMMAND]

Options:
  -h,--help                   Print this help message and exit

Outputs:
  list                        List the available server connections.
  clear                       Clear all the server connections.
  add                         Add a server connection.
  remove                      Remove a server connection.
` %}}
Display help text for the CLI.

To display help for a section, add `--help` after a subcommand.

For example, to display help for the `server` commands, use `jet server --help`.
{{% /apiCard %}}

{{% apiCard header="`jet version`" example=`> jet --version
TelemetryJet CLI 0.1.1_build_1` %}}
Display the version for the CLI.
{{% /apiCard %}}

{{% apiCard header="`jet update`" example=`> jet update
No new updates are available.` %}}
Check for updates, and install any new updates if available. If an update is available, the CLI will confirm that you want to install it with a prompt.

**Options**

`-y, --yes`: Skip any confirmation prompts.

{{% /apiCard %}}

{{% apiCard header="`jet stream`" example=`> jet stream` %}}
{{% /apiCard %}}

{{% apiCard header="`jet input list`" example=`> jet input list` %}}
{{% /apiCard %}}

{{% apiCard header="`jet server list`" example=`> jet server list` %}}
{{% /apiCard %}}

{{% apiCard header="`jet server clear`" example=`> jet server clear` %}}
{{% /apiCard %}}

{{% apiCard header="`jet server add`" example=`> jet server add` %}}
{{% /apiCard %}}

{{% apiCard header="`jet server remove`" example=`> jet server remove` %}}
{{% /apiCard %}}