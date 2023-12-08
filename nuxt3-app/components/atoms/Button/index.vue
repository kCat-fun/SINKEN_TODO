<template>
  <button @click="onClick">{{ text }}</button>
</template>
  
<script>
export default {
  props: {
    text: String
  },
  methods: {
    onClick() {
      this.$emit('click');
    }
  }
};
</script>