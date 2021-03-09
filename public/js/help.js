$( document ).ready(function() {
    $('.section').each(function() {
        var descDiv = $(this).children('.descriptions');
       descDiv.hide(); 
        var titleDiv = $(this).children('.help-titles'); 
        $(this).click(function(e) {
             descDiv.toggle();
        });
    });
});
