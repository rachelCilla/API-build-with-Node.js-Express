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

// 'id' is a route param; it captures dynamic values in the url. Here, it will capture the id of the tshirt we want to update
app.post("/tshirt/:id", (req, res) => {
  // we can get the id from the url
  const { id } = req.params;
  //'logo' is contained in the request body. This is a custom data payload contained in the incoming request.
  const { logo } = req.body;
  // if there is no logo, send a 418 error code and a message
  if (!logo) {
    res.status(418).send({ message: "we need a logo" });
  }
  // if there is a logo, send a success message
  res.send({
    tshirt: `tshirt with your logo ${logo} and ID ${id} has been updated`,
  });
});
