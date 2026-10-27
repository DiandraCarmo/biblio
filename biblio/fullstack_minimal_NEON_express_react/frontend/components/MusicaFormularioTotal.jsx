import React, { useState, useEffect } from 'react'

export default function MusicaFormularioTotal  ({ onSubmit, editando, dadosIniciais }) {
  const [titulo, setTitulo] = useState('')
  const [artista, setArtista] = useState('')
  const [album, setAlbum] = useState('')
  const [lancamento, setLancamento] = useState('')

  useEffect(() => {
    console.log('MusicaFormularioTotal - editando:', editando)
    if (editando && dadosIniciais) {
      setTitulo(dadosIniciais.titulo || '')
      setArtista(dadosIniciais.artista || '')
      setAlbum(dadosIniciais.album || '')
      setLancamento(dadosIniciais.lancamento || '')
      console.log('entrou no useEffect do MusicaFormularioTotal com dadosIniciais:', dadosIniciais)
    }
  }, [dadosIniciais,editando])

    const handleSubmit = (event) => {
       
        event.preventDefault()
        console.log
('Formulário enviado!')
        console.log('Dados do formulário:', { titulo, artista, album, lancamento })
        console.log('Dados iniciais:', dadosIniciais)
        onSubmit({ titulo, artista, album, lancamento })
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="titulo">Título:</label>
                <input
                    type="text"
                    id="titulo"
                    value={titulo}
                    onChange={(e) => setTitulo(e.target.value)}
                    required
                />
            </div>
            <div>
                <label htmlFor="artista">Artista:</label>
                <input
                    type="text"
                    id="artista"
                    value={artista}
                    onChange={(e) => setArtista(e.target.value)}
                    required
                />
            </div>
            <div>
                <label htmlFor="album">Álbum:</label>
                <input
                    type="text"
                    id="album"
                    value={album}
                    onChange={(e) => setAlbum(e.target.value)}
                    required
                />  
            </div>
            <div>
                <label htmlFor="lancamento">Lançamento:</label>
                <input
                    type="date"
                    id="lancamento"
                    value={lancamento}
                    onChange={(e) => setLancamento(e.target.value)}
                    required
                />
            </div>
            <button type="submit">{editando ? 'Atualizar Música' : 'Cadastrar Música'}</button>
        </form>
    
    );
}
