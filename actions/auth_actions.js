import { AsyncStorage } from 'react-native';

import {
  FACEBOOK_LOGIN_SUCCESS
} from './types';

//AsyncStorage.setItem('fb_token', token);
//AsyncStorage.getItem('fb_token');

export const facebookLogin = () => {
  let token = await AsyncStorage.getItem('fb_token');

  if (token) {
    //dispatch an action saying fb login is done
  } else {
    // start up fb login process
  }
};
