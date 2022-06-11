import { Header } from "./components/Header";
import styles from './App.module.css';
import { Post } from "./components/Post";
import { SideBar } from "./components/Sidebar";

function App() {
    return (
        <>
            <Header />

            <div className={styles.wrapper}>

                <SideBar />

                <main>
                    <Post
                        name="Ruan Pablo"
                        description='is simply dummy text of the printing and typesetting industry.'
                    />

                    <Post
                        name="Ruan Pablo"
                        description='is simply dummy text of the printing and typesetting industry.'
                    />

                </main>
            </div>
        </>
    )
}

export default App
