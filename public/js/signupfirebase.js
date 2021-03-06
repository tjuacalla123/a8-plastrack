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
	
	
	function signUp(){
		
		var email = document.getElementById("email");
		var password = document.getElementById("password");
		var password2 = document.getElementById("password2");
		if (password = password2){
		const promise = auth.createUserWithEmailAndPassword(email.value, password.value);
		promise.catch(e => alert(e.message));
		
		alert("Signed Up");} else {
		alert("passwords do not match");
		}
	}
	
	
	
	function signIn(){
		
		var email = document.getElementById("email");
		var password = document.getElementById("password");
		
		const promise = auth.signInWithEmailAndPassword(email.value, password.value);
		promise.catch(e => alert(e.message));
	}
	
	
	function signOut(){
		auth.signOut();
		alert("Signed Out");
		
	}
	
	
	
	auth.onAuthStateChanged(function(user){
		
		if(user){
			
			var email = user.email;
			alert("Welcome user " + email);
			
			//Take user to a different or home page

			//is signed in
			  console.log("redirect")
  			window.location.href = "/homepage";
			
		}else{
			
			//alert("No Active User");
			//no user is signed in
		}
		
	});
	


var provider = new firebase.auth.FacebookAuthProvider();
firebase.auth()
  .getRedirectResult()
  .then((result) => {
    if (result.credential) {
      /** @type {firebase.auth.OAuthCredential} */
      var credential = result.credential;

      // This gives you a Facebook Access Token. You can use it to access the Facebook API.
      var token = credential.accessToken;
      // ...
    }
    // The signed-in user info.
    var user = result.user;
  }).catch((error) => {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
  });