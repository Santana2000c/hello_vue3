<template>
    <div class="home">
        <img src="http://www.atguigu.com/images/index_new/logo.png" alt="">
    </div>
</template>

<script lang="ts" setup name="Homes">
    import {onMounted,onUnmounted} from 'vue'

    onMounted(()=>{
    console.log('home已被挂载')
    })
    onUnmounted(()=>{
    console.log('home卸载了')
    })
</script>


<style scoped>
.news{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
}
</style>