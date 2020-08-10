export default {
  MAX_ATTACHMENT_SIZE: 5000000,
  s3: {
    REGION: 'us-west-2',
    BUCKET: 'brett123-notes-app-uploads'
  },
  apiGateway: {
    REGION: 'us-west-2',
    URL: 'https://uia9d0h0qe.execute-api.us-west-2.amazonaws.com/prod'
  },
  cognito: {
    REGION: 'us-west-2',
    USER_POOL_ID: 'us-west-2_usz32Xlov',
    APP_CLIENT_ID: '5lj795t5p4eqje5fkuv446omav',
    IDENTITY_POOL_ID: 'us-west-2:afb9af37-d822-40ac-9f06-95fbf90e663e'
  }
}