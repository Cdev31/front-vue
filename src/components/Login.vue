<script>

export default{
    name: 'Login',
    data(){
      
        return {
            email: '',
            password: ''
        }
    },
    methods:{
        async Login(){
         const API_URL = 'http://localhost:3000/api/v1/login';
         const data = await fetch(API_URL,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: this.email,
                password: this.password
            })
         });

         const res = await data.json();
         const token = res.token;
        if(data.status !== 401){
            document.cookie=`token=${token}`
             if(document.cookie.indexOf('token=' === 0)){
              this.$router.push('/');
           }   
        }else{
          document.getElementById('verifi-user').style.display='block';
        }
        }
    }
}

</script>

<template> 
        <div id="containe">
            <img id="imagen-containe" src="../assets/header-4.jpg" alt="">
        <form id="containe-login">
            <h2>Inicia sesion con Rooms</h2>
            <label>Correo electronico:</label>
            <input class="input-item" v-model="this.email" type="email" />
            <label>contraseña:</label>
            <input class="input-item" v-model="this.password" type="password"/>
            <label id="verifi-user">Su usuario no existe</label>
            <button id="butt" @click="Login" type="button">Iniciar sesion</button>
        </form>
        </div>
</template>

<style scoped>

#verifi-user{
    display: none;
    font-family: 'Fuzzy Bubbles', cursive;
    color: brown;
}

#containe{
    display: grid;
    grid-template-columns: auto auto  ;
    grid-template-rows: minmax(auto,350px) minmax(auto,250px) minmax(auto,200px);
}

#imagen-containe{
    grid-column: 1 /3;
    grid-row: 2 /4;
    width: 100%;
    height: 100%;
}

#containe-login{
    margin-top: 10px;
    grid-column: 1 /3;
    grid-row: 1 /2;
    display: flex;
    flex-direction: column;
    gap: 5px;
    place-content: center;
}

h2{
    font-family: 'Fuzzy Bubbles', cursive;
    font-size: 1.6rem;
    margin-bottom: 10px;
    margin-left: 5px;
    place-self: center;
    margin-right: 5px;
}

h2:hover{
    transition: 1s;
    transform: scale(1.02);
}

.input-item{
    height:30px;
    border: none;
    border-radius: 20px;
    border-bottom: 3px solid black;
    margin-left: 5px;
    margin-right: 5px;
    font-family: 'Fuzzy Bubbles', cursive;
    font-size: 1.1rem;
    padding-left: 5px;
}

.input-item:hover{
    transition: 1s;
    transform: scale(1.02);
}

label{
    margin-left: 5px;
    margin-right: 5px;
    font-size: 1.2rem;
    font-family: 'Fuzzy Bubbles', cursive;
}

#butt{
    height: 50px;
    border-radius: 20px;
    border: none;
    border-bottom: 6px solid black;
    background-color: rgb(0, 34, 0);
    color: white;
    margin-top: 20px;
    font-size: 1.2rem;
    font-family: 'Fuzzy Bubbles', cursive;
    padding-top: 5px;
    margin-left: 5px;
    margin-right: 5px;
}

#butt:hover{
    transition: 1s;
    transform: scale(1.02);
}



@media screen and (min-width: 700px) and (max-width: 900px){

  #containe-login{
     margin-left: 70px;
     margin-right: 70px;
  }

  h2{
    place-self: center;
    font-size: 2.3rem;
  }

  .input-item{
    height: 35px;
    font-size: 1.3rem;
  }

  #butt{
    height: 55px;
    font-size: 1.6rem;
  }
}

@media screen and (min-width: 901px){

    h2{
    place-self: center;
    font-size: 2.3rem;
  }
    #imagen-containe{
        grid-column: 1 / 2;
        grid-row: 1 /4;
    }

    #containe-login{
        grid-column: 2 / 3;
        grid-row: 1 /4;
        margin-left: 5px;
        margin-right: 5px;
    }

    #butt{
        height: 65px;
        font-size: 1.8rem;
    }
    label{
        font-size: 1.4rem;
    }

    .input-item{
        height: 45px;
        padding-left: 10px;
        font-size: 1.6rem;
    }
}

</style>