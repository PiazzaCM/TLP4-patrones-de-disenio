import { Equipo } from "./interfaces/equipo.interface";
// const factory = new EquipoFactory();
// const Notebook = factory.crearEquipo("Notebook", "Dell XPS", "16GB", "i7");
// console.log(Notebook.detalles());
// Tipo: Notebook, Nombre: Dell XPS, RAM: 16GB, Procesador: i7

class Notebook implements Equipo {
    private tipo: string;
    private nombre: string;
    private ram: string;
    private procesador: string;

    constructor(tipo: string, nombre: string, ram: string, procesador: string) {
        this.tipo = tipo;
        this.nombre = nombre;
        this.ram = ram;
        this.procesador = procesador
    }
    detalles(): string {
        return `Tipo: ${this.tipo}, Nombre: ${this.nombre}, RAM: ${this.ram}, Procesador: ${this.procesador}`;
    }
}

class Desktop implements Equipo {
    private tipo: string;
    private nombre: string;
    private ram: string;
    private procesador: string;

    constructor(tipo: string, nombre: string, ram: string, procesador: string) {
        this.tipo = tipo;
        this.nombre = nombre;
        this.ram = ram;
        this.procesador = procesador
    }
    detalles(): string {
        return `Tipo: ${this.tipo}, Nombre: ${this.nombre}, RAM: ${this.ram}, Procesador: ${this.procesador}`;
    }
}

class Servidor implements Equipo {
    private tipo: string;
    private nombre: string;
    private ram: string;
    private procesador: string;

    constructor(tipo: string, nombre: string, ram: string, procesador: string) {
        this.tipo = tipo;
        this.nombre = nombre;
        this.ram = ram;
        this.procesador = procesador
    }
    detalles(): string {
        return `Tipo: ${this.tipo}, Nombre: ${this.nombre}, RAM: ${this.ram}, Procesador: ${this.procesador}`;
    }
}


export class EquipoFactory {
    public crearEquipo(tipo: string, nombre: string, ram: string, procesador: string) {
        switch (tipo) {
            case "Notebook":
                return new Notebook(tipo, nombre, ram, procesador);
            case "Desktop":
                return new Desktop(tipo, nombre, ram, procesador);
            case "Servidor":
                return new Servidor(tipo, nombre, ram, procesador);
            default:
                throw new Error("Tipo de equipo no válido");
        }
    }
}