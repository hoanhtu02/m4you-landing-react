function InnerContent({ index = 1, children }) {
    return (
        <div
            className={`grid grid-cols-[1fr_minmax(min-content,max-content)]  ${
                index === 1 ? "py-0" : " py-[3.125rem]"
            } grid-rows-1 gap-x-[6rem] px-[3.75rem]  bg-white rounded-[2.625rem] items-center justify-start h-full`}
            style={{ alignItems: index === 1 ? "end" : "center" }}
        >
            <div className={`text-justify text-small ${index === 1 ? " py-[3.125rem]" : ""}`}>
                {children}
            </div>
            <img
                src={`src/assets/images/slide-${index}.png`}
                className={`w-full`}
                alt={`Slider ${index}`}
            />
        </div>
    );
}

export default InnerContent;
