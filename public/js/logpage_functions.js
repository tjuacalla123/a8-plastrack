$(document).ready(function(){
  console.log("ready");
  
  
  setTimeout(function() {
    $(".all-tips").slideUp();
  }, 20000);
  
  // go to additem page
  $("#additem").click(function() {
    window.location.replace("/additem");
  });
  
  // submit and move move data to log done
  $(".recycling-bin, #secondary-submit").click(function() {
    if ($(".divider").length == 0) {
      alert("You haven't logged anything yet")
      return;
    }
    var submit_log = confirm("Log your plastics?");
    if (submit_log) {
      sessionStorage.removeItem("countItems");
      var logCount = [];
      $(".divider").each(function(){
        var plastic = $(this).data("plasticObject");
        if (plastic != "undefined") {
          logCount.push(plastic);
        }  
      });
      
      sessionStorage.setItem("logged", JSON.stringify(logCount));
      
      var date = moment().format("DD/MM/YYYY");
      if (localStorage.getItem("data") == null) {
        var data = {}
        if (data[moment(date, "DD/MM/YYYY")] == undefined) {
          data[moment(date, "DD/MM/YYYY")] = [logCount];
        }
        else {
          data[moment(date, "DD/MM/YYYY")].push(logCount);
        }
        localStorage.setItem("data", JSON.stringify(data));
      }
      else {  
        var dataExist = JSON.parse(localStorage.getItem("data"));
        if (dataExist[moment(date, "DD/MM/YYYY")] == undefined) {
          dataExist[moment(date, "DD/MM/YYYY")] = [logCount];
        }
        else {
          dataExist[moment(date, "DD/MM/YYYY")].push(logCount);
        }
        localStorage.setItem("data", JSON.stringify(dataExist));
      }
      window.location.replace("/logdone");
    }
    
  })
  
  
  // prevent enter on search
  $(document).ready(function() {
  $(window).keydown(function(e){
    if(event.keyCode == 13) {
      e.preventDefault();
      return false;
      }
    });
  });
  
  // search function/filter
  $(".search-bar").keydown(function() {
    var namePlastic;
    var namePlasticSpaces;
    var filter = $(this).val().toUpperCase();
    $(".single-plastic").each(function(index) {
      namePlastic = $(this).find("p").get(0).innerHTML;
      namePlasticSpaces = namePlastic.replace(/-/g, ' ');
      if (namePlasticSpaces.toUpperCase().indexOf(filter) > -1) {
        $(this).css("display", "");
      } else {
        $(this).css("display", "none");
      }
    });
  })
  
  // toggle delete button, disables dragging function
  $('#deleteitem').click( function() {
    $(".single-plastic").toggleClass("deleteable");
    if ($(document).find(".deleteable").length > 0) {
      $(".single-plastic").draggable({disabled: true});
    }
    else {
      $(".single-plastic").draggable({disabled: false});
    }
  })
  
  // delete a plastic type
  $(document).on("click", ".deleteable", function() {
    var deleteIt = confirm("Delete Plastic Type?");
    if (deleteIt) {
      var plastic = $(this).data("plasticObject");
      $(this).remove();
      var plasticTypes = JSON.parse(sessionStorage.getItem("plastic-types"));
      for (i in plasticTypes) {
        if (equalPlastics(plastic, plasticTypes[i])) {
          delete plasticTypes[i];
        }
      }
      plasticTypes = plasticTypes.filter(plastic => plastic !== null);
      sessionStorage.setItem("plastic-types", JSON.stringify(plasticTypes));
    }
  })
  
  
  
  function equalPlastics(this_plastic, other) {
    return (this_plastic.name == other.name && this_plastic.size == other.size && this_plastic.icon == other.icon);
  }
});
