# LinkClickedEventData

## Example Usage

```typescript
import { LinkClickedEventData } from "dub/models/components";

let value: LinkClickedEventData = {
  click: {
    id: "<id>",
    url: "https://intelligent-traffic.info/",
    continent: "North America",
    country: "Bonaire, Sint Eustatius and Saba",
    city: "Lake Lillie",
    device: "Desktop",
    browser: "Safari",
    os: "WebOS",
    referer: "unpleasant-hunt.name",
    refererUrl: "https://vast-iridescence.info/",
    ip: "07c9:7c87:56ef:2aed:06aa:0bcd:dba5:dbc4",
  },
  link: {
    id: "<id>",
    domain: "busy-precedent.org",
    key: "<key>",
    url: "https://motionless-pantyhose.com",
    externalId: "<id>",
    identifier: "<value>",
    expiresAt: "<value>",
    expiredUrl: "https://mysterious-swim.info/",
    password: "YO0AQ3xs9c3fzW0",
    title: "<value>",
    description: "noisily thorn peter behind huzzah now",
    image: "https://picsum.photos/seed/Ril1yYJZs/2435/3083",
    video: "https://loremflickr.com/2990/645?lock=5797158394681602",
    ios: "<value>",
    android: "<id>",
    geo: {},
    tagId: "<id>",
    tags: [
      {
        id: "<id>",
        name: "<value>",
        color: "blue",
      },
    ],
    webhookIds: [
      "<value>",
    ],
    comments: "gee anneal sate duh though",
    shortLink: "https://trim-bid.biz/",
    qrCode: "https://advanced-bowler.org/",
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

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `click`                                                                              | [components.LinkClickedEventClick](../../models/components/linkclickedeventclick.md) | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `link`                                                                               | [components.LinkClickedEventLink](../../models/components/linkclickedeventlink.md)   | :heavy_check_mark:                                                                   | N/A                                                                                  |