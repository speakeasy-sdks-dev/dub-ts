/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

export class SDKValidationError extends Error {
  /**
   * The raw value that failed validation.
   */
  public readonly rawValue: unknown;

  constructor(message: string, cause: unknown, rawValue: unknown) {
    super(message);
    this.name = "SDKValidationError";
    this.cause = cause;
    this.rawValue = rawValue;
  }

  public override toString(): string {
    return `${this.message}: ${this.cause}`;
  }

  /**
   * Return a pretty-formatted error message if the underlying validation error
   * is a ZodError or some other recognized error type, otherwise return the
   * default error message.
   */
  public pretty(): string {
    if (this.cause instanceof z.ZodError) {
      return `${this.message}\n${formatZodError(this.cause)}`;
    } else {
      return this.toString();
    }
  }
}

export function formatZodError(err: z.ZodError, level = 0): string {
  let pre = "  ".repeat(level);
  pre = level > 0 ? `│${pre}` : pre;
  pre += " ".repeat(level);

  let message = "";
  const append = (str: string) => (message += `\n${pre}${str}`);

  const len = err.issues.length;
  const headline = len === 1 ? `${len} issue found` : `${len} issues found`;

  if (len) {
    append(`┌ ${headline}:`);
  }

  for (const issue of err.issues) {
    let path = issue.path.join(".");
    path = path ? `<root>.${path}` : "<root>";
    append(`│ • [${path}]: ${issue.message} (${issue.code})`);
    switch (issue.code) {
      case "invalid_literal":
      case "invalid_type": {
        append(`│     Want: ${issue.expected}`);
        append(`│      Got: ${issue.received}`);
        break;
      }
      case "unrecognized_keys": {
        append(`│     Keys: ${issue.keys.join(", ")}`);
        break;
      }
      case "invalid_enum_value": {
        append(`│     Allowed: ${issue.options.join(", ")}`);
        append(`│         Got: ${issue.received}`);
        break;
      }
      case "invalid_union_discriminator": {
        append(`│     Allowed: ${issue.options.join(", ")}`);
        break;
      }
      case "invalid_union": {
        const len = issue.unionErrors.length;
        append(
          `│   ✖︎ Attemped to deserialize into one of ${len} union members:`,
        );
        issue.unionErrors.forEach((err, i) => {
          append(`│   ✖︎ Member ${i + 1} of ${len}`);
          append(`${formatZodError(err, level + 1)}`);
        });
      }
    }
  }

  if (err.issues.length) {
    append(`└─*`);
  }

  return message.slice(1);
}
