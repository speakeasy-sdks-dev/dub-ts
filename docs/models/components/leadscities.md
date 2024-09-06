# LeadsCities

## Example Usage

```typescript
import { LeadsCities } from "dub/models/components";

let value: LeadsCities = {
    city: "Guaynabo",
    country: "AL",
    leads: 1464.41,
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `city`                                                                         | *string*                                                                       | :heavy_check_mark:                                                             | The name of the city                                                           |
| `country`                                                                      | [components.LeadsCitiesCountry](../../models/components/leadscitiescountry.md) | :heavy_check_mark:                                                             | The 2-letter country code of the city: https://d.to/geo                        |
| `leads`                                                                        | *number*                                                                       | :heavy_check_mark:                                                             | The number of leads from this city                                             |