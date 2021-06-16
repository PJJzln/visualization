<template>
    <mu-list toggle-nested>
        <mu-sub-header>警报信息</mu-sub-header>
        <div class="listBox">
            <mu-load-more :loading="loading" @load="load">
                <!--eslint-disable-next-line-->
                <div v-for="i in num">
                    <mu-list-item button :ripple="false" >
                        <mu-list-item-action>
                            <div class="stateType"></div>
                        </mu-list-item-action>
                        <mu-list-item-content>
                            <mu-list-item-sub-title @click="toggle($event)">
                                <div class="subHeader">
                                    <div class="">
                                        Jan 9, 2014 --{{i}}
                                    </div>
                                </div>
                            </mu-list-item-sub-title>
                            <mu-list-item-title>Photos--{{i}}</mu-list-item-title>
                        </mu-list-item-content>
                        <mu-list-item-action>
                            <mu-button icon color="#d1d1d4">
                                <mu-icon value="more_horiz"></mu-icon>
                            </mu-button>
                        </mu-list-item-action>
                    </mu-list-item>
                    <mu-divider shallow-inset></mu-divider>
                </div>
            </mu-load-more>
        </div>
    </mu-list>
</template>
<script>
export default {
    data(){
        return{
            loading: false,
            num : 10 ,
        }
    },
    methods:{
        load () {
            this.loading = true;
            setTimeout(() => {
                this.loading = false;
                this.num += 10;
            }, 2000)
        }
    }
}
</script>
<style lang="less" scoped>
    .mu-list{
        height: 100%;
        width: 100%;
        overflow: hidden;
        .stateType{
            width: 0.9375rem;
            height: 0.9375rem;
            border-radius: 0.9375rem;
            background: #10bda8;
        }
        .mu-sub-header{
            color: #d1d1d4;
            font-size: 1rem;
            font-weight: 700;
            text-align: left;
            margin-left: 1.5625rem;
        }
        .listBox{
            width:100%;
            height: 88%;
            overflow-y: auto;
            overflow-x: hidden;
            /deep/.mu-item-wrapper{
                margin-left: 1.5625rem;
                .mu-item{
                    .mu-item-content{
                        color: #d1d1d4;
                        .mu-item-sub-title{
                            color: #d1d1d46b;
                            .subHeader{
                                display: flex;
                                width: 85%;
                                white-space: nowrap;
                                overflow: hidden;
                                text-overflow: ellipsis;;
                            }
                        }
                    }
                }
            }
        }
        .inforAll{
            color: #d1d1d4;
            text-align: left;
            margin: 0 0 0 4.5625rem;
        }
        .fade-enter-active {transition: all .5s ease;}
        .fade-leave-active {transition: all .5s cubic-bezier(1.0, 0.5, 0.8, 1.0);}
        .fade-enter, .fade-leave-to{transform: translateX(5px);opacity: 0;}
        .mu-divider.shallow-inset{
            background-color: #7b887b5c !important ;
            margin-left: 5.8125rem !important;
        }
    }

    .listBox::-webkit-scrollbar {
        width: 6px;
        height: 1px;
    }
    .listBox::-webkit-scrollbar-thumb {
        border-radius: 10px;
        box-shadow   : inset 0 0 5px rgba(0, 0, 0, 0.2);
        background   : #d1d1d426;
    }
    .listBox::-webkit-scrollbar-track {
        box-shadow   : inset 0 0 5px rgba(0, 0, 0, 0.2);
        border-radius: 10px;
        background   : #2a2b3d;
    }
</style>