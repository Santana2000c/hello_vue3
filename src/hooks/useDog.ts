import {reactive,onMounted} from 'vue'
import axios from 'axios'

export default function  (){
   let dogList = reactive(['https://images.dog.ceo/breeds/pembroke/n02113023_591.jpg'])

    async function addDog(){
        try {
            let res = await axios.get('https://dog.ceo/api/breed/pembroke/images/random')
            dogList.push(res.data.message)
        } catch (error) {
            alert(error+'网络异常，请求失败！')
        }
        
    }

    onMounted(()=>addDog())
    return {dogList,addDog}
}