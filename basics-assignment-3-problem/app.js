const app = Vue.createApp({
  data() {
    return {
      count: 0,
      result: 'Not there yet',
    };
  },

  watch: {
    count(value) {
      if (value < 37) this.result = 'Not there yet';
      if (value === 37) this.result = 'Perfect';
      if (value > 37) this.result = 'Too much!';
    },
  },

  methods: {
    add(num) {
      this.count = this.count + num;
    },
    remove(num) {
      this.count = this.count - num;
    },
  },
});

app.mount('#assignment');
