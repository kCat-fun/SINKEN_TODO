<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script>
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { doc, setDoc } from "firebase/firestore"; 
import { collection, addDoc } from "firebase/firestore"; 

function hoge() {

}

export default {
  mounted() {
    // hoge();

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

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    // Initialize Cloud Firestore and get a reference to the service
    const db = getFirestore(app);

    // Add a new document in collection "cities"
    addDoc(collection(db, "users"), {
      name: "hgoe fuga",
      age: 19,
    });
  },
}
</script>