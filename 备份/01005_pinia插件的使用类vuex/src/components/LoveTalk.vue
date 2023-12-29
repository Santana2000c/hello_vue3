<template>
    <div class="love">
      <button @click="loveClick">点我生成一句土味情话</button>
      <ul>
        <li v-for="i in talkList" :key="i.id">{{i.title}}</li>
      </ul>
    </div>
</template>

<script lang="ts" setup name="Count">
    import {useLoveTalkStore} from '../store/loveTalk'
    import {storeToRefs} from 'pinia'

    const talkStore = useLoveTalkStore()
    const {talkList} = storeToRefs(talkStore)

    talkStore.$subscribe((mutate,state)=>{
      console.log('数据发生了变化',mutate,state)
      localStorage.setItem('talkList',JSON.stringify(state.talkList))
    })

    function loveClick(){
      talkStore.createNewTalk()
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