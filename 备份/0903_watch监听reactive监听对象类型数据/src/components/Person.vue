<template>
<!-- watch监听reactive 对象数据类型数据 -->
    <div class="person">
        <h2>姓名:{{person.name}}</h2>
        <h2>年龄:{{person.age}}</h2>
        <button @click="changeName">点我改名字</button>
        <button @click="changeAll">点我改人</button>
    </div>
</template>

<script lang="ts" setup name="Person">
import { reactive, ref,watch} from "vue";

    let person = reactive({
        name:'张三',
        age:18
    })
    function changeName(){
        person.name += '~'
    }

    //reactive不能直接改对象 除非用object.assign 但是只改属性不改地址 不同于ref改地址
    function changeAll(){
        Object.assign(person,{name:'李四',age:90})
    }


    //监视reactive对象类型数据 默认开启深度监视（隐式创建深层监听 不可关闭）
    watch(person,(newval,oldval)=>{
        console.log('person变化了',newval,oldval)

    })

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