"use client";
import { CldImage } from "next-cloudinary";
import BretonBrut from "../app/components/breton-brut";
import Ethics from "../app/components/ethics";
import QuoteOne from "../app/components/quoteone";

import Lenis from "lenis";
import { useEffect, useRef } from "react";

import { motion } from 'framer-motion';

import  useScrollAnimation  from '../app/hooks/useScrollAnimation';



export default function Home() {
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const { container, x } = useScrollAnimation();

    useEffect(() => {
        const scrollContainer = scrollContainerRef.current;

        if (scrollContainer) {
            const lenis = new Lenis({
                orientation: 'horizontal',
                content: scrollContainer,
                gestureOrientation: "both"
            });

            function raf(time: number) {
                lenis.raf(time);
                requestAnimationFrame(raf);
            }
            requestAnimationFrame(raf);

        }
    }, []);

    return (
        <main className="h-screen bg-[#f5f5f5]">
            <div
                ref={scrollContainerRef}
                className="flex items-center h-full "
            >
                <div className="flex flex-col items-start px-10 pr-0 ml-10 font-[family-name:var(--font-brutalism)]">
                    <h1 className="tracking-[8px] leading-[1] text-center text-[#404040] font-black text-[128px] uppercase">
                        Bru<span className="block">tal</span><span>ism</span>
                    </h1>
                    <div className="w-[463px] block relative">
                        <h2 className="w-[278px] text-[#404040] leading-[.9] text-[48px] tracking-[2px] uppercase absolute z-10">
                            A Brief History
                        </h2>
                        <div className="w-[463px] h-[77px] bg-[#C2C2C2] z-0 mt-[2px]"/>
                    </div>
                    <h3 className="mt-2.5 text-[14px] italic text-[#404040]">
                        a project by alex purnell
                    </h3>
                </div>
                <CldImage
                    src="/pexels-olgalioncat-7245554_uvc6fv.jpg"
                    width="480"
                    height="720"
                    alt="Test"
                    crop={{
                        type: "auto",
                        source: true,
                    }}
                />
                <motion.div ref={container} style={{x}}
                            className="flex items-start justify-start  h-screen bg-[#f5f5f5] x">
                    <BretonBrut/>
                </motion.div>
                <motion.div ref={container} style={{x}}
                            className="flex items-start justify-start  h-screen bg-[#f5f5f5] x">
                    <Ethics/>
                </motion.div>
                <div className="items-start justify-start  h-screen bg-[#f5f5f5] x">
                    <QuoteOne />
                </div>



            </div>
        </main>
    );
}
