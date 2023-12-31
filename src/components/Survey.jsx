import Form from "./reusable/Form";
import Icon from "./reusable/Icon";
import SectionTitle from "./reusable/SectionTitle";

export default function Survey({ onSubmitSuccess, onSubmitError }) {
    return (
        <section
            name="surveyFormContainer"
            className="max-w-standard mx-auto mt-[6.875rem] xl:pb-4 lg:pb-[3rem] md:pb-[2rem] pb-6 xl:rounded-[1.875rem] bg-tertiary  xl:shadow-md"
        >
            <div className="md:p-[2rem_2rem_1.5rem] sm:p-[1rem]  p-[2rem_1rem]">
                <div className="grid lg:grid-cols-[1fr_28.125rem] md:grid-cols-[70%_1fr] sm:grid-cols-[70%_1fr] grid-cols-1 relative">
                    <div>
                        <div className="rounded-full overflow-hidden inline-block">
                            <Icon className={""} src={"assets/icons/stock.png"} />
                        </div>
                        <SectionTitle
                            className={"md:leading-[2.44rem] md:mt-[.6rem] pr-24 md:pr-0"}
                        >
                            <p className="uppercase">mima mimo</p>
                            Làm sao để phát triển tài chính cá nhân?
                        </SectionTitle>
                        <p className="xl:text-small lg:text-lg-small text-base md:mt-[1rem] mt-3 md:col-span-1 col-span-2">
                            Bạn vui lòng chia sẻ giúp M4YOU một số thông tin để chúng tôi có thể
                            phục vụ bạn tốt nhất. Xin cảm ơn!
                        </p>
                    </div>
                    <img
                        className="absolute xl:top-[-60%] lg:top-[-50%] md:top-[-75%] md:right-[-1rem] right-[-1rem] lg:right-0 lg:w-[15rem] md:w-[16rem] w-[9rem] top-[-5rem]"
                        src="assets/images/flower.png"
                        alt="Flower"
                    />
                </div>
                <Form onSubmitSuccess={onSubmitSuccess} onSubmitError={onSubmitError} />
            </div>
        </section>
    );
}
