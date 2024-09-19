//exportacion de la forma singleton
import { Inventario } from './singleton';

//singleton
const inventario = Inventario.obtenerInstancia();
inventario.agregarEquipo("Notebook HP", "Portátil", "disponible");
console.log(inventario.listarEquipos());