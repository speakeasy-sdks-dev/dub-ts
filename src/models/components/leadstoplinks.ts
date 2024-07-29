/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

export type LeadsTopLinks = {
    /**
     * The unique ID of the short link
     *
     * @deprecated field: This will be removed in a future release, please migrate away from it as soon as possible.
     */
    link: string;
    /**
     * The unique ID of the short link
     */
    id: string;
    /**
     * The domain of the short link
     */
    domain: string;
    /**
     * The key of the short link
     */
    key: string;
    /**
     * The short link URL
     */
    shortLink: string;
    /**
     * The destination URL of the short link
     */
    url: string;
    /**
     * The creation timestamp of the short link
     */
    createdAt: string;
    /**
     * The number of leads from this link
     */
    leads: number;
};

/** @internal */
export const LeadsTopLinks$inboundSchema: z.ZodType<LeadsTopLinks, z.ZodTypeDef, unknown> =
    z.object({
        link: z.string(),
        id: z.string(),
        domain: z.string(),
        key: z.string(),
        shortLink: z.string(),
        url: z.string(),
        createdAt: z.string(),
        leads: z.number(),
    });

/** @internal */
export type LeadsTopLinks$Outbound = {
    link: string;
    id: string;
    domain: string;
    key: string;
    shortLink: string;
    url: string;
    createdAt: string;
    leads: number;
};

/** @internal */
export const LeadsTopLinks$outboundSchema: z.ZodType<
    LeadsTopLinks$Outbound,
    z.ZodTypeDef,
    LeadsTopLinks
> = z.object({
    link: z.string(),
    id: z.string(),
    domain: z.string(),
    key: z.string(),
    shortLink: z.string(),
    url: z.string(),
    createdAt: z.string(),
    leads: z.number(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace LeadsTopLinks$ {
    /** @deprecated use `LeadsTopLinks$inboundSchema` instead. */
    export const inboundSchema = LeadsTopLinks$inboundSchema;
    /** @deprecated use `LeadsTopLinks$outboundSchema` instead. */
    export const outboundSchema = LeadsTopLinks$outboundSchema;
    /** @deprecated use `LeadsTopLinks$Outbound` instead. */
    export type Outbound = LeadsTopLinks$Outbound;
}
