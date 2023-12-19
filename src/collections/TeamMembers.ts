import { CollectionConfig } from "payload/types";
import { validateUrl } from "../lib/validation";

const TeamMembers: CollectionConfig = {
  slug: "members",
  admin: {
    useAsTitle: "name",
  },
  fields: [
    {
      name: "name",
      type: "text",
      required: true,
      unique: true,
    },
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
      name: "email",
      admin: {
        description:
          "You can fill this one or not, if empty, the icon will not be shown in the page",
      },
      type: "text",
    },
    {
      name: "facebook",
      admin: {
        description:
          "You can fill this one or not, if empty, the icon will not be shown in the page",
      },
      type: "text",
      validate: validateUrl,
    },
    {
      name: "instagram",
      admin: {
        description:
          "You can fill this one or not, if empty, the icon will not be shown in the page",
      },
      type: "text",
      validate: validateUrl,
    },
    {
      name: "linkedin",
      admin: {
        description:
          "You can fill this one or not, if empty, the icon will not be shown in the page",
      },
      type: "text",
      validate: validateUrl,
    },
    {
      name: "twitter",
      admin: {
        description:
          "You can fill this one or not, if empty, the icon will not be shown in the page",
      },
      type: "text",
      validate: validateUrl,
    },

    {
      name: "image",
      type: "upload",
      relationTo: "media",
      required: true,
      unique: true,
    },
    {
      name: "obj",
      admin: {
        description:
          "Please upload ONLY .obj files, otherwise web will return error",
      },
      type: "upload",
      required: true,
      relationTo: "file",
      unique: true,
    },
    {
      name: "mat",
      admin: {
        description:
          "Please upload ONLY .mtl files, otherwise web will return error",
      },
      type: "upload",
      required: true,
      relationTo: "file",
    },
    {
      name: "textures",
      type: "array",
      admin: {
        description:
          "Input texture files, feel free to add more rows as needed",
      },
      fields: [
        { name: "tex1", type: "upload", relationTo: "texture", unique: true },
        { name: "tex2", type: "upload", relationTo: "texture", unique: true },
        { name: "tex3", type: "upload", relationTo: "texture", unique: true },
        { name: "tex4", type: "upload", relationTo: "texture", unique: true },
      ],
    },
  ],
};

export default TeamMembers;
