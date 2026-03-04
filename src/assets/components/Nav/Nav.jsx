import styles from './nav.module.css';
import logo from './logo_nav.png'
import logo_rafael from './logo_rafael.png'

function Nav() {
  return (
    <nav className={styles.Nav}>
      <div className={styles.nav_img}>
     <img src={logo} alt="logo da nexo" width={100}/>
      </div>
      <div className={styles.Nav_menu}>
   <img src={logo_rafael} className={styles.Nav_avatar} alt="" width={90} />
        <a href="#" className={styles.Nav_link}>Logaut</a>
      </div>
    </nav>
  );
}

export default Nav;
