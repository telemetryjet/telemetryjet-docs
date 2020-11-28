---
title: "TJet Serial"
weight: 4
menu:
  server:
    parent: "cloud_data_source_types"
    title: "TelemetryJet Serial"
---


### TelemetryJet Serial Protocol
The TJet Serial protocol is a "key-length-value" protocol optimized for small transmission size. The protocol transmits data in key/value pairs, and contains error detection redundancies. TJet is an approachable protocol, and can be used to communicate with Arduino projects. The TelemetryJet Arduino SDK implements this protocol.

#### Packet Format

The protocol is stateless: There is no handshake or other communication required to establish a connection, and each packet exists in isolation. Each packet consists of the following data:

<table class="bp3-html-table bp3-html-table-bordered bp3-small">
<thead>
<tr>
<th>Start Byte</th>
<th>Value Type</th>
<th>Key Length</th>
<th>Value Length</th>
<th>Key</th>
<th>Value</th>
<th>Checksum</th>
</tr>
</thead>
<tbody>
<tr>
<td>0xFF</td>
<td>
0x00 = Integer<br/>
0x01 = Float
</td>
<td>
0 - 255<br />
Length, in bytes, of the key data.
</td>
<td>
The key string.
</td>
<td>
0 - 255<br />
Length, in bytes, of the value data.
</td>
<td>
The value data.
</td>
<td>
Wrapped checksum.<br/>
0xFF - Sum of packet bytes.

</td>
</tr>
</tbody>
</table>

#### Data Throughput

The key and values are both limited in length to 255 bytes. This limitation allows the length values to be stored in a single byte.

 The throughput of the protocol is limited by the length of the data being sent, and the baud rate of the connection. Longer keys or values will take longer to send, and therefore be able to send less data per second.