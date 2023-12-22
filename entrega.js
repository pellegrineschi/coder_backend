class ProductManager {
  constructor() {
    this.vehiculos = [];
    this.cont = 1;
  }
  //metodos
  // metodo para mostrar los productos
  mostarProdutos() {
    return this.vehiculos; // apunto hacia la propiedad produscto
  }

  // metodo para agregar los productos
  // el metodo con el parametro, en este caso el producto
  agregarProducto(vheiculo) {
    // validacion
    if (
      !vheiculo.dominio ||
      !vheiculo.marca ||
      !vheiculo.modelo ||
      !vheiculo.anio ||
      !vheiculo.tipoCombustible
    ) {
      console.log("todos los campos son nesesarios");
    }
    if (//recorro el array buscado si se culple la condicion que el codigo ingresado sea igual a otro que ya alla en el array de producto
      this.vehiculos.some(
        (vehiculoExist) => vehiculoExist.dominio === this.vehiculos.dominio
      )
    ) {
      console.log("el vehiculo ya existe");//en caso que sea verdadero 
    }
    vheiculo.id = this.cont++;//genero el id de manera autoincremental
    this.vehiculos.push(this.vehiculos); // apunto hacia el array producto con el metodo push, para agregar el producto que me viene por parametro  desde el metodo

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

productManager.agregarProducto({
  titulo: "marolio",
  descripcion: "arroz",
  precio: 1000,
  codigo:"ab111",
  stock:100

})

productManager.agregarProducto({
  titulo:"marolio",
  descripcion:"fideos",
  precio:1200,
  stock:120
})

console.log(productManager.mostarProdutos());