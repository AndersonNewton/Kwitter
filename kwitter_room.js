
//ADD YOUR FIREBASE LINKS HERE

var firebaseConfig = {
      apiKey: "AIzaSyBiTZWn4hsvtOl62gA0QrqiNvJAmDSj_eY",
      authDomain: "kwitter-f43d4.firebaseapp.com",
      databaseURL: "https://kwitter-f43d4-default-rtdb.firebaseio.com",
      projectId: "kwitter-f43d4",
      storageBucket: "kwitter-f43d4.appspot.com",
      messagingSenderId: "422552516759",
      appId: "1:422552516759:web:84e8083191e67056d251d2"
    };
    
    // Initialize Firebase
 firebase.initializeApp(firebaseConfig);

      user_name = localStorage.getItem("Username");
      document.getElementById("name_display").innerHTML = "Welcome " + user_name;
 
function create_room(){

      room_name = document.getElementById("name_room").value;
      console.log("Fetched the Room Name ", room_name);
      firebase.database().ref("/").child(room_name).update({
            purpose : "create new room"
      });
      console.log("Firebase");

      localStorage.setItem("RoomName", room_name);
      window.location = "kwitter_page.html";

    }

/*

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      
      //End code
      });});}
getData();
*/