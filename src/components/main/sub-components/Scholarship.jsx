import { Link } from "react-router-dom";
import img from './../../../assets/grant-section.png';

export default function Scholarship() {

    const title = `Grantni qo‘lga kiriting!`;
    const description = `MAAB Academyda biz eng yaxshi iqtidor egalariga oyiga 3+3 gacha grantlar taqdim etamiz. Agar siz o'zingizni iqtidorli deb hisoblasangiz va ingliz tilini mukammal bilsangiz, kirish imtihonida qatnashing! Bu sayohatingizni biz bilan boshlash imkoniyatidan foydalaning!`;
    const registerTitle = `Ro’yhatdan o’ting`;

    return (
        <div id="targetSection" className={` text-white p-8 md:p-14 rounded-[40px] my-10 max-w-[1300px] mx-auto bg-no-repeat bg-cover`} style={{backgroundImage: `url(${img})`}}>
            <p className="font-semibold	text-xl md:text-3xl ">{title}</p>
            <p className="mt-5 text-sm max-w-md">{description}</p>
            <Link className="inline-block mt-5 rounded-full border-2 py-2 px-4 font-normal	">{registerTitle}</Link>
        </div>
    );
}