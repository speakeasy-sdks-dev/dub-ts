# WebhookEvent4Data

## Example Usage

```typescript
import { WebhookEvent4Data } from "dub/models/components";

let value: WebhookEvent4Data = {
  eventName: "<value>",
  customer: {
    id: "<id>",
    name: "<value>",
    email: "Roxanne_Brown-Murray@yahoo.com",
    avatar: "https://loremflickr.com/512/2333?lock=1791634025370874",
  },
  click: {
    id: "<id>",
    url: "https://gracious-packaging.biz",
    continent: "<value>",
    country: "United States Minor Outlying Islands",
    city: "Harberfield",
    device: "<value>",
    browser: "<value>",
    os: "<value>",
    referer: "<value>",
    ip: "100.56.175.26",
  },
  link: {
    id: "<id>",
    domain: "impassioned-dulcimer.name",
    key: "<key>",
    externalId: "<value>",
    url: "https://sarcastic-airmail.name/",
    expiresAt: "<value>",
    expiredUrl: "https://filthy-self-confidence.org/",
    password: "ohIuYJlxEOXcFze",
    title: "<value>",
    description: "Up-sized multimedia groupware",
    image: "https://picsum.photos/seed/VROUhmny/796/1470",
    video: "<value>",
    ios: "<value>",
    android: "<value>",
    geo: {},
    tagId: "<value>",
    tags: [
      {
        id: "<id>",
        name: "<value>",
        color: "purple",
      },
    ],
    comments: "<value>",
    shortLink: "https://agreeable-guard.biz/",
    qrCode: "https://unhealthy-strategy.name",
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
    amount: 3442.89,
    currency: "Kyat",
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