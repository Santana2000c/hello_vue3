<template>
    <div class="count">
        <h2>当前计数结果是：{{num}}</h2>
        <select v-model.number="n">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
        </select>
        <button @click="add">加</button>
        <button @click="sub">减</button>
    </div>
</template>

<script lang="ts" setup name="Count">
    import {ref} from 'vue'
    import {useConutStore} from '@/store/count'

    const countStore = useConutStore();


    const num = ref(countStore.num)
    const n = ref(countStore.n)

    function add(){
        console.log(num.value)
        num.value += n.value
    }
    
    function sub(){
        num.value -= n.value
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