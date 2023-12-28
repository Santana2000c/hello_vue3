import {defineStore} from 'pinia'

export const useConutStore = defineStore('count',{
    state(){
        return{
            num:1,
            n:1
        }
    }
})