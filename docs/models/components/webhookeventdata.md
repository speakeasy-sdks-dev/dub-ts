# WebhookEventData

## Example Usage

```typescript
import { WebhookEventData } from "dub/models/components";

let value: WebhookEventData = {
  click: {
    id: "<id>",
    url: "https://crafty-tooth.info",
    continent: "<value>",
    country: "France",
    city: "Wyoming",
    device: "<value>",
    browser: "<value>",
    os: "<value>",
    referer: "<value>",
    refererUrl: "<value>",
    ip: "168.27.166.211",
  },
  link: {
    id: "<id>",
    domain: "right-heating.info",
    key: "<key>",
    externalId: "<value>",
    url: "https://overcooked-swine.org/",
    expiresAt: "<value>",
    expiredUrl: "https://delirious-cantaloupe.biz/",
    password: "AQfu_qjtLm2HRKl",
    title: "<value>",
    description: "Versatile responsive application",
    image: "https://loremflickr.com/3219/267?lock=1378974255081881",
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
    shortLink: "https://reckless-instruction.org",
    qrCode: "https://snarling-sunbeam.name/",
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