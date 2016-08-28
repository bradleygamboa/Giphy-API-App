$('button').on('click', function() {

    //remove before launching
    console.log('testbutton');
    
    var giphy = $(this).data('giphy');
    //testing what giphy is pulling
    console.log(giphy);
    
    var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + giphy + "&api_key=dc6zaTOxFJmzC&limit=10";
	//testing variable
	console.log (queryURL);
    
    $.ajax({
            url: queryURL,
            method: 'GET'
        })
        //done function
        .done(function(response) {

            //console logs results remove when done testing
            console.log(response)

            //pulls response from data key
            var results = response.data

            //loops though images randomly
            for (var i = 0; i < results.length; i++) {

                //creates Div
                var giphyDiv = $('<div class="giphyDiv">');

                //pulls ratings
                var p = $('<p>').text('Ratings: ' + results[i].rating);

                //creats images
                var giphyImage = $('<img>');

                //pulls images from API
                giphyImage.attr('src', results[i].images.fixed_height.url);

                //appends rating and image
                giphyDiv.append(p);
                giphyDiv.append(giphyImage);

                //prepends to class specified in html
                $('.gifsAppearHere').prepend(giphyDiv);

            //end of for loop
            }
        
        //end of done function
        });

//end of button function
});