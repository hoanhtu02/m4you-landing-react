import Icon from "./reusable/Icon";
import SectionTitle from "./reusable/SectionTitle";

export default function Problem() {
    return (
        <section className="max-w-standard mx-auto  mb-20 lg:mt-52 md:mt-16 sm:p-[2.5rem] p-[2rem_1rem] flex flex-col md:grid grid-cols-2 xl:gap-[4rem]  bg-tertiary xl:rounded-[1.875rem] relative xl:shadow-md">
            <div>
                <Icon src={" assets/icons/ask.png"} alt="Ask icon" />
                <SectionTitle
                    className={
                        "xl:mt-[1.5rem] xl:mb-[0.875rem] lg:mt-[1.2rem]  lg:mb-[0.6rem] md:m-[1rem_0_.6rem] m-[.7rem_0_.4rem]"
                    }
                >
                    Bạn đang...
                </SectionTitle>
                <div className="xl:text-lg lg:text-lg-small text-base flex flex-wrap xl:gap-4 lg:gap-2 md:gap-2 gap-2 text-[#494646] xl:pr-[8rem] lg:pr-[7rem]">
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
                    src=" assets/images/confusing-4x.png"
                    alt="Confusing"
                />
            </div>
        </section>
    );
}
