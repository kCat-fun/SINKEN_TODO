<!-- ここがTodoのページ -->

<template>
    <main>
        <h1>Todo App</h1>
    </main>
</template>

<script>
// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

export default {
    name: 'Home',
    data() {
        return {
            count: 0
        };
    },
    mounted() {
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
        const db = getFirestore(app);

        // Get a list of cities from your database
        async function getCities(db) {
            const citiesCol = collection(db, 'cities');
            const citySnapshot = await getDocs(citiesCol);
            const cityList = citySnapshot.docs.map(doc => doc.data());
            return cityList;
        }

        console.log(db);
    },
}
</script>

<style src="./index.css" scoped></style>