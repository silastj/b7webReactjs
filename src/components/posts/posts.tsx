import styles from './posts.module.css'
import { Posts } from '../../types/Posts'
import { useState, useEffect } from 'react'


const Post = () => {
        const [loading, setLoading] = useState(false);
        const [posts, setPosts] = useState<Posts[]>([]);

        useEffect(() => {

        }, [])

        const HandlePosts = async () => {
                try {
                        setLoading(true)
                        let response = await fetch('https://sonplaceholder.typicode.com/posts')
                        let json = await response.json();
                        setPosts(json);
                        setLoading(false)

                } catch (error) {
                        console.error('error na API:', error)
                }

        }


        return (
                <div className={styles.posts}>
                        {loading && posts.length > 1 &&
                                <div>
                                        <p>Carregando os Posts....</p>
                                </div>
                        }
                        {!loading && posts.length === 0 &&
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