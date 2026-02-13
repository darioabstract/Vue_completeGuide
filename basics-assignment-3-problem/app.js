const app = Vue.createApp({
    data() {
        return {
            value: 0,
            result: '',
        }

    },
    methods: {
        addingNumber(num) {
            return this.value += num;
        }
    },
    computed: {

        result() {
            if (this.value < 37) {
                return 'Not There Yet!'
            } else if (this.value === 37) {
                return this.value
            } else {
                return 'Too Much!'
            }
        }

    },
    watch: {
        result() {
            const that = this;
            setTimeout(function () {
                that.value = 0;
            }, 5000)

        }
    }
});

app.mount('#assignment');