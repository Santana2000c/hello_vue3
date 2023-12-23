<template>
    <div class="person">
        <h1>一辆{{car.brand}},价值{{car.price}}</h1>
        <button @click="change">修改价格</button>
        <button @click="changeCar">修改汽车</button>
        <br>
        <h2>游戏列表：</h2>
        <ul>
            <li v-for="game in games" :key="game.id" >{{game.name}}</li>
        </ul>
        <hr>
        <h2>sum值为{{sum}}</h2><button @click="addSum">点我＋1</button>
    </div>
</template>

<script lang="ts" setup name="Person">
    import {reactive} from 'vue'
    import {ref} from 'vue'

    let car = ref({brand:'奔驰',price:100})
    let sum = ref(0)
    let games = [
        {id:'u01',name:'原神01'},
        {id:'u02',name:'原神02'},
        {id:'u03',name:'原神03'}
    ]

    function change(){
        car.value.price += 10
    }
    function addSum(){
        sum.value += 1
    }
    function changeCar(){
        Object.assign(car.value,{brand:'大众',price:1})
    }
</script>

<style scoped>
.person {
    background-color:rgb(185, 225, 26);
    box-shadow: 0 0 10px;
    border-radius: 10px;
    padding: 20px;
}
button {
    margin: 0 5px;
}
</style>