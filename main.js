// setting up the vue instance

const { createApp } = Vue;

const app = createApp({
    data() {
        return {
            players: catalogo,
            indexPlayers: 0
            //
        }
    },
    mounted() {
    },
    methiods: {
        setActivePlayer: function(index){
            this.indexPlayers = index;
        }
    }

}).mount("#app")
