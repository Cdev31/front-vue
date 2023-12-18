<script setup>
</script>

<template>
  <router-view></router-view>
</template>

<style scoped>
#app{
  display: grid;
  grid-template-columns:  auto  auto  auto  auto  ;
  grid-template-rows: [y1] minmax(auto,350px) [y2]  minmax(auto,20px) [y3]  auto [y4]  auto [y5] auto [y6] auto [y7] ;
}

</style>

<style>
*{
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}
</style>
