<template>
    <div class="containerTable">
        <draggable :layoutType="layoutType" :data="data" :echarts="echarts"></draggable>
    </div>
</template>

<script>
import draggable from '../../components/draggable/draggable.vue'

export default {
    components: {draggable},
    data() {
        return {
            layoutType : 6,
            data: [
                {
                    group: "left-show",
                    title: "视频播放区一",
                    children: [
                        {
                            id: 1,
                            color: "orange",
                            type : 'lineCharts'
                        },
                        {
                            id: 2,
                            color: "yellow",
                            type : 'barCharts'
                        },
                        {
                            id: 3,
                            color: "cyan",
                            type : 'barCharts'
                        },{
                            id: 4,
                            color: "cyan",
                            type : 'listCharts'
                        },{
                            id: 5,
                            color: "cyan",
                            type : 'pieCharts'
                        },{
                            id: 6,
                            color: "cyan",
                            type : 'listCharts'
                        }
                    ]
                },
            ],
            echarts:{
                lineData:{
                    show: true ,
                    title:{
                        text:"设备波纹噪声",
                        textStyle:{
                            color:"#d1d1d4",
                            fontStyle: 'normal' ,
                            fontWeight: 'lighter' ,
                            fontFamily: 'sans-serif' ,
                            fontSize: 16,
                        },
                        subtext:"100Mb/s",
                        subtextStyle:{
                            fontSize:24,
                            color:"#f9fbf8",
                        },
                        left:30
                    },
                    tooltipShow: true ,
                    grid: {
                        left: 30,
                        right: 30,
                        bottom: 50
                    },
                    xAxisShow: false ,
                    yAxisShow : false ,
                    series: [{
                        data: [10, 20, 15, 25, 10, 16, 12],
                        type: 'line',
                        smooth: true,
                        symbol: 'none',
                        itemStyle: {
                            color: '#228989',
                        },
                        lineStyle:{
                            color:'#228989'
                        },
                        areaStyle: {
                            color:'#228989'
                        }
                    }]

                },
                barData:{
                    show: true ,
                    title:{
                        text:"计数器比例",
                        textStyle:{
                            color:"#d1d1d4",
                            fontStyle: 'normal' ,
                            fontWeight: 'lighter' ,
                            fontFamily: 'sans-serif' ,
                            fontSize: 16,
                        },
                        subtext:"78%",
                        subtextStyle:{
                            fontSize:24,
                            color:"#f9fbf8",
                        },
                        left:30
                    },
                    tooltipShow: true ,
                    grid: {
                        left: 30,
                        right: 30,
                        bottom: 50
                    },
                    xAxis:[{
                            show:false ,
                            type: 'category',
                            data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
                             axisLine: {
                                show: false  //不显示坐标轴轴线
                            },
                            axisTick: {
                                show: false  //不显示坐标轴刻度
                            },
                        }] ,
                    yAxisShow : false ,
                    series: [{
                        type: 'bar',
                        data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3],
                        backgroundStyle:{
                            color:'#5bb2fe'
                        },
                        itemStyle: {
                            color: '#5bb2fe',
                        },
                        emphasis: {
                            focus: 'series'
                        },
                        animationDelay: function (idx) {
                            return idx * 10;
                        }
                    }]
                },
                listData:[]
            }
        };
    },
    methods: {
        
    }
    };
</script>

<style scoped lang="less">
    .containerTable {
        height: 100%;
        width: 100%;
        padding: 0 ;
    }
</style>