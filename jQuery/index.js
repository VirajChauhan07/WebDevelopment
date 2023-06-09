// $("h1").css("color", "red");

// $("h1").addClass("body-title margin-50");

// $("h1").text("Bye");

// $("button").html("<em>Hey</em>")

// $("a").attr("href","https://www.youtube.com")

$("button").click(function() {
    $("h1").css("color", "purple");
})

$("input").keypress(function(event){
    console.log(event.key);
});

$(document).keypress(function(event){
    $("h1").text(event.key);
});