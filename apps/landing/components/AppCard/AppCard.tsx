import styles from "./AppCard.module.css";

export type AppCardProps = {
  id: string;
  title: string;
  slug: string;
  description: string;
  categoryId: string;
  category: {
    title: string;
  };
  platforms: ("web" | "ios" | "android")[]; 
  price: 0;
  isFree: true;
  releaseDate: "2025-03-15T00:00:00.000Z";
  cover: {
    url: string;
  };
};

export function AppCard({
  title,
  price,
  isFree,
  description,
  platforms,
  cover,
}: AppCardProps) {
  return (
    <article className={styles.card}>
      <div className={styles.imageWrap}>
        <img className={styles.image} src={`https://ministor.ru/${cover?.url}`} alt={title} />
      </div>

      <div className={styles.cardContent}>
        <div className={styles.cardHeader}>
          <h2 className={styles.cardTitle}>{title}</h2>
          <span className={styles.price}>
            {isFree ? "Бесплатно" : `${price} ₽`}
          </span>
        </div>

        <p className={styles.description}>{description}</p>

        <div className={styles.cardFooter}>

          <span>{platforms}</span>
        </div>
      </div>
    </article>
  );
}
