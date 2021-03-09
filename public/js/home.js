   // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyDlmWHH0CcUff5CvpQIOTd7auxrpkxB75Y",
    authDomain: "plastrack-login-form.firebaseapp.com",
    projectId: "plastrack-login-form",
    storageBucket: "plastrack-login-form.appspot.com",
    messagingSenderId: "388777565381",
    appId: "1:388777565381:web:6f201b617746455b9124ac",
    measurementId: "G-5PH8K66169"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

	const auth = firebase.auth();
	
	
	auth.onAuthStateChanged(function(user){
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
		*/
	});

	