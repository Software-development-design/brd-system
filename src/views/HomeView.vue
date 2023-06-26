<script setup>

</script>

<template>
  <div class="list">
    <img class="logo" src="/src/assets/logo.png"/>
    <div>
      一个基于BILSTM的谣言检测人工智能模型
    </div>
    <div class="buttonSet">
      <a-button type="primary" >开始使用</a-button>
      <a-button >模型简介</a-button>
    </div>
  
  </div>
  
</template>

<style scoped>
.logo{
  width:300px;
  height: 80px;
}
.list{
  display:flex;
  flex-direction: column;
  text-align: center;
}
.list *{
  margin-left: auto;
  margin-right: auto;
}
.buttonSet{
  display: flex;
  flex-direction: row;
}
</style>