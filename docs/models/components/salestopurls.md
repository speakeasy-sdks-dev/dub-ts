# SalesTopUrls

## Example Usage

```typescript
import { SalesTopUrls } from "dub/models/components";

let value: SalesTopUrls = {
    url: "https://overjoyed-irony.com",
    sales: 4701.32,
    amount: 3015.75,
};
```

## Fields

| Field                                   | Type                                    | Required                                | Description                             |
| --------------------------------------- | --------------------------------------- | --------------------------------------- | --------------------------------------- |
| `url`                                   | *string*                                | :heavy_check_mark:                      | The destination URL                     |
| `sales`                                 | *number*                                | :heavy_check_mark:                      | The number of sales from this URL       |
| `amount`                                | *number*                                | :heavy_check_mark:                      | The total amount of sales from this URL |