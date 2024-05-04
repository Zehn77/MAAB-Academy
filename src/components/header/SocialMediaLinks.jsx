import { ImTelegram } from "react-icons/im";
import { Link } from 'react-router-dom';
import { PiInstagramLogoFill } from "react-icons/pi";
import { FaLinkedin } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";

export default function SocialMediaLinks() {
    return (
        <div className="flex gap-6 justify-end items-center">
            <Link >
                <ImTelegram className='text-[#9A999B] h-6 w-6' />
            </Link>
            <Link>
                <PiInstagramLogoFill className='text-[#9A999B] h-6 w-6'  />
            </Link>
            <Link>
                <FaLinkedin className='text-[#9A999B] h-6 w-6'  />
            </Link>
            <Link>
                <FaFacebook className=' text-[#9A999B] h-6 w-6'  />
            </Link>
      </div>
    );
}