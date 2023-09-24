function InnerContent({ index = 1, children }) {
    return (
        <div
            className={`md:shadow-sm grid md:grid-cols-[57%_1fr] md:grid-rows-none  grid-cols-1 ${
                index === 1 ? "pb-0" : " md:py-[1rem]"
            } grid-rows-1 xl:gap-x-[2.4rem] lg:gap-[1rem] xl:pl-[3rem] xl:pr-[1rem] lg:px-[2rem] md:px-[1.4rem]  p-[1.5rem]  bg-white md:rounded-[2.625rem]  rounded-[1.625rem] md:items-center md:justify-start h-full`}
        >
            <div
                className={`text-justify ${
                    index === 1 ? "lg:pt-0 pt-[1rem] pb-[1.5rem]" : ""
                } xl:text-base lg:text-lg  sm:text-base text-sm `}
            >
                {children}
            </div>
            <img
                src={`assets/images/slide-${index}.png`}
                className={`md:w-auto ml-auto w-3/12`}
                style={{ alignSelf: index === 1 ? "end" : "center" }}
                alt={`Slider ${index}`}
            />
        </div>
    );
}

export default InnerContent;
