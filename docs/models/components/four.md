# Four

## Example Usage

```typescript
import { Four } from "dub/models/components";

let value: Four = {
  id: "<id>",
  event: "sale.created",
  createdAt: "<value>",
  data: {
    eventName: "<value>",
    customer: {
      id: "<id>",
      name: "<value>",
      email: "Meghan26@yahoo.com",
      avatar: "https://picsum.photos/seed/DK9qT/3822/1266",
    },
    click: {
      id: "<id>",
      url: "https://agitated-mouser.info/",
      continent: "<value>",
      country: "Seychelles",
      city: "Fairfield",
      device: "<value>",
      browser: "<value>",
      os: "<value>",
      referer: "<value>",
      refererUrl: "<value>",
      ip: "124.150.251.178",
    },
    link: {
      id: "<id>",
      domain: "illiterate-dividend.org",
      key: "<key>",
      externalId: "<value>",
      url: "https://self-reliant-translation.name/",
      expiresAt: "<value>",
      expiredUrl: "https://disloyal-fund.net/",
      password: "ysnwDEVFzur_AUn",
      title: "<value>",
      description: "Compatible responsive adapter",
      image: "https://loremflickr.com/3265/3230?lock=5648961492882080",
      video: "<value>",
      ios: "<value>",
      android: "<value>",
      geo: {},
      tagId: "<value>",
      tags: [
        {
          id: "<id>",
          name: "<value>",
          color: "blue",
        },
      ],
      comments: "<value>",
      shortLink: "https://creamy-saloon.name/",
      qrCode: "https://worst-wriggler.com",
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
      amount: 9382.56,
      currency: "Algerian Dinar",
      paymentProcessor: "<value>",
      invoiceId: "<value>",
    },
  },
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `id`                                                                           | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `event`                                                                        | [components.WebhookEvent4Event](../../models/components/webhookevent4event.md) | :heavy_check_mark:                                                             | N/A                                                                            |
| `createdAt`                                                                    | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `data`                                                                         | [components.WebhookEvent4Data](../../models/components/webhookevent4data.md)   | :heavy_check_mark:                                                             | N/A                                                                            |