var firebaseConfig = {
      apiKey: "AIzaSyDe3mFk4i6hbvch7c-YhNEAaVoRv6b6j_A",
      authDomain: "kwitter-41a68.firebaseapp.com",
      databaseURL: "https://kwitter-41a68-default-rtdb.firebaseio.com",
      projectId: "kwitter-41a68",
      storageBucket: "kwitter-41a68.appspot.com",
      messagingSenderId: "393140751523",
      appId: "1:393140751523:web:5f15772261d096221c4316"
    };
    
    // Initialize Firebase
     firebase.initializeApp(firebaseConfig);

     user_name=localStorage.getItem("user_name");
     room_name=localStorage.getItem("room_name");
//YOUR FIREBASE LINKS

function send(){
      msg=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
            
      });
      document.getElementById("msg").value="";
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}
