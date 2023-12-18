<script>

</script>

<template>
    <footer>
        <p> © Room 2006 .inc  </p>
        <p>.Privacidad</p>
        <p>.Terminos</p>
    </footer>
</template>

<style scoped>

p{
    font-family: 'Fuzzy Bubbles', cursive;
    color: white;
    font-size: 1rem;
}
footer{
    display: flex;
    gap: 20px;
    margin-top: 10px;
    background-color:rgb(1, 65, 1);
    opacity: 0.8;
    grid-column: 1 / 7;
    grid-row: y6 / y7;
    width: 100%;
}

@media screen and (min-width: 500px) and (max-width: 800px){

    p{
        font-size: 1.3rem;
    }
}

@media screen and (min-width: 801px){
    p{
        font-size: 2rem;
    }

    footer{
        gap: 60px;
    }
}

</style>