<template>
    <div :class="['StateTag', !isDone ? 'todo' : 'done']"></div>
</template>

<script>
export default {
    name: "StateTag",
    props: {
        isDone: {
            type: Boolean,
            required: true,
        }
    }
}
</script>

<style src="./index.css" scoped></style>