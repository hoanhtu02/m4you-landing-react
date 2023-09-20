import Icon from "./reusable/Icon";
import Title from "./reusable/Title";
import SectionTitle from "./reusable/SectionTitle";
import List from "./reusable/List";
export default function Solution() {
    return (
        <section className="w-10/12 mx-auto mt-[6.875rem]">
            <Title className={"text-center w-6/12 mx-auto mb-[2.9375rem]"}>
                <p>Tư duy và công cụ</p> hỗ trợ tài chính cá nhân
            </Title>
            <div className="grid grid-cols-2 items-center gap-x-[10.4175rem]">
                <img
                    loading="lazy"
                    className="h-[35.7075rem] mx-auto"
                    src="src/assets/images/graph.png"
                    alt="Graph"
                />
                <div className="rounded-[1.875rem] bg-tertiary  shadow-md">
                    <div className="p-[2.5rem]">
                        <Icon src={"src/assets/icons/tips.png"} />
                        <SectionTitle className={"mt-[1.5rem]"}>M4U mang đến cho bạn</SectionTitle>
                        <div className="text-small mt-[1.5rem]">
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
                                parentClass={"font-bold mt-[1.5rem]"}
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
