const { json } = require('node:stream/consumers');

const fs = require('fs').promises;

// creacion de la clase

class ProductManager {
  //contructor de la clase
  constructor() {
    this.products = [];
    this.nextId = 1;
    this.filePath = 'products.json';
  }

  //metodo para cargar los productos desde archivo
  async loadProductFromFile(){
    try{
      const data = await fs.readFile(this.filePath,'utf-8');
      this.products = JSON.parse(data); //pasea la cadena en un array
    }
    catch(err) {
      console.error('Erro en la carga de productos desde archivo: ', err)
    }
  }

  //metodo para guardar productos en archivo
  async saveProductFile(){
    try{
      const data = JSON.stringify(this.products, null, 2); //convierte el array en una cadena
      await fs.writeFile(this.filePath,data,'utf-8');
      console.log('Productos guardados en el archivo: ', this.filePath)
    }
    catch(err) {
      console.error('Error al guardar productos en archivo: ', err);
    }
  }


  //metodo agregar
  async addProduct(products) {
    //validamos
    if (
      !products.title ||
      !products.description ||
      !products.price ||
      !products.thumbnail ||
      !products.code ||
      !products.stock
    ) {
      console.log("todos los campos son obligatorios");
      return;
    }
    if (
      this.products.some(
        (existingProduct) => existingProduct.code === products.code
      )
    ) {
      console.log(`ya existe un producto con el codigo "${products.code}"`);
      return;
    }

    products.id = this.nextId++;
    this.products.push(products);
    await this.saveProductFile();
    console.log(`producto "${products.title}" agegado con ID ${products.id} `);
  }

  //metodo buscar por id
  getProductById(id) {
    const product = this.products.find((product) => product.id === id);
    if (product) {
      return product;
    } else {
      console.log(`producto con id "${id}" no encontrado`);
      return null;
    }
  }

  //metodo obtener los productos
  async getProduts() {
    await this.loadProductFromFile();
    return this.products;
  }

  // metodo para mostrar produsctos
  async showProducts(){
    const products = await productManager.getProduts();
    console.log('Lista de productos: ', products)
  }
}

// instanciar la clase a usar
const productManager = new ProductManager();

//agregar productos
productManager.addProduct({
  title: "Producto 1",
  description: "Descripción del Producto 1",
  price: 20,
  thumbnail: "/images/product1.jpg",
  code: "P001",
  stock: 10,
});

productManager.addProduct({
  title: "Producto 2",
  description: "Descripción del Producto 2",
  price: 30,
  thumbnail: "/images/product2.jpg",
  code: "P002",
  stock: 15,
});

// Intentar agregar un producto con código duplicado
// productManager.addProduct({
//   title: "Producto 3",
//   description: "Descripción del Producto 3",
//   price: 25,
//   thumbnail: "/images/product3.jpg",
//   code: "P001", // Este código ya existe
//   stock: 12,
// });

//traer los productos
// console.log(productManager.getProduts());
productManager.showProducts();

//buscar por id
// console.log(productManager.getProductById(1));

//buscar por id que no esta
// console.log(productManager.getProductById(3));
