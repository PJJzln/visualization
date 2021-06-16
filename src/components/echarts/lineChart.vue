<template>
    <div class="mapLine">
        <div id="line"></div>
        <div class="subText" v-if="echarts.lineData.show">
            <span>CPU126-2Q DC/CD/DC</span>
        </div>
    </div>
</template>
<script>
import * as echarts from 'echarts'

export default {
    props: ["echarts"],
    data(){
        return{
            option : {
                title: {},
                tooltip: {
                    show: true ,
                    backgroundColor: 'rgba(50,50,50,0.7)' ,      
                    borderColor: 'rgba(50,50,50,0.7)' ,
                    trigger: 'axis' ,
                    textStyle: {
                        color: '#d1d1d4' ,
                    }
                },
                legend: {
                    data: [{
                        name: '速度',
                        icon: 'roundRect',
                        textStyle: {
                            color: '#d1d1d4'
                        }
                    },{
                        name: '压力',
                        icon: 'roundRect',
                        textStyle: {
                            color: '#d1d1d4'
                        }
                    }],
                    right: '100' ,
                    top: 'auto' ,
                },
                grid: {},
                xAxis: {
                    type: 'category',
                    boundaryGap: false,
                    data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
                    axisLine: {
                        lineStyle: {
                            color: '#d1d1d47d' ,
                            width:1,
                        } ,
                    },
                },
                yAxis: {
                    type: 'value',
                    axisLabel: {
                        formatter: '{value} °C'
                    },
                    axisLine:{  
                        lineStyle:{  
                            color:'#d1d1d47d',  
                            width:1,//这里是为了突出显示加上的  
                        }  
                    },
                    splitLine: {
                        show: true ,
                        lineStyle: {
                            color: '#d1d1d47d' ,
                            width:1,
                        } ,
                    },
                },
                series: []
            }
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
            var mySize = document.getElementById('line')
            var box = document.getElementsByClassName('mapLine')
            mySize.style.width = box[0].parentElement.parentElement.offsetWidth + 'px'
            if(this.echarts.lineData.show){
                mySize.style.height = box[0].parentElement.parentElement.offsetHeight -50 + 'px'
            }else{
                mySize.style.height = box[0].parentElement.parentElement.offsetHeight -20 + 'px'
            }
            this.option.title = this.echarts.lineData.title
            this.option.legend.show = this.echarts.lineData.legendShow
            this.option.tooltip.show = this.echarts.lineData.tooltipShow
            this.option.grid = this.echarts.lineData.grid
            this.option.xAxis.show = this.echarts.lineData.xAxisShow
            this.option.yAxis.show = this.echarts.lineData.yAxisShow
            this.option.series = this.echarts.lineData.series
            var myChart = echarts.init(mySize);
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