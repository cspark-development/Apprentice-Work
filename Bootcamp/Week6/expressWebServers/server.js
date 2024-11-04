/*
In server.js:

 

A port and a url  variable have already been declared for you with special values added so Sphere can be accessed from outside it's container.

    Invoke app.listen() method adding the port variable and callback function to log to the console ‘Server listening at URL’ where URL is the url variable
    Run your code. This should log the container url to the console in Sphere. Note: the Sphere container will time out and exit after 30 minutes. If this happens, click ‘Run’ again to restart the server. 
    View your application by copying the url and pasting it in a browser bar. You should see the message "Your First Express Application!" in the browser. IMPORTANT: Sphere doesn't support “CTRL/CMD+ C” in the terminal. In order to copy the url you will need to right click on the text and select copy.
    Test your code
*/

const execSync = require("child_process").execSync;
const port = 3000;
// const url = execSync(`se_utils_cli environment remote_url ${port}`, {encoding: 'utf8'});
const app = require("./app.js");
// DO NOT EDIT CODE ABOVE

// Write your code here
app.listen(port, () => {
	console.log(`Server listening on ${port}`);
});
