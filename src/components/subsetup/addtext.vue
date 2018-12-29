<!--  -->
<template>
  <div>
    <Card style="width:100%; margin-bottom:20px;" dis-hover>
      <p slot="title">
        <Icon type="ios-compose-outline"></Icon>修改图片
      </p>
      <Form :model="formItem" :label-width="150">
        <FormItem label="标题:" width="500">
          <Input v-model="formItem.input" placeholder="请输入标题"></Input>
        </FormItem>
        <FormItem label="RUL:">
          <Input v-model="formItem.input" placeholder="请输入图片地址"></Input>
        </FormItem>
        <FormItem label="图片上传:">
          <Upload multiple type="drag" action="//jsonplaceholder.typicode.com/posts/">
            <div style="padding: 20px 0">
              <Icon type="ios-cloud-upload" size="52" style="color: #3399ff"></Icon>
              <p>拖拽文件到此处或点击上传！</p>
            </div>
          </Upload>
        </FormItem>
        <FormItem label="描述:">
          <Input
            v-model="formItem.textarea"
            type="textarea"
            :autosize="{minRows: 5,maxRows: 7}"
            placeholder="说点什么吧..."
          ></Input>
        </FormItem>
        <FormItem>
          <Button type="primary" icon="checkmark-round" style="width:200px;">提交</Button>
        </FormItem>
      </Form>
    </Card>
  </div>
</template>

<script>
export default {
  name: "vaddtext",
  data() {
    return {
      formItem: {
        input: "",
        textarea: ""
      }
    };
  },

  methods: {}
};
</script>
<style scoped>
.ivu-input-wrapper{
     width: 550px;
}
.ivu-upload{
    width: 550px;
}
</style>