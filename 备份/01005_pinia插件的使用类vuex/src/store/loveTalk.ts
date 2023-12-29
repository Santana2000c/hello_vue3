import {defineStore} from 'pinia'
import axios from 'axios'
import {nanoid} from 'nanoid'
import {reactive} from 'vue'

// 选项式
/* export const useLoveTalkStore = defineStore('loveTalk',{
    actions:{
        async createNewTalk(){
                let {data:{content:title}} = await axios.get('https://api.uomg.com/api/rand.qinghua?format=json')
                let obj = {id:nanoid(),title}
                this.talkList.unshift(obj)
        }
    },
    state(){
        return{
             talkList:JSON.parse(localStorage.getItem('talkList') as string )||[]
        }
    }
}) */

// 组合式
export const useLoveTalkStore = defineStore('loveTalk',()=>{
    const talkList = reactive(JSON.parse(localStorage.getItem('talkList') as string )||[])
     async function createNewTalk(){
        let {data:{content:title}} = await axios.get('https://api.uomg.com/api/rand.qinghua?format=json')
        let obj = {id:nanoid(),title}
        talkList.unshift(obj)
     }
     return {createNewTalk,talkList}
})