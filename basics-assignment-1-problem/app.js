const app = Vue.createApp({
    data() {
        return {
            name: 'Dario',
            age: 41,
            image: 'https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fdt37c1s1812icd4l94hw.png'

        }
    },
    methods: {
        favNumber() {
            const random = Math.random();
            return random
        },

        agePlusFive() {
            return this.age + 5;
        }
    }

}).mount(`#assignment`)