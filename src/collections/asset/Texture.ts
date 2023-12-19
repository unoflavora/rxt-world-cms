import { CollectionConfig } from "payload/types";

export const Texture: CollectionConfig = {
  slug: "texture",
  upload: {
    staticURL: process.env.S3_DOMAIN,
    staticDir: "",
    disableLocalStorage: true,
    adminThumbnail: ({ doc }) => {
      const url =
        "https://rxt-rimaunangis.s3.ap-southeast-1.amazonaws.com" +
        `/${doc.filename}`;
      return url;
    },
    mimeTypes: ["image/*"],
  },
  fields: [],
};
