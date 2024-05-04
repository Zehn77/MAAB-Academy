import { v4 as uuidv4 } from 'uuid';

export default function CourseForStudents() {

    const items = [
        {
            title: 'IT sohasiga qiziquvchilar uchun',
            description: `BI (Business Intelligence)ni o'rganmoqchi bo'lganlar uchun`,
            id: uuidv4()
        },
        {
            title: `Zamonaviy va eng talabgir kasb egasi bo'lishni xohlaganlar uchun.`,
            description: `Hozirda BI mutaxassislariga bo'lgan talab kundan kunga ortib bormoqda va bu kursni o'rganish orqali yuqori daromadli kasb egasi bo'lishingiz mumkin.`,
            id: uuidv4()
        },
        {
            title: `Masofadan ishlashni xohlovchilar uchun`,
            description: `BI mutaxassislari istalgan joydan masofaviy ishlash imkoniyatiga ega. O'zbekistonda turgan xolda Yevropa va Amerika loyihalarida ishlashingiz mumkin.`,
            id: uuidv4()
        },
        {
            title: `Mantiqiy va tanqidiy fikrlovchilar uchun`,
            description: `BI mutaxassislari maʼlumotlar bazasi bilan ishlaganliklari uchun ulardan mantiqiy va tanqidiy fikrlash talab qilinadi.`,
            id: uuidv4()
        },
        {
            title: `Ingliz tili darajasi B2 dan yuqori boʻlganlar uchun.`,
            description: `Darslar asosan ingliz tilida o'tilganligi uchun o'quvchilardan ingliz tilini bilish talab qilinadi.`,
            id: uuidv4()
        },
        {
            title: `Tezroq daromadga chiqishni xohlovchilar uchun`,
            description: `10 oyda kursni bitirib, BI mutaxassisiga aylanish orqali tezda daromadli kasb egasina aylanishiningiz mumkin.`,
            id: uuidv4()
        },
    ];

    return (
        <div className="bg-blue-500 text-white max-w-[1300px] p-10 mx-auto rounded-3xl my-10 bg-gradient-to-b from-blue-600 to-blue-300">
            <p className="md:text-3xl text-2xl text-center uppercase leading-normal	">
                Kurs kimlar uchun?
            </p>
            <div className="grid sm:grid-cols-12 md:grid-cols-12 gap-3 max-w-[1000px] mx-auto my-5">
                {items.map(item => (
                    <div key={item.id} className='sm:col-span-12 md:col-span-4 w-full p-3 border-2 rounded-2xl border-[#FFFFFF3D]'>
                        <p className='font-semibold	text-lg text-balance'>
                            {item.title}
                        </p>
                        <p className='text-xs mt-1'>
                            {item.description}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}