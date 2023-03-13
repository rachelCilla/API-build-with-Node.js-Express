const app = require("express")();
const PORT = 8080;

// our app is listening on port 8080; callback to let us know when the api is ready
app.listen(PORT, () => console.log(`it\'s alive on http://localhost:${PORT}`));

// adding a get endpoint to the tshirt uri
//passing in '/tshirt' as the first argument automatically creates a get endpoint
//whenever this route is requested, the callback function will be executed
// req is the incoming data, res is the data we want to send to the client
app.get("/tshirt", (req, res) => {
  //res.status(200) is the status code we want to send to the client (200 is a success code)
  // sending a data payload with the satatus code. If this is a object, it will be converted to JSON automatically
  res.status(200).send({
    tshit: "blue",
    size: "large",
  });
});

// 'id' is a route param; it captures dynamic values in the url
app.post("/tshirt/:id", (req, res) => {});
