const { RESTDataSource } = require('apollo-datasource-rest')

class UsersAPI extends RESTDataSource {
  constructor() {
    super()
    this.baseURL = 'http://localhost:3000'
    this.respostaCustom = {
      code: "200",
      success: true,
      message: "mensagem de sucesso"
    }
  }

  async getUsers() {
    const users = await this.get('/users')
    return users.map(async user => ({
      id: user.id,
      nome: user.nome,
      email: user.email,
      role: await this.get(`roles/${user.role}`)
    }))
  }
  
  async getUserById(id) {
    const user = await this.get(`users/${id}`)
    user.role = await this.get(`roles/${user.role}`)
    return user
  }

  async adicionaUser(user) {
    user.id = Date.now()
    const role = await this.get(`roles?type=${user.role}`)
    await this.post(`users`, { ...user, role: role[0].id })
    return ({
      ...user,
      role: role[0]
    })
  }

  async atualizaUser(novosDados) {
    const role = await this.get(`roles?type=${novosDados.user.role}`)
    await this.put(`users/${novosDados.id}`, { ...novosDados.user, role: role[0].id })
    return ({
      ...this.respostaCustom,
      user: {
      ...novosDados.user,
      role: role[0]
      }
    })
  }

  async removeUser(id) {
    await this.delete(
      `users/${id}`,
    )
    return id
  }

  // async getMostViewedMovies(limit = 10) {
  //   const data = await this.get('movies', {
  //     per_page: limit,
  //     order_by: 'most_viewed',
  //   })
  //   return data.results
  // }
}

module.exports = UsersAPI