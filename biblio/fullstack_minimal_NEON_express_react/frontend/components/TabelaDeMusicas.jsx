import react from 'react'


export default function TabelaDeMusicas({ musicas, onDelete, onEdit }) {

function converteDataParaFormatoBrasileiro(data) {
      return new Intl.DateTimeFormat('pt-BR', {
    timeZone: 'UTC' // Garante que o fuso horário não altere o dia
}).format(new Date(data));
}


    return (
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Título</th>
                    <th>Artista</th>
                    <th>Álbum</th>
                    <th>Ano</th>
                </tr>
            </thead>
            <tbody>
                {musicas.map((musica) => (
                    <tr key={musica.id}>
                        <td>{musica.id}</td>
                        <td>{musica.titulo}</td>
                        <td>{musica.artista}</td>
                        <td>{musica.album}</td>
                        <td>{converteDataParaFormatoBrasileiro(musica.lancamento)}</td>
                        <td>
                            <button onClick={() => onDelete(musica.id)}>Delete</button>
                        </td>
                        <td>
                            <button onClick={() => onEdit(musica)}>Editar</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
