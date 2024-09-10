/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";
import * as components from "../components/index.js";

/**
 * The type of event to retrieve analytics for. Defaults to 'clicks'.
 */
export const Event = {
  Clicks: "clicks",
  Leads: "leads",
  Sales: "sales",
  Composite: "composite",
} as const;
/**
 * The type of event to retrieve analytics for. Defaults to 'clicks'.
 */
export type Event = ClosedEnum<typeof Event>;

/**
 * The parameter to group the analytics data points by. Defaults to 'count' if undefined.
 */
export const QueryParamGroupBy = {
  Count: "count",
  Timeseries: "timeseries",
  Continents: "continents",
  Countries: "countries",
  Cities: "cities",
  Devices: "devices",
  Browsers: "browsers",
  Os: "os",
  Referers: "referers",
  TopLinks: "top_links",
  TopUrls: "top_urls",
  Trigger: "trigger",
} as const;
/**
 * The parameter to group the analytics data points by. Defaults to 'count' if undefined.
 */
export type QueryParamGroupBy = ClosedEnum<typeof QueryParamGroupBy>;

/**
 * The interval to retrieve analytics for. Takes precedence over start and end. If undefined, defaults to 24h.
 */
export const Interval = {
  TwentyFourh: "24h",
  Sevend: "7d",
  Thirtyd: "30d",
  Ninetyd: "90d",
  Ytd: "ytd",
  Oney: "1y",
  All: "all",
  AllUnfiltered: "all_unfiltered",
} as const;
/**
 * The interval to retrieve analytics for. Takes precedence over start and end. If undefined, defaults to 24h.
 */
export type Interval = ClosedEnum<typeof Interval>;

export type RetrieveAnalyticsRequest = {
  /**
   * The type of event to retrieve analytics for. Defaults to 'clicks'.
   */
  event?: Event | undefined;
  /**
   * The parameter to group the analytics data points by. Defaults to 'count' if undefined.
   */
  groupBy?: QueryParamGroupBy | undefined;
  /**
   * The domain to filter analytics for.
   */
  domain?: string | undefined;
  /**
   * The short link slug.
   */
  key?: string | undefined;
  /**
   * The unique ID of the short link on Dub.
   */
  linkId?: string | undefined;
  /**
   * This is the ID of the link in the your database. Must be prefixed with 'ext_' when passed as a query parameter.
   */
  externalId?: string | undefined;
  /**
   * The interval to retrieve analytics for. Takes precedence over start and end. If undefined, defaults to 24h.
   */
  interval?: Interval | undefined;
  /**
   * The start date and time when to retrieve analytics from.
   */
  start?: string | undefined;
  /**
   * The end date and time when to retrieve analytics from. If not provided, defaults to the current date.
   */
  end?: string | undefined;
  /**
   * The IANA time zone code for aligning timeseries granularity (e.g. America/New_York). Defaults to UTC.
   */
  timezone?: string | undefined;
  /**
   * The continent to retrieve analytics for.
   */
  continent?: components.ContinentCode | undefined;
  /**
   * The country to retrieve analytics for.
   */
  country?: components.CountryCode | undefined;
  /**
   * The city to retrieve analytics for.
   */
  city?: string | undefined;
  /**
   * The device to retrieve analytics for.
   */
  device?: string | undefined;
  /**
   * The browser to retrieve analytics for.
   */
  browser?: string | undefined;
  /**
   * The OS to retrieve analytics for.
   */
  os?: string | undefined;
  /**
   * The referer to retrieve analytics for.
   */
  referer?: string | undefined;
  /**
   * The URL to retrieve analytics for.
   */
  url?: string | undefined;
  /**
   * The tag ID to retrieve analytics for.
   */
  tagId?: string | undefined;
  /**
   * Filter for QR code scans. If true, filter for QR codes only. If false, filter for links only. If undefined, return both.
   */
  qr?: boolean | undefined;
  /**
   * Filter for root domains. If true, filter for domains only. If false, filter for links only. If undefined, return both.
   */
  root?: boolean | undefined;
};

/**
 * Analytics data
 */
