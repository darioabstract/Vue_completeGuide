Vue.createApp({
    data() {
        return {
            alertMessage: 'Button Clicked',
            outputText: '',
            enteredText: ''
        }
    },
    methods: {
        alert() {
            return alert(this.alertMessage)
        },

        setOutput(event) {
            return this.outputText = event.target.value
        },

        setEnteredText(event) {
            return this.enteredText = event.target.value
        }
    }

}).mount('#assignment')