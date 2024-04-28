const app = Vue.createApp({
  data() {
    return {
      userInput: '',
      confirmedInput: '',
    };
  },
  methods: {
    showAlert() {
      alert('Hello Za Warudo!');
    },
    handleInputChange(e) {
      this.userInput = e.target.value;
    },
    handleConfirm() {
      this.confirmedInput = this.userInput;
    },
  },
});

app.mount('#assignment');
