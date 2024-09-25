# Three

## Example Usage

```typescript
import { Three } from "dub/models/components";

let value: Three = {
  id: "<id>",
  event: "lead.created",
  createdAt: "<value>",
  data: {
    eventName: "<value>",
    customer: {
      id: "<id>",
      name: "<value>",
      email: "Kaden.Hyatt40@hotmail.com",
      avatar: "https://loremflickr.com/1974/2628?lock=8423177067450595",
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
  },
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `id`                                                                           | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `event`                                                                        | [components.WebhookEvent3Event](../../models/components/webhookevent3event.md) | :heavy_check_mark:                                                             | N/A                                                                            |
| `createdAt`                                                                    | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `data`                                                                         | [components.WebhookEvent3Data](../../models/components/webhookevent3data.md)   | :heavy_check_mark:                                                             | N/A                                                                            |