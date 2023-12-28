<template>
    <div class="news">
        <!-- 导航区 -->
        <ul>
          <li v-for="news in newList" :key="news.id"> 
            <button @click="showDetail(news)">查看</button>
            <!-- <router-link :to="{
              //query参数可用name/path params只能使用name
              name:'xiangxi',
              params:{
                id:news.id,
                title:news.title,
                content:news.content
              }
            }">
              {{news.title}}</router-link> -->
              {{news.title}}
          </li>
        </ul>
      
      <!-- 内容区 -->
      <div class="news-content">
        <router-view>
        </router-view>
      </div>
    </div>
  </template>
  
  <script setup lang="ts" name="News">
  import {onMounted,onUnmounted, reactive} from 'vue'
  import { useRouter} from 'vue-router'

  const router = useRouter()
  const newList = reactive([
    {id:'1001',title:'震惊1！',content:'一男子发现金子'},
    {id:'1002',title:'震惊2！',content:'两男子发现金子'},
    {id:'1003',title:'震惊3！',content:'三男子发现金子'},
    {id:'1004',title:'震惊4！',content:'四男子发现金子'}
  ])

  interface newsDetail{
    id:String
    title:String
    content:String
  }


  function showDetail(news:any){
    router.push({
              //query参数可用name/path params只能使用name
              name:'xiangxi',
              params:{
                id:news.id,
                title:news.title,
                content:news.content
              }
            })
  }
  </script>
  
  <style scoped>
  /* 新闻 */
  .news {
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
    height: 100%;
  }
  .news ul {
    margin-top: 30px;
    list-style: none;
    padding-left: 10px;
  }
  .news li>a {
    font-size: 18px;
    line-height: 40px;
    text-decoration: none;
    color: #64967E;
    text-shadow: 0 0 1px rgb(0, 84, 0);
  }
  .news-content {
    width: 70%;
    height: 90%;
    border: 1px solid;
    margin-top: 20px;
    border-radius: 10px;
  }
  </style>