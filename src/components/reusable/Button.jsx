import { scroller } from "react-scroll";
function Button({ children, className, isRedirect = true }) {
    return (
        <button
            type="submit"
            onClick={() => {
                if (isRedirect)
                    scroller.scrollTo("surveyFormContainer", {
                        duration: 800,
                        delay: 0,
                        smooth: "easeInOutQuart",
                    });
            }}
            className={`${className} outline-none hover:bg-[#E0A700] text-base p-[.7rem_1.2rem] rounded-full bg-primary xl:py-[1.375rem] xl:px-[3.3125rem] lg:py-[1.1rem] lg:px-[3.1rem] lg:text-lg-medium md:text-xl md:py-[1rem] md:px-[2rem] xl:text-large font-bold text-black`}
        >
            {children}
        </button>
    );
}

export default Button;
