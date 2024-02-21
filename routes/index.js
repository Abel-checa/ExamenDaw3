const express = require('express');
const router = express.Router();
const bd = require('../connection.js')
const { Producto } = require('../models/Productos.js');
const Productos = require('../models/Productos.js');
/* GET home page. */
router.get('/', async (req, res, next)=>{
  const productos = await Producto.find()
  console.log(productos);
  res.render('index', { products: productos });
});

router.get('/product/:nombre', async (req, res, next)=>{
  console.log(req.params);
  const producto = await Producto.findOne({nombre: req.params.nombre})
  console.log(producto);
  res.render('producto', {products: producto})
});

router.get('/post', async (req, res, next)=>{
  res.render('post')
});

router.post('/post', async (req, res, next)=>{
  const nuevo = new Producto({
    nombre: req.body.nombre,
    precio: req.body.precio,
    imagen: req.body.imagen
  })

  await nuevo.save()

  res.redirect('/')
});

router.get('/update', async (req, res, next)=>{
  res.render('update')
});


router.post('/updates', async (req, res, next)=>{
  console.log(req.body);
    await Producto.updateOne({nombre: req.body.nombre},{imagen: req.body.imagen})
    res.redirect('/')  
});
module.exports = router;
