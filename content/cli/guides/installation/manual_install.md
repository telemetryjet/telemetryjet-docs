---
title: "Manual Installation"
weight: 6
menu:
  cli:
    parent: "cli_overview"
    identifier: "cli_installation_manual"
    title: "Manual Installation"
---
The CLI binaries are also available as static files for manual installation. Using this method, you are responsible for downloading the archive and adding the root folder to the path.

#### 1. Download an Archive

Archives are available for each release and platform on the [TelemetryJet Download Server](https://downloads.telemetryjet.com/builds/cli/). Download and extract the archive for your platform and architecture.

The static archive contains a single subfolder. Copy the contents of this folder into an installation directory. Suggested default directories for each platform:
- **Windows**: `C:\Program Files\TelemetryJet CLI`
- **Linux/MacOS**: `/var/telemetryjet-cli`

#### 2. Add to PATH

Add the installation directory from the previous step to your `PATH` environment variable and restart your computer. Once the folder is on the path, the TelemetryJet CLI utility, `jet`, is available in a shell anywhere.

#### 3. Test Installation

To test the installation, run `jet --version` from your shell. This should output the version of the CLI you have installed, for example: 
<pre>
TelemetryJet CLI (version 0.0.1, platform Linux-5.4.0-52-generic, architecture x86_64)
</pre>

#### 4. Updating
To update a manual installation, download the new version and overwrite the folder containing the old version. Your configuration data will be preserved.