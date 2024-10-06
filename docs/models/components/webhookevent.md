# WebhookEvent

Webhook event schema


## Supported Types

### `components.LinkWebhookEvent`

```typescript
const value: components.LinkWebhookEvent = {
  id: "<id>",
  event: "link.deleted",
  createdAt: "<value>",
  data: {
    id: "<id>",
    domain: "beloved-milestone.name",
    key: "<key>",
    url: "https://gray-impostor.com/",
    externalId: "<id>",
    identifier: "<value>",
    expiresAt: "<value>",
    expiredUrl: "https://dark-glider.net/",
    password: "o0hul03tzqrZVW8",
    title: "<value>",
    description: "confirm mid individual reboot",
    image: "https://loremflickr.com/2868/2338?lock=5100433351859365",
    video: "https://loremflickr.com/317/73?lock=2166636015724087",
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
      "triangular past except hepatitis pro collaboration wisely account ah without yowza readily instead abnormally incidentally deduce with develop pleasing",
    shortLink: "https://rotten-kielbasa.org/",
    qrCode: "https://hidden-meatloaf.biz",
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
      url: "https://yellow-sonnet.info",
      continent: "Africa",
      country: "Venezuela",
      city: "West Emie",
      device: "Desktop",
      browser: "Safari",
      os: "Symbian",
      referer: "frequent-footrest.name",
      refererUrl: "https://defenseless-tuba.com/",
      ip: "107.187.68.78",
    },
    link: {
      id: "<id>",
      domain: "fruitful-supplier.biz",
      key: "<key>",
      url: "https://zesty-range.info",
      externalId: "<id>",
      identifier: "<value>",
      expiresAt: "<value>",
      expiredUrl: "https://well-lit-gazebo.net",
      password: "vDTUeBTnndTMrZz",
      title: "<value>",
      description: "whereas ouch reporter ah offensively",
      image: "https://loremflickr.com/2789/3819?lock=3121506620894520",
      video: "https://picsum.videos/seed/nRbjLkFhb/2063/2740",
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
      comments:
        "nectarine how monumental disk why famously arbitrate lend sometimes roughly mmm capitalise sheathe seal fen pleasant outsource frivolous coexist",
      shortLink: "https://ugly-coin.com/",
      qrCode: "https://extroverted-scenario.name/",
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
      email: "Agustina.Nader61@gmail.com",
      avatar: "https://loremflickr.com/1347/1635?lock=8674776005209614",
    },
    click: {
      id: "<id>",
      url: "https://junior-dish.org",
      continent: "North America",
      country: "Qatar",
      city: "Halliefort",
      device: "Mobile",
      browser: "Firefox",
      os: "Windows Phone",
      referer: "scientific-bowler.info",
      refererUrl: "https://excitable-countess.name/",
      ip: "246.132.13.174",
    },
    link: {
      id: "<id>",
      domain: "filthy-bump.net",
      key: "<key>",
      url: "https://caring-babushka.net/",
      externalId: "<id>",
      identifier: "<value>",
      expiresAt: "<value>",
      expiredUrl: "https://actual-dead.net",
      password: "W5KsbJCpq0AoUjj",
      title: "<value>",
      description: "during direct ham",
      image: "https://picsum.photos/seed/tV17n55zd/8/3319",
      video: "https://picsum.videos/seed/5WZns9/2506/3717",
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
        "outset hollow guzzle what knottily apostrophize correctly immense spirit customise for",
      shortLink: "https://flashy-lox.biz",
      qrCode: "https://grimy-numeracy.com",
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
      email: "Donnell86@yahoo.com",
      avatar: "https://loremflickr.com/983/3644?lock=6778576050256481",
    },
    click: {
      id: "<id>",
      url: "https://tangible-innovation.com/",
      continent: "Antarctica",
      country: "Zambia",
      city: "East Rachael",
      device: "Desktop",
      browser: "Chrome",
      os: "Android",
      referer: "austere-yeast.net",
      refererUrl: "https://strange-petticoat.biz",
      ip: "222.86.114.100",
    },
    link: {
      id: "<id>",
      domain: "aware-presume.name",
      key: "<key>",
      url: "https://flickering-halt.biz",
      externalId: "<id>",
      identifier: "<value>",
      expiresAt: "<value>",
      expiredUrl: "https://quarrelsome-unblinking.name/",
      password: "RHNXfzF2tojU7k5",
      title: "<value>",
      description: "heartache eek daddy lest pleasant pack offset",
      image: "https://loremflickr.com/565/496?lock=2975556719079521",
      video: "https://loremflickr.com/1316/2404?lock=6924157146122229",
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
        "but adjudge needily blah scent edge amongst following in lazily",
      shortLink: "https://normal-best-seller.com/",
      qrCode: "https://ambitious-bakeware.info",
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
      amount: 617.79,
      currency: "Indian Rupee",
      paymentProcessor: "<value>",
      invoiceId: "<id>",
    },
  },
};
```

