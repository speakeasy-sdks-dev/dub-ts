# SaleCreatedEventData

## Example Usage

```typescript
import { SaleCreatedEventData } from "dub/models/components";

let value: SaleCreatedEventData = {
  eventName: "<value>",
  customer: {
    id: "<id>",
    name: "<value>",
    email: "Mossie35@gmail.com",
    avatar: "https://loremflickr.com/1467/33?lock=2570117569072513",
  },
  click: {
    id: "<id>",
    url: "https://hefty-shipper.biz/",
    continent: "Asia",
    country: "Slovakia",
    city: "DuBuquebury",
    device: "Desktop",
    browser: "Chrome",
    os: "Windows Phone",
    referer: "gleaming-lava.name",
    refererUrl: "https://wasteful-deployment.org",
    ip: "7.27.164.135",
  },
  link: {
    id: "<id>",
    domain: "damp-chiffonier.name",
    key: "<key>",
    url: "https://dense-disposer.com",
    externalId: "<id>",
    identifier: "<value>",
    expiresAt: "<value>",
    expiredUrl: "https://variable-descent.info",
    password: "wdSffO4xAbZJcNA",
    title: "<value>",
    description: "anxiously hidden or oxygenate inspect",
    image: "https://picsum.photos/seed/IksWmatE/3374/3722",
    video: "https://loremflickr.com/506/489?lock=8175376309681402",
    ios: "<value>",
    android: "<id>",
    geo: {},
    tagId: "<id>",
    tags: [
      {
        id: "<id>",
        name: "<value>",
        color: "purple",
      },
    ],
    webhookIds: [
      "<value>",
    ],
    comments: "wisely overwork outfit an rebuff till ready openly",
    shortLink: "https://judicious-angle.biz/",
    qrCode: "https://unsightly-dependency.net",
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
    amount: 289.47,
    currency: "Argentine Peso",
    paymentProcessor: "<value>",
    invoiceId: "<id>",
  },
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `eventName`                                                                                | *string*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `customer`                                                                                 | [components.SaleCreatedEventCustomer](../../models/components/salecreatedeventcustomer.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `click`                                                                                    | [components.SaleCreatedEventClick](../../models/components/salecreatedeventclick.md)       | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `link`                                                                                     | [components.SaleCreatedEventLink](../../models/components/salecreatedeventlink.md)         | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `sale`                                                                                     | [components.SaleCreatedEventSale](../../models/components/salecreatedeventsale.md)         | :heavy_check_mark:                                                                         | N/A                                                                                        |