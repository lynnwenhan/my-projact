<!--  -->
<template>
  <div>
    <Tabs>
      <TabPane label="设备信息" icon="pie-graph">
          <vequpment></vequpment>
      </TabPane>
      <TabPane label="变更记录" icon="clipboard">
          <vrecode></vrecode>
      </TabPane>
    </Tabs>
  </div>
</template>

<script>
import vequpment from './equipment'
import vrecode from './record'
export default { 
  name: "vtabsivew",
  data() {
    return {};
  },

  methods: {},
  components:{
      vequpment,
      vrecode
  }
};
</script>
<style scoped>
</style>