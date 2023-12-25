<template>
    <div class="person">
       <!-- {{x.a}} -->
       <ul>
        <li v-for="p in list" :key="p.id">{{p.name}}--{{p.id}}</li>
        <!-- <li v-for="num in mind">{{num}}</li> -->
       </ul>
    </div>
</template>

<script lang="ts" setup name="Person">
import {withDefaults} from 'vue'
import {type Persons} from "../types"

//只接收list
//defineProps(['list'])

//接受list+ 限制类型
// defineProps<{list:Persons}>()

//接受list + 限制类型 + 指定默认值
withDefaults(defineProps<{list?:Persons}>(),{
    list:()=>[
        {id:'a01',name:'wz',age:18}
    ]
})

</script>

<style scoped>
.person {
    background-color:rgb(185, 225, 26);
    box-shadow: 0 0 10px;
    border-radius: 10px;
    padding: 20px;
}
button {
    margin: 0 5px;
}
</style>