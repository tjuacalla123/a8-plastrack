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
			var email = user.email;
			//$( ".demo-stuff" ).append(email);
			 //document.getElementById('username').innerHTML = email;
			 $( "#username" ).append(email);
			 //if (typeof user.displayName !== 'undefined') {
   				//var name = user.displayName;
			//} else {var name = "Fake Name";}
			//$('.displayName').append(name);
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


