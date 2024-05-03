<template>
  <section>
    <ul>
      <product-item
        v-for="prod in products"
        :key="prod.id"
        :id="prod.id"
        :title="prod.title"
        :image="prod.image"
        :description="prod.description"
        :price="prod.price"
      ></product-item>
    </ul>
    <button @click="fetchProducts">Renew</button>
    <button @click="console.log(products)">Log</button>
  </section>
</template>

<script>
import ProductItem from '../components/products/ProductItem.vue';

import { mapActions } from 'vuex';

export default {
  components: {
    ProductItem,
  },

  computed: {
    products() {
      const products = this.$store.state.products;
      console.log(products);
      return products.products;
    },
  },

  methods: {
    ...mapActions(['fetchProducts']),
  },

  created() {
    this.fetchProducts();
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 2rem auto;
  padding: 0;
  max-width: 40rem;
}
</style>
