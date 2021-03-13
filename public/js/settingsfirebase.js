   // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
   var firebaseConfig = {
    apiKey: "AIzaSyD4nlJvHCHDVT7cuDIp-vQh3oK26ddrSwA",
    authDomain: "a8-plastrack-login.firebaseapp.com",
    projectId: "a8-plastrack-login",
    storageBucket: "a8-plastrack-login.appspot.com",
    messagingSenderId: "335182447635",
    appId: "1:335182447635:web:ce6ac0467a2448ee80ebe6"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

	const auth = firebase.auth();
	
		
	
	auth.onAuthStateChanged(function(user){
		
		if(user){
		
			 //if (typeof user.displayName !== 'undefined') {
   				//var name = user.displayName;
			//} else {var name = "Fake Name";}
			//$('.displayName').append(name);

			if (user.displayName !== null) {
   			console.log("Signed in through facebook");
   			var name = user.displayName;
   			 $( "#username" ).append(name);
			} else {	var email = user.email;
			//$( ".demo-stuff" ).append(email);
			 //document.getElementById('username').innerHTML = email;
			 $( "#username" ).append(email);
			 $("#newPasswordId").show();
			  console.log("Not signed in through facebook");
			}


		} else{
			console.log("logged out");
			 window.location.href = "/";
		}

	});
	
	function signUp(){
		
		var email = document.getElementById("email");
		var password = document.getElementById("password");
		
		const promise = auth.createUserWithEmailAndPassword(email.value, password.value);
		promise.catch(e => alert(e.message));
		
		alert("Signed Up");
	}
	
	function signIn(){
		
		var email = document.getElementById("email");
		var password = document.getElementById("password");
		
		const promise = auth.signInWithEmailAndPassword(email.value, password.value);
		promise.catch(e => alert(e.message));
		alert("Signed In");

	}
	
	
	function signOut(){
		auth.signOut();
		 window.location.href = "/";
	}



function changePass() {
var user = firebase.auth().currentUser;	
var userProvidedPassword = document.getElementById("password").value;
var credential = firebase.auth.EmailAuthProvider.credential(user.email, userProvidedPassword);
// Prompt the user to re-provide their sign-in credentials
user.reauthenticateWithCredential(credential).then(function() {

  	//var newPassword = getASecureRandomPassword();
  	var newPassword = document.getElementById("newPassword").value;
  	var newPassword2 = document.getElementById("newPassword2").value;
  	console.log("testing1");
  	if (newPassword == newPassword2){
		user.updatePassword(newPassword).then(function() {
			alert("Password updated for " + user.email);
			console.log("testing2");
			 $("#myModal").modal('hide');
		}).catch(function(error) {
	  	// An error happened.
		});
	} else {
		alert("New passwords do not match");
	}
}).catch(function(error) {
  alert("Could not authenticate current password.");
});

}

