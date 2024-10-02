# WebhookEvent4Data

## Example Usage

```typescript
import { WebhookEvent4Data } from "dub/models/components";

let value: WebhookEvent4Data = {
  eventName: "<value>",
  customer: {
    id: "<id>",
    name: "<value>",
    email: "Kari_OConner@yahoo.com",
    avatar: "https://picsum.photos/seed/xF5tRBWg5/2184/3248",
  },
  click: {
    id: "<id>",
    url: "https://broken-scarification.biz",
    continent: "Australia",
    country: "Slovakia",
    city: "Kunzeworth",
    device: "Desktop",
    browser: "Chrome",
    os: "Android",
    referer: "silent-humor.info",
    refererUrl: "https://fruitful-strategy.net/",
    ip: "006a:e86c:eac4:2bff:87bf:cf8c:46b7:e646",
  },
  link: {
    id: "<id>",
    domain: "unfortunate-incandescence.biz",
    key: "<key>",
    url: "https://acceptable-restaurant.biz/",
    externalId: "<id>",
    identifier: "<value>",
    expiresAt: "<value>",
    expiredUrl: "https://all-soybean.biz",
    password: "x9PGykiRoLMO7x9",
    title: "<value>",
    description: "but jealously overfeed warp",
    image: "https://picsum.photos/seed/dLuZAV/185/2633",
    video: "https://picsum.videos/seed/PqIz7IH/49/619",
    ios: "<value>",
    android: "<id>",
    geo: {},
    tagId: "<id>",
    tags: [
      {
        id: "<id>",
        name: "<value>",
        color: "red",
      },
    ],
    comments:
      "energetically sharply swiftly exalted gee unlike before coin after kindheartedly whereas obvious matter",
    shortLink: "https://whole-legend.com/",
    qrCode: "https://filthy-bump.net",
    utmSource: "<value>",
    utmMedium: "<value>",
    utmCampaign: "<value>",
    utmTerm: "<value>",
    utmContent: "<value>",
    userId: "<id>",
    workspaceId: "<id>",
    lastClicked: "<value>",
    createdAt: "<value>",
    updatedAt: "<value>",
    projectId: "<id>",
  },
  sale: {
    amount: 1979.08,
    currency: "Bermudian Dollar (customarily known as Bermuda Dollar)",
    paymentProcessor: "<value>",
    invoiceId: "<id>",
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