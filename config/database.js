const Sequelize = require('sequelize');

const sequelize = new Sequelize('fluxo_de_caixa_nodejs', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
});

module.exports = sequelize;