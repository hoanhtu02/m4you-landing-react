function Button({ children, className }) {
    className += " rounded-[4.375rem] bg-primary py-[1.375rem] px-[3.3125rem] font-bold text-black";
    return (
        <button type="submit" className={className}>
            {children}
        </button>
    );
}

export default Button;
