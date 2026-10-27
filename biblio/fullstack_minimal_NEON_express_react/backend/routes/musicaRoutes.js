const express = require('express');
const router = express.Router();
const musicasController = require('../controllers/musicasController');

router.get('/welcome', musicasController.welcomeFunction);
router.get('/musicas', musicasController.getAllMusicas);
router.get('/musicas/:id', musicasController.getMusicaById);
router.get('/musicas/titulo/:titulo', musicasController.getMusicaByTitulo);
router.post('/musicas', musicasController.createMusica);
router.put('/musicas/:id', musicasController.updateMusica);
router.delete('/musicas/:id', musicasController.deleteMusica);

module.exports = router;