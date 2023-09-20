import Button from "./reusable/Button";
import Title from "./reusable/Title";
export default function Recap() {
    return (
        <section className="w-10/12 mx-auto flex mt-[4rem]">
            <div className="flex flex-col  justify-center gap-y-[1.3125rem]">
                <Title>
                    <p>Ứng dụng M4YOU</p> sẽ sớm ra mắt
                </Title>
                <p>Để lại email để nhận thông tin sớm nhất từ chúng tôi</p>
                <form className="flex justify-between">
                    <input
                        className="border-2 p-[1.375rem_1.75rem] rounded-[1rem] outline-primary"
                        placeholder={"Your email here"}
                    />
                    <Button>Submit</Button>
                </form>
            </div>
            <img src="src/assets/images/iphone.png" loading="lazy" alt="Iphone" />
        </section>
    );
}
