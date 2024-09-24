# WebhookEvent3Data

## Example Usage

```typescript
import { WebhookEvent3Data } from "dub/models/components";

let value: WebhookEvent3Data = {
  eventName: "<value>",
  customer: {
    id: "<id>",
    name: "<value>",
    email: "Clemens.Beatty13@gmail.com",
    avatar: "https://picsum.photos/seed/xWo6piuEsV/1195/1021",
  },
  click: {
    id: "<id>",
    url: "https://rusty-jump.com",
    continent: "<value>",
    country: "Holy See (Vatican City State)",
    city: "Grahamland",
    device: "<value>",
    browser: "<value>",
    os: "<value>",
    referer: "<value>",
    refererUrl: "<value>",
    ip: "fdbc:ade5:dbbe:6fda:bae7:4ec0:e9d7:ab3f",
  },
  link: {
    id: "<id>",
    domain: "sweet-backbone.biz",
    key: "<key>",
    externalId: "<value>",
    url: "https://well-to-do-pigpen.org/",
    expiresAt: "<value>",
    expiredUrl: "https://stingy-gerbil.info",
    password: "D_Cv36Kp6OylUX3",
    title: "<value>",
    description: "Intuitive methodical product",
    image: "https://picsum.photos/seed/YESyJL/1652/2840",
    video: "<value>",
    ios: "<value>",
    android: "<value>",
    geo: {},
    tagId: "<value>",
    tags: [
      {
        id: "<id>",
        name: "<value>",
        color: "brown",
      },
    ],
    comments: "<value>",
    shortLink: "https://normal-horde.org/",
    qrCode: "https://worst-suspension.com/",
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
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `eventName`                                                                        | *string*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `customer`                                                                         | [components.WebhookEventCustomer](../../models/components/webhookeventcustomer.md) | :heavy_check_mark:                                                                 | N/A                                                                                |
| `click`                                                                            | [components.WebhookEvent3Click](../../models/components/webhookevent3click.md)     | :heavy_check_mark:                                                                 | N/A                                                                                |
| `link`                                                                             | [components.WebhookEvent3Link](../../models/components/webhookevent3link.md)       | :heavy_check_mark:                                                                 | N/A                                                                                |