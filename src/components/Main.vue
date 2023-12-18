<script>
import InfoCard from './InfoCard.vue';
import Slider from './Slider.vue';
export default{
    name: 'Main',
    components: {
    InfoCard,
    Slider
}
}
</script>

<template>
    <main>
        <section id="section-1">
        <div id="contain-text">
            <h2>The reason for rooms which makes everything work...</h2>
            <p id="parrafo">Lorem ipsum dolor sit amet, consectetur
                 adipisicing elit. Perferendis dolor fugit 
                 consequatur vero deleniti, blanditiis animi
                  totam culpa porro veritatis. Quis soluta error 
                  qui consectetur voluptate harum praesentium aspernatur
                   repudiandae!</p>
        </div>
        </section>
        <section id="section-2">
            <Slider/>
        </section>
        <section id="section-3">
    <InfoCard/>
        </section>
    </main>
</template>

<style scoped>
main{
    grid-column: 1 / 6;
    grid-row:  3 / 6;
    display: grid;
    grid-template-columns: auto auto;
    grid-template-rows: minmax(auto,300px) auto auto auto;
    margin-bottom: 15px;
}

#section-2{
   height: 500px;
  grid-column: 1 /3;
    grid-row: 2 / 3;
}
/*codigo de seccion1 del main */
#section-1 {
    grid-column: 1 /3;
    grid-row: 1 / 2;
    display: grid;
}

h2{
   margin-left: 10px;
   align-self: center;
   font-size: 2rem;
   font-family: 'Fuzzy Bubbles', cursive;
}

#contain-text{
    display: flex;
    flex-direction: column;
    border-radius: 30px;
}

#parrafo{
 margin-top: 10px;
 margin-left: 10px;
 font-size: 1rem;
 font-family: 'Fuzzy Bubbles', cursive;

}

@media screen and (min-width: 610px) and (max-width: 850px){

    main{   
     grid-template-rows: 250px auto auto auto;
}
    #parrafo{
        margin-left: 50px;
        margin-right: 70px;
    }
}

@media screen and (min-width: 851px) and (max-width: 1500px){


  main{   
     grid-template-rows: 330px auto auto auto;
}
h2{
  margin-left: 90px;
  margin-top: 50px;
  margin-right: 50px;
  font-size: 2.5rem;
}
#parrafo{
    margin-left: 230px;
    margin-right: 230px;
    font-size: 1.5rem;
}
}


/*codigo seccion3 main */

#section-3{
    grid-column: 1 / 3;
    grid-row: 4 / 5;
    display: grid;
    grid-template-rows: minmax(auto,410px) minmax(auto,410px) minmax(auto,410px);
    gap: 10px;
    place-items: center;
}

@media screen and (min-width: 490px) and (max-width: 749px){

#section-3{

grid-column: 1 / 3;
grid-row: 4 / 5;
display: grid;
grid-template-columns: minmax(auto,300px) minmax(auto, 300px) minmax(auto,300px);
place-content: center;
grid-template-rows: none;
gap: 5px;
}
}

@media screen and (min-width: 750px) and (max-width: 1500px){

    #section-3{
  
    grid-column: 1 / 3;
    grid-row: 4 / 5;
    display: grid;
    grid-template-columns: minmax(auto,300px) minmax(auto, 300px) minmax(auto,300px);
    place-content: center;
    grid-template-rows: none;
    gap: 30px;
    
}
}
</style>