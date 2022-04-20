import * as dotenv from "dotenv";
dotenv.config();

export const config = {
  username: `${process.env.USER}`,
  password: process.env.PASSWORD,
  database: process.env.DEV_DB,
  port: Number(process.env.PORT),
  dbport:Number(process.env.DB_PORT),
  host: process.env.DB_HOST,
  dialect: "postgres",
  aws_region: process.env.AWS_REGION,
  aws_profile: process.env.AWS_PROFILE,
  aws_media_bucket: process.env.AWS_BUCKET,
  url: process.env.URL,
  jwt: {
    secret: process.env.TOKEN_SECRET,
  },
};

