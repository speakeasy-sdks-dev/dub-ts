/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { ClosedEnum } from "../../types/enums.js";
import * as z from "zod";

/**
 * The 2-letter country code of the city: https://d.to/geo
 */
export const LeadsCitiesCountry = {
    Af: "AF",
    Al: "AL",
    Dz: "DZ",
    As: "AS",
    Ad: "AD",
    Ao: "AO",
    Ai: "AI",
    Aq: "AQ",
    Ag: "AG",
    Ar: "AR",
    Am: "AM",
    Aw: "AW",
    Au: "AU",
    At: "AT",
    Az: "AZ",
    Bs: "BS",
    Bh: "BH",
    Bd: "BD",
    Bb: "BB",
    By: "BY",
    Be: "BE",
    Bz: "BZ",
    Bj: "BJ",
    Bm: "BM",
    Bt: "BT",
    Bo: "BO",
    Ba: "BA",
    Bw: "BW",
    Bv: "BV",
    Br: "BR",
    Io: "IO",
    Bn: "BN",
    Bg: "BG",
    Bf: "BF",
    Bi: "BI",
    Kh: "KH",
    Cm: "CM",
    Ca: "CA",
    Cv: "CV",
    Ky: "KY",
    Cf: "CF",
    Td: "TD",
    Cl: "CL",
    Cn: "CN",
    Cx: "CX",
    Cc: "CC",
    Co: "CO",
    Km: "KM",
    Cg: "CG",
    Cd: "CD",
    Ck: "CK",
    Cr: "CR",
    Ci: "CI",
    Hr: "HR",
    Cu: "CU",
    Cy: "CY",
    Cz: "CZ",
    Dk: "DK",
    Dj: "DJ",
    Dm: "DM",
    Do: "DO",
    Ec: "EC",
    Eg: "EG",
    Sv: "SV",
    Gq: "GQ",
    Er: "ER",
    Ee: "EE",
    Et: "ET",
    Fk: "FK",
    Fo: "FO",
    Fj: "FJ",
    Fi: "FI",
    Fr: "FR",
    Gf: "GF",
    Pf: "PF",
    Tf: "TF",
    Ga: "GA",
    Gm: "GM",
    Ge: "GE",
    De: "DE",
    Gh: "GH",
    Gi: "GI",
    Gr: "GR",
    Gl: "GL",
    Gd: "GD",
    Gp: "GP",
    Gu: "GU",
    Gt: "GT",
    Gn: "GN",
    Gw: "GW",
    Gy: "GY",
    Ht: "HT",
    Hm: "HM",
    Va: "VA",
    Hn: "HN",
    Hk: "HK",
    Hu: "HU",
    Is: "IS",
    In: "IN",
    Id: "ID",
    Ir: "IR",
    Iq: "IQ",
    Ie: "IE",
    Il: "IL",
    It: "IT",
    Jm: "JM",
    Jp: "JP",
    Jo: "JO",
    Kz: "KZ",
    Ke: "KE",
    Ki: "KI",
    Kp: "KP",
    Kr: "KR",
    Kw: "KW",
    Kg: "KG",
    La: "LA",
    Lv: "LV",
    Lb: "LB",
    Ls: "LS",
    Lr: "LR",
    Ly: "LY",
    Li: "LI",
    Lt: "LT",
    Lu: "LU",
    Mo: "MO",
    Mg: "MG",
    Mw: "MW",
    My: "MY",
    Mv: "MV",
    Ml: "ML",
    Mt: "MT",
    Mh: "MH",
    Mq: "MQ",
    Mr: "MR",
    Mu: "MU",
    Yt: "YT",
    Mx: "MX",
    Fm: "FM",
    Md: "MD",
    Mc: "MC",
    Mn: "MN",
    Ms: "MS",
    Ma: "MA",
    Mz: "MZ",
    Mm: "MM",
    Na: "NA",
    Nr: "NR",
    Np: "NP",
    Nl: "NL",
    Nc: "NC",
    Nz: "NZ",
    Ni: "NI",
    Ne: "NE",
    Ng: "NG",
    Nu: "NU",
    Nf: "NF",
    Mk: "MK",
    Mp: "MP",
    No: "NO",
    Om: "OM",
    Pk: "PK",
    Pw: "PW",
    Ps: "PS",
    Pa: "PA",
    Pg: "PG",
    Py: "PY",
    Pe: "PE",
    Ph: "PH",
    Pn: "PN",
    Pl: "PL",
    Pt: "PT",
    Pr: "PR",
    Qa: "QA",
    Re: "RE",
    Ro: "RO",
    Ru: "RU",
    Rw: "RW",
    Sh: "SH",
    Kn: "KN",
    Lc: "LC",
    Pm: "PM",
    Vc: "VC",
    Ws: "WS",
    Sm: "SM",
    St: "ST",
    Sa: "SA",
    Sn: "SN",
    Sc: "SC",
    Sl: "SL",
    Sg: "SG",
    Sk: "SK",
    Si: "SI",
    Sb: "SB",
    So: "SO",
    Za: "ZA",
    Gs: "GS",
    Es: "ES",
    Lk: "LK",
    Sd: "SD",
    Sr: "SR",
    Sj: "SJ",
    Sz: "SZ",
    Se: "SE",
    Ch: "CH",
    Sy: "SY",
    Tw: "TW",
    Tj: "TJ",
    Tz: "TZ",
    Th: "TH",
    Tl: "TL",
    Tg: "TG",
    Tk: "TK",
    To: "TO",
    Tt: "TT",
    Tn: "TN",
    Tr: "TR",
    Tm: "TM",
    Tc: "TC",
    Tv: "TV",
    Ug: "UG",
    Ua: "UA",
    Ae: "AE",
    Gb: "GB",
    Us: "US",
    Um: "UM",
    Uy: "UY",
    Uz: "UZ",
    Vu: "VU",
    Ve: "VE",
    Vn: "VN",
    Vg: "VG",
    Vi: "VI",
    Wf: "WF",
    Eh: "EH",
    Ye: "YE",
    Zm: "ZM",
    Zw: "ZW",
    Ax: "AX",
    Bq: "BQ",
    Cw: "CW",
    Gg: "GG",
    Im: "IM",
    Je: "JE",
    Me: "ME",
    Bl: "BL",
    Mf: "MF",
    Rs: "RS",
    Sx: "SX",
    Ss: "SS",
    Xk: "XK",
} as const;
/**
 * The 2-letter country code of the city: https://d.to/geo
 */
