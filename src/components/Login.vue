<template>
  <div id="app">
    <a-form size="small" :form="form" :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }" @submit="handleSubmit">
      <a-form-item label="用户名" placeholder="please enter your account">
        <a-input :maxLength="15" v-model="loginJSON.username">
          <a-icon slot="prefix" type="user"/>
        </a-input>
      </a-form-item>
      <a-form-item label="密码">
        <a-input
          type="password"
          v-model="loginJSON.password"
          :maxLength="15"
          placeholder="Please enter your secret"
          @change="handleSelectChange"
        >
          <a-icon slot="prefix" type="lock"/>
        </a-input>
      </a-form-item>
      <a-form-item :wrapper-col="{ span: 12, offset: 5 }">
        <a-button type="primary" html-type="submit">
          Submit
        </a-button>
      </a-form-item>
    </a-form>
    <hr>
    <a-form-model :model="regJson" :label-col="labelCol" :wrapper-col="wrapperCol">
      <a-form-model-item label="Activity name">
        <a-input v-model="regJson.username"/>
      </a-form-model-item>
      <a-form-model-item label="Activity name">
        <a-input v-model="regJson.password"/>
      </a-form-model-item>
      <a-form-model-item label="Activity name">
        <a-input v-model="regJson.portrait"/>
      </a-form-model-item>
      <a-form-model-item label="Activity name">
        <a-select v-model="regJson.type">
          <a-select-option :value="0">普通用户</a-select-option>
          <a-select-option :value="1">个体户</a-select-option>
        </a-select>
      </a-form-model-item>
      <a-form-model-item label="Activity name">
        <a-select v-model="regJson.sex">
          <a-select-option :value="0">男</a-select-option>
          <a-select-option :value="1">女</a-select-option>
        </a-select>
      </a-form-model-item>
      <a-form-model-item label="Activity name">
        <a-input v-model="regJson.address"/>
      </a-form-model-item>
      <a-form-model-item label="Activity name">
        <a-input v-model="regJson.email"/>
      </a-form-model-item>
      <a-button style="margin-left: 300px;" @click="handleRegUser">注册</a-button>
    </a-form-model>
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
      regJson: {
        username: undefined,
        password: undefined,
        portrait: undefined,
        type: undefined,
        sex: undefined,
        address: undefined,
        email: undefined,
      }
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
