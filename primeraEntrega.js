// creacion de la clase

class ProductManager {
  //contructor de la clase
  constructor() {
    this.products = [];
    this.nextId = 1;
  }

  //metodo agregar
  addProduct(products) {
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
  getProduts() {
    return this.products;
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
productManager.addProduct({
  title: "Producto 3",
  description: "Descripción del Producto 3",
  price: 25,
  thumbnail: "/images/product3.jpg",
  code: "P001", // Este código ya existe
  stock: 12,
});

//traer los productos
console.log(productManager.getProduts());

//buscar por id
console.log(productManager.getProductById(1));

//buscar por id que no esta
console.log(productManager.getProductById(3));
