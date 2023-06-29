<script setup>
import * as echarts from 'echarts';
import {ref, onMounted} from 'vue';
import axios from 'axios';

const boardRef= ref(null);
onMounted(()=>{
    axios.get('/server/rumor_list/',{

    }).then((res)=>{
        const boardElement = boardRef.value;
        const board = echarts.init(boardElement);
        board.setOption({
            xAxis:{
                data:[],
            },
            yAxis:{
                series:[
                    {
                        type:'bar',
                        data:[],
                    }
                ],
            }
        })
    })
    

})
</script>

<template>
<div class="board" ref="boardRef">

</div>
</template>

<style>
.board{
    width: 100vw;
    height: 80vh;
}

</style>