const { createApp } = Vue

createApp({
    data() {
        return {
            mailList: []
        }
    },
    computed: {
        mailGenerator: function () {
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
        }
    }
}).mount('#app')