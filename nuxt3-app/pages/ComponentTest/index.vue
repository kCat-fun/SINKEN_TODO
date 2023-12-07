<template>
    <div id="ComponentTest">
        <Sample>tag</Sample>
        <hr />
        <SampleBox name="未来 太郎" :tags=arr>Title</SampleBox>
        <div class="StateTag">
            <StateTag :isDone="false" />
            <StateTag :isDone="true" />
        </div>
        <hr />
        <MoveToggle />
        <hr />
        <div class="TsakBox">
            <TaskBox :isDone="false" dedline="20yy/mm/dd hh:mm:ss" taskTitle="ToDo Test1"></TaskBox>
            <TaskBox :isDone="true" dedline="20yy/mm/dd hh:mm:ss" taskTitle="ToDo Test2"></TaskBox>
        </div>
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