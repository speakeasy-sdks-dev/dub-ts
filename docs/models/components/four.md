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
      email: "Monserrate.Adams70@gmail.com",
      avatar: "https://loremflickr.com/2307/853?lock=7813052355806152",
    },
    click: {
      id: "<id>",
      url: "https://rigid-hundred.com/",
      continent: "Asia",
      country: "Spain",
      city: "Spokane Valley",
      device: "Desktop",
      browser: "Firefox",
      os: "BeOS",
      referer: "nice-sanity.net",
      refererUrl: "https://grounded-invite.org/",
      ip: "928b:d66d:b43a:bbf8:80ce:aae0:2811:c4de",
    },
    link: {
      id: "<id>",
      domain: "superb-digestive.com",
      key: "<key>",
      externalId: "<id>",
      url: "https://young-gerbil.info",
      expiresAt: "<value>",
      expiredUrl: "https://scary-heroine.net/",
      password: "WmbZShDNG4F586B",
      title: "<value>",
      description: "defiantly rightfully behind tuxedo",
      image: "https://loremflickr.com/1581/3616?lock=2923736870228263",
      video: "https://loremflickr.com/3982/3809?lock=7540845473996624",
      ios: "<value>",
      android: "<id>",
      geo: {},
      tagId: "<id>",
      tags: [
        {
          id: "<id>",
          name: "<value>",
          color: "green",
        },
      ],
      comments:
        "pillow duffel that ack innovation and shark instead energetically alongside judgementally furthermore meh woot round whereas whenever essence frankly folklore",
      shortLink: "https://gorgeous-nerve.biz/",
      qrCode: "https://broken-fen.net",
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
      amount: 6029.32,
      currency: "Boliviano boliviano",
      paymentProcessor: "<value>",
      invoiceId: "<id>",
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