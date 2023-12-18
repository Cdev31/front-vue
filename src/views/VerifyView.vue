<script>
import Footer from "../components/Footer.vue";
import Menu from "../components/Menu.vue";

export default{
    name: 'Verify',
    components:{
    Footer,
    Menu
},
created(){
    this.createUser();
},
methods: {
    async createUser(){
        const token = this.$route.query.token;
        const API_URL = 'http://localhost:3000/api/v1/register/verify';
        const data = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        });
        const res = await data.json();
        if(res.status !==200){
         document.getElementById('cuadro-verificacion').style.display='flex';
            const h2 = document.getElementById('title');
            const textTittle = document.createTextNode('Ha habido un problema al crear su usuario');
            h2.appendChild(textTittle);
         
            const p = document.getElementById('text');
            const textP = document.createTextNode('Por favor vuelva a la pagina de registro y vuelva a registrarse');
            p.appendChild(textP);
            document.getElementById('cuadro-verificacion').style.display='flex';
        const imagen = document.getElementById('imagen-2').style.display ='block'
            
        }else if(res.status === 200){
            const containeSectionVerify = document.getElementById('cuadro-verificacion');
            const h2 = document.getElementById('title');
            const textTittle = document.createTextNode('Se ha creado perfectamente el usuario');
            h2.appendChild(textTittle);

            const p = document.getElementById('text');
            const textP = document.createTextNode('Inicie sesion para poder tener todos los beneficios de ser un usuario de Room');
            p.appendChild(textP);
            const imagen = document.getElementById('imagen-1').style.display ='block'
            containeSectionVerify.style.display='flex'
            
        }
    }
}
}

</script>

<template>
    <Menu/>
    <section id="seccion-verify">
        <div id="cuadro-verificacion">
            <img class="imagen" id="imagen-1" src="../icons/verified_black_24dp.svg" alt="image"/>
            <img class="imagen" id="imagen-2" src="../icons/highlight_off_black_24dp.svg">
            <h2 id="title"></h2>   
            <p id="text"></p>
      </div>
    </section>
    <Footer/>
</template>

<style scoped>


#title{
    margin-top: 10px;
    color: black;
    font-size: 1.2rem;
    margin-left: 10px;
    margin-right: 10px;
    border-bottom: 2px solid black;
    font-family: 'Fuzzy Bubbles', cursive;
}

#text{
    margin-top: 15px;
    margin-left: 20px;
    margin-right: 20px;
    color: black;
    font-size: 1rem;
    margin-bottom: 30px;
    font-family: 'Fuzzy Bubbles', cursive;

}

#seccion-verify{
   display: grid;
   border: 2px solid black;
   grid-template-columns: minmax(auto,350px) auto minmax(auto,350px);
   grid-template-rows: minmax(auto,100px) minmax(auto,400px) minmax(auto,100px);
   margin-bottom: 10px;
}

#cuadro-verificacion{
    grid-column: 2 / 3;
    grid-row:  2 /3;
    display: none;
    border: 5px solid black;
    flex-direction: column;
    place-items: center;
    background-color: white;
    border-radius: 30px;
    gap: 10px;
    margin-bottom: 15px; 
}

.imagen{
    width: 70%;
    height: 50%;
    display: none;
    border-bottom-left-radius: 30px;
    border-bottom-right-radius: 30px;
}

@media screen and (min-width: 700px)and (max-width: 1000px){
  #text{
    font-size: 1.3rem;
    margin-bottom: 35px;
  }
  #title{
    font-size: 1.5rem;
  }
}

@media screen and (min-width: 1001px) and (max-width: 1180px){
  #text{
    font-size: 1.4rem;
    margin-bottom: 30px;
  }
  #title{margin-top: 1px;
    font-size: 1.6rem;
  }
}

@media screen and (min-width: 1181px){
    #text{
    font-size: 1.5rem;
    margin-bottom: 30px;
  
  }
  #title{
    margin-top: 20px;
    font-size: 1.7rem;
  }
}

</style>