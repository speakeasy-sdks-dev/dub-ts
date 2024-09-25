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
      email: "Monty.Denesik@gmail.com",
      avatar: "https://picsum.photos/seed/A7SLZie/3771/2577",
    },
    click: {
      id: "<id>",
      url: "https://whopping-scaffold.com/",
      continent: "<value>",
      country: "Malta",
      city: "Camronville",
      device: "<value>",
      browser: "<value>",
      os: "<value>",
      referer: "<value>",
      refererUrl: "<value>",
      ip: "6e1a:20c2:ff3e:f6fa:787d:d3d0:e9bf:aebb",
    },
    link: {
      id: "<id>",
      domain: "live-lid.biz",
      key: "<key>",
      externalId: "<value>",
      url: "https://front-minority.biz",
      expiresAt: "<value>",
      expiredUrl: "https://inferior-hoof.biz/",
      password: "LeNv2AWrBoEWkmj",
      title: "<value>",
      description: "Operative zero administration function",
      image: "https://loremflickr.com/2408/254?lock=6507702249769671",
      video: "<value>",
      ios: "<value>",
      android: "<value>",
      geo: {},
      tagId: "<value>",
      tags: [
        {
          id: "<id>",
          name: "<value>",
          color: "yellow",
        },
      ],
      comments: "<value>",
      shortLink: "https://ripe-eggplant.net",
      qrCode: "https://wise-asset.org/",
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
      amount: 2528.54,
      currency: "Swedish Krona",
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

