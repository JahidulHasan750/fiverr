import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-app.js";
import { getAuth, signInWithEmailAndPassword,createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-auth.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDqqrnBX7l7R7RMCi79LfHAf11wj7R8TR8",
    authDomain: "signup-ff63f.firebaseapp.com",
    projectId: "signup-ff63f",
    storageBucket: "signup-ff63f.appspot.com",
    messagingSenderId: "510078647874",
    appId: "1:510078647874:web:80743042965fffb33fb7db"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth= getAuth(app);

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

document.getElementById('login-btn').addEventListener('click',(e)=>{
    e.preventDefault();
    
    const loginEmail=document.getElementById("loginusername").value;
   
    const loginPassword= document.getElementById("loginpassword").value;
    if(loginEmail=="" || !loginEmail.includes("@")){
      document.getElementById("loginusernameerror").innerHTML="wrong username";
    }
    if(loginPassword.length <6){
      document.getElementById("loginpassworderror").innerHTML="wrong password";
    }

    signInWithEmailAndPassword(auth, loginEmail, loginPassword)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
    document.getElementById("loginusernameerror").innerHTML="";


    
    document.getElementById("loginpassworderror").innerHTML="";


    alert("Log in succesful");
  
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    if(loginPassword.length>5 && loginEmail.includes("@")){
      document.getElementById('loginusernameerror').innerHTML="user doesn't exist";
    }

    alert("Wrong credentials");
   
  });
});
document.getElementById('signup-btn').addEventListener('click',(e)=>{
    e.preventDefault();
    const username=document.getElementById("username").value;
  
    const license=document.getElementById("license").value;
   

    const email=document.getElementById("email").value;
    
    
    const password= document.getElementById("password").value;
   
    if(email=="" || !email.includes("@")){
      document.getElementById("emailerror").innerHTML="wrong email";
    }
   
    if(password.length <6 ){
      document.getElementById("passworderror").innerHTML="password must be at least 6 characters";
    }
   

    createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    document.getElementById("passworderror").innerHTML="";
    document.getElementById('emailerror').innerHTML="";
    // ...
    alert("Account Sign up succesful");
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    if(password.length>5 && email.includes("@")){
      document.getElementById('emailerror').innerHTML="user of this email exists";
    }
    // ..
    alert("Sign up falied");
  });
});

