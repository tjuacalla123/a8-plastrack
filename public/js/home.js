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
		if (user.displayName !== null){
			var address = user.displayName;
			console.log(address);
		} else{
			console.log("not signed in with facebook")
			var address = user.email;
		}
		$( ".demo-stuff").append(address);
		/*
		if(user){
			
			
			if (typeof user.displayName !== undefined) {
   			var address = user.displayName;
			} else {var address = user.email;}
			//alert("Welcome user " + email);
			//$( "div.demo-stuff" ).html(function() {
		  	//return email;
			//});

			$( ".demo-stuff" ).append(address);
		} else{
		}
		*/}
	});

