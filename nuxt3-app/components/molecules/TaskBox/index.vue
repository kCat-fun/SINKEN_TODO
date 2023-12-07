<template>
    <div class="TaskBox">
        <MoveToggle class="MoveToggle" />
        <StateTag :isDone=isDone />
        <div class="taskTitle">{{ taskTitle }}</div>
    </div>
</template>

<script>
export default {
    name: 'TaskBox',
    props: {
        isDone {
            type: Boolean,
            required: true,
        },
        taskTitle: {
            type: String,
            required: true,
        }
    }
}
</script>

<style src="./index.css" scoped></style>