<template>
    <mu-dialog width="40%" scrollable transition="slide-bottom" :fullscreen='false' :open.sync="openAlert" :esc-press-close="false" :overlay-close="false">
        <mu-appbar color="primary" title="编辑">
            <mu-button slot="right" icon @click="closeAlertDialog">
                <mu-icon value="close"></mu-icon>
            </mu-button>
            <mu-button slot="left" icon @click="handle">
                <mu-icon value="edit"></mu-icon>
            </mu-button>
        </mu-appbar>
        <div style="padding:1.5rem">
            this is a fullscreen dialog
        </div>
    </mu-dialog>
</template>
<script>
export default {
    props: ["open","handleWord"],
    data () {
        return {
            openAlert: false,
        };
    },
    watch:{
        // 监听 addOrUpdateVisible 改变
        open(oldVal,newVal){
            this.openAlert = this.open
        },
    },
    methods:{
        closeAlertDialog(){
          this.$emit('cancle','false');
        },
        handle(){
          this.$emit('handle','zhanglina')
          this.closeAlertDialog()
        },
        
    }
}
</script>
<style lang="less" scoped>
/deep/.mu-dialog-body{
    padding: 0;
    .mu-appbar{
        height: 54px;
        .mu-appbar-title{
            font-size: 1rem;
        }
        .material-icons{
            font-size: 1.25rem;
        }
    }
}
    
</style>