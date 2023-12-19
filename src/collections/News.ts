import { CollectionConfig } from "payload/types";

const News: CollectionConfig = {
  slug: "news",
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
    },
    {
      name: "description",
      type: "text",
      required: true,
    },
    {
      name: "date",
      type: "date",
      required: true,
    },
    {
      name: "Url",
      type: "text",
      required: true,
      validate: (val: string) => {
        if (
          val != null &&
          val.match(
            /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/
          )
        ) {
          return true;
        }
      },
    },
    {
      name: "image",
      type: "upload",
      relationTo: "media",
      required: true,
    },
  ],
};

export default News;
