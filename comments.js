// Create web server
// Run the server on port 3000
// Define a route for GET request on /comments
// Respond with a JSON object
// The object should have a key of comments and a value of an array of comments
// Each comment should be an object with a key of body and a string value

const express = require("express");
const app = express();

app.get("/comments", (req, res) => {
  res.json({
    comments: [
      { body: "This is a comment" },
      { body: "This is another comment" },
    ],
  });
});

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});