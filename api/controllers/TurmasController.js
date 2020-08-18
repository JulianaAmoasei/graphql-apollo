const { ModeloTurmas, ModeloNiveis, ModeloPessoas } = require('../models')
const modeloTurma = new ModeloTurmas()
const modeloNivel = new ModeloNiveis()
const modeloPessoa = new ModeloPessoas()

class TurmasController {

  async listaTurmas() {
    const arrTurmas = await modeloTurma.getAll()
    const arrPessoas = await modeloPessoa.getAll()
    const arrNiveis = await modeloNivel.getAll()
    return arrTurmas.map(turma => {
      return ({
        id: turma.id,
        dataInicio: turma.dataInicio,
        nivel: arrNiveis.find(nivel => nivel.id === turma.nivelId),
        docente: arrPessoas.find(pessoa => pessoa.id === turma.docenteId)
      })
    })
  }

  async buscaTurmaPorId(id) {
    const turma = await modeloTurma.get(id)
      return ({
        id: turma.id,
        dataInicio: turma.dataInicio,
        nivel: modeloNivel.get(turma.nivelId),
        docente: modeloPessoa.get(turma.docenteId)
      })
  }

  async adicionaTurma(dadosTurma) {
    const novaTurma = await modeloTurma.create({id: Date.now(), ...dadosTurma})
    novaTurma.nivel = await modeloNivel.get(novaTurma.nivelId)
    novaTurma.docente = await modeloPessoa.get(novaTurma.docenteId)
    return novaTurma
  }

  atualizaTurma(dadosAtualizados) {
    return modeloTurma.update(dadosAtualizados)
  }

  async deletaTurma(id) {
    return modeloTurma.delete(id)
  }

}

module.exports = TurmasController