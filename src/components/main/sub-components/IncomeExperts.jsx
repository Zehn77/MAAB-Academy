import { v4 as uuidv4 } from 'uuid';

export default function IncomeExperts() {

    const items = [
        {
            title: '2 000 000+',
            description: `Dunyo bo’ylab bo’sh ish o’rinlari`,
            id: uuidv4()
        },
        {
            title: `400$-2 000$+`,
            description: `O’zbekistondagi maoshlar`,
            id: uuidv4()
        },
        {
            title: `6 000$+`,
            description: `AQSHdagi boshlang’ich maoshlar`,
            id: uuidv4()
        }
    ];

    return (
        <div className="bg-[#F5F5F7] p-9 rounded-2xl max-w-[1300px] mx-auto">
            <p className="text-[#1460F2] text-center my-5 text-2xl font-bold">
                Bu mutaxassislarining daromadi qancha?
            </p>

            <div className="grid sm:grid-cols-12 md:grid-cols-12 gap-4">
            { items.map(item =>
                <div key={item.id} className="sm:col-span-12 md:col-span-4  border border-[#686868] p-4 px-5 min-h-20 min-w-48 my-3 bg-white rounded-2xl min-2">
                    <p className="text-[#E26020] font-semibold text-xl text-center">
                        {item.title}
                    </p>
                    <p className="text-center text-sm	">{item.description}</p>
                </div>
            )}
        </div>



        </div>
    );
}