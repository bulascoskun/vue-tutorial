<template>
  <transition-group tag="ul" name="user-list">
    <li v-for="user in users" :key="user" @click="removeUser(user)">
      {{ user }}
    </li>
  </transition-group>
  <div>
    <input type="text" v-model="userInput" />
    <button @click="addUser">Add User</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userInput: '',
      users: ['Max', 'Manu', 'Julie', 'Angela', 'Michael'],
    };
  },
  methods: {
    addUser() {
      this.users.unshift(this.userInput);
    },
    removeUser(user) {
      this.users = this.users.filter((usersUser) => usersUser !== user);
    },
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 1rem 0;
  padding: 0;
}
li {
  border: 1px solid lightgray;
  padding: 1rem;
  text-align: center;
  min-width: 100px;
}

.user-list-enter-from {
  transform: translateX(-50%);
  opacity: 0;
}
.user-list-enter-active {
  transition: all 1s ease-in-out;
}
.user-list-enter-to {
  opacity: 1;
}
.user-list-leave-from {
  opacity: 1;
}
.user-list-leave-active {
  transition: all 1s ease-in-out;
  position: absolute;
}
.user-list-leave-to {
  transform: translateX(50%);
  opacity: 0;
}
.user-list-move {
  transition: transform 0.8s ease;
}
</style>
