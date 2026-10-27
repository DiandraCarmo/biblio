import React, { useState , useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import { musicaService } from '../api/api'
import TabelaDeMusicas from './TabelaDeMusicas'

function MusicaList() {
  const navigate = useNavigate()
  const [musicas, setMusicas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    loadMusicas();
  }, []);


  function onDeleteHandler(id) {
    musicaService.deleteMusica(id)
      .then(() => {
        // Atualiza a lista de músicas após a exclusão
        setMusicas(musicas.filter(musica => musica.id !== id));
      })
      .catch((error) => {
        console.error('Erro ao excluir música:', error);
        setError('Erro ao excluir música. Por favor, tente novamente mais tarde.');
      });
   
    
  }

  const loadMusicas = async () => {
    try {
      setLoading(true);
      const data = await musicaService.getAllMusicas();
      setMusicas(data);
      console.log('Fetched musicas:', data);
      setLoading(false);
    } catch (error) {
      setError('Erro ao carregar músicas. Por favor, tente novamente mais tarde.');
      console.error('Error fetching musicas:', error);
      
    }finally {
      setLoading(false)
    }
  };

  function handlerEdit(musica) {
    navigate('/form', { state: { musica:musica, editando: true } });
  }

    





  return (
    <div>
      <h2>Listar Músicas</h2>
      {loading && <p>Carregando músicas...</p>}

      <TabelaDeMusicas musicas={musicas} onDelete={onDeleteHandler} onEdit={handlerEdit}/>
     


    </div>
  )
}

export default MusicaList