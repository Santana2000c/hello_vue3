import {defineStore} from 'pinia'

export const useLoveTalkStore = defineStore('loveTalk',{
    state(){
        return{
             talkList:[
                {id:'A001',title:'你今天真好看'},
                {id:'A002',title:'明天的你会感谢今天努力拼搏的自己！'}
                ]
        }
    }
})