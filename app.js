const app = Vue.createApp({
    data() {
        return {
            number: 0,
        };
    },
    methods: {
        addNumber(num) {
            this.number = this.number + num;
        },
    }
});

app.mount('#assignment');