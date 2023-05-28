// import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-app.js";
// import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-auth.js";



// const firebaseConfig = {
//   apiKey: "AIzaSyBJ7Y3Ymzywl2rU432n4_6l0YvKYFCv--c",
//   authDomain: "signup-8866e.firebaseapp.com",
//   projectId: "signup-8866e",
//   storageBucket: "signup-8866e.appspot.com",
//   messagingSenderId: "571998979833",
//   appId: "1:571998979833:web:3dbb833c681ba49fe9c428"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const auth= getAuth(app);





document.getElementById('changetosign').addEventListener('click',(e)=>{
    e.preventDefault();
    document.getElementById('signup').style.display="inline";
    document.getElementById('login').style.display="none";
})
document.getElementById('changetolog').addEventListener('click',(e)=>{
    e.preventDefault();
    document.getElementById('signup').style.display="none";
    document.getElementById('login').style.display="inline";
})

// document.getElementById('changetosign').addEventListener('click', (e)=>{
//     const loginEmail=document.getElementById("login-email");
// })