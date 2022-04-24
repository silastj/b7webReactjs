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
    const [loading, setLoading] = useState(false);
    const [fetcherror, setFetcherror] = useState(false)

    useEffect(() => {
        alert('executou')// atualizado ou criado
        // handleFilmes(); roda no inicio do carregamento!
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

    // const handleFilmes = async () => {
    //     fetch('https://api.b7web.com.br/cinema/')
    //         .then((res) => {
    //             return res.json()
    //         })
    //         .then((json) => {
    //             setMovies(json)
    //         })
    //         .catch((e) => {
    //             setLoading(false)
    //             setMovies([])
    //             console.error(e)
    //         })
    // }

    const handleFilmes = async () => {
        try {
            setLoading(true)
            const response = await fetch('https://api.b7web.com.br/cinem')
            const json = await response.json();
            setLoading(false)
            setMovies(json);
        } catch (error) {
            setFetcherror(true)
            setLoading(false)
            setMovies([])
            alert('Tente mais tarde!,')
            console.log(error)
        }
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
                {loading &&
                    <div>Carregando os filmes ...</div>
                }

                {!loading &&
                    <>
                        <h2>Filmes:</h2>
                        <p>Total de filmes: {movies.length}</p>
                        <p>Filmes: </p>
                        <ul className={styles.filmesList}>
                            {movies.map((movi, index) => (
                                <li key={index}><img src={movi.avatar} alt={movi.titulo} /><p>{movi.titulo}</p></li>
                            ))}
                        </ul>
                    </>
                }
                {!loading && movies.length === 0 && fetcherror &&
                    < div className={styles.error}>
                        <p>Tente mais tarde</p>
                    </div>                    
                }
            <button onClick={handleFilmes}>Aparecer Filmes</button>
        </div>
        </div >
    )
}

export default Hooks;