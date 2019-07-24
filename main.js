//ToDo
// [] Multiple word search
// [] Floating background

$(document).ready(function(){

    $(".search > a").click(function(){
        search();
    });

    $('.search > input').keypress(function(e){
        if(e.which==13){
            $(".search > a").click();
        }     
    });

});

// when hiting Submit button, function is performed
function search(){
    //gets input
    var searchTerm = $('.search > input').val();
    if(searchTerm.length < 1){
        return;
    }
    searchTerm=searchTerm.split(" ");
    
    
    // API url plus implemented search input
    var url="https://wikipedia.org/w/api.php?action=opensearch&search="+searchTerm+"&format=json&callback=?";
    $.ajax({
    type:"GET",
        url:url,
        dataType: "json",
        success: function(data){

            $('#output').html('');
            for(var i=0; i<data[1].length; i++){
                $('#output').append("<li><a href="+data[3][i] +">"+ data[1][i] +"</a><p>"+data[2][i]+"</p></li>");
            }
            $('.search > input').val("");
        },
        error:function(errorMessage){
            alert("Error");
        }
    });
    
};