import logo from './../../assets/logo.png';
import { FaPhoneAlt } from "react-icons/fa";
import SocialMediaLinks from './SocialMediaLinks';
import Languages from './Languages';

export default function Header() {
    return (
        <header className="max-w-[1300px] mx-auto pt-3 px-12 flex flex-col justify-center gap-2 mb-4">
            <div className='flex justify-end gap-5'>
                <SocialMediaLinks />
                <div className="bg-[#EBEBEB] h-6 w-px"></div>
                <Languages />
            </div>
            <div className='flex items-center justify-between mx-[-2rem]'>
                <img className='max-w-44 cursor-pointer' src={logo} alt="MAAB Logo" />
                <div className='flex md:flex-row flex-col gap-1 md:gap-4 items-center'>
                    <span className='text-[#FB5F12]  font-medium text-md'>+998 97 783 90 45</span>
                    <button className='bg-[#353437] text-white py-3 px-6 rounded-full flex items-center justify-center gap-3'>
                        <span className='md:text-ms text-xs font-medium'>Aloqada bo’ling</span>
                        <FaPhoneAlt className='inline md:w-4 md:h-4' />
                    </button>
                </div>
            </div>
      </header>
    );
}