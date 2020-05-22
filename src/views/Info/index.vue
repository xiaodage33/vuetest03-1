<template>
    <div>
        <el-form :inline="true" class="demo-form-inline">
            <el-row :gutter="5">  <!--间距-->
                <el-col :span="4" >
                    <el-form-item label="类型:">
                        <el-select v-model="value" placeholder="请选择" style="width:120px;">
                            <el-option
                                    v-for="item in options"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value" >
                            </el-option>
                        </el-select>

                    </el-form-item>
                </el-col>
                <el-col :span="10">
                    <el-form-item label="日期："  >
                        <el-date-picker
                                v-model="value2"
                                type="datetimerange"
                                start-placeholder="开始日期"
                                end-placeholder="结束日期"
                                :default-time="['00:00:00', '23:59:59']" style="width:400px;">
                        </el-date-picker>

                    </el-form-item>
                </el-col>

                <el-col :span="4">
                    <el-form-item label="关键字：">
                        <el-select v-model="search_key" style="width:90px;">
                            <el-option v-for="item in searchOption" :key="item.value" :value="item.value" :label="item.label" ></el-option>
                        </el-select>
                    </el-form-item>
                </el-col>
                <el-col :span="4">
                    <el-input v-model="search_keyWork" placeholder="请输入内容"> </el-input>
                </el-col>
                <el-col :span="1">
                    <el-button type="danger" style="border:1px solid #a1a1a1;padding: 10px 10px;
">搜索 </el-button>
                </el-col>
                <el-col :span="1">
                    <el-button type="danger" style="border:1px solid #a1a1a1;padding: 10px 10px; margin: 0px 4px;" >新增 </el-button>
                </el-col>

            </el-row>

        </el-form>
    </div>
</template>

<script>
    import {reactive,ref} from '@vue/composition-api';
    export default {
        name:'infoIndex',
        setup(props) {
            const options = reactive([{
                value: '1',
                label: '国际信息'
            }, {
                value: '2',
                label: '国内信息'
            }, {
                value: '3',
                label: '行业信息'
            }]);
            //搜索关键字
            const searchOption = reactive([{value: "id",label:"ID"},
                {value:"title",label:"标题"},
            ])

            const value = ref('');
            const value2= ref('id');
            const search_keyWork = ref('');

            return {
                options,
                value,
                value2,
                searchOption,
                search_keyWork
            }
        }
    }
</script>

<style lang="scss" scoped>
.el-submenu  .el-menu-item.is-active {background-color: #1313f5;}
 .bc-gray{
     background-color: red;
     height: 20px;
 }
.bc-red{
    background-color: blue;
    height:20px;
}







</style>