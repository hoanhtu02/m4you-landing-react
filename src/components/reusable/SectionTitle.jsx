function SectionTitle({ className, children }) {
    return (
        <div className={`${className} xl:text-2xl lg:text-2xl md:text-xl  text-xl font-bold`}>
            {children}
        </div>
    );
}

export default SectionTitle;
