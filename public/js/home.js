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
		/*(user){
		if (user.displayName !== null){
			var address = user.displayName;
			console.log(address);
		} else{
			console.log("not signed in with facebook")
			var address = user.email;
		}
		$( ".demo-stuff").append(address);
		}*/
	});


var dataImage = localStorage.getItem('img');
if (dataImage !== null) {
bannerImg = document.getElementById('profilePic');
bannerImg.src = "data:image/" + dataImage;
} else {
bannerImg = document.getElementById('profilePic');
bannerImg.src = "/assets/userpic_placeholder.png";
}