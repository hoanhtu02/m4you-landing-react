import Form from "./reusable/Form";
import Icon from "./reusable/Icon";
import SectionTitle from "./reusable/SectionTitle";

export default function Survey() {
    return (
        <section className="w-10/12 mx-auto mt-[6.875rem] rounded-[1.875rem] bg-tertiary  shadow-md">
            <div className="p-[2.5rem]">
                <div className="grid grid-cols-[1fr_450px] relative">
                    <div>
                        <div className="rounded-full overflow-hidden inline-block">
                            <Icon
                                className={"rounded-none px-[0.5rem] py-[1.3rem]"}
                                src={"src/assets/icons/stock.png"}
                            />
                        </div>
                        <SectionTitle className={"leading-[2.44rem] mt-[.6rem]"}>
                            <p className="uppercase">mima mimo</p>
                            Làm sao để phát triển tài chính cá nhân?
                        </SectionTitle>
                        <p className="text-small mt-[1.5625rem]">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tincidunt
                            ante felis, vel vehicula justo semper sed.
                        </p>
                    </div>
                    <img
                        className="absolute top-[-56%] right-0"
                        src="src/assets/images/flower.png"
                        alt="Flower"
                    />
                </div>
                <Form />
            </div>
        </section>
    );
}
