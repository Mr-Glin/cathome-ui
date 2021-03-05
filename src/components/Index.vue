<template>
  <div>
    <h1>CatHome Index</h1>
    <div v-if="isShowLogin">
      <a-form size="small" :form="form" :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }" @submit="handleSubmit">
        <a-form-item>
          <a-input
            v-model="loginJSON.username"
            :maxLength="16"
            placeholder="用户名"
          >
            <a-icon slot="prefix" type="user"/>
          </a-input>
        </a-form-item>
        <a-form-item>
          <a-input
            type="password"
            v-model="loginJSON.password"
            :maxLength="16"
            placeholder="请输入登录密码"
            @change="handleSelectChange"
          >
            <a-icon slot="prefix" type="lock"/>
          </a-input>
        </a-form-item>
        <a-form-item :wrapper-col="{ span: 12, offset: 5 }">
          <a-button type="primary" html-type="submit">
            登录
          </a-button>
        </a-form-item>
      </a-form>
    </div>
    <div v-if="!isShowLogin">
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
    <a-button @click="toggleIsShowLogin">切换</a-button>
  </div>
</template>

<script>
export default {
  name: "Index",
  data() {
    return {
      isShowLogin: true,
      regJson: {
        username: undefined,
        password: undefined,
        portrait: undefined,
        type: undefined,
        sex: undefined,
        address: undefined,
        email: undefined,
      },
      labelCol: {span: 4},
      wrapperCol: {span: 14},
      formLayout: 'horizontal',
      form: this.$form.createForm(this, {name: 'coordinated'}),
      loginJSON: {
        username: undefined,
        password: undefined
      },
    }
  },
  methods: {
    toggleIsShowLogin() {
      this.isShowLogin = !this.isShowLogin;
    }
  }
}
</script>

<style scoped>

</style>
