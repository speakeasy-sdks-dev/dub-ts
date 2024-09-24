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
      email: "Mikel_Ullrich@yahoo.com",
      avatar: "https://loremflickr.com/2807/554?lock=4332845180114027",
    },
    click: {
      id: "<id>",
      url: "https://tough-morbidity.info/",
      continent: "<value>",
      country: "Sudan",
      city: "Yucaipa",
      device: "<value>",
      browser: "<value>",
      os: "<value>",
      referer: "<value>",
      ip: "92c1:7efe:f0bc:7157:9df6:7005:adaa:cffd",
    },
    link: {
      id: "<id>",
      domain: "outrageous-mortise.com",
      key: "<key>",
      externalId: "<value>",
      url: "https://competent-relative.net",
      expiresAt: "<value>",
      expiredUrl: "https://dirty-bracelet.net/",
      password: "LdwxHz3_obHEFYt",
      title: "<value>",
      description: "Up-sized 6th generation capacity",
      image: "https://loremflickr.com/449/774?lock=4562431794221198",
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
      shortLink: "https://unimportant-wombat.name",
      qrCode: "https://spanish-exhaust.org",
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