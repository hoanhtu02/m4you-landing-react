import Icon from "./reusable/Icon";
import SectionTitle from "./reusable/SectionTitle";

export default function Problem() {
    return (
        <section className="w-10/12 mx-auto mt-[13.1875rem] p-[2.5rem] grid grid-cols-2 gap-[4rem] bg-tertiary rounded-[1.875rem] relative shadow-md">
            <div>
                <Icon src={"src/assets/icons/ask.png"} alt="Ask icon" />
                <SectionTitle className={"mt-[1.5rem] mb-[0.875rem] "}>Bạn đang...</SectionTitle>
                <div className="text-small flex flex-wrap gap-4 text-[#494646] pr-[8rem]">
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
                    className="w-[50.5rem] absolute bottom-0 right-0"
                    src="src/assets/images/confusing.png"
                    alt="Confusing"
                />
            </div>
        </section>
    );
}
