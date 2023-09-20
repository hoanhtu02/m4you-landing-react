import Title from "./reusable/Title";
import HightLight from "./reusable/HightLight";
import Button from "./reusable/Button";
export default function Overview() {
    return (
        <section className="w-10/12 mx-auto grid grid-cols-2 py-[4rem] gap-x-[5.6875rem]">
            <div>
                <p className="mb-2 text-[#494646]">Welcome to M4you</p>
                <Title className={""}>Làm sao để phát triển tài chính cá nhân</Title>
            </div>
            <div className="text-[#8D8D8D]">
                <p>
                    Bạn muốn phát triển tài chính cá nhân, nhưng biết bắt đầu từ đâu và làm như thế
                    nào?
                </p>
                <p>
                    <HightLight>M4YOU</HightLight> mang đến cho bạn những{" "}
                    <HightLight>tư duy và công cụ hỗ trợ tài chính cá nhân.</HightLight>
                </p>
                <Button className={"mt-[2.625rem]"}>Miễn phí 2 năm</Button>
            </div>
        </section>
    );
}
