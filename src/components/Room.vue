<script>
    
    export default{
        name: 'Room',
        data(){
            return{
           
            }
        },
        created(){
            this.room();
        },
        methods:{
          async room(){
            let API_URL = 'http://localhost:3000/api/v1/rooms/user'
            if(!this.$route.query.where){
              API_URL = 'http://localhost:3000/api/v1/rooms/user'
            }else{
              const depto = this.$route.query.where
             API_URL = `http://localhost:3000/api/v1/rooms/user?wherePlace=${depto}`
            }
            const data = await fetch(API_URL);
            let res = await data.json();
            for(let i = 0; res.length > i;i++){
            const room = document.createElement('div');
            room.classList.add('containe-room');
            room.addEventListener('click', ()=>{
                this.$router.push({
                   name: 'rooms',
                    path: '/rooms',
                    params:{
                      room_id: res[i].room_id
                    }});
            });
           
            const containInfo = document.createElement('div');
            containInfo.classList.add('contain-info');

            const h2 = document.createElement('h2');
            const h2text = document.createTextNode(res[i].departamento);
            h2.append(h2text);

            const img = document.createElement('img');
            img.classList.add('imagen-room');
            img.setAttribute('alt', 'imagen-room');
            img.setAttribute('src', res[i].image_url);
           
            const p1 = document.createElement('p');
            const textp1 = document.createTextNode(res[i].direccion);
            p1.classList.add('texto1');
            p1.appendChild(textp1);

            const p2 = document.createElement('p');
            const textp2 = document.createTextNode(`$ ${res[i].precio} USD por mes`);
            p2.appendChild(textp2);

            room.appendChild(img);
            room.appendChild(containInfo);
            containInfo.appendChild(h2);
            containInfo.appendChild(p1);
            containInfo.appendChild(p2);

            const secction = document.getElementById('section-room');
          secction.appendChild(room);
         
        } 
        },
    }
}
</script>

<template>
</template>

<style>


p{
  font-family: 'Fuzzy Bubbles', cursive;
  font-size: 0.95rem;
}
.price{
  font-size: 1rem;    
}

h2{
  font-size: 1.9rem;
  font-family: 'Oswald', sans-serif;
}



.contain-info{
    width: 100%;
    display: flex;
    flex-direction: column;
    border-bottom: 2px solid rgb(0, 51, 0);
    gap: 1px;
}


.containe-room{
    display: flex;
    flex-direction: column;
    width: 100%;
}

.containe-room .imagen-room{
  width: 100%;
  height: 280px;
  border-radius: 20px;
  border: 2px solid rgb(0, 51, 0);
}


.containe-room:hover{
    transition-duration: 1.5s;
    transform: scaleY(1.05);
}

@media screen and (min-width: 620px) and (max-width: 799px) {

 .containe-room{
  width: 300px;
 }
 .containe-room:hover{
    transition-duration: 1.5s;
    transform: scale(1.05);
}
}

@media screen and (min-width: 800px) {

  .containe-room .imagen-room{
    height: 250px;
  }

.containe-room{
    margin-left: 10px;
    width: 300px;
}

.containe-room:hover{
    transition-duration: 1.5s;
    transform: scale(1.05);
}

}


</style>