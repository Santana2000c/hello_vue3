import {ref,onMounted} from 'vue'

export default function (){
    let num=ref(0)
    
    function add(){
        num.value+=1
    }
    onMounted(()=>add())
    return {num,add}
}