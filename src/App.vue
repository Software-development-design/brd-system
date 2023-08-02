<script setup>
import {ref} from 'vue'
import {useRoute, useRouter} from 'vue-router';
import {login_qr_key} from 'NeteaseCloudMusicApi'

const routeName = useRoute().name;
const router = useRouter();
const selectedKeys = ref([routeName]);

function clickMenu(event){
  const key = event.key;
  router.push({name:key});
}
</script>

<template>
  <a-layout>
    <a-layout-header>
      <a-menu mode="horizontal" v-model:selectedKeys="selectedKeys" theme="dark" @click="clickMenu">
        <a-menu-item key="home" >首页</a-menu-item>
        <a-menu-item key="example">案例</a-menu-item>
        <a-menu-item key="use">使用</a-menu-item>
        <a-menu-item key="about">关于</a-menu-item>
      </a-menu>
    </a-layout-header>
    <a-layout-content class="main">
      <RouterView></RouterView>
    </a-layout-content>
  </a-layout>

</template>

<style scoped>
.icon{
  height: 20px;
  width: 20px;
  margin: 0;
  display: inline;
}
a-layout-header{
  height: 10vh;
}
</style>
