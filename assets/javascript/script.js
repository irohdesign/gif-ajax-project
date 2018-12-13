// api key = IEIzfujY4UXYx3Sd4jarElMDtOPjQNnx
var searchword = "Ryan Gosling";
var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + searchword + "&api_key=IEIzfujY4UXYx3Sd4jarElMDtOPjQNnx&limit=5"

// array of strings for topics
var topics = ["history", "epidemics", "parks and recreation", "the office", "greys anatomy", "simplynailogical"];

for (var i = 0; i < topics.length; i++) {
    // need to empty div so we don't get repeat buttons on every click

    // create button for each topic
    var topicBtn = $("<button>");
    $(topicBtn).text(topics[i]);
    $("#button-container").append(topicBtn);
}

// $(document).on("click", function () {
//     // $.ajax({
//     //     url: queryURL,
//     //     method: "GET"
//     // }).then(function(response) {
//     //     console.log(response);
//     // })

//     //loop to create buttons for topics array
    
    
// })