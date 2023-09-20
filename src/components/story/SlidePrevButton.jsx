import { useSwiper } from "swiper/react";

export default function SlidePrevButton({ slide }) {
    const swiper = useSwiper();

    return (
        <button onClick={() => swiper.slidePrev()}>
            <img
                src="assets/icons/arr-left.png"
                alt="Prev"
                className={`rounded-full  p-[1.25rem_0.9375rem] ${
                    slide === 0 ? "opacity-40" : "bg-primary"
                } outline-4 border-[0.25rem] border-primary`}
            />
        </button>
    );
}
