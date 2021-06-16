<template>
    <mu-list toggle-nested>
        <mu-sub-header>用户管理</mu-sub-header>
        <div class="listBox">
            <mu-load-more :loading="loading" @load="load">
                <!--eslint-disable-next-line-->
                <div v-for="item in num">
                    <mu-list-item avatar button :ripple="false">
                        <mu-list-item-action>
                            <mu-avatar color="#8e918e">
                                <svg t="1613806614159" class="icon" viewBox="0 0 1024 1024" version="1.1" 
                                xmlns="http://www.w3.org/2000/svg" p-id="2258" width="65%" height="65%">
                                <path d="M741.288277 90.884082A325.310577 325.310577 0 0 0 514.089271 0.00448a325.118578 325.118578 0 0 0-227.135006 90.879602 303.102674 303.102674 0 0 0-94.143588 219.45504c0 82.815638 33.407854 160.767297 94.143588 219.39104 21.631905 20.991908 45.951799 38.463832 71.935685 52.287772a530.749678 530.749678 0 0 0-185.15119 101.503556C79.595172 763.201141 18.027441 871.488667 0.363519 988.352156a31.103864 31.103864 0 0 0 27.135881 35.199846 31.871861 31.871861 0 0 0 36.415841-26.111886c32.511858-214.719061 226.111011-376.894351 450.17403-376.894351a324.990578 324.990578 0 0 0 227.199006-90.815603 303.230673 303.230673 0 0 0 94.143588-219.39104 302.398677 302.398677 0 0 0-94.143588-219.45504z m-227.199006 467.773954c-141.63138 0-257.022876-111.423513-257.022875-248.254914 0-136.959401 115.327495-248.318914 257.022875-248.318914 141.75938 0 257.086875 111.359513 257.086875 248.318914 0 136.703402-115.327495 248.254914-257.086875 248.254914z m509.62977 429.63012a485.821875 485.821875 0 0 0-48.063789-152.191334 498.30182 498.30182 0 0 0-92.671595-126.847445 32.959856 32.959856 0 0 0-45.503801-0.639997 30.335867 30.335867 0 0 0-0.639997 43.839808 424.574142 424.574142 0 0 1 122.943462 244.222932c2.23999 15.487932 15.99993 26.751883 31.871861 26.751883 1.407994 0 2.879987 0 4.287981-0.192a31.359863 31.359863 0 0 0 27.775878-34.943847z m0 0" fill="#d1d1d4" p-id="2259"></path>
                                </svg>
                            </mu-avatar>
                        </mu-list-item-action>
                        <mu-list-item-content>
                            <mu-list-item-title>Photos</mu-list-item-title>
                            <mu-list-item-sub-title @click="toggle($event)">
                                <div class="subHeader">
                                    <div class="">
                                        Jan 9, 2014
                                    </div>
                                    <mu-icon class="toggle-icon" size="18" :value="open?'keyboard_arrow_down':'keyboard_arrow_up'" color="#8e918e"></mu-icon>
                                </div>
                            </mu-list-item-sub-title>
                        </mu-list-item-content>
                        <mu-list-item-action>
                            <mu-badge content="在线" color="#10bda8"></mu-badge>
                        </mu-list-item-action>
                    </mu-list-item>
                    <transition name="fade">
                        <p v-if="open" class="inforAll">小火柴的蓝色理想</p>
                    </transition>
                </div>
            </mu-load-more>
        </div>
    </mu-list>  
</template>

<script>
export default {
    data() {
        return {
            open: false,
            loading: false,
            num : 20 ,
        }
    },
    methods: {
        toggle(event){
            console.log(event)
            this.open = !this.open
        },
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

<style scoped lang="less">
    .mu-list{
        height: 100%;
        width: 100%;
        overflow: hidden;
        .mu-sub-header{
            color: #d1d1d4;
            font-size: 1rem;
            font-weight: 700;
            text-align: left;
        }
        .listBox{
            width:100%;
            height: 96%;
            overflow-y: auto;
            overflow-x: hidden;
            .mu-item-content{
                color: #d1d1d4;
                .mu-item-sub-title{
                    color: #d1d1d4;
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
        .inforAll{
            color: #d1d1d4;
            text-align: left;
            margin: 0 0 0 4.5625rem;
        }
        .fade-enter-active {transition: all .5s ease;}
        .fade-leave-active {transition: all .5s cubic-bezier(1.0, 0.5, 0.8, 1.0);}
        .fade-enter, .fade-leave-to{transform: translateX(5px);opacity: 0;}
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