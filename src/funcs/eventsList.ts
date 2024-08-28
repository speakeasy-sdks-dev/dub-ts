/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { DubCore } from "../core.js";
import { encodeFormQuery as encodeFormQuery$ } from "../lib/encodings.js";
import * as m$ from "../lib/matchers.js";
import * as schemas$ from "../lib/schemas.js";
import { RequestOptions } from "../lib/sdks.js";
import { extractSecurity, resolveGlobalSecurity } from "../lib/security.js";
import { pathToFunc } from "../lib/url.js";
import {
    ConnectionError,
    InvalidRequestError,
    RequestAbortedError,
    RequestTimeoutError,
    UnexpectedClientError,
} from "../models/errors/httpclienterrors.js";
import * as errors from "../models/errors/index.js";
import { SDKError } from "../models/errors/sdkerror.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import * as operations from "../models/operations/index.js";
import { Result } from "../types/fp.js";

/**
 * Retrieve a list of events
 *
 * @remarks
 * Retrieve a paginated list of events for the authenticated workspace.
 */
export async function eventsList(
    client$: DubCore,
    request?: operations.ListEventsRequest | undefined,
    options?: RequestOptions
): Promise<
    Result<
        operations.ListEventsResponseBody,
        | errors.BadRequest
        | errors.Unauthorized
        | errors.Forbidden
        | errors.NotFound
        | errors.Conflict
        | errors.InviteExpired
        | errors.UnprocessableEntity
        | errors.RateLimitExceeded
        | errors.InternalServerError
        | SDKError
        | SDKValidationError
        | UnexpectedClientError
        | InvalidRequestError
        | RequestAbortedError
        | RequestTimeoutError
        | ConnectionError
    >
> {
    const input$ = typeof request === "undefined" ? {} : request;

    const parsed$ = schemas$.safeParse(
        input$,
        (value$) => operations.ListEventsRequest$outboundSchema.parse(value$),
        "Input validation failed"
    );
    if (!parsed$.ok) {
        return parsed$;
    }
    const payload$ = parsed$.value;
    const body$ = null;

    const path$ = pathToFunc("/events")();

    const query$ = encodeFormQuery$({
        browser: payload$.browser,
        city: payload$.city,
        continent: payload$.continent,
        country: payload$.country,
        device: payload$.device,
        domain: payload$.domain,
        end: payload$.end,
        event: payload$.event,
        externalId: payload$.externalId,
        interval: payload$.interval,
        key: payload$.key,
        limit: payload$.limit,
        linkId: payload$.linkId,
        order: payload$.order,
        os: payload$.os,
        page: payload$.page,
        qr: payload$.qr,
        referer: payload$.referer,
        root: payload$.root,
        sortBy: payload$.sortBy,
        start: payload$.start,
        tagId: payload$.tagId,
        timezone: payload$.timezone,
        url: payload$.url,
    });

    const headers$ = new Headers({
        Accept: "application/json",
    });

    const token$ = await extractSecurity(client$.options$.token);
    const security$ = token$ == null ? {} : { token: token$ };
    const context = {
        operationID: "listEvents",
        oAuth2Scopes: [],
        securitySource: client$.options$.token,
    };
    const securitySettings$ = resolveGlobalSecurity(security$);

    const requestRes = client$.createRequest$(
        context,
        {
            security: securitySettings$,
            method: "GET",
            path: path$,
            headers: headers$,
            query: query$,
            body: body$,
            timeoutMs: options?.timeoutMs || client$.options$.timeoutMs || -1,
        },
        options
    );
    if (!requestRes.ok) {
        return requestRes;
    }
    const request$ = requestRes.value;

    const doResult = await client$.do$(request$, {
        context,
        errorCodes: ["400", "401", "403", "404", "409", "410", "422", "429", "4XX", "500", "5XX"],
        retryConfig: options?.retries || client$.options$.retryConfig,
        retryCodes: options?.retryCodes || ["429", "500", "502", "503", "504"],
    });
    if (!doResult.ok) {
        return doResult;
    }
    const response = doResult.value;

    const responseFields$ = {
        HttpMeta: { Response: response, Request: request$ },
    };

    const [result$] = await m$.match<
        operations.ListEventsResponseBody,
        | errors.BadRequest
        | errors.Unauthorized
        | errors.Forbidden
        | errors.NotFound
        | errors.Conflict
        | errors.InviteExpired
        | errors.UnprocessableEntity
        | errors.RateLimitExceeded
        | errors.InternalServerError
        | SDKError
        | SDKValidationError
        | UnexpectedClientError
        | InvalidRequestError
        | RequestAbortedError
        | RequestTimeoutError
        | ConnectionError
    >(
        m$.json(200, operations.ListEventsResponseBody$inboundSchema),
        m$.jsonErr(400, errors.BadRequest$inboundSchema),
        m$.jsonErr(401, errors.Unauthorized$inboundSchema),
        m$.jsonErr(403, errors.Forbidden$inboundSchema),
        m$.jsonErr(404, errors.NotFound$inboundSchema),
        m$.jsonErr(409, errors.Conflict$inboundSchema),
        m$.jsonErr(410, errors.InviteExpired$inboundSchema),
        m$.jsonErr(422, errors.UnprocessableEntity$inboundSchema),
        m$.jsonErr(429, errors.RateLimitExceeded$inboundSchema),
        m$.jsonErr(500, errors.InternalServerError$inboundSchema),
        m$.fail(["4XX", "5XX"])
    )(response, { extraFields: responseFields$ });
    if (!result$.ok) {
        return result$;
    }

    return result$;
}
