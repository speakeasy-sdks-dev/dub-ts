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
      email: "Ayla_Bauch80@hotmail.com",
      avatar: "https://loremflickr.com/2509/2010?lock=1336478656866918",
    },
    click: {
      id: "<id>",
      url: "https://odd-whack.org",
      continent: "<value>",
      country: "Zambia",
      city: "Fort Deionport",
      device: "<value>",
      browser: "<value>",
      os: "<value>",
      referer: "<value>",
      ip: "4c42:2709:e811:63f3:bccb:f8bc:8fd2:9bfe",
    },
    link: {
      id: "<id>",
      domain: "far-off-reward.info",
      key: "<key>",
      externalId: "<value>",
      url: "https://well-off-waterspout.org",
      expiresAt: "<value>",
      expiredUrl: "https://unhappy-packaging.info/",
      password: "jPkhlmUMazqEo_s",
      title: "<value>",
      description: "Focused global project",
      image: "https://picsum.photos/seed/SLI3o/2710/3751",
      video: "<value>",
      ios: "<value>",
      android: "<value>",
      geo: {},
      tagId: "<value>",
      tags: [
        {
          id: "<id>",
          name: "<value>",
          color: "yellow",
        },
      ],
      comments: "<value>",
      shortLink: "https://rural-switch.org",
      qrCode: "https://young-obesity.com",
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
      amount: 142.52,
      currency: "Hong Kong Dollar",
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