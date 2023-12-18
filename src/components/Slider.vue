<script>

</script>

<template>
     <div class="slider">
        <ul>
            <li>
                <img src="../assets/1.jpg"  alt="">
                
            </li>
            <li>
                <img src="../assets/2.jpg" alt="">
            </li>

            <li>
                <img src="../assets/3.jpg" alt="">
            </li>
            
        </ul>
    </div>
</template>

<style scoped>
.slider{
    width: 100%;
    height: 100%;
    overflow:hidden;
}
.slider ul{
    display:flex;
    animation:cambio 15s infinite alternate linear;
    width: 400%;

}
.slider li{
    width:100%;
    list-style:none;
}

.slider img{
    width: 100%;
    height:140%
} 

@media screen and (min-width: 500px) and (max-width: 700px){
    .slider img{
        height: 100%;
    }
}


@media screen and (min-width: 701px) and (max-width: 1000px){
    .slider img{
        height: 80%;
    }
}

@media screen and (min-width: 1001px) and (max-width: 1400px){
    .slider img{
        height: 45%;
    }
}

@keyframes cambio{
    0%{margin-left:0;}
    40%{margin-left:0;}

    25%{margin-left:-100%;}
    80%{margin-left:-100%;}

    60%{margin-left:-200%;}
    80%{margin-left:-200%;}
    
    75%{margin-left:-300%}
    100%{margin-left:-300%}

}

</style>