<template>
    <label>{{ text }}</label>
</template>
  
  <script>
  export default {
    props: {
      text: String,
      for: String
    }
  };
  </script>