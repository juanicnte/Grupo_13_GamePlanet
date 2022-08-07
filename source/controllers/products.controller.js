const controlador = {
    //Muestra la lista de productos
    index: (req, res) => {
        res.send('Listado')
    },
    //Muesta el detalle del producto
    show: function(req, res){
        res.send('El detalle ' + req.params.idProducto);
    },
    //Crea el producto
    create: (req, res) => {
        res.send('Creación')
    }
};

module.exports = controlador;