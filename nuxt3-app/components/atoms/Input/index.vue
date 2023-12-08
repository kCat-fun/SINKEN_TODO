<template>
  <input :type="type" placeholder="placeholder" :value="value" @input="onInput" />
</template>
  
<script>
export default {
  props: {
    type: String,
    placeholder: String,
    value: String
  },
  model: {
    prop: 'value',
    event: 'input'
  }
};
</script>