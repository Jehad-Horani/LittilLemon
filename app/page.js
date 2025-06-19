import Image from "next/image";
import styles from "./page.module.css";
import Header from "./components/Header";
import Link from "next/link";
import SpecialsSection from "./components/Specials";
import Testimonials from "./components/Testimonials";
import Littillemoninfosec from "./components/Littillemoninfo";
import Footersec from "./components/Footer";


export default  function Home() {
  
       
  return (
    <div>
      <header className={styles.header}>
        <div className={styles.hero}>
          <div className={styles.text}>
            <h1>LITTLE LEMON</h1>
            <h3>Chicago</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <button>
              <Link href="/reservation">Reserve a Table</Link>
            </button>
          </div>

          <img
            src="/herophoto.png"
            width="375"
            height="432"
            alt="Hero"
            className={styles.image}
          />
        </div>
      </header>
      <main>

        <SpecialsSection />
        <Testimonials />
        <Littillemoninfosec />
        <br />        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <Footersec />



      </main>
    </div>
  );
}

