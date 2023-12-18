<script>
 export default{
    name: 'Menu',
    data(){
       return {
         
       }
    },
    mounted(){
        this.Login();
    },
    methods: {
        Login(){
            if(document.cookie.indexOf('token=')=== 0){
                const item1 = document.getElementById('item-2').style.display='none';
                const item2 = document.getElementById('item-3').style.display='none';
                const item3 = document.getElementById('item-4');
                const item4 = document.getElementById('item-1');
               item4.style.gridColumn='2 /3'
                item3.style.display='block'
                item3.style.gridColumn='3/4'

            }
        },
        reload(){
            delete this.$route.query.where;
            if(this.$route.query.where === undefined){
                setTimeout(()=>{
                    location.reload();
                },200)
            }
        }
    }
 }
</script>
<template>
   <nav>
     <ul id="contain-menu">
    <router-link to="/"><img id="image-logo" src="../assets/room.png"/></router-link>
     <router-link @click="reload" id="item-1" class="item-room  " to="/room">Habitaciones</router-link>
     <router-link  id="item-2" class="item items" to="/checkIn">Registrarse</router-link>
     <router-link  id="item-3" class="item items" to="/logIn">Iniciar sesion</router-link>
     <router-link  id="item-4" class="item items" to="/Procfile">Perfil</router-link>   
    </ul>
   </nav>    
</template>

<style scoped>
#item-4{
    display: none;
    margin-right: 15px;
}

*{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}
.item-room{
    text-decoration: none;
    color: black;
    width: 100%;
}
#item-1{
    font-size: 1.1rem;
    font-family: 'Roboto Slab', serif;
    grid-row: 2 /3;
    margin-left: 5px;
}


 

.item-room:active{
    transform: scale(1.1);
    border: none;
}

.items:active{
    transform: scale(1.1);
    border: none;
}

#item-3{
    padding-right: 10px;
}

.item{
    color:black;
    text-decoration: none;
    font-family: 'Roboto Slab', serif;
    font-size: 1.1rem;
    grid-row: 2 /3;

}
#image-logo{
    margin-top: 5px;
    height: 43px;
    width: 190%;
    cursor: pointer;
    grid-row: 1 /2;
    grid-column: 1 /2;

}


nav{
    display: grid;
    grid-template-columns: auto auto auto;
}





#contain-menu{
    grid-column: 1 / 4;
    display: grid;
    grid-template-columns: auto  auto auto ;
    grid-template-rows: 20px 20px;
    height: 50px;
    place-items: center;
    background-color: white;
    border-bottom: 2px solid rgb(1, 70, 1,.9);
}

@media screen and (min-width: 500px) and (max-width: 699px){
    #item-1{
        font-size: 1.2rem;
    }

    .item{
        font-size: 1.2rem;
    }
}

@media screen and (min-width: 450px) and (max-width: 699px){
    #contain-menu{
        grid-template-columns: minmax(auto,100px) minmax(auto,900px) auto;
        grid-template-rows: none;
        column-gap: 25px;
    }
    #image-logo{
    grid-column: 1 /2;
}
.item{
    padding-bottom: 1px;
    grid-row: 1 /2;
}

#item-1{
    padding-top: 5px;
    justify-self: end;
    grid-row: 1 /2;
    height: 33px;
    width: 120px;
}
}

@media screen and (min-width: 700px){

    #contain-menu{
        grid-template-columns: minmax(auto,100px) minmax(auto,900px) auto;
        grid-template-rows: none;
        column-gap: 25px;
    }

    #item-1{
    height: 33px;
    width: 120px;
    font-size: 1.3rem;
    list-style: none;
    padding-top: 2px;
    justify-self: end;
    grid-row: 1 /2;
    grid-column: 2 /3;
}



#item-2{
    justify-self: start;
    margin-left: 10px;
    grid-column: 3 /4;
}
 
.item{
    font-size: 1.3rem;
    padding-bottom: 1px;
    grid-row: 1 /2;
}

#item-3{
    grid-column: 4 / 5;
    margin-right: 10px;
}

#image-logo{
    margin-left: 35px;
    width: 130px;
    grid-column: 1 /2;
}

}

</style>