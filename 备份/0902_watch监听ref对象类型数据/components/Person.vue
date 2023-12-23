<template>
<!-- watch监听ref 对象数据类型数据 -->
    <div class="person">
        <h2>姓名:{{person.name}}</h2>
        <h2>年龄:{{person.age}}</h2>
        <button @click="changeName">点我改名字</button>
        <button @click="changeAll">点我改人</button>
    </div>
</template>

<script lang="ts" setup name="Person">
import { ref,watch} from "vue";

    let person = ref({
        name:'张三',
        age:18
    })
    function changeName(){
        person.value.name += '~'
    }

    function changeAll(){
        person.value = {name:'李四',age:90}
    }

    //ref 定义对象类型数据时，默认监视对象地址值，若要监视对象内部属性变化需开启第三个选项(deep:true) 默认情况修改名字不会监视，修改整个人才会监视到
    //watch 第一个参数是 被监视的数据
    //watch 第二个参数是 监视的回调函数 (new,old) (只有一个参数为new)->按照参数顺序决定
    //watch 第三个参数是 配置对象 可省略
    watch(person,(newVal,oldVal)=>{
        console.log(newVal,oldVal)
    },{deep:false,immediate:true})
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