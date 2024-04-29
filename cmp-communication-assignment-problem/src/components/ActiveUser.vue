<template>
  <div>
    <h2>Username: {{ activeUser.username }}</h2>
    <h3>Age: {{ activeUser.age }}</h3>
  </div>
</template>

<script>
export default {
  props: { activeUser: Object },
};
</script>
