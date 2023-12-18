<script>
import Footer from "../components/Footer.vue";
import Main from '../components/Main.vue';
import Menu from "../components/Menu.vue";

export default {
    name: 'Room_Especific',
    components: {
    Footer,
    Main,
    Menu,
},
data(){
  return {
    Item: []
  }
},
created(){
    this.url();
},
methods: {
  async url(){
    const id = this.$route.params.room_id
    const API_URL = `http://localhost:3000/api/v1/rooms/user/${id}`;
    const data = await fetch(API_URL);
    const res = await data.json();
    this.Item = res
  }
}
}

</script>

<template>
    <Menu id="menu"/>
      <section id="section-1" v-for="(Item,index) in Item" :key="index">
        <img id="image-room" :src="Item.image_url" />
        <h2 id="tittle-2">{{Item.titulo_del_cuarto}}</h2> 
        <article id="info-container">
         <div id="containe-info">
            <button>Informacion del Cuarto</button>
           
            <h2 id="title-depto">{{Item.departamento}}</h2>
           <div id="depto" class="containe_user">
            <img class="imagen" src="../icons/location_on_black_24dp.svg"/><p class="info_user">Direccion: {{Item.direccion}}</p>
           </div>
               <p id="info-room_user">{{Item.precio}} USD $ por mes</p>
              </div>     
            </article>
           <section id="seccion_user">
            <p id="descripcion-room">{{Item.descripcion}} </p>
            <div class="containe_user">
              <img class="imagen" src="../icons/account_circle_black_24dp.svg" /><p class="info_user">Anfitrion: {{Item.user_name}}</p>
            </div>
           
            <div class="containe_user">
              <img class="imagen" src="../icons/email_black_24dp.svg"/><p class="info_user">{{Item.user_email}}</p>
            </div>
            <div class="containe_user">
              <img src="../icons/phone_black_24dp.svg" class="imagen"/><p class="info_user">+{{Item.numero}}</p>
            </div>
           </section>      
    </section>
    <Footer id="footer"/>
   
</template>

<style scoped>

#info-room_user{
  font-size: 1.1rem;
  font-family: 'Fuzzy Bubbles', cursive;
  margin-left: 25px;
  margin-top: 5px;
}

#title-depto{
  place-self: center;
  font-size: 2rem;
  font-family: 'Fuzzy Bubbles', cursive;
}

#title-depto:hover{
  transition: 1s;
  transform: scale(1.05);
}

#descripcion-room{
  font-size: 1.2rem;
  margin-bottom: 20px;
  font-family: 'Fuzzy Bubbles', cursive;
}

#depto{
  margin-top: 10px;
}

.containe_user{
  display: flex;
}

.imagen{
  width: 40px;
}

.info_user{
  font-family: 'Fuzzy Bubbles', cursive;
  place-self: center;
  font-size: 1rem;
}

.info_user:hover{
  transition: 1s;
  transform: scale(1.03);
}

.imagen:hover{
  transition: 1s;
  transform: scale(1.03);
}

button{
  width: 100%;
  height: 40px;
  border: none;
  font-size: 1.3rem;
  color: white;
  background-color: rgb(0, 39, 0);
  grid-column: 1 /3;
  grid-row: 1 / 2;
  font-family: 'Fuzzy Bubbles', cursive;
  border-radius: 20px;

}

button:hover{
  transition: 1s;
  transform: scale(1.05);
}

#section-1{
grid-column: 1 / 5;
grid-row: y2 / y6;
display: grid;
grid-template-columns: minmax(auto,320px) minmax(auto,320px) auto;
grid-template-rows: minmax(auto,50px) minmax(auto,260px) minmax(auto,250px);
gap: 10px;
}


#image-room{
  grid-column: 1 /5;
  grid-row: 2/ 3;
  height: 98%;
  width: 100%;
  border: 2px solid black;
}

#image-room:hover{
  transition: 1s;
  transform: scale(1.02);
}

#menu{
  grid-column: 1 /6;
}



#info-container{
  display: grid;
  grid-row:  3 / 4;
  grid-column: 1/5;
  margin-right: 5px;
  margin-top: 15px;
  grid-template-columns: auto auto;
  grid-template-rows: minmax(auto,150px) auto auto;
  border-radius: 30px;
  
}



#tittle-2{
 font-size: 1.3rem;
  color: black;
  margin-left: 2px;
  grid-column: 1 /5;
  grid-row: 1 /2;
  font-family: 'Fuzzy Bubbles', cursive;
  place-self: center;
}

#tittle-2:hover{
  transition: 1s;
  transform: scale(1.05);
}

#seccion_user{
  grid-column: 1 /5;
  grid-row: 4/5;
  margin-left: 10px;
  font-size: 1.1rem;
  display: flex;
  flex-direction: column;
  gap: 5px;
}

#containe-info{
  display: flex;
  grid-column: 1 /5;
  grid-row: 1/ 3;
  column-gap: 5px;
  flex-direction: column;
  place-content: center;
  margin-left: 20px;
  width: 90%;
  height: 90%;
}

@media screen and (min-width: 650px) and (max-width: 950px){
  #tittle-2{
    font-size: 1.8rem;
  }

  button{
    height: 60px;
    font-size: 1.5rem;
  }
  #title-depto{
    font-size: 2.5rem;
  }
   #info-room_user{
    font-size: 1.5rem;;
   }

   .info_user{
    font-size: 1.5rem;
   }

   #descripcion-room{
    font-size: 1.8rem;
    margin-left: 10px;
   }
   
}

@media screen and (min-width: 951px){
  #tittle-2{
    padding-top: 10px;
    font-size: 2.3rem;
  }

  #seccion_user{
    margin-top: 50px;
    display:grid;
    grid-template-columns: minmax(auto,600px) minmax(auto,500px);
    grid-template-rows: auto auto auto;
    column-gap: 100px;
  }

  button{
    height: 70px;
    font-size: 2rem;
  }
  #title-depto{
    font-size: 3rem;
  }
   #info-room_user{
    margin-left: 115px;
    font-size: 1.5rem;;
   }
   #depto{
    margin-left: 100px;
   }

   .info_user{
    font-size: 1.5rem;
   }

   #descripcion-room{
    font-size: 1.8rem;
    grid-column: 1 /2;
    grid-row: 1 /4;
    margin-left: 10px;
   }
   
   #containe-info{
    margin-left: 70px;
   }

   #image-room{
    height: 500px;
    padding-left: 70px;
    padding-right: 50px;
    border:none;
   }
}

@media screen and (min-width: 1100px){
  #depto{
    margin-left: 200px;
   }
   #info-room_user{
    margin-left: 215px;
   }
}

</style>
