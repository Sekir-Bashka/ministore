"use client";

import { useRouter } from "next/navigation";

function Filter() {
    const router = useRouter();
    const handleChange = (e: any) => {
        const checked = e.currentTarget.checked;
        router.push(`/landing?isFree=${checked}`);
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