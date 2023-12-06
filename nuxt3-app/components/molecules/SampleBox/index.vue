<template>
    <div id="SampleBox">
        <div class="title-box">
            <slot />
        </div>
        <div class="name-box">
            <div>Name: </div>
            <div>{{ name }}</div>
        </div>
        <div class="tags-box">
            <Sample v-for="tag in tags">{{ tag }}</Sample>
        </div>
    </div>
</template>

<script>
export default {
    name: "SampleBox",
    props: {
        name: {
            type: String,
            required: true,
        },

        tags: {
            type: Array,
            requierd: true,
        }
    }
}
</script>

<style src="./index.css" scoped></style>