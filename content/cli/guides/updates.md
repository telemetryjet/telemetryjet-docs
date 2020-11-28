---
title: "Updating the CLI"
weight: 3
menu:
  cli:
    parent: "cli_overview"
    identifier: "cli_updates"
    title: "Updating"
---

## View the current version
To view the current version of the CLI, run the command `jet version`.
{{% apiCard header="`jet version`" example=`> jet --version
TelemetryJet CLI 0.1.1_build_1` %}}
Display the version for the CLI.
{{% /apiCard %}}

## Update to a new version
The CLI can automatically update itself to the latest version, if one is available.

To check for updates and install if available, run the command `jet update`.

{{% apiCard header="`jet update`" example=`> jet update
No new updates are available.` %}}
Check for updates, and install any new updates if available. If an update is available, the CLI will confirm that you want to install it with a prompt.

**Options**

`-y, --yes`: Skip any confirmation prompts.

{{% /apiCard %}}

## Video Tutorial: Updating your TelemetryJet CLI