<script>
import Footer from '../components/Footer.vue'
export default{
    name: 'not_found',
    components: {
     Footer
    }
}

</script>

<template>
  <div class="container">
            <h2 class="num">404</h2>
            <h2 class="text1">PAGE NOT FOUND</h2>
            <img class="error" src="../assets/tototo.gif" alt="image">
            <h2 class="text2">No se puede conectar la pagina que solicito</h2>
            <router-link to="/" class="btn" href="https://www.youtube.com/watch?v=pgZF5OwaOmU">VOLVER </router-link>
        </div>
</template>

<style scoped>

*{
    box-sizing: border-box;
    border: 0;
    margin: 0;
}

:root{
    ---fondo: #f7f7f7;
    ---text1: #5bb4d1;
    ---text2: #8ccedf;

}
.container{
    background: var(---fondo);
    padding: 2rem;
    width: 100%;
    min-height: 100vh;
    display:flex;
    gap: .5rem;
    flex-direction:column;
    align-items:center;
    justify-content:center;


}
.error{
    width:25 rem ;
    background-position:center ;
    background-size: cover;
}
.text1{
    font-family: 'Fuzzy Bubbles', cursive;
    font-size:2rem;
    color:var(---text1);
    text-align:center;
    font-weight:100;
} 
.tex1{
    animation: animar .5s linear infinite;

}
@keyframes animar{
    0%,70%,90% {opacity:0;}
    10%{opacity:.1;}
    50%{opacity:.5;}
    80%{opacity:.3;}
    100%{opacity:.6;}

}
.text2{
    font-size: 1.5rem;
    font-family: 'Fuzzy Bubbles', cursive; 
    font-weight: 200; 
}
.num{
    color:var(---text2);
    font-weight:bold;
    font-size: 3.1rem;
}
.btn{
    padding: 2rem 3rem;
    margin-top:1rem;
    font-size:2rem;
    background: var(---text1);
    border-radius:.3rem;
    color: var (---fondo);
    cursor:pointer;
    text-decoration:none;
    font-family: 'Fuzzy Bubbles', cursive;
    overflow: hidden;
    transition: all .25s;
}
.btn:hover{
    box-shadow: inset 9.5em 0 0 0 var(---text2);
}
</style>