'use strict'

import { Router } from 'express'
let router = Router()

router.get('/', (req, res, next) => {
    res.send(`CodeMasters server V1 API`)
})

import alumnos from './codemasters/v1/alumnos/index.js'
router.use('/alumnos', alumnos)

import profesores from './codemasters/v1/profesores/index.js'
router.use('/profesores', profesores)

import cursos from './codemasters/v1/cursos/index.js'
router.use('/cursos', cursos)

import auth from './codemasters/v1/index.js'
router.use('/', auth)

export default router
