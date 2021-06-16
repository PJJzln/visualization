<template>
    <div class="sideMenu">
        <header>
            <mu-button fab @click="isCollapse = !isCollapse" color="primary">
                <div style="width: 50%;height: 100%;display: flex;justify-content: center;align-items: center;margin: 0 12%;">
                    <svg t="1612170426684" class="icon" 
                        viewBox="0 0 1256 1024" 
                        version="1.1" 
                        xmlns="http://www.w3.org/2000/svg" 
                        p-id="1181">
                        <path d="M49.588224 883.816448" p-id="1182" fill="#e0560c"></path>
                        <path d="M1139.531776 883.816448" p-id="1183" fill="#e0560c"></path>
                        <path d="M86.939648 862.977024" p-id="1184" fill="#e0560c"></path>
                        <path d="M538.459136 960.381952c109.876224-153.544704 223.55968-289.842176 308.03968-385.787904 49.87392-56.639488 96.715776-108.155904 141.549568-154.500096 40.576-41.945088 80.805888-80.405504 119.478272-116.59264 65.92-61.693952 142.984192-130.034688 191.446016-159.30368l-61.891584-82.050048c-89.732096 56.139776-176.10752 116.103168-242.799616 162.18112-38.863872 26.855424-74.928128 52.667392-108.915712 77.252608-33.668096 24.356864-68.429824 51.106816-105.081856 79.166464-63.633408 48.712704-145.388544 114.194432-224.555008 181.860352L357.07904 374.989824 123.885568 558.770176 538.459136 960.381952z" p-id="1185" fill="#e0560c"></path>
                        <path d="M1335.92064 862.977024" p-id="1186" fill="#e0560c"></path>
                    </svg>
                </div>
            </mu-button>
        </header>
        <div class="nav mu-primary-color" v-if="isCollapse">
            <mu-slide-left-transition>
                <mu-bottom-nav shift>
                    <mu-bottom-nav-item title="人员信息表" icon="person_add_alt_1" :to="{path:'/user_table'}" class="mu-secondary-text-color"></mu-bottom-nav-item>
                    <mu-bottom-nav-item title="地图展示" icon="add_location_alt" :to="{path:'/location_map'}" class="mu-secondary-text-color"></mu-bottom-nav-item>
                    <mu-bottom-nav-item title="可视化数据展示" icon="view_in_ar" :to="{path:'/chart_table'}" class="mu-secondary-text-color"></mu-bottom-nav-item>
                    <mu-bottom-nav-item title="Favorites" icon="list_alt" class="mu-secondary-text-color"></mu-bottom-nav-item>
                    <mu-bottom-nav-item title="Nearby" icon="grading" class="mu-secondary-text-color"></mu-bottom-nav-item>
                    <mu-bottom-nav-item title="Nearby" icon="add_chart" class="mu-secondary-text-color"></mu-bottom-nav-item>
                    <mu-bottom-nav-item title="Nearby" icon="insert_invitation" class="mu-secondary-text-color"></mu-bottom-nav-item>
                    <mu-bottom-nav-item title="Nearby" icon="lightbulb" class="mu-secondary-text-color"></mu-bottom-nav-item>
                    <div class="mu-bottom-item mu-secondary-text-color turnlight" @click="changeTheme(turnon)">
                        <mu-icon :value="iconName"></mu-icon>
                    </div>
                </mu-bottom-nav>
            </mu-slide-left-transition>
        </div>
    </div>
</template>

<script>
import theme from 'muse-ui/lib/theme'
export default {
    data() {
      return {
        isCollapse: true,
        iconName : 'wb_sunny',
        turnon : 'false'
      };
    },
    methods: {
        handleOpen(key, keyPath) {
            console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
            console.log(key, keyPath);
        },
        handleShow(){
            this.isCollapse = !this.isCollapse
        },
        changeTheme(turnon){
            if(turnon){
                this.iconName = 'brightness_2'
                this.turnon = !this.turnon
                theme.add('bright', {
                    primary: '#fff !important',
                    secondary: '#2a2b3d !important',
                    success: '#4caf50',
                    warning: '#ffeb3b',
                    info: '#fff',
                    text: {
                        primary: '#383b4e',
                        orange: "#dc4a0d",
                        secondary: 'rgba(255, 255, 255, 0.7)',
                        alternate: '#424242',
                        disabled: 'rgba(255, 255, 255, 0.3)',
                        hint: '#dc4a0d' // 提示文字颜色
                    },
                    background: {
                        paper: '#424242',
                        chip: '#383b4e',
                        default: '#f4f6f8'
                    }
                }, 'light');
                theme.use('bright')
            }else{
                this.turnon = !this.turnon
                this.iconName = 'wb_sunny'
                theme.use('teal')
            }
        }
    }
}
</script>

<style scoped lang="less">
    .sideMenu{
        width: 100%;
        height: 100%;
        overflow: hidden;
    }
    header{
        /deep/.mu-fab-button{
            width: 100%;
            height: 60px;
            border-radius: 0;
        }
    }
    .nav{
        height: 100%;
    }
    /deep/.mu-bottom-nav{
        background: transparent;
    }
    /deep/.mu-bottom-nav-shift-wrapper{
        flex-wrap: wrap;
        background: transparent;
    }
    /deep/.mu-ripple-wrapper{
        display: none;
    }
    /deep/.mu-bottom-item-active.is-shift{
        color: #dc4a0d;
    }
    /deep/.mu-bottom-nav-shift .mu-bottom-item{
        height: 4.375rem;
    }
    .nav{
        position: relative;
    }
    .turnlight{
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        top: 740px;
        .material-icons{
            font-size: 16px;
        }
    }
</style>