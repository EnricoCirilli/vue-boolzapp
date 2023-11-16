const { createApp } = Vue;
const app = createApp({
    data() {
        //console.log(catalogo);
        return{
            players:catalogo,
            newText:'',
            indexPlayer: 0,
            searchText:'',
        }
    },
    mounted() {
    },
    methods: {
        setActivePlayer(index){
            this.indexPlayer=index;
        },
       searchPlayer(){
           this.players.forEach((player)=>{
               if(player.name.toLowerCase().includes(this.searchText.toLowerCase())){
                   player.visible=true;
               }else{
                   player.visible=false;
               }
           });
       },
       addNewText(){
        this.players[this.indexPlayer].text=this.newText;
       }
    }
}).mount('#app');
