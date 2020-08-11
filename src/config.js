const dev = {
  STRIPE_KEY: 'pk_test_51H5exXCne1S3xympNKhPvKedWJSvMJZnj4CtX7zBUTdj6xhNp204gYaaUilgzaTKBEQEXVaZ4QuW7QU6B4pXP0xU00c1II8lYF',
  s3: {
    REGION: 'us-west-2',
    BUCKET: 'notes-app-2-api-dev-attachmentsbucket-dc3ssq4svj7u'
  },
  apiGateway: {
    REGION: 'us-west-2',
    URL: 'https://am3n081fk8.execute-api.us-west-2.amazonaws.com/dev'
  },
  cognito: {
    REGION: 'us-west-2',
    USER_POOL_ID: 'us-west-2_JmLmabzLr',
    APP_CLIENT_ID: '33qk0ic7mcculfld6om3p5o8rm',
    IDENTITY_POOL_ID: 'us-west-2:7d39dbb1-2a8a-485a-9f5c-fc401388bb6a'
  }
}

const prod = {
  STRIPE_KEY: 'pk_test_51H5exXCne1S3xympNKhPvKedWJSvMJZnj4CtX7zBUTdj6xhNp204gYaaUilgzaTKBEQEXVaZ4QuW7QU6B4pXP0xU00c1II8lYF',
  s3: {
    REGION: 'us-west-2',
    BUCKET: 'notes-app-2-api-prod-attachmentsbucket-1et33zv4arnpx'
  },
  apiGateway: {
    REGION: 'us-west-2',
    URL: 'https://4w4hmch953.execute-api.us-west-2.amazonaws.com/prod'
  },
  cognito: {
    REGION: 'us-west-2',
    USER_POOL_ID: 'us-west-2_mWe6h1R6F',
    APP_CLIENT_ID: '1sjtrokukdtfr5r1cd1b540nkg',
    IDENTITY_POOL_ID: 'us-west-2:66d0ca06-98e1-4529-a825-b65f2371012a'
  }
}

// Default to dev if not set
const config = process.env.REACT_APP_STAGE === 'prod'
  ? prod
  : dev;

export default {
  // Ad common config values here
  MAX_ATTACHMENT_SIZE: 5000000,
  ...config
};
