function Input({ register, type, className, placeholder, err, name }) {
    // console.log(err[name]);
    return (
        <>
            <label className={`${className} `}>
                <input
                    {...register}
                    className={`xl:rounded-[1rem] lg:rounded-[0.8rem] rounded-[0.4rem] xl:py-[1.0825rem] lg:py-[0.8rem] xl:px-[2.75rem] lg:px-[2rem] md:px-[1.5rem] md:py-[.5rem]] px-[1rem] py-[0.5rem] ${
                        err[name] ? "outline-red-600" : "outline-primary"
                    } w-full `}
                    placeholder={placeholder}
                    type={type}
                />
                {err[name] ? (
                    <span
                        className={`text-red-600 font-[400] lg:text-[0.65rem] xl:text-[0.85rem]  text-[0.85rem]`}
                    >
                        {err[name].message}
                    </span>
                ) : (
                    ""
                )}
            </label>
        </>
    );
}

export default Input;
