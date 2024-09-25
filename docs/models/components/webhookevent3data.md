# WebhookEvent3Data

## Example Usage

```typescript
import { WebhookEvent3Data } from "dub/models/components";

let value: WebhookEvent3Data = {
  eventName: "<value>",
  customer: {
    id: "<id>",
    name: "<value>",
    email: "Donavon94@gmail.com",
    avatar: "https://loremflickr.com/3124/676?lock=3727000887933938",
  },
  click: {
    id: "<id>",
    url: "https://french-event.info",
    continent: "<value>",
    country: "Sint Maarten",
    city: "Archton",
    device: "<value>",
    browser: "<value>",
    os: "<value>",
    referer: "<value>",
    refererUrl: "<value>",
    ip: "196.176.181.196",
  },
  link: {
    id: "<id>",
    domain: "forceful-mantua.name",
    key: "<key>",
    externalId: "<value>",
    url: "https://well-to-do-dusk.net",
    expiresAt: "<value>",
    expiredUrl: "https://ornery-sand.org",
    password: "hR5csKPTA0UuiC4",
    title: "<value>",
    description: "Multi-tiered zero tolerance support",
    image: "https://picsum.photos/seed/cFD7g3d8/474/101",
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
    shortLink: "https://authorized-brief.com",
    qrCode: "https://frightened-disconnection.net/",
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