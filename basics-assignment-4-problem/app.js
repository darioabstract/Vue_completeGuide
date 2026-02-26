const app = Vue.createApp({
    data() {
        return {
            user: '',
            toggle: true,
            bgColor: ''
        }
    },
    methods: {
        handletoggle() {
            this.toggle = !this.toggle
        },
        backgroundColor(event) {
            this.bgColor = event.target.value
        }
    },
    computed: {
        paraClasses() {
            return {
                user1: this.user === 'user1',
                user2: this.user === 'user2',
                visible: this.toggle,
                hidden: !this.toggle
            }
        }
    }
});

app.mount('#assignment')