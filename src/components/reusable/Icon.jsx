function Icon({ className, src, alt = "" }) {
    className += " rounded-full bg-primary py-[0.7925rem] px-[0.88375rem]";
    return <img className={className} src={src} alt={alt} />;
}

export default Icon;
