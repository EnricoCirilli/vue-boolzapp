// setting up the vue instance

const { createApp } = Vue;
const app = createApp({
    data() {
        console.log(catalogo);
        return {
            players: catalogo
        }
    },
    mounted() {
    },
    methiods: {

    }

}).mount("#app")
