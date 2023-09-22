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
        <section className="flex md:flex-row flex-col  justify-between mt-[4rem] md:mx-[2.5rem] mx-[1rem] gap-20">
            <div className="flex flex-col justify-center items-center sm:items-start gap-y-[1.3125rem] md:w-8/12">
                <Title className={"text-center sm:text-left"}>
                    <p>Ứng dụng M4YOU</p> sẽ sớm ra mắt
                </Title>
                <p className="xl:text-xl lg:text-lg text-base ">
                    Để lại email để nhận thông tin sớm nhất từ chúng tôi
                </p>
                <form
                    className="flex justify-between gap-7 text-lg md:w-full sm:w-8/12 w-full"
                    onSubmit={handleSubmit(function (data) {
                        data.landingPageType = "APP";
                        fetch("https://api-dev.vimoos.online/api/landing-page", {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json",
                            },
                            body: JSON.stringify(data),
                        }).then((response) => console.log(response));
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
                        className={`border-2 xl:p-[.6rem_1.75rem] lg:p-[.6rem_1.75rem] md:p-[.6rem_1.25rem] p-[.6rem_1.25rem] rounded-[.8rem] w-full ${
                            errors["email"] ? "outline-red-600" : "outline-primary"
                        }`}
                        placeholder={"Your email here"}
                    />
                    <Button isRedirect={false}>Submit</Button>
                </form>
            </div>
            <img
                src="assets/images/iphone.png"
                className="xl:w-[470px] lg:w-[400px] md:w-[250px] md:mt-0 mt-6 w-[300px] mx-auto"
                loading="lazy"
                alt="Iphone"
            />
        </section>
    );
}
