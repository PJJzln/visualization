<template>
    <div class="box-content" id="content">
        <!-- <header class="mu-primary-color">
            <mu-row gutter>
                <mu-col span="12">
                    <div class="grid-cell">
                        <mu-row gutter align-items="center" align-content="center" style="height: 100%;">
                            <mu-col span="9">
                                <Search/>
                            </mu-col>
                            <mu-col span="3" style="display:flex;align-items:center;justify-content: center;">
                                <grobal-theme/>
                                <Costom/>
                                <Personal/>
                            </mu-col>
                        </mu-row>
                    </div>
                </mu-col>
            </mu-row>
        </header> -->
        <el-container>
            <el-aside width="5%">
                <menuBar/>
            </el-aside>
            <el-container>
                <el-header class="mu-primary-color">
                    <mu-row gutter>
                        <mu-col span="12">
                            <div class="grid-cell">
                                <mu-row gutter align-items="center" align-content="center" style="height: 100%;">
                                    <mu-col span="9">
                                        <Search/>
                                    </mu-col>
                                    <mu-col span="3" style="display:flex;align-items:center;justify-content: center;">
                                        <Costom/>
                                        <Personal/>
                                    </mu-col>
                                </mu-row>
                            </div>
                        </mu-col>
                    </mu-row>
                </el-header>
                <el-main>
                    <router-view style="height:100%;width:100%"></router-view>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>
<script>
    import menuBar from './menu/menuBar.vue'
    import Costom from '../components/costom/costom.vue'
    import Personal from '../components/personal/personal.vue'
    import Search from '../components/search/search.vue'

    export default {
        data(){
            return{

            }
        },

        mounted(){
        
        },

        components:{
            menuBar,
            Costom,
            Personal,
            Search
        },

        computed:{
            
        },

        methods:{
            
        },
    }
</script>
<style lang="less" scoped>
.box-content{
    padding:0;
    margin: 0 auto;
    width: 100%;
    height: 100%;
    .el-container{
        height: 100%;
        width: 100%;
    }
}
.row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
}
.grid-cell {
    height: 64px;
}
.el-main{
    overflow: hidden;
}
</style>