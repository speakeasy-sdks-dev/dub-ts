# WebhookEvent

Webhook event schema

## Example Usage

```typescript
import { WebhookEvent } from "dub/models/components";

let value: WebhookEvent = {
  id: "<id>",
  event: "sale.created",
  createdAt: "<value>",
  data: {
    eventName: "<value>",
    customer: {
      id: "<id>",
      name: "<value>",
      email: "Emerald18@hotmail.com",
      avatar: "https://loremflickr.com/3881/701?lock=6248504339084924",
    },
    click: {
      id: "<id>",
      url: "https://lustrous-nudge.biz",
      continent: "<value>",
      country: "Democratic People's Republic of Korea",
      city: "West Eddport",
      device: "<value>",
      browser: "<value>",
      os: "<value>",
      referer: "<value>",
      refererUrl: "<value>",
      ip: "38de:2e1a:a479:dfbd:d749:b03d:4c72:1e23",
    },
    link: {
      id: "<id>",
      domain: "tough-disclosure.name",
      key: "<key>",
      externalId: "<value>",
      url: "https://phony-vein.net",
      expiresAt: "<value>",
      expiredUrl: "https://normal-publicity.net/",
      password: "eogQLUcxucPBWaW",
      title: "<value>",
      description: "Digitized 24 hour system engine",
      image: "https://picsum.photos/seed/r27nS9P0sD/2149/370",
      video: "<value>",
      ios: "<value>",
      android: "<value>",
      geo: {},
      tagId: "<value>",
      tags: [
        {
          id: "<id>",
          name: "<value>",
          color: "red",
        },
      ],
      comments: "<value>",
      shortLink: "https://wealthy-coast.net",
      qrCode: "https://dependent-account.com",
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
    sale: {
      amount: 5320.92,
      currency: "East Caribbean Dollar",
      paymentProcessor: "<value>",
      invoiceId: "<value>",
    },
  },
};
```

## Supported Types

### `components.One`

```typescript
const value: components.One = /* values here */
```

### `components.Two`

```typescript
const value: components.Two = /* values here */
```

### `components.Three`

```typescript
const value: components.Three = /* values here */
```

### `components.Four`

```typescript
const value: components.Four = /* values here */
```

