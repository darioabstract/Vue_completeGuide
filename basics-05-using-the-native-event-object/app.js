const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      surname: '',
      // fullname: ''
    };
  },
  methods: {
    setName(event, lastName) {
      this.name = event.target.value;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    },

    resetInput() {
      this.name = ''
    },
    outputFullName() {
      if (this.name === '') {
        return '';
      }
      return this.name + ' ' + this.surname;
    }
  },
  computed: {

    fullname() {
      console.log('Running again..');
      if (this.name === '') {
        return ''
      }
      return this.name + ' ' + this.surname
    }
  },
  watch: {
    counter(value) {
      if (value > 50) {
        const that = this;
        setTimeout(function () {
          that.counter = 0;

        }, 2000)
      }
    }
    // name(value) {
    //   if (value === '') {
    //     this.fullname = '';
    //   } else {
    //     this.fullname = value + ' ' + this.surname
    //   }
    // },
    // surname(value) {
    //   if (surname === '') {
    //     this.fullname === '';
    //   } else {
    //     this.fullname = value + ' ' + this.surname
    //   }
    // }
  }
});

app.mount('#events');
