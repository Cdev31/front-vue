<script>

export default{
    name: 'CheckIng',
    data(){
        return {
            name: '',
            surname: '',
            number: '',
            email: '',
            password: ''
        }
    },
    methods: {
        async check(){
            const API_URL = 'http://localhost:3000/api/v1/register';
            const data = await fetch(API_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                   name: this.name,
                   surname: this.surname,
                   number: this.number,
                   email: this.email,
                   password: this.password
                })
            });
            const res = await data.json();
            if(data.status == 200){
            const contain = document.getElementById('verificacion')
            const p = document.getElementById('message-verify');
            const text = document.createTextNode(`Verificacion enviada a: ${res.mesage}`);
            p.appendChild(text);

         contain.style.display='grid';
            }

            if(data.status === 400){
                const error = document.getElementById('error');
                const text = document.createTextNode('Ha habido un error en la validacion de datos')
                error.appendChild(text);
               setTimeout(()=>{
                location.reload();  
               },3000)  
            }

            
        },
        desaparece(){
            const contain= document.getElementById('verificacion');
            contain.style.display='none';
            const p = document.getElementById('message-verify');
            p.textContent = '';
            location.reload();
        }
    }
}

</script>

<template>
    <div  id="form-container">
        <img src="../assets/header-4.jpg" alt="">
        <form>
            <h2>Registrate con Rooms</h2>
            <label>Nombres:</label>
            <input id="nombres" class="input-item" v-model="this.name" type="text" />
            <label>Apellidos:</label>
            <input id="apellidos" class="input-item" v-model="this.surname" type="text"/>
            <label>Numero:</label>
            <input  id="numero" class="input-item" v-model="this.number" type="text" />
            <label>Correo electronico:</label>
            <input  id="email" class="input-item" v-model="this.email" type="email" />
            <label>contraseña:</label>
            <input id="pass" class="input-item" v-model="this.password" type="password"/>
             <label id="error"></label>
            <button id="butt"  @click="check" type="button">Registrarse</button>
        </form>
    <div @click="desaparece" id="verificacion">
        <img id="imagen-verificacion" src="../icons/verified_black_24dp.svg" />
       <p id="message-verify"></p>
       <span>Por favor abra su correo electonico y haga click en el link de verificacion de usuario</span>
    </div>
    </div>
    
    

</template>

<style scoped>
#error {
    font-size: 0.7rem;
    color: brown;
}


label{
    font-family: 'Fuzzy Bubbles', cursive;
}

span{
    font-family: 'Fuzzy Bubbles', cursive;
     font-size: 1rem;
     padding-top: 5px;
     margin-top: 5px;
     padding-left: 1px;
     padding-top: 18px;
     padding-right: 1px;
     grid-row: 3 /4;
     grid-column: 1 /3;
     background-color: rgb(0, 56, 0);
     border-bottom: 1px solid black;
     border-bottom-left-radius: 16px;
     border-bottom-right-radius: 16px;
     height: 100px;
    color: white;
}
#message-verify{
    margin-top: 20px;
    font-size: 1.1rem;
    color: black;
    place-self: center;
    margin-left: 5px;
    grid-column: 1 /3;
    grid-row: 2 /3;
    font-family: 'Fuzzy Bubbles', cursive;
    margin-right: 5px;
    border-bottom: 3px solid black;
}

#imagen-verificacion{
    margin-top: 37px;
    height: 100%;
    width: 50%;
    place-self: center;
    grid-row: 1 /2;
    grid-column: 1 /3;
}

#verificacion{
    height: 300px;
    width: 300px;
    background-color: white;
    border-radius: 23px;
    position:absolute;
    z-index: 1;
    margin-left: 40px;
    margin-right: 200px;
    margin-top: 130px;
    margin-bottom: 30px;
    display: none;
    grid-template-columns: minmax(auto,145px) minmax(auto,145px);
    grid-template-rows: minmax(auto,120px) minmax(auto,180px) minmax(auto,200px);
    border: 5px solid black;
    padding-bottom: 30px;
}

input{
    height: 30px;
  border: none;
  border-bottom: 2px solid black;
  background-color:rgb(0, 53, 0,.1) ;
  font-size: 1.3rem;
  font-family: 'Fuzzy Bubbles', cursive;
  padding-top: 5px;
  border-radius: 10px;
  padding-left: 5px;
}
   
input:hover{
    transition: 1s;
    transform: scale(1.04);
}

button:hover{
    transition: 1s;
    transform: scale(1.04);
}

h2{
    margin-top: 10px;
    margin-bottom: 5px;
    font-family: 'Fuzzy Bubbles', cursive;
    place-self: center;
    font-size: 1.5rem;
}
h2:hover{
    transition: 1s;
    transform: scale(1.04);
}

form{
    display: flex;
    flex-direction: column;
    grid-column: 1 /4;
    place-content: center;
    margin-left: 50px;
    margin-top: 70px;
    margin-right: 50px;
    gap: 2px;
}

button{
    background-color: rgb(0, 53, 0);
    height: 60px;
    margin-bottom: 40px;
    color: rgb(0, 22, 0);
    border-radius: 10px;
    border: none;
    color: white;
    margin-top: 10px;
    font-family: 'Fuzzy Bubbles', cursive;
    font-size: 1.5rem;
}

#butt:active{
    transform: scaley(1.03);
    border: 1px solid black;
}

#form-container{
    height: 700px;
    grid-column: 2/ 4;
    grid-row: 1 / 4;
    display: grid;
    grid-template-columns: auto auto auto ;
    grid-template-rows:   minmax(auto,320px) minmax(auto,300px) minmax(auto,80px);
}

img{
    margin-top: 50px;
    width:100%;
    height: 88%;
    grid-column: 1 /4;
    grid-row: 2 /4;
}


@media screen and (min-width: 530px) and (max-width:799px ){
    #verificacion{
        margin-top: 100px;
        height: 300px;
      width: 470px;
      grid-template-columns: auto auto ;
      grid-template-rows: minmax(auto,108px) minmax(auto,135px) minmax(auto,100px);
      margin-left: 100px;
      margin-right: 10px;
    }
    #message-verify{
        font-size: 1.4rem;
    }
    span{
        font-size: 1.3rem;
    }
}


@media screen and (min-width: 800px){
 
    img{
    margin-top: 1px;
    width:100%;
    height: 100%;
    grid-column: 1 /2;
    grid-row: 1 /4;
}

form{
    grid-column: 2/4;
    grid-row: 1 /4;
}

button{
    margin-top: 15px;
}

#verificacion{
    margin-left: 350px;
        margin-top: 100px;
        margin-right: 30px;
        height: 400px;
         width: 500px;
        grid-template-columns: auto auto;
        grid-template-rows: minmax(auto,170px) minmax(auto,160px) minmax(auto,160px); 
    }
    #message-verify{
        font-size: 2rem;
        margin-bottom: 5px;
    }
    span{
        font-size: 1.4rem;
        height: 108px;
        padding-left: 10px;
    }
h2{
    font-size: 2rem;
}


}


</style>