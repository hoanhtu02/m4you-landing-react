function SectionTitle({ className, children }) {
    return (
        <div className={`${className} xl:text-large lg:text-2xl md:text-xl  text-xl font-bold`}>
            {children}
        </div>
    );
}

export default SectionTitle;
