//глобальный корневой макет. оборачивает все страницы приложения
import Link from "next/link";
import { Fragment } from "react";
import "./globals.css";
import styles from "./page.module.css";

//структура меню
const links = [
  { href: "/", text: "Главная" },
  { href: "/admin", text: "Админка" },
  { href: "/storefront", text: "Витрина" },
  { href: "/landing", text: "Лэндинг" },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body>
        <nav className={styles.nav}>

          {/* перебирает массив и строит ссылки */}
          {links.map(({ href, text }, index) => (
            <Fragment key={href}> {/* сгруппирован, чтобы выводить ссылку и текстовый разделитель " | " */}
              <Link href={href}>{text}</Link>{" "}
              {index !== links.length - 1 && " | "}
              {/* условие гарантирует, что черточка не появится после самой последней ссылки */}
            </Fragment>
          ))}
        </nav>

        {/* динамическая часть макета. cюда next.js автоматически подставляет содержимое текущей страницы */}
        <main>{children}</main>
        <footer className={styles.footer}>Автор: Вася Иванов</footer>
      </body>
    </html>
  );
}
