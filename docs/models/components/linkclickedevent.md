# LinkClickedEvent

Triggered when a link is clicked.

## Example Usage

```typescript
import { LinkClickedEvent } from "dub/models/components";

let value: LinkClickedEvent = {
  id: "<id>",
  event: "link.clicked",
  createdAt: "<value>",
  data: {
    click: {
      id: "<id>",
      url: "https://short-polyester.com",
      continent: "Asia",
      country: "Aland Islands",
      city: "North Cloydton",
      device: "Desktop",
      browser: "Chrome",
      os: "WebOS",
      referer: "back-wheel.name",
      refererUrl: "https://quiet-sanity.biz",
      ip: "170.144.129.45",
    },
    link: {
      id: "<id>",
      domain: "enlightened-marathon.info",
      key: "<key>",
      url: "https://next-hose.org",
      externalId: "<id>",
      identifier: "<value>",
      expiresAt: "<value>",
      expiredUrl: "https://firm-fold.org/",
      password: "isO_9NHtqMGiA7G",
      title: "<value>",
      description: "meh than bah once creative",
      image: "https://picsum.photos/seed/PaZEqTAZK/3145/3651",
      video: "https://picsum.videos/seed/S8mDtG/1470/2970",
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
      comments: "once store debit heartache astride omelet",
      shortLink: "https://silky-airbus.name",
      qrCode: "https://heartfelt-wriggler.name/",
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
  },
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `id`                                                                                 | *string*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `event`                                                                              | [components.LinkClickedEventEvent](../../models/components/linkclickedeventevent.md) | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `createdAt`                                                                          | *string*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `data`                                                                               | [components.LinkClickedEventData](../../models/components/linkclickedeventdata.md)   | :heavy_check_mark:                                                                   | N/A                                                                                  |