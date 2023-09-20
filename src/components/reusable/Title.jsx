function Title({ className, children }) {
    className += " font-bold text-[3rem]  leading-[3.7rem]";
    return <h1 className={className}>{children}</h1>;
}

export default Title;
