<template>
  <div class="mapBar">
     <div id="bar" ref='bar_dv'></div>
     <div class="subText" v-if="echarts.barData.show">
        <span>CPU126-2Q DC/CD/DC</span>
    </div>
  </div>
</template>
<script>
import * as echarts from 'echarts'

export default {
    props: ["echarts","type"],
    data(){
        return{
            option :{
                title: {
                    textStyle:{
                        color:"#d1d1d4",
                        fontStyle: 'normal' ,
                        fontWeight: 'bold' ,
                        fontFamily: 'sans-serif' ,
                        fontSize: 16,
                    },
                    left: '50' ,
                },
                tooltip: {
                    backgroundColor: 'rgba(50,50,50,0.7)' ,      
                    borderColor: 'rgba(50,50,50,0.7)' ,
                    trigger: 'axis' ,
                    textStyle: {
                        color: '#d1d1d4' ,
                    }
                },
                legend: {
                    orient: 'vertical',
                    left: '50',
                    top: '100',
                    data: [{
                        name: '显示屏障',
                        icon: 'roundRect',
                        textStyle: {
                            color: '#d1d1d4'
                        }
                    },{
                        name: '报警屏障',
                        icon: 'roundRect',
                        textStyle: {
                            color: '#d1d1d4'
                        }
                    }],
                },
                grid: {},
                xAxis: {},
                yAxis: {
                    type: 'value',
                    splitLine: {show: false},
                    show :false
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
            // var mySize = document.getElementById('bar')
            var mySize = this.$refs.bar_dv
            var box = document.getElementsByClassName('mapBar')
            debugger
            console.log(this.option)
            if(box.length>1){
                for(let i =0 ; i < box.length ; i++){
                    mySize.style.width = box[i].parentElement.parentElement.offsetWidth + 'px'
                    if(this.echarts.barData.show){
                        mySize.style.height = box[i].parentElement.parentElement.offsetHeight -50 + 'px'
                    }else{i
                        mySize.style.height = box[i].parentElement.parentElement.offsetHeight -20 + 'px'
                    }
                }
            }else{
                mySize.style.width = box[0].parentElement.parentElement.offsetWidth + 'px'
                if(this.echarts.barData.show){
                    mySize.style.height = box[0].parentElement.parentElement.offsetHeight -50 + 'px'
                }else{
                    mySize.style.height = box[0].parentElement.parentElement.offsetHeight -20 + 'px'
                }
            }
            var myChart = echarts.init(this.$refs.bar_dv);
            this.option.title = this.echarts.barData.title
            this.option.legend.show = this.echarts.barData.legendShow
            this.option.tooltip.show = this.echarts.barData.tooltipShow
            this.option.grid = this.echarts.barData.grid
            this.option.xAxis = this.echarts.barData.xAxis
            this.option.yAxis.show = this.echarts.barData.yAxisShow
            this.option.series = this.echarts.barData.series
            // 绘制图表
            myChart.setOption(this.option);
            window.addEventListener('resize', function () {
                myChart.resize()
            });
        }
    }
};
</script>
<style lang="less" scoped>
    .mapBar{
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