
  window.fbAsyncInit = function() {
    FB.init({
      appId      : '3708943232515416',
      cookie     : true,
      xfbml      : true,
      version    : '3.2'
    });
      
    FB.AppEvents.logPageView();   
      
  };

  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "https://connect.facebook.net/en_US/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));

function checkLoginState() {
  FB.getLoginStatus(function(response) {
    statusChangeCallback(response);
  });
}


/*
https://plastrack-login-form.firebaseapp.com/__/auth/handler
*/
  /*
  FB.getLoginStatus(function(response) {
    statusChangeCallback(response);
});
*/

/*
{
    status: 'connected',
    authResponse: {
        accessToken: '...',
        expiresIn:'...',
        signedRequest:'...',
        userID:'...'
    }
}
*/