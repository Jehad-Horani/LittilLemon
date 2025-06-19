import styles from './Footer.module.css';

export default function Footersec() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.logoSection}>
          <a href="#" className={styles.logoText}>LITTLE</a>
          <a href="#">
            <img
              alt="Yellow lemon fruit with two green leaves on top"
              className={styles.logoImg}
              src="/footerlemon.png"
              width="80"
              height="100"
            />
          </a>
          <a href="#" className={`${styles.logoText} ${styles.lemon}`}>LEMON</a>
        </div>

        <div className={styles.section}>
          <span className={styles.sectionTitle}>Doormat Navigation</span>
          <a href="/">Home</a><br/>
          <a href="/menu">Menu</a><br/>
          <a href="/about">About</a><br/>
          <a href="reservation">Reservations</a><br/>
          <a href="order">Order Online</a><br/>
          <a href="/login">Login</a>
        </div>

        <div className={`${styles.section} ${styles.contact}`}>
          <span className={styles.sectionTitle}>Contact</span>
          <a href="#">Address</a><br/>
          <a href="#">Phone</a><br/>
          <a href="#">Email</a>
        </div>

        <div className={styles.section}>
          <span className={styles.sectionTitle}>Social Media Links</span>
          <a href="#">Facebook</a><br/>
          <a href="#">Instagram</a><br/>
          <a href="#">Twitter</a><br/>
          <a href="#">YouTube</a>
        </div>
      </div>
    </footer>
  );
}
