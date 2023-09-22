import HightLight from "./reusable/HightLight";
import SectionTitle from "./reusable/SectionTitle";
import Title from "./reusable/Title";
import Slider from "./story/Slider";

export default function Story() {
    return (
        <section className=" rounded-3xl  w-full mx-auto mt-[6.625rem] md:pb-0 bg-tertiary">
            <div className={"text-center pt-[4rem] w-10/12 mx-auto"}>
                <Title className={"text-2xl"}>
                    Câu chuyện ra đời của M4YOU
                </Title>
                <SectionTitle className={"text-center mt-[1rem] lg:text-2xl text-base "}>
                    <HightLight>
                        Nghĩ lớn - Làm nhỏ | Từ nhỏ - Đến Lớn | Tư duy - Tiền bạc
                    </HightLight>
                </SectionTitle>
            </div>
            <Slider />
        </section>
    );
}
