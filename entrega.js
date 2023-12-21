class ProductManager {
  constructor() {
    this.producto = [];
    this.cont = 1;
  }
  //metodos
  // metodo para mostrar los productos
  mostarProdutos() {
    return this.producto; // apunto hacia la propiedad produscto
  }

  // metodo para agregar los productos
  // el metodo con el parametro, en este caso el producto
  agregarProdusto(producto) {
    // validacion
    if (
      !producto.titulo ||
      !producto.descripcion ||
      !producto.precio ||
      !producto.codigo ||
      !producto.stock
    ) {
      console.log("todos los campos son nesesarios");
    }
    if (//recorro el array buscado si se culple la condicion que el codigo ingresado sea igual a otro que ya alla en el array de producto
      this.producto.some(
        (productoExist) => productoExist.codigo === producto.codigo
      )
    ) {
      console.log("el producto ya existe");//en caso que sea verdadero 
    }
    producto.id = this.cont++;//genero el id de manera autoincremental
    this.producto.push(producto); // apunto hacia el array producto con el metodo push, para agregar el producto que me viene por parametro  desde el metodo

  }

  // metodo buscar por id
  bucarId(id){
    const producto = this.producto.find(producto => producto.id === id)//recorro el array comparando el id q ingresa con los id dentro del array
    if(producto){// en cado de encontarlo me devuelve el objeto
        return producto;
    }else{
        console.log("el id no se encuentra");
        return null;
    }

  }
}

//instanciar la clase a usar

const productManager = new ProductManager();

//agrego productos
