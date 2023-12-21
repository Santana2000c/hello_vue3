<template>
    <div class="person">
        <h2>姓名：{{name}}</h2>
        <h2>年龄：{{age}}</h2>
        <button @click="changeName">修改名字</button>
        <button @click="changeAge">修改年龄</button>
        <button @click="showTel">查看联系方式</button>
    </div>
</template>

<script lang="ts" setup name="Person">
    import {ref} from 'vue'
    let name = ref('张三1')
    let age = ref(18) 
    let tel = '6668888'

    console.log(1,name)
    console.log(2,tel)
    function changeName(){
        name.value = 'zhangsan'
    }

    function changeAge(){
        age.value += 1
    }
    
    function showTel(){
        alert(tel)
    }
</script>
<style>
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