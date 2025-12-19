class bandaMusical {
    constructor(nombre, genero, integrantes, discos) {
        this.nombre = nombre;
        this.genero = genero;
        this.integrantes = integrantes;
        this.discos = discos;
    }

    obtenerDetalles() {
        return `Nombre: ${this.nombre}, Género: ${this.genero}, Integrantes: ${this.integrantes.join(", ")}, Discos: ${this.discos.join(", ")}`;
    }
}

// Modificado: nombre de clase en mayúscula, métodos mostrarInfo y listarDiscos según requerimiento
class BandaMusical {
    constructor(nombre, genero, integrantes, discos) {
        this.nombre = nombre;
        this.genero = genero;
        this.integrantes = integrantes;
        this.discos = discos; // Array
    }
    mostrarInfo() {
        console.log(`Banda: ${this.nombre}, Género: ${this.genero}, Integrantes: ${this.integrantes.join(", ")}`);
    }
    listarDiscos() {
        console.log("Discos:", this.discos.join(", "));
    }
}

// Ejemplo de uso
const banda1 = new BandaMusical("Los Rockeros", "Rock", ["Ana", "Luis", "Carlos"], ["Primer Disco", "Segundo Disco"]);
banda1.mostrarInfo();
banda1.listarDiscos();


