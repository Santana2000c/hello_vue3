<template>
    <div class="home">
        <img src="http://www.atguigu.com/images/index_new/logo.png" alt="">
    </div>
</template>

<script lang="ts" setup name="Homes">
    import {onMounted,onUnmounted} from 'vue'
    import {useRouter} from 'vue-router'
    const router = useRouter()

    onMounted(()=>{
        setTimeout(()=>{
            router.push('/news')
        },5000)
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