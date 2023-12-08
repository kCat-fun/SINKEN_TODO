<template>
  <div class="login-page">
    <InputField label="ログインID" id="loginId" type="text" placeholder="ログインIDを入力してください" :value="loginId" @input="loginId = $event" />
    <InputField label="パスワード" id="password" type="password" placeholder="パスワードを入力してください" :value="password" @input="password = $event" />
    <!-- <ButtonGroup :buttons="[
      { text: 'はい', onClick: () => confirm('yes') },
      { text: 'いいえ', onClick: () => confirm('no') }
    ]" /> -->
    <Button text="ログイン" @click="submitLogin" />
    <br>
    <Button text="新規登録" @click="AuthenticatorResponse" />
  </div>
</template>

<script>
import InputField from '~/components/molecules/InputField/index.vue';
import ButtonGroup from '~/components/molecules/ButtonGroup/index.vue';
import Button from '~/components/atoms/Button/index.vue';

export default {
  components: {
    InputField,
    ButtonGroup,
    Button
  },
  data() {
    return {
      loginId: '',
      password: ''
    };
  },
  methods: {
    submitLogin() {
      // ログイン処理
      console.log('ログインID:', this.loginId);
      console.log('パスワード:', this.password);
    },
    confirm(answer) {
      // はい、いいえの処理
      console.log('選択:', answer);
    }
  }
};
</script>

<style src="./index.css"></style>