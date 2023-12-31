//now it load express module with `require` directive
var express = require('express')
var app = express()
const port = process.env.PORT || 3000;
//Define request response in root URL (/) and response with text Hello World!
app.get('/', function (req, res) {
  res.send('Hello Railway !')
})
//Launch listening server on port 8080 and consoles the log.
app.listen(port, () => {
  console.log(`Server running at https://localhost:${port}/`);
});
