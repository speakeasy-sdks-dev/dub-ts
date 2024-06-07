/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives";
import { ClosedEnum } from "../../types";
import * as z from "zod";

/**
 * A short code indicating the error code returned.
 */
export const ConflictCode = {
    Conflict: "conflict",
} as const;
/**
 * A short code indicating the error code returned.
 */
export type ConflictCode = ClosedEnum<typeof ConflictCode>;

export type ConflictError = {
    /**
     * A short code indicating the error code returned.
     */
    code: ConflictCode;
    /**
     * A human readable explanation of what went wrong.
     */
    message: string;
    /**
     * A link to our documentation with more details about this error code
     */
    docUrl?: string | undefined;
};

/**
 * This response is sent when a request conflicts with the current state of the server.
 */
export type ConflictData = {
    error: ConflictError;
};

/**
 * This response is sent when a request conflicts with the current state of the server.
 */
export class Conflict extends Error {
    error: ConflictError;

    /** The original data that was passed to this error instance. */
    data$: ConflictData;

    constructor(err: ConflictData) {
        super("");
        this.data$ = err;

        this.error = err.error;

        this.message =
            "message" in err && typeof err.message === "string"
                ? err.message
                : "API error occurred";

        this.name = "Conflict";
    }
}

/** @internal */
export namespace ConflictCode$ {
    export const inboundSchema = z.nativeEnum(ConflictCode);
    export const outboundSchema = inboundSchema;
}

/** @internal */
export namespace ConflictError$ {
    export const inboundSchema: z.ZodType<ConflictError, z.ZodTypeDef, unknown> = z
        .object({
            code: ConflictCode$.inboundSchema,
            message: z.string(),
            doc_url: z.string().optional(),
        })
        .transform((v) => {
            return remap$(v, {
                doc_url: "docUrl",
            });
        });

    export type Outbound = {
        code: string;
        message: string;
        doc_url?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ConflictError> = z
        .object({
            code: ConflictCode$.outboundSchema,
            message: z.string(),
            docUrl: z.string().optional(),
        })
        .transform((v) => {
            return remap$(v, {
                docUrl: "doc_url",
            });
        });
}

/** @internal */
export namespace Conflict$ {
    export const inboundSchema: z.ZodType<Conflict, z.ZodTypeDef, unknown> = z
        .object({
            error: z.lazy(() => ConflictError$.inboundSchema),
        })
        .transform((v) => {
            return new Conflict(v);
        });

    export type Outbound = {
        error: ConflictError$.Outbound;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, Conflict> = z
        .instanceof(Conflict)
        .transform((v) => v.data$)
        .pipe(
            z.object({
                error: z.lazy(() => ConflictError$.outboundSchema),
            })
        );
}
