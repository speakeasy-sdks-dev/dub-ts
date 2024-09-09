# SalesCountries

## Example Usage

```typescript
import { SalesCountries } from "dub/models/components";

let value: SalesCountries = {
  country: "TK",
  sales: 9785.71,
  amount: 6994.79,
};
```

## Fields

| Field                                                                                                                       | Type                                                                                                                        | Required                                                                                                                    | Description                                                                                                                 |
| --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| `country`                                                                                                                   | [components.SalesCountriesCountry](../../models/components/salescountriescountry.md)                                        | :heavy_check_mark:                                                                                                          | The 2-letter ISO 3166-1 country code for the country associated with the location of the user. Learn more: https://d.to/geo |
| `sales`                                                                                                                     | *number*                                                                                                                    | :heavy_check_mark:                                                                                                          | The number of sales from this country                                                                                       |
| `amount`                                                                                                                    | *number*                                                                                                                    | :heavy_check_mark:                                                                                                          | The total amount of sales from this country                                                                                 |