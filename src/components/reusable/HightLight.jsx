function HightLight({ children, className }) {
    className += " text-primary font-bold";
    return <span className={className}>{children}</span>;
}

export default HightLight;
