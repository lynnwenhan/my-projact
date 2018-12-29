<template>
   <Card style="width:100%; margin-bottom:20px;" dis-hover>
    <p slot="title">
        <i class="fa fa-key"></i>修改管理员密码
    </p>
    <Form ref="formCustom" :model="formCustom" :rules="ruleCustom" :label-width="100">
        <FormItem label="原始密码" prop="passold">
            <Input type="password" v-model="formCustom.passold"></Input>
        </FormItem>
        <FormItem label="新密码" prop="passwd">
            <Input type="password" v-model="formCustom.passwd"></Input>
        </FormItem>
        <FormItem label="确认新密码" prop="passwdCheck">
            <Input type="password" v-model="formCustom.passwdCheck"></Input>
        </FormItem>
        <FormItem>
            <Button type="primary" @click="handleSubmit('formCustom')">确认修改</Button>
            <Button type="ghost" @click="handleReset('formCustom')" style="margin-left: 8px">全部重置</Button>
        </FormItem>
    </Form>
    </Card> 
</template>
<script>
    export default {
        name:'vinfo',
        data () {
            const validatePass = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('新密码不能为空！'));
                } else {
                    if (this.formCustom.passwdCheck !== '') {
                        // 对第二个密码框单独验证
                        this.$refs.formCustom.validateField('passwdCheck');
                    }
                    callback();
                }
            };
            const validatePassCheck = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('再次输入新密码！'));
                } else if (value !== this.formCustom.passwd) {
                    callback(new Error('两次密码不一致!'));
                } else {
                    callback();
                }
            };
            const validateAge = (rule, value, callback) => {
                if (!value) {
                    return callback(new Error('密码不能为空！'));
                }
                // 模拟异步验证效果
                setTimeout(() => {
                    if (value.length<6) {
                        callback(new Error('密码长度不能小于6位！'));
                    }
                }, 1000);
            };
            
            return {
                formCustom: {
                    passwd: '',
                    passwdCheck: '',
                    passold: ''
                },
                ruleCustom: {
                    passwd: [
                        { validator: validatePass, trigger: 'blur' }
                    ],
                    passwdCheck: [
                        { validator: validatePassCheck, trigger: 'blur' }
                    ],
                    passold: [
                        { validator: validateAge, trigger: 'blur' }
                    ]
                }
            }
        },
        methods: {
            handleSubmit (name) {
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        this.$Message.success('Success!');
                    } else {
                        this.$Message.error('Fail!');
                    }
                })
            },
            handleReset (name) {
                this.$refs[name].resetFields();
            }
        }
    }
</script>

<style scoped>
  .ivu-input-wrapper{
      width: 230px;
  }
</style>