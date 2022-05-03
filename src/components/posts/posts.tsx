import styles from './posts.module.css'
import { Posts } from '../../types/Posts'
import { useState, useEffect } from 'react'
import { error } from 'console';

type InputChangeEvent = React.ChangeEvent<HTMLInputElement>
type TextAreaChangeEvent = React.ChangeEvent<HTMLTextAreaElement>


const Post = () => {
        const [loading, setLoading] = useState(false);
        const [posts, setPosts] = useState<Posts[]>([]);
        const [fetchError, setFechError] = useState(false);
        const [titulo, setTitulo] = useState('');
        const [descricao, setDescricao] = useState('');

        useEffect(() => {

        }, [])

        const HandlePosts = async () => {
                try {
                        setLoading(true)
                        let response = await fetch('https://jsonplaceholder.typicode.com/posts')
                        let json = await response.json();
                        setPosts(json);
                        setLoading(false)
                        setFechError(false);

                } catch (error) {
                        setFechError(true);
                        console.error('error na API:', error)
                }

        }

        const handlett = (event: InputChangeEvent) => {
                setTitulo(event.target.value)
                console.log('event', event.target.value)
        }

        const handlearea = (event: TextAreaChangeEvent) => {
                setDescricao(event.target.value)
                console.log('eventDois', event?.target.value)
        }

        const handleIncluir = async () => {
                if (titulo && descricao) {

                        let res = await fetch("https://jsonplaceholder.typicode.com/posts", {
                                method: 'POST',
                                body: JSON.stringify({
                                        title: titulo,
                                        body: descricao,
                                        userId: 1
                                }),
                                headers: {
                                        'Content-Type': 'application/json'
                                }
                        });
                        let json = await res.json();
                        console.log('json ', json)
                        if(json.id){
                                alert(`Post add com sucesso!!', ${titulo} ${descricao}`)
                        }else{
                                alert('Erro no enviou do post!!')
                        }
                        setDescricao('')
                        setTitulo('')
                } else {
                        alert('Por favor, preencher os campos!!! ')
                }
        }

        return (
                <div className={styles.posts}>
                        <label htmlFor="title">Titulo</label>
                        <input type="text" id="title" value={titulo} onChange={handlett} />
                        <br />
                        <br />
                        <textarea name="textarea" value={descricao} id="textarea" onChange={handlearea}></textarea>
                        <button onClick={handleIncluir}>Incluir Post</button>
                        <br />

                        <p>Titulo:{titulo}</p>
                        <p>Descrição:{descricao}</p>
                        <p>Total: {titulo}{titulo.length > 0 ? `${titulo} - ` : ''} {descricao}</p>
                        <br />
                        {loading && posts.length > 1 &&
                                <div>
                                        <p>Carregando os Posts....</p>
                                </div>
                        }
                        {console.log('post', posts.length)}
                        {posts.length === 0 && fetchError &&
                                <div>
                                        <p>Erro nos Posts....</p>
                                </div>
                        }
                        <button onClick={HandlePosts}>Aparecer Posts!</button>
                        {posts.length > 1 &&
                                <p>Total:{posts.length} posts</p>
                        }
                        {posts.length === 1 &&
                                <p>Total:{posts.length} post</p>
                        }

                        {posts.map((post, index) => (
                                <div key={index} className={styles.post}>
                                        <h2>Id:{post.id}</h2>
                                        <h6>UserId: {post.userId}</h6>
                                        <h4>Title:{post.title}</h4>
                                        <h5>Descrição:{post.body}</h5>
                                </div>
                        ))}
                </div>
        )

}

export default Post