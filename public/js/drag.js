
$(document).ready(function(){
  var totalPlastics = 0;
  var countItems = {};
  
  // shows the undone logged in logpage
  var undo = JSON.parse(sessionStorage.getItem("undo"));
  if (undo != null) {
    for (plastic in undo) {
      var loggedP = undo[plastic];
      var plasticTypes = JSON.parse(sessionStorage.getItem("plastic-types"));
      
      var stillExist = false;
      for (i in plasticTypes) {
        if (plasticTypes[i]["name"] == loggedP["name"] && plasticTypes[i]["size"] == loggedP["size"]) {
          stillExist = true;
          break;
        }
      }
      if (!stillExist) {continue;}
      
      var id = loggedP["name"].replace(/\s/g , "-") + "-" + loggedP["size"];
      var name = loggedP["name"] + " (" + loggedP["size"] + ")";
      var obj = $(".plastic-contents").find("#"+id);
      var stuff = obj.data("plasticObject");
      stuff["count"] = loggedP["count"];
      countItems[id] = loggedP["count"];
      $("#loggedTemp").append("<div class='divider' id="+id+"></div>");
      $("#"+id+".divider").append("<div class='p-text' id="+id+">"+name+"</div>");
      $("#"+id+".divider").append("<div class='p-num' id="+id+">"+countItems[id]+"</div>");
      $("#"+id+".divider").append("<div class='cross' id="+id+">"+ "&#9747;" + "</div>");
      $("#"+id+".divider").data("plasticObject", stuff);
      totalPlastics += loggedP["count"];
    }
  $(".totals").find("#total-plastic").html(totalPlastics);
  $(".contents").css("visibility", "visible");
  sessionStorage.removeItem("undo");
  }
  
  
  
  sessionStorage.setItem("countItems", JSON.stringify(countItems));
  
  
  // removes a log group, on() is for elements that are appended after page loads.
   $(document).on("click", ".cross", function() {
    var names = $(this).parent().find(".p-text").attr('id');
    var count = +$(this).parent().find(".p-num").text();
    var tempCount = JSON.parse(sessionStorage.getItem('countItems'))
    if (count == 1) {
      $(this).parent().remove();
    } else {
      $("#"+names+".p-num").html(tempCount[names]-1);
     var plasticData = $("#"+names+".divider").data("plasticObject");
      plasticData["count"] -= 1; 
      $("#"+names+".divider").data("plasticObject", plasticData); 
    }
    
    totalPlastics = totalPlastics-1;
    $(".totals").find("#total-plastic").html(totalPlastics);
    tempCount[names] = tempCount[names]-1;
    sessionStorage.setItem("countItems", JSON.stringify(tempCount));
  });
  
  // drag and drop
  $(function() { 
      
      $( ".single-plastic" ).draggable({
          appendTo: $("#homepage"),
          helper: "clone",
          revert:  function(dropped) {
              var dropped = dropped && dropped[0].id == "droppable";
              return !dropped;
           } 
       }).each(function() {
           var top = $(this).position().top;
           var left = $(this).position().left;
           $(this).data('orgTop', top);
           $(this).data('orgLeft', left);
      }); 
  
       $(".recycling-bin").droppable({
          activeClass: 'ui-state-hover',
          hoverClass: 'ui-state-active',
          drop: function(event, ui) {
              var draggable = ui.draggable;
              var tempCount = JSON.parse(sessionStorage.getItem('countItems'))
              if (tempCount == null) {
                tempCount = {};
              }
              $(".contents").css("visibility", "visible");
              ui.helper.fadeOut();
              var id = draggable.attr("id");
              var name =  draggable.find("p")[0].innerHTML;
              if (id in tempCount) {
                tempCount[id] += 1;
              }
              else {
                tempCount[id] = 1;
              }
              
              sessionStorage.setItem("countItems", JSON.stringify(tempCount));    
              $(this).addClass('ui-state-highlight').find('.tip2').html(name + ' has been added to the bin!');
              
              if($("#loggedTemp").find("#"+id).length == 0) {
                $("#loggedTemp").append("<div class='divider' id="+id+"></div>");
                $("#"+id+".divider").append("<div class='p-text' id="+id+">"+name+"</div>");
                $("#"+id+".divider").append("<div class='p-num' id="+id+">"+tempCount[id]+"</div>");
                $("#"+id+".divider").append("<div class='cross' id="+id+">"+ "&#9747;" + "</div>");
                
                var plasticData = draggable.data("plasticObject");
                plasticData["count"] = 1;
              }
              else {
                $("#"+id+".p-num").html(tempCount[id]);
                var plasticData = $("#"+id+".divider").data("plasticObject");
                plasticData["count"] += 1;
                
              }
              $("#"+id+".divider").data("plasticObject", plasticData);
              totalPlastics++;
              $(".totals").find("#total-plastic").html(totalPlastics);
          },
  
      });
  });
  
  
})
 
