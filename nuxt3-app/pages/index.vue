<!-- ここがTodoのページ -->

<template>
    <main>
        <h1>Todo App</h1>
        <p>{{ count }}</p>
    </main>
</template>

<script>
export default {
    name: 'Home',
    data() {
        return {
            count: 0
        };
    },
    mounted() {
        // RealtimeDatabaseの更新を検知
        this.$fire.database.ref('count').on('value', (snapshot) => {
            this.count = snapshot.val();
        })
    },
    methods: {
        // RealtimeDatabaseを更新
        increment() {
            this.$fire.database.ref('count').set(
                ++this.count
            );
        }
    }
}
</script>

<style src="./index.css" scoped></style>