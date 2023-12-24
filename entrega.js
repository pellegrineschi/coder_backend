class ProductManager {
  constructor() {
    this.vehiculos = [];
    this.cont = 1;
  }
  //metodos
  // metodo para mostrar los productos
  mostarVehiculos() {
    return this.vehiculos; // apunto hacia la propiedad produscto
  }

  // metodo para agregar los productos
  // el metodo con el parametro, en este caso el producto
  agregarVehiculo(vehiculos) {
    // validacion
    if (
      !vehiculos.dominio ||
      !vehiculos.marca ||
      !vehiculos.modelo ||
      !vehiculos.anio ||
      !vehiculos.tipoCombustible
    ) {
      console.log("todos los campos son nesesarios");
    }
    if (
      //recorro el array buscado si se culple la condicion que el codigo ingresado sea igual a otro que ya alla en el array de producto
      this.vehiculos.some(
        (vehiculoExist) => vehiculoExist.dominio === vehiculos.dominio
      )
    ) {
      console.log("el vehiculo ya existe"); //en caso que sea verdadero
    }
    vehiculos.id = this.cont++; //genero el id de manera autoincremental
    this.vehiculos.push(vehiculos); // apunto hacia el array producto con el metodo push, para agregar el producto que me viene por parametro  desde el metodo
  }

  // metodo buscar por id
  bucarId(id) {
    const vehiculo = this.vehiculos.find((vehiculo) => vehiculo.id === id); //recorro el array comparando el id q ingresa con los id dentro del array
    if (vehiculo) {
      // en cado de encontarlo me devuelve el objeto
      return vehiculo;
    } else {
      console.log("el id no se encuentra");
      return null;
    }
  }

  //metodo buscar por numero de dominio
  buscarDominio(dominio){
    const vehiculo = this.vehiculos.find((vehiculo) => vehiculo.dominio === dominio);
    if (vehiculo){
      return vehiculo;
    }else{
      console.log("el dominio no se encuentra");
      return null;
    }
  }
}

//instanciar la clase a usar

const productManager = new ProductManager();

//agrego productos

productManager.agregarVehiculo({
  dominio: "fai281",
  marca: "volkswagen",
  modelo: "gol",
  anio: 2005,
  tipoCombustible: "nafta",
});

productManager.agregarVehiculo({
  dominio: "gqn495",
  marca: "fiat",
  modelo: "uno",
  anio: 2007,
  tipoCombustible: "diesel",
});

// console.log(productManager.mostarVehiculos());

// console.log(productManager.bucarId(3));

console.log(productManager.buscarDominio("fai291"));
