<template>
    <form @submit.prevent="login">
      <label for="username">アカウント名</label>
      <input v-model="username" type="text" id="username" required />
  
      <label for="password">パスワード</label>
      <input v-model="password" type="password" id="password" required />
  
      <button type="submit">ログイン</button>
    </form>
  </template>
  
  <script>
  export default {
    data() {
      return {
        username: '',
        password: '',
      };
    },
    methods: {
      async login() {
        try {
          await this.$auth.loginWith('local', {
            data: {
              username: this.username,
              password: this.password,
            },
          });
        } catch (error) {
          console.error(error);
        }
      },
    },
  };
  </script>