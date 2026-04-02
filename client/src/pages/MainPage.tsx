import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import TechStackSection from "../components/TeckStackSection";
import EducationSection from "../components/EducationSection";
import CertificateSection from "../components/CertificateSection";
import SocialLinkSection from "../components/SocialLinkSection";

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
                    <CertificateSection />
                </div>

                
                <div className="flex flex-col gap-y-3 order-3">
                    <EducationSection />
                    <SocialLinkSection />
                </div>

            </div>
        </>
    );
}