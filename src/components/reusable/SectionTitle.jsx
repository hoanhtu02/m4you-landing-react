function SectionTitle({ className, children }) {
    className += " text-large font-bold";
    return <div className={className}>{children}</div>;
}

export default SectionTitle;
