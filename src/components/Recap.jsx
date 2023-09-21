import Button from "./reusable/Button";
import Title from "./reusable/Title";
import { useForm } from "react-hook-form";
export default function Recap() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    return (
        <section className="w-11/12 md:w-10/12 3xl:w-8/12 4xl:w-6/12 5xl:w-3/12 mx-auto flex md:flex-row flex-col justify-evenly mt-[4rem]">
            <div className="flex flex-col  justify-center gap-y-[1.3125rem]">
                <Title>
                    <p>Ứng dụng M4YOU</p> sẽ sớm ra mắt
                </Title>
                <p className="xl:text-small lg:text-lg-small text-base">
                    Để lại email để nhận thông tin sớm nhất từ chúng tôi
                </p>
                <form
                    className="flex justify-between lg:gap-12 md:gap-20 text-base"
                    onSubmit={handleSubmit(function ({ email }) {
                        alert(email);
                    })}
                >
                    <input
                        {...register("email", {
                            required: "Please fill this fields",
                            pattern: {
                                value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g,
                                message: "Email is not valid.",
                            },
                        })}
                        required={true}
                        className={`border-2 xl:p-[1.375rem_1.75rem] lg:p-[.8rem_1.75rem] md:p-[.6rem_1.25rem] p-[.6rem_1.25rem]  rounded-[1rem] ${
                            errors["email"] ? "outline-red-600" : "outline-primary"
                        }`}
                        placeholder={"Your email here"}
                    />
                    <Button isRedirect={false}>Submit</Button>
                </form>
            </div>
            <img
                src="assets/images/iphone.png"
                className="xl:w-full lg:w-[400px] md:w-[250px] w-full md:mt-0 mt-6"
                loading="lazy"
                alt="Iphone"
            />
        </section>
    );
}
