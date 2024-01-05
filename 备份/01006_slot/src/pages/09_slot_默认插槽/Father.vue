<template>
  <div class="father">
    <h3>父组件</h3>
    <div class="content">
      <Category >
        <template v-slot:s2>
          <div>
            <ul>
              <li v-for="g in games" :key="g.id">{{ g.name }}</li>
            </ul>
          </div>
        </template>
        <template v-slot:s1>
          <div>
            <h2>今日美食推荐</h2>
          </div>
        </template>
      </Category>

      <Category >
        <template #s1>
          <div>
            <h2>今日美食城市</h2>
          </div>
        </template>
        <template #s2>
          <div>
            <img :src="imgUrl" alt="">
          </div>
        </template>
       
      </Category>

      <Category >
        <template #s1>
          <div>
            <h2>今日影视推荐</h2>
          </div>
        </template>
        
        <template #s2>
          <div>
            <video :src="videoUrl" controls></video>
          </div>
        </template>
        
      </Category>
    </div>
  </div>
</template>

<script setup lang="ts" name="Father">
  import Category from './Category.vue'
  import { ref,reactive } from "vue";

  let games = reactive([
    {id:'asgytdfats01',name:'英雄联盟'},
    {id:'asgytdfats02',name:'王者农药'},
    {id:'asgytdfats03',name:'红色警戒'},
    {id:'asgytdfats04',name:'斗罗大陆'}
  ])
  let imgUrl = ref('https://wx2.sinaimg.cn/orj360/005JCY4Qgy1himi781byyj30u00mkq7i.jpg')
  let videoUrl = ref('http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4')

</script>

<style scoped>
  .father {
    background-color: rgb(165, 164, 164);
    padding: 20px;
    border-radius: 10px;
  }
  .content {
    display: flex;
    justify-content: space-evenly;
  }
  img,video {
    width: 100%;
  }
  h2 {
    background-color: orange;
    text-align: center;
    font-size: 20px;
    font-weight: 800;
  }
</style>