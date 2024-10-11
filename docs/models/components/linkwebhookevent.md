# LinkWebhookEvent

Triggered when a link is created, updated, or deleted.

## Example Usage

```typescript
import { LinkWebhookEvent } from "dub/models/components";

let value: LinkWebhookEvent = {
  id: "<id>",
  event: "link.updated",
  createdAt: "<value>",
  data: {
    id: "<id>",
    domain: "ugly-advertisement.org",
    key: "<key>",
    url: "https://inexperienced-license.net",
    externalId: "<id>",
    identifier: "<value>",
    expiresAt: "<value>",
    expiredUrl: "https://mature-joy.org",
    password: "7acV9PQ63fE7rGd",
    title: "<value>",
    description: "until barring per fen through",
    image: "https://picsum.photos/seed/f9UkuqqL/674/3189",
    video: "https://picsum.videos/seed/yGIKkS/3740/2547",
    ios: "<value>",
    android: "<id>",
    geo: {},
    tagId: "<id>",
    tags: [
      {
        id: "<id>",
        name: "<value>",
        color: "red",
      },
    ],
    comments:
      "whereas ultimately bah serene woefully marksman brr unabashedly heighten",
    shortLink: "https://sorrowful-vicinity.com",
    qrCode: "https://complete-alliance.net",
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
};
```

## Fields

| Field                                              | Type                                               | Required                                           | Description                                        |
| -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- |
| `id`                                               | *string*                                           | :heavy_check_mark:                                 | N/A                                                |
| `event`                                            | *components.LinkWebhookEventEvent*                 | :heavy_check_mark:                                 | N/A                                                |
| `createdAt`                                        | *string*                                           | :heavy_check_mark:                                 | N/A                                                |
| `data`                                             | [components.Data](../../models/components/data.md) | :heavy_check_mark:                                 | N/A                                                |