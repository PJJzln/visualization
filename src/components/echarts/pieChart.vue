<template>
  <div class="mapPie" style="width: 100%; height: 100%;">
     <div id="pie" style="width: 100%; height: 100%;">
     </div>
  </div>
</template>
<script>
import * as echarts from 'echarts'

export default {
    data(){
        return{
            option :{
                tooltip: {
                    trigger: 'item'
                },
                legend: {
                    top: '5%',
                    left: 'center'
                },
                series: [
                    {
                        name: '访问来源',
                        type: 'pie',
                        radius: ['40%', '70%'],
                        avoidLabelOverlap: false,
                        itemStyle: {
                            borderRadius: 10,
                            borderColor: '#fff',
                            borderWidth: 2
                        },
                        label: {
                            show: false,
                            position: 'center'
                        },
                        emphasis: {
                            label: {
                                show: true,
                                fontSize: '40',
                                fontWeight: 'bold'
                            }
                        },
                        labelLine: {
                            show: false
                        },
                        data: [
                            {value: 1048, name: '搜索引擎'},
                            {value: 735, name: '直接访问'},
                            {value: 580, name: '邮件营销'},
                            {value: 484, name: '联盟广告'},
                            {value: 300, name: '视频广告'}
                        ]
                    }
                ]
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
            var mySize = document.getElementById('pie')
            var box = document.getElementsByClassName('mapPie')
            mySize.style.width = box[0].parentElement.parentElement.offsetWidth + 'px'
            mySize.style.height = box[0].parentElement.parentElement.offsetHeight+ 'px'
            var myChart = echarts.init(mySize);
            // 绘制图表
            myChart.setOption(this.option);
        }
    }
};
</script>