<template>
  <main>
    <active-user :active-user="activeUser" />
    <user-data @update-user="updateUser" />
  </main>
</template>

<script>
export default {
  data() {
    return {
      activeUser: {
        username: '',
        age: '',
      },
    };
  },

  methods: {
    updateUser(name, age) {
      this.activeUser = {
        username: name,
        age: age,
      };
    },
  },
};
</script>
