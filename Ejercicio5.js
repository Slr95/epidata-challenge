class ParejaSumadora {
  constructor(lista, objetivo) {
    this.lista = lista;
    this.objetivo = objetivo;
  }

  encontrarPares() {
    const pares = new Set(); // Usamos un Set para evitar duplicados
    const longitud = this.lista.length;

    for (let i = 0; i < longitud; i++) {
      for (let j = i + 1; j < longitud; j++) {
        const suma = this.lista[i] + this.lista[j];
        if (suma === this.objetivo) {
          // Agregamos el par como un array de números
          pares.add([i, j]);
        }
      }
    }

    // Convertimos el Set a un Array
    return Array.from(pares);
  }
}

// Ejemplo de uso
const lista = [2, 6, 8, 3, 5, 0, 2, 6];
const objetivo = 8;

const parejaSumadora = new ParejaSumadora(lista, objetivo);
const resultado = parejaSumadora.encontrarPares();

console.log(resultado); // Salida: [[0, 1], [0, 7], [1, 6], [2, 5], [3, 4], [6, 7]]
