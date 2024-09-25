# WebhookEvent4Data

## Example Usage

```typescript
import { WebhookEvent4Data } from "dub/models/components";

let value: WebhookEvent4Data = {
  eventName: "<value>",
  customer: {
    id: "<id>",
    name: "<value>",
    email: "Julian_Halvorson72@gmail.com",
    avatar: "https://picsum.photos/seed/Yg0tfPe/1721/2608",
  },
  click: {
    id: "<id>",
    url: "https://squiggly-provider.name/",
    continent: "<value>",
    country: "Philippines",
    city: "Abigayletown",
    device: "<value>",
    browser: "<value>",
    os: "<value>",
    referer: "<value>",
    refererUrl: "<value>",
    ip: "11fc:30e6:4f25:feb8:b3fc:d0fe:b72a:d2a0",
  },
  link: {
    id: "<id>",
    domain: "wide-eyed-object.name",
    key: "<key>",
    externalId: "<value>",
    url: "https://vengeful-doing.net/",
    expiresAt: "<value>",
    expiredUrl: "https://spherical-legend.com",
    password: "MJ4IB0J9RwnUqZX",
    title: "<value>",
    description: "Adaptive cohesive time-frame",
    image: "https://loremflickr.com/1322/2553?lock=8537220595218710",
    video: "<value>",
    ios: "<value>",
    android: "<value>",
    geo: {},
    tagId: "<value>",
    tags: [
      {
        id: "<id>",
        name: "<value>",
        color: "pink",
      },
    ],
    comments: "<value>",
    shortLink: "https://squiggly-cafe.info/",
    qrCode: "https://rich-brochure.info/",
    utmSource: "<value>",
    utmMedium: "<value>",
    utmCampaign: "<value>",
    utmTerm: "<value>",
    utmContent: "<value>",
    userId: "<value>",
    workspaceId: "<value>",
    lastClicked: "<value>",
    createdAt: "<value>",
    updatedAt: "<value>",
    projectId: "<value>",
  },
  sale: {
    amount: 2766.50,
    currency: "Sri Lanka Rupee",
    paymentProcessor: "<value>",
    invoiceId: "<value>",
  },
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `eventName`                                                                          | *string*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `customer`                                                                           | [components.WebhookEvent4Customer](../../models/components/webhookevent4customer.md) | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `click`                                                                              | [components.WebhookEvent4Click](../../models/components/webhookevent4click.md)       | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `link`                                                                               | [components.WebhookEvent4Link](../../models/components/webhookevent4link.md)         | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `sale`                                                                               | [components.WebhookEventSale](../../models/components/webhookeventsale.md)           | :heavy_check_mark:                                                                   | N/A                                                                                  |