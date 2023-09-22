import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import SlideNextButton from "./SlideNextButton";
import SlidePrevButton from "./SlidePrevButton";
import InnerContent from "./InnerContent";
import { useState } from "react";
function Slider() {
    const [index, setIndex] = useState(0);
    return (
        <Swiper
            modules={[FreeMode]}
            spaceBetween={40}
            slidesPerView={1.4}
            breakpoints={{
                0: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                },
                362:{
                    slidesPerView: 1.1,
                    spaceBetween: 20,

                },
                768: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                },
                1025: {
                    slidesPerView: 1.3,
                    spaceBetween: 40,
                },
                1100: {
                    slidesPerView: 1.5,
                    spaceBetween: 40,
                },
                1280: {
                    slidesPerView: 1.4,
                    spaceBetween: 40,
                },
            }}
            onSlideChange={(swiper) => setIndex(swiper.activeIndex)}
            // onSwiper={(swiper) => console.log(swiper)}
        >
            <SwiperSlide style={{ borderRadius: "2.625rem" }}>
                <InnerContent index={1} key={1}>
                    <p className="xl:text-medium lg:!text-lg-medium text-base font-bold">
                        Mỗi người chúng ta đều mong muốn phát triển cuộc sống tài chính cá nhân của
                        mình.
                    </p>{" "}
                    <p className="xl:text-small lg:text-lg-small text-sm !leading-6">
                        &nbsp;Mỗi người sẽ có những lựa chọn, cách làm khác nhau. Có người tập trung
                        vào việc phát triển sự nghiệp, leo lên các bậc thang cao hơn để đạt được thu
                        nhập tốt hơn. Có người đầu tư vào thị trường chứng khoán để tạo thêm nguồn
                        thu nhập theo thời gian. Có người mua bất động sản để tạo ra dòng tiền cho
                        thuê hàng tháng hoặc bán tài sản với giá cao trong tương lai. Có người hợp
                        tác với người khác để tìm kiếm cơ hội kinh doanh, và cũng có người xây dựng
                        doanh nghiệp riêng của họ.
                    </p>
                </InnerContent>
            </SwiperSlide>
            <SwiperSlide style={{ borderRadius: "2.625rem" }}>
                <InnerContent index={2} key={2}>
                    Bằng cách nào đi nữa, chúng ta đều mong muốn cải thiện tình hình tài chính của
                    bản thân, gia đình, và đóng góp cho xã hội.
                    <p className="">
                        Tuy nhiên, trong cuộc sống, chúng ta thường{" "}
                        <span className="font-bold">
                            {" "}
                            thiếu sự hướng dẫn, góc nhìn và kiến thức
                        </span>{" "}
                        để có thể đưa ra các quyết định tài chính thông minh và phù hợp với hoàn
                        cảnh của chúng ta.
                    </p>
                </InnerContent>
            </SwiperSlide>
            <SwiperSlide style={{ borderRadius: "2.625rem" }}>
                <InnerContent index={3} key={3}>
                    Đôi khi, qua các cuộc trò chuyện, bài viết trên mạng xã hội về một sự trải
                    nghiệm, chia sẻ hoặc câu chuyện truyền cảm hứng, chúng ta tìm thấy những góc
                    nhìn mới. Những người cùng có sự quan tâm, đồng cảm sẽ có sự kết nối với nhau.
                    <p className="">
                        Khi chúng ta{" "}
                        <span className="font-bold">kết nối với nhau và cùng chia sẻ</span> những
                        câu chuyện, những trải nghiệm sống, chúng ta có thêm những góc nhìn mới,
                        những kiến thức mới và cách làm mới{" "}
                        <span className="font-bold">
                            để giải quyết một vấn đề hoặc để đạt được mục tiêu về tài chính cá nhân.
                        </span>
                    </p>
                </InnerContent>
            </SwiperSlide>
            <SwiperSlide style={{ borderRadius: "2.625rem" }}>
                <InnerContent index={4} key={4}>
                    <p>
                        Từ sự kết nối và chia sẻ, chúng ta đúc kết những thông tin, kiến thức thành
                        những bài học và áp dụng vào cuộc sống tài chính cá nhân.
                    </p>{" "}
                    <span className="font-bold">
                        Chúng ta tìm kiếm những bài học liên quan, chúng ta tìm những công cụ hỗ
                        trợ, chúng ta làm và chúng ta trải nghiệm.
                    </span>{" "}
                    Những trải nghiệm quý giá ấy mang lại ý nghĩa lớn cho cuộc sống của chúng ta.
                    Chúng ta mang những ý nghĩa ấy chia sẻ lại cho người thân, cho bạn bè và cộng
                    đồng để được trải nghiệm sâu sắc hơn và{" "}
                    <span className="font-bold">lan toả giá trị </span>
                    cho cộng đồng, xã hội.
                </InnerContent>
            </SwiperSlide>
            <SwiperSlide style={{ borderRadius: "2.625rem" }}>
                <InnerContent index={5} key={5}>
                    <p>
                        Là bậc làm cha mẹ, đặc biệt có con trẻ từ 5 tuổi trở lên, chúng ta luôn mong
                        muốn dạy cho con những tư duy về tài chính để con có nền tảng trong tương
                        lai. Chúng ta học kiến thức, vận dụng vào cuộc sống tài chính cá nhân, cảm
                        nhận sâu sắc và dùng chính trải nghiệm ấy để dạy lại cho con qua những bài
                        học đơn giản nhất.
                    </p>{" "}
                    <span className="font-bold">
                        Chúng ta nghe, chúng ta thấy, chúng ta học, chúng ta làm, chúng ta trải
                        nghiệm và chúng ta chia sẻ
                    </span>{" "}
                    - đó chính là <span className="font-bold">Giá Trị Cốt Lõi M4You</span> mong muốn
                    xây dựng giúp Kết Nối và Chia Sẻ, mang lại Tư Duy và Công Cụ hỗ trợ tài chính cá
                    nhân cho cộng đồng.
                </InnerContent>
            </SwiperSlide>

            <div
                slot="container-end"
                className="m-[2.5rem_0_8rem] w-fit mx-auto md:flex flex-grow gap-10 hidden"
            >
                <SlidePrevButton slide={index} />
                <SlideNextButton slide={index} />
            </div>
        </Swiper>
    );
}

export default Slider;
