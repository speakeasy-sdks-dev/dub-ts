/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

export type SalesBrowsers = {
  /**
   * The name of the browser
   */
  browser: string;
  /**
   * The number of sales from this browser
   */
  sales: number;
  /**
   * The total amount of sales from this browser
   */
  amount: number;
};

/** @internal */
export const SalesBrowsers$inboundSchema: z.ZodType<
  SalesBrowsers,
  z.ZodTypeDef,
  unknown
> = z.object({
  browser: z.string(),
  sales: z.number(),
  amount: z.number(),
});

/** @internal */
export type SalesBrowsers$Outbound = {
  browser: string;
  sales: number;
  amount: number;
};

/** @internal */
export const SalesBrowsers$outboundSchema: z.ZodType<
  SalesBrowsers$Outbound,
  z.ZodTypeDef,
  SalesBrowsers
> = z.object({
  browser: z.string(),
  sales: z.number(),
  amount: z.number(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace SalesBrowsers$ {
  /** @deprecated use `SalesBrowsers$inboundSchema` instead. */
  export const inboundSchema = SalesBrowsers$inboundSchema;
  /** @deprecated use `SalesBrowsers$outboundSchema` instead. */
  export const outboundSchema = SalesBrowsers$outboundSchema;
  /** @deprecated use `SalesBrowsers$Outbound` instead. */
  export type Outbound = SalesBrowsers$Outbound;
}
