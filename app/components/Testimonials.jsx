import styles from "./Testimonials.module.css";
import Image from 'next/image';

export default function Testimonials() {
  const reviews = [
    {
      name: "Sarah",
      image: "/test.png",
      rating: "⭐⭐⭐⭐⭐",
      text: "The famous greek salad of crispy veggies was amazing!"
    },
    {
      name: "Ali",
      image: "/test.png",
      rating: "⭐⭐⭐⭐",
      text: "Fresh, flavorful, and perfect delivery service."
    },
    {
      name: "Lina",
      image: "/test.png",
      rating: "⭐⭐⭐⭐⭐",
      text: "Reminds me of home – the dessert was unreal!"
    },
    {
      name: "James",
      image: "/test.png",
      rating: "⭐⭐⭐⭐",
      text: "Simple ingredients, but great taste and texture."
    }
  ];

  return (
    <section className={styles.Testimonials}>
      <h1 className={styles.header}>Testimonials</h1>
      <div className={styles.cards}>
        {reviews.map((review, index) => (
          <div key={index} className={styles.card}>
            <h3>{review.rating}</h3>
            <div className={styles.cardTitle}>
              <Image
                src={review.image}
                width={50}
                height={50}
                alt={review.name}
              />
              <h4>{review.name}</h4>
            </div>
            <p>{review.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
