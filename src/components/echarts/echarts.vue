<template>
    <div class="mapLine">
        <div id="bar" ref="bar_dv"></div>
        <div class="subText">
            <span>CPU126-2Q DC/CD/DC</span>
        </div>
    </div>
</template>

<script>
import * as echarts from 'echarts'

export default {
    props: ["option"],
    data(){
        return{
            
        }
    },
    created(){
        let self = this
        this.$nextTick(()=>{
            // var myChart = echarts.init(document.getElementById('main'));
            // myChart.setOption(self.option)
            self.drawLine()
        })
    },
    methods:{
        drawLine(){
            var mySize = this.$refs.bar_dv
            var box = document.getElementsByClassName('mapLine')
            mySize.style.width = box[0].parentElement.parentElement.offsetWidth + 'px'
            // if(this.echarts.lineData.show){
            //     mySize.style.height = box[0].parentElement.parentElement.offsetHeight -50 + 'px'
            // }else{
                mySize.style.height = box[0].parentElement.parentElement.offsetHeight -20 + 'px'
            // }
            var myChart = echarts.init(this.$refs.bar_dv);
            // 绘制图表
            myChart.setOption(this.option);
        }
    }
};
</script>

<style lang="less" scoped>
    .mapLine{
        position: relative;
        .subText{
            position: absolute;
            width: 94%;
            border-top: 0.05rem solid #d1d1d4;
            transform: translate(-50%, -50%);
            left: 50%;
            bottom: -10%;
            padding-top: 11px;
            text-align: left;
            color: #d1d1d4;
            display: flex;
            span{
                font-size: 0.875rem;
                font-weight: lighter;
            }
        }
    }
</style>