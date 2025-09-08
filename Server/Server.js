const http = require("http");
const fs = require("fs");
// const cors = require("cors")

const server = http.createServer((req, res) => {
  // res.end("New server")
  if (req.url == "/") {
    fs.readFile("../Client/home.html", "utf-8", (error, data) => {
      if (error) {
        res.end("Something Error");
      } else {
        res.end(data);
      }
    });
  } else if (req.url == "/about") {
    fs.readFile("../Client/about.html", "utf-8", (error, data) => {
      if (error) {
        res.end("Something Error");
      } else {
        res.end(data);
      }
    });
  } else if (req.url == "/data") {
    fs.readFile("../Client/data.html", "utf-8", (error, data) => {
      if (error) {
        res.end("Something Error");
      } else {
        res.end(data);
      }
    });
  }
});
//http://localhost:3456
server.listen(3456, () => {
  console.log("Started..");
});
