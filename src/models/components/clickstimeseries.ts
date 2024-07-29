/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

export type ClicksTimeseries = {
    /**
     * The starting timestamp of the interval
     */
    start: string;
    /**
     * The number of clicks in the interval
     */
    clicks: number;
};

/** @internal */
export const ClicksTimeseries$inboundSchema: z.ZodType<ClicksTimeseries, z.ZodTypeDef, unknown> =
    z.object({
        start: z.string(),
        clicks: z.number(),
    });

/** @internal */
export type ClicksTimeseries$Outbound = {
    start: string;
    clicks: number;
};

/** @internal */
export const ClicksTimeseries$outboundSchema: z.ZodType<
    ClicksTimeseries$Outbound,
    z.ZodTypeDef,
    ClicksTimeseries
> = z.object({
    start: z.string(),
    clicks: z.number(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ClicksTimeseries$ {
    /** @deprecated use `ClicksTimeseries$inboundSchema` instead. */
    export const inboundSchema = ClicksTimeseries$inboundSchema;
    /** @deprecated use `ClicksTimeseries$outboundSchema` instead. */
    export const outboundSchema = ClicksTimeseries$outboundSchema;
    /** @deprecated use `ClicksTimeseries$Outbound` instead. */
    export type Outbound = ClicksTimeseries$Outbound;
}
