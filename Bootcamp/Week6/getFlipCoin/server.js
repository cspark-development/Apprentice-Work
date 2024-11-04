const execSync = require('child_process').execSync;
// const port = process.env.SE_NETWORK_PORT_HTTP;
const port = 3000;
// const url = execSync(`se_utils_cli environment remote_url ${port}`, {encoding: 'utf8'});
const app = require("./src/app.js");

app.listen(port, () => {
  console.log(
    `Your server is listening on port: ${port}`
  );
});
