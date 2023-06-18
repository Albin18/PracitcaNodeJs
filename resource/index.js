const express = require("express");
const mongoose = require("mongoose");
const productRoute = require("./data/product");

const app = express();
//LA constante tomara el puerto por defecto de la libreria, si no tomara el puerto definido (9000)
const port = process.env.PORT || 9000;

//Middleware
app.use(express.json());
app.use("/api", productRoute);

//route
app.get("/", (req, res) => {
  res.send("Solo es una Api de Prueba en NodeJs");
});

//MongoDb conection
mongoose
  .connect("mongodb+srv://Albinlol:admin@cluster0.lqukwwp.mongodb.net/")
  .then(() => console.log("Conection Successful"))
  .catch((error) => console.error("Failed Conection: " + error));

app.listen(port, () => console.log("server listening on port", port));
