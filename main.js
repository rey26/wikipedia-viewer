//ToDo
// [] Multiple word search
// [] Floating background

$(document).ready(function(){

    $('#searchTerm').keypress(function(e){
        if(e.which==13){
            $("#search").click();
        }     
    });
    search();
});

// when hiting Submit button, function is performed
function search(){
    //gets input
    var searchTerm=$('#searchTerm').val();
    searchTerm=searchTerm.split(" ");
    
    
    // API url plus implemented search input
    var url="https://wikipedia.org/w/api.php?action=opensearch&search="+searchTerm+"&format=json&callback=?";
    $.ajax({
    type:"GET",
        url:url,
        async:false,
        dataType: "json",
        success: function(data){
        //heading console.log(data[1][0]);
        //describtion console.log(data[2][0]);
        //link console.log(data[3][0]);
        $('#output').html('');
        for(var i=0; i<data[1].length; i++){
            $('#output').prepend("<li><a href="+data[3][i] +">"+ data[1][i] +"</a><p>"+data[2][i]+"</p></li>");
            }
            $('#searchTerm').val("");
        },
        error:function(errorMessage){
        alert("Error");
        }
    });
    
};