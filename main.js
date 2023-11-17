// setting up the vue instance

const { createApp } = Vue;

const app = createApp({
    data() {
        return {
            players: catalogo,
            indexPlayers: 0,
            searchText: "",
        }
    },
    mounted() {
    },
    methods: {
         setActivePlayer: function(index){
            this.indexPlayers = index;
      },
      // funzione che si abbina  (riga 43/44 html ) v-model=" searchText e @keyup="searchContact" e stringa vuota searchText"" e v-show="player.visible", alla ricerca di un contatto 
      // andiamo a controllare con un ciclo forEach se il nome del contatto è incluso nella stringa di ricerca, se è incluso il contatto è visibile
      // se non è incluso il contatto non è visibile
      searchContact: function(){
        this.players.forEach((player) => {
            if(player.name.toLowerCase().includes(this.searchText.toLowerCase())){
                player.visible = true;
            } else {
                player.visible = false;
            }
        });
      },
     },

}).mount("#app")
