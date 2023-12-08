<template>
    <p v-if="message" class="error-message">{{ message }}</p>
</template>
  
<script>
export default {
    props: {
        message: String
    }
};
</script>

<style src="./index.css" scoped></style>