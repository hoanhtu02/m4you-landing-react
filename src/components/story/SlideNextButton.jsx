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
                src="src/assets/icons/arr-right.png"
                alt="Next"
                className={`rounded-full  p-[20px_15px] ${
                    slide === 4 ? "opacity-40" : "bg-primary"
                } outline-4 border-[4px] border-primary`}
            />
        </button>
    );
}
