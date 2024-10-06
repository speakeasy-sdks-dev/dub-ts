# LeadCreatedEvent

Triggered when a lead is created.

## Example Usage

```typescript
import { LeadCreatedEvent } from "dub/models/components";

let value: LeadCreatedEvent = {
  id: "<id>",
  event: "lead.created",
  createdAt: "<value>",
  data: {
    eventName: "<value>",
    customer: {
      id: "<id>",
      name: "<value>",
      email: "Abigale63@hotmail.com",
      avatar: "https://picsum.photos/seed/xVJ5MTP/2684/1564",
    },
    click: {
      id: "<id>",
      url: "https://superior-beret.biz/",
      continent: "South America",
      country: "Argentina",
      city: "Port Isabell",
      device: "Desktop",
      browser: "Firefox",
      os: "WebOS",
      referer: "giving-testing.org",
      refererUrl: "https://bulky-essence.info/",
      ip: "61.238.183.153",
    },
    link: {
      id: "<id>",
      domain: "sardonic-abacus.com",
      key: "<key>",
      url: "https://scratchy-sticker.name",
      externalId: "<id>",
      identifier: "<value>",
      expiresAt: "<value>",
      expiredUrl: "https://impassioned-skean.org",
      password: "KDlJPvt2qQbuZah",
      title: "<value>",
      description: "council absent quietly",
      image: "https://picsum.photos/seed/z8RKXNAU/2447/2140",
      video: "https://loremflickr.com/2617/1241?lock=5443120578657445",
      ios: "<value>",
      android: "<id>",
      geo: {},
      tagId: "<id>",
      tags: [
        {
          id: "<id>",
          name: "<value>",
          color: "pink",
        },
      ],
      comments:
        "forsaken beloved inspection famously conservative scramble officially sticky versus shoulder whereas around generously from intensely underneath what yippee",
      shortLink: "https://damp-galoshes.org/",
      qrCode: "https://messy-instructor.info/",
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
| `event`                                                                              | [components.LeadCreatedEventEvent](../../models/components/leadcreatedeventevent.md) | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `createdAt`                                                                          | *string*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `data`                                                                               | [components.LeadCreatedEventData](../../models/components/leadcreatedeventdata.md)   | :heavy_check_mark:                                                                   | N/A                                                                                  |