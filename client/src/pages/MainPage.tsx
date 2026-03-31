import HeroSection from "../components/HeroSection";

export default function MainPage() {
    return(
        <>
            <div className="flex flex-col max-w-[880px] my-10 mx-auto h-auto items-center">
               <HeroSection />
            </div>
        </>
    );
}