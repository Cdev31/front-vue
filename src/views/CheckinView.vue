<script>
import Menu from '../components/Menu.vue';
import Footer from '../components/Footer.vue';
import CheckIng from '../components/CheckIng.vue';

export default{
    name: 'checkIn',
    components: {
    Menu,
    Footer,
    CheckIng
}
}

</script>

<template>
    <Menu/>
    <main>
      <CheckIng/>
    </main>
    <Footer id="footer"/>
</template>

<style scoped>

nav{
    grid-column: 1 /7;
grid-row: y1 /y2;
}

main{
    grid-column: 1 /7;
    grid-row: y2 / y6;
}


</style>