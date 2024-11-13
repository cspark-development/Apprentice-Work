/*
Directions: Check your understanding of the instruction you just received by completing the activity below.

 

Create a /random route that returns the string Random number: VALUE with a value of 0, 1, or 2.

Inside app.get():

    Using Math.floor() and Math.random(), generate a random integer of 0, 1, or 2. Store the value in a variable.
    Using response.send(), send the string Random number: VALUE with the random value from the previous step.
    Run your code. Note: the Sphere container will time out and exit after 30 minutes. If this happens, click ‘Run’ again to restart the server. 
    View your application using the URL from the Sphere console.
    Test your code.
*/
const execSync = require("child_process").execSync;
//const port = process.env.SE_NETWORK_PORT_HTTP;
const port = 3000;
//const url = execSync(`se_utils_cli environment remote_url ${port}`, {encoding: 'utf8'});
const app = require("./app.js");

app.listen(port, () => {
    console.log(`Your server is listening on port: ${port}`);
});
