const { createApp } = Vue;
const app = createApp({
    data() {
        //console.log(catalogo);
        return{
            players:catalogo,
            todo_text:'',
            indexPlayer: 0,
        }
    },
    mounted() {
    },
    methods: {
        addTodo(){
            this.players.push({
                text: this.todo_text,
            });
            this.todo_text='';
        },
        setActivePlayer(index){
            this.indexPlayer=index;

        }
    }
}).mount('#app');
