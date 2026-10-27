const express = require('express');
const prisma = require('../config/db');

async function welcomeFunction(req, res) {
    return res.status(200).json({ message: 'Welcome to the Musicas API!' });
}

async function getAllMusicas(req, res) {
    try {
        const musicas = await prisma.musica.findMany();
        return res.status(200).json(musicas);
    } catch (error) {
        console.error('Error fetching musicas:', error);
        return res.status(500).json({ error: 'An error occurred while fetching musicas.' });
    }
}

async function getMusicaById(req, res) {
    const { id } = req.params;
    try {
        const musica = await prisma.musica.findUnique({
            where: { id: parseInt(id) },
        });
        if (!musica) {
            return res.status(404).json({ error: 'Musica not found.' });
        }
        return res.status(200).json(musica);
    } catch (error) {
        console.error(`Error fetching musica with id ${id}:`, error);
        return res.status(500).json({ error: 'An error occurred while fetching the musica.' });
    }
}


async function getMusicaByTitulo(req, res) {
    const { titulo } = req.params;
    try {
        const musica = await prisma.musica.findUnique({
            where: { titulo: titulo },
        });
        if (!musica) {
            return res.status(404).json({ error: 'Musica not found.' });
        }
        return res.status(200).json(musica);
    } catch (error) {
        console.error(`Error fetching musica with titulo ${titulo}:`, error);
        return res.status(500).json({ error: 'An error occurred while fetching the musica.' });
    }
}

async function createMusica(req, res) {
    const { titulo, artista, album, genero, lancamento } = req.body;
    try {
        const newMusica = await prisma.musica.create({
            data: {
                titulo,
                artista,
                album,
                genero,
                lancamento: lancamento ? new Date(lancamento) : null,
            },
        });
        return res.status(201).json(newMusica);
    } catch (error) {
        console.error('Error creating musica:', error);
        return res.status(500).json({ error: 'An error occurred while creating the musica.' });
    }
}

async function updateMusica(req, res) {
    const { id } = req.params;
    const { titulo, artista, album, genero, lancamento } = req.body;
    try {
        const updatedMusica = await prisma.musica.update({
            where: { id: parseInt(id) },
            data: {
                titulo,
                artista,
                album,
                genero,
                lancamento: lancamento ? new Date(lancamento) : null,
            },
        });
        return res.status(200).json(updatedMusica);
    } catch (error) {
        console.error(`Error updating musica with id ${id}:`, error);
        return res.status(500).json({ error: 'An error occurred while updating the musica.' });
    }
}

async function deleteMusica(req, res) {
    const { id } = req.params;
    try {
        await prisma.musica.delete({
            where: { id: parseInt(id) },
        });
        return res.status(204).send();
    } catch (error) {
        console.error(`Error deleting musica with id ${id}:`, error);
        return res.status(500).json({ error: 'An error occurred while deleting the musica.' });
    }
}




module.exports = {
    welcomeFunction,
    getAllMusicas,
    getMusicaById,
    getMusicaByTitulo,
    createMusica,
    updateMusica,
    deleteMusica
};