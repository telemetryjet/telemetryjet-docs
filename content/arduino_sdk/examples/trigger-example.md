---
title: "Trigger Example"
weight: 1
menu:
  arduino_sdk:
    parent: "arduino_sdk_examples"
---

This example uses a data point as a trigger to perform some action.

In this example, we clear the data point using clear(), which clears the value without pushing a data point. This pattern allows a data point to be received and processed as an event.