import { observable } from 'mobx';
// import getRandomString from "micro-helpers/getRandomString";

let store = null;

class Store {
  @observable desktopAsideOpen = true;

  constructor(state) {
    if (!state) {
      throw new Error('State is undefined');
    }
  }
}

function getInitialState() {
  return {
    _p: '_p',
  };
}

function StoreFactory(state) {
  if (process.browser) {
    if (store === null) {
      store = new Store(state);
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
