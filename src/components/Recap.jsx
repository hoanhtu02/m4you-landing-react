import { useState } from "react";
import Button from "./reusable/Button";
import Title from "./reusable/Title";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
export default function Recap({ onSubmitSuccess, onSubmitError }) {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitSuccessful },
    } = useForm();

    const [data, setData] = useState({});

    useEffect(() => {
        if (isSubmitSuccessful) {
            reset({
                email: "",
            });
        }
    }, [isSubmitSuccessful, reset]);
    useEffect(
        function () {
            async function sendMail() {
                try {
                    if (!isSubmitSuccessful) return;
                    // console.log(data);
                    const response = await fetch("https://api-dev.vimoos.online/landing-page", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify(data),
                    });
                    console.log(response);
                    // throw new Error();
                    onSubmitSuccess();
                } catch (err) {
                    onSubmitError();
                }
            }
            sendMail();
        },
        [data, isSubmitSuccessful]
    );
    return (
        <section className="max-w-standard mx-auto  flex md:flex-row flex-col  justify-between mt-[4rem] md:mx-[2.5rem]gap-20">
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
                        setData(() => {
                            return { ...data };
                        });
                        reset("", { keepValues: false });
                    })}
                >
                    <input
                        {...register("email", {
                            required: "Vui lòng điền vào email của bạn",
                            pattern: {
                                value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g,
                                message: "Email không hợp lệ.",
                            },
                        })}
                        required={true}
                        className={`border-2 xl:p-[.6rem_1.75rem] lg:p-[.6rem_1.75rem] md:p-[.6rem_1.25rem] p-[.6rem_1.25rem] rounded-[.8rem] w-full ${
                            errors["email"] ? "outline-red-600" : "outline-primary"
                        }`}
                        placeholder={"Email của bạn"}
                    />
                    <Button isRedirect={false}>Submit</Button>
                </form>
                {errors["email"] ? (
                    <span className={`text-red-600 font-[400] text-[0.85rem] mt-[-10px] mr-auto`}>
                        {errors["email"].message}
                    </span>
                ) : (
                    ""
                )}
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
