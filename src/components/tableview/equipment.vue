<template>
  <div>
    <Table
      :border="showBorder"
      :stripe="showStripe"
      :show-header="showHeader"
      :height="fixedHeader ? 250 : ''"
      :size="tableSize"
      :data="tableData3"
      :columns="tableColumns3"
    ></Table>
  </div>
</template>
<script>
export default {
  name:'vequpment',
  data() {
    return {
      tableData3: [
        {
          name: "400万全局",
          age: 'DS-CA-400DR',
          address:1,
          date: "2016-10-03"
        },
        {
          name: "400万全局",
          age: 'DS-CA-400F',
          address: 1,
          date: "2016-10-01"
        },
        {
          name: "400万人脸",
          age: 'DS-CA-225B',
          address: 1,
          date: "2016-10-02"
        },
        {
          name: "400万微卡口",
          age: 'DS-CA-400C',
          address: 1,
          date: "2016-10-04"
        },
        {
          name: "黑光球机",
          age: 'DS-CA-225B',
          address: 1,
          date: "2016-10-03"
        },
        {
          name: "400万微卡口",
          age: 'DS-CA-225B',
          address:1,
          date: "2016-10-01"
        },
        {
          name: "400万微卡口",
          age: 'DS-CA-400C',
          address: 1,
          date: "2016-10-02"
        },
        {
          name: "400万全局",
          age: 'DS-CA-400C',
          address: 1,
          date: "2016-10-04"
        }
      ],
      showBorder: true,
      showStripe: true,
      showHeader: true,
      showIndex: true,
      showCheckbox: true,
      fixedHeader: false,
      tableSize: "small"
    };
  },
  computed: {
    tableColumns3() {
      let columns = [];
      if (this.showCheckbox) {
        columns.push({
          type: "selection",
          width: 60,
          align: "center"
        });
      }
      if (this.showIndex) {
        columns.push({
          type: "index",
          width: 60,
          align: "center"
        });
      }
      columns.push({
        title: "Date",
        key: "date",
        sortable: true
      });
      columns.push({
        title: "品名",
        key: "name"
      });
      columns.push({
        title: "型号",
        key: "age",
        sortable: true,
        filters: [
          {
            label: "DS-CA-400C",
            value: 1
          },
          {
            label: "DS-CA-225B",
            value: 2
          }
        ],
        filterMultiple: false,
        filterMethod(value, row) {
          if (value === 1) {
            return row.age =="DS-CA-400C";
          } else if (value === 2) {
            return row.age =="DS-CA-225B";
          }
        }
      });
      columns.push({
        title: "数量",
        key: "address",
        filters: [
          {
            label: "1",
            value: "1"
          },
          {
            label: "2",
            value: "2"
          },
          {
            label: "3",
            value: "3"
          }
        ],
        filterMethod(value, row) {
          return row.address.indexOf(value) > -1;
        }
      });
      return columns;
    }
  }
};
</script>
