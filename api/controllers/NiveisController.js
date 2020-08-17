const { ModeloNiveis } = require('../models')
const modeloNivel = new ModeloNiveis()

class NiveisController {

  async listaNiveis() {
    return modeloNivel.getAll();
  }

  async buscaNivelPorId(id) {
    return modeloNivel.get(id)
  }

  adicionaNivel(dadosNivel) {
    const novoNivel = {id: Date.now(), ...dadosNivel}
    return modeloNivel.create(novoNivel)
  }

  atualizaNivel(dadosAtualizados) {
    return modeloNivel.update(dadosAtualizados)
  }

  async deletaNivel(id) {
    return modeloNivel.delete(id)
  }

}

module.exports = NiveisController