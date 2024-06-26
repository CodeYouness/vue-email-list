const { createApp } = Vue

createApp({
    data() {
        return {
            mailList: []
        }
    },
    methods: {
        mailGenerator: function () {
            for (let i = 0; i < 10; i++) {
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                    .then((email) => {
                        this.mailList.push(email.data.response)
                    })
            }
        }
    },
    created() {
        this.mailGenerator()
    }
}).mount('#app')