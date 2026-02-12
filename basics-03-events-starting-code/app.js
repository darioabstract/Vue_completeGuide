const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: ''
    };
  },
  methods: {
    setName(event, lastName) {
      this.name = event.target.value + ' ' + lastName
    },
    Add(num) {
      this.counter += num;
    },
    Reduce(num) {
      this.counter -= num;
    }
  }
});

app.mount('#events');
