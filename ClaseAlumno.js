class alumno {
    constructor(nombre, edad, curso) {
        this.nombre = nombre;
        this.edad = edad;
        this.curso = curso;
    }

    obtenerDetalles() {
        return `Nombre: ${this.nombre}, Edad: ${this.edad}, Carrera: ${this.carrera}`;
    }
}

// Modificado: nombre de clase en mayúscula, atributo carrera, método mostrarInfo según requerimiento
class Alumno {
    constructor(nombre, edad, carrera) {
        this.nombre = nombre;
        this.edad = edad;
        this.carrera = carrera;
    }
    mostrarInfo() {
        console.log(`Nombre: ${this.nombre}, Edad: ${this.edad}, Carrera: ${this.carrera}`);
    }
}

// Ejemplo de uso
const alumno1 = new Alumno("Juan Perez", 20, "Ingeniería");
alumno1.mostrarInfo();
