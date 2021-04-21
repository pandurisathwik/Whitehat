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
room_name = localStorage.getItem("room_name");

function getData() {
      firebase.database().ref("/" + room_name).on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  childData = childSnapshot.val();
                  if (childKey != "purpose") {
                        firebase_message_id = childKey;
                        message_data = childData;
                        //Start code

                        //End code
                  }
            });
      });
}
getData();

function send(){
      msg=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
document.getElementById("msg").value="";
}

function logout(){
      window.location="index.html";
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
}