import Icon from "./reusable/Icon";
import Title from "./reusable/Title";
import SectionTitle from "./reusable/SectionTitle";
import List from "./reusable/List";
export default function Solution() {
    return (
        <section className="w-full md:w-11/12 3xl:w-8/12 4xl:w-6/12 5xl:w-3/12 mx-auto mt-[6.875rem]">
            <Title className={"text-center w-11/12 mx-auto mb-[2.9375rem]"}>
                <p>Tư duy và công cụ</p> <p>hỗ trợ tài chính cá nhân</p>
            </Title>
            <div className="flex flex-col gap-[2rem] md:grid xl:grid-cols-2 lg:grid-cols-[420px_1fr] md:grid-cols-2 items-center xl:gap-x-[10.4175rem] lg:gap-x-[2rem] md:gap-[1rem]">
                <img
                    loading="lazy"
                    className="xl:h-[35.7075rem] md:w-auto w-[20rem] mx-auto"
                    src=" assets/images/graph.png"
                    alt="Graph"
                />
                <div className="md:rounded-[1.875rem] bg-tertiary  md:shadow-md">
                    <div className="xl:p-[2.5rem] lg:p-[2rem] md:p-[1.2rem] p-[1.2rem]">
                        <Icon
                            className={" md:w-[2.4rem] md:py-[11px] w-auto"}
                            src={" assets/icons/tips.png"}
                        />
                        <SectionTitle className={"xl:mt-[1.5rem] lg:mt-[1rem] md:mt-4 mt-2"}>
                            M4U mang đến cho bạn
                        </SectionTitle>
                        <div className="xl:text-small lg:text-lg-small md:text-base text-base mt-[.6rem] lg:mt-[1rem] md:mt-2">
                            <List
                                title={"Những tư duy, bài học được đúc kết từ trải nghiệm thực tế"}
                                list={[
                                    "Giúp bạn có thêm những góc nhìn và kiến thức mới.",
                                    "Giúp đưa ra nhiều đánh giá để có những lựa chọn phù hợp với bối cảnh của riêng mình.",
                                ]}
                                parentClass={"font-bold"}
                            />
                            <List
                                title={"Những công cụ được kết nối với nhau"}
                                parentClass={"font-bold mt-[1.5rem] lg:mt-[1rem] md:mt-[.8rem]"}
                                list={[
                                    "Giúp bạn hình dung được bức tranh tài chính của mình đang ở đâu.",
                                    "Giúp bạn lập kế hoạch sau khi trả lời câu hỏi Tôi muốn gì? tôi phải bắt đầu từ đâu? và làm như thế nào.",
                                    "Giúp bạn dạy con trẻ những tư duy về tài chính để con có nền tảng cho tương lai.",
                                ]}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
