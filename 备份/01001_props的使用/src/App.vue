<template>
  <Person a="哈哈" :list="ps"></Person>
</template>

<script lang="ts" setup name="app">
import { reactive } from 'vue'
import Person from './components/Person.vue'
import {type Persons} from '@/types'

let ps = reactive<Persons>([
  {id:'a001',name:'张三',age:20},
  {id:'a002',name:'李四',age:18}
])
</script>