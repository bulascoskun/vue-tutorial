const app = Vue.createApp({
  data() {
    return {
      input: '',
      isVisible: false,
      backgroundColor: '',
    };
  },

  methods: {
    toggle() {
      this.isVisible = !this.isVisible;
    },
  },
});

app.mount('#assignment');
