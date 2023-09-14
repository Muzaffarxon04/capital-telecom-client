import Image from "next/image"
import Connection from "./Connection"
export default function Features() {
    return (
        <section className="lg:h-[780px]">
            <Connection/>
            <div className="container  pt-[130px] mx-auto text-[#4F5665] flex items-center lg:justify-between flex-wrap justify-center text-center md:text-left">
                <div className="md:max-w-[430px] flex flex-col items-center md:items-start">
                    <h2 className="text-[#0B132A] text-[35px] font-[500]">We Provide Many Features You Can Use</h2>
                    <p className="text-[16px] my-[20px]">You can explore the features that we provide with fun and have their own functions each feature.</p>
                    <ul className="text-[14px] space-y-[15px] text-left mt-[30px]">
                        <li className=" relative pl-[34px]  before:bg-[url('/bx_bxs-check-circle.png')] before:w-[24px]  before:h-[24px] before:left-0 before:top-[-2px] before:absolute">Powerfull online protection.</li>
                        <li className=" relative pl-[34px]  before:bg-[url('/bx_bxs-check-circle.png')] before:w-[24px]  before:h-[24px] before:left-0 before:top-[-2px] before:absolute">Internet without borders.</li>
                        <li className=" relative pl-[34px]  before:bg-[url('/bx_bxs-check-circle.png')] before:w-[24px]  before:h-[24px] before:left-0 before:top-[-2px] before:absolute">Supercharged VPN</li>
                        <li className=" relative pl-[34px]  before:bg-[url('/bx_bxs-check-circle.png')] before:w-[24px]  before:h-[24px] before:left-0 before:top-[-2px] before:absolute">No specific time limits.</li>

                    </ul>
                </div>
                <div className="max-w-[508px] w-full box-border mt-[50px] md:mt-0">
                    <Image src="/Illustration.png" alt="img" className="max-w-[508px] w-full" width={500} height={400} />
                </div>
            </div>
        </section>
    )
}
