import Title from "./reusable/Title";
import HightLight from "./reusable/HightLight";
import Button from "./reusable/Button";
export default function Overview() {
    return (
        <section className=" grid md:grid-cols-2 mt-[4rem] mb-[6rem] grid-cols-1 px-4 lg:px-[1rem] xl:my-24 lg:mt-[9rem] lg:mb-[12rem] md:mt-[4rem] md:mb-[2rem] text-base lg:text-xl md:justify-between">
            <div className="">
                <p className="text-[#494646]">Welcome to M4you</p>
                <Title className={"mt-2"}>
                    Làm sao để phát triển <p>tài chính cá nhân</p>
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
