$(document).ready(function() {
  var plasticData = JSON.parse(sessionStorage.getItem("logged"));
  var plasticObjects = JSON.parse(sessionStorage.getItem("plastic-types"));
  
  
  var plastic;
  var totalSmall = 0;
  var totalMedium = 0;
  var totalLarge = 0;
  var totalCount = 0;
  var id = 0;
  for (i in plasticData) {
    plastic = plasticData[i]
    var count = plastic["count"]
    totalCount += count;
    if (plastic["size"] == "small") {
      totalSmall += count;
    }
    else if (plastic["size"] == "medium") {
      totalMedium += count;
    }
    else if (plastic["size"] == "large") {
      totalLarge += count;  
    }
    var name = plastic["name"];
    var size = plastic["size"];
    $(".list-plastics").append("<div class='divider' id="+id+"></div>");
    $("#"+id+".divider").append("<div class='p-text' id="+id+">"+name+" ("+size+")"+"</div>");
    $("#"+id+".divider").append("<div class='p-num' id="+id+">"+count+"</div>");
    id++;
  }
  
  $(".large").html(totalLarge);
  $(".medium").html(totalMedium);
  $(".smalls").html(totalSmall);
  $(".total-logged").html(totalCount);
  sessionStorage.removeItem("logged");
  
  
  // calculates total size of localStorage, limit is 5mb.
  var allStrings = '';
  for(var key in window.localStorage){
    if(window.localStorage.hasOwnProperty(key)){
      allStrings += window.localStorage[key];
    }
  }
  console.log(allStrings ? 3 + ((allStrings.length*16)/(8*1024)) + ' KB' : 'Empty (0 KB)');
})
