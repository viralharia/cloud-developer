import AWS = require('aws-sdk');
import { config } from './config/config';
import { environment } from './config/config';

let configurationObj: { aws_reigion: string; aws_profile: string; aws_media_bucket: string; };
if(environment === "PROD"){
  configurationObj = config.aws.prod;
}else{
  configurationObj = config.aws.dev;
}

console.log(`aws_profile- ${configurationObj.aws_profile}, aws_region - ${configurationObj.aws_reigion}`);

//Configure AWS
if(configurationObj.aws_profile !== "DEPLOYED") {
  var credentials = new AWS.SharedIniFileCredentials({profile: 'default'});
  AWS.config.credentials = credentials;
}

export const s3 = new AWS.S3({
  signatureVersion: 'v4',
  region: configurationObj.aws_reigion,
  params: {Bucket: configurationObj.aws_media_bucket}
});


/* getGetSignedUrl generates an aws signed url to retreive an item
 * @Params
 *    key: string - the filename to be put into the s3 bucket
 * @Returns:
 *    a url as a string
 */
export function getGetSignedUrl( key: string ): string{

  const signedUrlExpireSeconds = 60 * 5

    const url = s3.getSignedUrl('getObject', {
        Bucket: configurationObj.aws_media_bucket,
        Key: key,
        Expires: signedUrlExpireSeconds
      });

    return url;
}

/* getPutSignedUrl generates an aws signed url to put an item
 * @Params
 *    key: string - the filename to be retreived from s3 bucket
 * @Returns:
 *    a url as a string
 */
export function getPutSignedUrl( key: string ){

    const signedUrlExpireSeconds = 60 * 5

    const url = s3.getSignedUrl('putObject', {
      Bucket: configurationObj.aws_media_bucket,
      Key: key,
      Expires: signedUrlExpireSeconds
    });

    return url;
}
