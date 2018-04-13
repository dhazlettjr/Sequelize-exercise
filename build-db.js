'use strict'

let models = require('./models')
let {beaches} = require('./seeders/data/beaches')
let {lifeguards} = require('./seeders/data/lifeguards')
let {castles} = require('./seeders/data/castles')
let {tools} = require('./seeders/data/tools');



models.sequelize.sync({
  force: true
})
  .then(() => {
    return models.Beach.bulkCreate(beaches)
  })
  .then (() => {
    return models.Tool.bulkCreate(tools)
  })
  .then(() => {
    return models.Lifeguard.bulkCreate(lifeguards)
  })
  .then(() => {
    return models.Castle.bulkCreate(castles)
  })
  .then(() => {
    process.exit()
  })
