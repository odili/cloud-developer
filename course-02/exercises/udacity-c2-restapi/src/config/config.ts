export const config = {
  dev: {
    username: process.env.USERNAME,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    host: process.env.HOST,
    dialect: process.env.DIALECT,
    aws_region: process.env.AWS_REGION,
    aws_profile: process.env.AWS_PROFILE,
    aws_media_bucket: process.env.AWS_MEDIA_BUCKET,
  },
  prod: {
    username: '',
    password: '',
    database: 'udagram_prod',
    host: '',
    dialect: 'postgres',
  },
};
