import { CollectionConfig, GlobalConfig } from "payload/types";

const TeamMemberDisplayConfig: GlobalConfig = {
  slug: "teamMemberDisplayConfig",

  fields: [
    {
      name: "teamDescription",
      type: "text",
      required: true,
    },
    {
      name: "orderInAllTeamPage",
      type: "relationship",
      relationTo: "members",
      label: "Display Order in All Team Page for Members",
      hasMany: true,
      required: true,
      admin: {
        description:
          "Ordering of a person in the team member, from left to right. If not listed, member will not be shown",
        isSortable: true,
      },
    },
    {
      name: "orderInHomePage",
      type: "relationship",
      relationTo: "members",
      label: "Display Order of Team in Home Page",
      hasMany: true,
      required: true,
      admin: {
        description:
          "Ordering of a person in the team member, from left to right. If not listed, member will not be shown",
        isSortable: true,
      },
    },
  ],
};

export default TeamMemberDisplayConfig;
