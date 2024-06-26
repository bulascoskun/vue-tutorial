const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      lastName: '',
    };
  },

  watch: {
    counter(value) {
      if (value > 50) {
        this.counter = 0;
      }
    },
  },

  computed: {
    fullname() {
      if (this.name !== '' && this.lastName !== '')
        return this.name + ' ' + this.lastName;
    },
  },

  methods: {
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
    },
    resetInput() {
      this.name = '';
    },
    // outputFullname() {
    //   if (this.name === '') return '';
    //   return this.name + ' ' + 'Coşkun';
    // },
  },
});

app.mount('#events');
