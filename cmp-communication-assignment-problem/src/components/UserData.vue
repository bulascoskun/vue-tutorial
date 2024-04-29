<template>
  <form @submit.prevent="updateUser">
    <input type="text" placeholder="Name" v-model="name" />
    <input type="text" placeholder="Age" v-model="age" />
    <button type="submit">Submit</button>
  </form>
</template>

<script>
export default {
  emits: ['update-user'],

  data() {
    return {
      name: '',
      age: '',
    };
  },

  methods: {
    updateUser() {
      this.$emit('update-user', this.name, this.age);
    },
  },
};
</script>

<style scoped></style>
