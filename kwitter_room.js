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
    
//ADD YOUR FIREBASE LINKS HERE

user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome "+user_name+"!";

function addRoom()
{
    room_name=document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
        purpose:"adding room name"
    });
    localStorage.setItem("room_name", room_name);
    window.location="kwitter_page.html";

}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("room_name-"+Room_names);
      row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML+=row;
      

      //End code
      });});}
getData();

function redirectToRoomName(name){
    console.log(name);
    localStorage.setItem("room_name",name);
    window.location="kwitter_page.html";
}
