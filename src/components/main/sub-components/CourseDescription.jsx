import { v4 as uuidv4 } from 'uuid';

export default function CourseDescription() {

    const items = [
        {
            title: 'Shartnoma asosida',
            description: `10 oylik kursni shartnoma asosida o'qishingiz mumkin`,
            id: uuidv4()
        },
        {
            title: 'Shartli Grant',
            description: `Talant dasturi doirasida kursni bepul o'qib, kurs pulini shu soha bo'yicha ishga kirganingizdan so'ng, oyligingizning bir qismidan to'lashingiz mumkin.`,
            id: uuidv4()
        },
        {
            title: '100% Grant',
            description: `Imtihonlardan kerakli ballarni to'plash orqali kursni 100% bepul o'qishingiz mumkin.`,
            id: uuidv4()
        }
    ];

    return (
        <div className="grid sm:grid-cols-12 md:grid-cols-12 gap-7 max-w-[1300px] mx-auto mb-16">
            { items.map(item =>
                <div key={item.id} className="sm:col-span-12 md:col-span-4 rounded-3xl p-4 bg-[#F5F5F7]">
                    <p className="text-[#E26020] font-semibold text-lg px-5 py-2 min-h-20 leading-[5rem] text-center bg-white rounded-2xl">
                        {item.title}
                    </p>
                    <p className="text-center text-sm max-w-[300px] mx-auto my-6">{item.description}</p>
                </div>
            )}
        </div>
    );
}