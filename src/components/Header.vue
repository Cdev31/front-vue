<script>
import Menu from "./Menu.vue";
import Search from "./Search.vue";

export default {
    name: 'Header',
    components: {
    Menu,
    Search
}
}

</script >

<template>
  <header>
    <Menu id="menu-contain"/>
    <Search/>
  </header>
</template>

<style scoped>

*{
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}


header{
    background-image: url('../assets/header-3.jpg');
   background-repeat: no-repeat;
   background-size: cover;
   background-position: center;
    grid-column: 1 / 6;
    grid-row: y1 / y2;
    display: grid;
    grid-template-columns: minmax(auto,300px) minmax(auto,250px) auto auto;
    grid-template-rows: 50px minmax(auto,450px) auto;
    height: 550px;
}

#menu-contain{
    grid-column: 1 / 5;
}
</style>