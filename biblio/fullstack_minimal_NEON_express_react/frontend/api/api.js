import axios from 'axios';

const API_URL = "http://localhost:3000/"; // Replace with your API URL

const api = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

export const musicaService = {
    getAllMusicas: async () => {
        try {
            const response = await api.get('/musicas');
            return response.data;
        }catch (error) {
            console.error('Error fetching musicas:', error);
            throw error;
        }
    },

    getMusicaById: async (id) => {
        try {
            const response = await api.get(`/musicas/${id}`);
            return response.data;
        } catch (error) {
            console.error('Error fetching musica:', error);
            throw error;
        }
    },

    createMusica: async (musica) => {
        try {
            console.log('Creating musica:', musica);
            const response = await api.post('/musicas', musica);
            return response.data;
        } catch (error) {
            console.error('Error creating musica:', error);
            throw error;
        }
    },
    deleteMusica: async (id) => {
        try {
            const response = await api.delete(`/musicas/${id}`);
            return response.data;
        } catch (error) {
            console.error('Error deleting musica:', error);
            throw error;
        }
    },
    updateMusica: async (id, musica) => {
        try {
            console.log('Updating musica:', musica);

            const response = await api.put(`/musicas/${id}`, musica);
            return response.data;
        } catch (error) {
            console.error('Error updating musica:', error);
            throw error;
        }
    },
};

export default api;
