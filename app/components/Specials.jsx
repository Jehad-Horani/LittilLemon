import styles from "./Specials.module.css"
import Image from 'next/image';
import Link from 'next/link';

export default function SpecialsSection() {
  return (
    <section className={styles.specials}>
      <div className={styles.header}>
        <h2>This weeks specials</h2>
        <Link href="/menu" className={styles.menuButton}>
          Online Menu
        </Link>
      </div>

      <div className={styles.cards}>
        <div className={styles.card}>
          <Image src="/greek-salad.png" alt="Greek Salad" width={300} height={200} className={styles.cardImage} />
          <div className={styles.cardContent}>
            <div className={styles.cardTitle}>
              <h3>Greek salad</h3>
              <span className={styles.price}>$12.99</span>
            </div>
            <p>
              The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese,
              garnished with crunchy garlic and rosemary croutons.
            </p>
            <Link href="/menu">
              <span className={styles.delivery}>Order a delivery 🚴‍♂️</span>
            </Link>
          </div>
        </div>

        <div className={styles.card}>
          <Image src="/bruschetta.png" alt="Bruschetta" width={300} height={200} className={styles.cardImage} />
          <div className={styles.cardContent}>
            <div className={styles.cardTitle}>
              <h3>Bruschetta</h3>
              <span className={styles.price}>$5.99</span>
            </div>
            <p>
              Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned
              with salt and olive oil.
            </p>
            <Link href="/menu">
              <span className={styles.delivery}>Order a delivery 🚴‍♂️</span>
            </Link>
          </div>
        </div>

        <div className={styles.card}>
          <Image src="/lemon-dessert.png" alt="Lemon Dessert" width={300} height={200} className={styles.cardImage} />
          <div className={styles.cardContent}>
            <div className={styles.cardTitle}>
              <h3>Lemon Dessert</h3>
              <span className={styles.price}>$5.00</span>
            </div>
            <p>
              This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.
            </p>
            <Link href="/menu">
              <span className={styles.delivery}>Order a delivery 🚴‍♂️</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
};