const authModule = {
  state() {
    return {
      isLoggedIn: false,
    };
  },

  mutations: {
    login(state) {
      state.isLoggedIn = true;
    },
    logout(state) {
      state.isLoggedIn = false;
    },
  },

  getters: {
    isLoggedIn(state) {
      return state.isLoggedIn;
    },
  },
};

export default authModule;
