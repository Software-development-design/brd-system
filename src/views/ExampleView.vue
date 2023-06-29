<script setup>
import * as echarts from 'echarts';
import {ref, onMounted} from 'vue';
import axios from 'axios';

const boardRef= ref(null);
onMounted(()=>{
    axios.get('/server/rumor_list/',{

    }).then((res)=>{
        const data = res.data;
        console.log(data);
        const boardElement = boardRef.value;
        const board = echarts.init(boardElement);
        board.setOption({
            xAxis:{},
            yAxis:{data:[data[9][0],data[8][0],data[7][0],data[6][0],data[5][0],data[4][0],data[3][0],data[2][0],data[1][0],data[0][0]],},
            series:[
                {
                    type:'bar',
                    data:[data[9][2],data[8][2],data[7][2],data[6][2],data[5][2],data[4][2],data[3][2],data[2][2],data[1][2],data[0][2]],
                }
            ],
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