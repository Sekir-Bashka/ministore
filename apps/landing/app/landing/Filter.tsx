//чекбокс-фильтр, чтобы показывалось только бесплатное

"use client"; //клиентский компонент

import { useRouter } from "next/navigation";

function Filter() {
    const router = useRouter();

    //срабатывает при каждом клике на чекбокс
   //считывает состояние (true или false) из e.currentTarget.checked
    const handleChange = (e: any) => {
        const checked = e.currentTarget.checked;
        router.push(`/landing?isFree=${checked}`); //инамически обновляет строку URL браузера
                                                  //без полной перезагрузки страницы
    };
    return (
        <div>
            <label>
                <input type="checkbox" onChange={handleChange} /> Бесплатно
            </label>
        </div>
    );
}
export { Filter };