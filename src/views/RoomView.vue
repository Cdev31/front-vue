<script>
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';
import Rooms from '../components/Room.vue'

export default {
    name:'Room',
    components: {
    Header,
    Footer,
    Rooms
}
}
</script>

<template>
    <Header/>
        <section id="section-room">
         <Rooms/>
       </section>
        <Footer/>
</template>

<style scoped>



#section-room{ 
  margin-top: 10px;
  grid-column: 1 / 6;
  grid-row: y2 / y6;
  display: flex;
  flex-direction: column;
  gap: 10px

}

@media screen and (min-width: 600px) and (max-width: 799px){

    #section-room{
        flex-direction: row;
        flex-wrap: wrap;
        place-content: center;
    }
}


@media screen and (min-width: 800px){
 
    #section-room{
        display: flex;
       flex-direction: row;
       flex-wrap: wrap;
}
    }


</style>