# SaleCreatedEvent

Triggered when a sale is created.

## Example Usage

```typescript
import { SaleCreatedEvent } from "dub/models/components";

let value: SaleCreatedEvent = {
  id: "<id>",
  event: "sale.created",
  createdAt: "<value>",
  data: {
    eventName: "<value>",
    customer: {
      id: "<id>",
      name: "<value>",
      email: "Caleb_Murazik@yahoo.com",
      avatar: "https://picsum.photos/seed/395wFCS/3500/3365",
    },
    click: {
      id: "<id>",
      url: "https://svelte-character.biz",
      continent: "South America",
      country: "Grenada",
      city: "Fort Waldo",
      device: "Mobile",
      browser: "Firefox",
      os: "Blackberry",
      referer: "aggravating-chasuble.info",
      refererUrl: "https://frugal-backbone.info",
      ip: "14.102.89.187",
    },
    link: {
      id: "<id>",
      domain: "best-glider.info",
      key: "<key>",
      url: "https://unhappy-charlatan.net",
      externalId: "<id>",
      identifier: "<value>",
      expiresAt: "<value>",
      expiredUrl: "https://ample-rubric.name",
      password: "lG33AReoIw2a90u",
      title: "<value>",
      description: "phooey an emergent",
      image: "https://loremflickr.com/3134/2568?lock=5132986670832084",
      video: "https://picsum.videos/seed/nubHQ/870/3903",
      ios: "<value>",
      android: "<id>",
      geo: {},
      tagId: "<id>",
      tags: [
        {
          id: "<id>",
          name: "<value>",
          color: "red",
        },
      ],
      webhookIds: [
        "<value>",
      ],
      comments: "siege optimistic lavish psst ew strange why",
      shortLink: "https://vengeful-lid.net",
      qrCode: "https://natural-utilization.net",
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
    sale: {
      amount: 5667.78,
      currency: "Iraqi Dinar",
      paymentProcessor: "<value>",
      invoiceId: "<id>",
    },
  },
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `id`                                                                                 | *string*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `event`                                                                              | [components.SaleCreatedEventEvent](../../models/components/salecreatedeventevent.md) | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `createdAt`                                                                          | *string*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `data`                                                                               | [components.SaleCreatedEventData](../../models/components/salecreatedeventdata.md)   | :heavy_check_mark:                                                                   | N/A                                                                                  |