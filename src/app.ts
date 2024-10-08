import { Inventario } from './singleton';
import { EquipoFactory } from './factoryMethod';
import { Equipo, Soporte } from './observer';
import { AdaptadorInventario, InventarioViejo } from './adaptador';


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


//observer
const soporte = new Soporte();
const equipo = new Equipo("Notebook HP", "Portátil", "disponible");
soporte.agregarObservador(equipo);
soporte.cambiarEstado("en reparación");

// Soporte notificado: Notebook HP ha cambiado su estado a en reparación.

//adaptador
const inventarioViejo = new InventarioViejo();
const adaptador = new AdaptadorInventario(inventarioViejo);
adaptador.agregarEquipo("Servidor Dell", "Servidor", "disponible");
console.log(adaptador.listarEquipos());
// [{ nombre: "Servidor Dell", tipo: "Servidor", estado: "disponible" }]