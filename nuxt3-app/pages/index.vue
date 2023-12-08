<!-- ここがTodoのページ -->

<template>
    <main>
        <h1>Todo App</h1>
        <NuxtLink to="/ComponentTest">ComponentTest</NuxtLink>
        <NuxtLink to="/Login">ログイン</NuxtLink>
        <NuxtLink to="/Logout">ログアウト</NuxtLink>
        <NuxtLink to="/Auth">新規登録</NuxtLink>
    </main>
</template>

<script>
export default {
    name: 'Home',
}
</script>

<style src="./index.css" scoped></style>