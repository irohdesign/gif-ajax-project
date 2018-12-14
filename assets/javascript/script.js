// api key = IEIzfujY4UXYx3Sd4jarElMDtOPjQNnx

// array of strings for topics
var topics = ["parks and rec", "sick", "happy", "the office", "greys anatomy", "crabs"];

// var searchTerm = "cats";

function buttonLoop () {
    $("#button-container").empty();

    for (var i = 0; i < topics.length; i++) {        
        // create button for each topic
        var topicBtn = $("<button>");
        $(topicBtn).text(topics[i]).attr("class", "btn").attr("data-value", topics[i]);
        $("#button-container").append(topicBtn);
    }
}

buttonLoop();

$("#userButtonGen").on("click", function() {
    var userInput = $("#textInput").val();
    var userButton = $("<button>");
    
    userButton.text(userInput);
    topics.push(userInput);
    console.log(topics);
    buttonLoop();
})

        

$(document).on("click", ".btn", function () {
    event.preventDefault();
    $("#images-container").empty();

    var searchTerm = $(this).attr("data-value");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + searchTerm + "&api_key=IEIzfujY4UXYx3Sd4jarElMDtOPjQNnx&limit=10"

    console.log($(this));

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {
        console.log(response);

        var results = response.data;
        console.log(results);
        

        // // grab 10 static gif images and display them
        for (var i = 0; i < results.length; i++) {
            var staticImgURL = results[i].images.original_still.url;
            var animatedURL = results[i].images.original.url;

            var imgContainer = $("<img>");
            imgContainer.attr("src", staticImgURL).attr("state", "still").attr("class", "genImage").attr("animate", animatedURL).attr("stopped", staticImgURL);
            $("#images-container").append(imgContainer);
        }

        $(".genImage").on("click", function() {
        
                    if ($(this).attr("state") === "still") {
                        var grabAnimated = $(this).attr("animate");
                        $(this).attr("src", grabAnimated);
                        $(this).attr("state", "animated");
                        console.log("it's stopped");
                    } else {
                        var grabStatic = $(this).attr("stopped");
                        $(this).attr("src", grabStatic);
                    }
                })

    })

    
    
    
})

// need to listen to the entire document for dynamically-created content

// $(document.body).on("click", ".btn", function() {

// // 

// // 


//   });

