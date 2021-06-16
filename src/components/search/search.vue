<template>
    <div class="search">
        <mu-text-field v-model="searchValue" placeholder="请输入您要搜索的关键词" icon="search" color="white"></mu-text-field>
    </div>
</template>

<script>
export default {
    data(){
        return{
            searchValue:''
        }
    }
}
</script>

<style scoped lang="less">
    .search{
        display: flex;
        align-items: center;
        .mu-input{
            display: inline-flex;
            margin: 0;
            padding: 0 0 0 56px;
            align-items: center;
            justify-content: center;
            font-size: 14px;
            width: 30%;
            /deep/.mu-input-icon{
                top:13px ;
                color: #8e909d;;
            }
            /deep/.mu-text-field-input{
                color: #8e909d;
            }
            /deep/.mu-input-line{
                background-color: #8e909d;
            }
        }
    }
</style>