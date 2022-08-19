import { Trash } from 'phosphor-react';
import { ThumbsUp } from 'phosphor-react';
import { Avatar } from './Avatar';

import styles from './Comment.module.css';

export function Comment( { content }){
    return(
        <div className={styles.comment}>
            <Avatar hasBorder={false} src='https://avatars.githubusercontent.com/u/50754896?v=4'/>
            
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authotAndtime}>
                            <strong>Edilson De França</strong>
                            <time title='28 de julho' dateTime='2022 -07 - 28 21:10:10 '>Cerca de 1 hora atrás</time>

                        </div>
                        <button title='Deletar comentário'>
                            <Trash sise={24}/>
                        </button>
                    </header>

                    <p>{ content }</p>
                    
                </div>

                <footer>
                    <button>
                        < ThumbsUp />
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}