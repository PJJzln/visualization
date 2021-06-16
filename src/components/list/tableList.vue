<template>
    <div class="parentBox">
        <div class="btnBox">
            <mu-button color="orange900">添加用户</mu-button>
            <mu-button flat color="orange900">用户设备</mu-button>
        </div>
        <div class="tableBox">
            <mu-paper :z-depth="1" class="">
                <mu-data-table :loading="true" :columns="columns" :sort.sync="sort" @sort-change="handleSortChange" :data="list.slice(0, 6)" rowClassName="mu-primary-color">
                    <template slot-scope="scope">
                        <td class="is-center mu-secondary-text-color">{{scope.row.name}}</td>
                        <td class="is-center mu-secondary-text-color">{{scope.row.calories}}</td>
                        <td class="is-center mu-secondary-text-color">{{scope.row.fat}}</td>
                        <td class="is-center mu-secondary-text-color">{{scope.row.carbs}}</td>
                        <td class="is-center mu-secondary-text-color">{{scope.row.protein}}</td>
                        <td class="is-center mu-secondary-text-color">{{scope.row.iron}}%</td>
                        <td class="is-center mu-secondary-text-color">
                            <mu-button flat small color="orange900" @click="editAlert">修改</mu-button> | <mu-button flat small color="orange900">删除</mu-button>
                        </td>
                    </template>
                </mu-data-table>
                <mu-flex justify-content="end">
                    <Page :total="40" size="small" />
                </mu-flex>
            </mu-paper>
        </div>handleWord
        <edit :open="openAlert" :handleWord="handleWord" @cancle="closeAlert" @handle="ok"/>
    </div>
</template>
<script>
import { Page } from 'view-design';
import edit from '../../components/edit'
    export default {
        components:{Page,edit},
        data () {
            return {
                current: 1,
                sort: {
                    name: '',
                    order: 'asc'
                },
                columns: [
                    { title: '序列', name: 'name',align: 'center', sortable: true , class:"mu-secondary-text-color"},
                    { title: '用户名', name: 'calories',  align: 'center', sortable: true , class:"mu-secondary-text-color"},
                    { title: '手机号', name: 'fat', align: 'center', sortable: true , class:"mu-secondary-text-color"},
                    { title: '邮箱', name: 'carbs',  align: 'center', sortable: true , class:"mu-secondary-text-color"},
                    { title: '公司', name: 'protein', align: 'center', sortable: true , class:"mu-secondary-text-color"},
                    { title: '行业类型', name: 'iron', align: 'center', sortable: true , class:"mu-secondary-text-color"},
                    { title: '操作', name: 'operation', align: 'center', sortable: true , class:"mu-secondary-text-color"}
                ],
                list: [
                    {
                        name: 'Frozen Yogurt',
                        calories: 159,
                        fat: 6.0,
                        carbs: 24,
                        protein: 4.0,
                        iron: 1
                    },
                    {
                        name: 'Ice cream sandwich',
                        calories: 237,
                        fat: 9.0,
                        carbs: 37,
                        protein: 4.3,
                        iron: 1
                    },
                    {
                        name: 'Eclair',
                        calories: 262,
                        fat: 16.0,
                        carbs: 23,
                        protein: 6.0,
                        iron: 7
                    },
                    {
                        name: 'Cupcake',
                        calories: 305,
                        fat: 3.7,
                        carbs: 67,
                        protein: 4.3,
                        iron: 8
                    },
                    {
                        name: 'Gingerbread',
                        calories: 356,
                        fat: 16.0,
                        carbs: 49,
                        protein: 3.9,
                        iron: 16
                    },
                    {
                        name: 'Jelly bean',
                        calories: 375,
                        fat: 0.0,
                        carbs: 94,
                        protein: 0.0,
                        iron: 0
                    },
                    {
                        name: 'Lollipop',
                        calories: 392,
                        fat: 0.2,
                        carbs: 98,
                        protein: 0,
                        iron: 2
                    },
                    {
                        name: 'Honeycomb',
                        calories: 408,
                        fat: 3.2,
                        carbs: 87,
                        protein: 6.5,
                        iron: 45
                    },
                    {
                        name: 'Donut',
                        calories: 452,
                        fat: 25.0,
                        carbs: 51,
                        protein: 4.9,
                        iron: 22
                    },
                    {
                        name: 'KitKat',
                        calories: 518,
                        fat: 26.0,
                        carbs: 65,
                        protein: 7,
                        iron: 6
                    }
                ],
                openAlert : false ,
                handleWord : 'test'
            };
        },
        methods: {
            handleSortChange ({name, order}) {
                this.list = this.list.sort((a, b) => order === 'asc' ? a[name] - b[name] : b[name] - a[name]);
            },
            editAlert(){
                this.openAlert = true;
            },
            closeAlert(data){
                if(data === 'false'){
                    this.openAlert = false
                }else{
                    this.openAlert = true
                }
            },
            ok(data){
                console.log(data)
            }
        }
    };
</script>
<style lang="less" scoped>
    .parentBox{
        width: 100%;
        height: 100%;
        padding: 1.25rem;
        .btnBox{
            display: flex;
            justify-content: start;
            align-items: center;
            padding: 2.5rem 0 3.75rem 0;
            .mu-flat-button {
                border: 1px solid;
                margin-left: 1.875rem;
            }
        }
        .tableBox{
            width: 100%;
            height: 100%;
            // background: #2a2b3d;
            .mu-paper{
                width: 100%;
                height: 80%;
                background: transparent;
                .mu-table{
                    background: transparent;
                    height: 90%;
                    /deep/th{
                        // color: #d1d1d4;
                        font-size: 0.8125rem;
                        border : none
                    }
                    /deep/.is-hover{
                        background: #97979761 !important;
                    }
                    /deep/ .mu-table-body{
                        border-collapse: separate;
                        border-spacing: 0px 1.25rem;
                        tr{
                            border-radius: 10px;
                            td{
                                font-size: 0.8125rem;
                                border : none ;
                                .mu-flat-button{
                                    min-width: 2.8125rem;
                                }
                            }
                            td:first-child{
                                border-top-left-radius: 10px;
                                border-bottom-left-radius: 10px;
                            }
                            td:last-child{
                                border-top-right-radius: 10px;
                                border-bottom-right-radius: 10px;
                            }
                        }
                    }
                }
            }
            .mu-elevation-1{
                box-shadow: unset
            }
            /deep/.ivu-page-next, /deep/.ivu-page-prev, /deep/.ivu-page-item{
                background: transparent;
            }
            /deep/.ivu-page-item-active{
                background: #e65101;
                border:none ;
                color: #fff
            }
            /deep/.ivu-page-item-active{
                a{  
                    color: #fff !important
                };
            }
        }
    }
</style>