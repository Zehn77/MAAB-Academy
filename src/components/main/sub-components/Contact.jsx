import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { Link } from "react-router-dom";
import { MdOutlineArrowForward } from "react-icons/md";
import { useState } from "react";


export default function Contact() {

    const [logic, setLogic] = useState('');
    const [isOpenLogicSections, setIsOpenLogicSections] = useState(false);

    const handleLogicButton = () => {
        setIsOpenLogicSections(!isOpenLogicSections);
    }

    return (
        <form>
            <div className="grid grid-cols-1 sm:grid-cols-12 lg:grid-cols-12 gap-5 bg-[#F5F5F7] rounded-3xl p-8 max-w-[1300px] mx-auto">
                <div className="col-span-1 sm:col-span-5 lg:col-span-5">
                    <p className="font-semibold	text-xl md:text-2xl leading-10 md:w-8/12 w-11/12">MAAB Academy bilan BI kelajagingizni oching! Hozir roʻyxatdan oʻting!</p>
                    <p className="font-normal text-sm mt-3">Kirish imtihonimizni topshiring va Grant yutib olish imkoniyatiga ega bo&#39;ling</p>
                </div>
                <div className="col-span-1 sm:col-span-7 lg:col-span-7 bg-white rounded-2xl p-6">
                    <p className="text-md font-semibold mb-6">Kursga yozilish</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="col-span-1 sm:col-span-1">
                            <label htmlFor="name" className="text-md">Ismingiz</label>
                            <input type="text" id='name' className="my-2 block w-full font-normal bg-[#F5F5F7] h-10 rounded-xl outline-none px-4" placeholder="Abbos"  />
                        </div>
                        <div className="col-span-1 sm:col-span-1">
                            <label htmlFor="phone" className="text-md">Telefon raqamingiz</label>
                            <div className="w-full relative">
                                <input type="number" id='phone' className="my-2 block w-full font-normal bg-[#F5F5F7] h-10 rounded-xl outline-none px-4" placeholder="+998"  />
                                <div className="absolute w-10 h-8 right-1 bottom-1 top-1 bg-[#F5F5F7]	" />
                            </div>
                        </div>
                        <div className="col-span-1 sm:col-span-1">
                            <label htmlFor="english-lavel" className="text-md">Ingliz tili darajangiz</label>
                            <div className="w-full relative">
                                <input type="text" id='english-lavel' className="my-2 block w-full font-normal bg-[#F5F5F7] h-10 rounded-xl outline-none px-4" placeholder="Darajangiz"  />
                                <IoIosArrowDown className="absolute w-4 h-4 right-3 top-3" />
                            </div>
                        </div>
                        <div className="col-span-1 sm:col-span-1">
                            <label htmlFor="logic-thinking" className="text-md">Mantiqiy bilim darajangiz</label>
                            <div className="w-full relative cursor-pointe" onClick={handleLogicButton}>
                                <input type="text" id='logic-thinking' value={logic} className="caret-transparent cursor-pointer my-2 block readonly w-full font-normal bg-[#F5F5F7] h-10 rounded-xl outline-none px-4" placeholder="Bilim darajangiz"  />
                                { !isOpenLogicSections && <IoIosArrowDown className="absolute  w-4 h-4 right-3 top-3" /> }
                                { isOpenLogicSections && <IoIosArrowUp className="absolute  w-4 h-4 right-3 top-3" /> }
                                { isOpenLogicSections && 
                                    <div className="absolute left-0 right-0 bg-white border rounded-xl">
                                        <button onClick={(e) => setLogic(e.target.textContent)} className="hover:bg-gray-100 w-full text-left rounded-t-xl p-4">Junior</button>
                                        <button onClick={(e) => setLogic(e.target.textContent)} className="hover:bg-gray-100 w-full text-left p-4">Middle</button>
                                        <button onClick={(e) => setLogic(e.target.textContent)} className="hover:bg-gray-100 w-full text-left p-4 rounded-b-xl">Senior</button>
                                    </div>
                                }
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-3  ">
                        <div className="flex items-start gap-3 p-5 col-span-2 w-11/12">
                            <input className="border-2 cursor-pointer border-[#C2C2C3] mt-[2px]" type='checkbox' />
                            <p className="text-xs text-[#353437]">
                                Arizani topshirish orqali siz shaxsiy mao&#39;lumotlaringizni <span className="cursor-pointer text-[#2868B2]">“Maxfiylik siyosati”</span>ga muvofiq qayta ishlashga rozilik bildirasiz
                            </p>
                        </div>
                        <div className="flex items-center justify-end">
                            <Link className="bg-[#236BF4] xs:bg-[#000] py-3 px-5 md:text-sm text-sm lg:text-md rounded-full text-white flex items-center justify-center gap-1">
                                Arizani jo&#39;natish
                                <MdOutlineArrowForward />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    );
}