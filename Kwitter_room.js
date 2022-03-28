const firebaseConfig = {
    apiKey: "AIzaSyAuQIUWiugDseabOfRx71ouFZega7U6ghA",
    authDomain: "kwitter-94584.firebaseapp.com",
    databaseURL: "https://kwitter-94584-default-rtdb.firebaseio.com",
    projectId: "kwitter-94584",
    storageBucket: "kwitter-94584.appspot.com",
    messagingSenderId: "904179630008",
    appId: "1:904179630008:web:0f085d5c9fb96b3095194d"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
         Room_names = childKey;
        //Start code
  
        //End code
        });});}
  getData();