<template>
    <label :for="for">{{ text }}</label>
</template>
  
  <script>
  export default {
    props: {
      text: String,
      for: String
    }
  };
  </script>