import { useEffect, useRef, useState } from "react";

type AboutSectionProps = {
    textRef: React.RefObject<HTMLParagraphElement | null>;
    isMoreThan5Lines: boolean;
}

export default function AboutSection({ textRef, isMoreThan5Lines }: AboutSectionProps) {

    return (
        <div className="dark-bg-container animate-fade-up shadow-xs-bottom p-4">
            <h1 className="dark:text-white text-lg font-semibold mb-3">About</h1>

            <p
                ref={textRef}
                className={`dark:text-white text-sm text-justify leading-relaxed ${isMoreThan5Lines ? "" : "pb-3"
                    }`}
            >
                I’m a BSIT student focused on web development, building projects to strengthen my understanding of both frontend and backend systems. I enjoy creating responsive and user-friendly interfaces, and I’m currently learning the MERN stack to develop full-stack applications.
            </p>
        </div>
    );
}