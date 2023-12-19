import { CollectionConfig } from "payload/types";

export const Media: CollectionConfig = {
  slug: "media",
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
    imageSizes: [
      {
        name: "thumbnail",
        width: 400,
        height: 300,
        position: "centre",
      },
    ],
    mimeTypes: ["image/*"],
  },
  fields: [
    {
      name: "alt",
      type: "text",
    },
  ],
};
