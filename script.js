var req = new XMLHttpRequest();
req.open('GET','https://api.punkapi.com/v2/beers/random', true);
req.send();

req.onload = function() {
    var response = req.response;
    var parsedResponse = JSON.parse(response);
    
    var beerDiv = document.getElementById('beer');
    beerDiv.innerHTML = parsedResponse.results.beer;
}










//https://api.punkapi.com/v2/beers/random
