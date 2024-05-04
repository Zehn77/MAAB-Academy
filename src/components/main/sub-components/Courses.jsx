import { v4 as uuidv4 } from 'uuid';

export default function Courses() {

    const data = {
        title: `MAAB Akademiyasida BI imkoniyatlarini oching!`,
        description: `Biz nafaqat nazariyani o'rgatamiz, balki o'quvchilarimizga qisqa vaqt ichida global miqyosda raqobatbardosh dasturchilar bo'lish imkoniyatini beradigan haqiqiy bilimlarni taqdim etamiz. Sizning kar’erangiz butkul o'zgarishi shu erdan boshlanadi`,
        items: [
            {
                name: `DATA ANALYTICS`,
                definition: `Aniq tushunchalar va tahlillarga sho'ng'ing. Ma'lumotlardan mazmunli namunalarni olish, biznes qarorlarini qabul qilish imkoniyatlarini kengaytirish uchun ilg'or usullarni o'rganing. Bizning amaliy yondashuvimiz sizning ishga tayyor bo’lishingizni ta'minlaydi.`,
                price: `23,975,000 so'm`,
                id: uuidv4()
            },
            {
                name: `DATA ENGINEERING`,
                definition: `Ishonchli ma'lumotlar infratuzilmasini qurishni o'rganing. Data Engineering sohasida muvaffaqiyatli kar’yera qurish uchun ma'lumotlar tizimlarini loyihalash va joriy etish ko'nikmalariga ega bo'ling. Haqiqiy loyihalar sizning amaliy tajribangizni oshiradi.`,
                price: `23,975,000 so'm`,
                id: uuidv4()
            }
        ]
    };

    return (
        <div className="bg-white p-8 rounded-3xl max-w-[1350px] mx-auto">
            <p className="text-center text-[#1460F2] font-bold text-xl md:text-2xl">
                {data.title}
            </p>
            <p className="text-center font-normal text-[#000000CC] text-ms md:text-lg max-w-[900px] my-4 mx-auto">
                {data.description}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-8 mt-7">
                {data.items.map(item => (
                    <div key={item.id} className="bg-[#F5F5F7] py-7 rounded-2xl flex flex-col justify-between">
                        <div className='px-7'>
                            <p className='font-semibold	text-md md:text-xl text-[#1460F2]'>
                                {item.name}
                            </p>
                            <p className='md:text-base text-sm	texg-[#000000CC] w-11/12 sm:w-full mt-5 mb-7'>
                                {item.definition}
                            </p>
                        </div>
                        <div className='bg-white px-7 py-4'>
                            <p className='font-normal	text-xs	text-[#454545]'>Kurs narxi:</p>
                            <p className='font-medium	'>{item.price}</p>
                        </div>
                    </div>
                ))}
            </div>
            
<div className="gradient-border">
    <p>This is a content inside a div with a gradient border.</p>
</div>
        </div>
    );
}