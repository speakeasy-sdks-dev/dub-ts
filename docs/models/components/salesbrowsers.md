# SalesBrowsers

## Example Usage

```typescript
import { SalesBrowsers } from "dub/models/components";

let value: SalesBrowsers = {
    browser: "<value>",
    sales: 5812.73,
    amount: 3132.18,
};
```

## Fields

| Field                                       | Type                                        | Required                                    | Description                                 |
| ------------------------------------------- | ------------------------------------------- | ------------------------------------------- | ------------------------------------------- |
| `browser`                                   | *string*                                    | :heavy_check_mark:                          | The name of the browser                     |
| `sales`                                     | *number*                                    | :heavy_check_mark:                          | The number of sales from this browser       |
| `amount`                                    | *number*                                    | :heavy_check_mark:                          | The total amount of sales from this browser |