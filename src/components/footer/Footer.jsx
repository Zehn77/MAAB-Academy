import logo from './../../assets/footer-logo.png';
import { GrLocation } from "react-icons/gr";
import { HiOutlineEnvelope } from "react-icons/hi2";
import { FiPhone } from "react-icons/fi";
import SocialMediaLinks from './SocialMediaLinks';
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer className="bg-[#0C081A] text-white md:px-16 px-6 py-10">
            <div className="grid gap-6 sm:grid-cols-12 md:grid-cols-12 lg:grid-cols-12 bg-[#1E1B2B] rounded-3xl p-10 min-h-[260px] max-w-[1300px] mx-auto">
                <div className='min-w-40 gap-4 flex flex-col justify-between sm:col-span-12  md:col-span-3 lg:col-span-3'>
                    <img className='w-full max-w-[200px]' src={logo} alt="MAAB Inovation" />
                    <p className='text-xl mt-4'>
                        +998 97 783 90 45
                    </p>
                    <SocialMediaLinks />
                </div>

                <div className='flex flex-col gap-4 justify-between sm:col-span-12 md:col-span-3 lg:col-span-3'>
                    <p className='font-medium text-lg'>
                        Kurslarimiz
                    </p>
                    <p className='text-sm'>
                        Data analytics
                    </p>
                    <p className='text-sm'>
                        Data engineer
                    </p>
                    <p className='text-sm'>
                        Cloud data engineering
                    </p>
                </div>

                <div className='flex flex-col gap-4 justify-between sm:col-span-12 md:col-span-2 lg:col-span-2'>
                    <p className='font-medium text-lg'>
                        Menyular
                    </p>
                    <p className='text-sm'>
                        Grantlar
                    </p>
                    <p className='text-sm'>
                        Sertifikatlarimiz
                    </p>
                    <p className='text-sm'>
                        Ustozlar
                    </p>
                </div>

                <div className='flex flex-col gap-4 justify-between sm:col-span-12 md:col-span-4 lg:col-span-4'>
                    <p className='font-medium text-lg'>Biz bilan bog’laning</p>
                    <div className='text-sm flex items-center justify-center gap-2'>
                        <GrLocation className='inline-block w-6 h-6 ' />
                        <span>Tashkent, Mirabad district, Oybeka, 18/1 ATRIUM Business Center on the 5th floor-1.</span>
                    </div>
                    <div className='text-sm flex gap-2 items-center'>
                        <HiOutlineEnvelope className='inline-block'/>
                        <span>info@maab.uz</span>
                    </div>
                    <div className='text-sm flex gap-2 items-center'>
                        <FiPhone className='inline-block' />
                        <span>+998 97 783 90 45</span>
                    </div>
                </div>
            </div>
            <div className='grid sm:grid-cols-4 gap-4 md:grid-cols-4 mt-7 text-sm font-light max-w-[1300px] mx-auto	'>
                <p className='sm:col-span-4 md:col-span-2 md:text-left text-center'>© 2023 MAAB INNOVATION</p>
                <div className='sm:col-span-4 md:col-span-2 flex justify-center md:justify-end'>
                    <div className='flex gap-4'>
                        <div className='flex gap-2'>
                            <span>Dizaynerlar:</span>
                            <span className='underline'>Mazmoon</span>
                        </div>
                        <div className="bg-[#5D5D5F] h-6 w-px"></div>
                        <div className='flex gap-2'>
                            <span>Dasturchilar:</span>
                            <Link to='https://t.me/jumaev_77' className='underline cursor-pointer hover:text-blue-300'>Zehniddin</Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}