---
title: "Server Commands"
menu: "api"
menu:
  api:
    parent: "cli"
    title: "Server Commands"
---

{{% apiCard header="`jet server list`" example=`> jet server list
ALIAS     HOST                     USERNAME             PASSWORD
local     localhost:9000           local_admin          ********
cloud     app.telemetryjet.com     user@example.com     ********` %}}
Lists the available servers.
{{% /apiCard %}}


{{% apiCard header="`jet server clear`" example=`> jet server clear
jet server clear
Are you sure you want to remove all servers? (Y/n) Y
All servers removed from list.` %}}

Delete all the servers from the list.

**Options**

`-y, --yes`: Skip any confirmation prompts.
{{% /apiCard %}}

{{% apiCard header="`jet server add`" example=`> jet server add` %}}
Add a server to the list.
{{% /apiCard %}}


{{% apiCard header="`jet server remove`" example=`> jet server remove default
Server 'default' removed.` %}}
Remove a server from the list.
{{% /apiCard %}}