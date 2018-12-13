// api key = IEIzfujY4UXYx3Sd4jarElMDtOPjQNnx

// array of strings for topics
var topics = ["history", "sick", "happy", "the office", "greys anatomy", "jennamarbles"];

// var searchTerm = "cats";

for (var i = 0; i < topics.length; i++) {

    // create button for each topic
    var topicBtn = $("<button>");
    $(topicBtn).text(topics[i]).attr("class", "btn").attr("data-value", topics[i]);
    $("#button-container").append(topicBtn);
}


$(".btn").on("click", function () {
    event.preventDefault();

    var searchTerm = $(this).attr("data-value");
    var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + searchTerm + "&api_key=IEIzfujY4UXYx3Sd4jarElMDtOPjQNnx&limit=10"


    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {
        console.log(response);

        var userInput = $("#testInput").val();
        var results = response.data;

        console.log(results);
        topics.push(userInput);

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

    //loop to create buttons for topics array
    
    
})

