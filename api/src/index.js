import app from "./app";
import "./database";

const port = app.get("port");

app.listen(port, () =>
  console.log("Server listening on port", app.get("port"))
);
