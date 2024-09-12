# SalesDevices

## Example Usage

```typescript
import { SalesDevices } from "dub/models/components";

let value: SalesDevices = {
  device: "<value>",
  sales: 8811.04,
  amount: 2497.96,
};
```

## Fields

| Field                                      | Type                                       | Required                                   | Description                                |
| ------------------------------------------ | ------------------------------------------ | ------------------------------------------ | ------------------------------------------ |
| `device`                                   | *string*                                   | :heavy_check_mark:                         | The name of the device                     |
| `sales`                                    | *number*                                   | :heavy_check_mark:                         | The number of sales from this device       |
| `amount`                                   | *number*                                   | :heavy_check_mark:                         | The total amount of sales from this device |