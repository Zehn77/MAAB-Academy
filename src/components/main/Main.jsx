import CommonQuestions from "./sub-components/CommonQuestions";
import Contact from "./sub-components/Contact";
import CourseDescription from "./sub-components/CourseDescription";
import CourseForStudents from "./sub-components/CourseForStudents";
import Courses from "./sub-components/Courses";
import IncomeExperts from "./sub-components/IncomeExperts";
import Scholarship from "./sub-components/Scholarship";
import VideoComponent from "./sub-components/VideoComponent";
import img from './../../assets/grant.png';

export default function Main() {
    const handleScroll = () => {
        const section = document.getElementById('targetSection');
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
    }

    return (
        <>
            <div className="px-4">
                <VideoComponent />
            </div>

            <div className="py-12 px-2 md:px-12">

                <CourseDescription />

                <CourseForStudents />

                <IncomeExperts />

                <Scholarship />

                <Courses />
            </div>

            <CommonQuestions />

            <div className="py-12 px-2 md:px-12">
                <Contact />
            </div>

            <div className="cursor-pointer fixed bottom-2 right-1 md:bottom-8 ms:right-8 w-44 h-44 z-20 " onClick={handleScroll}>
                <img src={img} alt="Fixed Image" />
            </div>
        </>
    );
}

