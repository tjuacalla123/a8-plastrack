/*const open = document.getElementById('open');
const modal_container = document.getElementById('modal_container');
const close = document.getElementById('close');

open.addEventListener("click", () => {
	modal_container.classList.add('show');
});

close.addEventListener("click", () => {
	modal_container.classList.remove('show');
});
*/
/*

function handleData()
{
    var form_data = new FormData(document.querySelector("form"));
    if(!form_data.has("langs[]"))
    {
        document.getElementById("chk_option_error").style.visibility = "visible";
      return false;      
    }
    else
    {
        document.getElementById("chk_option_error").style.visibility = "hidden";
      return true;
    }

}*/



$('#button_submit').click(function() {
    var check_box_values = parseInt($('#myForm [type="checkbox"]:checked').map(function () {
        return this.value;
    }).get());
    if (check_box_values > 0){
    console.log(check_box_values);
    $('#share-modal-close').click();
    $('#testing').click(); 
    } else {
      console.log(check_box_values);
    	shakeElement(this);
    	shakeElement2(this);
    }
    var check = Number.isInteger(check_box_values);
    console.log(check); 
    var names = $('#myForm [type="checkbox"]:checked').map(function(){ return this.name; });
    if (parseInt(names.length) > 1) {
     $( "#confirm-send-message" ).append(names.get().join(' and ') + ' ?');
    } else {
      $( "#confirm-send-message" ).append(names.get() + ' ?');
    }
});

function confirmSendFunction(){
    $( "#confirm-send-message" ).html("Sent!");
    $( "#close-send" ).html('Close');
    $( "#confirm-send" ).hide();
    $('#exampleModalLong').on('hidden.bs.modal', function (e) {
	    location.reload();
	})
};   

function shakeElement() {
   var l = 6;  

   for( var i = 0; i <= 5; i++ ) {   
     $('#button_submit, :checkbox').animate( { 
         'margin-left': '+=' + ( l = -l ) + 'px',
         'margin-right': '-=' + l + 'px'
      }, 40);  
   }
}


function shakeElement2() {
   var l = 6;  

   for( var i = 0; i <= 5; i++ ) {   
     $('#button_submit, :checkbox').animate( { 
         'margin-right': '+=' + ( l = -l ) + 'px',
         'margin-left': '-=' + l + 'px'
      }, 40);  
   }
}

function viewReportFunction(clicked_id){
  var btnName = (clicked_id).getAttribute("name");
    $( "#exampleModalLongTitle2" ).html('Plastic Log History: ' + btnName);
  $('#testing2').click(); 
};   

