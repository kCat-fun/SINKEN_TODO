<template>
    <div class="MoveToggle">
        <div v-for="i in 3" class="circleCol">
            <div v-for="j in 2" class="circle"></div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "MoveToggle",
    }
</script>

<style src="./index.css" scoped></style>