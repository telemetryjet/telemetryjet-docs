---
title: "Arduino SDK"
weight: 6
---

The Arduino SDK provides an implementation of the TelemetryJet protocol, which is the simplest way to connect and communicate between your server and devices. The TelemetryJet protocol packs arbitrary data into a "key-length-value" format optimized for small transmission size. For more information, see the TJet-Serial protocol page.

- init(SerialPort) - Initializes the protocol on a given Serial object.
- start() - Starts the connection.
- update() - Updates the connection, polling/sending new data.
- stop() - Stops the connection.
- addDataPointCallback(key, func) - Adds a function as a callback for new data point
- removeDataPointCallback(key, func) - Removes a function as a callback for new data point
- set(key, value) - Sets a data point value.
- has(key) - Returns true if a data point has a value.
- get(key) - Gets a data point value.
- clear(key) - Clears a data point so it has no value. This does not propagate back to the server. This can be used to implement "one-time" commands, using the following pattern:
{{< highlight c >}}
if (telemetry.has("test_trigger")) {
    // Do some one-time action
    // Clear the data point
    telemetry.clear("test_trigger")
}
{{< / highlight >}}
After a data point is cleared, it will be send by the server next time its value is updated.

