# Two

## Example Usage

```typescript
import { Two } from "dub/models/components";

let value: Two = {
  id: "<id>",
  event: "link.clicked",
  createdAt: "<value>",
  data: {
    click: {
      id: "<id>",
      url: "https://partial-horde.name/",
      continent: "<value>",
      country: "India",
      city: "Maureenland",
      device: "<value>",
      browser: "<value>",
      os: "<value>",
      referer: "<value>",
      refererUrl: "<value>",
      ip: "217.197.72.96",
    },
    link: {
      id: "<id>",
      domain: "variable-skyline.name",
      key: "<key>",
      externalId: "<value>",
      url: "https://assured-hose.net/",
      expiresAt: "<value>",
      expiredUrl: "https://those-allocation.biz",
      password: "A2miRv0cVHfvjqQ",
      title: "<value>",
      description: "Inverse context-sensitive encoding",
      image: "https://loremflickr.com/3781/1177?lock=33414671356426",
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
      shortLink: "https://downright-disconnection.org/",
      qrCode: "https://stark-shoulder.org/",
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
| `event`                                                                        | [components.WebhookEvent2Event](../../models/components/webhookevent2event.md) | :heavy_check_mark:                                                             | N/A                                                                            |
| `createdAt`                                                                    | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `data`                                                                         | [components.WebhookEventData](../../models/components/webhookeventdata.md)     | :heavy_check_mark:                                                             | N/A                                                                            |