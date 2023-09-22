import Form from "./reusable/Form";
import Icon from "./reusable/Icon";
import SectionTitle from "./reusable/SectionTitle";

export default function Survey() {
    return (
        <section
            name="surveyFormContainer"
            className="w-full mt-[6.875rem] xl:rounded-[1.875rem] bg-tertiary  xl:shadow-md"
        >
            <div className="md:p-[2rem] sm:p-[1rem]  ssm:p-[2rem_1rem]">
                <div className="grid lg:grid-cols-[1fr_28.125rem] md:grid-cols-[70%_1fr] sm:grid-cols-[70%_1fr] grid-cols-1 relative">
                    <div>
                        <div className="rounded-full overflow-hidden inline-block">
                            <Icon className={""} src={"assets/icons/stock.png"} />
                        </div>
                        <SectionTitle className={"leading-[2.44rem] mt-[.6rem]"}>
                            <p className="uppercase">mima mimo</p>
                            Làm sao để phát triển tài chính cá nhân?
                        </SectionTitle>
                        <p className="xl:text-small lg:text-lg-small text-base mt-[1rem] md:col-span-1 col-span-2">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tincidunt
                            ante felis, vel vehicula justo semper sed.
                        </p>
                    </div>
                    <img
                        className="absolute xl:top-[-75%] lg:top-[-50%] md:top-[-75%] md:right-[-4rem]  ssm:right-[-2rem] lg:right-0 lg:w-[15rem] md:w-[16rem] w-[9rem] top-[-5rem] right-0"
                        src="assets/images/flower.png"
                        alt="Flower"
                    />
                </div>
                <Form />
            </div>
        </section>
    );
}
