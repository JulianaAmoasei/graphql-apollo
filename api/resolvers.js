const { MODULOS } = require('./config')
const { arquivos } = require('./util')

const arquivosCarregados = arquivos(MODULOS, 'resolvers')

module.exports = arquivosCarregados