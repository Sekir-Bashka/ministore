//компонент автоматически рендерится вместо упавшей страницы, 
//если в приложении произошла критическая runtime-ошибка
"use client";
import Link from "next/link";

function ErrorPage() {
  return (
    <div>
      {/* безопасная ссылка для возврата на главную без полной перезагрузки */}
      Внутренняя ошибка сервера <Link href="/">Перейдите на Главную</Link>
    </div>
  );
}

export default ErrorPage;
