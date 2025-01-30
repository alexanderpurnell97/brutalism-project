import { CldImage } from 'next-cloudinary';
import { motion } from 'framer-motion';
import  useScrollAnimation  from '../hooks/useScrollAnimation';



export default function BretonBrut() {

    const { container, xi } = useScrollAnimation();


    return (
        <div className="overflow-x-auto w-[1500px] p-10 h-screen">
            <div className="block relative">
                <h2 className="z-10 block relative font-[family-name:var(-breton-brut.tsx-font-brutalism)] leading-[1] text-[#404040] font-black mb-8"> <span
                    className="flex "><span className="text-[128px] uppercase">Brutalism</span>
                <span className="flex flex-col leading-[1] tracking-[8px] justify-center ml-5 "> <span
                    className="text-[32px]">comes from</span> <span className="text-[32px] block">the French term</span> </span> </span>
                    <span className="text-[128px] uppercase tracking-[32px]">Beton Brut</span> <span
                        className="text-[32px] block tracking-[6px]">meaning <span
                        className="uppercase">Raw Concrete</span></span></h2>


                <motion.div ref={container} style={{ x: xi }} className="w-[1200px] bg-[#C2C2C2] mb-8 h-[53px] absolute top-[67%] left-[19px] z-0"></motion.div>


            </div>


            <div className="flex">
                <div className="font-[family-name:var(--font-brutalism)] text-[17px] font-black tracking-[3px] text-[#404040] mr-[90px] w-[552px]">
                    <div className="w-full h-[1px] bg-[#404040] mb-8"></div>
                    <p className="mb-5">
                        Characterised by its bold textures and unapologetic use of raw materials, brutalism embraces
                        honest construction to create forms that are both daring and deeply expressive.
                    </p>
                    <p>
                    In the aftermath of post-war Europe, the urgent need for housing to accommodate widespread displacement drove innovation. Architects turned to concrete, a material both affordable and durable to construct large-scale housing projects and reimagine living spaces in bold, inventive ways.
                    </p>
                </div>
                <CldImage
                    src="https://res.cloudinary.com/ddwodwpr5/image/upload/v1738085039/brutalism-2.png"
                    width="500"
                    height="371"
                    alt="Test"
                    crop={{
                        type: 'auto',
                        source: true
                    }}
                    className="w-[500px] h-[371px]"
                />


            </div>

        </div>
    )

}