import { useSwiper } from "swiper/react";

export default function SlideNextButton({ slide }) {
    const swiper = useSwiper();

    return (
        <button
            className={`relative ${
                slide === 4 ? "opacity-40" : "bg-primary"
            } rounded-full  lg:p-[2rem] p-[1.5rem]   xl:p-[2.5rem] outline-4 border-[0.25rem] border-primary md:w-full`}
            onClick={() => {
                swiper.slideNext();
            }}
        >
            <img
                src="assets/icons/arr-right.png"
                alt="Next"
                className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] md:h-[10px] lg:w-[30px] lg:h-[20px] xl:w-[40px] xl:h-[30px]"
            />
        </button>
    );
}
