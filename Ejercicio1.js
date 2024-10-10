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
    this.puntosEXdeRecompensa = puntosEXdeRecompensa;
    this.minimoPuntosEXRequeridos = minimoPuntosEXRequeridos;
  }

  // Método para verificar si el jugador supera la misión (puedes ajustarlo según tus necesidades)
  superaMision(jugador) {
    return (
      jugador.getPuntosExperienciaAcumulados() >= this.minimoPuntosEXRequeridos
    );
  }

  getNombre() {
    return this.nombre;
  }

  getPuntosEXRecompensa() {
    return this.puntosEXdeRecompensa;
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

  // Método para agregar acción requerida
  addAccionRequerida(accion) {
    if (!this.accionesRequeridas.includes(accion)) {
      this.accionesRequeridas.push(accion);
      return true; // Se agregó la acción
    }
    return false; // La acción ya existía
  }
}

// Ejemplo de uso según el enunciado
const m1 = new MisionCasiImposible("Mision CI", "difícil", 100, 200);
console.log(m1.addAccionRequerida("llegar al castillo")); // true
console.log(m1.addAccionRequerida("llegar al castillo")); // false
