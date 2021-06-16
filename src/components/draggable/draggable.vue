<template>
    <div style="width: 100%;height: 100%;">
        <div
            class="group"
            :class="{'left-top-container': gindex===0,
                'right-top-container': gindex===2,
                'bottom-container': gindex===1,
                'top-container': gindex<2}"
            v-for="(group,gindex) in data"
            :key="gindex"
            >
            <div
                class="cls-default mu-primary-color"
                v-for="(item,cindex) in group.children"
                :key="cindex"
                :data-id="gindex+'-'+cindex"
                draggable="true"
                @dragstart="onDragstart($event)"
                @dragend="onDragend($event)"
                @dragover="onDragover($event)"
                @drop="onDrop($event)"
                :class="{'cls1-0': cindex ===0 && layoutType==1,
                'cls2-0': (cindex ===0 || cindex ===1) && layoutType==2,
                'cls3-0': cindex ===0 && layoutType==3,
                'cls3-1': (cindex ===1 || cindex ===2) && layoutType==3,
                'cls4-0': cindex <4 && layoutType==4,
                'cls5-0': cindex ===0 && layoutType==5,
                'cls5-0-right': (cindex ===1 || cindex ===2) && layoutType==5,
                'cls5-1': (cindex ===3 || cindex ===4) && layoutType==5,
                'cls6-0': cindex < 4 && layoutType==6,
                'cls6-1': (cindex === 4 || cindex === 5) && layoutType==6,
                }"
            >
                <div class="content">
                    <component :is="item.type" :echarts="echarts"></component>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import barCharts from '../../components/echarts/barChart.vue'
import lineCharts from '../../components/echarts/lineChart.vue'
import listCharts from '../../components/echarts/listChart.vue'
import pieCharts from '../../components/echarts/pieChart.vue'

export default {
    components: { barCharts,lineCharts,listCharts,pieCharts},
    props: ["layoutType","data","echarts"],
    data() {
        return {
            stargindex: "",
            endIndex: "",
            currentTabComponent : 'Charts' ,
        };
    },
    mounted(){
    },
    methods: {
        onDragstart(event) {
            this.stargindex = event.target.getAttribute("data-id");
        },
        onDragend() {
            let startGroupIndex = this.stargindex.split("-")[0];
            let startChildIndex = this.stargindex.split("-")[1];
            let endGroupIndex = this.endIndex.split("-")[0];
            let endChildIndex = this.endIndex.split("-")[1];
            let endObj = this.data[endGroupIndex].children[endChildIndex];
            let startObj = this.data[startGroupIndex].children[startChildIndex];
            if (this.data[endGroupIndex].group === "source") {
                return;
            }
            this.data[endGroupIndex].children.splice(endChildIndex, 1, startObj);
            if (this.data[startGroupIndex].group !== "source") {
                // debugger
                let x  = this.data[startGroupIndex].children.splice(startChildIndex, 1, endObj)[0].type;
                this.$nextTick(() => { 
                    this.currentTabComponent = x+'Charts'
                })
            }
        },
        onDrop(event) {
            if (event.target.className.indexOf("cls-default") > -1) {
                this.endIndex = event.target.getAttribute("data-id");
            }else if(event.currentTarget.className.indexOf("cls-default") > -1){
                this.endIndex = event.currentTarget.getAttribute("data-id");
            }else {
                this.endIndex = event.target.parentElement.getAttribute("data-id");
            }
        },
        onDragover(event) {
            event.preventDefault();
        }
    }
}
</script>
<style lang="less" scoped>
    .layout .layout-btn {
        background-color: #409eff;
        color: #fff;
        padding: 0.625rem 0.9375rem;
        margin: 0.625rem 0.9375rem;
    }
    .tips {
        font-size: 1.5rem;
        text-align: center;
    }
    .group {
        float: left;
        overflow: hidden;
        box-sizing: border-box;
    }
    .group-title {
        height: 2.5rem;
        line-height: 2.5rem;
    }
    .cls-default {
        float: left;
        margin: 0;
        box-sizing: border-box;
        overflow: hidden;
        background: #313447;
    }
    .cls-default .content {
        text-align: center;
        padding-top: 1.25rem;
        font-size: 1.25rem;
        height: 100%;
        width: 100%;
    }
    .top-container {
        height: 100%;
        width: 100%;
        // display: flex;
        // justify-content: space-between;
        // flex-wrap: wrap;
    }
    .top-container .cls-default {
        width: 33.33%;
        height: 33.33%;
    }
    .top-container .cls1-0 {
        width: 100%;
        height: 100%;
    }
    .top-container .cls2-0 {
        width: calc(98%/2);
        height: 100%;
    }
    .top-container .cls2-0:first-child {
        margin-right: 1.75rem;
    }
    .top-container .cls3-0 {
        width: 100%;
        height: 60%;
        margin-bottom: 1.75rem;
    }
    .top-container .cls3-1 {
        height: 36.5%;
    }
    .top-container .cls3-1:nth-child(2){
        width: 60%;
        margin-right: 1.75rem;
    }
    .top-container .cls3-1:nth-child(3){
        width: 38%;
    }
    .top-container .cls4-0 {
        width: calc(98%/2);
        height: 50%;
    }
    .top-container .cls4-0:nth-child(1) , .top-container .cls4-0:nth-child(2){
        margin-bottom: 1.75rem;
    }
    .top-container .cls4-0:nth-child(odd) {
        margin-right: 1.75rem;
    }
    .top-container .cls5-0 {
        width: 64.66%;
        height: 66.65%;
    }
    .top-container .cls5-0:first-child{
        margin-right: 1.75rem;
    }
    .top-container .cls5-0-right{
        height: calc(62.65%/2);
    }
    .top-container .cls5-0-right:nth-child(2){
        margin-bottom: 2%;
    }
    .top-container .cls5-1 {
        width: calc(98%/2);
        height: calc(100%-69.65%);
        margin-top: 1.75rem;
    }
    .top-container .cls5-1:nth-child(4) {
        margin-right: 1.75rem;
    }
    .top-container .cls6-0 {
        width: calc((100% - 1.75em * 3)/4);
        height: 35%;
        margin-right: 1.75rem;
        margin-bottom: 1.75rem;
    }
    .top-container .cls6-0:nth-child(4){
        margin-right: 0;
    }
    .top-container .cls6-1{
       // width: calc((100% - 2em)/2);
        height: calc(100%-35%);
        margin-right: 1.75rem;
    }
    .top-container .cls6-1:nth-child(5) {
        width: 60%;
    }
    .top-container .cls6-1:nth-child(6) {
        margin-right: 0;
        width: calc(40% - 1.75em);
    }
    .bottom-container {
        width: 90%;
        height: 12.5rem;
        margin: 0.9375rem 5%;
    }
    .bottom-container .cls-default {
        width: 15%;
        height: 9.375rem;
    }
</style>