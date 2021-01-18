---
title: "Joystick Input"
menu:
  cli:
    parent: "cli_input_data_sources"
    title: "Joystick"
---

## Overview
`joystick-input` reads values from a USB joystick. The data source will connect to the first USB joystick it finds plugged into your system.

<div class="bp3-callout bp3-intent-warning">
Multiple joysticks are currently unsuported. If you have multiple joysticks connected, Jet may choose either joystick depending on which the system enumerates first.
</div>

## Options
N/A

## Dimensions

The joystick input data source will output dimensions for all axes and buttons on the joystick. Axes are controls with a continuous interval. Buttons are an on/off signal.
For example, a joystick with 4 axes and 2 buttons would output the following dimensions:
- axis_0
- axis_1
- axis_2
- axis_3
- button_0
- button_1

## Example Definition
<pre>
{
  "id": "joystick-input-example",
  "type": "joystick-input"
}
</pre>