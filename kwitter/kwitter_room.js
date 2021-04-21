var firebaseConfig = {
      apiKey: "AIzaSyBgKQA6PnhV-B_tuQjWOAoU-zTkUq1IDpE",
      authDomain: "kwitter-df57a.firebaseapp.com",
      databaseURL: "https://kwitter-df57a-default-rtdb.firebaseio.com",
      projectId: "kwitter-df57a",
      storageBucket: "kwitter-df57a.appspot.com",
      messagingSenderId: "1082168358661",
      appId: "1:1082168358661:web:51e27d99bb08ff8cdce96c"
};
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome" + user_name + "!";

function addRoom() {
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose: "Adding Room Name"
      });
      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";
}

function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  console.log("room_name", Room_names);
                  row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)'>#" + Room_names + "</div><hr>"
                  document.getElementById("output").innerHTML += row;
            });
      });
}
getData();

function redirectToRoomName(name) {
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function logout(){
      window.location="index.html";
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
}