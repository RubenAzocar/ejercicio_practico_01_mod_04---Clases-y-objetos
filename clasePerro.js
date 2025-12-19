class perro {
    constructor(nombre, raza, edad) {
        this.nombre = nombre;
        this.raza = raza;
        this.edad = edad;
    }

    ladrar() {
        return `${this.nombre} dice: ¡Guau Guau!`;
    }

    cumplirAnios() {
        this.edad += 1;
        return `${this.nombre} ahora tiene ${this.edad} años.`;
    }
}

// Modificado: nombre de clase en mayúscula, método mostrarInfo y ladrar según requerimiento
class Perro {
    constructor(nombre, raza, edad) {
        this.nombre = nombre;
        this.raza = raza;
        this.edad = edad;
    }
    mostrarInfo() {
        console.log(`Nombre: ${this.nombre}, Raza: ${this.raza}, Edad: ${this.edad}`);
    }
    ladrar() {
        console.log("¡Guau guau!");
    }
}

// Ejemplo de uso
const perro1 = new Perro("Max", "Labrador", 3);
perro1.mostrarInfo();
perro1.ladrar();

const perro2 = new perro("Max", "Labrador", 3);
console.log(perro1.ladrar());
console.log(perro1.cumplirAnios());
