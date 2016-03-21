$(document).ready(function(){
    $("button").click(function(){
var $table = $('<table/>');
for(var i=0; i<3; i++){
    if (i == 0) {
    $table.append('<tr>' 
                  + '<th>' + 'A and B' + '</th>' +
                  '<th>' + 'A or B' + '</th>' +
                  '<th>' + 'A and (not)B' + '</th>' + 
                  '</tr>');
    }
    $table.append('<tr>' 
                  + '<td>' +  i + '</td>' + 
                  '<td>' +  i + '</td>' +
                  '<td>' +  i + '</td>' +
                  '</tr>');

}
$('#truth_table').append($table);
    });
});
