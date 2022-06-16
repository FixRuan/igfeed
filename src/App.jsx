import { Header } from "./components/Header";
import styles from './App.module.css';
import { Post } from "./components/Post";
import { SideBar } from "./components/Sidebar";

const posts = [
    {
        id: 1,
        author: {
            avatarUrl: 'https://github.com/fixRuan.png',
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
        ],
        publishedAt: new Date('2022-05-03 20:00:00')
    },
    {
        id: 2,
        author: {
            avatarUrl: 'https://github.com/filipedeschamps.png',
            name: 'Filipe Deschamps',
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
        ],
        publishedAt: new Date('2022-05-10 20:00:00')
    }
]


function App() {
    return (
        <>
            <Header />

            <div className={styles.wrapper}>

                <SideBar />

                <main>
                    {posts.map(post =>
                        <Post
                            key={post.id}
                            author={post.author}
                            content={post.content}
                            publishedAt={post.publishedAt}
                        />
                    )}
                </main>
            </div>
        </>
    )
}

export default App
