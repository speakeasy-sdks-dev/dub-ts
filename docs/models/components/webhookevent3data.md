# WebhookEvent3Data

## Example Usage

```typescript
import { WebhookEvent3Data } from "dub/models/components";

let value: WebhookEvent3Data = {
  eventName: "<value>",
  customer: {
    id: "<id>",
    name: "<value>",
    email: "Giovanni5@hotmail.com",
    avatar: "https://picsum.photos/seed/eQUlDa/3774/517",
  },
  click: {
    id: "<id>",
    url: "https://unconscious-farmer.name",
    continent: "South America",
    country: "Algeria",
    city: "Modesto",
    device: "Desktop",
    browser: "Firefox",
    os: "BeOS",
    referer: "sentimental-knight.info",
    refererUrl: "https://entire-bowling.net",
    ip: "c56d:6a7b:54a8:5c82:f6cd:f46e:f9a9:93b5",
  },
  link: {
    id: "<id>",
    domain: "pricey-guacamole.org",
    key: "<key>",
    externalId: "<id>",
    url: "https://crazy-mousse.net",
    expiresAt: "<value>",
    expiredUrl: "https://circular-knuckle.info",
    password: "X7f5mJn0lR90xPJ",
    title: "<value>",
    description: "till know why pupil transom stale",
    image: "https://picsum.photos/seed/kY3Cuex4yQ/2544/3203",
    video: "https://picsum.videos/seed/pktn8c4/564/1302",
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
    comments:
      "heighten although joshingly preheat between whoa underneath lest hospitalization gadzooks testing adult under curse meager dish provided gee",
    shortLink: "https://all-ownership.com/",
    qrCode: "https://cumbersome-charm.net/",
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

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `eventName`                                                                        | *string*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `customer`                                                                         | [components.WebhookEventCustomer](../../models/components/webhookeventcustomer.md) | :heavy_check_mark:                                                                 | N/A                                                                                |
| `click`                                                                            | [components.WebhookEvent3Click](../../models/components/webhookevent3click.md)     | :heavy_check_mark:                                                                 | N/A                                                                                |
| `link`                                                                             | [components.WebhookEvent3Link](../../models/components/webhookevent3link.md)       | :heavy_check_mark:                                                                 | N/A                                                                                |