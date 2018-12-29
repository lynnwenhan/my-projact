<template>
  <div>
    <Card style="width:100%; margin-bottom:20px;" dis-hover>
      <p slot="title">
        <i class="fa fa-copy"></i>数据备份
      </p>
      <div>
          <Button type="primary"><i class="fa fa-clone"></i> 数据备份</Button>
          <Button type="error"><i class="fa fa-reply"></i> 数据恢复</Button>
      </div>
    </Card>
  </div>
</template>
<script>
export default {
  name: "vsafety",
  data() {
    return {};
  }
};
</script>