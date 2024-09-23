import { Observer } from "./interfaces/observer.interface";

// Crear una clase Soporte que actúe como observador y reciba notificaciones cuando el estado de un equipo cambie.
// Implementar la clase Equipo que permita agregar observadores y notifique a los observadores cuando su estado cambie.


export class Equipo implements Observer {
    constructor(
        private nombre: string,
        private tipo: string,
        private estado: string
    ) { }
    actualizar(estado: string): void {
        console.log(`Soporte Notificado: ${this.nombre} ha cambiado su estado a ${estado}`);
    }
}

export class Soporte {

    private estado: string = '';
    private observadores: Equipo[] = [];

    agregarObservador(observador: Equipo) {
        this.observadores.push(observador);
    }

    cambiarEstado(nuevoEstado: string) {
        this.estado = nuevoEstado;
        this.notificarObservadores();
    }

    private notificarObservadores() {
        for (const observador of this.observadores) {
            observador.actualizar(this.estado);
        }
    }
}
