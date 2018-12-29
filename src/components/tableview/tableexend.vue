<template>
  <div>
    <Table :columns="columns8" :data="data7" size="small" ref="table" border >
      <template slot-scope="{ row }" slot="name">
        <strong>{{ row.name }}</strong>
      </template>
      <template slot-scope="{ row, index }" slot="action">
        <Button type="primary" size="small" style="margin-right: 5px" @click="show(index)">查看</Button>
      </template>
    </Table>
    <Modal v-model="modal11" fullscreen title="设备详情页" width="1000">
      <div>
        <vtabsivew></vtabsivew>
      </div>
    </Modal>
  </div>
</template>
<script>
import vtabsivew from "./tabsivew"
import expandRow from "./detail"
export default {
  name: "vtableexend",
  data() {
    return {
      modal11: false,
      columns8: [
        {
          type: "expand",
          width: 50,
          render: (h, params) => {
            return h(expandRow, {
              props: {
                row: params.row
              }
            });
          }
        },
        {
          title: "序号",
          key: "name",
        //   fixed: "left",
          width: 100,
          align: "center"
        },
        {
          title: "点位编号",
          key: "show",
          width: 150,
          sortable: true,
          align: "center"
        },
        {
          title: "单位工程",
          key: "weak",
          width: 250,
          align: "center",
          sortable: true
        },
        {
          title: "监控场景",
          key: "signin",
          width: 150,
          align: "center",
          sortable: true
        },
        {
          title: "建设方式",
          key: "click",
          width: 150,
          align: "center",
          sortable: true
        },
        {
          title: "摄像机数量",
          key: "active",
          width: 150,
          align: "center",
          sortable: true
        },
        {
          title: "点位说明",
          key: "day7",
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
            ]);
          }
        }
      ],
      data7: [
        {
          name: "Name1",
          fav: 0,
          show: "BQ-BQ-001",
          weak: "公园东路与东城大道交汇口",
          signin: "小路口",
          click: "借杆",
          active: 1438,
          day7: 274,
          job: "Data engineer",
          interest: "badminton",
          birthday: "1991-05-14",
          book: "Steve Jobs",
          movie: "The Prestige",
          music: "I Cry"
        },
        {
          name: "Name2",
          fav: 0,
          show: "BQ-BQ-002",
          weak: "东城大道与世博大道十字路口",
          signin: "小路口",
          click: "借杆",
          active: 8470,
          day7: 8172
        },
        {
          name: "Name3",
          fav: 0,
          show: "BQ-BQ-002",
          weak: "豁口十字路口1",
          signin: "大路口",
          click: "借壁",
          active: 16,
          day7: 2249
        },
        {
          name: "Name4",
          fav: 0,
          show: "BQ-BQ-003",
          weak: "豁口十字路口2",
          signin: "大路口",
          click: "借壁",
          active: 7668,
          day7: 1547
        },
        {
          name: "Name5",
          fav: 0,
          show: "BQ-BQ-004",
          weak: "东城大道与紫霞三路丁字路口",
          signin: "路段",
          click: "新建",
          active: 9256,
          day7: 209
        },
        {
          name: "Name6",
          fav: 0,
          show: "BQ-BQ-005",
          weak: "朝阳社区南大门门口",
          signin: "路段",
          click: "新建",
          active: 2909,
          day7: 452
        },
        {
          name: "Name7",
          fav: 0,
          show: "BQ-BQ-006",
          weak: "朝阳社区西门旁",
          signin: "大路口",
          click: "借杆",
          active: 1002,
          day7: 8701
        },
        {
          name: "Name8",
          fav: 0,
          show: "BQ-BQ-007",
          weak: "  熊家湾丁字路口",
          signin: "小路口",
          click: "借壁",
          active: 6801,
          day7: 6364
        },
        {
          name: "Name9",
          fav: 0,
          show: "BQ-BQ-008",
          weak: "湿地公园东门内",
          signin: "大路口",
          click: "新建",
          active: 1971,
          day7: 7596
        },
        {
          name: "Name10",
          fav: 0,
          show: "BQ-BQ-009",
          weak: "方家村十字路口",
          signin: "路段",
          click: "借壁",
          active: 7405,
          day7: 8710
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
      this.modal11 = true;
    }
  },
  components: {
    vtabsivew,
    expandRow
  }
};
</script>

<style lang="" scope>
</style>