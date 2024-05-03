import { createStore } from 'vuex';

import cartModule from './modules/cart';
import authModule from './modules/auth';
import productsModule from './modules/products';

const store = createStore({
  modules: {
    cart: cartModule,
    auth: authModule,
    products: productsModule,
  },
});

export default store;
