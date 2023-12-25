<template>
  <Person v-if="isShow"></Person>
</template>

<script lang="ts" setup name="app">
import { ref } from 'vue'
import Person from '@/components/Person.vue'
let isShow = ref(true) 
</script>