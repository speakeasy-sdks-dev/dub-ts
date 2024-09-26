# WebhookEventData

## Example Usage

```typescript
import { WebhookEventData } from "dub/models/components";

let value: WebhookEventData = {
  click: {
    id: "<id>",
    url: "https://muted-chow.net/",
    continent: "South America",
    country: "Slovakia",
    city: "Sioux Falls",
    device: "Desktop",
    browser: "Safari",
    os: "Blackberry",
    referer: "innocent-tabletop.name",
    refererUrl: "https://sleepy-fund.net",
    ip: "6d38:daef:1ab6:598b:4abd:e6d9:52f1:b4d4",
  },
  link: {
    id: "<id>",
    domain: "shoddy-collaboration.org",
    key: "<key>",
    externalId: "<id>",
    url: "https://infamous-vestment.name",
    expiresAt: "<value>",
    expiredUrl: "https://damp-pupil.name/",
    password: "685PfngWJC_8SgB",
    title: "<value>",
    description: "grandpa before vastly tightly",
    image: "https://loremflickr.com/1682/2792?lock=8474557665880699",
    video: "https://loremflickr.com/274/624?lock=1990595598880841",
    ios: "<value>",
    android: "<id>",
    geo: {},
    tagId: "<id>",
    tags: [
      {
        id: "<id>",
        name: "<value>",
        color: "yellow",
      },
    ],
    comments: "hm charm inasmuch musty fowl deduce anenst",
    shortLink: "https://circular-thunderbolt.name/",
    qrCode: "https://blaring-loyalty.com/",
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

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `click`                                                                      | [components.WebhookEventClick](../../models/components/webhookeventclick.md) | :heavy_check_mark:                                                           | N/A                                                                          |
| `link`                                                                       | [components.WebhookEventLink](../../models/components/webhookeventlink.md)   | :heavy_check_mark:                                                           | N/A                                                                          |