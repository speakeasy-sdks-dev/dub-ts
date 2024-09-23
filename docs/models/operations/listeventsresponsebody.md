# ListEventsResponseBody

A list of events

## Example Usage

```typescript
import { ListEventsResponseBody } from "dub/models/operations";

let value: ListEventsResponseBody = [
  {
    event: "sale",
    eventId: "<value>",
    eventName: "<value>",
    link: {
      id: "<id>",
      domain: "obvious-doing.name",
      key: "<key>",
      externalId: "<value>",
      url: "https://optimistic-travel.biz/",
      expiresAt: "<value>",
      expiredUrl: "https://competent-provision.biz",
      password: "2Xoaf8WYW6KqcnF",
      title: "<value>",
      description: "Team-oriented logistical structure",
      image: "https://picsum.photos/seed/DqB1iEhCq8/2770/2901",
      video: "<value>",
      ios: "<value>",
      android: "<value>",
      geo: {},
      tagId: "<value>",
      tags: [
        {
          id: "<id>",
          name: "<value>",
          color: "green",
        },
      ],
      comments: "<value>",
      shortLink: "https://overdue-minion.name",
      qrCode: "https://intrepid-technician.info",
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
    click: {
      id: "<id>",
      url: "https://unique-shipper.net/",
      continent: "<value>",
      country: "Bermuda",
      city: "Portland",
      device: "<value>",
      browser: "<value>",
      os: "<value>",
      referer: "<value>",
      ip: "3d3d:2cbc:81f9:fdfc:07a3:b140:b47e:f03d",
    },
    customer: {
      id: "<id>",
      name: "<value>",
      email: "David58@yahoo.com",
      avatar: "https://loremflickr.com/1248/1593?lock=1677077503803349",
    },
    sale: {
      amount: 944373,
      paymentProcessor: "paddle",
    },
    saleAmount: 4904.59,
    invoiceId: "<value>",
    paymentProcessor: "<value>",
    clickId: "<value>",
    linkId: "<value>",
    domain: "enchanted-disclosure.com",
    key: "<key>",
    url: "https://general-possession.info/",
    continent: "<value>",
    country: "Chile",
    city: "North Mariettaport",
    device: "<value>",
    browser: "<value>",
    os: "<value>",
    qr: 5365.79,
    ip: "f4e5:0a78:ccdd:6b4e:f4ea:54b0:498a:6cd2",
  },
];
```

## Supported Types

### `components.ClickEvent[]`

```typescript
const value: components.ClickEvent[] = /* values here */
```

### `components.LeadEvent[]`

```typescript
const value: components.LeadEvent[] = /* values here */
```

### `components.SaleEvent[]`

```typescript
const value: components.SaleEvent[] = /* values here */
```

