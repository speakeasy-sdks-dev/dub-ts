/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";

/**
 * The tag IDs to filter the links by.
 */
export type GetLinksCountQueryParamTagIds = string | Array<string>;

/**
 * The unique name of the tags assigned to the short link (case insensitive).
 */
export type GetLinksCountQueryParamTagNames = string | Array<string>;

export const Three = {
  UserId: "userId",
} as const;
export type Three = ClosedEnum<typeof Three>;

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
export type GroupBy = One | Two | Three;

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
  groupBy?: One | Two | Three | undefined;
};

/** @internal */
export const GetLinksCountQueryParamTagIds$inboundSchema: z.ZodType<
  GetLinksCountQueryParamTagIds,
  z.ZodTypeDef,
  unknown
> = z.union([z.string(), z.array(z.string())]);

/** @internal */
export type GetLinksCountQueryParamTagIds$Outbound = string | Array<string>;

/** @internal */
export const GetLinksCountQueryParamTagIds$outboundSchema: z.ZodType<
  GetLinksCountQueryParamTagIds$Outbound,
  z.ZodTypeDef,
  GetLinksCountQueryParamTagIds
> = z.union([z.string(), z.array(z.string())]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetLinksCountQueryParamTagIds$ {
  /** @deprecated use `GetLinksCountQueryParamTagIds$inboundSchema` instead. */
  export const inboundSchema = GetLinksCountQueryParamTagIds$inboundSchema;
  /** @deprecated use `GetLinksCountQueryParamTagIds$outboundSchema` instead. */
  export const outboundSchema = GetLinksCountQueryParamTagIds$outboundSchema;
  /** @deprecated use `GetLinksCountQueryParamTagIds$Outbound` instead. */
  export type Outbound = GetLinksCountQueryParamTagIds$Outbound;
}

/** @internal */
export const GetLinksCountQueryParamTagNames$inboundSchema: z.ZodType<
  GetLinksCountQueryParamTagNames,
  z.ZodTypeDef,
  unknown
> = z.union([z.string(), z.array(z.string())]);

/** @internal */
export type GetLinksCountQueryParamTagNames$Outbound = string | Array<string>;

/** @internal */
export const GetLinksCountQueryParamTagNames$outboundSchema: z.ZodType<
  GetLinksCountQueryParamTagNames$Outbound,
  z.ZodTypeDef,
  GetLinksCountQueryParamTagNames
> = z.union([z.string(), z.array(z.string())]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetLinksCountQueryParamTagNames$ {
  /** @deprecated use `GetLinksCountQueryParamTagNames$inboundSchema` instead. */
  export const inboundSchema = GetLinksCountQueryParamTagNames$inboundSchema;
  /** @deprecated use `GetLinksCountQueryParamTagNames$outboundSchema` instead. */
  export const outboundSchema = GetLinksCountQueryParamTagNames$outboundSchema;
  /** @deprecated use `GetLinksCountQueryParamTagNames$Outbound` instead. */
  export type Outbound = GetLinksCountQueryParamTagNames$Outbound;
}

/** @internal */
export const Three$inboundSchema: z.ZodNativeEnum<typeof Three> = z.nativeEnum(
  Three,
);

/** @internal */
export const Three$outboundSchema: z.ZodNativeEnum<typeof Three> =
  Three$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Three$ {
  /** @deprecated use `Three$inboundSchema` instead. */
  export const inboundSchema = Three$inboundSchema;
  /** @deprecated use `Three$outboundSchema` instead. */
  export const outboundSchema = Three$outboundSchema;
}

/** @internal */
export const Two$inboundSchema: z.ZodNativeEnum<typeof Two> = z.nativeEnum(Two);

/** @internal */
export const Two$outboundSchema: z.ZodNativeEnum<typeof Two> =
  Two$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Two$ {
  /** @deprecated use `Two$inboundSchema` instead. */
  export const inboundSchema = Two$inboundSchema;
  /** @deprecated use `Two$outboundSchema` instead. */
  export const outboundSchema = Two$outboundSchema;
}

/** @internal */
export const One$inboundSchema: z.ZodNativeEnum<typeof One> = z.nativeEnum(One);

/** @internal */
export const One$outboundSchema: z.ZodNativeEnum<typeof One> =
  One$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace One$ {
  /** @deprecated use `One$inboundSchema` instead. */
  export const inboundSchema = One$inboundSchema;
  /** @deprecated use `One$outboundSchema` instead. */
  export const outboundSchema = One$outboundSchema;
}

/** @internal */
export const GroupBy$inboundSchema: z.ZodType<GroupBy, z.ZodTypeDef, unknown> =
  z.union([One$inboundSchema, Two$inboundSchema, Three$inboundSchema]);

/** @internal */
export type GroupBy$Outbound = string | string | string;

/** @internal */
export const GroupBy$outboundSchema: z.ZodType<
  GroupBy$Outbound,
  z.ZodTypeDef,
  GroupBy
> = z.union([One$outboundSchema, Two$outboundSchema, Three$outboundSchema]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GroupBy$ {
  /** @deprecated use `GroupBy$inboundSchema` instead. */
  export const inboundSchema = GroupBy$inboundSchema;
  /** @deprecated use `GroupBy$outboundSchema` instead. */
  export const outboundSchema = GroupBy$outboundSchema;
  /** @deprecated use `GroupBy$Outbound` instead. */
  export type Outbound = GroupBy$Outbound;
}

/** @internal */
export const GetLinksCountRequest$inboundSchema: z.ZodType<
  GetLinksCountRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  domain: z.string().optional(),
  tagId: z.string().optional(),
  tagIds: z.union([z.string(), z.array(z.string())]).optional(),
  tagNames: z.union([z.string(), z.array(z.string())]).optional(),
  search: z.string().optional(),
  userId: z.string().optional(),
  showArchived: z.boolean().default(false),
  withTags: z.boolean().default(false),
  groupBy: z.union([One$inboundSchema, Two$inboundSchema, Three$inboundSchema])
    .optional(),
});

/** @internal */
export type GetLinksCountRequest$Outbound = {
  domain?: string | undefined;
  tagId?: string | undefined;
  tagIds?: string | Array<string> | undefined;
  tagNames?: string | Array<string> | undefined;
  search?: string | undefined;
  userId?: string | undefined;
  showArchived: boolean;
  withTags: boolean;
  groupBy?: string | string | string | undefined;
};

/** @internal */
export const GetLinksCountRequest$outboundSchema: z.ZodType<
  GetLinksCountRequest$Outbound,
  z.ZodTypeDef,
  GetLinksCountRequest
> = z.object({
  domain: z.string().optional(),
  tagId: z.string().optional(),
  tagIds: z.union([z.string(), z.array(z.string())]).optional(),
  tagNames: z.union([z.string(), z.array(z.string())]).optional(),
  search: z.string().optional(),
  userId: z.string().optional(),
  showArchived: z.boolean().default(false),
  withTags: z.boolean().default(false),
  groupBy: z.union([
    One$outboundSchema,
    Two$outboundSchema,
    Three$outboundSchema,
  ]).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetLinksCountRequest$ {
  /** @deprecated use `GetLinksCountRequest$inboundSchema` instead. */
  export const inboundSchema = GetLinksCountRequest$inboundSchema;
  /** @deprecated use `GetLinksCountRequest$outboundSchema` instead. */
  export const outboundSchema = GetLinksCountRequest$outboundSchema;
  /** @deprecated use `GetLinksCountRequest$Outbound` instead. */
  export type Outbound = GetLinksCountRequest$Outbound;
}
