<template>
  <div>
    <Button v-for="button in buttons" :key="button.text" :text="button.text" @click="button.onClick" />
  </div>
</template>
  
<script>
import Button from '~/components/atoms/Button/index.vue';

export default {
  components: {
    Button
  },
  props: {
    buttons: Array
  }
};
</script>