$(document).ready(function(){
  console.log("ready");
  
  $("#create-plastic").click(function(){
    addPlastics();
    
  })
  
  $(".add-pic").click(function(){
    displayIcons();
  })
  
  $(".plastic-list i").click(function (){
    var icon = this.outerHTML;
    $(".camera").empty();
    $(".camera").append(icon);
  })
  

  // default plastic types, add here for more default plastic types
  var defaultPlastics = ["<i class='bi bi-cup'></i>", "<i class='bi bi-bag'></i>", 
  "<i class='bi bi-cup-straw'></i>", "<i class='bi bi-cup-fill'></i>"];
  var defaultNames = ["Plastic Cup", "Plastic Bag", "Soda cup", "Coffee"];
  var defaultSizes = "medium";
  if (sessionStorage.getItem("plastic-types") == null || JSON.parse(sessionStorage.getItem("plastic-types")).length < defaultNames.length) {
    var defaultList = [];
    for (var i = 0; i < 4; i++) {
      var plastic = new Plastic(defaultNames[i], defaultSizes, defaultPlastics[i]);
      defaultList.push(plastic);
      var serializedPlastic = JSON.stringify(defaultList);
      sessionStorage.setItem("plastic-types", serializedPlastic);
    }
  }  
  
  
  // add all the plasticTypes, including the ones that the user created 
  var nameofPlastic;
  var plasticTypes = JSON.parse(sessionStorage.getItem("plastic-types"));
  if (plasticTypes != null) {
    for (var i = 0; i < Object.keys(plasticTypes).length; i++) {
      nameofPlastic = plasticTypes[i]["name"].replace(/\s/g , "-");
      var id = nameofPlastic + "-" + plasticTypes[i]["size"];
      var icon = plasticTypes[i]["icon"];
      var size = plasticTypes[i]["size"];
    
      var singlePlastic = $("<div>", {"id": id, "class": "single-plastic"});
      singlePlastic.html(icon);
      singlePlastic.data("plasticObject", plasticTypes[i]);
      var parPlastic = $("<p>", {"id": nameofPlastic});
      parPlastic.html(plasticTypes[i]["name"] + " (" + size + ")");

      $(".plastic-contents").prepend(singlePlastic);
      $("#"+ id +".single-plastic").append(parPlastic);
    }
  }
});




function displayIcons() {
  $(".icon-list").toggle("fast");
}


function addPlastics() {
  var plasticSize = $("#choose-boxes option:selected").val();
  var plasticName = $("#plastic-name").val();
  var plasticIcon = $(".camera").get(0).innerHTML;
  var plasticList = [];
  if ($.trim(plasticName) == '') {
    alert('Please give the plastic a name');
  }
  else if (!plasticName.match("^[A-Za-z0-9]+$")) {
    alert('Remove special characters in name (spaces included)');
  }
  else if (plasticSize == "...") {
    alert('Please pick a size');
  }
  else {
    plasticTypes = JSON.parse(sessionStorage.getItem("plastic-types"));
    var plastic = new Plastic(plasticName, plasticSize, plasticIcon);
    if (plasticTypes != null ){
      for (i in plasticTypes) {
        if (plasticTypes[i]["name"] == plasticName && plasticTypes[i]["size"] == plasticSize) {
          alert('Plastic Type already exists');
          return;
        }
      }
      plasticTypes.push(plastic);
      sessionStorage.setItem("plastic-types", JSON.stringify(plasticTypes));
    }    
    else {
      plasticList.push(plastic);
      var serializedPlastic = JSON.stringify(plasticList);
      sessionStorage.setItem("plastic-types", serializedPlastic);
    }
    alert('Created!');
    window.location.replace("/logpage");
  }
  return;
}


class Plastic {
  constructor(name, size, icon) {
    this.name = name;
    this.size = size;
    this.icon = icon;
  }
}
