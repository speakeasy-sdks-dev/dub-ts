/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

export type SalesDevices = {
    /**
     * The name of the device
     */
    device: string;
    /**
     * The number of sales from this device
     */
    sales: number;
    /**
     * The total amount of sales from this device
     */
    amount: number;
};

/** @internal */
export const SalesDevices$inboundSchema: z.ZodType<SalesDevices, z.ZodTypeDef, unknown> = z.object({
    device: z.string(),
    sales: z.number(),
    amount: z.number(),
});

/** @internal */
export type SalesDevices$Outbound = {
    device: string;
    sales: number;
    amount: number;
};

/** @internal */
export const SalesDevices$outboundSchema: z.ZodType<
    SalesDevices$Outbound,
    z.ZodTypeDef,
    SalesDevices
> = z.object({
    device: z.string(),
    sales: z.number(),
    amount: z.number(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace SalesDevices$ {
    /** @deprecated use `SalesDevices$inboundSchema` instead. */
    export const inboundSchema = SalesDevices$inboundSchema;
    /** @deprecated use `SalesDevices$outboundSchema` instead. */
    export const outboundSchema = SalesDevices$outboundSchema;
    /** @deprecated use `SalesDevices$Outbound` instead. */
    export type Outbound = SalesDevices$Outbound;
}
