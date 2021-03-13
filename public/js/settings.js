'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$(".integrate").click(function(e) {
		alert("Sorry, this functionality has not been implemented yet.");
	});

	$("#save-btn").click(function(e) {
		alert("Sorry, this functionality has not been implemented yet.");
	});
	// Add any additional listeners here
	// example: $("#div-id").click(functionToCall);
}

$(document).ready(function() {
/*
    var readURL = function(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();

            reader.onload = function (e) {
                $('.profile-pic').attr('src', e.target.result);
            }
    
            reader.readAsDataURL(input.files[0]);
        }
    }
    
		$('.new_Btn').bind("click" , function () {
		        $('#html_btn').click();
		});

		$('#html_btn').change(function(){
		    //trim removes whitespace
		    if( $.trim($('#html_btn').val()) != "" ) $('.new_Btn').addClass('selected');
		        else $('.new_Btn').removeClass('selected'); 
		        readURL(this);
		});
		*/

	if(localStorage.img) { 
		$('#bannerImg').attr('src', localStorage.img);
		}
		function readURL(input) {
	  	if (input.files && input.files[0]) {
	    var reader = new FileReader();

	    reader.onload = function(e) {
	    localStorage.setItem('img', e.target.result);
	      $('#bannerImg').attr('src', reader.result);
	    }
	    reader.readAsDataURL(input.files[0]);
	  }
	}

	$(".file-upload").change(function() {
	  readURL(this);
	});

	$(".upload-button").on('click', function() {
	  $(".file-upload").click();
	});

});
