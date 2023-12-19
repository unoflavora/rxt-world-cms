import { CollectionConfig } from "payload/types";

export const File: CollectionConfig = {
  slug: "file",
  upload: {
    staticURL: process.env.S3_DOMAIN,
    disableLocalStorage: true,
  },
  fields: [],
};
