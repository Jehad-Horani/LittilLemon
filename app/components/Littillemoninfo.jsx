import styles from './littillemoninfo.module.css'
import Image from 'next/image'


export default function Littillemoninfosec(){
    return(
        <section className={styles.header}>
<div className={styles.text}>
            <h1>LITTLE LEMON</h1>
            <h3>Chicago</h3>
            <p>
             Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. 
            </p>
           
          </div>



<div className={styles.imageWrapper}>
      <Image
        src="/image1.png"
        alt="Image 1"
        width={300}
        height={300}
        className={styles.image1}
      />
      <Image
        src="/image2.png"
        alt="Image 2"
        width={300}
        height={300}
        className={styles.image2}
      />
    </div>













        </section>
    )
}