export type LeadsCitiesCountry = ClosedEnum<typeof LeadsCitiesCountry>;

export type LeadsCities = {
    /**
     * The name of the city
     */
    city: string;
    /**
     * The 2-letter country code of the city: https://d.to/geo
     */
    country: LeadsCitiesCountry;
    /**
     * The number of leads from this city
     */
    leads: number;
};

/** @internal */
export const LeadsCitiesCountry$inboundSchema: z.ZodNativeEnum<typeof LeadsCitiesCountry> =
    z.nativeEnum(LeadsCitiesCountry);

/** @internal */
export const LeadsCitiesCountry$outboundSchema: z.ZodNativeEnum<typeof LeadsCitiesCountry> =
    LeadsCitiesCountry$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace LeadsCitiesCountry$ {
    /** @deprecated use `LeadsCitiesCountry$inboundSchema` instead. */
    export const inboundSchema = LeadsCitiesCountry$inboundSchema;
    /** @deprecated use `LeadsCitiesCountry$outboundSchema` instead. */
    export const outboundSchema = LeadsCitiesCountry$outboundSchema;
}

/** @internal */
export const LeadsCities$inboundSchema: z.ZodType<LeadsCities, z.ZodTypeDef, unknown> = z.object({
    city: z.string(),
    country: LeadsCitiesCountry$inboundSchema,
    leads: z.number(),
});

/** @internal */
export type LeadsCities$Outbound = {
    city: string;
    country: string;
    leads: number;
};

/** @internal */
export const LeadsCities$outboundSchema: z.ZodType<
    LeadsCities$Outbound,
    z.ZodTypeDef,
    LeadsCities
> = z.object({
    city: z.string(),
    country: LeadsCitiesCountry$outboundSchema,
    leads: z.number(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace LeadsCities$ {
    /** @deprecated use `LeadsCities$inboundSchema` instead. */
    export const inboundSchema = LeadsCities$inboundSchema;
    /** @deprecated use `LeadsCities$outboundSchema` instead. */
    export const outboundSchema = LeadsCities$outboundSchema;
    /** @deprecated use `LeadsCities$Outbound` instead. */
    export type Outbound = LeadsCities$Outbound;
}
