# Three

## Example Usage

```typescript
import { Three } from "dub/models/components";

let value: Three = {
  id: "<id>",
  event: "lead.created",
  createdAt: "<value>",
  data: {
    eventName: "<value>",
    customer: {
      id: "<id>",
      name: "<value>",
      email: "Cali48@gmail.com",
      avatar: "https://loremflickr.com/153/3420?lock=8337376503230289",
    },
    click: {
      id: "<id>",
      url: "https://menacing-airline.net/",
      continent: "Antarctica",
      country: "Turkmenistan",
      city: "Grahamboro",
      device: "Desktop",
      browser: "Safari",
      os: "iOS",
      referer: "flawed-valentine.net",
      refererUrl: "https://stingy-case.net",
      ip: "176.246.199.144",
    },
    link: {
      id: "<id>",
      domain: "silver-instance.biz",
      key: "<key>",
      url: "https://remarkable-charlatan.info/",
      externalId: "<id>",
      identifier: "<value>",
      expiresAt: "<value>",
      expiredUrl: "https://unique-nudge.biz",
      password: "N3fiRr6Tucm6W_R",
      title: "<value>",
      description:
        "delightfully keenly miskey although swathe evince whoa wealthy",
      image: "https://picsum.photos/seed/lUzfwfe/1749/3534",
      video: "https://picsum.videos/seed/pN1kjx/517/2757",
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
      comments: "faithfully individual gadzooks lonely hm",
      shortLink: "https://impressionable-filter.biz",
      qrCode: "https://vain-venom.com/",
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

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `id`                                                                           | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `event`                                                                        | [components.WebhookEvent3Event](../../models/components/webhookevent3event.md) | :heavy_check_mark:                                                             | N/A                                                                            |
| `createdAt`                                                                    | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `data`                                                                         | [components.WebhookEvent3Data](../../models/components/webhookevent3data.md)   | :heavy_check_mark:                                                             | N/A                                                                            |