<template>
    <div class="person">
     <h2>你好:{{a}}</h2>
     <br>
     <button @click="add">点我加1</button>
    </div>
</template>

<script lang="ts" setup name="Person">
import {ref,onBeforeMount,onBeforeUpdate, onMounted, onUpdated,onBeforeUnmount, onUnmounted} from 'vue'
let a = ref(0)
function add(){
    a.value += 1
}

//创建 默认可省略
console.log('创建')
//挂载
onBeforeMount(()=>console.log('挂载前'))
onMounted(()=>console.log('挂载完毕'))
//更新
onBeforeUpdate(()=>console.log('更新前'))
onUpdated(()=>console.log('更新完毕'))
//卸载
onBeforeUnmount(()=>console.log('卸载前'))
onUnmounted(()=>console.log('卸载完毕'))
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