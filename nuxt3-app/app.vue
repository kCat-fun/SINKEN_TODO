<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script>
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

function hoge() {
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyAaOhW-0kx2TWk_OnaNiKO36ETwU4rtSs4",
    authDomain: "sinken-todo.firebaseapp.com",
    databaseURL: "https://sinken-todo-default-rtdb.firebaseio.com",
    projectId: "sinken-todo",
    storageBucket: "sinken-todo.appspot.com",
    messagingSenderId: "535927454066",
    appId: "1:535927454066:web:29111414f055e66a8005eb",
    measurementId: "G-QCCEPX0FNV"
  };

  const app = initializeApp(firebaseConfig);
  const database = getDatabase(app);
  // ↑ 接続はできた

  // あいたを取れない
  var ref = database.ref('/https://sinken-todo-default-rtdb.firebaseio.com/');
  ref.on("count", (snapshot) => {
    console.log(snapshot.val());
  });
}

export default {
  mounted() {
    hoge();
  },
}
</script>