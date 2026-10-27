import React,{useState, useEffect} from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import MusicaFormularioTotal from './MusicaFormularioTotal'
import { musicaService } from '../api/api'

export default function MusicaForm() {
  const navigate = useNavigate()
  const location = useLocation()
  const [editando, setEditando] = useState(false)
  const [dadosIniciais, setDadosIniciais] = useState(null)


   useEffect(() => {
    if (location.state && location.state.editando) {
      setEditando(true);
      setDadosIniciais(location.state.musica);
      console.log('Editando música:', location.state.musica);

      // Se estiver editando, você pode buscar os dados da música a ser editada e preencher o formulário
      // Exemplo: musicaService.getMusicaById(id).then(musica => setFormData(musica));
    }
  }, [location]);

 const handleSubmit = ( data ) => {
   // event.preventDefault();
    // Aqui você pode adicionar a lógica para enviar os dados do formulário para o backend
    if (editando) {
      // Se estiver editando, você pode chamar a função de atualização do serviço
      musicaService.updateMusica(dadosIniciais.id, data)
        .then(() => {
          console.log('Música atualizada com sucesso!');
          navigate('/');
        })
        .catch((error) => {
          console.error('Erro ao atualizar música:', error);
        });
    } else {
      // Se não estiver editando, você pode chamar a função de criação do serviço
      musicaService.createMusica(data)
        .then(() => {
          console.log('Música criada com sucesso!');
          navigate('/');
        })
        .catch((error) => {
          console.error('Erro ao criar música:', error);
        });
  

    console.log('Formulário enviado!');
    console.log('Dados do formulário:', data);
    navigate('/')
  }
}

 

  return (
    <div>
      <h1>Música</h1>
      {editando ? <h2>Editar Música</h2> : <h2>Cadastrar Nova Música</h2>}

      <MusicaFormularioTotal onSubmit={handleSubmit} editando={editando} dadosIniciais={dadosIniciais}/>


     
    </div>
  )
}

