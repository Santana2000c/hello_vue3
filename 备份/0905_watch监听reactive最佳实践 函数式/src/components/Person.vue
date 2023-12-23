<template>
    <!-- watch监听reactive 对象数据类型数据 -->
        <div class="person">
            <h2>姓名:{{person.name}}</h2>
            <h2>年龄:{{person.age}}</h2>
            <h2>车1:{{person.car.c1}}</h2>
            <h2>车2:{{person.car.c2}}</h2>
            <button @click="changName">改名字</button>
            <button @click="changAge">改年龄</button>
            <button @click="changC1">改车1</button>
            <button @click="changC2">改车2</button>
            <button @click="changCar">改车</button>
            
        </div>
    </template>
    
    <script lang="ts" setup name="Person">
    import { reactive, ref,watch} from "vue";
    
        let person = reactive({
            name:'张三',
            age:18,
            car:{
                c1:'宝马',
                c2:'奥迪'
            }
        })
        
    
    function changName (){
        person.name += '~'
    }
    function changAge (){
        person.age += 1
    }
    function changC1 (){
        person.car.c1='大众'
    }
    function changC2 (){
        person.car.c2='雅阁'
    }
    function changCar (){
        person.car={c1:'雅迪',c2:'小鸟'}
    }
    //属性值不是对象类型是，需要写成函数形式，用于监视响应式对象的某个属性
    // watch(()=> person.name,(newval,oldVal)=>{
    //     console.log('属性发生了变化',newval,oldVal)
    // })
    
    //最佳实践，监视对象里属性第一个值最好写成函数式，要关注细枝末节开启deep深度模式
    // watch(()=>person.car,(newval,oldVal)=>{
    //     console.log('属性发生了变化',newval,oldVal)
    // },{deep:true})
    
    //监听数组
    watch([()=>person.name,()=>person.car.c1],(newval,oldVal)=>{
        console.log('属性发生了变化',newval,oldVal)
    },{deep:true})
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