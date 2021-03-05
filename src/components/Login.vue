<template>
  <div id="app">

    <hr>

  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      labelCol: {span: 4},
      wrapperCol: {span: 14},
      formLayout: 'horizontal',
      form: this.$form.createForm(this, {name: 'coordinated'}),
      loginJSON: {
        username: undefined,
        password: undefined
      },
    };
  },
  methods: {
    handleRegUser() {

    },
    handleSubmit(e) {
      //在方法里 使用数据得加 this
      if (this.loginJSON.password === undefined || this.loginJSON.username === undefined) {
        return;
      }
      //条件满足 发送请求
      let form = new FormData();
      form.append("username", this.loginJSON.username)
      form.append("password", this.loginJSON.password)
      this.$axios.post("user/login", form).then(res => { //lambda表达式
        if (res.isValid) {
          this.$message.success(res.data.msg);
          //转到index页面
          this.$router.replace("/index")
        }
      })
    },
    handleSelectChange(value) {
      console.log(value);
      this.form.setFieldsValue({
        note: `Hi, ${value === 'male' ? 'man' : 'lady'}!`,
      });
    },
  },
};
</script>

<style scoped>

</style>
