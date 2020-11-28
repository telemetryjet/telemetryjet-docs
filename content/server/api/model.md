---
title: "Model"
weight: 2
menu:
  server:
    parent: "server_api"
    title: "Model"
---

### SystemInput
Used when creating/modifying a system. Includes only user editable fields on the System object.

- `name`: String

### System
- `id`: Integer
- `name`: String

Notes: Exactly one system will be active at each time. The database will always have at least one system. When changing the active system, this will update the server to control the new system, which will persist through a server restart. 

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