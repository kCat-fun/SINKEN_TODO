<template>
    <div>
      <h2>ログアウト</h2>
      <Logout />
    </div>
  </template>
  
  <script>
  import Logout from '~/components/molecules/Logout/index.vue';
  
  export default {
    components: {
      Logout,
    },
    middleware({ store, redirect }) {
      if (!store.$auth.loggedIn) {
        return redirect('/');
      }
    },
  };
  </script>