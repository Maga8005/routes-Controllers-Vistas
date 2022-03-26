const mainController = {
  index: (req,res)=>{
    const productos = [
      {
        titulo:'Carpaccio fresco',
        descripcion:'Entrada Carpaccio de salmón con cítricos',
        precio:'$ 65.50 USD'
      },
      {
        titulo:'Risotto de berenjena',
        descripcion:'Risotto de berenjena y queso de cabra',
        precio:'$ 47.00 USD'
      },
      {
        titulo:'Mousse de arroz',
        descripcion:'Mousse de arroz con leche y aroma de azahar',
        precio:'$ 27.50 USD'
      },
      {
        titulo:'Espárragos blancos',
        descripcion:'Espárragos blancos con vinagreta de verduras y jamón ibérico',
        precio:'$ 37.50 USD'
      }
    ]
    res.render('index',{productos})
  },

  detalleProducto: (req,res)=>{
    const id = req.params.id;
    const platos = [
      { 
        id:1,
        titulo:'Carpaccio fresco',
        descripcion:'Entrada Carpaccio de salmón con cítricos',
        precio:'$ 65.50 USD',
        imagen:'/images/Carpaccio-de-salmon.jpg'
      },
      {
        id:2,
        titulo:'Risotto de berenjena',
        descripcion:'Risotto de berenjena y queso de cabra',
        precio:'$ 47.00 USD',
        imagen:'/images/Risotto-berenjena-queso-cabra.jpg'
      },
      {
        id:3,
        titulo:'Mousse de arroz',
        descripcion:'Mousse de arroz con leche y aroma de azahar',
        precio:'$ 27.50 USD',
        imagen:'/images/Mousse-de-arroz-con-leche.jpg'
      },
      {
        id:4,
        titulo:'Espárragos blancos',
        descripcion:'Espárragos blancos con vinagreta de verduras y jamón ibérico',
        precio:'$ 37.50 USD',
        imagen:'/images/esparragos.png'
      }
    ]
    const plato = platos.find(plato => plato.id == id);
    res.render('detalleMenu', {plato})
    
  }

}

module.exports = mainController;