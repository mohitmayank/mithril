/* global window */

import { observable, action } from 'mobx';
import Cookies from 'js-cookie';
import { Api, AuthApi } from './lib/api';
import { Router } from './router';
// import getRandomString from "micro-helpers/getRandomString";

const sweet = process.env.AUTH_COOKIE;
const isDev = process.env.NODE_ENV === 'development';

let store = null;

class Store {
  api = AuthApi;

  @observable token = null;

  @observable desktopAsideOpen = true;

  @observable auth = null;

  constructor(state) {
    if (!state) {
      throw new Error('State is undefined');
    }
    if (state.token) {
      this.registerAuth(state.token, state.auth);
    }
  }

  @action registerAuth(token, auth, setCookie) {
    this.token = token;
    this.api = Api(token);
    this.auth = auth;
    if (setCookie) {
      Cookies.set(sweet, token);
    }
  }

  @action logout() {
    this.token = null;
    this.api = AuthApi;
    this.auth = null;
    Cookies.remove(sweet);
    Router.pushRoute('/');
  }
}

function getInitialState(token) {
  const state = {};
  if (token) {
    // return Api(token).get('/users/me').then((res) => {
    //   const auth = res.data;
    //   return Object.assign(state, {
    //     token,
    //     auth,
    //   });
    // }).catch(() => state);
    return Object.assign(state, {
      token,
      auth: {
        name: 'Server User',
      },
    });
  }
  return state;
}

function StoreFactory(state) {
  if (process.browser) {
    if (store === null) {
      store = new Store(state);
    }
    if (isDev) {
      window.store = store;
    }
    return store;
  }
  return new Store(state);
}

export {
  StoreFactory,
  getInitialState,
};

export default StoreFactory;
