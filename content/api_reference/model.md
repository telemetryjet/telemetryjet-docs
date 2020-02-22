---
title: "Model"
weight: 1
---

### SystemInput
Used when creating/modifying a system. Includes only user editable fields on the System object.

- `name`: String

### System
- `id`: Integer
- `name`: String

### Device
- Name: String

### DashboardInput

### Dashboard
- Name: String
- Layout: JSON

### DataPointInput

### DataPoint

### DataFrame


### APIError
- `code`: HTTP Error Code
- `message`: Detailed error message 
- `request`: Original request object
    - `path`: Original Request Path
    - `content` : Original Request Content