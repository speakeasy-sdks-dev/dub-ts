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
      url: "https://darling-pick.com",
      continent: "<value>",
      country: "Virgin Islands, British",
      city: "Spinkastead",
      device: "<value>",
      browser: "<value>",
      os: "<value>",
      referer: "<value>",
      refererUrl: "<value>",
      ip: "159.135.120.194",
    },
    link: {
      id: "<id>",
      domain: "definitive-commodity.info",
      key: "<key>",
      externalId: "<value>",
      url: "https://blond-starboard.net/",
      expiresAt: "<value>",
      expiredUrl: "https://wordy-bell.net",
      password: "D5kp_nvhVpT6PVt",
      title: "<value>",
      description: "Re-contextualized mobile time-frame",
      image: "https://picsum.photos/seed/0BZOl9M/3833/3297",
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
      shortLink: "https://turbulent-marten.com",
      qrCode: "https://genuine-laughter.biz/",
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