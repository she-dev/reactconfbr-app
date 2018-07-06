// @flow
import { AccessToken, GraphRequest, GraphRequestManager, LoginManager } from 'react-native-fbsdk';

const permissions: string[] = ['public_profile', 'email'];

export const graphRequest = (path: string = '/me', token: string, callback: () => void) => {
  const config = {
    accessToken: token,
    version: 'v3.0',
  };
  const infoRequest = new GraphRequest(path, config, callback);
  new GraphRequestManager().addRequest(infoRequest).start();
};

export const loginGraphRequest = (accessToken: string, callback: () => void) => {
  const path: string = '/me?fields=id,name,email';
  graphRequest(path, accessToken, callback);
};

export const logout = () => {
  LoginManager.logOut();
};

export const login = () =>
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
              AccessToken.getCurrentAccessToken().then(data => {
                if (data) {
                  resolve(data.accessToken);
                } else throw new Error('No AccessToken found.');
              });
            }
          },
          () => {
            reject(new Error('Login failed'));
          },
        );
      });
  });
