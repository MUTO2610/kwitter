const firebaseConfig = {
    apiKey: "AIzaSyDe3mFk4i6hbvch7c-YhNEAaVoRv6b6j_A",
    authDomain: "kwitter-41a68.firebaseapp.com",
    databaseURL: "https://kwitter-41a68-default-rtdb.firebaseio.com",
    projectId: "kwitter-41a68",
    storageBucket: "kwitter-41a68.appspot.com",
    messagingSenderId: "393140751523",
    appId: "1:393140751523:web:5f15772261d096221c4316"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

function addUser(){
    user_name=document.getElementById("user_name").value;
    localStorage.setItem("user_name", user_name);
    window.location="kwitter_room.html";
}