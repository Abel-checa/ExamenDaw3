const db = require('../connection.js')
const {Schema,model} = require('mongoose')

const ProductSchema = new Schema ({
    nombre: String,
    precio: Number,
    imagen: String
})


const Producto = model('products', ProductSchema)

module.exports = {Producto: Producto}