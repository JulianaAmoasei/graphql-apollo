const path = require('path')
const fs = require('fs')

const pessoas = require('../datasets/pessoas.json')
const filePath = path.join(__dirname, '../datasets/pessoas.json');

class PessoasController {

  listaPessoas() {
    return pessoas
  }

  buscaPessoaPorId(id) {
    return pessoas.find(pessoa => pessoa.id === Number(id))
  }

  adicionaPessoa(dadosPessoa) {
    const newUser = {id: Date.now(), ...dadosPessoa}
    fs.readFile(filePath, 'utf8', (err, data) => {
      const dados = JSON.parse(data)
      dados.push(newUser)
      fs.writeFile(filePath, JSON.stringify(dados, null, 2), () => newUser )
    })
    return newUser
  }

  atualizaPessoa(dadosAtualizados) {
    readFile(data => {

      // add the new user
      const userId = req.params["id"]
      data[userId] = req.body

      writeFile(JSON.stringify(data, null, 2), () => {
          res.status(200).send(`pessoas id:${userId} updated`)
      })
  })


    // const registroPessoa = pessoas.find(pessoa => pessoa.id === Number(dadosAtualizados.id) )

    // const novoRegistroPessoa = {}

    // for (let campo in dadosAtualizados) {
    //   dadosAtualizados[campo] = dadosAtualizados[campo]
    // }

    // console.log(novoRegistroPessoa)

    // fs.readFile(filePath, 'utf8', (err, data) => {
    //   const dados = JSON.parse(data)
    //   dados.push(newUser)
    //   fs.writeFile(filePath, JSON.stringify(dados, null, 2), () => newUser )
    // })
    // return newUser

    // return registroPessoa
  }

}

module.exports = PessoasController

// for (let campo in dadosAtualizados) {
//   dadosAtualizados[campo] === undefined 
//   ? registroPessoa[campo] 
//   : registroPessoa[campo] = dadosAtualizados[campo]
// }