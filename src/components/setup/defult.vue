
<template>
  <div>
    <Card style="width:100%; margin-bottom:20px;" dis-hover>
      <p slot="title">
        <Icon type="compose"></Icon>网站信息
      </p>
      <Table :columns="columns" :data="data10" border></Table>
    </Card>
    <Card style="width:100%; margin-bottom:20px;">
      <p slot="title">
        <Icon type="compose"></Icon>访问概况
      </p>
      <Table :columns="columns1" :data="data11" border></Table>
    </Card>
  </div>
</template>

<script>
export default {
  name: "vdefult",
  data() {
    return {
       columns:[
           {
               title: '名称',
               key: 'name'
               
           },
           {
              title: '参数',
              key: 'cont'
           },
       ],
       data10:[
           {
               name:'网站名称',
               cont:'西安“雪亮工程”门户网站'
           },
           {
               name:'系统参数',
               cont:'xaxlgc V1.0.0 已是最新版本'
           },
           {
               name:'操作系统',
               cont:'Windows XP (SP2)'
           },
           {
               name:'PHP | Mysql',
               cont:'Apache/2.2.17 (Win32) PHP/5.3.3'
           },
           {
               name:'版权所有',
               cont:'西安“雪亮工程”办公室'
           },
       ],
       columns1:[
           {
               title: '日期',
               key: 'data'
               
           },
           {
              title: 'PV',
              key: 'PV'
           },
           {
              title: '访客',
              key: 'FK'
           },
           {
              title: 'IP',
              key: 'IP'
           },
           {
              title: '次数',
              key: 'CS'
           },
       ],
       data11:[
           {
               data:'今日',
               PV:'115',
               FK:'120',
               IP:'119',
               CS:'104'
           },
           {
               data:'昨日',
               PV:'115',
               FK:'120',
               IP:'119',
               CS:'104'
           },
           {
               data:'前日',
               PV:'114',
               FK:'102',
               IP:'111',
               CS:'98'
           },
       ]

    };
  },
  methods: {}
};
</script>
<style scoped>

</style>