import { useState } from 'react';
import styles from './Post.module.css';
import { Comment } from './Comment';
import { Avatar } from './Avatar';
import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';


export function Post({ author, publishedAt, content }) {
    const [comments, setComments] = useState([]);
    const [newCommentValue, setNewCommentValue] = useState('');


    const publishedDateFormated = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
        locale: ptBR
    });

    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
        locale: ptBR,
        addSuffix: true
    });

    function handleCreateNewComment() {
        event.preventDefault();
        setComments([...comments, newCommentValue]);
        setNewCommentValue('');
    }

    function handleNewCommentChange() {
        event.target.setCustomValidity('');
        setNewCommentValue(event.target.value);
    }

    function deleteComment(comment) {
        const removedComment = comments.filter(c => c !== comment);
        setComments(removedComment);
    }

    function handleNewCommentInvalid() {
        event.target.setCustomValidity('Por favor, digite um comentário');
    }

    const commentIsEmpty = newCommentValue.length === 0;

    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src={author.avatarUrl} />
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>

                <time title={publishedDateFormated} dateTime={publishedAt.toISOString()}>
                    {publishedDateRelativeToNow}
                </time>
            </header>

            <div className={styles.content}>
                {content.map(line => {
                    if (line.type === 'paragraph') {
                        return <p key={line.content}>{line.content}</p>
                    } else if (line.type === 'link') {
                        return (
                            <p key={line.content}><a href="#">{line.content}</a></p>
                        )
                    }
                })}
            </div>

            <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea
                    name="comment"
                    placeholder="Deixe seu comentário"
                    value={newCommentValue}
                    onChange={handleNewCommentChange}
                    onInvalid={handleNewCommentInvalid}
                    required
                />

                <footer>
                    <button disabled={commentIsEmpty} type="submit">Comentar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                {comments.map(comment =>
                    <Comment
                        key={comment}
                        content={comment}
                        onDeleteComment={deleteComment}
                    />)
                }
            </div>
        </article>
    )
}