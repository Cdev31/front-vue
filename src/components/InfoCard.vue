<template>
    <div class="cards">
        <img src="../icons/home_black_24dp.svg"/>
        <h2>MISION</h2>
        <p>Tiene como mision poner en alquiler las mejores empresas  
            en el area de bienes raices en El Salvador, siendo un ejemplo al nivel latinoamericano.
     
        </p>
    </div>
    <div class="cards">
        <img src="../icons/assignment_ind_black_24dp.svg"/>
        <h2>VISION</h2>
        <p id="p-2">
        La vision de Room es posicionarse 
         como una de las mejores empresas
         en el area de bienes raices,solucionando
         el problema de alquiler,a personas
         que lo sufren.
        </p>
    </div>
    <div class="cards">
        <img src="../icons/location_on_black_24dp.svg"/>
        <h2>CONCEPTO</h2>
        <p id="p-3">
            Alquilar las mejores propiedades para la comodidad de el usuario
            brindandoles una experiencia unica en cuanto 
            a comodidad y estabilidad de su hogar.
        </p>
    </div>
</template>

<style scoped>
.cards{
 width: 90%;
 height: 85%;
 display: flex;
 flex-direction: column;
 place-items: center;
}



img{
    height: 50%;
    width: 100%;
}
h2{
    margin-top: 5px;
}
p{
  font-size: 1.5rem;
  border-bottom: 2px solid black;
}
@media screen and (min-width: 490px) and (max-width: 749px){

   p{
    font-size: 1rem;
   }
  
}
</style>