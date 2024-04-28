const app = Vue.createApp({
  data() {
    return {
      taskInput: '',
      tasks: [],
      isVisible: true,
    };
  },

  computed: {
    visibilityString() {
      return this.isVisible ? 'Hide' : 'Show';
    },
  },

  methods: {
    addTask(task) {
      this.tasks.push(task);
    },
    toggleVisibility() {
      this.isVisible = !this.isVisible;
    },
  },
});

app.mount('#assignment');
