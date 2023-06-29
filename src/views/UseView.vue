<script setup>
import {ref} from 'vue';
import axios from 'axios';

const question = ref("");
const result = ref("");

async function uploadQuestion(){
    if(question.value===""){
        alert("问题不能为空！");
        return;
    }
    console.log(question.value);
    result.value="计算中...";
    axios.get('server/rumor/detected_program/',{
        params: {
            sentence: question.value,
        },
        timeout : 10000,
    }).then((res)=>{
        if(res.status!==200){
            question.value="服务器出错，请稍后重试"
        }else{
            if(res.is_rumor==="0"){
                result.value="不是谣言";
            }else{
                result.value="是谣言";
            }
        }
    })
}

</script>

<template>
    <div class="list">
        <img src="../assets/logo.png"/>
        <kinesis-container>
            <kinesis-element :strengh="100">
                <input type="text" v-model="question" class="inputQuestion" placeholder="请输入要检测的文字，不超过20字" maxlength="20">
            </kinesis-element>
        </kinesis-container>
        
        <div id="buttonA" @click="uploadQuestion" >开始检测</div>
        <div class="result">{{ result }}</div>
    </div>
    
</template>




<style scoped>
#buttonA{
    margin-top: 5vh;
    background-color: #626aef;
    color: white;
    width: 20vw;
    height:7vh;
    text-align: center;
    border-radius: 25px;
    line-height: 7vh;
    align-items: center;
    font-size: 3vh;
    cursor: pointer;
    box-shadow: 5px 5px 5px gray;
}

.inputQuestion{
    margin-top: 3vh;
    width: 40vw;
    height: 8vh;
    line-height: 8vh;
    font-size: 3vh;
    border-radius: 20px;
    padding-left: 3px;
}
img{
    width: 50vw;
    height: 23vh;
    margin-top: 5vh;
    margin-bottom: 5vh;
    padding: 0;
}
.result{
    margin-top: 5vh;
    line-height: 5vh;
    font-size: 5vh;
}
</style>