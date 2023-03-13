const app = require("express")();
const PORT = 8080;

// our app is listening on port 8080; callback to let us know when the api is ready
app.listen(PORT, () => console.log(`it\'s alive on http://localhost:${PORT}`));
