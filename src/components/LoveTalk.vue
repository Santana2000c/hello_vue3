<template>
    <div class="love">
      <button @click="loveClick">点我生成一句土味情话</button>
      <ul>
        <li v-for="i in talkList" :key="i.id">{{i.title}}</li>
      </ul>
    </div>
</template>

<script lang="ts" setup name="Count">
    import {reactive} from 'vue'
    import axios from 'axios';
    import { nanoid} from 'nanoid';
    import {useLoveTalkStore} from '@/store/loveTalk'
    

    let talkStore = useLoveTalkStore()
    const talkList = reactive(talkStore.talkList)

    async function loveClick(){
        let {data:{content:title}} = await axios.get('https://api.uomg.com/api/rand.qinghua?format=json')
        let obj = {id:nanoid(),title}
        talkList.unshift(obj)
    }
</script>

<style>
.love{
    background: orange;
    padding: 10px;
    border-radius: 10px;
    box-shadow: 0 0 10px;
    
}
</style>