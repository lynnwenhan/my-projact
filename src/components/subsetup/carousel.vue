<!--  -->
<template>
  <div>
      <Card style="width:100%; margin-bottom:20px;" dis-hover>
      <p slot="title">
        <Icon type="navicon"></Icon>内容列表
      </p>
      <Table border :columns="columns7" :data="data6"></Table>
    </Card>
  </div>
</template>

<script>
import vaddtext from './addtext'
export default {
  name:'vcarousel',
  data () {
    return {
       columns7: [
                    {
                        type: 'index',
                        width: 60,
                        align: 'center',
                        title:'ID'
                    },
                    {
                        title: '名称',
                        key: 'name',
                        align: 'center',
                        width:300
                    },
                    {
                        title: '描述文字',
                        key: 'age'
                    },
                    {
                        title: '图片',
                        key: 'address'
                    },
                    {
                        title: '操作',
                        key: 'action',
                        width: 300,
                        align: 'center',
                        render: (h, params) => {
                            return h('div', [
                                h('Button', {
                                    props: {
                                        type: 'primary',
                                        icon:"ios-compose"
                                       
                                    },
                                    style: {
                                        marginRight: '5px'
                                    },
                                    on: {
                                        click: () => {
                                            this.show(params.index)
                            
                                        }
                                    }
                                }, '修改'),
                                h('Button', {
                                    props: {
                                        type: 'error',
                                        icon:"ios-trash-outline"
                                    },
                                    on: {
                                        click: () => {
                                            this.remove(params.index)
                                        }
                                    }
                                }, '删除')
                            ]);
                        }
                    }
                ],
                data6: [
                    {
                        name: '首页轮播图',
                        age: '图片1 描述...',
                        address: 'New York No. 1 Lake Park'
                    },
                    {
                        name: '首页轮播图',
                        age: 24,
                        address: 'London No. 1 Lake Park'
                    },
                    {
                        name: '首页轮播图',
                        age: 30,
                        address: 'Sydney No. 1 Lake Park'
                    },
                    {
                        name: '首页轮播图',
                        age: 26,
                        address: 'Ottawa No. 2 Lake Park'
                    }
                ]

    };
  },

  methods: {
      show (index) {
                this.$goRoute("/vmain/vcardefult/vaddtext?name=修改图片");
            },
            remove (index) {
                this.data6.splice(index, 1);
            }      
  }
}

</script>
<style scoped>
</style>