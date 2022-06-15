import { Header } from "./components/Header";
import styles from './App.module.css';
import { Post } from "./components/Post";
import { SideBar } from "./components/Sidebar";

const posts = [
    {
        id: 1,
        author: {
            avatarUrl: 'https://github.com/fixRuan',
            name: 'Ruan Pablo',
            role: 'Web Developer'
        },
        content: [
            {
                type: 'paragraph',
                content: 'Fala galeraa 👋'
            },
            {
                type: 'paragraph',
                content: 'Acabei de subir mais um projeto no meu portifa.É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'
            },
            {
                type: 'link',
                content: 'jane.design/doctorcare'

            },
            {
                type: 'link',
                content: '#novoprojeto'

            },
            {
                type: 'link',
                content: '#nlw'

            },
            {
                type: 'link',
                content: '#rocketseat'

            }

        ]
    }
]


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
