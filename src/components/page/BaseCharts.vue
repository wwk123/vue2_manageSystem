<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item><i class="el-icon-date"></i> 数据显示方式</el-breadcrumb-item>
                <el-breadcrumb-item>基础图表</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="plugins-tips">
            <!--vue-schart：vue.js封装sChart.js的图表组件。
            访问地址：<a href="https://github.com/lin-xin/vue-schart" target="_blank">vue-schart</a>-->
        </div>
        <div class="content-title">柱状图</div>
        <schart canvasId="bar" width="500" height="400" :data="data1" type="bar" :options="options1"></schart>
        <div class="content-title">折线图</div>
        <schart canvasId="line" width="500" height="400" :data="data1" type="line" :options="options1"></schart>
        <div class="content-title">饼状图</div>
        <schart canvasId="pie" width="500" height="400" :data="data2" type="pie" :options="options2"></schart>
        <div class="content-title">环形图</div>
        <schart canvasId="ring" width="500" height="400" :data="data2" type="ring" :options="options2"></schart>
    </div>
</template>

<script>
    import Schart from 'vue-schart';
    export default {
        components: {
            Schart
        },
        data: () => ({
            data1:[
                {name:'周日',value:21},
                {name:'周一',value:24},
                {name:'周二',value:25},
                {name:'周三',value:26},
                {name:'周四',value:28},
                {name:'周五',value:27},
                {name:'周六',value:24}
            ],
            data2 : [
                {name:'周日',value:21},
                {name:'周一',value:24},
                {name:'周二',value:25},
                {name:'周三',value:26},
                {name:'周四',value:28},
                {name:'周五',value:27},
                {name:'周六',value:24}
            ],
            options1: {
                title: '一周内温度数据: 单位^（摄氏度）',
                bgColor: '#829dda',
                titleColor: '#ffffff',
                fillColor: '#72f6ff',
                axisColor: '#eeeeee',
                contentColor: '#bbbbbb'
            },
            options2: {
                title: '一周内湿度数据：单位%（百分比）',
                bgColor: '#829dca',
                titleColor: '#ffffff',
                legendColor: '#ffffff'
            }
        })
    }
</script>

<style scoped>
    .content-title{
        clear: both;
        font-weight: 400;
        line-height: 50px;
        margin: 10px 0;
        font-size: 22px;
        color: #1f2f3d;
    }
    
</style>