export type RetrieveAnalyticsResponseBody =
  | components.ClicksCount
  | components.LeadsCount
  | components.SalesCount
  | Array<components.ClicksTimeseries>
  | Array<components.ClicksCountries>
  | Array<components.ClicksCities>
  | Array<components.ClicksDevices>
  | Array<components.ClicksBrowsers>
  | Array<components.ClicksOS>
  | Array<components.ClicksReferers>
  | Array<components.ClicksTopLinks>
  | Array<components.ClicksTopUrls>
  | Array<components.LeadsTimeseries>
  | Array<components.LeadsCountries>
  | Array<components.LeadsCities>
  | Array<components.LeadsDevices>
  | Array<components.LeadsBrowsers>
  | Array<components.LeadsOS>
  | Array<components.LeadsReferers>
  | Array<components.LeadsTopLinks>
  | Array<components.LeadsTopUrls>
  | Array<components.SalesTimeseries>
  | Array<components.SalesCountries>
  | Array<components.SalesCities>
  | Array<components.SalesDevices>
  | Array<components.SalesBrowsers>
  | Array<components.SalesOS>
  | Array<components.SalesReferers>
  | Array<components.SalesTopLinks>
  | Array<components.SalesTopUrls>;

/** @internal */
export const Event$inboundSchema: z.ZodNativeEnum<typeof Event> = z.nativeEnum(
  Event,
);

/** @internal */
export const Event$outboundSchema: z.ZodNativeEnum<typeof Event> =
  Event$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Event$ {
  /** @deprecated use `Event$inboundSchema` instead. */
  export const inboundSchema = Event$inboundSchema;
  /** @deprecated use `Event$outboundSchema` instead. */
  export const outboundSchema = Event$outboundSchema;
}

/** @internal */
export const QueryParamGroupBy$inboundSchema: z.ZodNativeEnum<
  typeof QueryParamGroupBy
> = z.nativeEnum(QueryParamGroupBy);

/** @internal */
export const QueryParamGroupBy$outboundSchema: z.ZodNativeEnum<
  typeof QueryParamGroupBy
> = QueryParamGroupBy$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace QueryParamGroupBy$ {
  /** @deprecated use `QueryParamGroupBy$inboundSchema` instead. */
  export const inboundSchema = QueryParamGroupBy$inboundSchema;
  /** @deprecated use `QueryParamGroupBy$outboundSchema` instead. */
  export const outboundSchema = QueryParamGroupBy$outboundSchema;
}

/** @internal */
export const Interval$inboundSchema: z.ZodNativeEnum<typeof Interval> = z
  .nativeEnum(Interval);

/** @internal */
export const Interval$outboundSchema: z.ZodNativeEnum<typeof Interval> =
  Interval$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Interval$ {
  /** @deprecated use `Interval$inboundSchema` instead. */
  export const inboundSchema = Interval$inboundSchema;
  /** @deprecated use `Interval$outboundSchema` instead. */
  export const outboundSchema = Interval$outboundSchema;
}

/** @internal */
export const RetrieveAnalyticsRequest$inboundSchema: z.ZodType<
  RetrieveAnalyticsRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  event: Event$inboundSchema.default("clicks"),
  groupBy: QueryParamGroupBy$inboundSchema.default("count"),
  domain: z.string().optional(),
  key: z.string().optional(),
  linkId: z.string().optional(),
  externalId: z.string().optional(),
  interval: Interval$inboundSchema.optional(),
  start: z.string().optional(),
  end: z.string().optional(),
  timezone: z.string().default("UTC"),
  continent: components.ContinentCode$inboundSchema.optional(),
  country: components.CountryCode$inboundSchema.optional(),
  city: z.string().optional(),
  device: z.string().optional(),
  browser: z.string().optional(),
  os: z.string().optional(),
  referer: z.string().optional(),
  url: z.string().optional(),
  tagId: z.string().optional(),
  qr: z.boolean().optional(),
  root: z.boolean().optional(),
});

