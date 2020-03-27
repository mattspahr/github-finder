import { CognitoUserPool } from 'amazon-cognito-identity-js';

// let UserPoolId;
// let ClientId;

// if (process.env.NODE_ENV !== 'production') {
//   UserPoolId = process.env.REACT_APP_USER_POOL_ID;
//   ClientId = process.env.REACT_APP_CLIENT_ID;
// } else {
//   UserPoolId = process.env.USER_POOL_ID;
//   ClientId = process.env.CLIENT_ID;
// }

const poolData = {
  UserPoolId: 'us-east-1_1vfIZEXwQ',
  ClientId: '5vs47vbt5ac79r07qonbr9e81h'
};

export default new CognitoUserPool(poolData);
