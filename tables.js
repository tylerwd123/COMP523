$(document).ready(function(){
    $.getJSON("/gamepage/statements", function(data,status,xhr){
        $("body").prepend('<p>' + data['statement3'][0] + ' ' + data['statement3'][1] + ' ' + data['statement3'][2] + ' ' + '</p>');
        $("body").prepend('<p>' + data['statement2'][0] + ' ' + data['statement2'][1] + ' ' + data['statement2'][2] + ' ' + '</p>');
        $("body").prepend('<p>' + data['statement1'][0] + ' ' + data['statement1'][1] + ' ' + data['statement1'][2] + ' ' + '</p>');
        $("#header0").text(data['statement1'][0]);
        // the way we generate the object makes these two unique
        $("#header1").text(data['statement1'][2]);
        var index = 0, i = 4;
        var str = 'statement2';
        var target = data[str][index];
        // better to use enum
        // this should be temporary
        // i is introduced due to redundancy issues
        while(target.localeCompare(data['statement1'][0])==0 || target.localeCompare(data['statement1'][2])==0 && i> 0){
            if(index == 2){
                str = 'statement3';
                index = 0;
            }else{
                index = 2;
            }
            target = data[str][index];
            i--;
        }
        $("#header2").text(target);
        for(i = 0; i < 8; i++){
            $('#truth_table').append("<tr><td class='c0'></td><td class='c1'></td><td class='c2'></td></tr>");
        }
        $('.c0').append("<select class='c0'><option value='none'></option><option value='true'>True</option><option value='false'>False</option></select>");
        $('.c1').append("<select class='c1'><option value='none'></option><option value='true'>True</option><option value='false'>False</option></select>");
        $('.c2').append("<select class='c2'><option value='none'></option><option value='true'>True</option><option value='false'>False</option></select>");
    });
    
    $("#check_filled").click(function(){
        var c0 = 'true';
        var c1 = 'true';
        var c2 = 'true';
        var correct = true;
        for(i = 0; i < 2; i++){
             c1 = 'true';
            for(j = 0; j < 2; j++){
                c2 = 'true';
                for(k = 0; k < 2; k++){            
                    found = false;
                    $("tr").each(function(index, element){
                        if(index > 0 && c0.localeCompare($(this).find("select.c0").val()) == 0 && c1.localeCompare($(this).find("select.c1").val()) == 0 && c2.localeCompare($(this).find("select.c2").val()) == 0){
                            found = true;
                            $(this).addClass("correct");
                            $(this).removeClass("incorrect");
                            // break out of callback
                            return false;
                        }
                
                    });
                    if(found == false){
                        correct = false;
                        //alert("missing value " + c0 + " " + c1  + " " + c2);   
                    }
                    c2 = 'false';
                }
                c1 = 'false';
            }
            c0 = 'false';
        }        
        if(correct){
            // replaces the changeable select menus with static text
            $("tr").each(function(index){
                // skip first row
                if(index > 0){
                    $(this).css("background-color","lightblue");
                    $(this).addClass("correct");
                    $("td").each(function(){
                        $(this).text($(this).find("select").val());
                    });    
                    // add a new column
                    $(this).append("<td></td>");
                }
                if(index == 0){
                    $(this).append("<th> hi </th>")
                }
                
            });
            // remove old button
            $("#check_filled").remove();
            $("body").append("<button id=evaluate_statement>Evaluate Statement</button>");
            
               
        }else{
            $("tr").each(function(index){
               if($(this).hasClass("correct")){
                   $(this).css("background-color", "lightblue");
               } else{
                   // skip coloring on row 1
                   if(index > 0){
                       $(this).css("background-color", "red");
                       $(this).addClass("incorrect");
                   }
               }
            });
        }
    });

});
