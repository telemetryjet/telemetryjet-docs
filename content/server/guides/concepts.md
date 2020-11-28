---
title: "Concepts"
date: 2020-02-14T22:01:02-05:00
draft: false
weight: 2
menu:
  server:
    parent: "cloud_overview"
    title: "Concepts"
---


## 

## Server
The server is a software which collects, aggregates, and controls data points from any number of data sources. You run the server on a _host_, which could be your PC, a SPC such as the Raspberry Pi, or a web server. The server runs as a self-contained background program, and can be controlled via the desktop application or remotely through the web interface.

## System
A system is a set of configuration and data in TelemetryJet. Device setup, dashboards, and data points are all part of a system. A server can only host a single system at one time.

<div class="bp3-callout bp3-icon-layout-auto">
<h4 class="bp3-heading">Systems are Distributed</h4>
<p>
Although a system is conceptually a single object, TelemetryJet doesn't enforce that a system is <i>physically</i> continuous. A system can interact with separate physical devices, or even pull data from across the internet.
</p>
<p>
TelemetryJet encourages the creation of distributed systems. By offloading work to the TelemetryJet server, a system can interact with large datasets and intensive calculations to control actions on even the smallest microcontroller in realtime.
</p>
</div>

## Device
A device is an individual data source which can exchange data points with the server in realtime. There are three types of devices:

- __Hardware Devices__ are physical equipment such as an Arduino or other microcontroller, and are used to send realtime sensor data and receive control commands. Hardware devices are connected over a physical cable such as USB, or over a wireless connection such as Bluetooth. _Example: A sensor reading battery voltage on a solar charger, or a motor controller powering a linear actuator to tilt a solar panel._
- __Software Devices__ are external programs which communicate with the Server via TelemetryJet's Client SDKs. A software device can run on the same host as the server, or anywhere with internet connectivity to the server. _Example: A python program performing computer vision on a live webcam feed._
- __Cloud Devices__ are third-party data sources which provide data over the internet through an API. Cloud Devices are polled periodically to get data. _Example: An online weather API, providing weather predictions for a given GPS position._


Combined, the different device types can be used to create powerful systems. 
<div class="bp3-callout bp3-icon-flash">
<h4 class="bp3-heading">User Story</h4>
<p>
Chris loves solar energy, and has built his own solar charging system. His panels are often covered in snow in the winter after snowstorms, which reduce his power output. Chris uses TelemetryJet to automate his pan/tilt system to respond to weather and tilt the panels to prevent snow buildup.
</p>
<p>
Chris's system starts with a python program to calculate the angle of the sun in the sky at the current time. The program runs periodically, and feeds the data points back into the system using the TelemetryJet Client SDK.
</p>
<p>
The angle of the panels is controlled by a set of linear actuators. The actuators are controlled through an Arduino, which receives commands from TelemetryJet over a USB connection.
</p>
<p>
To improve his system, Chris connects to a Weather API, which provides predicted weather data. Using TelemetryJet, Chris sets triggers to activate when snow is predicted. If the data predicts snow, it commands the actuators to tilt the panels to the side so snow cannot build up. Once the snow ends, another trigger returns the actuators to their normal position.
</p>
<p>
Now, when it snows, the panels are tilted, so snow doesn't build up! Chris has used the power of TelemetryJet to build a system that collects and reacts to data from distributed sources to control a physical system.
</p>
</div>

## Protocol
A protocol is the encoding that a device uses to communicate with the server. TelemetryJet supports a wide number of protocols. 

For hardware devices, Common USB Serial protocols are supported, including NMEA 0183, VE.Direct, etc. To interact with cloud or software devices, TelemetryJet can parse CSV, XML and JSON data.

For simple interactions with microcontrollers, TelemetryJet comes with a USB-Serial protocol which is implemented in both the server and Arduino Client SDKs. This is the quickest way to exchange data with a microcontroller, and has been designed with realtime use in mind.

## Transport
A transport is the method that is used to transmit data between a device and the server. Where Protocols specify the encoding of data, Transports specify how that data is transferred. TelemetryJet supports the following transports:

- USB Serial
- Bluetooth
- Web (HTTP/HTTPS, UDP, TCP, WebSockets)

## Data Frame
A Data Frame is a "snapshot" of the state of your data at a point in time. Each data point in the database is associated with a data frame, allowing multiple simultaneous data points to be linked together to form a larger picture of your system.

The default time interval for a data frame is __100ms__. Each time the time interval expires, the "current" data frame for new data points is incremented. There is no limit to the number of data points that a data frame can hold -- Data points will add to the current data frame until its time expires.

When displaying live data, the entire dashboard will always pull from the same data frame, meaning data points displayed simultaneously were also recorded simultaneously. 

The timestamp of a Data Frame can also be used as the X-Axis on time-series charts, which allows multiple data points to line up temporally.

## Data Point
A data point is a single unit of data, which contains a key, a value, a type for the value, and a data frame ID.

## Dashboard
A dashboard is a visualization of your data. Dashboards are built in the TelemetryJet UI using the Dashboard Builder tool, which provides a set of UI elements for use in dashboards.

In addition to viewing data, Dashboards can control data through the use of Buttons and other active components which write data points back into the system.

Dashboards can be shared with others using a Sharing Link. Anyone with a compatible browser and internet connectivity with the server can view and interact with the dashboard.