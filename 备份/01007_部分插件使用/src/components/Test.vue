<template>
    <div>
        <h2>名字为：{{p.name }}</h2>
        <br>
        <h2>年龄为：{{p.age }}</h2>
        <br>
        <button @click="p.name += '~'">修改名字</button>
        <button @click="p.age += 1">修改年龄</button>
        <hr>
        <h2>名字为：{{p1.name }}</h2>
        <br>
        <h2>年龄为：{{p1.age }}</h2>
        <br>
        <button @click="p1.name += '~'">修改名字</button>
        <button @click="p1.age += 1">修改年龄</button>
    </div>
</template>

<script lang="ts" setup name="Test">
import {ref,reactive,toRaw}from 'vue'

const p = reactive({name:'张三',age:20})
const p1 = toRaw(p)

</script>

<style >
button{
    color:blueviolet;
    margin: 0px 50px;
}
</style>