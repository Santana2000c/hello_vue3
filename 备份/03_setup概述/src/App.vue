<template>
  <Person></Person>
</template>

<script lang="ts">
import Person from './components/Person.vue'
//JS 或者TS 脚本
  export default {
    name: 'App',//暴漏组件名
    components:{
      Person
    }
  }
</script>