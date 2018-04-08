$(document).ready(function() {

// modal
    $('select').select();
    $('.modal').modal();
    var elem = document.querySelector('.modal');
    var instance = M.Modal.getInstance(elem);

    $("#add-btn").on("click", function() {
        // $('.modal').modal();
        var newAnswer = {
            name: $("#name").val().trim(),
            photo: $("#photo").val().trim(),
            scores: [$("#q1").val(), $("#q2").val(), $("#q3").val(), $("#q4").val(), $("#q5").val(), $("#q6").val(), $("#q7").val(), $("#q8").val(), $("#q9").val(), $("#q10").val()]
        };
        console.log(newAnswer);
        $.post("/api/new", newAnswer)
            .done(function(data) {
                if(!data){
                   $("#matchInfo").append("<h3>Oh no, you have no match!</h3>"); 
                }
                $("#matchInfo").append("<h4>"+data.answer+"<h4/>");
                $("#matchInfo").append("<h3>"+data.name+"</h3>");
                $("#myInfo").append("<h4>"+newAnswer.answer+ "<h4>");
                $("#myInfo").append("<h3>"+newAnswer.name+"</h3>");
            });
        instance.open();
        // console.log(data);
    });


  });