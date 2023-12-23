<template>
    <div class="person">
        <h2>姓名:{{name}}</h2>
        <h2>年龄:{{age}}</h2>
        <hr>
        <button @click="changeName">修改姓名</button>
        <button @click="changeAge">修改年龄</button>
    </div>
</template>

<script lang="ts" setup name="Person">
// toRefs:解构对象中的属性 也会变成响应式的
import { reactive, toRefs } from "vue";
   let person = reactive({
    name:'张三',
    age:18
   }) 

   let {name,age} = toRefs(person)

   function changeName(){
        name.value += '~'
   }

   
   function changeAge(){
        age.value += 1
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