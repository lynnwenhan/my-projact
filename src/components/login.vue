<template>
  <div class="contions">
    <div class="registerBox">
      <Form ref="formInline" :model="formInline" :rules="ruleInline">
        <div class="text-center margin-big padding-big-top">
          <h1>后台管理中心</h1>
        </div>
        <FormItem prop="user" class="fromGrunp">
          <Input type="text" v-model="formInline.user" placeholder="请输入账号" class="input_box">
            <Icon type="person" slot="prepend"></Icon>
          </Input>
        </FormItem>
        <FormItem prop="password" class="fromGrunp">
          <Input
            type="password"
            v-model="formInline.password"
            placeholder="请输入密码"
            class="input_box"
          >
            <Icon type="locked" slot="prepend"></Icon>
          </Input>
        </FormItem>
        <FormItem class="fromGrunp">
          <Button type="primary" @click="handleSubmit('formInline')" class="btn_submint">登录</Button>
        </FormItem>
      </Form>
    </div>
    <router-view></router-view>
  </div>  
</template>
<script>
export default {
  name: 'vlogin',
  data() {
    return {
      formInline: {
        user: "",
        password: ""
      },
      ruleInline: {
        user: [
          {
            required: true,
            message: "请输入正确的账号！",
            trigger: "blur"
          }
        ],
        password: [
          {
            required: true,
            message: "请输入正确的密码！",
            trigger: "blur"
          },
          {
            type: "string",
            min: 6,
            message: "密码长度不能少于6位!",
            trigger: "blur"
          }
        ]
      }      
    };
  },
  methods: {
    handleSubmit(name) {
      this.$refs[name].validate(valid => {
        if (valid) {
          this.$Message.success("登录成功!");

          this.testUser();
          //判断当前的路由是否是目标路由
          /* this.$router.push({ path: 'vmain' }) */
          this.$goRoute('/vmain')
        } else {
          this.$Message.error("Fail!");
        }
      });
    },

    //验证账号密码
    testUser() {
    /*   this.$ajax({
        method: "post",
        url: this.GLOBAL.BASE_URL,
        data: {
          name: "wise",
          info: "wrong"
        },
        success(result){
          console.log("123")
        }
      }); */
    }
  }
};
</script>

<style scoped>
 @import "login.min.css";
</style>

