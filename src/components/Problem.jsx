import Icon from "./reusable/Icon";
import SectionTitle from "./reusable/SectionTitle";

export default function Problem() {
    return (
        <section className="w-full md:w-11/12  3xl:w-8/12 4xl:w-6/12 5xl:w-3/12 mx-auto lg:mt-[13.1875rem]  md:mt-[7rem] p-[2.5rem] flex flex-col md:grid grid-cols-2 xl:gap-[4rem]  bg-tertiary md:rounded-[1.875rem] relative md:shadow-md">
            <div>
                <Icon src={" assets/icons/ask.png"} alt="Ask icon" />
                <SectionTitle
                    className={
                        "xl:mt-[1.5rem] xl:mb-[0.875rem] lg:mt-[1.2rem]  lg:mb-[0.6rem] md:m-[1rem_0_.6rem]"
                    }
                >
                    Bạn đang...
                </SectionTitle>
                <div className="xl:text-small lg:text-lg-small text-base flex flex-wrap xl:gap-4 lg:gap-2 md:gap-2 text-[#494646] xl:pr-[8rem] lg:pr-[7rem]">
                    <p>Bạn đã từng làm nhiều cách khác nhau để phát triển tài chính cả nhân.</p>
                    <p>Bạn thiếu người thầy, người dẫn dắt, thiếu những góc nhìn và kiến thức.</p>
                    <p>
                        Bạn chưa có những công cụ hỗ trợ tập trung để giúp bạn hình dung rõ ràng,
                        lập kế hoạch và đi đến mục tiêu tài chính cá nhân.
                    </p>
                </div>
            </div>
            <div>
                <img
                    loading="lazy"
                    className="w-[50.5rem] md:w-[24rem] xl:w-[45rem] lg:w-[37rem] md:absolute md:bottom-0 md:right-0"
                    src=" assets/images/confusing.png"
                    alt="Confusing"
                />
            </div>
        </section>
    );
}
