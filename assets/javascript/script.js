// api key = IEIzfujY4UXYx3Sd4jarElMDtOPjQNnx
var searchword = "Ryan Gosling";
var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + searchword + "&api_key=IEIzfujY4UXYx3Sd4jarElMDtOPjQNnx&limit=5"

// array of strings for topics
var topics = ["history", "epidemics", "parks and recreation", "the office", "greys anatomy", "simplynailogical"];


$("#btn").on("click", function () {
    event.preventDefault();

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {
        console.log(response);

        // var userInput = $("#testInput").val();
        var results = response.data;
        console.log(results);

        // topics.push(userInput);

        // for (var i = 0; i < topics.length; i++) {
        //     // need to empty div so we don't get repeat buttons on every click

        //     // create button for each topic
        //     var topicBtn = $("<button>");
        //     $(topicBtn).text(topics[i]);
        //     $("#button-container").append(topicBtn);
        // }

        // grab 10 static gif images and display them
        for (var i = 0; i < results.length; i++) {
            var staticImgURL = results[i].images.original_still.url;
            var imgContainer = $("<img>");
            imgContainer.attr("src", staticImgURL);
            $("#button-container").append(imgContainer);
            // console.log(results[i].type);
        }

        

    })

    //loop to create buttons for topics array
    
    
})