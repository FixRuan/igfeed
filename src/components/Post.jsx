import styles from './Post.module.css';


export function Post() {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img className={styles.avatar} src="https://github.com/fixRuan.png" alt="" />
                    <div className={styles.authorInfo}>
                        <strong>Ruan Pablo</strong>
                        <span>Web developer</span>
                    </div>
                </div>

                <time title='12 de Junho às 12:40 ' dateTime="2022-06-12">Publicado há 1hr</time>
            </header>

            <div className={styles.content}>
                <p>Fala galeraa 👋</p>
                <p>
                    Acabei de subir mais um projeto no meu portifa.
                    É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
                </p>
                <p><a href='#'>jane.design/doctorcare</a></p>
                <p>
                    <a href='#'>#novoprojeto</a>{' '}
                    <a href='#'>#nlw</a>{' '}
                    <a href='#'>#rocketseat</a>
                </p>
            </div>

            <form className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea
                    placeholder="Deixe seu comentário"
                />

                <button type="submit">Comentar</button>
            </form>
        </article>
    )
}