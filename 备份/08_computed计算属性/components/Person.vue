<template>
    <div class="person">
        姓<input type="text" v-model="fristName">
        <br>
        名<input type="text" v-model="lastName">
        <br>
        全名：<span>{{fullName}}</span>
        <br>
        <button @click="changeName">点我改名</button>

    </div>
</template>

<script lang="ts" setup name="Person">
import { computed, ref } from "vue"

    let fristName = ref('张')
    let lastName = ref('三')

    //计算属性有缓存 不同于方法function,多次调用只会计算一次
    //计算属性是只读的，如要可读写，需添加get&set方法

    // let fullName = computed(()=>{
    //     return fristName.value+'-'+lastName.value
    // })

    let fullName = computed({
        get(){
            return fristName.value+'-'+lastName.value
        },set(val){
            console.log(val)
            const [s1,s2] = val.split('-')
            fristName.value = s1
            lastName.value = s2
        }
    })

    function changeName(){
        fullName.value='李-四'
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