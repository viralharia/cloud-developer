export const environment = process.env.DEPLOYMENT_ENV === undefined ? "DEV" : process.env.DEPLOYMENT_ENV;

export const config = {
  "postgresql": {
    "dev": {
      "username": process.env.POSTGRES_USERNAME === undefined ? "" : process.env.POSTGRES_USERNAME,
      "password": process.env.POSTGRES_PASSWORD === undefined ? "" : process.env.POSTGRES_PASSWORD,
      "database": process.env.POSTGRES_DATABASE === undefined ? "" : process.env.POSTGRES_DATABASE,
      "host": process.env.POSTGRES_HOST === undefined ? "" : process.env.POSTGRES_HOST,
      "port": process.env.POSTGRES_PORT === undefined ? 0 : +process.env.POSTGRES_PORT
    },
    "prod": {
      "username": process.env.POSTGRES_USERNAME,
      "password": process.env.POSTGRES_PASSWORD,
      "database": process.env.POSTGRES_DATABASE,
      "host": process.env.POSTGRES_HOST,
      "port": +process.env.POSTGRES_PORT
    }
  },
  "aws": {
    "dev":{
      "aws_reigion": "",
      "aws_profile": "",
      "aws_media_bucket": ""
    },
    "prod":{
      "aws_reigion": process.env.AWS_REGION,
      "aws_profile": process.env.AWS_PROFILE,
      "aws_media_bucket": process.env.AWS_BUCKET
    }
  },
  "jwt":{
    "secretKey" : process.env.JWT_SECRETKEY === undefined ? "" : process.env.JWT_SECRETKEY
  }
}
