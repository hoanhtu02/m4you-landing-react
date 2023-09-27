import { scroller } from "react-scroll";
function Button({ children, className, isRedirect = true, onOpenModal, isPending = false }) {
    return (
        <button
            type={`${isPending ? "button" : "submit"}`}
            disabled={isPending}
            onClick={
                onOpenModal ??
                function () {
                    if (isRedirect)
                        scroller.scrollTo("surveyFormContainer", {
                            duration: 800,
                            delay: 0,
                            smooth: "easeInOutQuart",
                            offset: -55,
                        });
                }
            }
            className={`${className} outline-none hover:bg-[#E0A700] text-base p-[.7rem_1.2rem] rounded-full bg-primary xl:py-[1.2rem] xl:px-[3rem] lg:py-[1.1rem] lg:px-[3.1rem] lg:text-lg md:text-lg md:py-[1rem] md:px-[2rem] xl:text-xl font-bold text-black`}
        >
            {children}
        </button>
    );
}

export default Button;
