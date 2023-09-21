function Title({ className, children }) {
    return (
        <h1
            className={`${className} font-bold xl:text-slarge lg:text-lg-slarge lg:leading-[3.3rem]  xl:leading-[3.7rem] md:text-3xl text-3xl`}
        >
            {children}
        </h1>
    );
}

export default Title;
