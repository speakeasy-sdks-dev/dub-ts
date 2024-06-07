/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type ClicksBrowsers = {
    /**
     * The name of the browser
     */
    browser: string;
    /**
     * The number of clicks from this browser
     */
    clicks: number;
};

/** @internal */
export namespace ClicksBrowsers$ {
    export const inboundSchema: z.ZodType<ClicksBrowsers, z.ZodTypeDef, unknown> = z.object({
        browser: z.string(),
        clicks: z.number(),
    });

    export type Outbound = {
        browser: string;
        clicks: number;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ClicksBrowsers> = z.object({
        browser: z.string(),
        clicks: z.number(),
    });
}
