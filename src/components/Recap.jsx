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
    const [isPending, setIsPending] = useState(false);
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
                    setIsPending(() => true);
                    // const API_DEV = "https://api-dev.vimoos.online/landing-page";
                    // const API_PRO = "https://api.vimoos.online/landing-page";
                    // const response = await fetch(API_PRO, {
                    //     method: "POST",
                    //     headers: {
                    //         "Content-Type": "application/json",
                    //     },
                    //     body: JSON.stringify(data),
                    // });
                    setIsPending(() => false);
                    // if (!response.ok) throw new Error();
                    // const result = await response.json();
                    // // console.log(result);
                    // if (!result.success) return onSubmitError(result.data.message);
                    onSubmitSuccess();
                    // throw new Error();
                } catch (err) {
                    onSubmitError();
                }
            }
            sendMail();
        },
        [data, isSubmitSuccessful]
    );
    return (
        <section className="max-w-standard mx-auto w-full flex md:flex-row flex-col justify-between mt-[4rem] lg:gap-16 gap-0 lg:mb-12">
            <div className="flex flex-col items-center xl:mt-32 lg:mt-24 md:mt-16 mt-0 md:items-start lg:gap-y-[2rem] gap-y-[1.3rem] lg:w-6/12 xl:px-0 md:px-8 px-4">
                <Title className={"text-center md:text-left"}>
                    <p>Ứng dụng M4YOU</p> sẽ sớm ra mắt
                </Title>
                <p className="xl:text-xl lg:text-lg text-base">
                    Để lại email để nhận thông tin sớm nhất từ chúng tôi
                </p>
                <form
                    className="grid grid-cols-[1fr_35%] justify-between sm:gap-7 gap-6 text-lg md:w-full w-full md:px-0 md:max-w-none max-w-md"
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
                    <Button isRedirect={false} isPending={isPending}>
                        {!isPending ? (
                            "Submit"
                        ) : (
                            <div>
                                <img
                                    src="assets/icons/loading.gif"
                                    alt="loading"
                                    className="block h-[25px] md:h-[27px] mx-auto"
                                />
                            </div>
                        )}
                    </Button>
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
                className="xl:w-[550px] lg:w-[450px] md:w-[350px] md:mt-0 mt-6 w-[320px] shrink-0 mx-auto xl:translate-x-[10%]"
                loading="lazy"
                alt="Iphone"
            />
        </section>
    );
}
