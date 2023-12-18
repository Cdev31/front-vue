<script>
import Menu from '../components/Menu.vue';
import Footer from '../components/Footer.vue';

export default{
    name: "Procfile",
    components: { Menu, Footer },
    data(){
      return {
        User: []
      }
    },
    created(){
      this.users();
    },
    methods:{
      async users(){
        const cookie = document.cookie.slice(6);
        const API_URL = 'http://localhost:3000/api/v1/users';
        const data = await fetch(API_URL, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${cookie}`
          }
        });
        const res = await data.json();
        this.User = res;
       if(this.User.photo){
        const img2 = document.getElementById('imagen-2')
        document.getElementById('imagen-1').style.display='none'
        img2.style.display='block'
       }
      },

      photo(){
         if(document.cookie.indexOf('token=') === 0){
          const img =  document.getElementById('image-profile')
          img.src = this.User.photo
         }
      },
    async addPhoto(){
      const cookie = document.cookie.slice(6);
      const form = document.getElementById('send');
      const formData = new FormData(form);

      const API_URL = 'http://localhost:3000/api/v1/users';
      const data = await fetch(API_URL, {
        method:'PATCH',
        headers: {
          'Authorization': `Bearer ${cookie}`
        },
        body: formData
      })
     await data.json();
     document.getElementById('imagen-1').style.display='none'
    document.getElementById('image-2').style.display='block'
    location.reload();

    },
    async create(){
      const cookie = document.cookie.slice(6);
      const form = document.getElementById('form-room');
      const formData = new FormData(form);

      const API_URL = 'http://localhost:3000/api/v1/rooms';
      const data = await fetch(API_URL, {
        method:'POST',
        headers: {
          'Authorization': `Bearer ${cookie}`
        },
        body: formData
      })
      const res = await data.json();

       if(data.status === 201){
        location.reload();
       }
    },
      previewImage(){
    const content = document.getElementById('preview-image');
    const input = document.getElementById('image-room');
   	const img = document.getElementById('imagen-preview');
    
    if(!input.files.length) return
    content.style.display='flex'
    const file  = input.files[0];
	  const url = URL.createObjectURL(file);
	  img.src = url;
      },
      previewImageUser(){
        const input = document.getElementById('file');
        let img;
       if(this.User.photo !== null){
         img =  document.getElementById('imagen-2')
       }else{
        img =  document.getElementById('imagen-1')
       }
        if(!input.files.length) return
    const file  = input.files[0];
	  const url = URL.createObjectURL(file);
	  img.src = url;
      }
    }
}
</script>

<template>
<Menu/>
<div id="seccion-1" >
     <section id="user-info" >
        <div id="image-user">
         <img class="image-profile"  id="imagen-1" src="../icons/account_circle_black_24dp.svg"/>
         <img class="image-profile"  id="imagen-2"  :src="this.User.photo"/>
         <form id="send">
             <label id="file-add">Añadir foto</label>
             <input id="file"  name="photo" type="file"  @change="previewImageUser()"/>
          </form>
          <button  @click="addPhoto" id="send-file">Enviar</button>
            
        </div>
       <div id="info-user">
        <button id="tittle-1">Informacion de usuario</button>
          <div class="item-info">
            <img class="imagen-info" src="../icons/email_black_24dp.svg" /><p class="text-info">{{this.User.email}}</p>
          </div>
          <div class="item-info">
            <img class="imagen-info" src="../icons/assignment_ind_black_24dp.svg" /><p class="text-info">{{this.User.name}} {{this.User.surname}}</p>
          </div>
          <div class="item-info">
            <img class="imagen-info" src="../icons/phone_black_24dp.svg" /><p class="text-info">{{this.User.number}}</p>
         </div>
        <div id="imagenes-referencia">
          <img class="imagen-referencia" src="../icons/location_on_black_24dp.svg" />
          <img class="imagen-referencia" src="../icons/assignment_ind_black_24dp.svg" />
          <img class="imagen-referencia" src="../icons/home_black_24dp.svg" />
        </div>
        </div>
    </section>
 <div id="section-room">
      <button id="tittle-2">Arrendar un cuarto</button>
      <form id="form-room">
        <div id="button-image">
          <label id="text-image">Añadir imagen</label>
          <input name="imageRoom" id="image-room" type="file" @change="previewImage()"/>
        </div>
           <div id="preview-image">
            <img  id="imagen-preview" src="" />
           </div>
           <label>Titulo:</label>
             <input name="titulo" type="text" placeholder="titulo..."/>
           <label>Departamento:</label>
             <input name="departamento" type="text" placeholder="departamento..."/>
           <label>Direccion:</label>
             <input name="direccion" type="text" placeholder="direccion..."/>
           <label>Descripcion:</label>
             <input name="descripcion" type="text" placeholder="descripcion..."/>
           <label>Precio:</label>
           <input name="precio" id="item-5" type="text" placeholder="precio..."/>
           <button @click="create" id="create-room" type="button">Crear</button>
          </form>
    </div>
</div>
<Footer/>
</template>

<style scoped>

#imagen-2{
  display: none;
}

#send-file{
  background-color: rgb(0, 37, 0);
  border: none;
  margin-top: 2px;
  font-size: 1.1rem;
  padding-top: 3px;
  font-family: 'Fuzzy Bubbles', cursive;
  border-radius: 20px;
  color: white;
  place-self: center;
  width: 145px;
  height: 40px;
  border-bottom: 4px solid black;  
}

#imagenes-referencia{
display: flex;
flex-direction: row;
place-content: center;
gap: 30px;
}

.imagen-referencia{
   width: 20%;
   height: 100%;
}

.imagen-referencia:hover{
  transition: 1.5s;
  transform: translateY(15px);
}


#button-image{
margin-top: 5px;
display: flex;
flex-direction: column;
height: 35px;
place-self: center;
border-radius: 20px;
width: 80%;
font-family: 'Fuzzy Bubbles', cursive;
background-color: rgb(0, 46, 0);
border-bottom: 2px solid black;
}

#button-image:hover{
  transition: 1s;
  transform: scale(1.05);
}

#text-image{
  position: absolute;
  z-index: 1;
  place-self: center;
  padding-top: 8px;
  font-size: 1.1rem;
  color: white;
  cursor: pointer;
}

#text-image:hover{
  z-index: -1;
}

#tex-image:active{
  z-index:-1;
}

#preview-image{
  display: none;
   place-content: center;
}

#image-room{
  opacity: 0;
  border: none;
}

#imagen-preview{
  width: 80%;
  height: 130px;
}

#file{
  height: 100%;
  width: 90%;
  opacity: 0;
  cursor: pointer;
}


#file-add{
  position: absolute;
  z-index: 1;
  cursor:pointer;
  color: white;
  font-size: 1rem;
 
  padding-left: 10px;
  padding-top: 15px;
}

#file-add:active{
  z-index: -1;
}

#seccion-1{
  display: grid;
  grid-template-columns: auto auto;
  grid-template-rows: auto auto ;
  gap: 50px;
}

#user-info{
  grid-column: 1 /3;
  grid-row: 1 /2;
  display: flex;
  flex-direction: column;
  gap:30px
}

#image-user{
  display: flex;
  flex-direction: column;
}

.image-profile{
  width: 50%;
  height: 160px;
  margin-top: 10px;
  margin-bottom: 5px;
  border-radius: 100%;
  place-self: center;
}

.text-info{
  font-size: 0.9rem;
  font-family: 'Fuzzy Bubbles', cursive;
  place-self: center;
}

#info-user{
  display: flex;
  flex-direction: column;
  gap: 2px;
}

#review{
  margin-top: 5px;
  font-family: 'Fuzzy Bubbles', cursive;
}

#tittle-1{
  border: none;
  border-radius: 30px;
  height: 35px;
  font-size: 1.1rem;
  font-family: 'Fuzzy Bubbles', cursive;
  background-color: rgb(0, 46, 0);
  color: white;
  margin-bottom: 10px;
}

#send{
  border: none;
  border-radius: 20px;
  background-color: rgb(0, 51, 0);
  color:white;
  height: 50px;
  cursor: pointer;
  font-family: 'Fuzzy Bubbles', cursive;
  place-self: center;
  display: flex;
  flex-direction: column;
  width: 150px;
  border-bottom: 5px solid black;
}

#send:active{
  transition: 1s;
  transform: scale(1.2);
}

#send:hover{
  transition: 1s;
  transform: scale(1.05);
}


.item-info{
  display: flex;
}

#section-room{
  grid-column: 1 /3;
  grid-row: 2 / 3;
  display: flex;
  flex-direction: column;
}

form{
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-left: 10px;
  margin-right: 10px;
  border-radius: 20px;
}

#tittle-2{
  border: none;
  border-radius: 20px;
  color: white;
  font-size: 1.2rem;
  font-family: 'Fuzzy Bubbles', cursive;
  background-color: rgb(0, 56, 0);
  height: 33px;
  width: 250px;
  place-self: center;
}

input{
  height: 30px;
  border-radius: 20px;
  border: 1px solid black;
  font-family: 'Fuzzy Bubbles', cursive;
  margin-left: 15px;
  width: 95%;
  padding-top: 3px;
  border-bottom: 3px solid black;
  color: black;
  font-size: 1.04rem;
  padding-left: 10px;

}

label{
  font-family: 'Fuzzy Bubbles', cursive;
  color: black;
  margin-left: 18px;

}

#item-5{
  margin-bottom: 10px;
}

input::placeholder{
  padding-left: 5px;
}

#create-room{
  height: 35px;
 border-radius: 20px;
 background-color: rgb(0, 44, 0);
  border: 1px solid black;
  font-size: 1.4rem;
  color: white;
  font-family: 'Fuzzy Bubbles', cursive;
}

@media screen and (min-width: 745px){
  #user-info{
    flex-direction: row;
    grid-column: 1 /3;
    grid-row: 1 /2;
    gap: 50px;
    place-content: center;
  }
  .image-profile{
    height: 60%;
    margin-left: 10px;
    width: 300px;
  }

  #section-room{
    grid-column: 1/3;
    grid-row: 2 / 3;
    
  }
 form{
  margin-left: 250px;
  margin-right: 230px;
  gap: 5px;
 }
 input{
  height: 40px;
  font-size: 1.5rem;
 }
 label{
  font-size: 1.5rem;
 }
  #info-user{
   margin-top: 50px;
  }

  .imagen-info{
    height: 50px;
  }
  .text-info{
    font-size: 1.6rem;
  }

  #create-room{
    height: 60px;
    font-size: 2rem;
  }

  #tittle-1{
    font-size: 2rem;
  }

  #button-image{
  width: 50%;
  height: 40px;
  }

  #text-image{
    font-size: 1.5rem;
  }

  #imagen-preview{
    height: 220px;
  }

  #tittle-2{
    font-size: 2rem;
    width: 90%;
    height: 50px;
  }

  #file-add{
    padding-left: 1px;
    font-size: 1.2rem;
  }
  #send-file{
    margin-left: 20px;
  }
}


</style>