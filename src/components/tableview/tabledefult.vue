<template>
  <div>
    <Table :columns="columns8" :data="data7" size="small" ref="table" border>
      <template slot-scope="{ row }" slot="name">
        <strong>{{ row.name }}</strong>
      </template>
      <template slot-scope="{ row, index }" slot="action">
        <Button type="primary" size="small" style="margin-right: 5px" @click="show(index)">查看</Button>
      </template>
    </Table>
  </div>
</template>
<script>
export default {
  name: "vtabledefult",
  data() {
    return {
      columns8: [
        {
          title: "序号",
          key: "name",
         /*  fixed: "left", */
          width: 80,
          align: "center"
        },
        {
          title: "分项工程",
          key: "show",
          width: 150,
          sortable: true,
          align: "center",
          filters: [
            {
              label: "灞桥区",
              value: 1
            },
            {
              label: "碑林区",
              value: 2
            },
            {
              label: "雁塔区",
              value: 3
            }
          ],
          filterMultiple: false,
          filterMethod(value, row) {
            if (value === 1) {
              return row.show=='灞桥区';
            } else if (value === 2) {
              return row.show =='碑林区';
            }else if(value === 3){
                return row.show =='雁塔区'
            }
          }
        },
        {
          title: "所属街道办",
          key: "weak",
          width: 150,
          sortable: true,
           align: "center",
          filters: [
            {
              label: "灞桥街道办",
              value: 1
            },
            {
              label: "碑林街道办",
              value: 2
            },
            {
              label: "雁塔街道办",
              value: 3
            }
          ],
          filterMultiple: false,
          filterMethod(value, row) {
            if (value === 1) {
              return row.weak=='灞桥街道办';
            } else if (value === 2) {
              return row.weak =='碑林街道办';
            }else if(value === 3){
                return row.weak =='雁塔街道办'
            }
          }
        },
        {
          title: "所属分局",
          key: "signin",
          width: 150,
           align: "center",
          sortable: true
        },
        {
          title: "所属派出所",
          key: "click",
          width: 150,
           align: "center",
          sortable: true
        },
        {
          title: "点位总数",
          key: "active",
          width: 150,
           align: "center",
          sortable: true
        },
        {
          title: "摄像机总数",
          key: "day7",
          width: 150,
           align: "center",
          sortable: true
        },
        {
          title: "场景1",
          key: "day30",
          width: 150,
           align: "center",
          sortable: true
        },
        {
          title: "场景2",
          key: "tomorrow",
          width: 150,
           align: "center",
          sortable: true
        },
        {
          title: "操作",
          slot: "action",
          width: 150,
          align: "center",
          render: (h, params) => {
            return h("div", [
              h(
                "Button",
                {
                  props: {
                    type: "primary",
                    size: "small"
                  },
                  style: {
                    marginRight: "5px"
                  },
                  on: {
                    click: () => {
                      this.show(params.index);
                    }
                  }
                },
                "查看详情"
              )
              /* h('Button', {
                                    props: {
                                        type: 'error',
                                        size: 'small'
                                    },
                                    on: {
                                        click: () => {
                                            this.remove(params.index)
                                        }
                                    }
                                }, 'Delete') */
            ]);
          }
        }
      ],
      data7: [
        {
          name: "1",
          fav: 0,
          show: '灞桥区',
          weak: '灞桥街道办',
          signin: '灞桥分局',
          click: '灞桥派出所',
          active: 1438,
          day7: 274,
          day30: 285,
          tomorrow: 1727
        },
        {
          name: "2",
          fav: 0,
          show: '灞桥区',
          weak: '灞桥街道办',
          signin: '灞桥分局',
          click: '灞桥派出所',
          active: 8470,
          day7: 8172,
          day30: 5197,
          tomorrow: 1684
        },
        {
          name: "3",
          fav: 0,
          show: '灞桥区',
          weak: '灞桥街道办',
          signin: '灞桥分局',
          click: '灞桥派出所',
          active: 16,
          day7: 2249,
          day30: 3450,
          tomorrow: 377
        },
        {
          name: "4",
          fav: 0,
          show: '灞桥区',
          weak: '碑林街道办',
          signin: '雁塔分局',
          click: '雁塔派出所',
          active: 7668,
          day7: 1547,
          day30: 2357,
          tomorrow: 7278
        },
        {
          name: "5",
          fav: 0,
          show: '碑林区',
          weak: '碑林街道办',
          signin: '碑林分局',
          click: '碑林派出所',
          active: 9256,
          day7: 209,
          day30: 3563,
          tomorrow: 8285
        },
        {
          name: "6",
          fav: 0,
          show: '碑林区',
          weak: '碑林街道办',
          signin: '碑林分局',
          click: '碑林派出所',
          active: 2909,
          day7: 4525,
          day30: 6171,
          tomorrow: 1920
        },
        {
          name: "7",
          fav: 0,
          show: '灞桥区',
          weak: '碑林街道办',
          signin: '碑林分局',
          click: '碑林派出所',
          active: 1002,
          day7: 8701,
          day30: 9040,
          tomorrow: 7632
        },
        {
          name: "8",
          fav: 0,
          show: '碑林区',
          weak: '雁塔街道办',
          signin: '雁塔分局',
          click: '雁塔派出所',
          active: 6801,
          day7: 6364,
          day30: 6850,
          tomorrow: 9408
        },
        {
          name: "9",
          fav: 0,
          show: '雁塔区',
          weak: '雁塔街道办',
          signin: '雁塔分局',
          click: '雁塔派出所',
          active: 1971,
          day7: 7596,
          day30: 3546,
          tomorrow: 6641
        },
        {
          name: "10",
          fav: 0,
          show: '雁塔区',
          weak: '雁塔街道办',
          signin: '雁塔分局',
          click: '雁塔派出所',
          active: 7405,
          day7: 8710,
          day30: 5518,
          tomorrow: 428
        }
      ]
    };
  },
  methods: {
    exportData(type) {
      if (type === 1) {
        this.$refs.table.exportCsv({
          filename: "The original data"
        });
      } else if (type === 2) {
        this.$refs.table.exportCsv({
          filename: "Sorting and filtering data",
          original: false
        });
      } else if (type === 3) {
        this.$refs.table.exportCsv({
          filename: "Custom data",
          columns: this.columns8.filter((col, index) => index < 4),
          data: this.data7.filter((data, index) => index < 4)
        });
      }
    },
    show(index) {
      this.$goRoute("/vmain/vtableinfo/vtableexend");
    }
  }
};
</script>
