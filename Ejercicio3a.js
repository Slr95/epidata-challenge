class Jugador {
  constructor(nombre) {
    this.nombre = nombre;
    this.misionesSuperadas = [];
    this.puntosExperiencia = 0;
  }

  addMisionSuperada(misionNombre) {
    if (!this.misionesSuperadas.includes(misionNombre)) {
      this.misionesSuperadas.push(misionNombre);
      return true;
    }
    return false;
  }

  incrementarPuntosExperiencia(puntos) {
    this.puntosExperiencia += puntos;
  }

  getPuntosExperiencia() {
    return this.puntosExperiencia;
  }
}

class Mision {
  constructor(nombre, dificultad, puntosEXRecompensa, puntosEXRequeridos) {
    this.nombre = nombre;
    this.dificultad = dificultad;
    this.puntosEXRecompensa = puntosEXRecompensa;
    this.puntosEXRequeridos = puntosEXRequeridos;
  }

  superaMision(jugador) {
    return jugador.getPuntosExperiencia() >= this.puntosEXRequeridos;
  }

  getNombre() {
    return this.nombre;
  }

  getPuntosEXRecompensa() {
    return this.puntosEXRecompensa;
  }
}

class Aventura {
  constructor(nombre) {
    this.nombre = nombre;
    this.misiones = [];
    this.jugadores = [];
  }

  agregarJugador(jugador) {
    if (this.jugadores.includes(jugador)) {
      return false;
    }

    this.jugadores.push(jugador);

    for (let mision of this.misiones) {
      if (mision.superaMision(jugador)) {
        if (jugador.addMisionSuperada(mision.getNombre())) {
          jugador.incrementarPuntosExperiencia(mision.getPuntosEXRecompensa());
        }
      }
    }

    return true;
  }

  addMision(mision) {
    this.misiones.push(mision);
  }
}

// Ejemplo de uso
const aventura = new Aventura("D&D");
const jugador1 = new Jugador("Juan");
const jugador2 = new Jugador("Sebastian");

const mision1 = new Mision("Buscar la Olla del Duende", "Fácil", 100, 0);
const mision2 = new Mision("Lobo Está?", "Intermedio", 200, 100);

// Agregando misiones a la aventura
aventura.addMision(mision1);
aventura.addMision(mision2);

// Agregando jugadores a la aventura
aventura.agregarJugador(jugador1);
aventura.agregarJugador(jugador2);

console.log(jugador1);
console.log(jugador2);
