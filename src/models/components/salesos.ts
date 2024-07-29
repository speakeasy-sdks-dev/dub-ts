/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

export type SalesOS = {
    /**
     * The name of the OS
     */
    os: string;
    /**
     * The number of sales from this OS
     */
    sales: number;
    /**
     * The total amount of sales from this OS
     */
    amount: number;
};

/** @internal */
export const SalesOS$inboundSchema: z.ZodType<SalesOS, z.ZodTypeDef, unknown> = z.object({
    os: z.string(),
    sales: z.number(),
    amount: z.number(),
});

/** @internal */
export type SalesOS$Outbound = {
    os: string;
    sales: number;
    amount: number;
};

/** @internal */
export const SalesOS$outboundSchema: z.ZodType<SalesOS$Outbound, z.ZodTypeDef, SalesOS> = z.object({
    os: z.string(),
    sales: z.number(),
    amount: z.number(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace SalesOS$ {
    /** @deprecated use `SalesOS$inboundSchema` instead. */
    export const inboundSchema = SalesOS$inboundSchema;
    /** @deprecated use `SalesOS$outboundSchema` instead. */
    export const outboundSchema = SalesOS$outboundSchema;
    /** @deprecated use `SalesOS$Outbound` instead. */
    export type Outbound = SalesOS$Outbound;
}
