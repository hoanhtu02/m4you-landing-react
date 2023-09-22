function Icon({ src, alt = "" }) {
    return (
        <p
            className={`relative inline-block bg-primary rounded-full xl:w-[40px] xl:h-[40px] lg:w-[45px] lg:h-[45px] w-[30px] h-[30px]`}
        >
            <img
                className={
                    "lg:w-[20px] md:w-[13px] w-[14px] absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]"
                }
                src={src}
                alt={alt}
            />
        </p>
    );
}

export default Icon;
