import { Inventario } from './singleton';
import { EquipoFactory } from './factoryMethod';


//singleton
const inventario = Inventario.obtenerInstancia();
inventario.agregarEquipo("Notebook HP", "Portátil", "disponible");
console.log(inventario.listarEquipos());


///Factory method
const factory = new EquipoFactory();
const Notebook = factory.crearEquipo("Notebook", "Dell XPS", "16GB", "i7");
const Desktop = factory.crearEquipo("Desktop", "HP", "16GB", "i7");
console.log(Notebook.detalles());
console.log(Desktop.detalles());


