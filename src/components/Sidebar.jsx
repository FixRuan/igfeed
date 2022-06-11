import styles from './Sidebar.module.css';

export function SideBar() {

    return (
        <aside className={styles.sidebar}>
            <img src="https://images.unsplash.com/photo-1573638732620-ab47b3fcfbef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80" />

            <div className={styles.profile}>
                <strong>Ruan Pablo</strong>
                <span>Web Developer</span>
            </div>

            <footer>
                <a href="#"></a>
            </footer>
        </aside>
    )
}