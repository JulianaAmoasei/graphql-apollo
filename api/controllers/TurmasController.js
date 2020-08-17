const { ModeloTurmas } = require('../models')
const modeloTurma = new ModeloTurmas()

class TurmasController {

  async listaTurmas() {
    return modeloTurma.getAll();
  }

  async buscaTurmaPorId(id) {
    return modeloTurma.get(id)
  }

  adicionaTurma(dadosTurma) {
    const novaTurma = {id: Date.now(), ...dadosTurma}
    return modeloTurma.create(novaTurma)
  }

  atualizaTurma(dadosAtualizados) {
    return modeloTurma.update(dadosAtualizados)
  }

  async deletaTurma(id) {
    return modeloTurma.delete(id)
  }

}

module.exports = TurmasController