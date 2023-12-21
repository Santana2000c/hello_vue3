<template>
    <div class="person">
        <h2>姓名：{{name}}</h2>
        <h2>年龄：{{age}}</h2>
        <button @click="changeName">修改名字</button>
        <button @click="changeAge">修改年龄</button>
        <button @click="showTel">查看联系方式</button>
    </div>
</template>

<script lang="ts">
  export default {
    name: 'Person',
    setup(){
        let name = '张三1'
        let age = 18 
        let tel = '6668888'

        function changeName(){
            console.log(name)
            name = 'zhangsan'
            console.log(name)
        }

        function changeAge(){
            age += 1
        }
        
        function showTel(){
            alert(tel)
        }
        return ()=>'哈哈'
    }
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