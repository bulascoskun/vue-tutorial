<template>
  <div>
    <section>
      <base-card>
        <h2>Register as a coach now!</h2>
        <coach-form @save-data="saveData"></coach-form>
      </base-card>
    </section>
  </div>
</template>

<script>
import CoachForm from '../../components/coaches/CoachForm.vue';

export default {
  components: { CoachForm },
  computed: {
    isCoach() {
      return this.$store.getters['coaches/isCoach'];
    },
  },
  methods: {
    saveData(data) {
      this.$store.dispatch('coaches/registerCoach', data);
      this.$router.replace('/coaches');
    },
  },
};
</script>
