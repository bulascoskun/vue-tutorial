<template>
  <section>
    <base-card>
      <h2>Submitted Experiences</h2>
      <div>
        <base-button @click="loadExperiences"
          >Load Submitted Experiences</base-button
        >
      </div>
      <p v-if="isError">{{ isError }}</p>
      <p v-if="!isError && isLoading">Loading...</p>
      <ul v-else-if="!isLoading && results && results.length > 0">
        <survey-result
          v-for="result in results"
          :key="result.id"
          :name="result.name"
          :rating="result.rating"
        ></survey-result>
      </ul>
      <p v-else-if="!isError">No data found. Add some first</p>
    </base-card>
  </section>
</template>

<script>
import SurveyResult from './SurveyResult.vue';

export default {
  components: {
    SurveyResult,
  },

  data() {
    return {
      results: [],
      isLoading: false,
      isError: null,
    };
  },

  mounted() {
    this.loadExperiences();
  },

  methods: {
    loadExperiences() {
      this.isLoading = true;
      this.isError = null;
      fetch(
        'https://vue-http-demo-1badc-default-rtdb.europe-west1.firebasedatabase.app/surveys.json'
      )
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
        })
        .then((data) => {
          this.isLoading = false;
          const results = [];
          for (const id in data) {
            results.push({
              id: id,
              name: data[id].name,
              rating: data[id].rating,
            });
          }
          this.results = results;
        })
        .catch(() => {
          this.isLoading = false;
          this.isError = 'Failed to fetch data :C';
        });
    },
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>
