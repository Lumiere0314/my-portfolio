import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import TechStackSection from "../components/TeckStackSection";
import EducationSection from "../components/EducationSection";

export default function MainPage() {
    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-[1fr_280px] gap-x-3 max-w-[880px] my-10 mx-auto h-auto">

                <div className="order-1 col-span-2 mb-5">
                    <HeroSection />
                </div>

                <div className="flex flex-col gap-y-3 order-2">
                    <AboutSection />
                    <TechStackSection />
                </div>

                
                <div className="flex flex-col gap-y-3 order-3">
                    <EducationSection />
                    <h1>hi</h1>
                </div>

            </div>
        </>
    );
}