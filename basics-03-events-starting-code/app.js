const app = Vue.createApp({
  data() {
    return {
      counter: 10,
      num: 5,
      name: '',
      confirmedName: '',
    };
  },

  methods: {
    confirmName() {
      this.confirmedName = this.name;
    },
    setName(event, lastName) {
      this.name = event.target.value + ' ' + lastName;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
    },
    submitForm() {},
  },
});

app.mount('#events');
