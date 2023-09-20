import { useSwiper } from "swiper/react";

export default function SlideNextButton({ slide }) {
    const swiper = useSwiper();

    return (
        <button
            onClick={() => {
                swiper.slideNext();
            }}
        >
            <img
                src="assets/icons/arr-right.png"
                alt="Next"
                className={`rounded-full  p-[1.25rem_0.9375rem] ${
                    slide === 4 ? "opacity-40" : "bg-primary"
                } outline-4 border-[0.25rem] border-primary`}
            />
        </button>
    );
}
