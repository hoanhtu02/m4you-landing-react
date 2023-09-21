import Title from "./reusable/Title";
import HightLight from "./reusable/HightLight";
import Button from "./reusable/Button";
export default function Overview() {
    return (
        <section className="w-11/12 md:w-11/12 3xl:w-8/12 4xl:w-6/12 5xl:w-3/12 mx-auto flex flex-col gap-10 md:grid grid-cols-2 py-[4rem] xl:pt-32 xl:gap-x-[5.6875rem] lg:gap-x-[3rem] md:gap-x-[1.4rem]">
            <div className=" xl:text-medium lg:text-lg-medium md:text-lg text-base">
                <p className="mb-2 text-[#494646]">Welcome to M4you</p>
                <Title className={""}>Làm sao để phát triển tài chính cá nhân</Title>
            </div>
            <div className="text-[#8D8D8D] ">
                <div className="xl:text-medium lg:text-lg-medium md:text-lg text-base">
                    <p>
                        Bạn muốn phát triển tài chính cá nhân, nhưng biết bắt đầu từ đâu và làm như
                        thế nào?
                    </p>
                    <p>
                        <HightLight>M4YOU</HightLight> mang đến cho bạn những{" "}
                        <HightLight>tư duy và công cụ hỗ trợ tài chính cá nhân.</HightLight>
                    </p>
                </div>
                <Button className={"mt-[2.625rem]"}>Miễn phí 2 năm</Button>
            </div>
        </section>
    );
}
