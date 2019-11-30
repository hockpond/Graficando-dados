const sequelize = require('sequelize')

const bd =  new sequelize('usuarios', 'root', 'sintese>marketing', {
    host: 'localhost',
    dialect: 'mysql'
})

const Usuario = bd.define('usuario', {
    telefone: {
        type: sequelize.STRING,
        allowNull: false
    },
    ddd: {
        type: sequelize.INTEGER,
        allowNull: false
    },
    data_de_entrada: {
        type: sequelize.DATEONLY,
        allowNull: false
    }
})

async function contar_entrantes(dia, mes, ano) {
    dados = await Usuario.findAndCountAll({
        where: {
            data_de_entrada: ano + '-' + mes + '-' + dia
        }
    })
    console.log(dados.count)
}
let hoje = new Date();
let entrantes_dia_1 = contar_entrantes(hoje.getDate() - 4, hoje.getMonth() + 1, hoje.getFullYear())
let entrantes_dia_2 = contar_entrantes(hoje.getDate() - 3, hoje.getMonth() + 1, hoje.getFullYear())
let entrantes_dia_3 = contar_entrantes(hoje.getDate() - 2, hoje.getMonth() + 1, hoje.getFullYear())
let entrantes_dia_4 = contar_entrantes(hoje.getDate() - 1, hoje.getMonth() + 1, hoje.getFullYear())
let entrantes_dia_5 = contar_entrantes(hoje.getDate(), hoje.getMonth() + 1, hoje.getFullYear())

let dia_1 = (hoje.getDate() - 4) + '/' + (hoje.getMonth()+1) + '/' + hoje.getFullYear()
let dia_2 = (hoje.getDate() - 3) + '/' + (hoje.getMonth()+1) + '/' + hoje.getFullYear()
let dia_3 = (hoje.getDate() - 2) + '/' + (hoje.getMonth()+1) + '/' + hoje.getFullYear()
let dia_4 = (hoje.getDate() - 1) + '/' + (hoje.getMonth()+1) + '/' + hoje.getFullYear()
let dia_5 = hoje.getDate() + '/' + (hoje.getMonth()+1) + '/' + hoje.getFullYear()

module.exports = {entrantes_dia_1, entrantes_dia_2, entrantes_dia_3, entrantes_dia_4, entrantes_dia_5, dia_1, dia_2, dia_3, dia_4, dia_5}