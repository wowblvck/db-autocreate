const DEFAULT_STATE = {
  token: null,
}

class Store {
  static isExits = false;
  static instance;

  state = DEFAULT_STATE;

  constructor() {
    if (Store.isExits) {
      return Store.instance;
    }
    Store.isExits = true;
    Store.instance = this;
  }

  set Token(value) {
    return this.state.token = value;
  }

  get Token() {
    return this.state.token;
  }
}

const store = new Store();
export default store;
