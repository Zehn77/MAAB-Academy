import { v4 as uuidv4 } from 'uuid';
import { MdKeyboardArrowDown } from "react-icons/md";

export default function CommonQuestions() {

    const data = {
        title: `Ko‘p so‘ralgan savollar`,
        desctiption: `Прежде чем брать студентов на наши курсы для начинающих, мы проверяем их навыки английского языка, математики и решения задач.`,
    };

    const questions = [
        {
            title: `Bu sohada mening bilimim va tajriba yo’q. Darslarni o’zlashtirishda  menda qiyinchiliklar bo’lmaydimi?`,
            definition: `Raqamli ma'lumotlar hajmi o'sishda davom etar ekan, qaror qabul qilish jarayonlari murakkablashmoqda. Aynan shu yerda biznes tahlili (business intelligence) texnologiyalari, ma'lumotlarni qidirish, bashoratli tahlillar va boshqa vositalar juda foydali bo'lishi mumkin.`,
            id: uuidv4(),
        },
        {
            title: `Kurs tugatkandan so’ng sertifikat beriladimi?`,
            definition: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus ea quasi, alias veniam ex, cumque veritatis repellat accusamus, et voluptate rem! Corrupti quae quas, qui ex necessitatibus nobis natus exercitationem!`,
            id: uuidv4(),

        },
        {
            title: `Dasturlash foundation kursini boshlashdan oldin nimalarni bilish kerak?`,
            definition: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus ea quasi, alias veniam ex, cumque veritatis repellat accusamus, et voluptate rem! Corrupti quae quas, qui ex necessitatibus nobis natus exercitationem!`,
            id: uuidv4(),
        },
        {
            title: `Kursdan foyda olmasam, pulim qaytarib beriladimi?`,
            definition: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus ea quasi, alias veniam ex, cumque veritatis repellat accusamus, et voluptate rem! Corrupti quae quas, qui ex necessitatibus nobis natus exercitationem!`,
            id: uuidv4(),
        },
        {
            title: `Dasturlash foundation kursini bitirib o’quvchi qanday ko’nikmalarga ega bo’lishi kerak?`,
            definition: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus ea quasi, alias veniam ex, cumque veritatis repellat accusamus, et voluptate rem! Corrupti quae quas, qui ex necessitatibus nobis natus exercitationem!`,
            id: uuidv4(),
        },
        {
            title: `kursni sotib olsam, undan doim foydalana olamanmi?`,
            definition: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus ea quasi, alias veniam ex, cumque veritatis repellat accusamus, et voluptate rem! Corrupti quae quas, qui ex necessitatibus nobis natus exercitationem!`,
            id: uuidv4(),
        },
        {
            title: `Kursda o’qish ucun kompyuterim bo’lishi kerakmi?`,
            definition: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus ea quasi, alias veniam ex, cumque veritatis repellat accusamus, et voluptate rem! Corrupti quae quas, qui ex necessitatibus nobis natus exercitationem!`,
            id: uuidv4(),
        }
    ];

    return (
        <div className="bg-[#F5F5F7] p-10">
            <p className='md:text-3xl text-2xl font-bold text-center '>
                {data.title}
            </p>
            <p className='text-center my-3 max-w-[800px] mx-auto text-[#5D5D5F] md:text-base text-sm'>
                {data.desctiption}
            </p>
            <div className='grid grid-cols-1 max-w-[1200px] mx-auto sm:grid-cols-2 gap-4 p-6'>
                {questions.map(item => 
                    <div key={item.id} className='bg-white border-[0.5px] border-gray-200 relative p-5 rounded-2xl cursor-pointer group hover:border-b-0'>
                        <div className='flex font-semibold justify-between text-md text-[#353437]'>
                            <p className='w-11/12 '>{item.title}</p>
                            <MdKeyboardArrowDown className='h-7 min-w-7 w-1/12 group-hover:rotate-180 transform transition duration-300' />
                        </div>
                        <p className={`font-normal absolute bg-white px-5 left-0 rounded-bl-2xl border-t-0 pb-5 rounded-br-2xl right-0 z-10 hidden group-hover:block text-sm text-[#5D5D5F] mt-3 border-[0.5px] border-gray-200`}>
                            {item.definition}
                        </p>

                    </div>
                )}
            </div>
        </div>
    );
}