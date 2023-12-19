import path from "path";

import { payloadCloud } from "@payloadcms/plugin-cloud";
import { mongooseAdapter } from "@payloadcms/db-mongodb";
import { webpackBundler } from "@payloadcms/bundler-webpack";
import { slateEditor } from "@payloadcms/richtext-slate";
import { buildConfig } from "payload/config";
import { cloudStorage } from "@payloadcms/plugin-cloud-storage";
import { s3Adapter } from "@payloadcms/plugin-cloud-storage/s3";

import Users from "./collections/Users";
import { Media } from "./collections/asset/Media";
import News from "./collections/News";
import TeamMembers from "./collections/TeamMembers";
import { File } from "./collections/asset/File";
import { Texture } from "./collections/asset/Texture";
import HomepageVideo from "./global/HomeVideo";
import TeamMemberDisplayConfig from "./global/TeamMemberDisplayConfig";

const adapter = {
  adapter: s3Adapter({
    config: {
      endpoint: process.env.S3_ENDPOINT,
      region: process.env.S3_REGION,
      credentials: {
        accessKeyId: process.env.S3_ACCESS_KEY_ID,
        secretAccessKey: process.env.S3_SECRET_ACCESS_KEY,
      },
    },
    bucket: process.env.S3_BUCKET,
  }),
};

export default buildConfig({
  admin: {
    user: Users.slug,
    bundler: webpackBundler(),
    webpack: (config) => {
      config.resolve.fallback = {
        fs: false,
        os: false,
        path: false,
        crypto: require.resolve("crypto-browserify"),
      };
      return config;
    },
  },
  editor: slateEditor({}),
  globals: [TeamMemberDisplayConfig, HomepageVideo],
  collections: [Users, News, TeamMembers, File, Media, Texture],
  upload: {
    limits: {
      fileSize: 25000000, // 25MB
    },
  },
  typescript: {
    outputFile: path.resolve(__dirname, "payload-types.ts"),
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, "generated-schema.graphql"),
  },

  plugins: [
    payloadCloud(),
    cloudStorage({
      collections: {
        media: adapter,
        texture: adapter,
        file: adapter,
      },
    }),
  ],
  db: mongooseAdapter({
    url: process.env.DATABASE_URI,
  }),
});
