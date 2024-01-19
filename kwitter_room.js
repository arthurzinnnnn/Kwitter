// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA8wfmx3nFllgvlLp1r52iT2quZFQhol6Y",
    authDomain: "kwitter-jose.firebaseapp.com",
    databaseURL: "https://kwitter-jose-default-rtdb.firebaseio.com",
    projectId: "kwitter-jose",
    storageBucket: "kwitter-jose.appspot.com",
    messagingSenderId: "849778617658",
    appId: "1:849778617658:web:38a8e5e9af9276694e7403"
  };

    firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Bem vindo(a) " + user_name + "!";

function addRoom()
    {
    room_name = document.getElementById("room_name").value

    firebase.database().ref("/").child(room_name).update({
    purpose : "adicionando nome da sala"
    });
    
    localStorage.setItem("room_name", room_name);

    window.location = "kwitter_page.html";

}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
    Room_names = childKey;
    console.log("Nome da Sala - " + Room_names);
   row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
   document.getElementById("output").innerHTML += row;
 });
});
}
getData()

function redirectToRoomName(name)
{
    console.log(name);
    localStorage.setItem("room_name", name);
     window.location = "kwitter_page.html"
}

function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "index.html";
}