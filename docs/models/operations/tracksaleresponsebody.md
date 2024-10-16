# TrackSaleResponseBody

A sale was tracked.

## Example Usage

```typescript
import { TrackSaleResponseBody } from "dub/models/operations";

let value: TrackSaleResponseBody = {
    eventName: "<value>",
    customerId: "<value>",
    amount: 9437.49,
    paymentProcessor: "<value>",
    invoiceId: "<value>",
    currency: "European Monetary Unit (E.M.U.-6)",
    metadata: {
        key: "<value>",
    },
};
```

## Fields

| Field                 | Type                  | Required              | Description           |
| --------------------- | --------------------- | --------------------- | --------------------- |
| `eventName`           | *string*              | :heavy_check_mark:    | N/A                   |
| `customerId`          | *string*              | :heavy_check_mark:    | N/A                   |
| `amount`              | *number*              | :heavy_check_mark:    | N/A                   |
| `paymentProcessor`    | *string*              | :heavy_check_mark:    | N/A                   |
| `invoiceId`           | *string*              | :heavy_check_mark:    | N/A                   |
| `currency`            | *string*              | :heavy_check_mark:    | N/A                   |
| `metadata`            | Record<string, *any*> | :heavy_check_mark:    | N/A                   |