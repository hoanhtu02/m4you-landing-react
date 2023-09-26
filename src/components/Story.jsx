import HightLight from "./reusable/HightLight";
import SectionTitle from "./reusable/SectionTitle";
import Title from "./reusable/Title";
import Slider from "./story/Slider";

export default function Story() {
    return (
        <section className="max-w-[1535px] w-full xl:rounded-[30px] mx-auto mt-[6.625rem] md:pb-0 bg-tertiary">
            <div className="rounded-3xl">
                <div className={"text-center pt-[3rem] w-10/12 mx-auto"}>
                    <Title className={"text-2xl"}>Câu chuyện ra đời của M4YOU</Title>
                    <SectionTitle className={"text-center mt-[1rem] lg:text-2xl text-base "}>
                        <HightLight>
                            Nghĩ lớn - Làm nhỏ | Từ nhỏ - Đến Lớn | Tư duy - Tiền bạc
                        </HightLight>
                    </SectionTitle>
                </div>
                <Slider />
            </div>
        </section>
    );
}
