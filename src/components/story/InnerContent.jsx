function InnerContent({ index = 1, children }) {
    return (
        <div
            className={`md:shadow-sm grid xl:grid-cols-[1fr_minmax(min-content,max-content)] lg:grid-cols-[55%_1fr] md:grid-cols-[60%_1fr] md:grid-rows-none  grid-cols-1 ${
                index === 1 ? "pb-0" : " md:py-[1rem]"
            } grid-rows-1 xl:gap-x-[1rem] lg:gap-[1rem] xl:px-[3.75rem] lg:px-[2rem] md:px-[1.4rem]  p-[1.5rem]  bg-white md:rounded-[2.625rem]  ssm:rounded-[1.625rem] md:items-center md:justify-start h-full`}
        >
            <div
                className={`text-justify ${
                    index === 1 ? "xl:py-0 lg:py-[2rem]" : ""
                } xl:text-small lg:text-lg-small  sm:text-sm ssm:text-sm `}
            >
                {children}
            </div>
            <img
                src={`assets/images/slide-${index}.png`}
                className={`w-full`}
                style={{ alignSelf: index === 1 ? "end" : "center" }}
                alt={`Slider ${index}`}
            />
        </div>
    );
}

export default InnerContent;
