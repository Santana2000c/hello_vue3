<template>
    <div class="person">
        <h2>你好:{{num}}</h2>
        <button @click="add">点我加1</button>
        <br>
         
        <img v-for="dog in dogList" :src="dog">
         <br>
        <button @click="addDog">点我生成狗</button>
    </div>
</template>

<script lang="ts" setup name="Person">
    import useSum from '../hooks/useSum'
    import useDog from '../hooks/useDog'

    const {dogList,addDog} = useDog()
    const {num,add} = useSum()
</script>

<style scoped>
.person {
    background-color:rgb(185, 225, 26);
    box-shadow: 0 0 10px;
    border-radius: 10px;
    padding: 20px;
}
button {
    margin: 0 0 5px;
}
li {
    font-size: 20px;
}
img{
    height: 100px;
    margin-right: 10px;
}
</style>