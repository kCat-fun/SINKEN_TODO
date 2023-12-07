<!-- ここがTodoのページ -->

<template>
    <main>
        <h1>Todo App</h1>
        <NuxtLink to="/ComponentTest">ComponentTest</NuxtLink>
        <NuxtLink to="/Login">Login</NuxtLink>
        <NuxtLink to="/Logout">Logout</NuxtLink>
    </main>
</template>

<script>
export default {
    name: 'Home',
}
</script>

<style src="./index.css" scoped></style>