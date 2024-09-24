/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { tagsCreate } from "../funcs/tagsCreate.js";
import { tagsDelete } from "../funcs/tagsDelete.js";
import { tagsList } from "../funcs/tagsList.js";
import { tagsUpdate } from "../funcs/tagsUpdate.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";

export class Tags extends ClientSDK {
  /**
   * Retrieve a list of tags
   *
   * @remarks
   * Retrieve a list of tags for the authenticated workspace.
   */
  async list(
    options?: RequestOptions,
  ): Promise<Array<components.TagSchema>> {
    return unwrapAsync(tagsList(
      this,
      options,
    ));
  }

  /**
   * Create a new tag
   *
   * @remarks
   * Create a new tag for the authenticated workspace.
   */
  async create(
    request?: operations.CreateTagRequestBody | undefined,
    options?: RequestOptions,
  ): Promise<components.TagSchema> {
    return unwrapAsync(tagsCreate(
      this,
      request,
      options,
    ));
  }

  /**
   * Delete a tag
   *
   * @remarks
   * Delete a tag from the workspace. All existing links will still work, but they will no longer be associated with this tag.
   */
  async delete(
    id: string,
    options?: RequestOptions,
  ): Promise<operations.DeleteTagResponseBody> {
    return unwrapAsync(tagsDelete(
      this,
      id,
      options,
    ));
  }

  /**
   * Update a tag
   *
   * @remarks
   * Update a tag in the workspace.
   */
  async update(
    id: string,
    requestBody?: operations.UpdateTagRequestBody | undefined,
    options?: RequestOptions,
  ): Promise<components.TagSchema> {
    return unwrapAsync(tagsUpdate(
      this,
      id,
      requestBody,
      options,
    ));
  }
}
