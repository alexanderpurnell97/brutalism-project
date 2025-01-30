import { CldImage } from 'next-cloudinary';

export default function QuoteOne() {

    return (
        <div className="overflow-x-auto h-screen w-[2500px] block">
                <div className="w-auto">
                    <CldImage
                        src="https://res.cloudinary.com/ddwodwpr5/image/upload/v1738170822/quoteone_d7ezjr.png"
                        width="587"
                        height="1024"
                        alt="Test"
                        crop={{
                            type: 'auto',
                            source: true
                        }}
                        className="w-auto h-full"
                    />
                </div>
                <div className="flex flex-col">
                    <div className="relative block">
                        <div
                            className="font-[family-name:var(--font-brutalism)] text-[17px] font-black tracking-[3px] text-[#404040] w-[587px] bg-[#f5f5f5] absolute bottom-[300px] p-12 ">
                            <p className="mb-5">
                                “Brutalism tries to face up to a mass-production society, and drag a rough poetry out of
                                the confused and powerful forces which are at work. Up to now Brutalism has been
                                discussed stylistically, whereas its essence is ethical.”
                            </p>
                            <p>
                                Alison &amp; Peter Smithson
                            </p>
                        </div>
                    </div>

                </div>

        </div>
    )

}