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
        <section className="w-10/12 mx-auto flex mt-[4rem]">
            <div className="flex flex-col  justify-center gap-y-[1.3125rem]">
                <Title>
                    <p>Ứng dụng M4YOU</p> sẽ sớm ra mắt
                </Title>
                <p>Để lại email để nhận thông tin sớm nhất từ chúng tôi</p>
                <form
                    className="flex justify-between"
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
                        className={`border-2 p-[1.375rem_1.75rem] rounded-[1rem] ${
                            errors["email"] ? "outline-red-600" : "outline-primary"
                        }`}
                        placeholder={"Your email here"}
                    />
                    <Button isRedirect={false}>Submit</Button>
                </form>
            </div>
            <img src="assets/images/iphone.png" loading="lazy" alt="Iphone" />
        </section>
    );
}
