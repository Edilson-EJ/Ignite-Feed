import { useState } from 'react'
import { Avatar } from './Avatar.jsx'
import { Comment } from './comment.jsx'
import styles from './Post.module.css'


export function Post( { author, publishedAt, content}){
    const [comments, setComments] = useState([
        'post muito bacana, hen?'

    ])

    function handleCreateNewComment(){
            event.preventDefault();

            const newContentText = event.target.comment.value


            setComments([...comments, newContentText]);
    }

    return (

        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar  src= { author.avatarUrl }/>
                    <div className={styles.authorInfo}>
                        <strong>{ author.name }</strong>
                        <span>{ author.role }</span>
                    </div>
                </div>

                <time title='28 de julho' dateTime='2022 -07 - 28 21:10:10 '>Publicado há 1h</time>
            </header>

            <div className={styles.content}>
                { content.map(line => {
                    if(line.type == 'paragraph'){
                        return <p>{line.content}</p>;
                    }else if (line.type == 'link'){
                        return <p><a href='#'>{ line.content}</a></p>
                    }
                }) }
                    
            </div>

            <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
                <strong>Deixe seu Feedback</strong>

                <textarea
                    name='comment'

                    placeholder='Deixei um comentário'
                />

                <footer>
                    <button type='submit'>Publicar</button>
                </footer>
                
            </form>

            <div className={styles.commentList}>
                { comments.map(comment =>{
                    return <Comment content={comment}/>
                }) }
                
            </div>
        </article>
    )
}