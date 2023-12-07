<template>
    <div id="ComponentTest">
        <Sample>tag</Sample>
        <SampleBox name="未来 太郎" :tags=arr>Title</SampleBox>
        <div class="StateTag">
            <StateTag :isDone="false" />
            <StateTag :isDone="true" />
        </div>
        <MoveToggle />
    </div>
</template>

<script>
export default {
    name: "ComponentTest",
    data: () => {
        return {
            arr: ["tag1", "tag2", "tag3"],
        }
    }
}
</script>

<style src="./index.css"></style>