<template>
    <div class="containerTable">
        <div class="left-container">
            <draggable :layoutType="layoutType" :data="data" :echarts="echarts"></draggable>
        </div>
        <div class="right-container mu-primary-color">
            <nested-list></nested-list>    
        </div>
    </div>
</template>

<script>
import nestedList from '../../components/list/nestedList.vue'
import draggable from '../../components/draggable/draggable.vue'
import * as echarts from 'echarts'

export default {
    components: { nestedList,draggable},
    data() {
        return {
            layoutType : 3,
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
                            type : 'listCharts'
                        }
                    ]
                }
            ],
            echarts:{
                lineData:{
                    show:false ,
                    title: {
                        text: '实时数据',
                        textStyle:{
                            color:"#d1d1d4",
                            fontStyle: 'normal' ,
                            fontWeight: 'bold' ,
                            fontFamily: 'sans-serif' ,
                            fontSize: 16,
                        },
                        left: '100' ,
                    },
                    tooltipShow: true ,
                    legendShow : true ,
                    grid: {
                        left: 100,
                        right: 100,
                    },
                    xAxisShow: true ,
                    yAxisShow : true ,
                    series:[{
                        name: '速度',
                        type: 'line',
                        data: [10, 11, 13, 11, 12, 12, 9],
                        smooth: true,
                        itemStyle: {
                            color: '#d63131',
                            shadowColor: '#d63131',
                            shadowBlur: 20,
                        },
                        lineStyle: {
                            shadowColor: "#d63131",
                            shadowOffsetX: 0,
                            shadowOffsetY: 0,
                            opacity: 1,
                            shadowBlur: 8,
                            type: "solid",
                            width: 4
                        },
                        areaStyle: {
                            normal: {
                                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                    { offset: 0, color: "#d63131" }, //从上往下的渐变
                                    { offset: 0.3, color: "transparent" },
                                ]),
                            },
                        },
                        markPoint: {
                            data: [
                                {type: 'max', name: '最大值'},
                                {type: 'min', name: '最小值'}
                            ]
                        },
                    },
                    {
                        name: '压力',
                        type: 'line',
                        data: [1, -2, 2, 5, 3, 2, 0],
                        smooth: true,
                        itemStyle: {
                            color: '#e26f0f',
                            shadowColor: '#e26f0f',
                            shadowBlur: 20,
                        },
                        lineStyle: {
                            shadowColor: "#e26f0f",
                            shadowOffsetX: 0,
                            shadowOffsetY: 0,
                            opacity: 1,
                            shadowBlur: 8,
                            type: "solid",
                            width: 4
                        },
                        areaStyle: {
                            normal: {
                                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                    { offset: 0, color: "#e26f0f" }, //从上往下的渐变
                                    { offset: 0.3, color: "transparent" },
                                ]),
                            },
                        },
                        markPoint: {
                            data: [
                                {name: '周最低', value: -2, xAxis: 1, yAxis: -1.5}
                            ]
                        },
                    }]

                },
                barData:{
                    show:false ,
                    text: '数据可视与报警开关配置',
                    tooltipShow: true ,
                    legendShow : true ,
                    grid: {
                        left: '200',
                        right: '50',
                        bottom: '60',
                    },
                    xAxis: {
                        data:['温度','湿度','PH','风力','压力'],
                        axisLine: {
                            show: false  //不显示坐标轴轴线
                        },
                        axisTick: {
                            show: false  //不显示坐标轴刻度
                        },
                    },
                    yAxisShow : false ,
                    series:[{
                        name: '显示屏障',
                        type: 'bar',
                        data: [5,7,3,5,9],
                        showBackground: true,
                        backgroundStyle: {
                            color: '#3b3f50',
                            borderRadius: 100
                        },
                        itemStyle: {
                            color: '#4d9aff',
                            borderRadius:100
                        },
                        barWidth: 15
                    },
                    {
                        name: '报警屏障',
                        type: 'bar',
                        data: [3,2,8,9,15],
                        showBackground: true,
                        backgroundStyle: {
                            color: '#3b3f50',
                            borderRadius: 100
                        },
                        itemStyle: {
                            color: '#e52748',
                            borderRadius:100
                        },
                        barWidth: 15
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
        .left-container{
            margin: 0 ;
            height: 100%;
            width: 80% ;
            float: left;
        }
        .right-container{
            margin: 0;
            height: 100%;
            width: 18%;
            float: right;
            background: rgb(49, 52, 71);
            border-radius: 0.3125rem;
            
        }
    }
</style>