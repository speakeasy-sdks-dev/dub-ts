# WebhookEventData

## Example Usage

```typescript
import { WebhookEventData } from "dub/models/components";

let value: WebhookEventData = {
  click: {
    id: "<id>",
    url: "https://courageous-tenant.com",
    continent: "<value>",
    country: "Cape Verde",
    city: "Brekkestead",
    device: "<value>",
    browser: "<value>",
    os: "<value>",
    referer: "<value>",
    refererUrl: "<value>",
    ip: "186.230.197.217",
  },
  link: {
    id: "<id>",
    domain: "anguished-experience.name",
    key: "<key>",
    externalId: "<value>",
    url: "https://enraged-exhaust.org/",
    expiresAt: "<value>",
    expiredUrl: "https://handy-academics.org/",
    password: "49u4lmy5g301NIE",
    title: "<value>",
    description: "Compatible human-resource secured line",
    image: "https://picsum.photos/seed/eLTN60bgCn/3273/322",
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
    shortLink: "https://cruel-extension.org/",
    qrCode: "https://dreary-scorpion.biz",
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

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `click`                                                                      | [components.WebhookEventClick](../../models/components/webhookeventclick.md) | :heavy_check_mark:                                                           | N/A                                                                          |
| `link`                                                                       | [components.WebhookEventLink](../../models/components/webhookeventlink.md)   | :heavy_check_mark:                                                           | N/A                                                                          |