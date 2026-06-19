//отображается, если пользователь ввел несуществующий URL
//3 способа навигации обратно на главную
"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const { replace, push } = useRouter();
  return (
    <div>
      {/* безопасная ссылка для возврата на главную без полной перезагрузки */}
      404. <Link href="/">Перейдите на Главную</Link>

      {/* перенаправляет на главную страницу, но заменяет текущий адрес в истории браузера */}
      <button onClick={() => replace("/")}>или так - replace</button>

      {/* добавляет новый адрес в историю браузера */}
      <button onClick={() => push("/")}>или так - push</button>
    </div>
  );
}
