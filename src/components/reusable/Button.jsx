import { scroller } from "react-scroll";
function Button({ children, className, isRedirect = true }) {
    className += " rounded-[4.375rem] bg-primary py-[1.375rem] px-[3.3125rem] font-bold text-black";
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
            className={className}
        >
            {children}
        </button>
    );
}

export default Button;
