# TrackSaleResponseBody

A sale was tracked.

## Example Usage

```typescript
import { TrackSaleResponseBody } from "dub/models/operations";

let value: TrackSaleResponseBody = {
  eventName: "<value>",
  customer: {
    id: "<id>",
    name: "<value>",
    email: "Joshua.Durgan@gmail.com",
    avatar: "https://picsum.photos/seed/w8Ioz/1111/2347",
  },
  sale: {
    amount: 1832.80,
    currency: "Belarusian Ruble",
    paymentProcessor: "<value>",
    invoiceId: "<value>",
    metadata: {
      "key": "<value>",
    },
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `eventName`                                                                  | *string*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `customer`                                                                   | [operations.TrackSaleCustomer](../../models/operations/tracksalecustomer.md) | :heavy_check_mark:                                                           | N/A                                                                          |
| `sale`                                                                       | [operations.Sale](../../models/operations/sale.md)                           | :heavy_check_mark:                                                           | N/A                                                                          |