/** @internal */
export type RetrieveAnalyticsRequest$Outbound = {
  event: string;
  groupBy: string;
  domain?: string | undefined;
  key?: string | undefined;
  linkId?: string | undefined;
  externalId?: string | undefined;
  interval?: string | undefined;
  start?: string | undefined;
  end?: string | undefined;
  timezone: string;
  continent?: string | undefined;
  country?: string | undefined;
  city?: string | undefined;
  device?: string | undefined;
  browser?: string | undefined;
  os?: string | undefined;
  referer?: string | undefined;
  url?: string | undefined;
  tagId?: string | undefined;
  qr?: boolean | undefined;
  root?: boolean | undefined;
};

/** @internal */
export const RetrieveAnalyticsRequest$outboundSchema: z.ZodType<
  RetrieveAnalyticsRequest$Outbound,
  z.ZodTypeDef,
  RetrieveAnalyticsRequest
> = z.object({
  event: Event$outboundSchema.default("clicks"),
  groupBy: QueryParamGroupBy$outboundSchema.default("count"),
  domain: z.string().optional(),
  key: z.string().optional(),
  linkId: z.string().optional(),
  externalId: z.string().optional(),
  interval: Interval$outboundSchema.optional(),
  start: z.string().optional(),
  end: z.string().optional(),
  timezone: z.string().default("UTC"),
  continent: components.ContinentCode$outboundSchema.optional(),
  country: components.CountryCode$outboundSchema.optional(),
  city: z.string().optional(),
  device: z.string().optional(),
  browser: z.string().optional(),
  os: z.string().optional(),
  referer: z.string().optional(),
  url: z.string().optional(),
  tagId: z.string().optional(),
  qr: z.boolean().optional(),
  root: z.boolean().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace RetrieveAnalyticsRequest$ {
  /** @deprecated use `RetrieveAnalyticsRequest$inboundSchema` instead. */
  export const inboundSchema = RetrieveAnalyticsRequest$inboundSchema;
  /** @deprecated use `RetrieveAnalyticsRequest$outboundSchema` instead. */
  export const outboundSchema = RetrieveAnalyticsRequest$outboundSchema;
  /** @deprecated use `RetrieveAnalyticsRequest$Outbound` instead. */
  export type Outbound = RetrieveAnalyticsRequest$Outbound;
}

/** @internal */
export const RetrieveAnalyticsResponseBody$inboundSchema: z.ZodType<
  RetrieveAnalyticsResponseBody,
  z.ZodTypeDef,
  unknown
> = z.union([
  components.ClicksCount$inboundSchema,
  components.LeadsCount$inboundSchema,
  components.SalesCount$inboundSchema,
  z.array(components.ClicksTimeseries$inboundSchema),
  z.array(components.ClicksCountries$inboundSchema),
  z.array(components.ClicksCities$inboundSchema),
  z.array(components.ClicksDevices$inboundSchema),
  z.array(components.ClicksBrowsers$inboundSchema),
  z.array(components.ClicksOS$inboundSchema),
  z.array(components.ClicksReferers$inboundSchema),
  z.array(components.ClicksTopLinks$inboundSchema),
  z.array(components.ClicksTopUrls$inboundSchema),
  z.array(components.LeadsTimeseries$inboundSchema),
  z.array(components.LeadsCountries$inboundSchema),
  z.array(components.LeadsCities$inboundSchema),
  z.array(components.LeadsDevices$inboundSchema),
  z.array(components.LeadsBrowsers$inboundSchema),
  z.array(components.LeadsOS$inboundSchema),
  z.array(components.LeadsReferers$inboundSchema),
  z.array(components.LeadsTopLinks$inboundSchema),
  z.array(components.LeadsTopUrls$inboundSchema),
  z.array(components.SalesTimeseries$inboundSchema),
  z.array(components.SalesCountries$inboundSchema),
  z.array(components.SalesCities$inboundSchema),
  z.array(components.SalesDevices$inboundSchema),
  z.array(components.SalesBrowsers$inboundSchema),
  z.array(components.SalesOS$inboundSchema),
  z.array(components.SalesReferers$inboundSchema),
  z.array(components.SalesTopLinks$inboundSchema),
  z.array(components.SalesTopUrls$inboundSchema),
]);

/** @internal */
export type RetrieveAnalyticsResponseBody$Outbound =
  | components.ClicksCount$Outbound
  | components.LeadsCount$Outbound
  | components.SalesCount$Outbound
  | Array<components.ClicksTimeseries$Outbound>
  | Array<components.ClicksCountries$Outbound>
  | Array<components.ClicksCities$Outbound>
  | Array<components.ClicksDevices$Outbound>
  | Array<components.ClicksBrowsers$Outbound>
  | Array<components.ClicksOS$Outbound>
  | Array<components.ClicksReferers$Outbound>
  | Array<components.ClicksTopLinks$Outbound>
  | Array<components.ClicksTopUrls$Outbound>
  | Array<components.LeadsTimeseries$Outbound>
  | Array<components.LeadsCountries$Outbound>
  | Array<components.LeadsCities$Outbound>
  | Array<components.LeadsDevices$Outbound>
  | Array<components.LeadsBrowsers$Outbound>
  | Array<components.LeadsOS$Outbound>
  | Array<components.LeadsReferers$Outbound>
  | Array<components.LeadsTopLinks$Outbound>
  | Array<components.LeadsTopUrls$Outbound>
  | Array<components.SalesTimeseries$Outbound>
  | Array<components.SalesCountries$Outbound>
  | Array<components.SalesCities$Outbound>
  | Array<components.SalesDevices$Outbound>
  | Array<components.SalesBrowsers$Outbound>
  | Array<components.SalesOS$Outbound>
  | Array<components.SalesReferers$Outbound>
  | Array<components.SalesTopLinks$Outbound>
  | Array<components.SalesTopUrls$Outbound>;

/** @internal */
export const RetrieveAnalyticsResponseBody$outboundSchema: z.ZodType<
  RetrieveAnalyticsResponseBody$Outbound,
  z.ZodTypeDef,
  RetrieveAnalyticsResponseBody
> = z.union([
  components.ClicksCount$outboundSchema,
  components.LeadsCount$outboundSchema,
  components.SalesCount$outboundSchema,
  z.array(components.ClicksTimeseries$outboundSchema),
  z.array(components.ClicksCountries$outboundSchema),
  z.array(components.ClicksCities$outboundSchema),
  z.array(components.ClicksDevices$outboundSchema),
  z.array(components.ClicksBrowsers$outboundSchema),
  z.array(components.ClicksOS$outboundSchema),
  z.array(components.ClicksReferers$outboundSchema),
  z.array(components.ClicksTopLinks$outboundSchema),
  z.array(components.ClicksTopUrls$outboundSchema),
  z.array(components.LeadsTimeseries$outboundSchema),
  z.array(components.LeadsCountries$outboundSchema),
  z.array(components.LeadsCities$outboundSchema),
  z.array(components.LeadsDevices$outboundSchema),
  z.array(components.LeadsBrowsers$outboundSchema),
  z.array(components.LeadsOS$outboundSchema),
  z.array(components.LeadsReferers$outboundSchema),
  z.array(components.LeadsTopLinks$outboundSchema),
  z.array(components.LeadsTopUrls$outboundSchema),
  z.array(components.SalesTimeseries$outboundSchema),
  z.array(components.SalesCountries$outboundSchema),
  z.array(components.SalesCities$outboundSchema),
  z.array(components.SalesDevices$outboundSchema),
  z.array(components.SalesBrowsers$outboundSchema),
  z.array(components.SalesOS$outboundSchema),
  z.array(components.SalesReferers$outboundSchema),
  z.array(components.SalesTopLinks$outboundSchema),
  z.array(components.SalesTopUrls$outboundSchema),
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace RetrieveAnalyticsResponseBody$ {
  /** @deprecated use `RetrieveAnalyticsResponseBody$inboundSchema` instead. */
  export const inboundSchema = RetrieveAnalyticsResponseBody$inboundSchema;
  /** @deprecated use `RetrieveAnalyticsResponseBody$outboundSchema` instead. */
  export const outboundSchema = RetrieveAnalyticsResponseBody$outboundSchema;
  /** @deprecated use `RetrieveAnalyticsResponseBody$Outbound` instead. */
  export type Outbound = RetrieveAnalyticsResponseBody$Outbound;
}
