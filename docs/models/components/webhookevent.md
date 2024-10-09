# WebhookEvent

Webhook event schema


## Supported Types

### `components.LinkWebhookEvent`

```typescript
const value: components.LinkWebhookEvent = {
  id: "<id>",
  event: "link.created",
  createdAt: "<value>",
  data: {
    id: "<id>",
    domain: "unkempt-godfather.com",
    key: "<key>",
    url: "https://insistent-straw.net/",
    externalId: "<id>",
    identifier: "<value>",
    expiresAt: "<value>",
    expiredUrl: "https://tedious-diagram.info/",
    password: "axOqlmkbF5l8bNW",
    title: "<value>",
    description:
      "brr retrospectivity armoire reservation even pessimistic harp",
    image: "https://picsum.photos/seed/895bBPTo/2823/2486",
    video: "https://loremflickr.com/2234/3236?lock=5365309412852523",
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
    comments: "ew after scoff swiftly ew lender ew geez oxidise row a mmm",
    shortLink: "https://trained-mouser.org/",
    qrCode: "https://dependent-valuable.com",
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

### `components.LinkClickedEvent`

```typescript
const value: components.LinkClickedEvent = {
  id: "<id>",
  event: "link.clicked",
  createdAt: "<value>",
  data: {
    click: {
      id: "<id>",
      url: "https://wavy-vestment.com/",
      continent: "Australia",
      country: "Latvia",
      city: "Novi",
      device: "Mobile",
      browser: "Firefox",
      os: "Blackberry",
      referer: "shocked-reconsideration.com",
      refererUrl: "https://heavy-bar.info/",
      ip: "235.145.180.227",
    },
    link: {
      id: "<id>",
      domain: "judicious-suv.biz",
      key: "<key>",
      url: "https://unselfish-footrest.biz",
      externalId: "<id>",
      identifier: "<value>",
      expiresAt: "<value>",
      expiredUrl: "https://hairy-pecan.biz",
      password: "Px4aiVa0K3N07GI",
      title: "<value>",
      description:
        "meh um fabricate actual ew mmm zowie reorient red carelessly",
      image: "https://picsum.photos/seed/xOMuYu/2506/364",
      video: "https://picsum.videos/seed/p1iRNK1/1115/1210",
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
      comments:
        "short-term galoshes unimpressively cook solemnly etch scorpion hence woot",
      shortLink: "https://witty-ceramics.org/",
      qrCode: "https://warmhearted-saloon.biz",
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

### `components.LeadCreatedEvent`

```typescript
const value: components.LeadCreatedEvent = {
  id: "<id>",
  event: "lead.created",
  createdAt: "<value>",
  data: {
    eventName: "<value>",
    customer: {
      id: "<id>",
      name: "<value>",
      email: "Gavin_Reichel64@gmail.com",
      avatar: "https://loremflickr.com/150/2322?lock=1798773073243173",
    },
    click: {
      id: "<id>",
      url: "https://nautical-outset.info/",
      continent: "South America",
      country: "Armenia",
      city: "Vandervortburgh",
      device: "Desktop",
      browser: "Safari",
      os: "Chrome OS",
      referer: "yellow-mountain.org",
      refererUrl: "https://cruel-plumber.info/",
      ip: "9fc2:ff2c:7a92:314c:09b2:5aec:3b32:b866",
    },
    link: {
      id: "<id>",
      domain: "glum-fledgling.net",
      key: "<key>",
      url: "https://golden-sanity.org/",
      externalId: "<id>",
      identifier: "<value>",
      expiresAt: "<value>",
      expiredUrl: "https://cautious-maintainer.name",
      password: "okWcv8joDt038kV",
      title: "<value>",
      description: "why leading burdensome verify for sedately over anenst",
      image: "https://picsum.photos/seed/M4ltWTq5p/1382/3324",
      video: "https://loremflickr.com/2144/3617?lock=2782000902685916",
      ios: "<value>",
      android: "<id>",
      geo: {},
      tagId: "<id>",
      tags: [
        {
          id: "<id>",
          name: "<value>",
          color: "purple",
        },
      ],
      comments:
        "considering verbally furthermore yet minority persecute hoick furthermore cash bah aboard supposing great",
      shortLink: "https://youthful-valentine.biz/",
      qrCode: "https://grounded-waterspout.org",
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

### `components.SaleCreatedEvent`

```typescript
const value: components.SaleCreatedEvent = {
  id: "<id>",
  event: "sale.created",
  createdAt: "<value>",
  data: {
    eventName: "<value>",
    customer: {
      id: "<id>",
      name: "<value>",
      email: "Kiera67@hotmail.com",
      avatar: "https://loremflickr.com/682/2144?lock=1875516957938379",
    },
    click: {
      id: "<id>",
      url: "https://flashy-lox.biz",
      continent: "South America",
      country: "Ghana",
      city: "Cartwrightfurt",
      device: "Desktop",
      browser: "Safari",
      os: "iOS",
      referer: "phony-cutover.org",
      refererUrl: "https://exotic-thunderbolt.com",
      ip: "aca1:4f73:b016:1ffb:be34:d798:1fbe:6849",
    },
    link: {
      id: "<id>",
      domain: "quarrelsome-unblinking.name",
      key: "<key>",
      url: "https://infatuated-bug.info",
      externalId: "<id>",
      identifier: "<value>",
      expiresAt: "<value>",
      expiredUrl: "https://our-ravioli.org/",
      password: "F2tojU7k5PR5OtH",
      title: "<value>",
      description:
        "sans fairly than knotty place consequently sans beside finally before",
      image: "https://picsum.photos/seed/Pn1q5jZ/1335/2065",
      video: "https://loremflickr.com/3429/946?lock=3883590246111898",
      ios: "<value>",
      android: "<id>",
      geo: {},
      tagId: "<id>",
      tags: [
        {
          id: "<id>",
          name: "<value>",
          color: "pink",
        },
      ],
      comments: "jump whoever among broadcast intently",
      shortLink: "https://blushing-anticodon.name",
      qrCode: "https://bare-giant.com/",
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
      amount: 3854.70,
      currency: "Algerian Dinar",
      paymentProcessor: "<value>",
      invoiceId: "<id>",
    },
  },
};
```

