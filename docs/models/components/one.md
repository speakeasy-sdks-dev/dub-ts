# One

## Example Usage

```typescript
import { One } from "dub/models/components";

let value: One = {
  id: "<id>",
  event: "link.deleted",
  createdAt: "<value>",
  data: {
    id: "<id>",
    domain: "equatorial-divine.info",
    key: "<key>",
    externalId: "<id>",
    url: "https://entire-scratch.net/",
    expiresAt: "<value>",
    expiredUrl: "https://accomplished-tomography.info",
    password: "gFrBTxfjvoNo9sF",
    title: "<value>",
    description: "twist er until known unlike over brook council absent",
    image: "https://picsum.photos/seed/MuDBx/3429/3877",
    video: "https://picsum.videos/seed/RKXNA/2700/2465",
    ios: "<value>",
    android: "<id>",
    geo: {},
    tagId: "<id>",
    tags: [
      {
        id: "<id>",
        name: "<value>",
        color: "brown",
      },
    ],
    comments:
      "until usually even by wholly unnecessarily amid far-off beloved decent whoa lively publicity briskly oof",
    shortLink: "https://edible-bowler.com",
    qrCode: "https://inferior-diagram.org/",
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
| `event`                                            | *components.WebhookEventEvent*                     | :heavy_check_mark:                                 | N/A                                                |
| `createdAt`                                        | *string*                                           | :heavy_check_mark:                                 | N/A                                                |
| `data`                                             | [components.Data](../../models/components/data.md) | :heavy_check_mark:                                 | N/A                                                |