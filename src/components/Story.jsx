import HightLight from "./reusable/HightLight";
import SectionTitle from "./reusable/SectionTitle";
import Title from "./reusable/Title";
import Slider from "./story/Slider";

export default function Story() {
    return (
        <section className="mt-[6.625rem] bg-tertiary">
            <div className={"text-center py-[4.94rem]"}>
                <Title>
                    Câu chuyện ra đời của <p>M4YOU</p>
                </Title>
                <SectionTitle className={"text-center mt-[1rem]"}>
                    <HightLight>
                        Nghĩ lớn - Làm nhỏ | Từ nhỏ - Đến Lớn | Tư duy - Tiền bạc
                    </HightLight>
                </SectionTitle>
            </div>
            <div className="mb-40">
                <Slider />
            </div>
        </section>
    );
}
