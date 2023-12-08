<template>
    <form @submit.prevent="submit">
        <InputField label="アカウント名" id="loginId" type="text" placeholder="アカウント名を入力" :value="loginId"
            @input="loginId = $event" />
        <InputField label="パスワード" id="password" type="password" placeholder="パスワードを入力" :value="password"
            @input="password = $event" />
        <Button text="登録" @click="submit" />
    </form>
</template>
  
<script>
import FormField from '~/components/molecules/InputField/index.vue';
import Button from '~/components/atoms/Button/index.vue';

export default {
    components: {
        FormField,
        Button
    },
    data() {
        return {
            credentials: {
                username: '',
                password: ''
            }
        };
    },
    methods: {
        submit() {
            // 新規登録処理
            this.$emit('submit', this.credentials);
        }
    }
};
</script>

<style src="./index.css"></style>