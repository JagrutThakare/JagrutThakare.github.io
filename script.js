<script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyBMfbR0vfHZUPMQn0indNGbr0k55pg9qdQ",
    authDomain: "testserieswala-1a032.firebaseapp.com",
    projectId: "testserieswala-1a032",
    storageBucket: "testserieswala-1a032.appspot.com",
    messagingSenderId: "1049302703661",
    appId: "1:1049302703661:web:23ad7b29180e7cf37f62a4",
    measurementId: "G-FK70CYLV2F"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
</script>
