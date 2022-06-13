import { Trash, ThumbsUp } from 'phosphor-react';
import styles from './Comment.module.css';

export function Comment() {
    return (
        <div className={styles.comment}>
            <img src="https://github.com/fixRuan.png" alt="" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Ruan Pablo</strong>
                            <time title='12 de Junho às 12:40 ' dateTime="2022-06-12">Cerca de 1h atrás</time>
                        </div>

                        <button title="Deletar comentário">
                            <Trash size={20} />
                        </button>
                    </header>

                    <p>Muito Bom Ruan, parabéns!!</p>
                </div>


                <footer>
                    <button>
                        <ThumbsUp size={20} />
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}