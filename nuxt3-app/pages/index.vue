<!-- ここがTodoのページ -->

<template>
    <main>
        <h1>Todo App</h1>
        <TaskBox :isDone="true" taskTitle="ToDo Test"></TaskBox>
    </main>
</template>

<script>
export default {
    name: 'Home',
}
</script>

<style src="./index.css" scoped></style>