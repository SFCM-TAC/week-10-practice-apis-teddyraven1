For this assignment, I want you to request data from an external server/API and load it into your HTML page using AJAX! If this sounds overwhelming, refer back to the code from class, the most basic version of a complete assignment will look very similar to this: https://github.com/SFCM-TAC/week10-inClass-JSONAJAX

(5 points) Create and send an XMLHttpRequest to an API url (some suggestions listed below)
(5 points) Implement an onload function for the XMLHttpRequest that turns the JSON response into a Javascript object
(5 points) Use AJAX to display the data from the response on the HTML page
(5 points) Style and display the data in an engaging/creative/useful way! Feel free to use Tone.js, P5.js, or any other library you'd like to get creative here.

Here are some APIs that I've tested and have security settings that will let you use them easily:
https://sunrise-sunset.org/api (if you use this one, make sure you do something different than what we did in class)
http://open-notify.org/Open-Notify-API/ISS-Location-Now/ (International Space Station realtime data)
https://opentdb.com/api_config.php (trivia question generator)
https://punkapi.com/documentation/v2 (beer database)
https://www.openbrewerydb.org/ (searchable brewery database)
https://swapi.co/api/ (star wars api)
https://docs.openaq.org (air quality)
https://github.com/jamesseanwright/ron-swanson-quotes#ron-swanson-quotes-api (ron swanson quote generator)
https://api.chucknorris.io/ (chuck norris joke generator)
https://developer.yahoo.com/weather/ (yahoo weather)
https://randomfox.ca/floof/ (random pictures of foxes)
https://random.dog/woof.json (random pictures of dogs)

More options here if you're feeling brave: https://github.com/toddmotto/public-apis
Theoretically, you should be able to use any API that says 'no' in the Auth column and 'unknown'/'no' under CORS, but the API may have changed it's settings since it was added to that list ... if you get a 'Access-Control-Allow-Origin' header error but really want to use the API, you can try using JSONP (explained in the book) if the API supports it.

Again, here are the instructions for running a local python server, which you will need to test your code:

1. Open the 'terminal' application on your mac
2. Type 'cd /Path/to/parent/folder' and hit enter to navigate to your app folder (you can also type 'cd ' and then drag a folder into the terminal to have it fill in the path for you)
3. Type 'python -m SimpleHTTPServer 8000' in the terminal to start the local server Go to localhost:8000 in Chrome to load your web app! (If this doesn't work, try 'python -m http.server 8000' instead)
5. It should load changes to your files automatically, but if you need to restart the sever: press 'ctrl+C' in the terminal to stop the server. Run 'python -m SimpleHTTPServer 8000' again to restart it with your changes.

You will know the terminal is read for commands because your cursor will be preceded with a '$'. If it is not, press 'ctrl+c' to cancel whatever is happening and get a fresh line. If your cursor is preceded by '>>>' that means you are running a python terminal, and you need to press 'ctrl+d' to quit and go back to a regular terminal.
