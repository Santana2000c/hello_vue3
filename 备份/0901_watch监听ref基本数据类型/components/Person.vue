<template>
<!-- watch监听ref 基本数据类型对象 -->
    <div class="person">
    <h2>sum的值为：{{sum}}</h2>
    <br>
    <button @click="add">点我加1</button>
    </div>
</template>

<script lang="ts" setup name="Person">
    import {ref,watch} from 'vue'
    let sum = ref(0)

    function add(){
        return sum.value += 1
    }

    const stopWatch = watch(sum,(newVal,oldVal)=>{
        console.log('sum变化了')
        console.log(newVal)
        console.log(oldVal)
        if(newVal>10){
            stopWatch()
        }
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