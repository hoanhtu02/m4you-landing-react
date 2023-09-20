function Input({ register, type, className, placeholder, err, name }) {
    // console.log(err[name]);
    return (
        <>
            <label className={className ?? ""}>
                <input
                    {...register}
                    className={`rounded-[1rem] py-[1.0825rem] px-[2.75rem] ${
                        err[name] ? "outline-red-600" : "outline-primary"
                    } w-full `}
                    placeholder={placeholder}
                    type={type}
                />
                {err[name] ? (
                    <span className={`text-red-600 font-[400] text-[0.85rem]`}>
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
