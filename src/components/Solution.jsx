import Icon from "./reusable/Icon";
import Title from "./reusable/Title";
import SectionTitle from "./reusable/SectionTitle";
import List from "./reusable/List";
export default function Solution() {
    return (
        <section className="max-w-standard mx-auto  md:px-[1.8rem] xl:px-0 lg:mt-[6.875rem] md:mt-[2rem] lg:mb-20 md:mb-14 ">
            <Title className={"text-center mx-auto mb-[2.4rem]"}>
                <p>Tư duy và công cụ</p> <p>hỗ trợ tài chính cá nhân</p>
            </Title>
            <div className="flex flex-col gap-[2rem] md:grid xl:grid-cols-2 lg:grid-cols-[460px_1fr] md:grid-cols-[320px_1fr] items-center xl:gap-10 lg:gap-x-[2rem] md:gap-[1rem] justify-between">
                <img
                    loading="lazy"
                    className="xl:w-10/12 md:w-auto w-[20rem] xl:mx-0 mx-auto order-1 md:order-none"
                    src=" assets/images/graph.png"
                    alt="Graph"
                />
                <div className="md:rounded-[1.875rem] bg-tertiary  xl:shadow-md">
                    <div className="xl:p-[2.5rem_1.5rem] lg:p-[2rem] md:p-[1.2rem] sm:p-[1.2rem]  p-[2.5rem_1rem]">
                        <Icon
                            className={" md:w-[2.4rem] md:py-[11px] w-auto"}
                            src={" assets/icons/tips.png"}
                        />
                        <SectionTitle className={"xl:mt-2 lg:mt-[1rem] md:mt-4 mt-2"}>
                            M4U mang đến cho bạn
                        </SectionTitle>
                        <div className="xl:text-lg lg:text-lg-small md:text-base text-base mt-[.6rem] lg:mt-[.8rem] md:mt-2 leading-[24.38px]">
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
                                parentClass={"font-bold mt-[1.5rem] lg:mt-[.8rem] md:mt-[.8rem]"}
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
