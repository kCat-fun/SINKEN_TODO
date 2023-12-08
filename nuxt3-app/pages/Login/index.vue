<template>
  <div class="login-page">
    <InputField label="アカウント名" id="loginId" type="text" placeholder="アカウント名を入力" :value="loginId"
      @input="loginId = $event" />
    <InputField label="パスワード" id="password" type="password" placeholder="パスワードを入力" :value="password"
      @input="password = $event" />
    <!-- <ButtonGroup :buttons="[
      { text: 'はい', onClick: () => confirm('yes') },
      { text: 'いいえ', onClick: () => confirm('no') }
    ]" /> -->
    <Button text="ログイン" @click="submitLogin" />
    <br>
    <ErrorMessage :message="errorMessage" />
    <br>
    <Button text="新規登録" @click="Auth" />
  </div>
</template>

<script>
import InputField from '~/components/molecules/InputField/index.vue';
import ButtonGroup from '~/components/molecules/ButtonGroup/index.vue';
import Button from '~/components/atoms/Button/index.vue';
import ErrorMessage from '~/components/atoms/ErrorMessage/index.vue';

export default {
  components: {
    InputField,
    ButtonGroup,
    Button,
    ErrorMessage
  },
  data() {
    return {
      username: '',
      password: '',
      errorMessage: ''
    };
  },
  methods: {
    submitLogin() {
      // ログイン処理
      console.log('ログインID:', this.loginId);
      console.log('パスワード:', this.password);
    },
    displayError(message) {
      //エラーメッセージ処理
      this.errorMessage = message;
    },
    confirm(answer) {
      // はい、いいえの処理
      console.log('選択:', answer);
    },
    Auth() {
      console.log('新規登録');
    }
  }
};
</script>

<style src="./index.css"></style>