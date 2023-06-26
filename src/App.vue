<script setup>
import {ref} from 'vue'

const selectedKeys = ref(["home"]);
</script>

<template>
  <a-layout>
    <a-layout-header>
      <a-menu mode="horizontal" v-model:selectedKeys="selectedKeys">
        <a-menu-item key="home">首页</a-menu-item>
        <a-menu-item key="examples">案例</a-menu-item>
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
.main{
  margin-top: 10px;
}
</style>
