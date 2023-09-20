import { useSwiper } from "swiper/react";

export default function SlidePrevButton({ slide }) {
    const swiper = useSwiper();

    return (
        <button onClick={() => swiper.slidePrev()}>
            <img
                src="src/assets/icons/arr-left.png"
                alt="Prev"
                className={`rounded-full  p-[20px_15px] ${
                    slide === 0 ? "opacity-40" : "bg-primary"
                } outline-4 border-[4px] border-primary`}
            />
        </button>
    );
}
