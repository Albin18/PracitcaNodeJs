const express = require("express");
const productSchema = require("../model/dao");

const router = express.Router();

//create user
//Definimos el metodo("Agregamos la url", funcion (metodos request y response) =>
//llamamos nuestro metodo response.send ('Mensaje a consola')})

//Agregar USER
router.post("/products", (req, res) => {
  const product = productSchema(req.body);
  product
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

//GET ALL USERS
router.get("/products", (req, res) => {
  productSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

//GET USER BY ID
router.get("/products/:id", (req, res) => {
  const { id } = req.params;
  productSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

//UPDATE USER
router.put("/products/:id", (req, res) => {
  const { id } = req.params;
  const { internalCode, barcode, description, category, price } = req.body;
  productSchema //CAMBIOS
    .updateOne(
      { _id: id },
      { $set: { internalCode, barcode, description, category, price } }
    )
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

//Delete User
router.delete("/products/:id", (req, res) => {
  const { id } = req.params;
  productSchema
    .delete({ _id: id })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

module.exports = router;
