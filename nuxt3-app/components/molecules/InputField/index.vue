<template>
  <div>
    <Label :for="id" :text="label" />
    <Input :type="type" :placeholder="placeholder" :value="value" @input="onInput" />
  </div>
</template>
  
<script>
import Label from '~/components/atoms/Label/index.vue';
import Input from '~/components/atoms/Input/index.vue';

export default {
  components: {
    Label,
    Input
  },
  props: {
    label: String,
    id: String,
    type: String,
    placeholder: String,
    value: String
  },
  methods: {
    onInput($event) {
      this.$emit('input', $event.target.value);
    }
  }
};
</script>