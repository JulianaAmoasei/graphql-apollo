const axios = require('axios')

class Modelo {
  constructor(modelo) {
    this.url = `http://localhost:3000/${modelo}`
    this.modelo = modelo
  }

  async getAll() {
    const resposta = await axios.get(this.url)
    return resposta.data
  }

  async get(id) {
    const resposta = await axios.get(`${this.url}/${id}`)
    return resposta.data
  }

  async create(dados) {
    await axios.post(this.url, dados)
    return dados
  }

  async update(novosDados) {
    await axios.put(`${this.url}/${novosDados.id}`, novosDados)
    return novosDados
  }

  async delete(id) {
    await axios.delete(`${this.url}/${id}`)
    return id
  }

}

module.exports = Modelo