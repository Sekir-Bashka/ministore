//принимает данные приложения в виде пропсов и раскладывает их по HTML-тегам
import styles from "./AppCard.module.css";

//Жестко описывает структуру объекта приложения, который ожидается на вход
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
  price: number;
  isFree: boolean;
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
        {/* динамически склеивает базовый домен сайта и относительный путь к картинке, который пришел из API */}
        {/* Знак ?. защищает код от падения, если объект cover вдруг окажется пустым */}
      </div>

      <div className={styles.cardContent}>
        <div className={styles.cardHeader}>
          <h2 className={styles.cardTitle}>{title}</h2>
          <span className={styles.price}>
            {isFree ? "Бесплатно" : `${price} ₽`}
            {/* проверяет флаг свободы */}
            {/* если он true, выводится текст «Бесплатно», иначе — стоимость в рублях */}
          </span>
        </div>

        <p className={styles.description}>{description}</p>

        <div className={styles.cardFooter}>

          <span>{platforms}</span> {/* выводит массив платформ */}
        </div>
      </div>
    </article>
  );
}
