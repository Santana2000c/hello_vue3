<template>
    <div class="person">
        <h1>一辆{{car.brand}},价值{{car.price}}</h1>
        <button @click="change">修改价格</button>
        <br>
        <h2>游戏列表：</h2>
        <ul>
            <li v-for="game in games" :key="game.id" >{{game.name}}</li>
        </ul>
    </div>
</template>

<script lang="ts" setup name="Person">
    import {reactive} from 'vue'

    let car = reactive({brand:'奔驰',price:100})
    let games = [
        {id:'u01',name:'原神01'},
        {id:'u02',name:'原神02'},
        {id:'u03',name:'原神03'}
    ]

    function change(){
        car.price += 10
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