import Title from "./reusable/Title";
import HightLight from "./reusable/HightLight";
import Button from "./reusable/Button";
export default function Overview() {
    return (
        <section className="max-w-standard mx-auto grid xl:grid-cols-[49%_1fr] lg:grid-cols-[55%_1fr] md:grid-cols-[49%_1fr] mt-[1rem] mb-[6rem] grid-cols-1 md:px-[38px] px-4 xl:my-26 xl:px-0 lg:pl-[38px] lg:mt-[6rem] lg:mb-[18rem] md:mt-[4rem] md:mb-[2rem] xl:gap-20 lg:gap-0 md:gap-0 text-base xl:text-xl md:justify-between">
            <div className="">
                <p className="text-[#494646]">Chào mừng bạn đến với M4YOU!</p>
                <Title className={"mt-2"}>
                    Làm sao để phát triển <p>tài chính cá nhân?</p>
                </Title>
            </div>
            <div className="text-[#8D8D8D] lg:mt-0 mt-5">
                <div className="">
                    <p>
                        Bạn muốn phát triển tài chính cá nhân, nhưng biết bắt đầu từ đâu và làm như
                        thế nào?
                    </p>
                    <p>
                        <HightLight>M4YOU</HightLight> mang đến cho bạn những{" "}
                        <HightLight>tư duy và công cụ hỗ trợ tài chính cá nhân.</HightLight>
                    </p>
                </div>
                <Button className={"sm:mt-[4rem] mt-6"}>Miễn phí 2 năm</Button>
            </div>
        </section>
    );
}
