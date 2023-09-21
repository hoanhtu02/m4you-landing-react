import HightLight from "./reusable/HightLight";
import SectionTitle from "./reusable/SectionTitle";
import Title from "./reusable/Title";
import Slider from "./story/Slider";

export default function Story() {
    return (
        <section className=" 3xl:overflow-hidden 3xl:w-8/12 4xl:w-6/12 5xl:w-3/12 w-full mx-auto mt-[6.625rem] md:pb-0 pb-[4rem] bg-tertiary">
            <div className={"text-center py-[4.94rem] w-10/12 mx-auto"}>
                <Title className={"text-2xl"}>
                    Câu chuyện ra đời của<p>M4YOU</p>
                </Title>
                <SectionTitle className={"text-center mt-[1rem] !text-base"}>
                    <HightLight>
                        Nghĩ lớn - Làm nhỏ | Từ nhỏ - Đến Lớn | Tư duy - Tiền bạc
                    </HightLight>
                </SectionTitle>
            </div>
            <Slider />
        </section>
    );
}
