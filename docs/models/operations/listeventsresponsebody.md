# ListEventsResponseBody

A list of events

## Example Usage

```typescript
import { ListEventsResponseBody } from "dub/models/operations";

let value: ListEventsResponseBody = [
  {
    event: "click",
    click: {
      id: "<id>",
      url: "https://glaring-hawk.com/",
      continent: "<value>",
      country: "Papua New Guinea",
      city: "Dimitristad",
      device: "<value>",
      browser: "<value>",
      os: "<value>",
      referer: "<value>",
      refererUrl: "<value>",
      ip: "147.237.81.170",
    },
    link: {
      id: "<id>",
      domain: "competent-provision.biz",
      key: "<key>",
      externalId: "<value>",
      url: "https://outrageous-agreement.net/",
      expiresAt: "<value>",
      expiredUrl: "https://remarkable-dream.net/",
      password: "8WYW6KqcnFtXtbe",
      title: "<value>",
      description: "Object-based web-enabled model",
      image: "https://loremflickr.com/1695/2425?lock=2716344463999652",
      video: "<value>",
      ios: "<value>",
      android: "<value>",
      geo: {},
      tagId: "<value>",
      tags: [
        {
          id: "<id>",
          name: "<value>",
          color: "purple",
        },
      ],
      comments: "<value>",
      shortLink: "https://polished-horde.com/",
      qrCode: "https://official-mouser.name/",
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
    clickId: "<value>",
    linkId: "<value>",
    domain: "quarrelsome-pecan.info",
    key: "<key>",
    url: "https://hidden-hubris.org",
    continent: "<value>",
    country: "Singapore",
    city: "Bradtkeshire",
    device: "<value>",
    browser: "<value>",
    os: "<value>",
    qr: 7142.41,
    ip: "3d3d:2cbc:81f9:fdfc:07a3:b140:b47e:f03d",
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

