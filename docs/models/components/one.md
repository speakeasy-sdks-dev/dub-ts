# One

## Example Usage

```typescript
import { One } from "dub/models/components";

let value: One = {
  id: "<id>",
  event: "link.updated",
  createdAt: "<value>",
  data: {
    id: "<id>",
    domain: "substantial-nougat.org",
    key: "<key>",
    externalId: "<value>",
    url: "https://chubby-mathematics.net",
    expiresAt: "<value>",
    expiredUrl: "https://altruistic-publicity.net",
    password: "gQLUcxucPBWaW2y",
    title: "<value>",
    description: "Operative asynchronous software",
    image: "https://loremflickr.com/3932/1794?lock=1058759709975844",
    video: "<value>",
    ios: "<value>",
    android: "<value>",
    geo: {},
    tagId: "<value>",
    tags: [
      {
        id: "<id>",
        name: "<value>",
        color: "green",
      },
    ],
    comments: "<value>",
    shortLink: "https://creamy-smog.com",
    qrCode: "https://prudent-bandwidth.name/",
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

| Field                                              | Type                                               | Required                                           | Description                                        |
| -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- |
| `id`                                               | *string*                                           | :heavy_check_mark:                                 | N/A                                                |
| `event`                                            | *components.WebhookEventEvent*                     | :heavy_check_mark:                                 | N/A                                                |
| `createdAt`                                        | *string*                                           | :heavy_check_mark:                                 | N/A                                                |
| `data`                                             | [components.Data](../../models/components/data.md) | :heavy_check_mark:                                 | N/A                                                |