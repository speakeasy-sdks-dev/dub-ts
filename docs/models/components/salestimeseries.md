# SalesTimeseries

## Example Usage

```typescript
import { SalesTimeseries } from "dub/models/components";

let value: SalesTimeseries = {
    start: "<value>",
    sales: 6800.56,
    amount: 4471.25,
};
```

## Fields

| Field                                     | Type                                      | Required                                  | Description                               |
| ----------------------------------------- | ----------------------------------------- | ----------------------------------------- | ----------------------------------------- |
| `start`                                   | *string*                                  | :heavy_check_mark:                        | The starting timestamp of the interval    |
| `sales`                                   | *number*                                  | :heavy_check_mark:                        | The number of sales in the interval       |
| `amount`                                  | *number*                                  | :heavy_check_mark:                        | The total amount of sales in the interval |