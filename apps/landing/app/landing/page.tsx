//серверный компонент
//отвечает за получение данных с бэкенда и рендеринг HTML-структуры каталога

import { Filter } from "@/app/landing/Filter";
import { AppCard } from "../../components/AppCard/AppCard";

export type CatalogApp = {
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

//асинхронные функции
async function getData(isFree: string): Promise<CatalogApp[]> {

  const response = await fetch(
    `https://ministor.ru/api/landing/apps?isFree=${isFree}`, //запрос fetch к внешнему API
  );
  const data = await response.json();
  return data.items;
}

export default async function Landing(props: any) {
  const { isFree } = await props.SearchParams; //входной аргумент функции
                                              //извлекает текущее значение фильтра из URL
  const apps = await getData(isFree);
  return (
    <div>
      landing
      <div>
        <Filter />
      </div>
      {apps.length > 0 ? //если массив не пустой, код перебирает его
                        // и для каждого элемента отрисовывает компонент карточки
        apps.map((app: CatalogApp) => (<AppCard {...app} key={app.id} />)
      ) : (
        <div>Приложений не найдено</div> //Если приложений по заданному фильтру нет, выводится заглушка
      )}
    </div>
  );
}
