import {defineStore} from 'pinia'

export const useConutStore = defineStore('count',{
    actions:{
        increament(value:number){
            console.log('被调用了',value)
            if(this.num<10){
                this.num+=value 
            }
            //this 是当前store
        },
        unIncreament(value:any){
            if(this.num-value>=0){
                this.num-=value
            }else{
                alert('当前已是最小值，无法再减')
            }
        }
    },
    state(){
        return{
            num:1,
            n:1,
            addr:'北京'
        }
    },
    getters:{
        maxNum(num){
            return this.num*10
        }
    }
})