import React from 'react'
import Link from "next/link";
import { useRouter } from "next/router";
import styles from '../Header/styles.module.css';
import backgroundImage from '../Header/Argyle-Executive-Forum-Logo.png';
import searchbarIcon from '../Header/pngwing.com (3).png';
import Image from 'next/image';


const Header = () => {
  return (
    <div className={styles.wrapper}>
            <nav className={styles.Navigation}>    
            <Image className={styles.logo} src={backgroundImage} alt='bGImg'/>        
            <ul className={styles.nav__menu}>
                <li className="nav__item"><a href="#" className={styles.nav_link}>Home</a></li>
                <li className="nav__item"><a href="#" className={styles.nav_link}>About</a></li>
                <li className="nav__item"><a href="#" className={styles.nav_link}>Contacts</a></li>
                <button className={styles.btnLogin}>Login</button>
            </ul>
            </nav>

    <Link className={styles.link} href="/">
      <nav className={styles.navbar}>
        <Image className={styles.searchBar}src={searchbarIcon} alt='searchBar'/>
        <input
        className={styles.input}
        type="text" placeholder="Search">
        </input>
      </nav>
    </Link>
    </div>
    
  )
}

export default Header
