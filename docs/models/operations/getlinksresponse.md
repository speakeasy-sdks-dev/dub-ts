# GetLinksResponse

## Example Usage

```typescript
import { GetLinksResponse } from "dub/models/operations";

let value: GetLinksResponse = {
  result: [
    {
      id: "<id>",
      domain: "second-newsletter.name",
      key: "<key>",
      url: "https://punctual-humor.org/",
      externalId: "<id>",
      identifier: "<value>",
      expiresAt: "<value>",
      expiredUrl: "https://ideal-scratch.name",
      password: "VxpjslLkzRHjLWz",
      title: "<value>",
      description: "cuckoo canter even along rim woot minus apropos",
      image: "https://picsum.photos/seed/GgJXf/2346/81",
      video: "https://picsum.videos/seed/XrQHiO/2305/2368",
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
        "proud plait opposite strict unnecessarily hamburger splosh around apologise lest ick yum following although trustworthy underplay hippodrome league given",
      shortLink: "https://wasteful-roundabout.net/",
      qrCode: "https://bouncy-marketplace.name",
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
  ],
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `result`                                                         | [components.LinkSchema](../../models/components/linkschema.md)[] | :heavy_check_mark:                                               | N/A                                                              |