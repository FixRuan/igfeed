import styles from './Header.module.css';
import logosvg from '../assets/logo.svg';

export function Header() {
    return (
        <div className={styles.header}>
            <img src={logosvg} alt="Logotipo do Ignite" />
            <h2>Ignite Feed</h2>
        </div>
    )
}