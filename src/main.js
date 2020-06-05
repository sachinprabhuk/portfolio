import App from "./App.svelte";

import firebase from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyDOisXd2B_TMGGCGAWIjLNWIN-01-5EB_w",
    authDomain: "my-svelte-portfolio.firebaseapp.com",
    databaseURL: "https://my-svelte-portfolio.firebaseio.com",
    projectId: "my-svelte-portfolio",
    storageBucket: "my-svelte-portfolio.appspot.com",
    messagingSenderId: "586753414365",
    appId: "1:586753414365:web:1533fdeaf1c9eedf593734",
    measurementId: "G-47RFFD6PW5",
};
firebase.initializeApp(firebaseConfig);

const app = new App({
    target: document.body,
});

export default app;
