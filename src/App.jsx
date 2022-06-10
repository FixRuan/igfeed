import { Header } from "./components/Header";
import styles from './App.module.css';

function App() {
    return (
        <>
            <Header />

            <div className={styles.wrapper}>
                <aside>Sidebar</aside>
                <main></main>
            </div>
        </>
    )
}

export default App
