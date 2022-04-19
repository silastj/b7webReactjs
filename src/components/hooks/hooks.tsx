import { useState, useEffect } from 'react';
import styles from './hooks.module.css'
import { Movie } from '../../types/Movies'

type InputChangeEvent = React.ChangeEvent<HTMLInputElement>

const Hooks = () => {
    const [name, setName] = useState('Silas')
    const [primeiroNome, setPrimeiroNome] = useState('');
    const [ultimoNome, setUltimoNome] = useState('');
    const [nomeFinal, setNomeFinal] = useState('');
    const [movies, setMovies] = useState<Movie[]>([]);

    useEffect(() => {
        alert('executou')// atualizado ou criado
    }, [name])

    useEffect(() => {
        setNomeFinal(`${primeiroNome} ${ultimoNome}`)
    }, [primeiroNome, ultimoNome])

    const handleClick = () => {
        setName('Amós')
    }

    const handleChangeNome = (event: InputChangeEvent) => {
        setPrimeiroNome(event.target.value)
    }

    const handleChangeUltimoNome = (event: InputChangeEvent) => {
        setUltimoNome(event.target.value)
    }

    const handleFilmes = () => {
        fetch('https://api.b7web.com.br/cinema/')
            .then((res) => {
                return res.json()
            })
            .then((json) => {
                setMovies(json)
            })
    }

    return (
        <div className={styles.hooks}>
            <h2>{name}</h2>
            <button onClick={handleClick}>Trocou</button>
            <div>
                <input type="text" placeholder='Digite o seu Primeiro Nome' value={primeiroNome} onChange={handleChangeNome} />
                <input type="text" placeholder='Digite o seu Ultimo Nome' value={ultimoNome} onChange={handleChangeUltimoNome} />
                <p>{nomeFinal}</p>
            </div>
            <div className={styles.filmes}>
                <h2>Filmes:</h2>
                <p>Total de filmes: {movies.length}</p>
                <p>Filmes: </p>
                <ul className={styles.filmesList}>
                    {movies.map((movi, index) => (
                        <li key={index}><img src={movi.avatar} alt={movi.titulo} /><p>{movi.titulo}</p></li>
                    ))}
                </ul>
                <button onClick={handleFilmes}>Aparecer Filmes</button>
            </div>
        </div>
    )
}

export default Hooks;