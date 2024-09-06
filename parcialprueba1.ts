class Producto {
  private codigo: string;      
  private nombre: string;      
  private precioCosto: number; 
  private precioVenta: number; 

  constructor(codigo: string, nombre:string, precioCosto:number, precioVenta:number) {
    this.codigo = codigo;
    this.nombre = nombre;
    this.precioCosto = precioCosto;
    this.precioVenta = precioVenta;
  }

  public getCodigo(): string {
    return this.codigo;
  }  

  public getNombre(): string {
    return this.nombre;
  }  
  public getPrecioVenta(): number {
    return this.precioVenta;
  }  

}

class TablaHash {
  private tabla:Producto[]
  private size:number;

  constructor(size:number) {
    this.tabla = new Array(size); 
    this.size = size
  }


  private hash(codigo: string): number {
    let hash = 0;
    for (let i = 0; i < codigo.length; i++) {
      hash += codigo.charCodeAt(i); 
    }
    return hash % 37; // Reducimos el valor del hash a un rango manejable
  }

  
  public agregarProducto(producto: Producto): void {
    const index = this.hash(producto.getCodigo()); 
    this.tabla[index] = producto; 
  }


  public buscarProducto(codigo: string): Producto | undefined {
    const index = this.hash(codigo); 
    return this.tabla[index]; 
  }

  public print() : void {
    console.log(this.tabla);
  } 
  
}


const tablaHash = new TablaHash(10);
//verificamos el espacio añadido
tablaHash.print()


// Agregamos productos a la tabla
tablaHash.agregarProducto(new Producto("P001", "Pepto-Bismol", 50.00,65.00 ));
tablaHash.agregarProducto(new Producto("P001", "Pepto-Bismol", 50.00,65.00 ));
tablaHash.agregarProducto(new Producto( "P002",  "Aspirina",  30.00, 40.00 ));
tablaHash.agregarProducto(new Producto( "P043",  "Hibuprofeno",  30.00, 80.00 ));
tablaHash.agregarProducto(new Producto( "P056",  "Pal Dolor de cabeza",  30.00, 90.00 ));
tablaHash.agregarProducto(new Producto( "P088",  "Pal dolor de estomago",  30.00, 44.00 ));
tablaHash.agregarProducto(new Producto( "P009",  "Pal dolor de pies",  30.00, 48.00 ));
tablaHash.agregarProducto(new Producto( "P019",  "Pa los ojos",  30.00, 47.00 ));
tablaHash.agregarProducto(new Producto( "P023",  "Pa los dientes",  30.00, 70.00 ));
tablaHash.agregarProducto(new Producto( "P065",  "Anticonceptivos",  30.00, 90.00 ));
tablaHash.agregarProducto(new Producto( "P022",  "Agua",  30.00, 42.00 ));

// Buscamos un producto por su código
const producto = tablaHash.buscarProducto("P001");
if (producto) {
  console.log(`Producto encontrado: ${producto.getNombre()}, Precio Venta: ${producto.getPrecioVenta()}`);
} else {
  console.log("Producto no encontrado");
}


//mostrabamos toda la tabla hash
tablaHash.print()