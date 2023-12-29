<template>
    <div class="count">
        <h2>当前计数结果是：{{num}} 地址是{{addr }}</h2>
        <select v-model="n">
            <option :value="1">1</option>
            <option :value="2">2</option>
            <option :value="3">3</option>
        </select>
        <button @click="add">加</button>
        <button @click="sub">减</button>
    </div>
</template>

<script lang="ts" setup name="Count">
    import {ref} from 'vue'
    import {useConutStore} from '@/store/count'
    import {storeToRefs} from 'pinia'

    const countStore = useConutStore();
    //解构后使用storeToRefs只把数据转为响应式 不转换方法
    const {num,addr,n} = storeToRefs(countStore)


    function add(){
        //调用action 复用性提高
        countStore.increament(n.value)
    }
    
    function sub(){
        //countStore.num-=1
        countStore.unIncreament(n.value)
    }
</script>
<style>
.count{
    background: skyblue;
    padding: 10px;
    border-radius: 10px;
    box-shadow: 0 0 10px;
    margin-bottom: 40px;
}
.button,select{
    margin: 0 15px;
    height: 20px;
}
</style>@/store/count