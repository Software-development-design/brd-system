<script setup>
import Typed from 'typed.js';
import { onMounted } from 'vue';

onMounted(()=>{
    const longIntroducitonTyped = new Typed('.longIntroduction',{
        strings:[
            `本软件基于BLSTM（双向长短期记忆网络），是一款针对网上谣言进行自动识别和分类的谣言检测软件。
            软件部署在网页端，旨在帮助用户识别和过滤虚假信息，从而提高信息的可信度和准确性。
            软件采用了BLSTM模型作为主要的谣言检测算法。BLSTM模型结合了长短期记忆网络和双向循环神经网络的优点，
            能够捕捉文本中的语义和上下文信息，从而实现准确的谣言检测。
            用户无需下载或安装额外的软件，只需在网页上访问该谣言检测软件，即可使用其强大功能。
            软件使用的灵活性使用户可以在任何时候、任何地点使用该软件进行谣言检测。
            软件会根据输入的文本进行实时检测，并将结果直观地展示给用户。
            并且会展示本软件中点击量最高的网站，清晰地向用户展现热点谣言和舆论趋势。`
        ],
        typeSpeed:30,
        cursorChar:"",
    })
})


</script>

<template>
    <div class="container">
        <div class="longIntroduction introductionText"></div>  
    </div>
</template>

<style>
.codePart{
    width:80vw;
    height:80vh;
}
.introductionText{
    width: 50vw;
    font-size: 3.5vh;
    margin-top: 5vh;
}
.container{
    height: 85vh;
}
</style>
