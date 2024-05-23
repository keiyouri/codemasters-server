'use strict'

import express from 'express'
import config from 'config'
import routes from '../views/index.js'

console.log(`Bienvenido al servidor de CodeMasters`)
console.log(`   Examen UAX 23 de mayo de 2024`)

const app = express()
const port = config.server.port || 3001

app.use(express.json())
app.use('/api', routes)

app.listen(port, () => {
    console.log(`Servidor Express escuchando en http://localhost:${port}`)
})

