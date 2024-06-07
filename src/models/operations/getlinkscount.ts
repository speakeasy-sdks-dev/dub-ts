/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { ClosedEnum } from "../../types";
import * as z from "zod";

export type GetLinksCountGlobals = {
    workspaceId: string;
    /**
     * @deprecated field: This will be removed in a future release, please migrate away from it as soon as possible.
     */
    projectSlug?: string | undefined;
};

/**
 * The tag IDs to filter the links by.
 */
export type GetLinksCountQueryParamTagIds = string | Array<string>;

/**
 * The unique name of the tags assigned to the short link (case insensitive).
 */
export type GetLinksCountQueryParamTagNames = string | Array<string>;

export const Two = {
    TagId: "tagId",
} as const;
export type Two = ClosedEnum<typeof Two>;

export const One = {
    Domain: "domain",
} as const;
export type One = ClosedEnum<typeof One>;

/**
 * The field to group the links by.
 */
export type GroupBy = One | Two;

export type GetLinksCountRequest = {
    /**
     * The domain to filter the links by. E.g. `ac.me`. If not provided, all links for the workspace will be returned.
     */
    domain?: string | undefined;
    /**
     * The tag ID to filter the links by. This field is deprecated – use `tagIds` instead.
     */
    tagId?: string | undefined;
    /**
     * The tag IDs to filter the links by.
     */
    tagIds?: string | Array<string> | undefined;
    /**
     * The unique name of the tags assigned to the short link (case insensitive).
     */
    tagNames?: string | Array<string> | undefined;
    /**
     * The search term to filter the links by. The search term will be matched against the short link slug and the destination url.
     */
    search?: string | undefined;
    /**
     * The user ID to filter the links by.
     */
    userId?: string | undefined;
    /**
     * Whether to include archived links in the response. Defaults to `false` if not provided.
     */
    showArchived?: boolean | undefined;
    /**
     * Whether to include tags in the response. Defaults to `false` if not provided.
     */
    withTags?: boolean | undefined;
    /**
     * The field to group the links by.
     */
    groupBy?: One | Two | undefined;
};

/** @internal */
export namespace GetLinksCountGlobals$ {
    export const inboundSchema: z.ZodType<GetLinksCountGlobals, z.ZodTypeDef, unknown> = z.object({
        workspaceId: z.string(),
        projectSlug: z.string().optional(),
    });

    export type Outbound = {
        workspaceId: string;
        projectSlug?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetLinksCountGlobals> = z.object(
        {
            workspaceId: z.string(),
            projectSlug: z.string().optional(),
        }
    );
}

/** @internal */
export namespace GetLinksCountQueryParamTagIds$ {
    export const inboundSchema: z.ZodType<GetLinksCountQueryParamTagIds, z.ZodTypeDef, unknown> =
        z.union([z.string(), z.array(z.string())]);

    export type Outbound = string | Array<string>;
    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetLinksCountQueryParamTagIds> =
        z.union([z.string(), z.array(z.string())]);
}

/** @internal */
export namespace GetLinksCountQueryParamTagNames$ {
    export const inboundSchema: z.ZodType<GetLinksCountQueryParamTagNames, z.ZodTypeDef, unknown> =
        z.union([z.string(), z.array(z.string())]);

    export type Outbound = string | Array<string>;
    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        GetLinksCountQueryParamTagNames
    > = z.union([z.string(), z.array(z.string())]);
}

/** @internal */
export namespace Two$ {
    export const inboundSchema = z.nativeEnum(Two);
    export const outboundSchema = inboundSchema;
}

/** @internal */
export namespace One$ {
    export const inboundSchema = z.nativeEnum(One);
    export const outboundSchema = inboundSchema;
}

/** @internal */
export namespace GroupBy$ {
    export const inboundSchema: z.ZodType<GroupBy, z.ZodTypeDef, unknown> = z.union([
        One$.inboundSchema,
        Two$.inboundSchema,
    ]);

    export type Outbound = string | string;
    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GroupBy> = z.union([
        One$.outboundSchema,
        Two$.outboundSchema,
    ]);
}

/** @internal */
export namespace GetLinksCountRequest$ {
    export const inboundSchema: z.ZodType<GetLinksCountRequest, z.ZodTypeDef, unknown> = z.object({
        domain: z.string().optional(),
        tagId: z.string().optional(),
        tagIds: z.union([z.string(), z.array(z.string())]).optional(),
        tagNames: z.union([z.string(), z.array(z.string())]).optional(),
        search: z.string().optional(),
        userId: z.string().optional(),
        showArchived: z.boolean().default(false),
        withTags: z.boolean().default(false),
        groupBy: z.union([One$.inboundSchema, Two$.inboundSchema]).optional(),
    });

    export type Outbound = {
        domain?: string | undefined;
        tagId?: string | undefined;
        tagIds?: string | Array<string> | undefined;
        tagNames?: string | Array<string> | undefined;
        search?: string | undefined;
        userId?: string | undefined;
        showArchived: boolean;
        withTags: boolean;
        groupBy?: string | string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetLinksCountRequest> = z.object(
        {
            domain: z.string().optional(),
            tagId: z.string().optional(),
            tagIds: z.union([z.string(), z.array(z.string())]).optional(),
            tagNames: z.union([z.string(), z.array(z.string())]).optional(),
            search: z.string().optional(),
            userId: z.string().optional(),
            showArchived: z.boolean().default(false),
            withTags: z.boolean().default(false),
            groupBy: z.union([One$.outboundSchema, Two$.outboundSchema]).optional(),
        }
    );
}
