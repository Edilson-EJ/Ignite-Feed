import { Avatar } from './Avatar.jsx'
import { Comment } from './comment.jsx'
import styles from './Post.module.css'
export function Post(){
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar  src= 'https://avatars.githubusercontent.com/u/50754896?v=4'/>
                    <div className={styles.authorInfo}>
                        <strong>Edilson De França</strong>
                        <span>Web Developer</span>
                    </div>
                </div>

                <time title='28 de julho' dateTime='2022 -07 - 28 21:10:10 '>Publicado há 1h</time>
            </header>

            <div className={styles.content}>
                <p>Fala galeraa 👋</p>

                <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>

                <p>👉{' '} <a href='#'>jane.design/doctorcare</a></p>

                <p>
                    <a href='#'>#novoprojeto</a>{' '}
                    <a href='#'>#nlw</a>{' '}
                    <a href='#'>#rocketseat</a>
                </p>
                    
            </div>

            <form className={styles.commentForm}>
                <strong>Deixe seu Feedback</strong>

                <textarea
                    placeholder='Deixei um comentário'
                />

                <footer>
                    <button type='submit'>Publicar</button>
                </footer>
                
            </form>

            <div className={styles.commentList}>
                <Comment />
                <Comment />
                <Comment />
                
            </div>
        </article>
    )
}