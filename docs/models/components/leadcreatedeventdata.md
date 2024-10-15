# LeadCreatedEventData

## Example Usage

```typescript
import { LeadCreatedEventData } from "dub/models/components";

let value: LeadCreatedEventData = {
  eventName: "<value>",
  customer: {
    id: "<id>",
    name: "<value>",
    email: "Larue.Brekke95@hotmail.com",
    avatar: "https://loremflickr.com/1938/3025?lock=4139381963214333",
  },
  click: {
    id: "<id>",
    url: "https://faraway-swath.org/",
    continent: "North America",
    country: "Albania",
    city: "Feeneyboro",
    device: "Desktop",
    browser: "Firefox",
    os: "iOS",
    referer: "diligent-tribe.biz",
    refererUrl: "https://alive-contractor.net",
    ip: "e992:3eaa:e0bd:999c:daf1:ffc0:eae9:cda3",
  },
  link: {
    id: "<id>",
    domain: "instructive-goat.net",
    key: "<key>",
    url: "https://advanced-kick.biz",
    externalId: "<id>",
    identifier: "<value>",
    expiresAt: "<value>",
    expiredUrl: "https://rapid-space.name/",
    password: "3hRmHbLW8Rfk0sq",
    title: "<value>",
    description: "boo sardonic deflect yum shrilly",
    image: "https://picsum.photos/seed/aWxepIVU/1619/2990",
    video: "https://picsum.videos/seed/sNQE3O1/562/3487",
    ios: "<value>",
    android: "<id>",
    geo: {},
    tagId: "<id>",
    tags: [
      {
        id: "<id>",
        name: "<value>",
        color: "green",
      },
    ],
    webhookIds: [
      "<value>",
    ],
    comments:
      "adrenalin bonfire catch brr than a yet coolly but pick creature with",
    shortLink: "https://equatorial-divine.info",
    qrCode: "https://entire-scratch.net/",
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

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `eventName`                                                                                | *string*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `customer`                                                                                 | [components.LeadCreatedEventCustomer](../../models/components/leadcreatedeventcustomer.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `click`                                                                                    | [components.LeadCreatedEventClick](../../models/components/leadcreatedeventclick.md)       | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `link`                                                                                     | [components.LeadCreatedEventLink](../../models/components/leadcreatedeventlink.md)         | :heavy_check_mark:                                                                         | N/A                                                                                        |