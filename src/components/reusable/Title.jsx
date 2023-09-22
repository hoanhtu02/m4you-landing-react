function Title({ className, children }) {
    return (
        <h1
            className={`${className} lg:text-5xl !leading-tight  md:text-3xl text-2xl font-bold`}
        >
            {children}
        </h1>
    );
}

export default Title;
