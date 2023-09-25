import { useSwiper } from "swiper/react";

export default function SlidePrevButton({ slide }) {
    const swiper = useSwiper();
    return (
        <button
            className={`relative ${
                slide === 0 ? "opacity-40" : "bg-primary"
            } rounded-full  lg:p-[1.25rem_1.9375rem] p-[1.5rem_1.5rem] xl:p-[2rem] outline-4 border-[0.25rem] border-primary md:w-full`}
            onClick={() => swiper.slidePrev()}
        >
            <img
                src="assets/icons/arr-left.png"
                alt="Prev"
                className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] md:h-[10px] lg:w-[30px] lg:h-[20px] w-[17px]"
            />
        </button>
    );
}
