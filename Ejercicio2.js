// Clase Mision
class Mision {
  constructor(
    nombre,
    dificultad,
    puntosEXdeRecompensa,
    minimoPuntosEXRequeridos
  ) {
    this.nombre = nombre;
    this.dificultad = dificultad;
    this.puntosEXRecompensa = puntosEXdeRecompensa;
    this.minimoPuntosEXRequeridos = minimoPuntosEXRequeridos;
  }

  superaMision(jugador) {
    return (
      jugador.getPuntosExperienciaAcumulados() >= this.minimoPuntosEXRequeridos
    );
  }

  getNombre() {
    return this.nombre;
  }

  getPuntosEXRecompensa() {
    return this.puntosEXRecompensa;
  }
}

// Clase MisionCasiImposible (hereda de Mision)
class MisionCasiImposible extends Mision {
  constructor(
    nombre,
    dificultad,
    puntosEXdeRecompensa,
    minimoPuntosEXRequeridos
  ) {
    super(nombre, dificultad, puntosEXdeRecompensa, minimoPuntosEXRequeridos);
    this.accionesRequeridas = [];
  }

  addAccionRequerida(accion) {
    if (!this.accionesRequeridas.includes(accion)) {
      this.accionesRequeridas.push(accion);
      return true; // Se agregó la acción
    }
    return false; // La acción ya existía
  }

  superaMision(jugador) {
    // Verificar si el jugador tiene los puntos de experiencia requeridos
    if (!super.superaMision(jugador)) {
      return false;
    }

    // Filtrar las acciones que el jugador no ha realizado
    const accionesFaltantes = this.accionesRequeridas.filter(
      (accion) => !jugador.realizoAccion(accion)
    );

    // Si el jugador ha realizado todas las acciones requeridas, supera la misión
    if (accionesFaltantes.length === 0) {
      return true;
    }

    // Verificar si la cantidad de acciones faltantes es menor que las misiones superadas por el jugador
    return accionesFaltantes.length < jugador.getCantidadMisionesSuperadas();
  }
}

// Clase Jugador
class Jugador {
  constructor(nombre, aventura) {
    this.nombre = nombre;
    this.aventura = aventura;
    this.misionesSuperadas = [];
    this.puntosExperienciaAcumulados = 0;
    this.accionesRealizadas = [];
  }

  addAccion(accion) {
    this.accionesRealizadas.push(accion);
  }

  realizoAccion(accion) {
    return this.accionesRealizadas.includes(accion);
  }

  addMisionSuperada(mision) {
    this.misionesSuperadas.push(mision);
  }

  incrementarPuntosExperiencia(puntosEx) {
    this.puntosExperienciaAcumulados += puntosEx;
  }

  getPuntosExperienciaAcumulados() {
    return this.puntosExperienciaAcumulados;
  }

  getCantidadMisionesSuperadas() {
    return this.misionesSuperadas.length;
  }
}

// Ejemplo de uso
const mision1 = new Mision("Buscando la olla del duende", "fácil", 100, 0);
const misionCasiImposible = new MisionCasiImposible(
  "San Jorge un poroto",
  "difícil",
  500,
  300
);
misionCasiImposible.addAccionRequerida("Derrotar 10 dragones");

const jugador1 = new Jugador("Juan");
jugador1.incrementarPuntosExperiencia(500);
jugador1.addAccion("Derrotar 10 dragones");

// Verificación
console.log(mision1.superaMision(jugador1)); // true
console.log(misionCasiImposible.superaMision(jugador1)); // true
