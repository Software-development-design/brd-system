<script setup>
import Granim from 'granim';
import {ref, nextTick, onMounted} from 'vue';
import {useRouter} from 'vue-router';
import Typed from 'typed.js';

const router = useRouter();
const logoCanvas=ref(null);
onMounted(()=>{
    const canvas = logoCanvas.value;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight*0.913;
    const logoAnimation = new Granim({
    element: logoCanvas.value,
    direction: 'left-right',
    isPausedWhenNotInView: true,
    states : {
        "default-state": {
            gradients: [
                ['#ff9966', '#ff5e62'],
                ['#00F260', '#0575E6'],
                ['#e1eec3', '#f05053'],
                ['#9D50BB', '#6E48AA'],
                ['#4776E6', '#8E54E9'],
                ['#FF4E50', '#F9D423']
            ],
            transitionSpeed: 800,
        }
    }
    })
    const introductionTyped = new Typed('.introduction',{
        strings:['一个基于BILSTM的谣言检测模型'],
        typeSpeed: 100,
        cursorChar:"",
    })
})
</script>

<template>
    <div class="head">
        <canvas id="logoCanvas" ref="logoCanvas"></canvas>
        <img class="logo inCanvas" src="/src/assets/logo.png"/>
        <div class="introduction"></div>
        <div class="buttonSet inCanvas">
            <div id="buttonA" @click="router.push('use')" >开始使用</div>
            <div id="buttonB" @click="router.push('example')">查看示例</div>
        </div>
    </div>
</template>

<style scoped>
.logo{
    width:60vw;
    height: 25vh;
    left: 20vw;
    top: 25vh;
}
.buttonSet{
    top: 65vh;
}
#buttonA{
    left:25vw;
}
#buttonB{
    left: 55vw;
}
.buttonSet *{
    width: 20vw;
    height:10vh;
    text-align: center;
    border-radius: 25px;
    line-height: 10vh;
    align-items: center;
    font-size: 5vh;
    cursor: pointer;
    box-shadow: 5px 5px 5px gray;
}
.buttonSet *:hover{
    
}

#buttonA{
    background-color: #626aef;
    color: white;
}

.logoCanvas{
    z-index: 0;
    padding: 0;

}
.head{
    height: 90vh;
    width: 100vw;
}
.head *{
    position: absolute;
}
.introduction{
    font-family: sans-serif;
    font-size: 5vh;
    top:55vh;
    left:30vw;
}

</style>