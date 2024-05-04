import { ImTelegram } from "react-icons/im";
import { Link } from 'react-router-dom';
import { PiInstagramLogoFill } from "react-icons/pi";
import { FaLinkedin } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";


export default function SocialMediaLinks() {
    return (
        <div className="flex gap-3 md:gap-6 items-center text-white">
            <Link>
                <FaLinkedin className=' h-6 w-6'  />
            </Link>
            <Link>
                <PiInstagramLogoFill className='h-6 w-6'  />
            </Link>
            <Link >
                <ImTelegram className='h-6 w-6' />
            </Link>
            <Link >
                <FaYoutube className='h-6 w-6'/>
            </Link>
            <Link>
                <FaFacebook className=' h-6 w-6'  />
            </Link>
      </div>
    );
}