import { CldImage } from 'next-cloudinary';
import { motion } from 'framer-motion';
import  useScrollAnimation  from '../hooks/useScrollAnimation';



export default function Ethics() {

    const { container, xi } = useScrollAnimation();
    return (
        <div className="overflow-x-auto w-[1500px] h-screen flex">
            <CldImage
                src="https://res.cloudinary.com/ddwodwpr5/image/upload/v1738163770/ethics_mifis0.png"
                width="506"
                height="1024"
                alt="Test"
                crop={{
                    type: 'auto',
                    source: true
                }}
                className="w-auto h-full"
            />

        <div className="flex flex-col">
            <div className="block relative">
                <h2 className="text-[128px] uppercase z-10 block relative font-[family-name:var(-breton-brut.tsx-font-brutalism)] leading-[1] text-[#404040] font-black mb-8 mt-8">Ethics &amp; <span className="block"> Brutalism</span> </h2>
            </div>
            <motion.div className="relative block" ref={container} style={{x: xi}}>
                <div
                    className="font-[family-name:var(--font-brutalism)] text-[17px] font-black tracking-[3px] text-[#404040] w-[1100px] bg-[#f5f5f5] absolute top-[15%] right-[-100px] p-12 ">
                    <p className="mb-5">
                        To many, the stark and unrefined appearance of raw concrete can seem harsh, even unsettling.
                        Often
                        dismissed by its detractors as an aesthetic blemish, brutalism remains misunderstood. Beneath
                        its
                        rugged façade, however, lies a profound and principled ethos, one that is frequently
                        overshadowed by
                        debates around its outward appearance.
                    </p>
                    <p className="mb-5">
                        Emerging from the ashes of post-war Europe, brutalism was not merely a stylistic response but a
                        pragmatic solution to a continent in ruins. Cities lay devastated, their infrastructure
                        shattered, and there arose an urgent need to rebuild. From this necessity sprang an
                        architectural movement that sought not only to house people but to foster communities.
                        Visionaries like Le Corbusier reimagined how people might live together, designing spaces that
                        encouraged connection and collective living.
                    </p>
                    <p>
                        Brutalist buildings were conceived with a communal spirit at their heart, reflecting the ideals
                        of reconstruction and social cohesion in a time of upheaval.
                    </p>
                </div>
            </motion.div>

        </div>

        </div>
    )

}