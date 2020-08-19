const { RESTDataSource } = require('apollo-datasource-rest')

class UsersAPI extends RESTDataSource {
  constructor() {
    super()
    this.baseURL = 'http://localhost:3000'
  }

  async getUsers() {
    return this.get('/users')
  }
  
  async getUserById(id) {
    return this.get(`users/${id}`)
  }

  async adicionaUser(user) {
    return this.post(
      `users`, // path
      user, // request body
    )
  }

  async atualizaUser(user) {
    return this.put(
      `users/${user.id}`,
      { ...user },
    )
  }

  async removeUser(id) {
    return this.delete(
      `users/${id}`,
    )
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