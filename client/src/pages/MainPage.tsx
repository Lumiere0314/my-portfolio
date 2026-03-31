import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";

export default function MainPage() {
    return(
        <>
            <div className="flex flex-col max-w-[880px] my-10 mx-auto h-auto">
               <HeroSection />
                
                <div className="flex">
                    <div>
                        <AboutSection />
                         <span className="bg-blue-100">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi aut qui sunt. Harum ducimus quidem quae temporibus iure distinctio magnam assumenda quo reiciendis cupiditate rerum, voluptatem excepturi commodi tempore tenetur.
                        </span>
                    </div>


                    <span className="max-w-[280px]">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi aut qui sunt. Harum ducimus quidem quae temporibus iure distinctio magnam assumenda quo reiciendis cupiditate rerum, voluptatem excepturi commodi tempore tenetur.
                    </span>
                </div>
            </div>
        </>
    );
}