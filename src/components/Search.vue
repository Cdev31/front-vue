<script>

export default{
    name: 'Search',
    data(){
        return{
            departamento: ''
        }
    },
    methods: {
        async where(){
            const API_URL = 'http://locahost:3000/api/v1/rooms/user?wherePlace';
            const depto = this.departamento.split(' ');
            const departamento = depto.map((palabra)=>{
                return palabra[0].toUpperCase() + palabra.substring(1);
            }).join(' ');
            const data = await fetch(`${API_URL}=${departamento}`)
            const res = await data.json();
            this.$router.push({
                path: '/room',
                query: {
                    where: res[0].departamento
                },
                replace:true
            });
            setTimeout(()=>{
                location.reload();
            },200)
        }
    }
}

</script>

<template>
    <div id="containe-search">
        <form>
            <h2>Room search for you</h2>
            <p>Room busca por ti las mejores
                opciones en apartamentos de 
                alquiler adaptandonos a tus 
                necesidades!
            </p>
           <div id="image"></div>
            <label for="search-input">Where</label>
            <input v-model="departamento" id="search-input" type="search" placeholder="search..." />
            <button  @click="where" type="button" >Search</button>
        </form>
    </div>
</template>

<style scoped>

#containe-search{
    margin-top: 60px;
    margin-left: 20px;
    margin-right: 20px;
    background-color:  rgba(255, 255, 255,.9);
    border-top: 1px solid black;
    border-left: 1px solid black;
    grid-column: 1 / 4;
    grid-row: 2 / 3;
    display: grid;
    border-radius: 20px;
    grid-template-rows: auto auto;
}

button:hover{
    transition-duration: 1s;
    transform: scale(1.05);
}

label{
    color: black;
    font-size: 1.2rem;
    margin-left: 4px;
    font-family: 'Fuzzy Bubbles', cursive;
}

p{
    color: black;
    margin-top: 3px;
    font-size: 1rem;
    margin-left: 8px;
    margin-bottom: 3px;
}

form{
    display: flex;
    flex-direction: column;
    gap: 5px;
    grid-row: 1 / 3;
}



button{
    background-color:  rgb(0, 39, 0);
    color: white;
    height: 50px;
    margin-left: 5px;
    margin-right: 5px;
    margin-top: 5px;
    border: none;
    border-radius: 20px;
    font-size: 1.3rem;
    font-family: 'Fuzzy Bubbles', cursive;
}

#image{
    height: 100px;
    background-image: url('../assets/search-img.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    border: 0.2px solid black;
    background-position: center;
    border-radius: 20px;
}

#image:hover{
    transition-duration: 1s;
    transform: scale(1.05);
}

#search-input::placeholder{
    padding-top: 30px; 
    font-family: 'Fuzzy Bubbles', cursive;
    }

#search-input:hover{
    transition-duration: 1s;
   transform: scale(1.05);
}

button:active{
   transform: scaleY(1.1);
   border: 1px solid black; 
}    

#search-input{
    background-color: rgba(0, 61, 0, .3);
    margin-left: 5px;
    margin-right: 5px;
    border: none;
    border-radius: 15px;
    height: 10%;
    color: white;
    font-size: 1rem;
    border-bottom: 1px solid white;
}

#search-input::placeholder{
    font-size: 1rem;
    padding-left: 3px;
    background-color: rgba(0, 0, 0, 0.05);
    height: 100%;
    width: 100%;
    
    color: black;
}


h2{
    margin-top: 25px;
    place-self: center;
    font-size:1.5rem;
    color: black;
}

h2:hover{
    transition-duration: 1s;
    transform: scale(1.05);
}

@media screen and (min-width: 440px) and (max-width: 890px) {
    
    h2{
        margin-top: 40px;
    }


    button{
        margin-bottom: 20px;
        height: 60px;
    }

    label{
    margin-top: 5px;
    } 

    #search-input{
        margin-top: 5px;
    }

    #image{
        height: 90px;
    }

    #containe-search{
        grid-column: 1 /4;
    }

   
}

@media screen and (min-width: 891px) and (max-width: 1500px){
    #containe-search{
        grid-column: 1 /3;
    }

    h2{
        margin-top: 10px;
        font-size: 1.6rem;
    }

    p{
       margin-left: 20px;
       margin-right: 20px;
        font-size: 1rem;
    }

    #image{
        margin-left: 20px;
       margin-right: 20px;
        height: 110px;
    }

    button{
        margin-left: 20px;
       margin-right: 20px;
        height: 60px;
        font-size: 1.4rem;
    }

    #search-input{
        margin-left: 20px;
       margin-right: 20px;
        height: 50px;
    }

    label{
        margin-left: 25px;
    }

}
</style>