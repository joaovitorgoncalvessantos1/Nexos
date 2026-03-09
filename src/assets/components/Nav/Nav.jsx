import styles from './nav.module.css';
import logo from './logo_nav.png'
import logo_rafael from './logo_rafael.png'

function Nav() {
  return (
    <nav className={styles.Nav}>
      <div className={styles.nav_img}>
     <img src={logo} alt="logo da nexo" width={100}/>
      </div>
    </nav>
  );
}

export default Nav;
