import Link from 'next/link'
import styles from '../styles/Header.module.css'

const Header = () => {
  return (
    <header className={styles.header}>
        <div className="contenedor">
           <div className={styles.bar}>
   

            <nav className={styles.navigation}>
                <Link href="/">About</Link>
                <Link href="/aboutUs">Resume</Link>
                <Link href="/blog">Portfolio</Link>
                <Link href="/shop">Blog</Link>
                <Link href="/shop">Contact</Link>

            </nav>
           </div>
        </div>
    </header>
  )
}

export default Header