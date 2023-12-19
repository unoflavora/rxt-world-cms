import { CollectionConfig, GlobalConfig } from "payload/types";

const HomepageVideo: GlobalConfig = {
  slug: "homeVideo",
  fields: [
    {
      name: "video",
      type: "upload",
      relationTo: "file",
      required: true,
    },
  ],
};

export default HomepageVideo;
