// @flow
import { AccessToken, GraphRequest, GraphRequestManager, LoginManager } from 'react-native-fbsdk';
import type GraphRequestConfig from 'react-native-fbsdk/js/FBGraphRequest';

const permissions: string[] = ['public_profile', 'email'];

const graphRequest = (path: string = '/me', accessToken: {}, callback: () => void) => {
  const config: GraphRequestConfig = {
    accessToken,
    version: 'v3.0',
  };
  const infoRequest = new GraphRequest(path, config, callback);
  new GraphRequestManager().addRequest(infoRequest).start();
};

const loginGraphRequest = (accessToken: {}, callback: () => void) => {
  const path: string = '/me?fields=id,name,email';
  graphRequest(path, accessToken, callback);
};

const logout = () => {
  LoginManager.logOut();
};

const login = () =>
  new Promise((resolve, reject) => {
    AccessToken.getCurrentAccessToken()
      .then(data => {
        if (data) {
          resolve(data.accessToken);
        } else throw new Error('No AccessToken found.');
      })
      .catch(() => {
        LoginManager.logInWithReadPermissions(permissions).then(
          result => {
            if (result.isCancelled) {
              logout();
              reject(new Error('Cancelled by user'));
            } else {
              AccessToken.getCurrentAccessToken().then(data => resolve(data.accessToken));
            }
          },
          () => {
            reject(new Error('Login failed'));
          },
        );
      });
  });

export default {
  login,
  logout,
  graphRequest,
  loginGraphRequest,
};
